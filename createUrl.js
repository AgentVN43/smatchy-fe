function createStrapiUrl(baseUrl, route, fields, populate) {
  let url = `${baseUrl}${route}?`;

  // Hàm đệ quy để xây dựng chuỗi truy vấn Populate
  function buildQuery(obj, path = "populate") {
    let query = "";

    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;

      const value = obj[key];
      const currentPath = `${path}[${key}]`;

      // 1. Trường hợp: Xử lý khối 'on' cho Dynamic Zone
      if (key === "on" && typeof value === "object" && value !== null) {
        for (const componentName in value) {
          if (!value.hasOwnProperty(componentName)) continue;

          const compPopulate = value[componentName];
          const compPath = `${currentPath}[${componentName}][populate]`;

          // Tiếp tục đệ quy để populate các Relation/Media bên trong Component
          query += buildQuery(compPopulate, compPath);
        }
        continue;
      }

      // 2. Trường hợp: Lấy tất cả hoặc Populate đơn giản (populate[key]=* hoặc true)
      if (value === "*" || value === true) {
        query += `${currentPath}=${value === "*" ? "*" : "true"}&`;
      }
      // 3. Trường hợp: Lấy các trường cụ thể (fields[])
      else if (Array.isArray(value)) {
        value.forEach((field, index) => {
          // Nếu là mảng, áp dụng fields
          query += `${currentPath}[fields][${index}]=${field}&`;
        });
      }
      // 4. Trường hợp: Populate lồng nhau (tiếp tục đệ quy)
      else if (typeof value === "object" && value !== null) {
        const nestedQuery = buildQuery(value, `${currentPath}[populate]`);
        query += nestedQuery;
      }
    }
    return query;
  }

  // Thêm fields cấp cao nhất
  if (fields && Array.isArray(fields) && fields.length > 0) {
    fields.forEach((field, index) => {
      url += `fields[${index}]=${field}&`;
    });
  }

  // Thêm populate
  if (
    populate &&
    typeof populate === "object" &&
    Object.keys(populate).length > 0
  ) {
    url += buildQuery(populate);
  }

  // Loại bỏ ký tự '&' cuối cùng hoặc '?' nếu không có tham số nào
  return url.endsWith("?") ? url.slice(0, -1) : url.slice(0, -1);
}

const populateHomePage = {
  // Dynamic Zone 'blocks' - Sử dụng khối 'on' để nhắm mục tiêu
  blocks: {
    on: {
      "hero.image-text": {
        heading: ["heading"],
        sub_heading: ["ub_heading"],
      },
      "hero.title": {
        // Component 2
        title: ["title"], // Chỉ lấy title của Relation này
      },
    },
  },
};

const homeUrl = createStrapiUrl(
  "https://strapi.annk.info/api/",
  "home",
  ["locale", "title"],
  populateHomePage
);

console.log(homeUrl);

// hooks/useReorder.ts
import { useMemo } from "react";

/**
 * Hook đơn giản nhất để sắp xếp lại thứ tự theo ý muốn
 * @param data - Mảng dữ liệu từ API (bất kỳ loại nào)
 * @param orderArray - Mảng thứ tự mong muốn (có thể là index, slug, hoặc documentId)
 * @param idField - Field để mapping với orderArray ('index' | 'slug' | 'documentId')
 * @returns Mảng đã được sắp xếp đúng thứ tự
 *
 * @example
 * // Ví dụ 1: Dùng index
 * const sortedPosts = useReorder(posts, [2, 1, 3, 0], 'index');
 *
 * // Ví dụ 2: Dùng slug
 * const sortedPosts = useReorder(posts,
 *   ['privacy-policy', 'cookies', 'terms-of-use', 'legal-notices'],
 *   'slug'
 * );
 *
 * // Ví dụ 3: Dùng documentId
 * const sortedPosts = useReorder(posts,
 *   ['id1', 'id2', 'id3'],
 *   'documentId'
 * );
 */
export function useReorder<T extends Record<string, any>>(
  data: T[],
  orderArray: (number | string)[],
  idField: "index" | "slug" | "documentId" = "slug"
): T[] {
  return useMemo(() => {
    if (!data || data.length === 0) return [];
    if (!orderArray || orderArray.length === 0) return data;

    // Tạo Map để lookup nhanh
    const dataMap = new Map<string | number, T>();

    // Map data theo idField
    if (idField === "index") {
      data.forEach((item, index) => {
        dataMap.set(index, item);
      });
    } else {
      data.forEach((item) => {
        if (item[idField] !== undefined) {
          dataMap.set(item[idField], item);
        }
      });
    }

    // Build result theo thứ tự orderArray
    const result: T[] = [];

    for (const orderKey of orderArray) {
      const item = dataMap.get(orderKey);
      if (item) {
        result.push(item);
      }
    }

    return result;
  }, [data, orderArray, idField]);
}

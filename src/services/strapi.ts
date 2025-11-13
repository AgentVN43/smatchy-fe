// src/services/strapi.ts
import axios from "axios";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL || "https://strapi.annk.info/api";

const strapiApi = axios.create({
  baseURL: STRAPI_URL,
});

// Hàm tiện ích
const fetchStrapi = <T>(endpoint: string): Promise<T> =>
  strapiApi.get<{ data: T; meta: any }>(endpoint).then((res) => res.data.data);

// ──────── API ENDPOINTS ────────

// Định nghĩa kiểu rõ ràng (tốt hơn so với inline)
interface GlobalResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      header: any;
      footer: any;
    };
  };
}

interface HomeResponse {
  data: {
    id: number;
    attributes: {
      title: string;
      blocks: any[];
    };
  };
}

export const fetchGlobal = () =>
  fetchStrapi<GlobalResponse>("/global?populate=*");

export const fetchHome = () =>
  fetchStrapi<HomeResponse>("/home?populate[blocks][populate]=*");

export const fetchTeam = () =>
  fetchStrapi<any>("/teams?populate[team_members][populate]=image");

export const fetchInvestor = () =>
  fetchStrapi<any>("/investors?populate[banner]=*");

export const fetchEventList = () =>
  fetchStrapi<any>("/events?populate[thumbnail]=*");

export const fetchEventDetail = (slug: string) =>
  fetchStrapi<any>(
    `/events?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate[blocks][populate]=*`
  );

export const fetchContact = () => fetchStrapi<any>("/contact?populate=*");

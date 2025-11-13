// src/hooks/useGlobal.ts
import { useQuery } from "@tanstack/react-query";
import { fetchGlobal } from "../services/strapi";

export const useGlobal = () => {
  return useQuery({
    queryKey: ["global"],
    queryFn: fetchGlobal,
    staleTime: 10 * 60 * 1000, // 10 phút
  });
};

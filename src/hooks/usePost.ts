// hooks/usePost.ts

import { useQuery } from "@tanstack/react-query";
import {
  fetchCategories,
  fetchPost,
  fetchPostBySlug,
} from "../services/strapi";
import type { PostsResponse } from "../services/types/post";

/**
 * Custom hook để fetch posts từ Strapi
 * @param categories - Category slug hoặc array of slugs để filter
 * @param populate - Fields cần populate
 */
export const usePost = (
  categories?: string | string[],
  populate: string = "*"
) => {
  // Build query key
  const queryKey = categories
    ? ["posts", Array.isArray(categories) ? categories.join(",") : categories]
    : ["posts"];

  return useQuery<PostsResponse, Error>({
    queryKey,
    queryFn: () => fetchPost(categories, populate),
    staleTime: 1000 * 60 * 5, // 5 phút
    gcTime: 1000 * 60 * 30, // 30 phút
    retry: 3,
  });
};

/**
 * Hook cho single post by slug
 */
export const usePostBySlug = (slug: string) => {
  return useQuery<PostsResponse, Error>({
    queryKey: ["posts", slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 10, // 10 phút
  });
};

/**
 * Hook để fetch categories
 */
export const useCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 10 * 60 * 1000, // 10 phút
  });
};

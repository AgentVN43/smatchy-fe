// src/hooks/useHome.ts
import { useQuery } from '@tanstack/react-query';
import { fetchHome } from '../services/strapi';

export const useHome = () => {
  return useQuery({
    queryKey: ['home'],
    queryFn: fetchHome,
    staleTime: 5 * 60 * 1000,
  });
};
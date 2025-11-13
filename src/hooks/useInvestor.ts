// src/hooks/useInvestor.ts
import { useQuery } from '@tanstack/react-query';
import { fetchInvestor } from '../services/strapi';

export const useInvestor = () => {
  return useQuery({
    queryKey: ['investor'],
    queryFn: fetchInvestor,
  });
};
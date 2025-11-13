// src/hooks/useTeam.ts
import { useQuery } from '@tanstack/react-query';
import { fetchTeam } from '../services/strapi';

export const useTeam = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: fetchTeam,
  });
};
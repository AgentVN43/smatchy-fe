// src/hooks/useEvent.ts
import { useQuery } from '@tanstack/react-query';
import { fetchEventList } from '../services/strapi';

export const useEventList = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEventList,
  });
};
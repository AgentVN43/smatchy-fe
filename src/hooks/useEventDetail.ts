// src/hooks/useEventDetail.ts
import { useQuery } from '@tanstack/react-query';
import { fetchEventDetail } from '../services/strapi';

export const useEventDetail = (slug: string) => {
  return useQuery({
    queryKey: ['event', slug],
    queryFn: () => fetchEventDetail(slug),
    enabled: !!slug,
  });
};
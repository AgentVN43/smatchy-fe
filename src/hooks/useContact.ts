// src/hooks/useContact.ts
import { useQuery } from '@tanstack/react-query';
import { fetchContact } from '../services/strapi';

export const useContact = () => {
  return useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact,
  });
};
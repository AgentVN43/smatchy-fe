import { useQuery } from "@tanstack/react-query";
import { fetchInvestor, InvestorPopulateType } from "../services/strapi";
import type { IInvestorPage } from "../services/types/global";

export const useInvestor = (type: InvestorPopulateType = InvestorPopulateType.BASIC) => {
  return useQuery<IInvestorPage | null, Error>({
    queryKey: ["investor", type],
    queryFn: async () => {
      const data = await fetchInvestor(type);
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

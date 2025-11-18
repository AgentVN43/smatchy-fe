// src/hooks/useTeam.ts
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchTeam, fetchTeamMember } from "../services/strapi";
import type { Person, Team } from "../services/types/team";

export interface TeamData {
  teamMembers: Person[] | null;
  teamPage: Team | null;
}

export const useTeam = (): UseQueryResult<TeamData, Error> => {
  return useQuery<TeamData, Error>({
    queryKey: ["team"],
    queryFn: async () => {
      const [members, page] = await Promise.all([
        fetchTeamMember(),
        fetchTeam(),
      ]);
      return {
        teamMembers: members,
        teamPage: page,
      };
    },
    staleTime: 5 * 60 * 1000, // 5 phút
  });
};

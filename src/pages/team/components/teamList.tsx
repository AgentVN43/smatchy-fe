import type { TeamMember } from "../types";
import TeamCard from "./teamCard";

export default function TeamList({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  return (
    <div className="container relative z-50">
      <div className="grid grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            className={index === 0 || index === 2 ? "pt-20" : ""}
            key={index}
          >
            <TeamCard teamMember={member} />
          </div>
        ))}
      </div>
    </div>
  );
}

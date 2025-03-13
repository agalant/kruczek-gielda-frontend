"use client"

import { TeamMemberCard } from "./team-member-card"
import { useTeamMembers } from "@/hooks/use-team-members"

export function TeamMembersList() {
  const { data: members, isLoading } = useTeamMembers()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Członkowie zespołu ({members?.length || 0})</h2>
      <div className="space-y-4">
        {members?.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}


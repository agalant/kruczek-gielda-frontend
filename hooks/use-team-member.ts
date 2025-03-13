import type { TeamMember } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchTeamMember(id: string): Promise<TeamMember> {
  const response = await fetch(`/api/team/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch team member")
  }
  return response.json()
}

export function useTeamMember(id: string) {
  return useQuery({
    queryKey: ["teamMember", id],
    queryFn: () => fetchTeamMember(id),
  })
}


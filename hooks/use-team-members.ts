import type { TeamMember } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchTeamMembers(): Promise<TeamMember[]> {
  const response = await fetch("/api/team")
  if (!response.ok) {
    throw new Error("Failed to fetch team members")
  }
  return response.json()
}

export function useTeamMembers() {
  return useQuery({
    queryKey: ["teamMembers"],
    queryFn: fetchTeamMembers,
  })
}


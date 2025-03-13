import type { Profile } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchProfile(): Promise<Profile> {
  const response = await fetch("/api/profile")
  if (!response.ok) {
    throw new Error("Failed to fetch profile")
  }
  return response.json()
}

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  })
}


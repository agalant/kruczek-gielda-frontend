import type { AssignedCase } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchAssignedCases(): Promise<AssignedCase[]> {
  const response = await fetch("/api/assigned-cases")
  if (!response.ok) {
    throw new Error("Failed to fetch assigned cases")
  }
  return response.json()
}

export function useAssignedCases() {
  return useQuery({
    queryKey: ["assignedCases"],
    queryFn: fetchAssignedCases,
  })
}


import type { Applicant } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchApplicants(orderId: string): Promise<Applicant[]> {
  const response = await fetch(`/api/orders/${orderId}/applicants`)
  if (!response.ok) {
    throw new Error("Failed to fetch applicants")
  }
  return response.json()
}

export function useApplicants(orderId: string) {
  return useQuery({
    queryKey: ["applicants", orderId],
    queryFn: () => fetchApplicants(orderId),
  })
}


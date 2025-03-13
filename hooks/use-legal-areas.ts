import { useQuery } from "@tanstack/react-query"

interface LegalArea {
  id: string
  name: string
}

async function fetchLegalAreas(): Promise<LegalArea[]> {
  const response = await fetch("/api/legal-areas")
  if (!response.ok) {
    throw new Error("Failed to fetch legal areas")
  }
  return response.json()
}

export function useLegalAreas() {
  return useQuery({
    queryKey: ["legalAreas"],
    queryFn: fetchLegalAreas,
  })
}


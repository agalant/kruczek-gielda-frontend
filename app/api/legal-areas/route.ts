import { NextResponse } from "next/server"

const LEGAL_AREAS = [
  { id: "1", name: "Prawo pracy" },
  { id: "2", name: "Prawo gospodarcze" },
  { id: "3", name: "ESG" },
  { id: "4", name: "Prawo własności intelektualnej" },
  { id: "5", name: "Prawo administracyjne" },
  { id: "6", name: "Nieruchomości" },
  { id: "7", name: "Prawo korporacyjne" },
  { id: "8", name: "Inne" },
]

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(LEGAL_AREAS)
}


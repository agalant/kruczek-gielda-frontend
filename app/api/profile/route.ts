import type { Profile } from "@/types"
import { NextResponse } from "next/server"

// Mock profile data
const MOCK_PROFILE: Profile = {
  companyName: "Kancelaria Nowakowski i Wspólnicy",
  address: "ul. Przykładowa 123, 00-001 Warszawa",
  nip: "1234567890",
  krs: "0000123456",
  email: "kontakt@kancelaria.pl",
  phone: "+48 123 456 789",
  about: "Kancelaria prawna specjalizująca się w prawie gospodarczym i handlowym.",
  attachments: [],
  socialLink: "https://kancelaria.pl",
}

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(MOCK_PROFILE)
}

export async function POST(request: Request) {
  const formData = await request.formData()

  // Here you would typically save the data to your database
  // For now, we'll just return success

  return NextResponse.json({ success: true })
}


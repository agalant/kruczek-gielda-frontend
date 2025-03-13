import type { Applicant } from "@/types"
import { NextResponse } from "next/server"

const MOCK_APPLICANTS: Applicant[] = [
  {
    id: "1",
    name: "Kancelaria Nowakowski i Wspólnicy",
    avatar: "/placeholder.svg",
    completedCases: 3,
    proposedPrice: "12 000",
    timeAgo: "3 minuty temu",
  },
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return NextResponse.json(MOCK_APPLICANTS)
}


import type { TeamMember } from "@/types"
import { NextResponse } from "next/server"

const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Maciej Kajfusik",
    email: "maciej.kajfusik@kancelaria.pl",
    phone: "+48 123 456 789",
    role: "Administrator",
    roleId: "admin",
    status: "active",
    avatar: "/placeholder.svg?height=200&width=200",
    permissions: {
      cases: true,
      team: true,
      billing: true,
      settings: true,
    },
  },
  {
    id: "2",
    name: "Weronika Nowakowska",
    email: "weronika.nowakowska@kancelaria.pl",
    phone: "+48 987 654 321",
    role: "Prawnik",
    roleId: "lawyer",
    status: "active",
    avatar: "/placeholder.svg?height=200&width=200",
    permissions: {
      cases: true,
      team: false,
      billing: false,
      settings: false,
    },
  },
  {
    id: "3",
    name: "Anna Kowalska",
    email: "anna.kowalska@kancelaria.pl",
    role: "Asystent",
    roleId: "assistant",
    status: "inactive",
    avatar: "/placeholder.svg?height=200&width=200",
    permissions: {
      cases: true,
      team: false,
      billing: false,
      settings: false,
    },
  },
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return NextResponse.json(MOCK_TEAM_MEMBERS)
}


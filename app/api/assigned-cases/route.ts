import type { AssignedCase } from "@/types"
import { NextResponse } from "next/server"

const MOCK_CASES: AssignedCase[] = [
  {
    id: "1",
    title: "Spadek rodzinny...",
    date: "14.02.2024",
    assignee: "oczekuje na wybór",
    status: "WYBIERZ_OFERENTA",
    amount: "700,00",
  },
  {
    id: "2",
    title: "Spadek rodzinny...",
    date: "11.02.2024",
    assignee: "oczekuje na wybór",
    status: "TRWA_SKLADANIE_OFERT",
    amount: "700,00",
  },
  {
    id: "3",
    title: "Spadek rodzinny...",
    date: "13.01.2024",
    assignee: "Weronika Nowakowska",
    status: "W_TRAKCIE_PROWADZENIA",
    amount: "700,00",
  },
  {
    id: "4",
    title: "Spadek rodzinny...",
    date: "30.12.2023",
    assignee: null,
    status: "BRAK_APLIKACJI",
    amount: "700,00",
  },
  {
    id: "5",
    title: "Spadek rodzinny...",
    date: "29.12.2023",
    assignee: "Weronika Nowakowska",
    status: "ZAKONCZONA",
    amount: "700,00",
  },
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return NextResponse.json(MOCK_CASES)
}


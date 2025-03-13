import type { Order } from "@/types"
import { NextResponse } from "next/server"

// Mock orders data
const MOCK_ORDERS: Order[] = [
  {
    id: "1",
    title: "Założenie spółki z ograniczoną odpowiedzialnością",
    description:
      "Witam, potrzebuję pomocy w zakresie wszystkich czynności związanych z założeniem spółki. Szukam prawnika lub kancelarii.",
    category: "Prawo pracy",
    price: "12 000 -14 000",
    deadline: "10 grudzień 2024",
    applicants: 4,
    skills: ["sporządzanie umów", "kontakt z klientem"],
  },
  {
    id: "2",
    title: "Założenie spółki z ograniczoną odpowiedzialnością",
    description:
      "Witam, potrzebuję pomocy w zakresie wszystkich czynności związanych z założeniem spółki. Szukam prawnika lub kancelarii.",
    category: "Prawo pracy",
    price: "12 000 -14 000",
    deadline: "10 grudzień 2024",
    applicants: 4,
    skills: ["sporządzanie umów", "kontakt z klientem"],
  },
  {
    id: "3",
    title: "Założenie spółki z ograniczoną odpowiedzialnością",
    description:
      "Witam, potrzebuję pomocy w zakresie wszystkich czynności związanych z założeniem spółki. Szukam prawnika lub kancelarii.",
    category: "Prawo pracy",
    price: "12 000 -14 000",
    deadline: "10 grudzień 2024",
    applicants: 4,
    skills: ["sporządzanie umów", "kontakt z klientem"],
  },
]

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(MOCK_ORDERS)
}


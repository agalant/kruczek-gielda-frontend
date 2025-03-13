import type { Order } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchOrders(): Promise<Order[]> {
  const response = await fetch("/api/orders")
  if (!response.ok) {
    throw new Error("Failed to fetch orders")
  }
  return response.json()
}

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  })
}


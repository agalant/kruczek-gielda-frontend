import type { Order } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchOrder(id: string): Promise<Order> {
  const response = await fetch(`/api/orders/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch order")
  }
  return response.json()
}

export function useOrder(id: string) {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchOrder(id),
  })
}


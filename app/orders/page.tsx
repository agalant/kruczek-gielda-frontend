"use client"

import { OrderCard } from "./order-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useOrders } from "@/hooks/use-orders"
import { Search } from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  const { data: orders, isLoading } = useOrders()

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Giełda zleceń</h1>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/orders/add">+ Dodaj zlecenie</Link>
          </Button>
          <Button className="bg-[#10463f] text-white hover:bg-[#165f55]">
            <Search className="mr-2 h-4 w-4" /> Szukaj zleceń
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">wybierz z spośród 15 aktywnych zleceń.</p>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Input placeholder="Szukaj tytułu zlecenia" className="max-w-sm" />
        <Select defaultValue="date">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sortuj" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">daty dodania</SelectItem>
            <SelectItem value="price">ceny</SelectItem>
            <SelectItem value="offers">liczby ofert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {isLoading ? <div>Loading...</div> : orders?.map((order) => <OrderCard key={order.id} order={order} />)}
      </div>
    </div>
  )
}


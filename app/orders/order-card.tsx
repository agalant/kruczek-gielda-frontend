import { Card } from "@/components/ui/card"
import type { Order } from "@/types"
import { Calendar, Clock, FileText } from "lucide-react"
import Link from "next/link"

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            <Link href={`/orders/${order.id}`} className="hover:text-blue-600">
              {order.title}
            </Link>
          </h3>
          <p className="text-gray-600">{order.description}</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-400" />
              <span>{order.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>{order.deadline}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <span>{order.price} PLN</span>
            </div>
          </div>
        </div>
        <Link
          href={`/orders/${order.id}/apply`}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          24H NA APLIKACJĘ
        </Link>
      </div>
    </Card>
  )
}


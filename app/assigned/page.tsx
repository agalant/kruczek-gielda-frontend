"use client"

import { AssignedCasesTable } from "./assigned-cases-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export default function AssignedCasesPage() {
  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">Zlecone sprawy</h1>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Szukaj tytułu sprawy, kancelarii, adwokata" className="pl-10" />
          </div>
          <Button className="bg-[#10463f] text-white hover:bg-[#165f55]">Szukaj</Button>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm">
            Pokaż dla: Maciej Matusik
            <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      <AssignedCasesTable />
    </div>
  )
}


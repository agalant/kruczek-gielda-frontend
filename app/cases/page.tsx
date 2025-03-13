"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function CasesPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Prowadzone sprawy</h1>
        <div className="flex gap-4">
          <Button className="gap-2" asChild>
            <Link href="/cases/add">
              <Plus className="h-4 w-4" />
              Dodaj sprawę
            </Link>
          </Button>
          <Button className="bg-[#10463f] text-white hover:bg-[#165f55]">
            <Search className="mr-2 h-4 w-4" /> Szukaj
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <p className="text-center text-gray-500">Ta sekcja jest w trakcie budowy. Wkrótce będzie dostępna.</p>
      </Card>
    </div>
  )
}


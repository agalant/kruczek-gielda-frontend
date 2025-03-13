"use client"

import { TeamMembersList } from "./team-members-list"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Twój zespół</h1>
        <div className="flex gap-4">
          <Button className="gap-2" asChild>
            <Link href="/team/invite">
              <Plus className="h-4 w-4" />
              Dodaj członka zespołu
            </Link>
          </Button>
          <Button className="bg-[#10463f] text-white hover:bg-[#165f55]">
            <Search className="mr-2 h-4 w-4" /> Szukaj
          </Button>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Zarządzaj swoim zespołem</h2>
          <p className="text-sm text-gray-600">
            Dodawaj członków zespołu, przydzielaj role i zarządzaj uprawnieniami. Każdy członek zespołu będzie miał
            dostęp do systemu zgodnie z przydzielonymi uprawnieniami.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input placeholder="Szukaj członka zespołu" className="pl-10" />
          </div>
        </div>
      </Card>

      <TeamMembersList />
    </div>
  )
}


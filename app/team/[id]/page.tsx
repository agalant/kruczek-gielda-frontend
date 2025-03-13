"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useTeamMember } from "@/hooks/use-team-member"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function EditTeamMemberPage({
  params,
}: {
  params: { id: string }
}) {
  const { data: member, isLoading } = useTeamMember(params.id)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
  }

  if (isLoading) {
    return <div className="p-8">Loading...</div>
  }

  if (!member) {
    return <div className="p-8">Member not found</div>
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/team">
            <ArrowLeft className="h-4 w-4" />
            Wróć do zespołu
          </Link>
        </Button>
      </div>

      <Card className="max-w-2xl p-6">
        <h1 className="mb-6 text-2xl font-semibold">Edytuj członka zespołu</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Imię i nazwisko</Label>
              <Input id="name" defaultValue={member.name} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Adres email</Label>
              <Input id="email" type="email" defaultValue={member.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Numer telefonu</Label>
              <Input id="phone" defaultValue={member.phone || ""} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Rola</Label>
              <Select defaultValue={member.roleId}>
                <SelectTrigger id="role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="lawyer">Prawnik</SelectItem>
                  <SelectItem value="assistant">Asystent</SelectItem>
                  <SelectItem value="accountant">Księgowy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Uprawnienia</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="cases" className="text-base">
                    Zarządzanie sprawami
                  </Label>
                  <p className="text-sm text-gray-600">Może tworzyć, edytować i usuwać sprawy</p>
                </div>
                <Switch id="cases" defaultChecked={member.permissions.cases} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="team" className="text-base">
                    Zarządzanie zespołem
                  </Label>
                  <p className="text-sm text-gray-600">Może dodawać, edytować i usuwać członków zespołu</p>
                </div>
                <Switch id="team" defaultChecked={member.permissions.team} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="billing" className="text-base">
                    Zarządzanie płatnościami
                  </Label>
                  <p className="text-sm text-gray-600">Może wystawiać faktury i zarządzać płatnościami</p>
                </div>
                <Switch id="billing" defaultChecked={member.permissions.billing} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="settings" className="text-base">
                    Ustawienia kancelarii
                  </Label>
                  <p className="text-sm text-gray-600">Może zmieniać ustawienia kancelarii</p>
                </div>
                <Switch id="settings" defaultChecked={member.permissions.settings} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Switch id="status" defaultChecked={member.status === "active"} />
              <Label htmlFor="status">{member.status === "active" ? "Aktywny" : "Nieaktywny"}</Label>
            </div>

            <div className="flex gap-4">
              <Button type="button" variant="outline">
                Anuluj
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Zapisywanie..." : "Zapisz zmiany"}
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  )
}


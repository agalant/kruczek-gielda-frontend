"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function InviteTeamMemberPage() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="p-8">
        <Card className="mx-auto max-w-md p-6 text-center">
          <h1 className="mb-4 text-2xl font-semibold">Zaproszenie wysłane!</h1>
          <p className="mb-6 text-gray-600">
            Zaproszenie zostało wysłane na adres {email}. Użytkownik otrzyma instrukcje dotyczące dołączenia do zespołu.
          </p>
          <Button asChild>
            <Link href="/team">Wróć do zespołu</Link>
          </Button>
        </Card>
      </div>
    )
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

      <Card className="mx-auto max-w-md p-6">
        <h1 className="mb-6 text-2xl font-semibold">Zaproś członka zespołu</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Adres email</Label>
            <Input
              id="email"
              type="email"
              placeholder="np. jan.kowalski@firma.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Rola</Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger id="role">
                <SelectValue placeholder="Wybierz rolę" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="lawyer">Prawnik</SelectItem>
                <SelectItem value="assistant">Asystent</SelectItem>
                <SelectItem value="accountant">Księgowy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? "Wysyłanie..." : "Wyślij zaproszenie"}
          </Button>
        </form>
      </Card>
    </div>
  )
}


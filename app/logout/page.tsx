"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would call your logout API here
    const timer = setTimeout(() => {
      router.push("/")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="p-6 text-center">
        <h1 className="mb-4 text-2xl font-semibold">Wylogowywanie...</h1>
        <p className="mb-6 text-gray-600">Dziękujemy za korzystanie z naszego systemu.</p>
        <Button onClick={() => router.push("/")}>Powrót do strony głównej</Button>
      </Card>
    </div>
  )
}


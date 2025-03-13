"use client"

import { ProfileForm } from "./profile-form"
import { Card } from "@/components/ui/card"
import { useProfile } from "@/hooks/use-profile"

export default function ProfilePage() {
  const { data: profile, isLoading } = useProfile()

  if (isLoading) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <Card className="max-w-4xl">
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Profil kancelarii</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Uzupełnij dane -
            <span className="text-blue-600">
              udostępnione informacje zostaną automatycznie dodane do Twojej aplikacji
            </span>
          </p>
        </div>
        <ProfileForm initialData={profile} />
      </Card>
    </div>
  )
}


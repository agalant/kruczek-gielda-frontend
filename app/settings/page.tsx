"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-2xl font-semibold">Ustawienia</h1>

      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">Ogólne</TabsTrigger>
          <TabsTrigger value="notifications">Powiadomienia</TabsTrigger>
          <TabsTrigger value="security">Bezpieczeństwo</TabsTrigger>
          <TabsTrigger value="billing">Płatności</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="p-6">
            <p className="text-center text-gray-500">Ta sekcja jest w trakcie budowy. Wkrótce będzie dostępna.</p>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6">
            <p className="text-center text-gray-500">Ta sekcja jest w trakcie budowy. Wkrótce będzie dostępna.</p>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6">
            <p className="text-center text-gray-500">Ta sekcja jest w trakcie budowy. Wkrótce będzie dostępna.</p>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="p-6">
            <p className="text-center text-gray-500">Ta sekcja jest w trakcie budowy. Wkrótce będzie dostępna.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight, MoreVertical, Search } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8 flex justify-end gap-4">
        <Button className="bg-white text-[#303133] hover:bg-gray-50">
          <span className="mr-2">+</span> Dodaj zlecenie
        </Button>
        <Button className="bg-[#10463f] text-white hover:bg-[#165f55]">
          <Search className="mr-2 h-4 w-4" /> Szukaj zleceń
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-medium">Zlecenia</h2>
          <p className="mb-4 text-sm text-gray-600">Przeglądaj dostępne zlecenia i składaj oferty.</p>
          <Button asChild>
            <Link href="/orders">Przejdź do zleceń</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 text-lg font-medium">Prowadzone sprawy</h2>
          <p className="mb-4 text-sm text-gray-600">Zarządzaj sprawami, które obecnie prowadzisz.</p>
          <Button asChild>
            <Link href="/cases">Przejdź do spraw</Link>
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 text-lg font-medium">Zespół</h2>
          <p className="mb-4 text-sm text-gray-600">Zarządzaj członkami swojego zespołu.</p>
          <Button asChild>
            <Link href="/team">Przejdź do zespołu</Link>
          </Button>
        </Card>
      </div>

      <Card className="mb-8 mt-8 p-6">
        <h1 className="mb-2 text-2xl font-semibold">Witaj,</h1>
        <p className="text-gray-600">
          korzystasz z konta firmowego -{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Kancelaria Nowakowski i Wspólnicy!
          </Link>
        </p>
      </Card>

      <Card className="mb-8">
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-semibold">Profil Kancelarii</h2>
          <Button variant="outline" className="gap-2">
            Uzupełnij dane <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="px-6 pb-6">
          <div className="mb-4">
            <p className="mb-1 text-sm text-gray-500">Pełna nazwa firmy:</p>
            <p>Kancelaria Nowakowski i Wspólnicy</p>
          </div>
          <div className="mb-4">
            <p className="mb-1 text-sm text-gray-500">Adres:</p>
            <p>-</p>
          </div>
          <div className="mb-4">
            <p className="mb-1 text-sm text-gray-500">NIP:</p>
            <p>-</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-gray-500">KRS:</p>
            <p>-</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-semibold">Prowadzone sprawy</h2>
          <Button variant="outline" className="gap-2">
            Zobacz wszystkie <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tytuł</TableHead>
              <TableHead>Prawnik</TableHead>
              <TableHead>Klient</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Kwota</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <TableRow key={i}>
                  <TableCell>Spadek rodzinny...</TableCell>
                  <TableCell>adw. Maciej Kajfusik</TableCell>
                  <TableCell>Weronika Nowakowska</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        i === 0 || i === 1
                          ? "bg-blue-100 text-blue-700"
                          : i === 2
                            ? "bg-gray-100 text-gray-700"
                            : i === 3
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                      }`}
                    >
                      {i === 0 || i === 1
                        ? "OFERTA ROZPATRYWANA"
                        : i === 2
                          ? "ZAKOŃCZONA"
                          : i === 3
                            ? "W TRAKCIE PROWADZENIA"
                            : "OFERTA ODRZUCONA"}
                    </span>
                  </TableCell>
                  <TableCell>700,00 PLN</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}


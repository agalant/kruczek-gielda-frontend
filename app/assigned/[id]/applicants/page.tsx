"use client"

import { ApplicantCard } from "./applicant-card"
import { Button } from "@/components/ui/button"
import { useApplicants } from "@/hooks/use-applicants"
import { useOrder } from "@/hooks/use-order"
import { Calendar, FileText, Wallet, X } from "lucide-react"
import Link from "next/link"

export default function ApplicantsPage({
  params,
}: {
  params: { id: string }
}) {
  const { data: order } = useOrder(params.id)
  const { data: applicants } = useApplicants(params.id)

  if (!order) return null

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-blue-600">Wybierz oferenta do zgłoszenia</h1>
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/assigned">
            <X className="h-4 w-4" />
            Anuluj zgłoszenie
          </Link>
        </Button>
      </div>

      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">{order.title}</h2>
        <div className="flex gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <div>
              <div className="text-xs">kategoria</div>
              <div>{order.category}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5" />
            <div>
              <div className="text-xs">wynagrodzenie netto</div>
              <div>{order.price} PLN</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <div>
              <div className="text-xs">data rozpoczęcia</div>
              <div>{order.deadline}</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 font-medium">Treść zgłoszenia</h3>
          <p className="text-gray-600">{order.description}</p>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-blue-600">Sortuj zgłoszenia według wyróżnienia</div>
        <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">TRWA SKŁADANIE OFERT</div>
      </div>

      <div className="space-y-4">
        {applicants?.map((applicant) => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </div>
    </div>
  )
}


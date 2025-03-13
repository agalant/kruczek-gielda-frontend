"use client"

import { OrderForm } from "./order-form"
import { SuccessStep } from "./success-step"
import type { FormStep } from "./types"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AddOrderPage() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1)
  const [selectedLegalArea, setSelectedLegalArea] = useState<string>("")

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <Button variant="ghost" className="gap-2" asChild>
          <Link href="/orders">
            <ArrowLeft className="h-4 w-4" />
            {currentStep === 1 ? "Powrót do wyboru strony głównej" : "Powrót do wyboru kategorii"}
          </Link>
        </Button>
        <Button className="bg-[#10463f] text-white hover:bg-[#165f55]">Szukaj zleceń</Button>
      </div>

      <Card className="p-6">
        <h1 className="mb-8 text-2xl font-semibold">Dodaj zlecenie</h1>

        <div className="mb-8 flex justify-between">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`flex items-center gap-4 ${
                step === currentStep ? "" : step < currentStep ? "text-green-600" : "text-gray-400"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step === currentStep
                    ? "bg-blue-600 text-white"
                    : step < currentStep
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100"
                }`}
              >
                {step < currentStep ? "✓" : step}
              </div>
              <span className={step === currentStep ? "font-medium" : ""}>
                {step === 1 ? "Wybierz kategorię" : step === 2 ? "Dodaj szczegóły zlecenia" : "Potwierdzenie"}
              </span>
            </div>
          ))}
        </div>

        {currentStep === 3 ? (
          <SuccessStep />
        ) : (
          <OrderForm
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            selectedLegalArea={selectedLegalArea}
            setSelectedLegalArea={setSelectedLegalArea}
          />
        )}
      </Card>
    </div>
  )
}


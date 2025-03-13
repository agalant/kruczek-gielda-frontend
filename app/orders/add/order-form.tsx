"use client"

import { LegalAreaSelector } from "./legal-area-selector"
import type { FormStep, OrderFormData } from "./types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface OrderFormProps {
  currentStep: FormStep
  setCurrentStep: (step: FormStep) => void
  selectedLegalArea: string
  setSelectedLegalArea: (id: string) => void
}

async function submitOrder(data: OrderFormData) {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("Failed to submit order")
  }

  return response.json()
}

export function OrderForm({ currentStep, setCurrentStep, selectedLegalArea, setSelectedLegalArea }: OrderFormProps) {
  const [isPreview, setIsPreview] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>()

  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: () => {
      setCurrentStep(3)
    },
  })

  const onSubmit = (data: OrderFormData) => {
    if (currentStep === 1 && selectedLegalArea) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      if (isPreview) {
        setIsPreview(true)
        return
      }
      mutation.mutate({ ...data, legalAreaId: selectedLegalArea })
    }
  }

  if (currentStep === 1) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <LegalAreaSelector selected={selectedLegalArea} onSelect={setSelectedLegalArea} />
        <Button type="submit" className="mt-6 bg-blue-600 hover:bg-blue-700"  onClick={() => setCurrentStep(2)}>
          Następny krok
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-base">
            Nazwa zlecenia <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Nazwa powinna krótko określać przedmiot zlecenia"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">To pole jest wymagane</p>}
        </div>

        <div>
          <Label htmlFor="details" className="text-base">
            Szczegóły zlecenia <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="details"
            placeholder="Podaj jak najwięcej szczegółów..."
            className="min-h-[150px]"
            {...register("details", { required: true })}
          />
          {errors.details && <p className="mt-1 text-sm text-red-500">To pole jest wymagane</p>}
        </div>

        <div>
          <Label htmlFor="compensation" className="text-base">
            Wynagrodzenie w PLN
          </Label>
          <Input id="compensation" type="number" {...register("compensation")} />
        </div>

        <div>
          <Label htmlFor="publicationPeriod" className="text-base">
            Okres publikacji <span className="text-red-500">*</span>
          </Label>
          <Select {...register("publicationPeriod", { required: true })}>
            <SelectTrigger>
              <SelectValue placeholder="Wybierz okres" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 dni</SelectItem>
              <SelectItem value="14">14 dni</SelectItem>
              <SelectItem value="30">30 dni</SelectItem>
            </SelectContent>
          </Select>
          {errors.publicationPeriod && <p className="mt-1 text-sm text-red-500">To pole jest wymagane</p>}
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={mutation.isPending}>
          {mutation.isPending ? "Wysyłanie..." : "Opublikuj"}
        </Button>
        <Button type="button" variant="outline" onClick={() => setIsPreview(true)}>
          Podgląd
        </Button>
      </div>
    </form>
  )
}


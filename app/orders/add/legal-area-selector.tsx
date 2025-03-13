"use client"

import { Button } from "@/components/ui/button"
import { useLegalAreas } from "@/hooks/use-legal-areas"
import {
  Building2,
  CircleDollarSignIcon as CircleDollar,
  FileText,
  Landmark,
  Lightbulb,
  Network,
  Briefcase,
  Grid,
} from "lucide-react"
import { useState } from "react"

const ICON_MAP = {
  "Prawo pracy": Briefcase,
  "Prawo gospodarcze": CircleDollar,
  ESG: FileText,
  "Prawo własności intelektualnej": Lightbulb,
  "Prawo administracyjne": Landmark,
  Nieruchomości: Building2,
  "Prawo korporacyjne": Network,
  Inne: Grid,
}

export function LegalAreaSelector() {
  const { data: legalAreas, isLoading } = useLegalAreas()
  const [selected, setSelected] = useState<string>("")

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid gap-2">
      {(legalAreas ?? MOCK_LEGAL_AREAS).map((area) => {
        const Icon = ICON_MAP[area.name as keyof typeof ICON_MAP]
        return (
          <Button
            key={area.id}
            variant="outline"
            className={`h-auto justify-start gap-3 p-4 ${
              selected === area.id ? "border-blue-600 bg-blue-50 text-blue-600" : ""
            }`}
            onClick={() => setSelected(area.id)}
          >
            <Icon className="h-5 w-5" />
            {area.name}
          </Button>
        )
      })}
    </div>
  )
}

const MOCK_LEGAL_AREAS = [
  { id: "1", name: "Prawo pracy" },
  { id: "2", name: "Prawo gospodarcze" },
  { id: "3", name: "ESG" },
  { id: "4", name: "Prawo własności intelektualnej" },
  { id: "5", name: "Prawo administracyjne" },
  { id: "6", name: "Nieruchomości" },
  { id: "7", name: "Prawo korporacyjne" },
  { id: "8", name: "Inne" },
]


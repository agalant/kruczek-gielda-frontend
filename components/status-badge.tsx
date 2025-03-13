import { cn } from "@/lib/utils"

type Status = "WYBIERZ_OFERENTA" | "TRWA_SKLADANIE_OFERT" | "W_TRAKCIE_PROWADZENIA" | "BRAK_APLIKACJI" | "ZAKONCZONA"

interface StatusBadgeProps {
  status: Status
  className?: string
}

const statusConfig = {
  WYBIERZ_OFERENTA: {
    label: "WYBIERZ OFERENTA",
    className: "bg-blue-100 text-blue-700",
  },
  TRWA_SKLADANIE_OFERT: {
    label: "TRWA SKŁADANIE OFERT",
    className: "bg-blue-100 text-blue-700",
  },
  W_TRAKCIE_PROWADZENIA: {
    label: "W TRAKCIE PROWADZENIA",
    className: "bg-green-100 text-green-700",
  },
  BRAK_APLIKACJI: {
    label: "BRAK APLIKACJI",
    className: "bg-red-100 text-red-700",
  },
  ZAKONCZONA: {
    label: "ZAKOŃCZONA",
    className: "bg-gray-100 text-gray-700",
  },
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-medium", config.className, className)}>
      {config.label}
    </span>
  )
}


import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SuccessStep() {
  return (
    <div className="text-center">
      <h2 className="mb-8 text-xl font-semibold">Zlecenie zostało pomyślnie dodane!</h2>
      <Button className="bg-blue-600 hover:bg-blue-700" asChild>
        <Link href="/orders">Zobacz zlecenia</Link>
      </Button>
    </div>
  )
}


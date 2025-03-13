import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import type { Applicant } from "@/types"
import { Star, Wallet } from "lucide-react"

interface ApplicantCardProps {
  applicant: Applicant
}

export function ApplicantCard({ applicant }: ApplicantCardProps) {
  return (
    <Card className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={applicant.avatar} />
          <AvatarFallback>
            {applicant.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-medium text-blue-600">{applicant.name}</h3>
          <p className="text-sm text-gray-600">{applicant.completedCases} zrealizowane sprawy</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-gray-400" />
          <div>
            <div className="text-sm font-medium">proponowana cena realizacji</div>
            <div className="text-sm text-gray-600">{applicant.proposedPrice} netto (do negocjacji)</div>
          </div>
        </div>

        <div className="text-sm text-gray-600">{applicant.timeAgo}</div>

        <button className="rounded-full p-2 hover:bg-gray-100">
          <Star className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </Card>
  )
}


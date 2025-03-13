import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { TeamMember } from "@/types"
import { Mail, MoreHorizontal, Phone } from "lucide-react"
import Link from "next/link"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={member.avatar} alt={member.name} />
            <AvatarFallback>
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-medium">{member.name}</h3>
              <Badge
                variant={member.status === "active" ? "default" : "secondary"}
                className={
                  member.status === "active"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                }
              >
                {member.status === "active" ? "Aktywny" : "Nieaktywny"}
              </Badge>
            </div>

            <p className="mt-1 text-sm text-gray-600">{member.role}</p>

            <div className="mt-3 flex gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{member.email}</span>
              </div>

              {member.phone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{member.phone}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/team/${member.id}`}>Edytuj</Link>
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}


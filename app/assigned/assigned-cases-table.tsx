"use client"

import { StatusBadge } from "@/components/status-badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAssignedCases } from "@/hooks/use-assigned-cases"
import { MoreVertical } from "lucide-react"
import Link from "next/link"

export function AssignedCasesTable() {
  const { data: cases, isLoading } = useAssignedCases()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tytuł</TableHead>
          <TableHead>Data zlecenia</TableHead>
          <TableHead>Prowadzący</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Kwota</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cases?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <Link href={`/assigned/${item.id}`} className="text-blue-600 hover:underline">
                {item.title}
              </Link>
            </TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.assignee || "-"}</TableCell>
            <TableCell>
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell>{item.amount} PLN</TableCell>
            <TableCell>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="h-4 w-4" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


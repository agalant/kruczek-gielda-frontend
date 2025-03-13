"use client"

import { Button } from "@/components/ui/button"
import { Files, Grid, LayoutDashboard, Mail, Menu, Settings, Users2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Pulpit", href: "/", icon: Grid },
  { name: "Profil Kancelarii", href: "/profile", icon: LayoutDashboard },
  { name: "Giełda zleceń", href: "/orders", icon: Mail },
  { name: "Prowadzone sprawy", href: "/cases", icon: Files },
  { name: "Zlecone sprawy", href: "/assigned", icon: Mail },
  { name: "Twój zespół", href: "/team", icon: Users2 },
  { name: "Płatności i faktury", href: "/billing", icon: Files },
  { name: "Ustawienia", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-20 h-full w-64 bg-[#10463f] text-white">
      <div className="flex h-16 items-center px-4">
        <Menu className="h-6 w-6" />
      </div>

      <div className="space-y-4 px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)

          return (
            <Button
              key={item.name}
              variant="ghost"
              className={`w-full justify-start gap-3 text-white hover:bg-[#165f55] ${isActive ? "bg-[#165f55]" : ""}`}
              asChild
            >
              <Link href={item.href}>
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            </Button>
          )
        })}
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4">
        <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:bg-[#165f55]" asChild>
          <Link href="/logout">Wyloguj się</Link>
        </Button>
      </div>
    </aside>
  )
}


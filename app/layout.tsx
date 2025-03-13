import type React from "react"
import { Providers } from "@/components/providers"
import { Sidebar } from "@/components/sidebar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Law Firm Management System",
  description: "Manage your law firm cases and clients",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 pl-64">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'
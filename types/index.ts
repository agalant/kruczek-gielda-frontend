export interface Profile {
  companyName: string
  address: string
  nip: string
  krs: string
  email: string
  phone: string
  about: string
  logo?: string
  attachments: string[]
  socialLink: string
}

export interface Order {
  id: string
  title: string
  description: string
  category: string
  price: string
  deadline: string
  applicants: number
  skills: string[]
}

export interface AssignedCase {
  id: string
  title: string
  date: string
  assignee: string | null
  status: "WYBIERZ_OFERENTA" | "TRWA_SKLADANIE_OFERT" | "W_TRAKCIE_PROWADZENIA" | "BRAK_APLIKACJI" | "ZAKONCZONA"
  amount: string
}

export interface Applicant {
  id: string
  name: string
  avatar: string
  completedCases: number
  proposedPrice: string
  timeAgo: string
}

export interface TeamMember {
  id: string
  name: string
  email: string
  phone?: string
  role: string
  roleId: string
  status: "active" | "inactive"
  avatar: string
  permissions: {
    cases: boolean
    team: boolean
    billing: boolean
    settings: boolean
  }
}


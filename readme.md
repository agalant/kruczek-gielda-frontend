### Law Firm Management System - Documentation

## 1. Project Overview

The Law Firm Management System is a web application built with Next.js and TypeScript that helps law firms manage their cases, team members, clients, and billing. The application follows a modern, component-based architecture with a clean separation of concerns.

## 2. Technology Stack

### Core Technologies

- **Next.js 14** (App Router): Framework for server-rendered React applications
- **TypeScript**: For type safety and better developer experience
- **React 18**: UI library for building component-based interfaces

### UI and Styling

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI primitives
- **Lucide React**: Icon library

### State Management and Data Fetching

- **TanStack Query** (React Query): For data fetching, caching, and state management
- **React Hook Form**: For form handling and validation

### Other Libraries

- **React Dropzone**: For file upload functionality
- **class-variance-authority**: For component styling variants
- **Radix UI**: For accessible UI primitives (tabs, switch, etc.)

## 3. Project Structure

```plaintext
law-dashboard/
├── app/                    # Next.js App Router pages
│   ├── api/                # API routes
│   ├── assigned/           # Assigned cases pages
│   ├── billing/            # Billing and invoices pages
│   ├── cases/              # Cases management pages
│   ├── orders/             # Orders pages
│   ├── profile/            # Profile management pages
│   ├── settings/           # Settings pages
│   ├── team/               # Team management pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── ui/                 # UI components (shadcn)
│   ├── file-upload.tsx     # File upload component
│   ├── providers.tsx       # React Query provider
│   ├── sidebar.tsx         # Sidebar navigation
│   └── status-badge.tsx    # Status badge component
├── hooks/                  # Custom React hooks
│   ├── use-applicants.ts   # Hook for fetching applicants
│   ├── use-assigned-cases.ts # Hook for fetching assigned cases
│   ├── use-legal-areas.ts  # Hook for fetching legal areas
│   ├── use-order.ts        # Hook for fetching order details
│   ├── use-orders.ts       # Hook for fetching orders list
│   ├── use-profile.ts      # Hook for fetching profile data
│   ├── use-team-member.ts  # Hook for fetching team member details
│   └── use-team-members.ts # Hook for fetching team members list
├── lib/                    # Utility functions
│   └── utils.ts            # Utility functions
├── types/                  # TypeScript type definitions
│   └── index.ts            # Shared type definitions
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

## 4. Data Flow and State Management

The application uses TanStack Query (React Query) for data fetching, caching, and state management. The data flow follows this pattern:

1. **API Endpoints**: Defined in the `app/api` directory
2. **Custom Hooks**: Located in the `hooks` directory, they use React Query to fetch data from the API
3. **Components**: Use the custom hooks to access data and loading/error states

Example:

```typescriptreact
// Hook definition
export function useTeamMembers() {
  return useQuery({
    queryKey: ["teamMembers"],
    queryFn: fetchTeamMembers,
  })
}

// Component usage
const { data: members, isLoading, error } = useTeamMembers()
```

## 5. API Integration

### Current API Structure

The application currently uses mock API endpoints defined in the `app/api` directory. These endpoints simulate backend responses with predefined data.

### API Routes

- `/api/profile`: Get and update profile information
- `/api/legal-areas`: Get legal practice areas
- `/api/orders`: Get list of orders and create new orders
- `/api/orders/[id]`: Get order details
- `/api/orders/[id]/applicants`: Get applicants for an order
- `/api/assigned-cases`: Get assigned cases
- `/api/team`: Get team members list
- `/api/team/[id]`: Get team member details

### Creating New API Endpoints

To create a new API endpoint:

1. Create a new file in the `app/api` directory following the Next.js App Router conventions
2. Define the handler functions for HTTP methods (GET, POST, etc.)

Example:

```typescriptreact
// app/api/clients/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  // Fetch data from database or external API
  const clients = [/* mock data */]

  return NextResponse.json(clients)
}

export async function POST(request: Request) {
  const data = await request.json()

  // Process data and save to database

  return NextResponse.json({ success: true })
}
```

## 6. Adding New DTOs (Data Transfer Objects)

DTOs are defined in the `types/index.ts` file. To add a new DTO:

1. Define the interface in the `types/index.ts` file
2. Use the interface in your API endpoints and components

Example:

```typescriptreact
// types/index.ts
export interface Client {
  id: string
  name: string
  email: string
  phone: string
  address: string
  cases: string[]
}

// hooks/use-clients.ts
import { Client } from "@/types"
import { useQuery } from "@tanstack/react-query"

async function fetchClients(): Promise<Client[]> {
  const response = await fetch("/api/clients")
  if (!response.ok) {
    throw new Error("Failed to fetch clients")
  }
  return response.json()
}

export function useClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: fetchClients,
  })
}
```

## 7. Component Structure

The application follows a component-based architecture with:

### Page Components

Located in the `app` directory, these components represent entire pages and are responsible for layout and data fetching.

### Feature Components

Located in the same directory as their respective page components, these components implement specific features of a page.

### UI Components

Located in the `components/ui` directory, these are reusable UI components from shadcn/ui.

### Shared Components

Located in the `components` directory, these are shared components used across multiple pages.

## 8. Adding New Features

To add a new feature to the application:

1. **Define Types**: Add necessary interfaces to `types/index.ts`
2. **Create API Endpoints**: Add API routes in `app/api` directory
3. **Create Custom Hooks**: Add hooks in `hooks` directory to fetch data
4. **Create Components**: Add components to implement the feature
5. **Add Pages**: Add pages to the `app` directory following Next.js App Router conventions

## 9. Development Guidelines

### Code Style

- Use TypeScript for all files
- Follow the existing component structure
- Use React Query for data fetching
- Use React Hook Form for form handling
- Use shadcn/ui components where possible
- Follow the Tailwind CSS utility-first approach

### Adding New Pages

1. Create a new directory in the `app` directory
2. Add a `page.tsx` file for the main page content
3. Add additional components in the same directory
4. Add API endpoints in the `app/api` directory if needed
5. Add custom hooks in the `hooks` directory if needed

### Handling Forms

1. Use React Hook Form for form handling
2. Define form types in the `types/index.ts` file
3. Use shadcn/ui form components
4. Implement form validation
5. Use React Query mutations for form submission

### Error Handling

1. Use React Query's error handling capabilities
2. Display appropriate error messages to users
3. Implement retry logic where appropriate
4. Log errors for debugging

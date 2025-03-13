"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/file-upload"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

interface ProfileFormData {
  companyName: string
  address: string
  nip: string
  krs: string
  email: string
  phone: string
  about: string
  logo?: File
  attachments: File[]
  socialLink: string
}

interface ProfileFormProps {
  initialData?: Partial<ProfileFormData>
}

export function ProfileForm({ initialData }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: initialData,
  })

  const mutation = useMutation({
    mutationFn: async (data: ProfileFormData) => {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value)
        } else if (Array.isArray(value)) {
          value.forEach((file) => formData.append(key, file))
        } else {
          formData.append(key, String(value))
        }
      })

      const response = await fetch("/api/profile", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to update profile")
      }

      return response.json()
    },
  })

  return (
    <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-8 p-6">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Podstawowe informacje</h2>

        <div className="grid gap-4">
          <div>
            <Label htmlFor="companyName">Pełna nazwa firmy</Label>
            <Input id="companyName" {...register("companyName", { required: true })} />
          </div>

          <div>
            <Label htmlFor="address">Adres</Label>
            <Input id="address" {...register("address", { required: true })} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nip">NIP</Label>
              <Input id="nip" {...register("nip", { required: true })} />
            </div>
            <div>
              <Label htmlFor="krs">KRS</Label>
              <Input id="krs" {...register("krs", { required: true })} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Adres e-mail</Label>
              <Input id="email" type="email" {...register("email", { required: true })} />
            </div>
            <div>
              <Label htmlFor="phone">Numer telefonu</Label>
              <Input id="phone" {...register("phone", { required: true })} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profil Kancelarii</h2>

          <div>
            <Label>Logo</Label>
            <FileUpload
              accept="image/*"
              maxSize={5 * 1024 * 1024} // 5MB
              onFileSelect={(file) => console.log(file)}
            />
          </div>

          <div>
            <Label htmlFor="about">O Kancelarii</Label>
            <Textarea
              id="about"
              className="min-h-[150px]"
              placeholder="Podaj jak najwięcej szczegółów..."
              {...register("about")}
            />
          </div>

          <div>
            <Label>Dodaj załącznik</Label>
            <FileUpload
              accept=".pdf,.doc,.docx"
              maxSize={50 * 1024 * 1024} // 50MB
              multiple
              onFileSelect={(files) => console.log(files)}
            />
          </div>

          <div>
            <Label htmlFor="socialLink">Link do mediów społecznościowych/ witryny internetowej</Label>
            <Input id="socialLink" placeholder="http://..." {...register("socialLink")} />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={mutation.isPending}>
          {mutation.isPending ? "Zapisywanie..." : "Zapisz"}
        </Button>
        <Button type="button" variant="outline">
          Podgląd Profilu
        </Button>
      </div>
    </form>
  )
}


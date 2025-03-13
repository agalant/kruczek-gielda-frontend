"use client"

import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

interface FileUploadProps {
  accept?: string
  maxSize?: number
  multiple?: boolean
  onFileSelect: (files: File | File[]) => void
}

export function FileUpload({ accept, maxSize, multiple = false, onFileSelect }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles((prev) => [...prev, ...acceptedFiles])
      onFileSelect(multiple ? acceptedFiles : acceptedFiles[0])
    },
    [multiple, onFileSelect],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept ? { [accept]: [] } : undefined,
    maxSize,
    multiple,
  })

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {isDragActive ? "Upuść pliki tutaj..." : "Wybierz plik lub przeciągnij go tutaj"}
        </p>
        <p className="mt-1 text-xs text-gray-500">PDF, PNG, docx, ppt. do 50MB</p>
      </div>

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li key={index} className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
              <span className="text-sm truncate">{file.name}</span>
              <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
                <X className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


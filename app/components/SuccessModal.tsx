"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface SuccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuccessModal() {
  const searchParams = useSearchParams()
  const checkoutId = searchParams.get("checkoutId")

  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (checkoutId) {
      setShowModal(true)

    }
  }, [searchParams, router])

  useEffect(() => {
    return () => {
      const newUrl = new URL(window.location.href)
      newUrl.searchParams.delete("checkoutId")
      router.replace(newUrl.pathname + newUrl.search, { scroll: false })
    }
  }, [showModal])

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTitle className=" sr-only">Success Modal</DialogTitle>
      <DialogContent className="sm:max-w-md text-center backdrop-blur-md bg-background/95 p-8">
        <p className="text-2xl font-semibold mb-2">Congrats! 🎉</p>
        <p className="text-lg text-muted-foreground mb-4">Your purchase was successful.</p>
        <p className="text-sm text-muted-foreground/60">You will receive an email with your purchase details.</p>
      </DialogContent>
    </Dialog>
  )
}
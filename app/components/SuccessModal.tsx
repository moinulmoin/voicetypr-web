"use client"

import { useEffect } from "react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface SuccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuccessModal({ open, onOpenChange }: SuccessModalProps) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [open, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center backdrop-blur-md bg-background/95 p-8">
        <p className="text-2xl font-semibold mb-2">Congrats! 🎉</p>
        <p className="text-lg text-muted-foreground mb-4">Your purchase was successful.</p>
        <p className="text-sm text-muted-foreground/60">Will close in 10 seconds</p>
      </DialogContent>
    </Dialog>
  )
}
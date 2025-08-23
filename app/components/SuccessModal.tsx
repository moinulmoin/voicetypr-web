"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { trackTwitterConversion } from "@/lib/twitter-pixel"

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, any>) => void;
    };
  }
}

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
      // Fetch checkout data and track purchase
      const trackPurchase = async () => {
        try {
          const response = await fetch(`/api/v1/checkout/${checkoutId}`)
          
          if (!response.ok) {
            console.error('Failed to fetch checkout data')
            return
          }
          
          const data = await response.json()
          
          // Only show modal if we got valid data
          if (data.total_amount !== undefined) {
            setShowModal(true)
            
            const amount = data.total_amount / 100 // Convert cents to dollars
            
            // Track in Umami
            if (window.umami) {
              window.umami.track('purchase', { 
                value: amount,
                currency: data.currency || 'USD'
              });
            }
            
            // Track in Reddit Pixel
            if ((window as any).rdt) {
              (window as any).rdt('track', 'Purchase', { 
                value: amount,
                currency: data.currency || 'USD'
              });
            }
            
            // Track Twitter conversion with amount
            trackTwitterConversion('purchase', amount)
          }
        } catch (error) {
          console.error('Failed to track purchase:', error)
          // Don't show modal if API failed
        }
      }
      
      trackPurchase()
    }
  }, [checkoutId])

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
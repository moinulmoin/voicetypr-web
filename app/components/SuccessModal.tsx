"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { clearOffer } from "@/lib/flash-offer-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function SuccessModal() {
  const searchParams = useSearchParams()
  const checkoutSuccess = searchParams.get("checkout")

  const router = useRouter()
  const [showModal, setShowModal] = useState(() => checkoutSuccess === 'success')

  useEffect(() => {
    if (checkoutSuccess === 'success') {
      // Strip success params from the URL immediately.
      const params = new URLSearchParams(searchParams.toString());
      params.delete('checkout');
      params.delete('checkoutId');
      params.delete('customer_session_token');
      clearOffer();
      const query = params.toString();
      const cleanPath = query ? `${window.location.pathname}?${query}` : window.location.pathname;
      router.replace(cleanPath, { scroll: false });
    }
  }, [checkoutSuccess, router, searchParams])

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

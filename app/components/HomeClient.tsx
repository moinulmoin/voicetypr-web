"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { SuccessModal } from "./SuccessModal"

function HomeClientContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const checkoutId = searchParams.get("checkoutId")
    console.log("Checking for checkoutId:", checkoutId)
    if (checkoutId) {
      console.log("Found checkoutId, showing modal")
      setShowModal(true)
      
      // Clean up URL after a short delay to ensure modal shows
      setTimeout(() => {
        const newUrl = new URL(window.location.href)
        newUrl.searchParams.delete("checkoutId")
        router.replace(newUrl.pathname + newUrl.search, { scroll: false })
      }, 100)
    }
  }, [searchParams, router])

  return (
    <>
      {children}
      <SuccessModal open={showModal} onOpenChange={setShowModal} />
    </>
  )
}

export function HomeClient({ children }: { children: React.ReactNode }) {
  return (
    <HomeClientContent>
      {children}
    </HomeClientContent>
  )
}
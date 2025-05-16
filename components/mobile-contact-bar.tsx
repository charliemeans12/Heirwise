"use client"

import { Phone, Mail, MessageSquare } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import CustomButton from "@/components/custom-button"

export default function MobileContactBar() {
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-dark border-t border-gold-dark shadow-lg z-40 md:hidden">
      <div className="flex justify-around items-center py-1">
        <a
          href="tel:+18068844140"
          className="flex flex-col items-center justify-center text-gold-light hover:text-gold-DEFAULT p-1"
        >
          <Phone className="h-4 w-4 mb-0.5" />
          <span className="text-[10px]">Call</span>
        </a>

        <a
          href="mailto:info@heirwise.com"
          className="flex flex-col items-center justify-center text-gold-light hover:text-gold-DEFAULT p-1"
        >
          <Mail className="h-4 w-4 mb-0.5" />
          <span className="text-[10px]">Email</span>
        </a>

        <CustomButton
          href="/contact"
          className="flex flex-col items-center justify-center bg-transparent hover:bg-transparent text-gold-light hover:text-gold-DEFAULT p-1"
        >
          <MessageSquare className="h-4 w-4 mb-0.5" />
          <span className="text-[10px]">Contact</span>
        </CustomButton>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LogoLoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Ensure the loading screen stays visible for at least 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2000)

    // Complete loading after fade out animation (3 seconds total)
    const loadTimer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(loadTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative">
        <div className="logo-glow">
          <Image
            src="/logo-complete.png"
            alt="Heir Wise Probate"
            width={320}
            height={213}
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border-4 border-t-gold-DEFAULT border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}

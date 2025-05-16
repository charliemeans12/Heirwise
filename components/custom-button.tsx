"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import LoadingOverlay from "@/components/loading-overlay"

interface CustomButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export default function CustomButton({
  href,
  onClick,
  className,
  variant = "default",
  children,
  type = "button",
  disabled = false,
}: CustomButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const router = useRouter()

  // Reset touch state after animation completes
  useEffect(() => {
    if (isTouched) {
      const timer = setTimeout(() => {
        setIsTouched(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isTouched])

  const handleClick = async () => {
    if (disabled) return

    // Add touch feedback
    setIsTouched(true)

    // Start loading
    setIsLoading(true)

    // Wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // If there's a custom onClick handler, call it
    if (onClick) {
      onClick()
    }

    // Navigate to the href if provided
    if (href) {
      router.push(href)
    }

    // Keep loading state for navigation to complete
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  // Handle touch start for mobile devices
  const handleTouchStart = () => {
    if (!disabled) {
      setIsTouched(true)
    }
  }

  // Handle touch end for mobile devices
  const handleTouchEnd = () => {
    setIsTouched(false)
  }

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <Button
        type={type}
        variant={variant}
        className={`text-sm sm:text-base transition-transform active:scale-95 ${isTouched ? "scale-95" : ""} ${className}`}
        onClick={handleClick}
        disabled={disabled || isLoading}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {children}
      </Button>
    </>
  )
}

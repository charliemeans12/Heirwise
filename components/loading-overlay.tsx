"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

interface LoadingOverlayProps {
  isLoading: boolean
}

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState("Loading...")

  // Reset and animate progress when loading starts
  useEffect(() => {
    if (isLoading) {
      setProgress(0)

      // Animate progress from 0 to 100 over 2 seconds
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 5
        })
      }, 100)

      // Update loading message
      const messages = ["Loading...", "Almost there...", "Just a moment..."]

      const messageInterval = setInterval(() => {
        setMessage(messages[Math.floor(Math.random() * messages.length)])
      }, 700)

      return () => {
        clearInterval(interval)
        clearInterval(messageInterval)
      }
    }
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 px-6 py-8 rounded-lg max-w-xs w-full text-center">
        <div className="relative">
          <Loader2 className="h-12 w-12 animate-spin text-gold-DEFAULT" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-gold-dark">{progress}%</span>
          </div>
        </div>
        <p className="text-lg font-medium text-gray-900">{message}</p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end h-2.5 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

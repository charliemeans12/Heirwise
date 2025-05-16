"use client"

import { useState, useEffect } from "react"
import CustomButton from "@/components/custom-button"
import Image from "next/image"

export default function Hero() {
  const backgroundImages = [
    "/images/justice/lady-justice-gold.webp",
    "/images/justice/scales-books-gavel.jpeg",
    "/images/justice/gavel-statue-books.jpeg",
    "/images/justice/gold-scales-gavel.jpeg",
    "/images/justice/courtroom-scales.jpeg",
    "/images/justice/gavel-books.jpeg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative">
      {/* Hero Background Images - Rotating */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
        </div>
      ))}

      <div className="relative container mx-auto px-4 py-20 sm:py-28 md:py-36 lg:py-44 md:px-6">
        <div className="max-w-3xl mx-auto bg-white/90 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-2xl backdrop-blur-sm">
          <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center">
            <Image
              src="/logo-complete.png"
              alt="Heir Wise Probate"
              width={400}
              height={267}
              className="object-contain w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]"
              priority
            />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 md:mb-8 text-center">
            Dedicated attorneys specializing in probate law, estate planning, and inheritance matters. Guiding you
            through life's most important transitions with expertise and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
            <CustomButton
              href="/contact"
              className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto"
            >
              Free Consultation
            </CustomButton>
            <CustomButton
              href="#practice-areas"
              variant="outline"
              className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-50 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto"
            >
              Our Practice Areas
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface CarouselImage {
  src: string
  alt: string
}

export default function JusticeCarousel() {
  const images: CarouselImage[] = [
    {
      src: "/images/justice/lady-justice-gold.webp",
      alt: "Golden statue of Lady Justice holding scales and sword",
    },
    {
      src: "/images/justice/scales-books-gavel.jpeg",
      alt: "Balanced scale of justice with law books and gavel",
    },
    {
      src: "/images/justice/gavel-statue-books.jpeg",
      alt: "Wooden gavel with Lady Justice statue and law books",
    },
    {
      src: "/images/justice/gold-scales-gavel.jpeg",
      alt: "Decorative gold balance scale with wooden gavel",
    },
    {
      src: "/images/justice/courtroom-scales.jpeg",
      alt: "Silver balance scale in courtroom setting",
    },
    {
      src: "/images/justice/gavel-books.jpeg",
      alt: "Wooden gavel on sound block with law books",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-80 sm:h-96 md:h-[32rem] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

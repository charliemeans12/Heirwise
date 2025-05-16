"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import CustomButton from "@/components/custom-button"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Set active item based on current path
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname
      if (path === "/") setActiveItem("home")
      else if (path.includes("/practice-areas")) setActiveItem("practice-areas")
      else if (path.includes("/about-us")) setActiveItem("about-us")
      else if (path.includes("/attorneys")) setActiveItem("attorneys")
      else if (path.includes("/blog")) setActiveItem("blog")
      else if (path.includes("/faq")) setActiveItem("faq")
      else if (path.includes("/contact")) setActiveItem("contact")
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleItemClick = (item: string) => {
    setActiveItem(item)
    closeMenu()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            <CustomButton href="/" className="flex items-center bg-transparent hover:bg-transparent p-0">
              <Image
                src="/logo-new.jpeg"
                alt="Heir Wise Probate"
                width={180}
                height={60}
                className="h-auto w-auto max-h-12 md:max-h-14"
                priority
              />
            </CustomButton>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <CustomButton
              href="/"
              className={`bg-transparent hover:bg-transparent font-medium transition-colors p-0 h-auto ${
                activeItem === "home" ? "text-gold-DEFAULT" : "text-gray-800 hover:text-gold-DEFAULT"
              }`}
            >
              Home
            </CustomButton>
            <CustomButton
              href="/practice-areas"
              className={`bg-transparent hover:bg-transparent font-medium transition-colors p-0 h-auto ${
                activeItem === "practice-areas" ? "text-gold-DEFAULT" : "text-gray-800 hover:text-gold-DEFAULT"
              }`}
            >
              Practice Areas
            </CustomButton>
            <CustomButton
              href="/about-us"
              className={`bg-transparent hover:bg-transparent font-medium transition-colors p-0 h-auto ${
                activeItem === "about-us" ? "text-gold-DEFAULT" : "text-gray-800 hover:text-gold-DEFAULT"
              }`}
            >
              About Us
            </CustomButton>
            <CustomButton
              href="/attorneys"
              className={`bg-transparent hover:bg-transparent font-medium transition-colors p-0 h-auto ${
                activeItem === "attorneys" ? "text-gold-DEFAULT" : "text-gray-800 hover:text-gold-DEFAULT"
              }`}
            >
              Our Team
            </CustomButton>
            <CustomButton
              href="/blog"
              className={`bg-transparent hover:bg-transparent font-medium transition-colors p-0 h-auto ${
                activeItem === "blog" ? "text-gold-DEFAULT" : "text-gray-800 hover:text-gold-DEFAULT"
              }`}
            >
              Blog
            </CustomButton>
            <CustomButton
              href="/faq"
              className={`bg-transparent hover:bg-transparent font-medium transition-colors p-0 h-auto ${
                activeItem === "faq" ? "text-gold-DEFAULT" : "text-gray-800 hover:text-gold-DEFAULT"
              }`}
            >
              FAQ
            </CustomButton>
            <CustomButton
              href="/contact"
              className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white px-4 py-2 rounded"
            >
              Consultation
            </CustomButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none z-50 p-1 rounded-full active:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={22} className="text-gold-DEFAULT" />
            ) : (
              <Menu size={22} className="text-gold-DEFAULT" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none -z-10"
        }`}
        onClick={(e) => {
          // Close menu when clicking on the overlay (not the menu itself)
          if (e.target === e.currentTarget) {
            closeMenu()
          }
        }}
      >
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-gold-DEFAULT">Menu</h2>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full active:bg-gray-100 transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={18} className="text-gold-DEFAULT" />
              </button>
            </div>

            <nav className="space-y-4">
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "home" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("home")}
                >
                  <span className={activeItem === "home" ? "text-gold-DEFAULT font-semibold" : ""}>Home</span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "home" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "practice-areas" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/practice-areas"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("practice-areas")}
                >
                  <span className={activeItem === "practice-areas" ? "text-gold-DEFAULT font-semibold" : ""}>
                    Practice Areas
                  </span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "practice-areas" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "about-us" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/about-us"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("about-us")}
                >
                  <span className={activeItem === "about-us" ? "text-gold-DEFAULT font-semibold" : ""}>About Us</span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "about-us" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "attorneys" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/attorneys"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("attorneys")}
                >
                  <span className={activeItem === "attorneys" ? "text-gold-DEFAULT font-semibold" : ""}>Our Team</span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "attorneys" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "blog" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/blog"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("blog")}
                >
                  <span className={activeItem === "blog" ? "text-gold-DEFAULT font-semibold" : ""}>Blog</span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "blog" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "faq" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/faq"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("faq")}
                >
                  <span className={activeItem === "faq" ? "text-gold-DEFAULT font-semibold" : ""}>FAQ</span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "faq" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
              <div
                className={`border-b border-gray-100 pb-2 ${activeItem === "contact" ? "bg-gold-50 -mx-2 px-2 rounded-md" : ""}`}
              >
                <CustomButton
                  href="/contact"
                  className="flex justify-between items-center w-full bg-transparent hover:bg-transparent text-gray-800 hover:text-gold-DEFAULT font-medium transition-colors p-0 h-auto text-left"
                  onClick={() => handleItemClick("contact")}
                >
                  <span className={activeItem === "contact" ? "text-gold-DEFAULT font-semibold" : ""}>Contact</span>
                  <ChevronRight
                    size={16}
                    className={`${activeItem === "contact" ? "text-gold-DEFAULT" : "text-gray-400"}`}
                  />
                </CustomButton>
              </div>
            </nav>

            <div className="pt-4">
              <CustomButton
                href="/contact"
                className="flex items-center justify-center w-full bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end text-white px-4 py-3 rounded hover:from-gold-dark hover:to-gold-dark transition-colors"
                onClick={() => handleItemClick("contact")}
              >
                Consultation
              </CustomButton>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-gray-500 font-medium">Office Hours</p>
                <p className="text-sm text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-700">Sat: By appointment only</p>
                <p className="text-sm text-gray-700">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

import CustomButton from "@/components/custom-button"
import { Facebook, Twitter, Instagram, Linkedin, Globe, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            {/* Logo */}
            <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">
              <Image
                src="/logo-complete.png"
                alt="Heir Wise Probate"
                width={220}
                height={147}
                className="h-auto w-auto max-w-[180px] sm:max-w-[220px]"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 text-center sm:text-left">
              Dedicated attorneys specializing in probate law, estate planning, and inheritance matters. Guiding you
              through life's most important transitions.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              <CustomButton
                href="#"
                className="text-gold-light hover:text-gold-DEFAULT transition-colors bg-transparent hover:bg-transparent p-0"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Facebook</span>
              </CustomButton>
              <CustomButton
                href="#"
                className="text-gold-light hover:text-gold-DEFAULT transition-colors bg-transparent hover:bg-transparent p-0"
              >
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Twitter</span>
              </CustomButton>
              <CustomButton
                href="#"
                className="text-gold-light hover:text-gold-DEFAULT transition-colors bg-transparent hover:bg-transparent p-0"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Instagram</span>
              </CustomButton>
              <CustomButton
                href="#"
                className="text-gold-light hover:text-gold-DEFAULT transition-colors bg-transparent hover:bg-transparent p-0"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </CustomButton>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold-DEFAULT">Practice Areas</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <CustomButton
                  href="/practice-areas"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Probate Administration
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/practice-areas"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Estate Planning
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/practice-areas"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Trust Administration
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/practice-areas"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Will Contests
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/practice-areas"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Guardianships & Conservatorships
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/practice-areas"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Estate & Trust Litigation
                </CustomButton>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold-DEFAULT">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <CustomButton
                  href="/"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Home
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/about-us"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  About Us
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/attorneys"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Our Team
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Case Results
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/blog"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Blog
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  href="/contact"
                  className="text-sm sm:text-base text-gray-400 hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0 h-auto"
                >
                  Contact
                </CustomButton>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold-DEFAULT">Contact Us</h3>
            <address className="not-italic text-sm sm:text-base text-gray-400 space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start">
                <Globe className="h-4 w-4 text-gold-DEFAULT mr-2" />
                <span>
                  USA:{" "}
                  <a href="tel:+18068844140" className="hover:text-gold-light">
                    +1 806-884-4140
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Globe className="h-4 w-4 text-gold-DEFAULT mr-2" />
                <span>
                  UK:{" "}
                  <a href="tel:+442079460523" className="hover:text-gold-light">
                    +44 20 7946 0523
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Globe className="h-4 w-4 text-gold-DEFAULT mr-2" />
                <span>
                  Barbados:{" "}
                  <a href="tel:+13203376499" className="hover:text-gold-light">
                    +1 320-337-6499
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Clock className="h-4 w-4 text-gold-DEFAULT mr-2" />
                <span>Office Hours: 9:00 AM - 5:00 PM (Local Time)</span>
              </div>
              <div className="text-center sm:text-left">
                <CustomButton
                  href="/contact/locations"
                  className="text-gold-light hover:text-gold-DEFAULT transition-colors bg-transparent hover:bg-transparent p-0"
                >
                  View All Office Locations
                </CustomButton>
              </div>
              <div className="text-center sm:text-left">
                Email:{" "}
                <a href="mailto:info@heirwise.com" className="hover:text-gold-light">
                  info@heirwise.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Heir Wise Probate. All rights reserved.
          </p>
          <div className="mt-2 space-x-3 sm:space-x-4">
            <CustomButton
              href="#"
              className="text-sm sm:text-base hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0"
            >
              Privacy Policy
            </CustomButton>
            <CustomButton
              href="#"
              className="text-sm sm:text-base hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0"
            >
              Terms of Service
            </CustomButton>
            <CustomButton
              href="#"
              className="text-sm sm:text-base hover:text-gold-light transition-colors bg-transparent hover:bg-transparent p-0"
            >
              Disclaimer
            </CustomButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

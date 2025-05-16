import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactUs from "@/components/contact-us"
import CustomButton from "@/components/custom-button"
import { MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with our team of experienced probate attorneys for a free consultation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Heir Wise Probate",
    description: "Get in touch with our team of experienced probate attorneys for a free consultation.",
    url: "https://heirwise.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Heir Wise Probate",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Heir Wise Probate</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get in touch with our team of experienced probate attorneys for a free consultation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mb-12 flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-gold-DEFAULT mr-3" />
              <div>
                <h2 className="text-lg font-semibold">International Offices</h2>
                <p className="text-gray-600">We have offices in the USA, UK, and Barbados</p>
              </div>
            </div>
            <CustomButton
              href="/contact/locations"
              className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white"
            >
              View Locations
            </CustomButton>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

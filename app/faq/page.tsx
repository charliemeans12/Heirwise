import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FAQSection from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about probate, estate planning, and our services.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Heir Wise Probate",
    description: "Find answers to common questions about probate, estate planning, and our services.",
    url: "https://heirwise.com/faq",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heir Wise Probate FAQ",
      },
    ],
  },
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to common questions about probate, estate planning, and our services.
            </p>
          </div>
        </div>
      </div>
      <FAQSection />
      <Footer />
    </>
  )
}

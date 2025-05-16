import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AttorneyProfiles from "@/components/attorney-profiles"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Attorneys",
  description:
    "Meet our team of experienced legal professionals dedicated to serving your probate and estate planning needs.",
  alternates: {
    canonical: "/attorneys",
  },
  openGraph: {
    title: "Our Attorneys | Heir Wise Probate",
    description:
      "Meet our team of experienced legal professionals dedicated to serving your probate and estate planning needs.",
    url: "https://heirwise.com/attorneys",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heir Wise Probate Attorneys",
      },
    ],
  },
}

export default function AttorneysPage() {
  return (
    <>
      <Navbar />
      <div className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Watermark Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/justice/lady-justice-gold.webp"
            alt="Lady Justice"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Attorneys</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet our team of experienced legal professionals dedicated to serving your probate and estate planning
              needs.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        {/* Continue the watermark in the white section */}
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="/images/justice/lady-justice-gold.webp"
            alt="Lady Justice"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10">
          <AttorneyProfiles />
        </div>
      </div>
      <Footer />
    </>
  )
}

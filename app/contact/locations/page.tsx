import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"
import CustomButton from "@/components/custom-button"

export const metadata: Metadata = {
  title: "Office Locations",
  description:
    "Find our office locations in the USA, UK, and Barbados. Contact us for legal assistance with probate and estate matters.",
  alternates: {
    canonical: "/contact/locations",
  },
  openGraph: {
    title: "Office Locations | Heir Wise Probate",
    description:
      "Find our office locations in the USA, UK, and Barbados. Contact us for legal assistance with probate and estate matters.",
    url: "https://heirwise.com/contact/locations",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heir Wise Probate Office Locations",
      },
    ],
  },
}

interface OfficeLocation {
  country: string
  address: string
  phone: string
  email: string
  hours: string
  timeZone: string
  mapPlaceholder: string
  flagEmoji: string
}

export default function OfficeLocationsPage() {
  const locations: OfficeLocation[] = [
    {
      country: "United States",
      address: "1916 S Carolina St, Amarillo, TX 79102",
      phone: "+1 806-884-4140",
      email: "usa@heirwise.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      timeZone: "Central Time (CT)",
      mapPlaceholder: "USA Office Map",
      flagEmoji: "🇺🇸",
    },
    {
      country: "United Kingdom",
      address: "77 Fulham Palace Road, Hammersmith, London W6 8JA",
      phone: "+44 20 7946 0523",
      email: "uk@heirwise.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      timeZone: "Greenwich Mean Time (GMT)",
      mapPlaceholder: "UK Office Map",
      flagEmoji: "🇬🇧",
    },
    {
      country: "Barbados",
      address: "Nile House, Broad Street, Bridgetown, Barbados",
      phone: "+1 320-337-6499",
      email: "barbados@heirwise.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      timeZone: "Atlantic Standard Time (AST)",
      mapPlaceholder: "Barbados Office Map",
      flagEmoji: "🇧🇧",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              With offices in the United States, United Kingdom, and Barbados, we provide comprehensive probate and
              estate planning services across multiple jurisdictions.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-3" aria-hidden="true">
                        {location.flagEmoji}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{location.country}</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gold-DEFAULT mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Address</h3>
                          <p className="text-gray-700">{location.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gold-DEFAULT mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Phone</h3>
                          <p className="text-gray-700">
                            <a href={`tel:${location.phone}`} className="hover:text-gold-DEFAULT">
                              {location.phone}
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gold-DEFAULT mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Email</h3>
                          <p className="text-gray-700">
                            <a href={`mailto:${location.email}`} className="hover:text-gold-DEFAULT">
                              {location.email}
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gold-DEFAULT mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">Office Hours</h3>
                          <p className="text-gray-700">{location.hours}</p>
                          <p className="text-sm text-gray-500">{location.timeZone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <CustomButton
                        href="/contact"
                        className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white"
                      >
                        Contact This Office
                      </CustomButton>
                    </div>
                  </div>

                  <div className="md:w-1/2 bg-gray-200 min-h-[300px] flex items-center justify-center">
                    <div className="text-gray-500">
                      {/* Replace with actual map embed */}
                      <div className="flex flex-col items-center">
                        <Globe className="h-12 w-12 mb-3 text-gold-DEFAULT" />
                        <p>{location.mapPlaceholder}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Legal Assistance?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team of experienced attorneys is ready to help you with probate administration, estate planning, and
              trust matters across multiple jurisdictions.
            </p>
            <CustomButton
              href="/contact"
              className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white px-6 py-3"
            >
              Schedule a Consultation
            </CustomButton>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

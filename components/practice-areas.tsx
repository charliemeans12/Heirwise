import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gavel, Scale, FileText, Home, Users, Briefcase } from "lucide-react"

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Probate Administration",
      description:
        "Comprehensive guidance through the probate process, from filing the initial petition to distributing assets.",
      icon: <Gavel className="h-8 w-8 sm:h-10 sm:w-10 text-gold-DEFAULT" />,
    },
    {
      title: "Estate Planning",
      description:
        "Creating wills, trusts, and comprehensive estate plans to protect your assets and provide for your loved ones.",
      icon: <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-gold-DEFAULT" />,
    },
    {
      title: "Trust Administration",
      description: "Assisting trustees in fulfilling their fiduciary duties and managing trust assets effectively.",
      icon: <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-gold-DEFAULT" />,
    },
    {
      title: "Will Contests",
      description:
        "Representing clients in disputes over the validity of wills or the interpretation of their provisions.",
      icon: <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-gold-DEFAULT" />,
    },
    {
      title: "Guardianships & Conservatorships",
      description: "Establishing legal protections for minors and incapacitated adults who cannot care for themselves.",
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-gold-DEFAULT" />,
    },
    {
      title: "Estate & Trust Litigation",
      description:
        "Resolving disputes between beneficiaries, executors, and trustees through negotiation or litigation.",
      icon: <Home className="h-8 w-8 sm:h-10 sm:w-10 text-gold-DEFAULT" />,
    },
  ]

  return (
    <section id="practice-areas" className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our <span className="text-gold-gradient">Practice Areas</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive legal services in probate and estate matters to protect your legacy and guide you
            through complex legal processes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader className="pb-2">
                <div className="mb-3 sm:mb-4">{area.icon}</div>
                <CardTitle className="text-lg sm:text-xl font-bold">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-sm sm:text-base">{area.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

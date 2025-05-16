import CustomButton from "@/components/custom-button"
import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"

interface Attorney {
  id: string
  name: string
  position: string
  shortBio: string
  image: string
  email: string
  linkedin: string
}

export default function AttorneyProfiles() {
  const attorneys: Attorney[] = [
    {
      id: "george-brennen",
      name: "George Brennen",
      position: "Founding Partner",
      shortBio:
        "Specializing in complex probate administration with over 20 years of experience in estate and trust law.",
      image: "/images/attorneys/george-brennen.jpeg",
      email: "georgebrennen@heirwise.com",
      linkedin: "linkedin.com/in/george-brennen",
    },
    {
      id: "hellen-white",
      name: "Hellen White",
      position: "Senior Partner",
      shortBio:
        "Expert in estate planning and trust administration with a focus on high-net-worth estates and tax planning.",
      image: "/images/attorneys/hellen-white.jpeg",
      email: "hellenwhite@heirwise.com",
      linkedin: "linkedin.com/in/hellen-white",
    },
    {
      id: "michael-jones",
      name: "Michael Jones",
      position: "Senior in Probate",
      shortBio:
        "Specialized in probate litigation and complex estate disputes with expertise in resolving beneficiary conflicts.",
      image: "/images/attorneys/michael-jones.jpeg",
      email: "michaeljones@heirwise.com",
      linkedin: "linkedin.com/in/michael-jones",
    },
  ]

  return (
    <section id="attorneys" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our <span className="text-gold-gradient">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Meet our team of experienced probate attorneys dedicated to guiding you through complex legal matters with
            expertise and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              {/* Attorney Image */}
              <div className="h-64 sm:h-72 md:h-80 relative overflow-hidden">
                <Image
                  src={attorney.image || "/placeholder.svg"}
                  alt={attorney.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={attorney.id === "george-brennen"}
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{attorney.name}</h3>
                <p className="text-gold-DEFAULT font-medium mb-2 sm:mb-3">{attorney.position}</p>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 flex-grow">{attorney.shortBio}</p>
                <div className="flex flex-col gap-2 mb-4">
                  <a
                    href={`mailto:${attorney.email}`}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold-DEFAULT transition-colors"
                  >
                    <Mail className="h-4 w-4 text-gold-DEFAULT flex-shrink-0" />
                    <span className="truncate">{attorney.email}</span>
                  </a>
                  <a
                    href={`https://${attorney.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-gold-DEFAULT transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-gold-DEFAULT flex-shrink-0" />
                    <span className="truncate">LinkedIn Profile</span>
                  </a>
                </div>
                <CustomButton
                  href={`/attorneys/${attorney.id}`}
                  className="w-full bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white"
                >
                  View Profile
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

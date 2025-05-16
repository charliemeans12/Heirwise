import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomButton from "@/components/custom-button"
import { Mail, Phone, Briefcase, Award, GraduationCap, FileText, Linkedin } from "lucide-react"
import Image from "next/image"

interface Attorney {
  id: string
  name: string
  position: string
  email: string
  phone: string
  linkedin: string
  education: string[]
  experience: string[]
  practiceAreas: string[]
  barAdmissions: string[]
  bio: string
  image: string
}

const attorneys: Record<string, Attorney> = {
  "george-brennen": {
    id: "george-brennen",
    name: "George Brennen",
    position: "Founding Partner",
    email: "georgebrennen@heirwise.com",
    phone: "+1 806-884-4140",
    linkedin: "linkedin.com/in/george-brennen",
    education: ["J.D., Harvard Law School, 2001", "B.A., Political Science, Yale University, 1998"],
    experience: [
      "Founding Partner, Heir Wise Probate (2008-Present)",
      "Senior Associate, Legacy Law Group (2003-2008)",
      "Associate, Estate Planning Partners (2001-2003)",
    ],
    practiceAreas: ["Probate Administration", "Estate Planning", "Trust Administration", "Estate Tax Planning"],
    barAdmissions: [
      "State Bar of California",
      "U.S. District Court, Northern District of California",
      "U.S. Court of Appeals, Ninth Circuit",
    ],
    bio: "George Brennen is the Founding Partner at Heir Wise Probate, where he leads the probate administration practice. With over 20 years of experience, George has guided hundreds of families through the probate process with compassion and expertise. His strategic approach to complex estate matters has earned him recognition as one of the top probate attorneys in the region. George is known for his ability to navigate intricate legal issues while maintaining a focus on his clients' emotional needs during difficult times. He has successfully administered estates ranging from modest to multi-million dollar portfolios and has particular expertise in cases involving complex family dynamics. Outside of his legal practice, George is actively involved in the community, serving on the boards of several non-profit organizations focused on elder care and financial literacy.",
    image: "/images/attorneys/george-brennen.jpeg",
  },
  "hellen-white": {
    id: "hellen-white",
    name: "Hellen White",
    position: "Senior Partner",
    email: "hellenwhite@heirwise.com",
    phone: "+1 209-645-7822",
    linkedin: "linkedin.com/in/hellen-white",
    education: ["J.D., Stanford Law School, 2003", "B.A., Economics, University of California, Berkeley, 2000"],
    experience: [
      "Senior Partner, Heir Wise Probate (2010-Present)",
      "Partner, Trust & Estate Specialists (2007-2010)",
      "Associate, Rodriguez & Associates (2003-2007)",
    ],
    practiceAreas: ["Estate Planning", "Trust Administration", "Business Succession Planning", "Charitable Planning"],
    barAdmissions: ["State Bar of California", "U.S. District Court, Central District of California"],
    bio: "Hellen White is a Senior Partner at Heir Wise Probate, specializing in estate planning and trust administration. With nearly two decades of experience, Hellen has helped hundreds of clients create comprehensive estate plans that protect their assets and provide for their loved ones. Her expertise in tax planning strategies has saved clients millions in potential estate taxes. Hellen is particularly known for her work with high-net-worth individuals and business owners, developing sophisticated estate and succession plans that address complex financial situations. She regularly conducts workshops on estate planning matters and has been recognized for her ability to explain complex legal concepts in accessible terms. Hellen brings a warm, personable approach to her practice, building long-term relationships with clients as their trusted advisor through life's transitions.",
    image: "/images/attorneys/hellen-white.jpeg",
  },
  "michael-jones": {
    id: "michael-jones",
    name: "Michael Jones",
    position: "Senior in Probate",
    email: "michaeljones@heirwise.com",
    phone: "+1 225-289-4371",
    linkedin: "linkedin.com/in/michael-jones",
    education: ["J.D., UCLA School of Law, 2016", "B.A., Philosophy, University of Michigan, 2013"],
    experience: [
      "Senior in Probate, Heir Wise Probate (2019-Present)",
      "Associate, Litigation Specialists Group (2016-2019)",
    ],
    practiceAreas: ["Probate Litigation", "Will Contests", "Trust Disputes", "Fiduciary Litigation"],
    barAdmissions: ["State Bar of California", "U.S. District Court, Eastern District of California"],
    bio: "Michael Jones is a Senior in Probate at Heir Wise Probate, specializing in probate litigation and complex estate disputes. With his analytical mind and background in philosophy, Michael excels at identifying core issues in complex probate matters and developing effective resolution strategies. He has successfully represented beneficiaries, executors, and trustees in a wide range of contested matters, from will contests to breach of fiduciary duty claims. Michael is known for his thorough case preparation, persuasive writing skills, and strategic approach to litigation. While he is a formidable advocate in the courtroom, he also recognizes the emotional and financial toll of litigation and works diligently to find opportunities for settlement when possible, preserving family relationships and estate assets.",
    image: "/images/attorneys/michael-jones.jpeg",
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const attorney = attorneys[params.id]

  if (!attorney) {
    return {
      title: "Attorney Not Found",
      description: "The requested attorney profile could not be found.",
    }
  }

  return {
    title: `${attorney.name} - ${attorney.position}`,
    description: attorney.bio.substring(0, 160) + "...",
    alternates: {
      canonical: `/attorneys/${attorney.id}`,
    },
    openGraph: {
      title: `${attorney.name} - ${attorney.position} | Heir Wise Probate`,
      description: attorney.bio.substring(0, 160) + "...",
      url: `https://heirwise.com/attorneys/${attorney.id}`,
      images: [
        {
          url: attorney.image,
          width: 600,
          height: 600,
          alt: attorney.name,
        },
      ],
    },
  }
}

export default function AttorneyProfile({ params }: { params: { id: string } }) {
  const attorney = attorneys[params.id]

  if (!attorney) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-10 sm:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Attorney Not Found</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Sorry, we couldn't find the attorney you're looking for.
          </p>
          <CustomButton href="/attorneys" className="bg-amber-700 hover:bg-amber-800 text-white">
            View All Attorneys
          </CustomButton>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Watermark Background */}
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="/images/justice/lady-justice-gold.webp"
            alt="Lady Justice"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-10 sm:py-16 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Rest of the component remains the same */}
            <div className="lg:col-span-1">
              {/* Attorney Image */}
              <div className="h-64 sm:h-80 md:h-96 relative rounded-lg overflow-hidden mb-6">
                <Image
                  src={attorney.image || "/placeholder.svg"}
                  alt={attorney.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-md">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Information</h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700 mr-2 sm:mr-3 flex-shrink-0" />
                    <a
                      href={`mailto:${attorney.email}`}
                      className="text-sm sm:text-base text-gray-700 hover:text-amber-700 break-all"
                    >
                      {attorney.email}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700 mr-2 sm:mr-3 flex-shrink-0" />
                    <a
                      href={`tel:${attorney.phone}`}
                      className="text-sm sm:text-base text-gray-700 hover:text-amber-700"
                    >
                      {attorney.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-700 mr-2 sm:mr-3 flex-shrink-0" />
                    <a
                      href={`https://${attorney.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-700 hover:text-amber-700"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <CustomButton href="/contact" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    Schedule a Consultation
                  </CustomButton>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{attorney.name}</h1>
              <p className="text-lg sm:text-xl text-amber-700 font-medium mb-4 sm:mb-6">{attorney.position}</p>

              <div className="prose max-w-none mb-6 sm:mb-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700">{attorney.bio}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-2 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Education</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    {attorney.education.map((edu, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-700">
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-2 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Bar Admissions</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    {attorney.barAdmissions.map((bar, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-700">
                        {bar}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-2 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Experience</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    {attorney.experience.map((exp, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-700">
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-amber-700 mr-2 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Practice Areas</h3>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    {attorney.practiceAreas.map((area, index) => (
                      <li key={index} className="text-sm sm:text-base text-gray-700">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

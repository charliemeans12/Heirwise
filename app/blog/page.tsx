import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomButton from "@/components/custom-button"
import { CalendarIcon } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Legal Insights Blog",
  description: "Stay informed with our latest articles and legal updates from our experienced probate attorneys.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Legal Insights Blog | Heir Wise Probate",
    description: "Stay informed with our latest articles and legal updates from our experienced probate attorneys.",
    url: "https://heirwise.com/blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heir Wise Probate Blog",
      },
    ],
  },
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  externalUrl: string
  imageSrc: string
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: "probate-process-explained",
      title: "The Probate Process Explained: A Step-by-Step Guide",
      excerpt:
        "Learn about the key stages of the probate process in California and what to expect when administering an estate.",
      date: "June 15, 2025",
      author: "Elizabeth Parker",
      category: "Probate Administration",
      externalUrl: "https://www.probatelawyerblog.com/probate-process-explained",
      imageSrc: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "estate-planning-essentials",
      title: "Estate Planning Essentials: Beyond Just a Will",
      excerpt:
        "A comprehensive guide to estate planning tools and strategies to protect your assets and provide for your loved ones.",
      date: "May 22, 2025",
      author: "James Rodriguez",
      category: "Estate Planning",
      externalUrl: "https://www.probatelawyerblog.com/estate-planning-essentials",
      imageSrc: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "trust-administration-tips",
      title: "5 Common Mistakes in Trust Administration and How to Avoid Them",
      excerpt:
        "Important considerations for trustees to ensure they fulfill their fiduciary duties and avoid potential liability.",
      date: "April 10, 2025",
      author: "James Rodriguez",
      category: "Trust Administration",
      externalUrl: "https://www.probatelawyerblog.com/trust-administration-tips",
      imageSrc: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "guardianship-basics",
      title: "Guardianship vs. Conservatorship: Understanding the Differences",
      excerpt: "An overview of legal protections available for minors and incapacitated adults in California.",
      date: "March 5, 2025",
      author: "Elizabeth Parker",
      category: "Guardianships",
      externalUrl: "https://www.probatelawyerblog.com/guardianship-basics",
      imageSrc: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "contesting-will",
      title: "Grounds for Contesting a Will in California",
      excerpt:
        "Learn about the legal bases for challenging the validity of a will and what evidence is typically required.",
      date: "February 18, 2025",
      author: "Marcus Johnson",
      category: "Probate Litigation",
      externalUrl: "https://www.probatelawyerblog.com/contesting-will",
      imageSrc: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "small-estate-procedures",
      title: "Small Estate Procedures: Alternatives to Full Probate",
      excerpt: "Understanding simplified procedures available for smaller estates that can save time and money.",
      date: "January 30, 2025",
      author: "Elizabeth Parker",
      category: "Probate Administration",
      externalUrl: "https://www.probatelawyerblog.com/small-estate-procedures",
      imageSrc: "/placeholder.svg?height=300&width=500",
    },
    {
      id: "understanding-personal-injury-claims",
      title: "Understanding Personal Injury Claims in 2025",
      excerpt:
        "Learn about the key elements of personal injury claims and how recent legal changes might affect your case.",
      date: "June 15, 2025",
      author: "Jane Smith",
      category: "Personal Injury",
      externalUrl: "https://www.probatelawyerblog.com/personal-injury-claims-2025",
      imageSrc: "/images/blog/personal-injury-claims.webp",
    },
    {
      id: "estate-planning-guide",
      title: "Essential Estate Planning Guide for Families",
      excerpt:
        "A comprehensive guide to estate planning that helps protect your family's future and secure your legacy.",
      date: "May 22, 2025",
      author: "John Doe",
      category: "Estate Planning",
      externalUrl: "https://www.probatelawyerblog.com/estate-planning-guide",
      imageSrc: "/images/blog/estate-planning-guide.jpeg",
    },
    {
      id: "business-formation-tips",
      title: "Top 5 Legal Considerations When Forming a Business",
      excerpt:
        "Important legal aspects to consider when starting a new business to avoid common pitfalls and legal issues.",
      date: "April 10, 2025",
      author: "Michael Johnson",
      category: "Business Law",
      externalUrl: "https://www.probatelawyerblog.com/business-formation-tips",
      imageSrc: "/images/blog/business-formation-tips.jpeg",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 sm:py-16 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Legal Insights Blog</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Stay informed with our latest articles and legal updates from our experienced probate attorneys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
              {/* Blog Image */}
              <div className="h-40 sm:h-48 relative">
                <Image
                  src={post.imageSrc || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs sm:text-sm text-gray-500">By {post.author}</span>
                  <CustomButton
                    href={post.externalUrl}
                    className="bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
                  >
                    Read More
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

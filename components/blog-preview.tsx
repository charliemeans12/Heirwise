import { CalendarIcon } from "lucide-react"
import CustomButton from "@/components/custom-button"
import Image from "next/image"

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

export default function BlogPreview() {
  const blogPosts: BlogPost[] = [
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
    <section id="blog" className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            <span className="text-gold-gradient">Legal</span> Insights
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Stay informed with our latest articles and legal updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
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
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gold-DEFAULT" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-gold-DEFAULT">{post.category}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-500">By {post.author}</span>
                  <CustomButton
                    href={post.externalUrl}
                    className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
                  >
                    Read More
                  </CustomButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <CustomButton
            href="/blog"
            variant="outline"
            className="border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-50"
          >
            View All Articles
          </CustomButton>
        </div>
      </div>
    </section>
  )
}

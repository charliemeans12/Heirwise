import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomButton from "@/components/custom-button"
import { CalendarIcon, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

interface BlogPost {
  id: string
  title: string
  date: string
  author: string
  category: string
  content: string
  imageSrc: string
  excerpt?: string
}

// Update the dates in the blogPosts object to reflect 2025
const blogPosts: Record<string, BlogPost> = {
  "understanding-personal-injury-claims": {
    id: "understanding-personal-injury-claims",
    title: "Understanding Personal Injury Claims in 2025",
    date: "June 15, 2025",
    author: "Jane Smith",
    category: "Personal Injury",
    imageSrc: "/images/blog/personal-injury-claims.webp",
    excerpt:
      "Learn about the key elements of personal injury claims and how recent legal changes might affect your case.",
    content: `
      <p>Personal injury law allows individuals who have been harmed due to someone else's negligence to seek compensation for their injuries. Understanding the key elements of a personal injury claim can help you navigate the legal process more effectively.</p>
      
      <h2>Elements of a Personal Injury Claim</h2>
      
      <p>To succeed in a personal injury claim, you typically need to establish four key elements:</p>
      
      <ol>
        <li><strong>Duty of Care:</strong> The defendant owed you a duty of care. For example, drivers have a duty to operate their vehicles safely.</li>
        <li><strong>Breach of Duty:</strong> The defendant breached that duty through negligence or intentional actions.</li>
        <li><strong>Causation:</strong> The defendant's breach directly caused your injuries.</li>
        <li><strong>Damages:</strong> You suffered actual damages, such as medical expenses, lost wages, or pain and suffering.</li>
      </ol>
      
      <h2>Types of Personal Injury Cases</h2>
      
      <p>Personal injury law covers a wide range of incidents, including:</p>
      
      <ul>
        <li>Car accidents</li>
        <li>Slip and fall incidents</li>
        <li>Medical malpractice</li>
        <li>Workplace injuries</li>
        <li>Product liability</li>
        <li>Dog bites</li>
      </ul>
      
      <h2>Compensation in Personal Injury Cases</h2>
      
      <p>If your personal injury claim is successful, you may be entitled to various types of compensation, including:</p>
      
      <ul>
        <li><strong>Medical Expenses:</strong> Coverage for past and future medical treatment related to your injuries.</li>
        <li><strong>Lost Wages:</strong> Compensation for time missed from work and potential future earnings if your ability to work has been affected.</li>
        <li><strong>Pain and Suffering:</strong> Compensation for physical pain and emotional distress.</li>
        <li><strong>Property Damage:</strong> Reimbursement for damaged property, such as your vehicle in a car accident.</li>
        <li><strong>Loss of Enjoyment:</strong> Compensation for the inability to enjoy hobbies and activities you participated in before the injury.</li>
      </ul>
      
      <h2>Statute of Limitations</h2>
      
      <p>It's important to be aware that there are time limits, known as statutes of limitations, for filing personal injury claims. These vary by state but typically range from one to three years from the date of the injury. Failing to file within this timeframe can result in losing your right to seek compensation.</p>
      
      <h2>Recent Changes in Personal Injury Law</h2>
      
      <p>In 2025, several states have implemented changes to their personal injury laws, including:</p>
      
      <ul>
        <li>Modifications to damage caps in medical malpractice cases</li>
        <li>Updates to comparative negligence rules</li>
        <li>Changes in how pain and suffering damages are calculated</li>
      </ul>
      
      <h2>Working with a Personal Injury Attorney</h2>
      
      <p>Navigating a personal injury claim can be complex. An experienced personal injury attorney can help you understand your rights, gather evidence, negotiate with insurance companies, and represent you in court if necessary.</p>
      
      <p>If you've been injured due to someone else's negligence, contact Trust Haven Law Firm for a free consultation to discuss your case and explore your legal options.</p>
    `,
  },
  "estate-planning-guide": {
    id: "estate-planning-guide",
    title: "Essential Estate Planning Guide for Families",
    date: "May 22, 2025",
    author: "John Doe",
    category: "Estate Planning",
    imageSrc: "/images/blog/estate-planning-guide.jpeg",
    excerpt: "A comprehensive guide to estate planning that helps protect your family's future and secure your legacy.",
    content: `
      <p>Estate planning is a crucial process that helps ensure your assets are distributed according to your wishes after your death and that your loved ones are provided for. This guide covers the essential elements of estate planning that every family should consider.</p>
      
      <h2>Why Estate Planning Matters</h2>
      
      <p>Many people believe estate planning is only for the wealthy, but this is a common misconception. Estate planning is important for everyone, regardless of the size of their estate, for several reasons:</p>
      
      <ul>
        <li>It allows you to determine how your assets will be distributed</li>
        <li>It can minimize taxes and legal fees</li>
        <li>It helps avoid family disputes over inheritance</li>
        <li>It ensures your minor children will be cared for by guardians of your choosing</li>
        <li>It allows you to make healthcare decisions in advance</li>
      </ul>
      
      <h2>Key Components of an Estate Plan</h2>
      
      <h3>1. Will</h3>
      
      <p>A will is a legal document that specifies how you want your assets distributed after your death. It also allows you to name guardians for minor children. Without a will, your assets will be distributed according to state law, which may not align with your wishes.</p>
      
      <h3>2. Trust</h3>
      
      <p>Trusts can serve various purposes in estate planning. A revocable living trust allows your assets to pass to beneficiaries without going through probate, which can be time-consuming and expensive. Trusts can also help manage assets for minor children or beneficiaries with special needs.</p>
      
      <h3>3. Power of Attorney</h3>
      
      <p>A power of attorney designates someone to make financial decisions on your behalf if you become incapacitated. This ensures your financial affairs continue to be managed even if you're unable to do so yourself.</p>
      
      <h3>4. Healthcare Directive</h3>
      
      <p>Also known as a living will, a healthcare directive outlines your wishes for medical treatment if you're unable to communicate them yourself. This document can include instructions regarding life support, pain management, and organ donation.</p>
      
      <h3>5. Beneficiary Designations</h3>
      
      <p>Certain assets, such as life insurance policies, retirement accounts, and payable-on-death bank accounts, pass to beneficiaries based on beneficiary designations rather than instructions in your will. It's important to keep these designations up to date.</p>
      
      <h2>Estate Planning for Different Life Stages</h2>
      
      <h3>Young Families</h3>
      
      <p>For young families, the primary estate planning concerns often include:</p>
      <ul>
        <li>Naming guardians for minor children</li>
        <li>Setting up trusts to manage assets for children</li>
        <li>Ensuring adequate life insurance coverage</li>
      </ul>
      
      <h3>Mid-Life</h3>
      
      <p>As you accumulate more assets and your children grow, your estate planning needs may evolve to include:</p>
      <ul>
        <li>More complex tax planning</li>
        <li>Business succession planning</li>
        <li>Long-term care considerations</li>
      </ul>
      
      <h3>Retirement and Beyond</h3>
      
      <p>In retirement, estate planning often focuses on:</p>
      <ul>
        <li>Minimizing estate taxes</li>
        <li>Planning for healthcare needs</li>
        <li>Charitable giving</li>
        <li>Legacy planning</li>
      </ul>
      
      <h2>Reviewing and Updating Your Estate Plan</h2>
      
      <p>Estate planning is not a one-time event. You should review and update your estate plan regularly, especially after major life events such as:</p>
      <ul>
        <li>Marriage or divorce</li>
        <li>Birth or adoption of a child</li>
        <li>Death of a spouse or beneficiary</li>
        <li>Significant changes in assets</li>
        <li>Moving to a different state</li>
        <li>Changes in tax laws</li>
      </ul>
      
      <p>At Trust Haven Law Firm, our experienced estate planning attorneys can help you create a comprehensive estate plan tailored to your unique needs and goals. Contact us today to schedule a consultation.</p>
    `,
  },
  "business-formation-tips": {
    id: "business-formation-tips",
    title: "Top 5 Legal Considerations When Forming a Business",
    date: "April 10, 2025",
    author: "Michael Johnson",
    category: "Business Law",
    imageSrc: "/images/blog/business-formation-tips.jpeg",
    excerpt:
      "Important legal aspects to consider when starting a new business to avoid common pitfalls and legal issues.",
    content: `
      <p>Starting a new business is an exciting venture, but it's important to address key legal considerations from the beginning to avoid potential issues down the road. Here are the top five legal aspects to consider when forming a business.</p>
      
      <h2>1. Choose the Right Business Structure</h2>
      
      <p>One of the most important decisions you'll make when starting a business is selecting the appropriate legal structure. Common options include:</p>
      
      <ul>
        <li><strong>Sole Proprietorship:</strong> The simplest structure, but offers no personal liability protection.</li>
        <li><strong>Partnership:</strong> Allows for shared ownership, but partners are typically personally liable for business debts.</li>
        <li><strong>Limited Liability Company (LLC):</strong> Provides liability protection while offering tax flexibility.</li>
        <li><strong>Corporation:</strong> Offers strong liability protection but involves more complex regulatory requirements.</li>
        <li><strong>S Corporation:</strong> Provides liability protection with pass-through taxation benefits.</li>
      </ul>
      
      <p>Each structure has different implications for taxes, personal liability, paperwork, and ability to raise capital. Consulting with an attorney can help you determine which structure best suits your business goals.</p>
      
      <h2>2. Comply with Registration and Licensing Requirements</h2>
      
      <p>Depending on your business type and location, you may need to:</p>
      
      <ul>
        <li>Register your business name</li>
        <li>Obtain a federal Employer Identification Number (EIN)</li>
        <li>Register for state and local taxes</li>
        <li>Obtain business licenses and permits</li>
        <li>Register with state agencies if forming an LLC or corporation</li>
      </ul>
      
      <p>Failure to comply with registration and licensing requirements can result in penalties, fines, or even forced closure of your business.</p>
      
      <h2>3. Draft Comprehensive Agreements</h2>
      
      <p>Clear, well-drafted agreements are essential for preventing disputes and protecting your business interests. Key documents may include:</p>
      
      <ul>
        <li><strong>Operating Agreement or Bylaws:</strong> Outlines how the business will be managed and how decisions will be made.</li>
        <li><strong>Partnership Agreement:</strong> Defines the rights and responsibilities of each partner.</li>
        <li><strong>Shareholder Agreement:</strong> Establishes shareholders' rights, responsibilities, and procedures for handling disputes.</li>
        <li><strong>Employment Agreements:</strong> Clarifies expectations, responsibilities, and terms of employment.</li>
        <li><strong>Non-Disclosure Agreements:</strong> Protects confidential business information.</li>
        <li><strong>Client/Customer Contracts:</strong> Establishes terms of service and payment conditions.</li>
      </ul>
      
      <h2>4. Protect Your Intellectual Property</h2>
      
      <p>Intellectual property (IP) can be one of your business's most valuable assets. Consider protecting:</p>
      
      <ul>
        <li><strong>Trademarks:</strong> Protect your business name, logo, and slogans.</li>
        <li><strong>Copyrights:</strong> Protect original creative works such as content, software, or designs.</li>
        <li><strong>Patents:</strong> Protect inventions and unique processes.</li>
        <li><strong>Trade Secrets:</strong> Protect valuable confidential information through NDAs and security measures.</li>
      </ul>
      
      <p>Identifying and protecting your IP early can prevent costly disputes and unauthorized use of your business assets.</p>
      
      <h2>5. Understand Employment Laws</h2>
      
      <p>If you plan to hire employees, you need to comply with various employment laws, including:</p>
      
      <ul>
        <li>Fair labor standards and minimum wage requirements</li>
        <li>Anti-discrimination laws</li>
        <li>Workplace safety regulations</li>
        <li>Tax withholding requirements</li>
        <li>Workers' compensation insurance</li>
        <li>Employee benefits regulations</li>
      </ul>
      
      <p>Employment laws vary by location and can be complex. Working with an employment attorney can help ensure compliance and avoid potential lawsuits.</p>

      <h2>Conclusion</h2>

      <p>Taking the time to address these legal considerations at the outset of your business can save you significant time, money, and stress in the future. At Trust Haven Law Firm, our business attorneys can guide you through the formation process and help establish a solid legal foundation for your business. Contact us today to schedule a consultation.</p>
    `,
  },
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts[params.id]

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
    alternates: {
      canonical: `/blog/${post.id}`,
    },
    openGraph: {
      title: `${post.title} | Heir Wise Probate Blog`,
      description: post.excerpt || post.content.substring(0, 160).replace(/<[^>]*>/g, "") + "...",
      url: `https://heirwise.com/blog/${post.id}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category, "law", "legal advice", "probate"],
      images: [
        {
          url: post.imageSrc,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id]

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-10 sm:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <CustomButton href="/blog" className="bg-amber-700 hover:bg-amber-800 text-white">
            View All Blog Posts
          </CustomButton>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 sm:py-16 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <CustomButton
              href="/blog"
              variant="outline"
              className="flex items-center gap-2 border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              Back to Blog
            </CustomButton>
          </div>

          {/* Blog Header Image */}
          <div className="h-48 sm:h-64 md:h-80 relative rounded-lg mb-6 sm:mb-8 overflow-hidden">
            <Image
              src={post.imageSrc || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 800px"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center text-gray-500 mb-6 sm:mb-8 gap-y-2">
            <div className="flex items-center mr-4 sm:mr-6">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="text-sm sm:text-base">{post.author}</span>
            </div>
            <div className="flex items-center mr-4 sm:mr-6">
              <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="text-sm sm:text-base">{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="text-sm sm:text-base">{post.category}</span>
            </div>
          </div>

          <div
            className="prose max-w-none mb-10 sm:mb-12 text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Share This Article</h3>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-500 hover:text-amber-700">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Share on Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-700">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Share on Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-700">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Share on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

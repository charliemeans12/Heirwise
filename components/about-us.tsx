import CustomButton from "@/components/custom-button"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section id="about-us" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-gold-gradient">Heir Wise Probate</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Founded on the principles of integrity, excellence, and compassion, Heir Wise Probate has been guiding
              clients through probate and estate matters for over 15 years.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Our team of experienced attorneys specializes exclusively in probate law, estate planning, and trust
              administration. We understand that dealing with these matters often comes during difficult times, which is
              why we approach each case with sensitivity and personalized attention.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-8">
              With a track record of successfully administering estates of all sizes and complexities, we have
              established ourselves as trusted advisors in probate law. Our approach combines legal expertise with
              genuine care for our clients' well-being, ensuring that you receive the best possible representation
              during life's most challenging transitions.
            </p>
            <CustomButton
              href="/about"
              className="bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white px-4 py-2 sm:px-6 sm:py-3 rounded w-full sm:w-auto"
            >
              Meet Our Team
            </CustomButton>
          </div>

          <div className="order-first lg:order-last">
            {/* About Us Image */}
            <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden relative">
              <Image
                src="/images/team/law-team.jpeg"
                alt="Heir Wise Probate Team Image - Gavel and law books symbolizing our commitment to justice and legal expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import PracticeAreas from "@/components/practice-areas"
import AboutUs from "@/components/about-us"
import AttorneyProfiles from "@/components/attorney-profiles"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import ContactUs from "@/components/contact-us"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen pb-mobile-bar md:pb-0">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <AboutUs />
      <AttorneyProfiles />
      <Testimonials />
      <BlogPreview />
      <FAQSection />
      <ContactUs />
      <Footer />
    </main>
  )
}

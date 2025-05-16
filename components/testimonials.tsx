import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Heir Wise Probate guided me through the complex probate process after my father's passing with exceptional professionalism and compassion. Their expertise made a difficult time much easier to navigate.",
      author: "Rebecca Thompson",
      role: "Probate Client",
    },
    {
      quote:
        "The attorneys at Heir Wise helped me create a comprehensive estate plan that gave me peace of mind knowing my family will be taken care of. Their attention to detail and personalized approach was impressive.",
      author: "David Martinez",
      role: "Estate Planning Client",
    },
    {
      quote:
        "When our family faced a complicated trust dispute, Heir Wise Probate developed a strategy that protected our interests while preserving family relationships. Their expertise in trust litigation is unmatched.",
      author: "Jennifer Wilson",
      role: "Trust Litigation Client",
    },
  ]

  return (
    <section id="testimonials" className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Client <span className="text-gold-gradient">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg h-full">
              <CardContent className="pt-6">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-gold-DEFAULT text-gold-DEFAULT" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t pt-3 sm:pt-4">
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.author}</p>
                  <p className="text-gold-DEFAULT text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

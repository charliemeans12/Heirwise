"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import CustomButton from "@/components/custom-button"
import { useMobile } from "@/hooks/use-mobile"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isMobile = useMobile()

  const faqs: FAQItem[] = [
    {
      question: "What exactly is probate and why is it necessary?",
      answer:
        "Probate is the legal process of validating a deceased person's will, paying their debts, and distributing their assets to beneficiaries. It's necessary to ensure that the deceased's wishes are carried out properly, debts are paid, and assets are transferred legally. Without probate, beneficiaries may face difficulties accessing certain assets or resolving disputes over inheritance.",
    },
    {
      question: "How long does the probate process typically take in California?",
      answer:
        "In California, the probate process typically takes between 9 months to 1.5 years to complete, depending on the complexity of the estate, whether there are any disputes among beneficiaries, and the court's schedule. Simple estates with clear wills and no disputes may be resolved more quickly, while complex estates or contested wills can take significantly longer.",
    },
    {
      question: "Can probate be avoided?",
      answer:
        "Yes, probate can be avoided through proper estate planning. Common strategies include creating a revocable living trust, holding property in joint tenancy with right of survivorship, designating beneficiaries on financial accounts and insurance policies, and using transfer-on-death deeds for real estate. At Heir Wise Probate, we can help you develop an estate plan that minimizes or eliminates the need for probate.",
    },
    {
      question: "What's the difference between a will and a trust?",
      answer:
        "A will is a legal document that specifies how you want your assets distributed after death and goes through probate. A trust is a legal arrangement where a trustee holds and manages assets for beneficiaries, typically avoiding probate. Wills become public record, while trusts remain private. Trusts can also provide for management of assets during incapacity and offer more control over when and how beneficiaries receive assets.",
    },
    {
      question: "Do I need an attorney to handle probate?",
      answer:
        "While it's technically possible to handle probate without an attorney, it's generally not recommended. Probate involves complex legal procedures, court filings, and deadlines. An experienced probate attorney can navigate these complexities, ensure compliance with all legal requirements, handle any disputes that arise, and potentially save the estate money by avoiding costly mistakes. At Heir Wise Probate, we guide executors through every step of the process.",
    },
    {
      question: "What happens if someone dies without a will in California?",
      answer:
        "When someone dies without a will (intestate) in California, state law determines who inherits their assets. Typically, assets go first to the spouse and children, then to other relatives in a specific order. The court will appoint an administrator to handle the estate. This process can be more time-consuming and may result in assets being distributed differently than the deceased might have wished, which is why having a will is so important.",
    },
    {
      question: "How much does probate cost in California?",
      answer:
        "Probate costs in California typically include court filing fees, attorney fees, executor fees, and other administrative expenses. Attorney and executor fees are set by state law as a percentage of the estate's value, starting at 4% for the first $100,000 and decreasing for larger estates. For a $500,000 estate, fees for the attorney and executor could each be around $13,000. Additional costs may include appraisal fees, accounting fees, and bond premiums.",
    },
    {
      question: "What are the executor's responsibilities during probate?",
      answer:
        "An executor's responsibilities include filing the will with the probate court, notifying beneficiaries and creditors, creating an inventory of assets, paying debts and taxes, managing the estate's assets during probate, and ultimately distributing assets to beneficiaries. The executor has a fiduciary duty to act in the best interests of the estate and its beneficiaries. Our attorneys can provide guidance to executors throughout this process.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about probate, estate planning, and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <CustomButton
                className={`flex justify-between items-center w-full p-4 sm:p-5 text-left focus:outline-none bg-transparent hover:bg-transparent ${
                  openIndex === index ? "bg-gold-50" : ""
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  className={`text-base sm:text-lg font-semibold ${openIndex === index ? "text-gold-DEFAULT" : "text-gray-900"}`}
                >
                  {faq.question}
                </h3>
                <span className={`ml-2 flex-shrink-0 ${openIndex === index ? "text-gold-DEFAULT" : "text-gray-500"}`}>
                  {openIndex === index ? (
                    <ChevronUp size={isMobile ? 18 : 20} />
                  ) : (
                    <ChevronDown size={isMobile ? 18 : 20} />
                  )}
                </span>
              </CustomButton>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import CustomButton from "@/components/custom-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, AlertCircle, CheckCircle2, Globe } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : undefined
      case "email":
        return value.trim() === ""
          ? "Email is required"
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? "Invalid email address"
            : undefined
      case "phone":
        return value.trim() === ""
          ? "Phone number is required"
          : !/^(\+\d{1,2}\s?)?($$\d{3}$$|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)
            ? "Invalid phone number"
            : undefined
      case "message":
        return value.trim() === ""
          ? "Message is required"
          : value.trim().length < 10
            ? "Message must be at least 10 characters"
            : undefined
      default:
        return undefined
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) {
        newErrors[key as keyof FormErrors] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    setTouched(allTouched)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)
      setSubmitSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" })
        setErrors({})
        setTouched({})
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-us" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            <span className="text-gold-gradient">Contact</span> Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Schedule a free consultation with our experienced probate attorneys today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Get In Touch</h3>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 flex items-start">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-green-800 mb-1">Message Sent Successfully!</h4>
                  <p className="text-sm sm:text-base text-green-700">
                    Thank you for contacting Heir Wise Probate. One of our attorneys will get back to you shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="name" className="flex justify-between text-sm sm:text-base">
                      <span>Full Name</span>
                      {touched.name && errors.name && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.name}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`text-sm sm:text-base p-2 sm:p-3 ${
                        touched.name && errors.name
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "focus-visible:ring-gold-DEFAULT"
                      }`}
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="flex justify-between text-sm sm:text-base">
                      <span>Email Address</span>
                      {touched.email && errors.email && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.email}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={`text-sm sm:text-base p-2 sm:p-3 ${
                        touched.email && errors.email
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "focus-visible:ring-gold-DEFAULT"
                      }`}
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="phone" className="flex justify-between text-sm sm:text-base">
                      <span>Phone Number</span>
                      {touched.phone && errors.phone && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.phone}
                        </span>
                      )}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="(123) 456-7890"
                      className={`text-sm sm:text-base p-2 sm:p-3 ${
                        touched.phone && errors.phone
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "focus-visible:ring-gold-DEFAULT"
                      }`}
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="message" className="flex justify-between text-sm sm:text-base">
                      <span>Your Message</span>
                      {touched.message && errors.message && (
                        <span className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {errors.message}
                        </span>
                      )}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Please describe your probate or estate planning needs..."
                      rows={4}
                      className={`text-sm sm:text-base p-2 sm:p-3 ${
                        touched.message && errors.message
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "focus-visible:ring-gold-DEFAULT"
                      }`}
                    />
                  </div>
                </div>

                <CustomButton
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-gradient-start to-gold-gradient-end hover:from-gold-dark hover:to-gold-dark text-white px-4 py-2 sm:px-6 sm:py-3 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </CustomButton>
              </form>
            )}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Our Information</h3>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gold-DEFAULT mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Office Locations</h4>
                  <p className="text-gray-700 text-sm sm:text-base mb-2">
                    We have offices in the United States, United Kingdom, and Barbados.
                  </p>
                  <CustomButton
                    href="/contact/locations"
                    variant="outline"
                    className="text-xs sm:text-sm border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-50 px-2 py-1"
                  >
                    View All Locations
                  </CustomButton>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gold-DEFAULT mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone Numbers</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gold-DEFAULT mr-2" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        USA:{" "}
                        <a href="tel:+18068844140" className="hover:text-gold-DEFAULT">
                          +1 806-884-4140
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gold-DEFAULT mr-2" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        UK:{" "}
                        <a href="tel:+442079460523" className="hover:text-gold-DEFAULT">
                          +44 20 7946 0523
                        </a>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gold-DEFAULT mr-2" />
                      <p className="text-gray-700 text-sm sm:text-base">
                        Barbados:{" "}
                        <a href="tel:+13203376499" className="hover:text-gold-DEFAULT">
                          +1 320-337-6499
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gold-DEFAULT mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email Address</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    <a href="mailto:info@heirwise.com" className="hover:text-gold-DEFAULT">
                      info@heirwise.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-gold-DEFAULT mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Office Hours</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Monday - Friday: 9:00 AM - 5:00 PM (Local Time)
                    <br />
                    Saturday: By appointment only
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Image - Replace with actual map or embed Google Maps */}
            <div className="h-48 sm:h-56 md:h-64 bg-gray-200 rounded-lg mt-6 sm:mt-8 flex items-center justify-center text-gray-500">
              <div className="flex flex-col items-center">
                <Globe className="h-12 w-12 mb-3 text-gold-DEFAULT" />
                <p>Office Locations Map</p>
                <CustomButton
                  href="/contact/locations"
                  variant="outline"
                  className="mt-3 border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-50"
                >
                  View All Locations
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

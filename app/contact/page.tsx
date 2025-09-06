"use client"

import { useState } from "react"
import { Mail, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // fake submit
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[#FCF7ED] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 p-10">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h1
            className="text-4xl font-bold text-[#1E1E1E]"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Contact Form
          </h1>
          <div className="text-right">
            <p className="font-semibold text-[#1E1E1E] mb-1">Social Media</p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D96E4C] hover:text-[#7B2D26] transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-[#1E1E1E] mb-6">
          Get in touch with our team directly at{" "}
          <a
            href="mailto:elementarylearningcenter@gmail.com"
            className="text-[#D96E4C] font-semibold hover:underline"
          >
            elementarylearningcenter@gmail.com
          </a>{" "}
          or fill out the form below.
        </p>
        <p className="text-[#1E1E1E] mb-8">We&apos;ll get back to you as soon as possible!<br />* = required</p>

        {/* Success message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
            ✅ Your message has been sent! Someone from our team will reach out shortly.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D96E4C]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D96E4C]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D96E4C]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#1E1E1E]">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D96E4C]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0E2C47] hover:bg-[#0a1f33] text-white font-semibold text-lg px-6 py-4 rounded-lg transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

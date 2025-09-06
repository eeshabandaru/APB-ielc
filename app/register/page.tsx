"use client"

import { useState } from "react"

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FCF7ED]">
      {/* Hero */}
      <section className="bg-[#F0E9DA] border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-extrabold text-[#E65E3B] tracking-tight mb-6">
            Register A Student
          </h1>
          <p className="text-lg text-[#1E1E1E] max-w-3xl leading-relaxed">
            Fill out the form below to register a student. Students can join any grade level. 
            They can review concepts from the grade they just completed or they can get a head start 
            by joining the next grade level group.
          </p>
          <p className="mt-6 text-lg text-[#1E1E1E] max-w-3xl leading-relaxed">
            <span className="font-semibold">Program Dates: June 17th to July 31st.</span>
            <br />
            <span className="font-semibold">Registration Deadline: June 15th at 11:59 pm PDT.</span>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student & Parent Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Student Full Name *</label>
                <input type="text" required className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Parent Full Name *</label>
                <input type="text" required className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Parent Email *</label>
                <input type="email" required className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Parent Phone Number *</label>
                <input type="tel" required className="w-full border rounded-lg px-4 py-2" />
              </div>
            </div>

            {/* Program Questions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">How did you hear about our program? *</label>
                <div className="space-y-2">
                  {["Email", "Whatsapp", "Nextdoor", "Facebook", "Family/Friend"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input type="radio" name="source" value={opt} required />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Which grade level will the student be going into? *
                </label>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((g) => (
                    <label key={g} className="flex items-center gap-2">
                      <input type="radio" name="gradeLevel" value={`Grade ${g}`} required />
                      Grade {g}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Class Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">
                  Which Math class would the student like to join? *
                </label>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((g) => (
                    <label key={g} className="flex items-center gap-2">
                      <input type="radio" name="mathClass" value={`Grade ${g}`} required />
                      Grade {g}
                    </label>
                  ))}
                  <label className="flex items-center gap-2">
                    <input type="radio" name="mathClass" value="None" required />
                    None
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Which English class would the student like to join? *
                </label>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((g) => (
                    <label key={g} className="flex items-center gap-2">
                      <input type="radio" name="englishClass" value={`Grade ${g}`} required />
                      Grade {g}
                    </label>
                  ))}
                  <label className="flex items-center gap-2">
                    <input type="radio" name="englishClass" value="None" required />
                    None
                  </label>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block font-semibold mb-2">Additional Comments</label>
              <textarea className="w-full border rounded-lg px-4 py-2" rows={4}></textarea>
            </div>

            {/* Lesson Times */}
            <div className="bg-[#FFF4E1] p-6 rounded-lg border border-[#E6CD67]">
              <p className="font-semibold mb-2">The lesson times are listed below:</p>
              <p>All Math Lessons: Mondays and Wednesdays 4–5 pm PDT.</p>
              <p>All English Lessons: Tuesdays and Thursdays 4–5 pm PDT.</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#E65E3B] hover:bg-[#c94d2e] text-white font-bold py-3 px-6 rounded-lg"
            >
              Submit Registration
            </button>
          </form>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[#0E2C47] mb-4">🎉 Successfully Registered!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Thank you for registering. Someone from our team will reach out to you shortly with
              the Zoom link and class details. We’re excited to have your student join us!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

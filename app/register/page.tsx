"use client"

import { useRef, useState } from "react"

type Grade = "1" | "2" | "3" | "4" | "5" | "none"

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const confirmRef = useRef<HTMLDivElement | null>(null)

  // simple demo state (no backend)
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    hearAbout: "",
    nextYearGrade: "" as Grade | "",
    mathChoice: "" as Grade | "",
    englishChoice: "" as Grade | "",
    notes: "",
  })

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // fake delay to simulate a submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // scroll to the confirmation
      confirmRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      // (optional) reset the form
      setForm({
        studentName: "",
        parentName: "",
        parentEmail: "",
        parentPhone: "",
        hearAbout: "",
        nextYearGrade: "",
        mathChoice: "",
        englishChoice: "",
        notes: "",
      })
    }, 900)
  }

  const gradeOptions: Array<{ label: string; value: Grade }> = [
    { label: "Grade 1", value: "1" },
    { label: "Grade 2", value: "2" },
    { label: "Grade 3", value: "3" },
    { label: "Grade 4", value: "4" },
    { label: "Grade 5", value: "5" },
    { label: "None", value: "none" },
  ]

  return (
    <div className="min-h-screen bg-[#F7F5EC]">
      {/* HERO (extra top padding so it never feels crowded under the navbar) */}
      <section
        className="relative h-[280px] md:h-[340px] w-full"
        style={{ paddingTop: "84px" }}
        aria-label="Registration banner"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/happy-elementary-school-children-learning-together.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto w-full px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-sm">
              Register A Student
            </h1>
            <p className="mt-4 text-white text-lg md:text-xl max-w-3xl">
              Fill out the form below to register a student. Students can join any grade level to
              review concepts or get a head start on the next level.
            </p>
            <p className="mt-4 inline-block bg-white/95 text-[#0B1D39] px-4 py-2 rounded-xl text-base md:text-lg font-semibold">
              Registration Deadline: <span className="underline">June 15th at 11:59 pm PDT</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONFIRMATION (shows after submit) */}
      {submitted && (
        <div ref={confirmRef} className="max-w-6xl mx-auto px-4">
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-900 p-6">
            <h2 className="text-2xl md:text-3xl font-bold">Registration received 🎉</h2>
            <p className="mt-2 text-lg">
              Thanks for registering! Our team will reach out shortly with the{" "}
              <strong>Zoom link</strong>, class details, and next steps. You’ll also receive a copy
              via email at the address you provided.
            </p>
          </div>
        </div>
      )}

      {/* FORM */}
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white shadow-lg border border-neutral-200 p-6 md:p-10"
          >
            {/* Row: Names */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="studentName" className="block text-sm font-semibold text-[#0B1D39]">
                  Student Full Name *
                </label>
                <input
                  id="studentName"
                  required
                  value={form.studentName}
                  onChange={(e) => update("studentName", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[17px] outline-none focus:ring-2 focus:ring-[#D96E4C]"
                  placeholder="Jane Student"
                />
              </div>

              <div>
                <label htmlFor="parentName" className="block text-sm font-semibold text-[#0B1D39]">
                  Parent Full Name *
                </label>
                <input
                  id="parentName"
                  required
                  value={form.parentName}
                  onChange={(e) => update("parentName", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[17px] outline-none focus:ring-2 focus:ring-[#D96E4C]"
                  placeholder="Alex Parent"
                />
              </div>
            </div>

            {/* Row: Contact */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="parentEmail" className="block text-sm font-semibold text-[#0B1D39]">
                  Parent Email *
                </label>
                <input
                  id="parentEmail"
                  type="email"
                  required
                  value={form.parentEmail}
                  onChange={(e) => update("parentEmail", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[17px] outline-none focus:ring-2 focus:ring-[#D96E4C]"
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <label htmlFor="parentPhone" className="block text-sm font-semibold text-[#0B1D39]">
                  Parent Phone Number *
                </label>
                <input
                  id="parentPhone"
                  required
                  value={form.parentPhone}
                  onChange={(e) => update("parentPhone", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[17px] outline-none focus:ring-2 focus:ring-[#D96E4C]"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>

            {/* How did you hear */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0B1D39]">
                How did you hear about our program? *
              </p>
              <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {["Email", "Whatsapp", "Nextdoor", "Facebook", "Family/Friend"].map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 py-3 cursor-pointer hover:bg-neutral-50"
                  >
                    <input
                      type="radio"
                      name="hear"
                      value={label}
                      required
                      checked={form.hearAbout === label}
                      onChange={(e) => update("hearAbout", e.target.value)}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Next year grade */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0B1D39]">
                Which grade level will the student be going to in the following school year? *
              </p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {gradeOptions.slice(0, 5).map((g) => (
                  <label
                    key={g.value}
                    className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 py-3 cursor-pointer hover:bg-neutral-50"
                  >
                    <input
                      type="radio"
                      name="nextYearGrade"
                      value={g.value}
                      required
                      checked={form.nextYearGrade === g.value}
                      onChange={(e) =>
                        update("nextYearGrade", e.target.value as Grade)
                      }
                    />
                    <span>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Math choice */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0B1D39]">
                Which Math class would the student like to join? *
              </p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {gradeOptions.map((g) => (
                  <label
                    key={g.value + "-math"}
                    className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 py-3 cursor-pointer hover:bg-neutral-50"
                  >
                    <input
                      type="radio"
                      name="mathChoice"
                      value={g.value}
                      required
                      checked={form.mathChoice === g.value}
                      onChange={(e) => update("mathChoice", e.target.value as Grade)}
                    />
                    <span>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* English choice */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0B1D39]">
                Which English class would the student like to join? *
              </p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {gradeOptions.map((g) => (
                  <label
                    key={g.value + "-eng"}
                    className="flex items-center gap-3 rounded-lg border border-neutral-300 bg-white px-4 py-3 cursor-pointer hover:bg-neutral-50"
                  >
                    <input
                      type="radio"
                      name="englishChoice"
                      value={g.value}
                      required
                      checked={form.englishChoice === g.value}
                      onChange={(e) =>
                        update("englishChoice", e.target.value as Grade)
                      }
                    />
                    <span>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mt-8">
              <label htmlFor="notes" className="block text-sm font-semibold text-[#0B1D39]">
                Do you have any additional comments or questions? If the grade you want is full and
                you want the waitlist, please note the subject and grade level.
              </label>
              <textarea
                id="notes"
                rows={5}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[17px] outline-none focus:ring-2 focus:ring-[#D96E4C]"
              />
            </div>

            {/* Footer note + submit */}
            <p className="mt-8 text-sm text-neutral-700">
              <strong>Note:</strong> Please only fill out the registration form once. We’ll send an
              email with syllabi and further information in June.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-[#3D55DF] py-4 text-white text-lg font-semibold hover:opacity-95 disabled:opacity-60"
            >
              {loading ? "Submitting…" : "Submit Registration"}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

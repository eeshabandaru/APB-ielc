"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, GraduationCap, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Grade1EnglishPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mathDropdownOpen, setMathDropdownOpen] = useState(false)
  const [englishDropdownOpen, setEnglishDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FCF7ED" }}>
      {/* Header - Same as landing page */}
      
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{ paddingTop: "120px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/elementary-school-children-reading-books-together-.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-[#1E1E1E] mb-4" style={{ fontFamily: "Oswald" }}>
              Grade 1 English
            </h1>
          </div>
        </div>
      </section>

      {/* Program Overview / Learning Goals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1E1E1E]" style={{ fontFamily: "Oswald, sans-serif" }}>
                Designed to prepare & reinforce literacy concepts.
              </h2>
              <p className="text-lg text-[#1E1E1E] leading-relaxed">
                Our tutors prepare students from grades 1 to 5 with reading comprehension and grammar skills in
                accordance with the Common Core Standards in 60-minute sessions conducted over Zoom.
              </p>
            </div>
            <div className="space-y-6">
              <h3
                className="text-2xl font-bold text-[#1E1E1E] flex items-center gap-3"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                <BookOpen className="w-6 h-6 text-[#D96E4C]" />
                Learning Goals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D96E4C] mt-1 flex-shrink-0" />
                  <span className="text-[#1E1E1E]">Learn parts of speech (nouns, adjectives, etc).</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D96E4C] mt-1 flex-shrink-0" />
                  <span className="text-[#1E1E1E]">Compare & contrast topics.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D96E4C] mt-1 flex-shrink-0" />
                  <span className="text-[#1E1E1E]">Identify the main idea in literature.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D96E4C] mt-1 flex-shrink-0" />
                  <span className="text-[#1E1E1E]">Describe story elements (setting, characters).</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D96E4C] mt-1 flex-shrink-0" />
                  <span className="text-[#1E1E1E]">Grammar basics.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#FCF7ED" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-[#1E1E1E] mb-12"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Schedule
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#D96E4C] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-left">
                    <h3 className="font-bold text-white text-xl mb-2">Tuesdays: English</h3>
                    <p className="text-white/90">Grades 1–5</p>
                    <p className="text-white/90">4–5 PM PDT</p>
                    <p className="text-white/90 text-sm">Dates: June 17 to July 31</p>
                  </div>
                  <div className="bg-[#0E2C47] text-white px-4 py-2 rounded-full text-sm font-semibold">Grade 1</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#D96E4C] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-left">
                    <h3 className="font-bold text-white text-xl mb-2">Thursdays: English</h3>
                    <p className="text-white/90">Grades 1–5</p>
                    <p className="text-white/90">4–5 PM PDT</p>
                    <p className="text-white/90 text-sm">Dates: June 17 to July 31</p>
                  </div>
                  <div className="bg-[#0E2C47] text-white px-4 py-2 rounded-full text-sm font-semibold">Grade 1</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Your Tutors */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-[#1E1E1E] mb-12"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Meet Your Tutors
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="/professional-headshot-of-young-latina-woman-smilin.jpg" alt="Sofia Padilla" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#D96E4C]" style={{ fontFamily: "Oswald, sans-serif" }}>
                Sofia Padilla
              </h3>
              <p className="text-[#1E1E1E] leading-relaxed">
                Third-year at San Diego State (Biology, Pre-Dental). Loves education, hikes, family time, and new cafés.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img src="/professional-headshot-of-young-indian-woman-smilin.jpg" alt="Aaryaa Chitale" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-[#D96E4C]" style={{ fontFamily: "Oswald, sans-serif" }}>
                Aaryaa Chitale
              </h3>
              <p className="text-[#1E1E1E] leading-relaxed">
                Second-year Psychology at UC Davis; passionate about education systems; enjoys dance, cooking, and
                exploring green spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold text-[#1E1E1E]" style={{ fontFamily: "Oswald, sans-serif" }}>
            Get Ahead, Stay Ahead.
          </h2>
          <Button
            size="lg"
            className="bg-[#0E2C47] hover:bg-[#0a1f33] text-white text-xl px-12 py-6 rounded-full font-semibold"
          >
            Save your Free Spot
          </Button>
          <p className="text-[#1E1E1E] text-lg">Deadline to Apply: June 14 at 11:59 PM PST.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#D96E4C] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">IELC</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="/register" className="text-white hover:text-white/80 font-medium">
                Register a Student
              </a>
              <a href="/mathematics" className="text-white hover:text-white/80 font-medium">
                Mathematics
              </a>
              <a href="/english" className="text-white hover:text-white/80 font-medium">
                English
              </a>
              <a href="/contact" className="text-white hover:text-white/80 font-medium">
                Contact Us
              </a>
              <a href="/about" className="text-white hover:text-white/80 font-medium">
                About Us
              </a>
            </nav>
            <div className="flex justify-end">
              <Button
                size="lg"
                className="bg-[#E6CD67] hover:bg-[#d4b84f] text-[#1E1E1E] rounded-full px-6 py-3 font-semibold"
              >
                Let's Chat!
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

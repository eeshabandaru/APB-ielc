"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Clock, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="bg-[#D96E4C] py-20 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            About IELC
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed text-pretty">
            Our mission is to help every student get ahead and stay ahead.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1D39] mb-8">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            IELC is committed to providing free, high-quality English and Math support to elementary students, helping
            them build confidence and strong academic foundations through small group sessions led by university tutors.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg lg:text-xl font-bold text-gray-800 leading-relaxed text-center">
                Many young learners lack opportunities to practice English and Math skills in the presence and under the
                guidance of a tutor. Our no cost organization provides an environment for students to collaborate with
                tutors and peers to promote critical thinking and problem solving.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg lg:text-xl font-bold text-gray-800 leading-relaxed text-center">
                Our mission is to empower young learners with the skills and confidence they need to succeed in the
                upcoming school year's English and Math curriculum through explicit teaching and interactive practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#0B1D39] mb-12">
            Our Impact
          </h2>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-[#D96E4C] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-[#D96E4C]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">500+</h3>
                  <p className="text-white/90 font-medium">Students Enrolled</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#FFD93D] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-[#FFD93D]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0B1D39]">200+</h3>
                  <p className="text-[#0B1D39]/90 font-medium">Families Helped</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#8B2F2F] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-[#8B2F2F]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">95%</h3>
                  <p className="text-white/90 font-medium">Improved Confidence & Readiness</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0B1D39] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-[#0B1D39]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">7-Week</h3>
                  <p className="text-white/90 font-medium">Summer Program</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#D96E4C] border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-[#D96E4C]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">20+</h3>
                  <p className="text-white/90 font-medium">Volunteer Tutors</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials */}
          {/* (unchanged testimonial cards) */}

          {/* Impact Story Section */}
          <div className="bg-[#D96E4C] rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/happy-elementary-school-children-learning-together.jpg"
                  alt="Students and tutors working together"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-white" />
                  <h3 className="text-4xl font-bold text-white text-balance">Growing Together</h3>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  What started as a small initiative to help a few students has grown into a thriving community of
                  learners. IELC was founded on the belief that every child deserves access to quality education,
                  regardless of their background.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Through the dedication of our volunteer tutors and the enthusiasm of our students, we've created an
                  environment where learning is both effective and enjoyable. Each summer, we see students gain
                  confidence, improve their skills, and develop a love for learning that lasts well beyond our
                  seven-week program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1D39] mb-8">
            Ready to Get Started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#7B2D26] hover:bg-[#651f1d] text-white text-lg px-12 py-4 rounded-full font-semibold"
            >
              Register a Student
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#7B2D26] text-[#7B2D26] hover:bg-[#7B2D26] hover:text-white text-lg px-12 py-4 rounded-full font-semibold transition-colors bg-transparent"
            >
              Become a Tutor
            </Button>
          </div>
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
                className="bg-[#FFD93D] hover:bg-[#E6CD67] text-[#0B1D39] rounded-full px-6 py-3 font-semibold"
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

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, Heart, GraduationCap } from "lucide-react"

export default function StayTunedPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="bg-[#D96E4C] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Oswald'] text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">Stay Tuned!</h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed text-pretty max-w-3xl mx-auto">
            Parents told us summer support wasn't enough. You asked for one-on-one help during the school year — and we
            listened.
          </p>
          <Button
            size="lg"
            className="bg-[#7B2D26] hover:bg-[#651f1d] text-white text-lg px-8 py-4 rounded-full font-semibold"
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 px-4 bg-[#F7F5EC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Oswald'] text-4xl font-bold text-[#0B1D39] mb-8">Built From Parent Feedback</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Families wanted consistent, personalized support beyond our summer program. This new initiative offers free,
            one-on-one after-school tutoring to strengthen math and reading foundations throughout the school year.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Oswald'] text-4xl font-bold text-center text-[#0B1D39] mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#D96E4C] rounded-full flex items-center justify-center mx-auto">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Oswald'] text-xl font-bold text-[#0B1D39]">Personalized 1:1 Sessions</h3>
                <p className="text-gray-600 leading-relaxed">Dedicated tutor attention to match each child's needs.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-[#0B1D39]" />
                </div>
                <h3 className="font-['Oswald'] text-xl font-bold text-[#0B1D39]">Flexible Scheduling</h3>
                <p className="text-gray-600 leading-relaxed">Sessions that fit around busy parent schedules.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#8B2F2F] rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Oswald'] text-xl font-bold text-[#0B1D39]">Always Free</h3>
                <p className="text-gray-600 leading-relaxed">
                  No cost, just like our summer program — accessible to every family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilot Announcement Section */}
      <section className="py-16 px-4 bg-[#F7F5EC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Oswald'] text-4xl font-bold text-[#0B1D39] mb-8">Launching Soon</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We're piloting this program in the upcoming school year. Parents who join the waitlist will help us shape
            and improve it.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#D96E4C] border-0 shadow-xl rounded-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="font-['Oswald'] text-4xl font-bold text-white">Be the First to Know</h2>
              <Button
                size="lg"
                className="bg-[#7B2D26] hover:bg-[#651f1d] text-white text-lg px-8 py-4 rounded-full font-semibold"
              >
                Join the Waitlist
              </Button>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Your feedback made this possible — your feedback will guide what comes next.
              </p>
            </CardContent>
          </Card>
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
              <a href="/about" className="text-white hover:text-white/80 font-medium">
                About Us
              </a>
              <a href="/stay-tuned" className="text-white hover:text-white/80 font-medium">
                Stay Tuned!
              </a>
              <a href="/contact" className="text-white hover:text-white/80 font-medium">
                Contact Us
              </a>
            </nav>
            <div className="flex justify-end">
              <Button
                size="lg"
                className="bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0B1D39] rounded-full px-6 py-3 font-semibold"
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

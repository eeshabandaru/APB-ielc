"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Clock, Heart } from "lucide-react"

/* ---------------- helpers ---------------- */
function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.25) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])
  return inView
}

function CountUp({
  to,
  duration = 1200,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

/* ---------------- page ---------------- */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-[#D96E4C] py-20 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">About IELC</h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Our mission is to help every student get ahead and stay ahead.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#0B1D39] mb-8">Our Mission</h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            IELC provides free, high-quality English and Math support to elementary students, helping them build
            confidence and strong academic foundations through small-group sessions led by university tutors.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg lg:text-xl font-medium text-gray-800 leading-relaxed text-center">
              Many young learners lack opportunities to practice English and Math with a tutor. Our no-cost program
              creates a space to collaborate with tutors and peers and develop problem-solving skills.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg lg:text-xl font-medium text-gray-800 leading-relaxed text-center">
              We empower learners with explicit teaching and interactive practice so they’re ready for the coming
              school year’s curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center text-[#0B1D39] mb-12">Our Impact</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <MetricCard bg="#D96E4C" icon={<Users className="w-8 h-8 text-[#D96E4C]" />}>
              <MetricNumber className="text-white">
                <CountUp to={500} suffix="+" />
              </MetricNumber>
              <MetricLabel className="text-white/90">Students Enrolled</MetricLabel>
            </MetricCard>

            <MetricCard bg="#8B2F2F" icon={<Award className="w-8 h-8 text-[#8B2F2F]" />}>
              <MetricNumber className="text-white">
                <CountUp to={95} suffix="%" />
              </MetricNumber>
              <MetricLabel className="text-white/90">Improved Confidence &amp; Readiness</MetricLabel>
            </MetricCard>

            <MetricCard bg="#0B1D39" icon={<Clock className="w-8 h-8 text-[#0B1D39]" />}>
              <MetricNumber className="text-white">7-Week</MetricNumber>
              <MetricLabel className="text-white/90">Summer Program</MetricLabel>
            </MetricCard>

            <MetricCard bg="#D96E4C" icon={<BookOpen className="w-8 h-8 text-[#D96E4C]" />}>
              <MetricNumber className="text-white">
                <CountUp to={20} suffix="+" />
              </MetricNumber>
              <MetricLabel className="text-white/90">Volunteer Tutors</MetricLabel>
            </MetricCard>
          </div>

          {/* Growth chart */}
          <GrowthBars />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center text-[#0B1D39] mb-12">What Families Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              initial="M"
              chip="#D96E4C"
              quote="IELC helped my daughter gain so much confidence in math. She went from being afraid of numbers to enjoying her homework!"
              name="Maria Rodriguez"
              role="Parent of Grade 3 Student"
            />
            <Testimonial
              initial="A"
              chip="#8B2F2F"
              quote="The tutors are amazing! Learning feels fun — I made new friends and now I love reading."
              name="Alex Chen"
              role="Grade 2 Student"
            />
            <Testimonial
              initial="S"
              chip="#FFD93D"
              darkText
              quote="My child felt prepared for the new year thanks to IELC. The teacher noticed the improvement right away."
              name="Sarah Johnson"
              role="Parent of Grade 3 Student"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#D96E4C] rounded-2xl p-8 lg:p-12 max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/happy-elementary-school-children-learning-together.jpg"
              alt="Students and tutors working together"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-white" />
              <h3 className="text-4xl font-semibold text-white">Growing Together</h3>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              What started as a small initiative has grown into a thriving community. Every summer we see students gain
              confidence, improve their skills, and develop a love for learning.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              With enthusiastic students and dedicated volunteers, IELC keeps opening doors — for learners and families
              alike.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B1D39] mb-8">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#7B2D26] hover:bg-[#651f1d] text-white text-lg px-12 py-4 rounded-full">
              Register a Student
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#7B2D26] text-[#7B2D26] hover:bg-[#7B2D26] hover:text-white text-lg px-12 py-4 rounded-full"
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
              <span className="text-2xl font-semibold text-white">IELC</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="/register" className="text-white hover:text-white/80">Register a Student</a>
              <a href="/mathematics" className="text-white hover:text-white/80">Mathematics</a>
              <a href="/english" className="text-white hover:text-white/80">English</a>
              <a href="/contact" className="text-white hover:text-white/80">Contact Us</a>
              <a href="/about" className="text-white hover:text-white/80">About Us</a>
            </nav>
            <div className="flex justify-end">
              <Button size="lg" className="bg-[#FFD93D] hover:bg-[#E6CD67] text-[#0B1D39] rounded-full px-6 py-3">
                Let's Chat!
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ---------------- components ---------------- */

function MetricCard({
  bg,
  icon,
  children,
}: {
  bg: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <Card className="border-0 shadow-lg rounded-2xl" style={{ backgroundColor: bg }}>
      <CardContent className="p-10 text-center space-y-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">{icon}</div>
        {children}
      </CardContent>
    </Card>
  )
}

function MetricNumber({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`text-4xl md:text-5xl font-semibold ${className}`}>{children}</div>
}

function MetricLabel({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <p className={`text-lg ${className}`}>{children}</p>
}

/* Growth bar chart */
function GrowthBars() {
  const data = [
    { label: "Start (Y1)", value: 20, color: "#E6CD67" },
    { label: "End (Y1)", value: 50, color: "#D96E4C" },
    { label: "Year 2", value: 200, color: "#0B1D39" },
  ]
  const max = 200
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-[#0B1D39] mb-6 text-center">Growth at a Glance</h3>
      <div className="grid sm:grid-cols-3 gap-6 items-end">
        {data.map((d) => {
          const pct = Math.max(8, Math.round((d.value / max) * 100))
          return (
            <div key={d.label} className="flex flex-col items-center gap-3">
              <div className="w-20 sm:w-24 h-56 bg-gray-100 rounded-xl relative overflow-hidden">
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-t-xl transition-[height]"
                  style={{ height: `${pct}%`, backgroundColor: d.color }}
                />
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-[#0B1D39]">{d.value.toLocaleString()}</div>
                <div className="text-sm text-gray-600">{d.label}</div>
              </div>
            </div>
          )
        })}
      </div>
      <p className="text-center text-gray-600 mt-6">
        We started with <span className="font-semibold">20</span> students, closed Year 1 at{" "}
        <span className="font-semibold">50</span>, and reached{" "}
        <span className="font-semibold">200+</span> families in Year 2.
      </p>
    </div>
  )
}

function Testimonial({
  initial,
  chip,
  quote,
  name,
  role,
  darkText = false,
}: {
  initial: string
  chip: string
  quote: string
  name: string
  role: string
  darkText?: boolean
}) {
  return (
    <Card className="bg-white border-0 shadow-lg rounded-2xl">
      <CardContent className="p-8">
        <p className="text-gray-700 italic mb-4 leading-relaxed">“{quote}”</p>
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: chip }}
          >
            <span className={`text-lg font-semibold ${darkText ? "text-[#0B1D39]" : "text-white"}`}>{initial}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

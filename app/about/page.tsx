"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Clock, Heart } from "lucide-react"

/* ---------- tiny helpers: in-view + count-up ---------- */
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
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
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

/* ------------------------------ Page ------------------------------ */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero */}
      <section className="bg-[#D96E4C] py-20 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            About IELC
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Our mission is to help every student get ahead and stay ahead.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#0B1D39] mb-8">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            IELC is committed to providing free, high-quality English and Math support to elementary students, helping
            them build confidence and strong academic foundations through small group sessions led by university tutors.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg lg:text-xl font-medium text-gray-800 leading-relaxed text-center">
              Many young learners lack opportunities to practice English and Math skills with a tutor. Our no-cost
              organization provides a space to collaborate with tutors and peers and to grow critical-thinking and
              problem-solving skills.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg lg:text-xl font-medium text-gray-800 leading-relaxed text-center">
              We empower young learners with the skills and confidence they need to succeed in English and Math through
              explicit teaching and interactive practice.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center text-[#0B1D39] mb-12">
            Our Impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Students Enrolled */}
            <MetricCard bg="#D96E4C" icon={<Users className="w-8 h-8 text-[#D96E4C]" />}>
              <MetricNumber className="text-white">
                <CountUp to={500} suffix="+" />
              </MetricNumber>
              <MetricLabel className="text-white/90">Students Enrolled</MetricLabel>
            </MetricCard>

            {/* Families Reached: Year 1 -> Year 2 */}
            <GrowthCard />

            {/* Confidence */}
            <MetricCard bg="#8B2F2F" icon={<Award className="w-8 h-8 text-[#8B2F2F]" />}>
              <MetricNumber className="text-white">
                <CountUp to={95} suffix="%" />
              </MetricNumber>
              <MetricLabel className="text-white/90">Improved Confidence &amp; Readiness</MetricLabel>
            </MetricCard>

            {/* Duration */}
            <MetricCard bg="#0B1D39" icon={<Clock className="w-8 h-8 text-[#0B1D39]" />}>
              <MetricNumber className="text-white">
                <CountUp to={7} suffix="-Week" />
              </MetricNumber>
              <MetricLabel className="text-white/90">Summer Program</MetricLabel>
            </MetricCard>
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
              What started as a small initiative to help a few students has grown into a thriving community of learners.
              IELC was founded on the belief that every child deserves access to quality education.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              With enthusiastic students and dedicated volunteers, learners gain confidence, improve their skills, and
              develop a love for learning that lasts beyond our seven-week program.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#FCF7ED]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0B1D39] mb-8">
            Ready to Get Started?
          </h2>
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

/* -------------------------- small presentational bits -------------------------- */

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
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
          {icon}
        </div>
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

/* Families Reached with clear Year 1 → Year 2 growth */
function GrowthCard() {
  const arrow = useMemo(() => <span className="inline-block px-1">→</span>, [])
  return (
    <MetricCard bg="#FFD93D" icon={<Heart className="w-8 h-8 text-[#FFD93D]" />}>
      <div className="space-y-3 text-[#0B1D39] leading-tight">
        <p className="text-xl">
          Year 1:&nbsp;
          <span className="text-3xl font-semibold align-middle">
            <CountUp to={20} /> {arrow} <CountUp to={50} />
          </span>
          <span className="block mt-1 text-lg">students</span>
        </p>
        <p className="text-xl">
          Year 2:&nbsp;
          <span className="text-3xl font-semibold align-middle">
            <CountUp to={200} suffix="+" />
          </span>
          <span className="ml-1">families</span>
        </p>
      </div>
      <MetricLabel className="text-[#0B1D39]/90">Families Reached</MetricLabel>
    </MetricCard>
  )
}

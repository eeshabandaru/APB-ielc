"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Globe, GraduationCap } from "lucide-react"

export default function IELCLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted py-16 px-4" style={{ paddingTop: "88px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary text-balance">Get Ahead, Stay Ahead.</h1>
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed text-pretty">
                Our free seven-week summer program prepares elementary students for the upcoming school year's English
                and Math curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 rounded-full"
                >
                  Register a Student
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-elementary-school-children-learning-together.jpg"
                alt="Children learning together"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <Button
                size="sm"
                className="absolute bottom-4 right-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-2"
              >
                Let's Chat!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why IELC Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 text-balance">
            Why Interactive Elementary Learning Center (IELC)?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Interactive Learning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Furthered engagement through deliberate practice under the guidance of tutors to enhance skill
                  mastery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">Collaborative Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structured tasks and lessons that promote group work and interaction between tutors and students.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">No Cost and Online</h3>
                <p className="text-muted-foreground leading-relaxed">Easily accessible, high-quality education.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Schedule</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-accent border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-background font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="font-bold text-accent-foreground text-lg">Monday</h3>
                  <p className="text-accent-foreground font-semibold">Math</p>
                  <p className="text-accent-foreground/80 text-sm">Grades 1–5</p>
                  <p className="text-accent-foreground/80 text-sm">4–5 PM PDT</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-background font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-foreground text-lg">Tuesday</h3>
                  <p className="text-primary-foreground font-semibold">English</p>
                  <p className="text-primary-foreground/80 text-sm">Grades 1–5</p>
                  <p className="text-primary-foreground/80 text-sm">4–5 PM PDT</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-background font-bold text-lg">W</span>
                </div>
                <div>
                  <h3 className="font-bold text-accent-foreground text-lg">Wednesday</h3>
                  <p className="text-accent-foreground font-semibold">Math</p>
                  <p className="text-accent-foreground/80 text-sm">Grades 1–5</p>
                  <p className="text-accent-foreground/80 text-sm">4–5 PM PDT</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary border-0 shadow-lg rounded-2xl">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mx-auto">
                  <span className="text-background font-bold text-lg">Th</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary-foreground text-lg">Thursday</h3>
                  <p className="text-primary-foreground font-semibold">English</p>
                  <p className="text-primary-foreground/80 text-sm">Grades 1–5</p>
                  <p className="text-primary-foreground/80 text-sm">4–5 PM PDT</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Math Lessons Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Learn About Our Math Lessons</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5].map((grade) => (
              <a key={grade} href={`/math/grade-${grade}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background border-0 rounded-full px-8 py-3 text-lg font-semibold"
                >
                  Grade {grade}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* English Lessons Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">Learn About Our English Lessons</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5].map((grade) => (
              <a key={grade} href={`/english/grade-${grade}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background border-0 rounded-full px-8 py-3 text-lg font-semibold"
                >
                  Grade {grade}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
              <span className="text-2xl font-bold text-primary-foreground">IELC</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="/register" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
                Register a Student
              </a>
              <a href="/mathematics" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
                Mathematics
              </a>
              <a href="/english" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
                English
              </a>
              <a href="/about" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
                About Us
              </a>
              <a href="/stay-tuned" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
                Stay Tuned!
              </a>
              <a href="/contact" className="text-primary-foreground hover:text-primary-foreground/80 font-medium">
                Contact Us
              </a>
            </nav>
            <div className="flex justify-end">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-3 font-semibold"
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

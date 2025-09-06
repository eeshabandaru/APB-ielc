"use client"
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mathDropdownOpen, setMathDropdownOpen] = useState(false)
  const [englishDropdownOpen, setEnglishDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[60] bg-[#D96E4C] shadow-md">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center gap-6">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-xl flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
          IELC
        </a>

        {/* Desktop / Tablet Navigation (visible ≥ sm) */}
        <nav className="hidden sm:flex items-center gap-6 font-bold ml-auto">
          <a
            href="/register"
            className="bg-[#7B2D26] hover:bg-[#651f1d] text-white px-6 py-2 rounded-full transition-colors font-bold"
          >
            Register a Student
          </a>

          {/* Mathematics dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMathDropdownOpen(true)}
            onMouseLeave={() => setMathDropdownOpen(false)}
          >
            <button
              className="text-white font-bold hover:underline hover:opacity-85 transition-all flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={mathDropdownOpen}
            >
              Mathematics
              <ChevronDown className="w-4 h-4" />
            </button>
            {mathDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#D96E4C] rounded-lg shadow-xl py-2 min-w-[160px] z-[100] border border-white/20">
                {([1, 2, 3, 4, 5] as const).map((g) => (
                  <a
                    key={g}
                    href={`/math/grade-${g}`}
                    className="block px-4 py-2 text-white hover:bg-[#0B1D39] transition-colors"
                  >
                    Grade {g}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* English dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setEnglishDropdownOpen(true)}
            onMouseLeave={() => setEnglishDropdownOpen(false)}
          >
            <button
              className="text-white font-bold hover:underline hover:opacity-85 transition-all flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={englishDropdownOpen}
            >
              English
              <ChevronDown className="w-4 h-4" />
            </button>
            {englishDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-[#D96E4C] rounded-lg shadow-xl py-2 min-w-[160px] z-[100] border border-white/20">
                {([1, 2, 3, 4, 5] as const).map((g) => (
                  <a
                    key={g}
                    href={`/english/grade-${g}`}
                    className="block px-4 py-2 text-white hover:bg-[#0B1D39] transition-colors"
                  >
                    Grade {g}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/about" className="text-white font-bold hover:underline hover:opacity-85 transition-all">
            About Us
          </a>
          <a href="/stay-tuned" className="text-white font-bold hover:underline hover:opacity-85 transition-all">
            Stay Tuned!
          </a>
          <a href="/contact" className="text-white font-bold hover:underline hover:opacity-85 transition-all">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Toggle (visible < sm) */}
        <button
          className="sm:hidden text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg border-t border-black/5">
          <div className="px-6 py-4 space-y-4">
            <a
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-[#7B2D26] hover:bg-[#651f1d] text-white px-4 py-3 rounded-full font-semibold text-center transition-colors"
            >
              Register a Student
            </a>

            <div>
              <div className="text-gray-900 font-semibold py-2">Mathematics</div>
              <div className="pl-4 space-y-1">
                {([1, 2, 3, 4, 5] as const).map((g) => (
                  <a
                    key={g}
                    href={`/math/grade-${g}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 py-1 hover:text-gray-900 transition-colors"
                  >
                    Grade {g}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-gray-900 font-semibold py-2">English</div>
              <div className="pl-4 space-y-1">
                {([1, 2, 3, 4, 5] as const).map((g) => (
                  <a
                    key={g}
                    href={`/english/grade-${g}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 py-1 hover:text-gray-900 transition-colors"
                  >
                    Grade {g}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-900 font-semibold py-2 hover:text-gray-700"
            >
              About Us
            </a>
            <a
              href="/stay-tuned"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-900 font-semibold py-2 hover:text-gray-700"
            >
              Stay Tuned!
            </a>
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-900 font-semibold py-2 hover:text-gray-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

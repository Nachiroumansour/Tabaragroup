"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Galerie" },
  { href: "#about", label: "Pourquoi nous" },
  { href: "#testimonials", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isScrolled ? "bg-primary" : "bg-white/20 backdrop-blur-sm"
          }`}>
            <span className={`text-lg font-bold ${isScrolled ? "text-white" : "text-white"}`}>T</span>
          </div>
          <span
            className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-secondary" : "text-white"
            }`}
          >
            TABARA<span className="text-primary">GROUP</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                isScrolled 
                  ? "text-foreground/70 hover:text-primary" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+221707316604"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            +221 70 731 66 04
          </a>
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Link href="#contact">Réserver</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-xl transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground font-medium py-3 px-4 hover:bg-muted rounded-xl hover:text-primary transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t flex flex-col gap-3">
            <a 
              href="tel:+221707316604"
              className="flex items-center justify-center gap-2 py-3 text-foreground font-medium"
            >
              <Phone className="w-4 h-4" />
              +221 70 731 66 04
            </a>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white rounded-xl py-6 shadow-lg"
            >
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Réserver maintenant
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

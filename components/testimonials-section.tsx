"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Marie Dupont",
    location: "Paris, France",
    rating: 5,
    text: "Une expérience incroyable ! Notre guide Mamadou nous a fait découvrir le Sénégal avec une passion contagieuse. Je recommande vivement TABARA GROUP.",
    trip: "Circuit Casamance",
    image: "/images/gallery-1.jpg",
    tags: ["Authenticité", "Accompagnement"]
  },
  {
    name: "Jean-Pierre Martin",
    location: "Lyon, France",
    rating: 5,
    text: "Le circuit sur mesure était parfait. Chaque détail a été pensé pour notre confort. Le Lac Rose restera gravé dans ma mémoire.",
    trip: "Lac Rose & Dakar",
    image: "/images/gallery-4.jpg",
    tags: ["Confort", "Sénégal"]
  },
  {
    name: "Sophie Bernard",
    location: "Bruxelles, Belgique",
    rating: 5,
    text: "Safari exceptionnel dans le parc du Djoudj. L'équipe est professionnelle et attentionnée. Merci pour ces souvenirs magiques !",
    trip: "Safari Djoudj",
    image: "/images/gallery-2.jpg",
    tags: ["Nature", "Professionnalisme"]
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 bg-[#0D1B2A] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Des histoires de voyages <br />
            <span className="text-white/40 italic">inoubliables</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Display Area */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative group">
              {/* Image Container with Video-like feel */}
              <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                {testimonials.map((t, idx) => (
                  <div 
                    key={t.name}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-110 pointer-events-none"}`}
                  >
                    <Image src={t.image} alt={t.trip} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Play Button Mockup for 'Video' effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(var(--primary),0.5)]">
                        <Play className="w-8 h-8 text-black fill-current ml-1" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-6 left-6 flex gap-2">
                      {t.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="absolute -bottom-6 right-6 flex gap-4">
                <button 
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Text Content Area */}
          <div className="lg:col-span-5">
            <div className="relative min-h-[350px] flex flex-col justify-center">
              {testimonials.map((t, idx) => (
                <div 
                  key={t.name + '-text'}
                  className={`transition-all duration-700 ${idx === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"}`}
                >
                  <Quote className="w-12 h-12 text-primary/20 mb-8" />
                  <p className="text-2xl md:text-3xl font-light text-white/90 mb-10 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-white">{t.name}</h4>
                      <p className="text-sm text-primary flex items-center gap-2 tracking-wide font-medium">
                        <Star className="w-4 h-4 fill-current" />
                        A voyage : {t.trip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Simple Dots */}
              <div className="flex gap-3 mt-12">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1 transition-all duration-500 rounded-full ${idx === activeIndex ? "w-12 bg-primary" : "w-4 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

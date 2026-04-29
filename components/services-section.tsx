"use client"

import { Compass, Building2, Palmtree, Binoculars, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Compass,
    title: "Circuit sur Mesure",
    description: "Des itinéraires exclusifs calibrés selon vos aspirations les plus profondes.",
    number: "01",
    image: "/images/gallery-1.jpg"
  },
  {
    icon: Building2,
    title: "Immersion Urbaine",
    description: "Dakar comme vous ne l'avez jamais vue, entre architecture et culture vibrante.",
    number: "02",
    image: "/images/gallery-4.jpg"
  },
  {
    icon: Palmtree,
    title: "Évasion Insulaire",
    description: "Les archipels du Saloum et Gorée sous un angle confidentiel et luxueux.",
    number: "03",
    image: "/images/gallery-3.jpg"
  },
  {
    icon: Binoculars,
    title: "Safaris Privés",
    description: "Rencontrez la faune sauvage dans les réserves nationales avec nos experts.",
    number: "04",
    image: "/images/gallery-2.jpg"
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-24 gap-6 lg:gap-8">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase block mb-4 lg:mb-6">Expertise & Passion</span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-secondary-foreground leading-[1] text-balance">
              Le Sénégal, <br />
              <span className="text-primary italic">réinventé</span>
            </h2>
          </div>
          <p className={`text-muted-foreground text-base md:text-lg max-w-sm mb-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Nous concevons des voyages qui transcendent la simple visite pour devenir des récits de vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-black/5">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative p-10 border-b lg:border-r border-black/5 hover:bg-black transition-all duration-700 cursor-pointer overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 scale-110 group-hover:scale-100 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <service.icon className="w-5 h-5 group-hover:text-primary transition-colors text-black/60" />
                  </div>
                  <span className="text-4xl font-serif text-black/5 group-hover:text-white/10 transition-colors font-bold tracking-tighter">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/60 transition-colors mb-12 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-black/40 group-hover:text-primary transition-colors">
                  En savoir plus
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

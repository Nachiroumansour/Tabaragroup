"use client"

import { Users, Shield, Star, Award, Compass, Heart } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const expertise = [
  {
    icon: Users,
    title: "Connaissance Locale",
    desc: "Nos guides sont nés et ont grandi dans les terres qu'ils vous font découvrir."
  },
  {
    icon: Shield,
    title: "Sécurité & Confort",
    desc: "Une logistique premium pour que votre seule préoccupation soit l'émerveillement."
  },
  {
    icon: Heart,
    title: "Engagement Éthique",
    desc: "Un tourisme qui respecte et soutient directement les communautés locales."
  }
]

export function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden">
              <Image 
                src="/images/monument.jpg" 
                alt="Expertise Tabara" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-12 -right-12 bg-[#0D1B2A] p-10 rounded-3xl shadow-2xl hidden md:block border border-white/10">
              <div className="flex items-center gap-6">
                <div className="text-6xl font-serif font-bold text-primary">15</div>
                <div className="text-white">
                  <span className="block text-2xl font-bold">Ans</span>
                  <span className="text-white/40 uppercase tracking-widest text-xs">D'excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase block mb-6">Notre Promesse</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-black mb-8 leading-tight">
              Bien plus qu'une <br />
              <span className="text-primary italic">simple agence</span>
            </h2>
            <p className="text-lg text-black/60 mb-12 font-light leading-relaxed">
              TABARA GROUP est né d'une volonté simple : partager la richesse du Sénégal avec élégance et authenticité. Nous ne vendons pas des tours, nous créons des ponts culturels.
            </p>

            <div className="space-y-10">
              {expertise.map((item, idx) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-black/50 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

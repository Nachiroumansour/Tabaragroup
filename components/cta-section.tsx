"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Paysage du Sénégal"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-white/90 text-sm font-medium">Votre aventure commence ici</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance">
            Prêt à découvrir le{" "}
            <span className="text-primary">Sénégal</span> ?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Laissez-nous créer pour vous une expérience de voyage inoubliable, 
            sur mesure et authentique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Contactez-nous maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="glass text-white hover:bg-white/20 text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+221707316604" className="flex items-center gap-2">
                Appeler: +221 70 731 66 04
              </a>
            </Button>
          </div>

          {/* Trust elements */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Sans engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

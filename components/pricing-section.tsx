"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Découverte Royale",
    price: "450 €",
    description: "L'essence du Sénégal en quelques jours.",
    features: [
      "Visite guidée de l'Île de Gorée",
      "Excursion au Lac Rose",
      "Safari dans la réserve de Bandia",
      "Transport climatisé privé",
      "Guide certifié bilingue"
    ],
    highlight: false
  },
  {
    name: "Signature Tabara",
    price: "850 €",
    description: "Le parfait équilibre entre confort et aventure.",
    features: [
      "Toutes les prestations Découverte",
      "Immersion dans le Delta du Saloum",
      "Nuitée en écolodge de luxe",
      "Dégustation de gastronomie locale",
      "Shooting photo souvenir pro"
    ],
    highlight: true
  },
  {
    name: "L'Odyssée Teranga",
    price: "1 250 €",
    description: "L'expérience ultime sans aucun compromis.",
    features: [
      "Circuit complet Nord & Sud",
      "Vols internes inclus",
      "Hébergement en suites 5*",
      "Activités exclusives sur mesure",
      "Conciergerie dédiée 24/7"
    ],
    highlight: false
  }
]

export function PricingSection() {
  return (
    <section id="tarifs" className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Nos Forfaits</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#0D1B2A]">
            Investissez dans vos <br /> <span className="italic text-primary">plus beaux souvenirs.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                tier.highlight 
                ? "bg-[#0D1B2A] border-[#0D1B2A] text-white" 
                : "bg-white border-[#0D1B2A]/5 text-[#0D1B2A]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full">
                  Le plus prisé
                </div>
              )}

              <div className="mb-8">
                <h4 className={`text-xl font-serif font-bold mb-2 ${tier.highlight ? "text-primary" : "text-[#0D1B2A]"}`}>
                  {tier.name}
                </h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? "text-white/40" : "text-[#0D1B2A]/40"}`}>/ personne</span>
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlight ? "text-white/60" : "text-[#0D1B2A]/60"}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tier.highlight ? "text-primary" : "text-primary"}`} />
                    <span className={`text-sm font-medium ${tier.highlight ? "text-white/80" : "text-[#0D1B2A]/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlight ? "default" : "outline"}
                className={`w-full h-14 rounded-2xl font-bold text-base transition-all duration-300 ${
                  tier.highlight 
                  ? "bg-primary hover:bg-white text-black hover:text-black border-transparent" 
                  : "border-[#0D1B2A]/20 hover:bg-[#0D1B2A] hover:text-white"
                }`}
              >
                Réserver ce parcours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

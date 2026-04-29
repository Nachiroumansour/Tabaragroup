"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ArrowRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Newsletter Section */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-32 items-center text-center lg:text-left">
          <div className="lg:col-span-6">
            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6">Rejoignez le <span className="text-primary italic">Cercle Tabara</span></h3>
            <p className="text-white/40 text-base md:text-lg font-light max-w-md italic mx-auto lg:mx-0">
              Inscrivez-vous pour recevoir des carnets de voyage exclusifs et nos offres secrètes.
            </p>
          </div>
          <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:max-w-none">
            <form className="relative group mt-6 lg:mt-0">
              <Input 
                placeholder="Votre adresse email" 
                className="h-16 md:h-20 bg-white/5 border-white/10 rounded-full px-6 md:px-10 text-base md:text-lg focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
              />
              <Button className="absolute right-2 top-2 bottom-2 h-auto px-6 md:px-10 rounded-full bg-primary hover:bg-primary/90 text-black font-bold">
                <span className="hidden sm:inline">S'abonner</span>
                <Send className="sm:hidden w-5 h-5" />
                <Send className="hidden sm:inline sm:ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24 text-center lg:text-left">
          
          {/* Brand Story */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <Link href="/" className="text-3xl md:text-4xl font-serif font-bold tracking-tighter mb-6 md:mb-8 block">
              TABARA <span className="text-primary italic">GROUP</span>
            </Link>
            <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-sm font-light mb-8 md:mb-10">
              Experts de la Teranga, nous façonnons des voyages d'exception au Sénégal. Chaque itinéraire est une promesse d'authenticité et d'élégance.
            </p>
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-500">
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8 mt-4 lg:mt-0">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary">Explorer</h4>
            <ul className="space-y-3 md:space-y-4 inline-block text-left">
              {['Services', 'Galerie', 'Témoignages', 'Contact'].map(link => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-base md:text-lg text-white/60 hover:text-primary transition-colors font-light">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
            <div className="w-full max-w-xs mx-auto lg:mx-0">
              <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 md:mb-8 text-center lg:text-left">Bureau Principal</h4>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-base md:text-lg text-white/60 font-light text-left">Dakar Plateau, Boulevard de la République, Sénégal</p>
                </div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-base md:text-lg text-white/60 font-light">+221 70 731 66 04</p>
                </div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-base md:text-lg text-white/60 font-light">contact@tabaragroup.sn</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Artistic Background Text - Hidden on very small screens to avoid overflow issues */}
        <div className="relative mt-12 md:mt-20 text-center select-none pointer-events-none opacity-20 overflow-hidden py-6 md:py-10 hidden sm:block">
           <span className="text-[12vw] font-serif font-black tracking-tighter leading-none inline-block animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 py-4 uppercase">
             SÉNÉGAL AUTHENTIQUE
           </span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 sm:mt-0">
          <p className="text-white/30 text-[9px] md:text-[10px] tracking-widest uppercase font-medium text-center md:text-left">
            © 2026 TABARA GROUP. CRAFTED BY LUXURY TRAVEL EXPERTS.
          </p>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/40">
            <Link href="#" className="hover:text-primary transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-primary transition-colors">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useEffect, useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react"
import {
  buildInquiryMessage,
  buildInquirySubject,
  type BookingInquiry,
} from "@/lib/destination-data"

type ContactSectionProps = {
  bookingInquiry: BookingInquiry | null
}

export function ContactSection({ bookingInquiry }: ContactSectionProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!bookingInquiry) {
      return
    }

    setSubject(buildInquirySubject(bookingInquiry))
    setMessage(buildInquiryMessage(bookingInquiry))
  }, [bookingInquiry])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 1. Envoi silencieux de l'Email via l'API Resend
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      })
      
      // On n'attend pas forcément un succès à 100% de l'email pour basculer sur WhatsApp,
      // l'objectif de WhatsApp est de ne bloquer personne.
      
      // 2. Construction et Redirection vers WhatsApp Web/App
      const phoneNumber = "221707316604" 
      const waText = encodeURIComponent(
        `Bonjour Tabara Group,\n\nMon nom est *${name}*.\n\nSujet : ${subject}\n\n${message}`
      )
      const waUrl = `https://wa.me/${phoneNumber}?text=${waText}`
      
      // Ouvre WhatsApp dans un nouvel onglet ou lance l'application native sur Mobile
      window.open(waUrl, "_blank")

      // Vider le formulaire après envoi
      setName("")
      setEmail("")
      setMessage("")
      setSubject("")
      
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-32 bg-white text-black">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left: Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6">Contactez-nous</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0D1B2A] leading-tight">
                Prêt pour votre prochaine <br /> <span className="italic text-primary">aventure sénégalaise ?</span>
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A]/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-6 h-6 text-[#0D1B2A]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-[#0D1B2A]/40">Adresse</h4>
                  <p className="text-lg font-medium text-[#0D1B2A]">Dakar Plateau, Boulevard de la République, Sénégal</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A]/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-6 h-6 text-[#0D1B2A]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-[#0D1B2A]/40">Email</h4>
                  <p className="text-lg font-medium text-[#0D1B2A]">contact@tabaragroup.sn</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A]/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-6 h-6 text-[#0D1B2A]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-[#0D1B2A]/40">Téléphone</h4>
                  <p className="text-lg font-medium text-[#0D1B2A]">+221 70 731 66 04</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0D1B2A]/5 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-[#0D1B2A]/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              {bookingInquiry ? (
                <div className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Demande pre-remplie</p>
                  <p className="mt-2 text-sm leading-6 text-[#0D1B2A]/70">
                    Le circuit choisi, le rythme et le format de groupe ont deja ete ajoutes au formulaire pour accelerer la demande.
                  </p>
                </div>
              ) : null}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A]/60 ml-4">Nom complet</label>
                  <Input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Abdoulaye Ndiaye" 
                    className="h-14 bg-white border-none rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-black placeholder:text-black/20" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A]/60 ml-4">Email</label>
                  <Input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="email@example.com" 
                    className="h-14 bg-white border-none rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-black placeholder:text-black/20" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A]/60 ml-4">Sujet de votre voyage</label>
                <Input
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Safari, Culture, Plage..."
                  className="h-14 bg-white border-none rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-black placeholder:text-black/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#0D1B2A]/60 ml-4">Message</label>
                <Textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Dites-nous en plus sur vos envies..."
                  className="min-h-[150px] bg-white border-none rounded-2xl p-6 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm text-black placeholder:text-black/20 resize-none"
                />
              </div>

              <Button disabled={isSubmitting} className="w-full h-16 bg-[#0D1B2A] hover:bg-[#1B263B] text-white rounded-2xl font-bold text-lg group transition-all duration-500">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

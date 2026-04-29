"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Calendar, Users, Camera, Mountain, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  destinationOptions,
  periodOptions,
  travelerOptions,
  type SearchFilters,
} from "@/lib/destination-data";

const heroSlides = [
  { 
    id: 1, 
    image: "/images/hero-senegal.jpg", 
    text: "authentique du Sénégal.", 
    color: "text-primary" // Le vert de TabaraGroup
  },
  { 
    id: 2, 
    image: "/images/gallery-4.jpg", 
    text: "sauvage de nos réserves.", 
    color: "text-primary" // Le vert de TabaraGroup
  },
  { 
    id: 3, 
    image: "/images/monument.jpg", 
    text: "de l'héritage dakarois.", 
    color: "text-primary" // Le vert de TabaraGroup
  },
];

type HeroSectionProps = {
  filters: SearchFilters;
  onSearch: (filters: SearchFilters) => void;
};

export default function HeroSection({ filters, onSearch }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [draftFilters, setDraftFilters] = useState<SearchFilters>(filters);

  useEffect(() => {
    // Augmentation du délai à 10 secondes pour un rythme plus contemplatif
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setDraftFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#08121b]">
      {/* Background avec fondu et effet zoom continu (Ken Burns) */}
      <AnimatePresence>
        <motion.div
          key={heroSlides[activeSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            // Durée rallongée pour coller au nouveau délai du slide
            transition={{ duration: 12, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeSlide].image}
              alt="Sénégal"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          {/* Overlay plus sombre pour faire ressortir le texte de luxe */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#08121b]/75" />
        </motion.div>
      </AnimatePresence>

      {/* Contenu aligné en bas - Padding mobile harmonisé */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-6 sm:pb-12 md:pb-20 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col 2xl:flex-row items-start 2xl:items-end justify-between gap-6 lg:gap-10 w-full">
          
          {/* Accroche - À gauche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full xl:max-w-5xl 2xl:max-w-4xl min-w-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Explorez la beauté
              {/* Le conteneur du texte dynamique en Flex pour ne pas casser le flow */}
              <span className="font-serif italic font-light block overflow-hidden mt-1 sm:mt-2 h-auto relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroSlides[activeSlide].id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`block ${heroSlides[activeSlide].color}`}
                  >
                    {heroSlides[activeSlide].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            
            {/* Stats - Caché sur mobile pour alléger */}
            <div className="hidden md:flex items-center gap-8 md:gap-12 mt-12">
              <div>
                <p className="text-2xl font-bold text-white mb-1">300+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">Lieux Incontournables</p>
              </div>
              <div className="flex gap-3">
                {[Camera, Mountain, Sun, MapPin].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Icon className="w-4 h-4 text-white/80" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6 mt-8 text-white/60">
              <div className="w-16 h-px bg-white/20" />
              <p className="text-xs leading-relaxed max-w-sm">
                Des paysages à couper le souffle, une culture riche et une nature préservée à portée de main.
              </p>
            </div>
          </motion.div>

          {/* Barre de recherche - En bas à droite */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-3 sm:p-4 shadow-2xl w-full 2xl:w-auto shrink-0 z-20 mt-4 2xl:mt-0"
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 sm:gap-3">
              {/* Destination */}
              <div className="px-4 py-3 md:py-3 rounded-xl md:rounded-2xl bg-gray-50/80 hover:bg-gray-50 border border-transparent transition-colors w-full md:w-56 lg:w-64 2xl:w-48">
                <p className="text-[9px] md:text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1.5 hidden sm:block">Destination</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
                  <Select value={draftFilters.destination} onValueChange={(v) => updateFilter("destination", v)}>
                    <SelectTrigger className="h-auto border-0 bg-transparent p-0 text-sm sm:text-base md:text-sm font-bold text-gray-900 focus:ring-0 shadow-none">
                      <SelectValue placeholder="Où aller ?" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl border-none">
                      {destinationOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="cursor-pointer">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-100" />

              {/* Date */}
              <div className="px-4 py-3 md:py-3 rounded-xl md:rounded-2xl bg-gray-50/80 hover:bg-gray-50 border border-transparent transition-colors w-full md:w-56 lg:w-64 2xl:w-48">
                <p className="text-[9px] md:text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1.5 hidden sm:block">Période</p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
                  <Select value={draftFilters.period} onValueChange={(v) => updateFilter("period", v)}>
                    <SelectTrigger className="h-auto border-0 bg-transparent p-0 text-sm sm:text-base md:text-sm font-bold text-gray-900 focus:ring-0 shadow-none">
                      <SelectValue placeholder="Quand ?" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl border-none">
                      {periodOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="cursor-pointer">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="hidden md:block w-px h-10 bg-gray-100" />

              {/* Group */}
              <div className="px-4 py-3 md:py-3 rounded-xl md:rounded-2xl bg-gray-50/80 hover:bg-gray-50 border border-transparent transition-colors w-full md:w-56 lg:w-64 2xl:w-48">
                <p className="text-[9px] md:text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1.5 hidden sm:block">Voyageurs</p>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
                  <Select value={draftFilters.travelers} onValueChange={(v) => updateFilter("travelers", v)}>
                    <SelectTrigger className="h-auto border-0 bg-transparent p-0 text-sm sm:text-base md:text-sm font-bold text-gray-900 focus:ring-0 shadow-none">
                      <SelectValue placeholder="Combien ?" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl border-none">
                      {travelerOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value} className="cursor-pointer">{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Button */}
              <Button 
                onClick={() => onSearch(draftFilters)}
                className="w-full md:w-auto h-14 md:h-16 mt-2 md:mt-0 px-6 sm:px-8 rounded-xl md:rounded-2xl bg-[#0d141c] hover:bg-black text-white font-bold text-base shadow-xl md:ml-2"
              >
                Rechercher
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

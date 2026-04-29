"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users, ChevronLeft, ChevronRight, CheckCircle2, X, Compass, ShieldCheck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "./ui/dialog";
import { destinations, type Destination, type SearchFilters } from "../lib/destination-data";

type DestinationsSectionProps = {
  filters: SearchFilters;
  onResetFilters: () => void;
  onReserve: (destination: Destination) => void;
};

export default function DestinationsSection({ filters, onResetFilters, onReserve }: DestinationsSectionProps) {
  const filteredDestinations = useMemo(() => {
    return destinations.filter((d) => {
      const matchesDestination = filters.destination === "all" || d.id === filters.destination;
      const matchesPeriod = filters.period === "all" || d.periodTags.includes(filters.period);
      const matchesTravelers = filters.travelers === "all" || d.travelerTags.includes(filters.travelers);
      return matchesDestination && matchesPeriod && matchesTravelers;
    });
  }, [filters]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    containScroll: "trimSnaps", 
    dragFree: true,
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="destinations" className="bg-[#fcfdfd] py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header Section en Français */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12 mb-10 md:mb-16 px-2 md:px-4">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gray-100/80 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 md:mb-8">
              <Compass className="w-3 h-3" /> Nos Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0d141c] leading-[1.1] tracking-tight w-[106%] md:w-[150%] lg:w-auto">
              Votre Voyage vers la <br className="hidden sm:block" /> Destination Parfaite <br className="hidden sm:block" /> <span className="font-serif italic font-light text-gray-400">Commence Ici</span>
            </h2>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full px-8 py-8 h-auto border-gray-200 text-[#0d141c] font-bold group hover:border-gray-900 transition-all">
            Voir Tous Les Circuits
            <span className="ml-4 w-12 h-12 rounded-full bg-[#0d141c] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6" />
            </span>
          </Button>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="py-16 md:py-24 text-center rounded-[2rem] md:rounded-[3rem] bg-gray-50 border border-dashed border-gray-200 shadow-sm mx-2 md:mx-0">
            <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8">Aucun circuit trouvé pour cette sélection.</p>
            <Button onClick={onResetFilters} variant="outline" className="rounded-full px-6 md:px-8 py-4 md:py-6 text-black border-gray-300">
              Réinitialiser les filtres
            </Button>
          </div>
        ) : (
          <div className="relative group/embla px-2">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -ml-4">
                {filteredDestinations.map((dest) => (
                  <div key={dest.id} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer group relative h-[420px] md:h-[560px] overflow-hidden rounded-[2rem] md:rounded-[2.8rem] bg-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                          <Image 
                            src={dest.image} 
                            alt={dest.title} 
                            fill 
                            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                          
                          {/* Top Action Icon - Hidden on very small screens for cleaner look */}
                          <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-[#0d141c] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-rotate-45">
                            <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                            <Badge className="w-fit mb-3 md:mb-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 px-3 py-1.5 md:px-4 md:py-2 text-[9px] md:text-[10px] uppercase font-bold tracking-widest rounded-full">
                              {dest.location}
                            </Badge>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{dest.title}</h3>
                            <div className="flex items-center gap-2 text-white font-medium">
                              <span className="text-white/60 text-base md:text-lg">€</span>
                              <span className="text-xl md:text-2xl font-bold">{dest.price.replace(" EUR", "")}</span>
                              <span className="text-white/50 font-normal text-xs md:text-sm">/ pers</span>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      
                      {/* POPUP (MODAL) ORIENTÉ PRODUIT */}
                      <DialogContent className="max-w-3xl w-[95vw] md:w-full bg-white border-0 p-0 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl mx-auto">
                        <div className="flex flex-col max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
                          {/* Image Section - Top */}
                          <div className="relative w-full h-[35vh] md:h-[45vh] min-h-[250px] md:min-h-[350px] shrink-0">
                            <Image src={dest.secondaryImage || dest.image} alt={dest.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
                            
                            <DialogClose className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white z-10 border border-white/20">
                              <X className="w-5 h-5" />
                            </DialogClose>
                            
                            <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8">
                               <div className="inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 border border-white/30 shadow-lg">
                                 <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                                 <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Garanti</span>
                               </div>
                            </div>
                          </div>

                          {/* Content Section - Bottom */}
                          <div className="p-6 sm:p-8 md:p-12 flex flex-col bg-white">
                            <div className="mb-6 md:mb-8">
                              <span className="text-[#4ade80] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] mb-2 md:mb-3 block">Expérience Authentic</span>
                              <DialogTitle className="text-3xl md:text-5xl font-bold text-[#0d141c] leading-tight tracking-tight">
                                {dest.title}
                              </DialogTitle>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                              <div className="bg-gray-50 rounded-[1.2rem] md:rounded-[1.5rem] p-4 md:p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
                                <Clock className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-2 md:mb-3" />
                                <span className="text-[9px] md:text-[10px] font-bold uppercase text-gray-500 tracking-widest mb-1">DURÉE</span>
                                <span className="text-lg md:text-xl font-bold text-[#0d141c]">{dest.duration}</span>
                              </div>
                              <div className="bg-gray-50 rounded-[1.2rem] md:rounded-[1.5rem] p-4 md:p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
                                <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-2 md:mb-3" />
                                <span className="text-[9px] md:text-[10px] font-bold uppercase text-gray-500 tracking-widest mb-1">GROUPE</span>
                                <span className="text-lg md:text-xl font-bold text-[#0d141c]">{dest.groupSize}</span>
                              </div>
                            </div>

                            <div className="mb-8 md:mb-10">
                              <h4 className="text-xs md:text-sm font-bold uppercase text-gray-900 tracking-widest mb-3 md:mb-4">À Propos de cette aventure</h4>
                              <p className="text-gray-600 leading-relaxed text-base md:text-lg font-serif italic">
                                {dest.description}
                              </p>
                            </div>

                            <div className="mb-8 md:mb-12">
                              <h4 className="text-xs md:text-sm font-bold uppercase text-gray-900 tracking-widest mb-4 md:mb-6">Inclus</h4>
                              <div className="grid sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-6">
                                {(dest.activities || []).map((activity, i) => (
                                  <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shrink-0" />
                                    <span className="text-sm md:text-[15px] font-medium">{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Book Footer */}
                            <div className="mt-4 pt-6 md:mt-8 md:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6 justify-between bg-white sticky bottom-0">
                              <div className="flex flex-col w-full sm:w-auto text-center sm:text-left">
                                <span className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tarif unique</span>
                                <span className="text-3xl md:text-4xl font-bold text-[#0d141c]"><span className="text-lg md:text-2xl">€ </span>{dest.price.replace(" EUR", "")} <span className="text-sm md:text-base font-normal text-gray-400">/ pers</span></span>
                              </div>
                              <DialogClose asChild>
                                <Button 
                                  onClick={() => {
                                    onReserve(dest);
                                  }} 
                                  className="w-full sm:w-auto px-8 md:px-12 h-14 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-[#0d141c] text-white hover:bg-black font-bold text-base md:text-lg shadow-xl shadow-black/10 transition-all focus:ring-4 focus:ring-black/20"
                                >
                                  Réserver
                                </Button>
                              </DialogClose>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Navigation Centered */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-10 md:mt-16 px-4 hidden sm:flex">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollPrev} 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-gray-200 hover:border-gray-900 hover:bg-white text-gray-500 hover:text-[#0d141c] transition-all flex-shrink-0"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </Button>
              <div className="w-12 md:w-16 h-px bg-gray-200" />
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollNext} 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-gray-200 hover:border-gray-900 hover:bg-white text-gray-500 hover:text-[#0d141c] transition-all flex-shrink-0"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </div>
            
            {/* Scroll Indicator for mobile only */}
             <div className="flex justify-center mt-6 sm:hidden">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                Balayez pour voir plus <ChevronRight className="w-3 h-3" />
              </span>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}

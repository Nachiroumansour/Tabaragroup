"use client"

import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

type GalleryItemData = {
  title: string
  category: string
  image: string
  size: string
  type: "image" | "video" | "youtube"
  videoSrc?: string
  youtubeId?: string
}

const destinations: GalleryItemData[] = [
  {
    title: "Delta du Saloum",
    category: "Nature",
    image: "/images/gallery-1.jpg",
    size: "large", // spans 2 columns
    type: "image"
  },
  {
    title: "Dakar Vibrante",
    category: "Immersion",
    image: "/images/hero-senegal.jpg",
    size: "tall", // spans 2 rows
    type: "youtube",
    youtubeId: "d7z45_KOuow" // Vidéo YouTube de Dakar en 4K
  },
  {
    title: "Réserve de Bandia",
    category: "Safari",
    image: "/images/gallery-4.jpg",
    size: "small",
    type: "image"
  },
  {
    title: "Lac Rose",
    category: "Culture",
    image: "/images/gallery-3.jpg",
    size: "wide", // spans 2 columns
    type: "image"
  },
  {
    title: "Casamance",
    category: "Authenticité",
    image: "/images/hero-senegal.jpg",
    size: "medium",
    type: "image"
  },
  {
    title: "Marché de Dakar",
    category: "Culture",
    image: "/images/gallery-2.jpg",
    size: "small",
    type: "youtube",
    youtubeId: "sozZfZfJ5qU" // Autre vidéo de la vie à Dakar
  }
]

export function GallerySection() {
  return (
    <section id="galerie" className="py-16 md:py-32 bg-[#0D1B2A] overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-4 md:mb-6">Fragments de Voyage</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Une mosaïque de <br /> <span className="italic text-primary">moments suspendus.</span>
            </h3>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed mb-2">
            Chaque destination est une peinture vivante, capturant l'âme vibrante du Sénégal à travers l'objectif de l'émerveillement.
          </p>
        </div>

        {/* Asymmetric Grid (Masonry-like with CSS Grid for Desktop, Horizontal Scroll for Mobile) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[250px] pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          
          {/* Card 1: Large Wide */}
          <div className="w-[85vw] sm:w-[60vw] md:w-auto h-[400px] md:h-auto shrink-0 snap-center md:snap-align-none md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2rem] md:rounded-3xl">
            <GalleryItem item={destinations[0]} />
          </div>

          {/* Card 2: Tall */}
          <div className="w-[85vw] sm:w-[60vw] md:w-auto h-[400px] md:h-auto shrink-0 snap-center md:snap-align-none md:col-span-1 md:row-span-2 group relative overflow-hidden rounded-[2rem] md:rounded-3xl">
            <GalleryItem item={destinations[1]} />
          </div>

          {/* Card 3: Standard */}
          <div className="w-[85vw] sm:w-[60vw] md:w-auto h-[400px] md:h-auto shrink-0 snap-center md:snap-align-none md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2rem] md:rounded-3xl">
            <GalleryItem item={destinations[2]} />
          </div>

          {/* Card 4: Wide/Bottom Area */}
          <div className="w-[85vw] sm:w-[60vw] md:w-auto h-[400px] md:h-auto shrink-0 snap-center md:snap-align-none md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2rem] md:rounded-3xl">
             <GalleryItem item={destinations[3]} />
          </div>

          {/* Card 5: Medium */}
          <div className="w-[85vw] sm:w-[60vw] md:w-auto h-[400px] md:h-auto shrink-0 snap-center md:snap-align-none md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2rem] md:rounded-3xl">
            <GalleryItem item={destinations[4]} />
          </div>
          
          {/* Card 6: Small */}
          <div className="w-[85vw] sm:w-[60vw] md:w-auto h-[400px] md:h-auto shrink-0 snap-center md:snap-align-none md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2rem] md:rounded-3xl">
            <GalleryItem item={destinations[5]} />
          </div>

        </div>
      </div>
    </section>
  )
}

function GalleryItem({ item }: { item: GalleryItemData }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full h-full relative group text-left overflow-hidden outline-none outline-none">
          {item.type === "video" ? (
            <video 
              src={item.videoSrc} 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
            />
          ) : item.type === "youtube" ? (
            <div className="absolute inset-[-5%] w-[110%] h-[110%] pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&playsinline=1`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                allow="autoplay; encrypted-media"
              />
            </div>
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2 block">{item.category}</span>
            <div className="flex justify-between items-end">
              <h4 className="text-2xl font-serif font-bold text-white">{item.title}</h4>
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                {item.type === "video" || item.type === "youtube" ? (
                  <Play className="w-5 h-5 text-white ml-1" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 text-white" />
                )}
              </div>
            </div>
          </div>
          
          {/* Subtle border overlay */}
          <div className="absolute inset-0 border border-white/5 group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] bg-[#0A1118] border-white/10 p-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">{item.title}</DialogTitle>
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          {item.type === "video" ? (
            <video 
              src={item.videoSrc} 
              controls 
              autoPlay 
              playsInline 
              className="w-full h-full object-contain"
            />
          ) : item.type === "youtube" ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen; encrypted-media"
            />
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
            />
          )}
          
          {/* Overlay info dans la popup */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end pointer-events-none">
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-bold mb-2">{item.category}</span>
            <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white">{item.title}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import DestinationsSection from "@/components/destinations-section";
import { WhyUsSection } from "@/components/why-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { GallerySection } from "@/components/gallery-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  defaultSearchFilters,
  type BookingInquiry,
  type Destination,
  type SearchFilters,
} from "@/lib/destination-data";

export default function Home() {
  const [filters, setFilters] = useState<SearchFilters>(defaultSearchFilters);
  const [bookingInquiry, setBookingInquiry] = useState<BookingInquiry | null>(null);

  function handleSearch(nextFilters: SearchFilters) {
    setFilters(nextFilters);
    const destinationsSection = document.getElementById("destinations");
    destinationsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleResetSearch() {
    setFilters(defaultSearchFilters);
  }

  function handleReserve(destination: Destination) {
    const inquiry: BookingInquiry = {
      destinationTitle: destination.title,
      destinationId: destination.id,
      travelStyle: filters.period,
      travelers: filters.travelers,
    };

    setBookingInquiry(inquiry);
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection filters={filters} onSearch={handleSearch} />
      <ServicesSection />
      <GallerySection />
      <DestinationsSection
        filters={filters}
        onResetFilters={handleResetSearch}
        onReserve={handleReserve}
      />
      <CTASection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection bookingInquiry={bookingInquiry} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
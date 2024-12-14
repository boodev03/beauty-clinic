"use client";

import { useEffect, useState } from "react";
import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <main className={`overflow-x-hidden ${isLoading ? "hidden" : ""}`}>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4">
          <div className="flex items-center gap-1">
            <span className="text-lg xs:text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Beauty
            </span>
            <span className="text-lg xs:text-xl sm:text-2xl font-light">
              Clinic
            </span>
          </div>
          <MainNav />
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 text-xs sm:text-sm hidden lg:flex"
          >
            Đặt Lịch Ngay
          </Button>
        </div>
      </header>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProgramHighlights } from "@/components/program-highlights";
import { CoachSection } from "@/components/coach-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PartnersSection } from "@/components/partners-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProgramHighlights />
      <CoachSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

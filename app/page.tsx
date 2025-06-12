import HeroSection from "@/components/hero-section"
import ProductShowcase from "@/components/product-showcase"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Update the page title and metadata
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

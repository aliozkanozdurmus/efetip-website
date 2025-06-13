import HeroGeometric from "@/components/kokonutui/hero-geometric"
import Header from "@/components/header"
import CategoryGrid from "@/components/category-grid"
import ProductSlider from "@/components/product-slider"
import StatsSection from "@/components/stats-section"
import TestimonialSlider from "@/components/testimonial-slider"
import CTASection from "@/components/cta-section"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"
import MaintenancePopup from "@/components/maintenance-popup"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroGeometric badge="Efetıp" title1="Modern Laboratuvar" title2="Çözümleri" />
      <CategoryGrid />
      <ProductSlider />
      <StatsSection />
      <NewsSection />
      <TestimonialSlider />
      <CTASection />
      <Footer />
      <MaintenancePopup />
    </main>
  )
}

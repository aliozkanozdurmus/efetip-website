import HeroGeometric from "@/components/kokonutui/hero-geometric"
import Header from "@/components/header"
import StatsSection from "@/components/stats-section"
import NewsSection from "@/components/news-section"
import TestimonialSlider from "@/components/testimonial-slider"
import CTASection from "@/components/cta-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="anasayfa">
        <HeroGeometric title1="En Parlak Günleri" title2="Geri Getiriyoruz" />
      </section>
      <section id="hakkimizda">
        <StatsSection />
      </section>
      <section id="haberler">
        <NewsSection />
      </section>
      <section id="referanslar">
        <TestimonialSlider />
      </section>
      <section id="iletisim">
        <ContactForm />
        <CTASection />
      </section>
      <Footer />
    </main>
  )
}

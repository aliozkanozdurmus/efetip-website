import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutHistory from "@/components/about-history"
import AboutValues from "@/components/about-values"
import AboutTeam from "@/components/about-team"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <AboutHero />
        <AboutHistory />
        <AboutValues />
        <AboutTeam />
      </div>
      <Footer />
    </main>
  )
}

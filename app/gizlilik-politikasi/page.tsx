import Header from "@/components/header"
import Footer from "@/components/footer"
import PrivacyPolicy from "@/components/privacy-policy"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <PrivacyPolicy />
      </div>
      <Footer />
    </main>
  )
}

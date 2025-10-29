import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

// Data fetching and metadata generation
const getCategoryData = async (slug: string) => {
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  return { title }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { title } = await getCategoryData(params.slug)
  return {
    title: `${title} | Efe Tıp Çözümleri`,
    description: `${title} için Efe Tıp tarafından sunulan modern laboratuvar çözümleri.`
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { title } = await getCategoryData(params.slug)
  const isKanGazi = params.slug === "kan-gazi-testleri"

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-8">
            <ArrowLeft size={18} />
            Tüm Çözümlere Geri Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>

          {isKanGazi ? (
            <div className="prose lg:prose-xl max-w-none text-gray-700">
              Blood gas testing
              <br />
              Experience the power of seamless diagnostics
              <br />
              Integrated solution • Dedicated partner • Proven performance
              <br />
              Products and solutions > Blood gas testing
              <br />
              Meet blood gas testing challenges with confidence—today and tomorrow
              <br />
              In acute care settings, uncertainty is the norm. You never know what comes next. A seamless blood gas testing workflow can give you critical information about your patient’s condition quickly—without losing focus on the patient.
              <br />
              Radiometer offers a flexible blood gas diagnostic solution that can fit seamlessly into your acute care testing and hospital workflow.
              <br />
              A blood gas testing solution from Radiometer is one integrated solution. This means blood gas analyzers, syringes, IT and support are connected and work with your own hospital systems. This helps you experience a smooth workflow with fewer manual tasks and more time for patient care.
              <br />
              We call this seamless diagnostics.
              <br />
              Which analyzer is right for you?
              <br />
              ABL90 FLEX PLUS—when every second counts
              <br />
              Fast, compact and intelligent, the ABL90 FLEX PLUS delivers insight with up to 19 parameters from a small sample size helping to achieve quick analysis in demanding clinical environments.
              <br />
              ABL800 FLEX blood gas analyzer from Radiometer
              <br />
              ABL800 FLEX—powerful performance
              <br />
              As a reference point for blood gas testing, the automatic and efficient ABL800 FLEX combines high usability with exceptional efficiency - freeing up time for other tasks.
              <br />
              ABL9—plug and play convenience
              <br />
              Designed to be easy to use, the ABL9 is a plug-and-play blood gas analyzer providing acute diagnostic insight at the point of care.
              <br />
              Integrated solution
              <br />
              In acute care settings, devices and equipment must support you in the efficient care of your patients.
              <br />
              An integrated blood gas testing solution does just that as it provides a one-solution experience integrating analyzers, syringes, IT and support for acute care testing needs. It can also connect with your hospital and laboratory systems and other med-tech service providers.
              <br />
              A dedicated partner
              <br />
              At Radiometer, we believe strong partnerships make the greatest impact. And being a dedicated and innovative partner means working closely with you to understand your workflows and increase efficiency throughout your department—while providing specialized knowledge, service and support when and where you need it.
              <br />
              Proven performance
              <br />
              With a proven track record of blood gas innovation and experience, you are in good hands with us. We launched the world’s first commercially available blood gas analyzer in 1954 and today we are the global market leader within blood gas testing. Radiometer solutions are used in hospitals, clinics and labs in over 130 countries and the ABL800 is a reference analyzer for blood gas testing in laboratories.
              <br />
              Read more about blood gas testing and our history
              <br />
              “With regard to point-of-care testing it’s very important to me that products are compatible with one another, that the user is assisted in handling them, but that they also account for our analytical requirements from the lab.”
              <br />
              - Professor Dr. med. Dipl. Biol. Astrid Petersmann, Universitätsmedizin Oldenburg und Greifswald
            </div>
          ) : (
            <div className="prose lg:prose-xl max-w-none text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}

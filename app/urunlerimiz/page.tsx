import Header from "@/components/header"
import Footer from "@/components/footer"
import { ProductHero } from "@/components/product-hero"
import { ClinicalSettings } from "@/components/clinical-settings"
import { ProductCategory } from "@/components/product-category"

export default function ProductsPage() {
  const categories = [
    { title: "Kan Gazı Testleri", description: "Akut bakım ve hastane iş akışına sorunsuz bir şekilde uyum sağlayabilen esnek bir kan gazı teşhis çözümü.", link: "/urunlerimiz/kan-gazi-testleri" },
    { title: "Transkutanöz İzleme", description: "Non-invaziv, gerçek zamanlı ve sürekli hasta ventilasyonu ve oksijenasyon izlemi.", link: "/urunlerimiz/transkutanoz-izleme" },
    { title: "İmmünokimya Testleri", description: "Geniş bir biyobelirteç yelpazesinde 11-21 dakikada sonuç alın.", link: "/urunlerimiz/immunokimya-testleri" },
    { title: "1st Automatic", description: "1st Automatic ile hasta-örnek karışıklığı riskini azaltın. Ön analitik hataları en aza indirmeye yardımcı olmak için tasarlanmış bir iş akışı çözümü.", link: "/urunlerimiz/first-automatic" },
    { title: "Merkezi Kontrol ile AQURE", description: "AQURE, POC IT kurulumunuzun performansını yönetmek için size tam bir genel bakış ve erişim sağlar.", link: "/urunlerimiz/merkezi-kontrol-aqure" },
    { title: "Kan Gazı Şırıngaları ve Kılcal Tüpler", description: "Güvenilir test sonuçları sağlamak üzere tasarlanmış sayıya alıcılarımızla kan alma ihtiyaçlarınızı karşılayın.", link: "/urunlerimiz/kan-gazi-siringalari" },
    { title: "Veri Analizleri ve Uzaktan Destek", description: "Sorunları gidermeyi, analizör çalışma sürecini artırın ve veriye dayalı operasyonel kararlar almayı kolaylaştıran uzaktan performans izleme.", link: "/urunlerimiz/veri-analizleri-uzaktan-destek" },
    { title: "Kan Gazı Analizörleri için KK Ampulleri", description: "Akut bakım teşhisi için KK prosedürlerini otomatikleştirin, başlatın ve yasal uyumluluğu destekleyin.", link: "/urunlerimiz/kk-ampulleri" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <ProductHero />
        <ClinicalSettings />
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map(cat => <ProductCategory key={cat.title} {...cat} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

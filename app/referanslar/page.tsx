import Header from "@/components/header"
import Footer from "@/components/footer"
import { Star, MapPin, Building, Users, Quote } from "lucide-react"

export default function ReferanslarPage() {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Mehmet Yılmaz",
      position: "Lab. Müdürü",
      company: "Acıbadem Hastanesi",
      city: "İstanbul",
      rating: 5,
      content: "Efe Tıp'ın sunduğu kan gazı analiz cihazları laboratuvarımızın verimliliğini %40 artırdı. Teknik destekleri ve hizmet kaliteleri gerçekten takdire şayan. 7/24 ulaşılabilir olmaları bizi büyük bir yükten kurtardı.",
      logo: "/placeholder-logo.png"
    },
    {
      id: 2,
      name: "Dr. Ayşe Kaya",
      position: "Biyokimya Uzmanı",
      company: "Memorial Hastanesi",
      city: "Ankara",
      rating: 5,
      content: "Yeni nesil hemoklinometri cihazları sayesinde test sonuçlarımız çok daha hızlı ve doğru. Kullanıcı arayüzleri çok intuitif ve eğitim destekları muhteşem. Personelimiz kısa sürede adaptasyon sağladı.",
      logo: "/placeholder-logo.png"
    },
    {
      id: 3,
      name: "Dr. Ali Demir",
      position: "Klinik Direktörü",
      company: "Medical Park Hastanesi",
      city: "İzmir",
      rating: 5,
      content: "5 yıldır Efe Tıp ile çalışıyoruz ve hiçbir sorun yaşamadık. Cihazların kalitesi, servis hizmetleri ve personellerinin uzmanlığı fark yaratıyor. Tercihimizi her zaman onlardan yana kullanırız.",
      logo: "/placeholder-logo.png"
    },
    {
      id: 4,
      name: "Dr. Zeynep Öztürk",
      position: "Acil Servis Sorumlusu",
      company: "Liv Hospital",
      city: "Bursa",
      rating: 5,
      content: "Acil durum müdahale süreleri gerçekten etkileyici. Geçen ay bir arızamız oldu ve 2 saat içinde teknik ekip sorunu çözdü. Bu hız ve kalite pazarda rare.",
      logo: "/placeholder-logo.png"
    },
    {
      id: 5,
      name: "Dr. Mustafa Çelik",
      position: "Kalite Koordinatörü",
      company: "Anadolu Sağlık Merkezi",
      city: "Kocaeli",
      rating: 5,
      content: "Akıllı veri yönetim sistemleri sayesinde laboratuvar verilerimizi çok daha etkili yönetiyoruz. Entegrasyon süreçleri çok sorunsuz ve teknik destek her zaman hazır.",
      logo: "/placeholder-logo.png"
    },
    {
      id: 6,
      name: "Dr. Fatma Polat",
      position: "Lab. Teknikeri",
      company: "Şişli Etfal Hastanesi",
      city: "İstanbul",
      rating: 5,
      content: "Cihaz bakım ve servis hizmetleri mükemmel. Periyodik kontroller zamanında yapılıyor ve olası sorunlar öngörülerek önleniyor. Çalıştığım en iyi tedarikçi.",
      logo: "/placeholder-logo.png"
    }
  ]

  const stats = [
    {
      number: "500+",
      label: "Mutlu Müşteri",
      description: "Türkiye genelinde sağlık kuruluşuna hizmet veriyoruz"
    },
    {
      number: "15+",
      label: "Yıllık Deneyim",
      description: "Laboratuvar teknolojisi uzmanlığı"
    },
    {
      number: "24/7",
      label: "Teknik Destek",
      description: "Kesintisiz hizmet anlayışı"
    },
    {
      number: "99%",
      label: "Müşteri Memnuniyeti",
      description: "Referanslarımızla gurur duyuyoruz"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-mobile bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-mobile">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Müşteri <span className="text-blue-600">Referansları</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Türkiye'nin önde gelen sağlık kuruluşlarının güvenini kazandık. 
              Müşterilerimizin bizim hakkımızdaki düşünceleri ve deneyimleri.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container-mobile">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 max-w-[150px] mx-auto">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container-mobile">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Müşteri Yorumları
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Hizmetlerimizden faydalanan kuruluşların bizim hakkımızdaki görüşleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <article 
                key={testimonial.id}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Company Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building size={20} className="sm:w-[24px] sm:h-[24px] text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
                      {testimonial.company}
                    </h3>
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                      <MapPin size={10} className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{testimonial.city}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="relative mb-4 sm:mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-blue-200" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-4 sm:pl-6 italic">
                    {testimonial.content}
                  </p>
                </div>

                {/* Person Info */}
                <div className="border-t pt-3 sm:pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              İş Ortaklarımız
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Türkiye'nin önde gelen sağlık kuruluşlarıyla çalışıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {[
              "Acıbadem", "Memorial", "Medical Park", "Liv Hospital", 
              "Anadolu Sağlık", "Şişli Etfal", "Florence", 
              "Medicana", "Yeditepe", "Kolan", "Bayındır"
            ].map((partner, index) => (
              <div 
                key={partner}
                className="bg-gray-50 rounded-xl p-4 sm:p-6 flex items-center justify-center h-20 sm:h-24 lg:h-28 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium text-gray-600 group-hover:text-blue-600">
                  {partner.slice(0, 3).toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-mobile">
          <div className="text-center text-white max-w-4xl mx-auto">
            <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 opacity-90" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Siz de Müşterimiz Olun
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Türkiye'nin en çok tercih edilen laboratuvar ekipmanları tedarikçisi olmaktan gurur duyuyoruz. 
              Size özel çözümlerimiz için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <button className="btn-touch bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 min-w-[44px]">
                Hemen Başvurun
              </button>
              <button className="btn-touch border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 min-w-[44px]">
                Referansları İnceleyin
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

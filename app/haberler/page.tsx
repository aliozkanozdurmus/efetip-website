"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsPopup from "@/components/news-popup"
import { Search, Calendar, Clock, ArrowRight, FileText, TrendingUp, Award, Users, Beaker } from "lucide-react"

export default function HaberlerPage() {
  const [selectedNews, setSelectedNews] = useState<any>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const newsCategories = [
    { name: "Tümü", icon: FileText, count: 24 },
    { name: "Kan Gazı Analizi", icon: Beaker, count: 8 },
    { name: "Hemoklinometri", icon: TrendingUp, count: 6 },
    { name: "Biyokimya", icon: Award, count: 10 },
  ]

  const newsItems = [
    {
      id: 1,
      title: "Kan Gazı Analizinde Yeni Nesil Sensör Teknolojisinin Klinik Önemi",
      excerpt: "Modern kan gazı analiz cihazlarında kullanılan yeni nesil sensör teknolojilerinin klinik_accuracy ve verimlilik üzerindeki etkileri üzerine bilimsel değerlendirme.",
      category: "Kan Gazı Analizi",
      date: "15 Ekim 2024",
      readTime: "3 dk",
      author: "Dr. Ayşe Yılmaz, Klinik Biyokimya Uzmanı",
      featured: true,
      content: `
        <h2>Giriş</h2>
        <p>Kan gazı analizi, modern tıbbi tanımanın vazgeçilmez bir parçasıdır. Yoğun bakım ünitelerinde, acil servislerde ve ameliyathanelerlerde hastanın durumu hakkında kritik bilgiler sunar. Bu makalede, yeni nesil sensör teknolojilerinin klinik pratikteki avantajları incelenmektedir.</p>
        
        <h2>Yeni Nesil Sensör Teknolojisi</h2>
        <p>Gelişmiş sensör teknolojisi sayesinde test süresi %40 kısalırken, doğruluk oranı %95'e ulaşmaktadır. Bu teknoloji, özellikle kritik hastalarda hızlı ve güvenilir sonuçlar sağlamaktadır.</p>
        
        <h3>Teknik Avantajlar</h3>
        <ul>
          <li>Gelişmiş mikro-elektrot teknolojisi</li>
          <li>Otomatik kalibrasyon sistemleri</li>
          <li>Real-time monitoring özellikleri</li>
          <li>Düşük örnek hacmi gereksinimi</li>
        </ul>
        
        <h2>Klinik Sonuçlar</h2>
        <p>Klinik çalışmalarda, yeni nesil sensör teknolojisi kullanan cihazların, geleneksel yöntemlere göre daha üstün performans gösterdiği tespit edilmiştir. Özellikle pH, pO2 ve pCO2 değerlerindeki hassasiyet artışı, klinisyenlerin daha doğru kararlar almasını sağlamaktadır.</p>
        
        <h2>Sonuç</h2>
        <p>Yeni nesil sensör teknolojisi, kan gazı analizinde devrim niteliğinde gelişmeler sunmaktadır. Hastane laboratuvarlarında verimliliği artırırken, hasta bakım kalitesini de önemli ölçüde iyileştirmektedir.</p>
      `
    },
    {
      id: 2,
      title: "Hemoklinometrik Ölçümlerde Standardizasyon ve Kalite Kontrol",
      excerpt: "Hemoklinometrik ölçümlerde standardizasyonun önemi ve kalite kontrol protokollerinin modern laboratuvar uygulamadaki yeri.",
      category: "Hemoklinometri",
      date: "12 Ekim 2024",
      readTime: "4 dk",
      author: "Prof. Dr. Mehmet Kaya, Tıbbi Biyoloji",
      featured: true,
      content: `
        <h2>Standardizasyonun Önemi</h2>
        <p>Hemoklinometrik ölçümler, kan sayımı testlerinin temelini oluşturur. Bu ölçümlerin doğruluğu ve tutarlılığı, klinik kararlar için kritik önem taşır. Standardizasyon, farklı laboratuvarlar arasında karşılaştırılabilir sonuçlar elde etmeyi sağlar.</p>
        
        <h2>Kalite Kontrol Protokolleri</h2>
        <p>Modern hemoklinometri cihazları, gelişmiş kalite kontrol sistemleri ile donatılmıştır. Bu sistemler, günlük kontrollerden periyodik validasyonlara kadar geniş bir yelpazede kullanılmaktadır.</p>
        
        <h3>İç Kalite Kontrol</h3>
        <ul>
          <li>Günlük kontrol materyalleri</li>
          <li>Otomatik kalibrasyon</li>
          <li>Sürekli monitoring</li>
        </ul>
        
        <h3>Dış Kalite Güvencesi</h3>
        <ul>
          <li>Proficiency testing programları</li>
          <li>Inter-laboratuvar karşılaştırmaları</li>
          <li>External quality assessment (EQA)</li>
        </ul>
        
        <h2>Modern Yaklaşımlar</h2>
        <p>Dijitalleşme ve otomasyon, kalite kontrol süreçlerini önemli ölçüde iyileştirmiştir. Real-time data analizi ve yapay zeka destekli sistemler, hata tespitini ve önlenmesini kolaylaştırmaktadır.</p>
      `
    },
    {
      id: 3,
      title: "Biyokimya Analizörlerinde Otomasyon ve Verimlilik",
      excerpt: "Tam otomasyon biyokimya analizörlerinin modern laboratuvarlarda verimlilik artışı ve hata oranları üzerindeki etkileri.",
      category: "Biyokimya",
      date: "8 Ekim 2024",
      readTime: "5 dk",
      author: "Uzm. Dr. Zeynep Demir, Klinik Biyokimya",
      featured: false,
      content: `
        <h2>Otomasyonun Laboratuvar Pratiğindeki Yeri</h2>
        <p>Modern biyokimya laboratuvarları, artan test hacimleri ve kalite beklentileri karşısında otomasyon çözümlerine yönelmektedir. Tam otomasyon sistemleri, hem verimliliği artırmakta hem de hata oranlarını düşürmektedir.</p>
        
        <h2>Verimlilik Artışı</h2>
        <p>Otomasyon sistemleri, laboratuvar personelinin iş yükünü %60 azaltmaktadır. Bu durum, personelin daha kritik görevlere odaklanmasını sağlamaktadır.</p>
        
        <h3>Teknolojik Avantajlar</h3>
        <ul>
          <li>100+ test paneli kapasitesi</li>
          <li>Entegre kalite kontrol sistemi</li>
          <li>Otomatik örnek hazırlama</li>
          <li>Real-time result monitoring</li>
        </ul>
        
        <h2>Return on Investment (ROI)</h2>
        <p>Otomasyon yatırımları, genellikle 18-24 ay içinde kendini amorti etmektedir. Düşük reaktif tüketimi ve azalan personel maliyetleri, bu yatırımın getirisini artırmaktadır.</p>
      `
    },
    {
      id: 4,
      title: "Transkutanöz Monitorizasyonun Neonatal Uygulamaları",
      excerpt: "Yenidoğan yoğun bakım ünitelerinde transkutanöz izleme teknolojilerinin klinik faydaları ve uygulama protokolleri.",
      category: "Kan Gazı Analizi",
      date: "5 Ekim 2024",
      readTime: "4 dk",
      author: "Dr. Ali Öztürk, Neonatoloji Uzmanı",
      featured: false,
      content: `
        <h2>Neonatolojide Transkutanöz İzleme</h2>
        <p>Yenidoğan yoğun bakım ünitelerinde, invazif müdahaleleri minimize etmek kritik önem taşır. Transkutanöz izleme teknolojisi, kan gazı değerlerini non-invazif olarak takip etme imkanı sunar.</p>
        
        <h2>Klinik Avantajlar</h2>
        <ul>
          <li>Azalan kan alma sıklığı</li>
          <li>Anemi riskinin düşürülmesi</li>
          <li>Sürekli monitoring imkanı</li>
          <li>Hasta konforunun artması</li>
        </ul>
        
        <h2>Uygulama Protokolleri</h2>
        <p>Modern cihazlar, otomatik kalibrasyon ve alarm sistemleri ile güvenli kullanım sağlamaktadır. Düzenli sensor değişimi ve cilt bakımı, ölçüm doğruluğu için gereklidir.</p>
      `
    },
    {
      id: 5,
      title: "Point-of-Care Testlerinin Laboratuvar Entegrasyonu",
      excerpt: "POC cihazlarının merkez laboratuvar sistemleriyle entegrasyonu ve veri yönetimi stratejileri.",
      category: "Biyokimya",
      date: "1 Ekim 2024",
      readTime: "3 dk",
      author: "Uzm. Dr. Fatma Polat, Klinik Biyokimya",
      featured: false,
      content: `
        <h2>POC Testlerinin Yükselişi</h2>
        <p>Point-of-Care (POC) testleri, hızlı sonuçların gerektiği klinik ortamlarda önemli bir yer tutmaktadır. Ancak bu testlerin merkez laboratuvar sistemleriyle entegrasyonu kritik bir konudur.</p>
        
        <h2>Veri Yönetimi</h2>
        <p>Bulut tabanlı sistemler sayesinde POC sonuçları, anında Laboratuvar Bilgi Sistemine (LIS) aktarılabilmektedir. Bu durum, veri bütünlüğünü ve hasta güvenliğini artırmaktadır.</p>
        
        <h3>Entegrasyon Avantajları</h3>
        <ul>
          <li>Real-time data transfer</li>
          <li>Otomatik kalite kontrol</li>
          <li>Tutarlı raporlama</li>
          <li>Regulatory compliance</li>
        </ul>
      `
    },
    {
      id: 6,
      title: "Moleküler Tanı Testlerinin Akıllı Veri Analizi",
      excerpt: "Yeni nesil moleküler tanı cihazlarında yapay zeka destekli veri analizi ve klinik uygulama alanları.",
      category: "Biyokimya",
      date: "28 Eylül 2024",
      readTime: "6 dk",
      author: "Prof. Dr. Mustafa Çelik, Moleküler Genetik",
      featured: false,
      content: `
        <h2>Yapay Zeka Destekli Analiz</h2>
        <p>Moleküler tanı testlerindeki veri karmaşıklığı, geleneksel analiz yöntemlerini yetersiz kılmaktadır. Yapay zeka destekli sistemler, büyük veri setlerinden anlamlı sonuçlar çıkarmaktadır.</p>
        
        <h2>Klinik Uygulamalar</h2>
        <p>AI destekli analiz, tanı accuracy'ini artırırken, sonuçların yorumlanma süresini kısaltmaktadır. Özellikle kanser taraması ve enfeksiyon hastalıklarında etkilidir.</p>
        
        <h3>Teknolojik İnovasyonlar</h3>
        <ul>
          <li>Machine learning algoritmaları</li>
          <li>Deep learning modelleri</li>
          <li>Predictive analytics</li>
          <li>Otomatik pattern recognition</li>
        </ul>
      `
    }
  ]

  const featuredNews = newsItems.filter(item => item.featured)

  const openNewsPopup = (news: any) => {
    setSelectedNews(news)
    setIsPopupOpen(true)
  }

  const closeNewsPopup = () => {
    setIsPopupOpen(false)
    setSelectedNews(null)
  }

  return (
    <main className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-24">
      <Header />
      
      {/* Hero Section */}
      <section className="section-mobile bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-mobile">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Haberler ve <span className="text-blue-600">Duyurular</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Laboratuvar teknolojilerindeki en son gelişmeleri, ürün yeniliklerimizi ve 
              sektörle ilgili önemli haberleri burada bulabilirsiniz.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto px-4 sm:px-0">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Haberlerde ara..."
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm sm:text-base shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container-mobile">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {newsCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <button
                  key={category.name}
                  className={cn(
                    "flex flex-col items-center p-4 sm:p-6 rounded-xl border transition-all duration-300",
                    index === 0 
                      ? "bg-blue-50 border-blue-200 text-blue-700" 
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <Icon size={24} className="sm:w-[28px] sm:h-[28px] mb-2 sm:mb-3" />
                  <span className="font-medium text-sm sm:text-base">{category.name}</span>
                  <span className="text-xs sm:text-sm opacity-75 mt-1">{category.count} haber</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container-mobile">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Öne Çıkan Haberler</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredNews.map((news, index) => (
              <article 
                key={news.id} 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => openNewsPopup(news)}
              >
                <div className="mb-4 sm:mb-6">
                  <span className="bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {news.readTime}
                    </span>
                  </div>
                  <ArrowRight size={14} className="sm:w-[16px] sm:h-[16px] group-hover:text-blue-600" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container-mobile">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Tüm Haberler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsItems.map((news) => (
              <article 
                key={news.id} 
                className="group bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openNewsPopup(news)}
              >
                <div className="mb-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                  
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {news.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {news.readTime}
                    </span>
                  </div>
                  <ArrowRight size={12} className="group-hover:text-blue-600" />
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button className="btn-touch bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Daha Fazla Haber Yükle
            </button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* News Popup */}
      <NewsPopup 
        isOpen={isPopupOpen}
        onClose={closeNewsPopup}
        news={selectedNews}
      />
    </main>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

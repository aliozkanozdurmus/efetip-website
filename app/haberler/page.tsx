import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Calendar, Clock, ArrowRight, FileText, TrendingUp, Award, Users } from "lucide-react"

export default function HaberlerPage() {
  const newsCategories = [
    { name: "Tümü", icon: FileText, count: 24 },
    { name: "Ürün", icon: TrendingUp, count: 8 },
    { name: "Teknoloji", icon: Award, count: 6 },
    { name: "Etkinlik", icon: Users, count: 10 },
  ]

  const newsItems = [
    {
      id: 1,
      title: "Efe Tıp, Kan Gazı Analiz Cihazlarında Yeni Nesil Teknolojiyi Tanıttı",
      excerpt: "Laboratuvar doktorları için geliştirilen yeni nesil kan gazı analiz cihazlarımız, daha hızlı ve hassas sonuçlar sunuyor. Gelişmiş sensör teknolojisi sayesinde test süresi %40 kısalırken, doğruluk oranı %95'e ulaşıyor.",
      category: "Ürün",
      date: "15 Ekim 2024",
      readTime: "3 dk",
      image: "/placeholder.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Gaziantep'teki Yeni Laboratuvar Ekipmanları Merkezimiz Açıldı",
      excerpt: "Bölgedeki sağlık kuruluşlarına daha iyi hizmet verebilmek için açtığımız yeni merkezimizde son teknoloji ürünlerimizi deneyimleyebilirsiniz. Uzman kadromuzla size özel çözümler sunuyoruz.",
      category: "Etkinlik",
      date: "12 Ekim 2024",
      readTime: "2 dk",
      image: "/placeholder.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Hemoklinometri Cihazlarında Uluslararası Başarı",
      excerpt: "Yeni nesil hemoklinometri cihazlarımız Avrupa pazarında büyük ilgi gördü. Yüksek hassasiyet ve kullanıcı dostu arayüzüyle laboratuvarların tercih edildi.",
      category: "Teknoloji",
      date: "8 Ekim 2024",
      readTime: "4 dk",
      image: "/placeholder.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Akıllı Veri Yönetim Sistemi ile Laboratuvar Verimliliği Artıyor",
      excerpt: "Geliştirdiğimiz akıllı veri yönetim platformu sayesinde laboratuvarlar sonuçları %30 daha hızlı işleyebiliyor. Bulut tabanlı sistem ile erişim her zamandan mümkün.",
      category: "Teknoloji",
      date: "5 Ekim 2024",
      readTime: "5 dk",
      image: "/placeholder.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Ege Bölgesi Hastaneleriyle Stratejik İş Birliği Anlaşması",
      excerpt: "Ege Bölgesi'ndeki 15 hastane ile yaptığımız stratejik iş birliği anlaşması kapsamında cihaz bakım ve teknik destek hizmetlerimiz daha da güçlendi.",
      category: "Etkinlik",
      date: "1 Ekim 2024",
      readTime: "3 dk",
      image: "/placeholder.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Yeni Nesil Biyokimya Cihazları Tam Otomasyon Desteği",
      excerpt: "Tam otomasyon özellikli yeni biyokimya cihazlarımız, laboratuvar personelinin iş yükünü %60 azaltıyor. 100+ test paneli ve entegre kalite kontrol sistemi.",
      category: "Ürün",
      date: "28 Eylül 2024",
      readTime: "6 dk",
      image: "/placeholder.jpg",
      featured: false
    }
  ]

  const featuredNews = newsItems.filter(item => item.featured)

  return (
    <main className="min-h-screen bg-white">
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
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 line-clamp-2">
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
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
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
    </main>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

import NewsSection from "@/components/news-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HaberlerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Güncel Haberler</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
              Haberler &
              <br className="hidden md:block" />
              Bilimsel Yazılar
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Laboratuvar teknolojileri ve tıbbi cihazlar hakkında en güncel bilimsel gelişmeler, 
              yenilikler ve sektör haberleri. Uzman ekibimiz tarafından hazırlanan içeriklerle 
              klinik uygulamalardaki son trendleri keşfedin.
            </p>
            
            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-2 flex gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <input 
                    type="text" 
                    placeholder="Haberlerde ara..."
                    className="flex-1 outline-none text-gray-700 placeholder-gray-400 py-2"
                  />
                </div>
                <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200">
                  <span>Filtrele</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              En Son Haberler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Laboratuvar teknolojileri hakkında en güncel ve güvenilir bilgiler
            </p>
          </div>
        </div>
        <NewsSection />
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center text-white">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Haberlerimizden Haberdar Olun
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Yeni makaleler ve güncellemeler için e-posta listemize katılın. 
                Haftalık özetler ve özel içerikler doğrudan gelen kutunuzda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 transform hover:scale-105">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

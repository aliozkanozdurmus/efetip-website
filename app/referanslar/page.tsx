import TestimonialSlider from "@/components/testimonial-slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Building2, Users, Award, CheckCircle, Phone, Package } from "lucide-react"

export default function ReferanslarPage() {
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
              <Users className="w-4 h-4" />
              <span>Müşteri Yorumları</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
              Referanslarımız
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Sağlık sektöründe lider konumdaki kurumların güveni ve tercihi. 
              Ekipmanlarımızla binlerce hastanenin ve klinikin başarısına katkı sağlıyoruz.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: "Kurum", icon: Building2 },
              { number: "10K+", label: "Mutlu Müşteri", icon: Users },
              { number: "15+", label: "Yıl Deneyim", icon: Award },
              { number: "99.9%", label: "Memnuniyet", icon: CheckCircle }
            ].map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <stat.icon className="w-8 h-8 text-blue-600" />
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Müşteri Yorumları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sağlık profesyonellerinin bizim hakkımızda söyledikleri
            </p>
          </div>
        </div>
        <TestimonialSlider />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center text-white">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siz de Referanslarımız Arasında Yer Alın
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Ekipmanlarımızla tanışın ve sağlık kurumunuzun verimliliğini artırın. 
                Uzman ekibimiz size en uygun çözümleri sunmak için hazır.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  İletişime Geçin
                </button>
                <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Package className="w-4 h-4" />
                  Ürünlerimizi İnceleyin
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

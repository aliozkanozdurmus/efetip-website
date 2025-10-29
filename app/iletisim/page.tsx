import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container-mobile relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">İletişim Bilgileri</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
              Bize Ulaşın
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Sorularınız, talepleriniz ve iş birlikleriniz için bizimle iletişime geçin. 
              Uzman ekibimiz size en kısa sürede yanıt vermek için hazır.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-blue-200 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 bg-indigo-200 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"></div>
      </section>

      {/* Contact Info Section */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="card-responsive bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                <p className="text-sm sm:text-base text-gray-600">info@efetip.com.tr</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">24 saat içinde yanıt</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="card-responsive bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                <p className="text-sm sm:text-base text-gray-600">EFE TIP</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">3. Osb Kamil Şerbetçi Blv. No:39</p>
                <p className="text-xs sm:text-sm text-gray-500">Şehitkamil/Gaziantep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-mobile bg-gray-50">
        <div className="container-mobile">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Mesaj Gönderin
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              İletişim formunu doldurarak bizimle doğrudan iletişime geçebilirsiniz.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Konumumuz
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Şehitkamil/Gaziantep'teki merkez ofisimizi ziyaret edebilirsiniz.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50860.461278154275!2d37.28187708581369!3d37.181726752359864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e0!3m2!1str!2str!4v1761767431687!5m2!1str!2str" 
              width="100%" 
              height="350" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

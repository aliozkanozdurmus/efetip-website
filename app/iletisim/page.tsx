import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function IletisimPage() {
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
              <MessageSquare className="w-4 h-4" />
              <span>İletişim Bilgileri</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
              Bize Ulaşın
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Sorularınız, talepleriniz ve iş birlikleriniz için bizimle iletişime geçin. 
              Uzman ekibimiz size en kısa sürede yanıt vermek için hazır.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors duration-200">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                <p className="text-gray-600">info@efetip.com.tr</p>
                <p className="text-sm text-gray-500 mt-1">24 saat içinde yanıt</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors duration-200">
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                <p className="text-gray-600">EFE TIP</p>
                <p className="text-sm text-gray-500 mt-1">3. Osb Kamil Şerbetçi Blv. No:39</p>
                <p className="text-sm text-gray-500">Şehitkamil/Gaziantep</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Mesaj Gönderin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İletişim formunu doldurarak bizimle doğrudan iletişime geçebilirsiniz.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Konumumuz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Şehitkamil/Gaziantep'teki merkez ofisimizi ziyaret edebilirsiniz.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50860.461278154275!2d37.28187708581369!3d37.181726752359864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e0430a5baf29%3A0x9a60026c67744ad3!2sTuna%20Medikal!5e0!3m2!1str!2str!4v1761767431687!5m2!1str!2str" 
              width="100%" 
              height="450" 
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

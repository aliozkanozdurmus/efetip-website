"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, CheckCircle, Mail, Clock, Zap, Shield, Activity } from "lucide-react"

export default function ImmunokimyaTestleriPage() {
  const biomarkers = [
    { name: "NT-proBNP", category: "Kardiyak" },
    { name: "Troponin I", category: "Kardiyak" },
    { name: "Troponin T", category: "Kardiyak" },
    { name: "Myoglobin", category: "Kardiyak" },
    { name: "CKMB", category: "Kardiyak" },
    { name: "D-dimer", category: "Koagülasyon" },
    { name: "PCT", category: "Enfeksiyon" },
    { name: "CRP", category: "Enfeksiyon" },
    { name: "ßhCG", category: "Gebelik" }
  ]

  const features = [
    { icon: Clock, title: "Hızlı Sonuçlar", value: "11-21", unit: "dakika", description: "Kritik kararlar için hızlı sonuç süresi" },
    { icon: Zap, title: "Yüksek Kapasite", value: "30", unit: "test/saat", description: "Saatte 30 teste kadar başlatabilme" },
    { icon: Activity, title: "Eş Zamanlı Test", value: "5", unit: "test", description: "Aynı anda 5 teste kadar çalıştırma" }
  ]

  const benefits = [
    { icon: Shield, title: "Hasta Akışını Hızlandırın", description: "Bakım noktasında test yaparak laboratuvar bekleme sürelerini ortadan kaldırın ve hasta akışını optimize edin." },
    { icon: Zap, title: "Hızlı Kritik Kararlar", description: "11-21 dakikada sonuç alarak kritik durumları teşhis edin veya ekarte edin, tedaviyi daha hızlı başlatın." },
    { icon: CheckCircle, title: "Güvenilir Sonuçlar", description: "Kalp yetmezliği, miyokard enfarktüsü, venöz tromboembolizm, enfeksiyon ve gebelik teşhisinde güvenilir sonuçlar." }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft size={20} />
            Tüm Çözümlere Geri Dön
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">İmmünokimya Testleri</h1>
              <p className="text-xl text-gray-600 mb-8">Bakım noktası biyobelirteç testi ile kritik kararları hızlı verin</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Hasta Akışını Hızlandırın</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Hızlı Kararlar</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Güvenilir Sonuçlar</span>
              </div>
              <a href="mailto:info@efetip.com.tr?subject=İmmünokimya Testleri Hakkında Bilgi" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                <Mail size={18} />
                Bilgi Talep Et
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="https://www.radiometer.com/-/media/radiometer/corporate/videos/patientflow_aqt90_animation_30secs.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Akut Bakım Durumlarında Zaman Kritiktir</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">Bakım noktasında (POC) immünokimya testi ile artık laboratuvardan kritik test sonuçlarını beklemenize gerek yok. Radiometer AQT90 FLEX analizörü 11-21 dakikada sonuç verir.</p>
            <p className="text-lg text-gray-600 leading-relaxed">Bakım noktasında kardiyak, koagülasyon ve enfeksiyon biyobelirteçleri gibi immünokimya testlerini çalıştırabilirsiniz. Bu sadece kritik hastanıza yakın kalmanızı sağlamakla kalmaz, aynı zamanda kritik durumları teşhis etmenize veya ekarte etmenize ve tedaviyi daha hızlı başlatarak hastanın iyileşme şansını artırmanıza yardımcı olur.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold mb-2">{feature.value}</div>
                <div className="text-xl mb-3 text-purple-100">{feature.unit}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-purple-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Bakım Noktasında Hızlı, Güvenilir Sonuçlar</h2>
              <p className="text-lg text-gray-600 mb-6">AQT90 FLEX analizörü ile aynı anda daha fazla hastayı yönetebilirsiniz. Saatte 30 teste kadar başlatabilir ve birden fazla testi eş zamanlı olarak çalıştırabilirsiniz.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Aynı anda 5 teste kadar çalıştırma kapasitesi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">11-21 dakikada sonuç alma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Saatte 30 teste kadar başlatma</span>
                </li>
              </ul>
              <Link href="/urunlerimiz/aqt90-flex" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold group">
                AQT90 FLEX Analizörü Hakkında Daha Fazla Bilgi
                <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center">
                <Image src="/placeholder.svg" alt="AQT90 FLEX" width={400} height={400} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Bakım Noktası Testinin Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">AQT90 FLEX Analizörü için Biyobelirteçler</h2>
            <p className="text-lg text-gray-600 text-center mb-12">Kalp yetmezliği, miyokard enfarktüsü, venöz tromboembolizm, enfeksiyon ve gebelik teşhisine yardımcı olan geniş biyobelirteç yelpazesi</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {biomarkers.map((marker, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 text-center">
                  <div className="font-bold text-gray-900 mb-1">{marker.name}</div>
                  <div className="text-sm text-gray-600">{marker.category}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">İmmünokimya Testleri Hakkında Daha Fazla Bilgi Alın</h2>
          <p className="text-xl text-purple-100 mb-8">Bakım noktası biyobelirteç testi çözümlerimiz hakkında detaylı bilgi için bizimle iletişime geçin</p>
          <a href="mailto:info@efetip.com.tr?subject=İmmünokimya Testleri Hakkında Bilgi" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-xl transition-all">
            <Mail size={20} />
            Bilgi Talep Et
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

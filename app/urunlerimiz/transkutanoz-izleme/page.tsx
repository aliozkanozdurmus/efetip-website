"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, Activity, Baby, Moon, Heart, CheckCircle } from "lucide-react"

export default function TranskutanozIzlemePage() {
  const features = [
    {
      icon: Activity,
      title: "Non-İnvaziv İzleme",
      description: "Minimal kan alımı ile sürekli oksijen ve karbondioksit izlemi"
    },
    {
      icon: Baby,
      title: "Yenidoğan Yoğun Bakım",
      description: "Neonatal yoğun bakım üniteleri için özel tasarım"
    },
    {
      icon: Moon,
      title: "Uyku Teşhisi",
      description: "Uyku diagnostiği için kapsamlı izleme çözümleri"
    },
    {
      icon: Heart,
      title: "Vasküler Hastalık",
      description: "Yara ve vasküler hastalık değerlendirmesi"
    }
  ]

  const parameters = [
    { name: "tcpO2", description: "Transkutanöz oksijen basıncı" },
    { name: "tcpCO2", description: "Transkutanöz karbondioksit basıncı" },
    { name: "SpO2", description: "Masimo SET® SpO2" },
    { name: "Nabız", description: "Nabız hızı ölçümü" }
  ]

  const applications = [
    {
      title: "Yenidoğan Bakımı",
      description: "Yenidoğan yoğun bakım ünitelerinde sürekli ve güvenilir izleme",
      icon: Baby
    },
    {
      title: "Uyku İzleme",
      description: "Uyku bozuklukları teşhisi için kapsamlı monitörizasyon",
      icon: Moon
    },
    {
      title: "Yara ve Vasküler Değerlendirme",
      description: "Yara iyileşmesi ve vasküler hastalıkların değerlendirilmesi",
      icon: Heart
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft size={20} />
            Tüm Çözümlere Geri Dön
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transkutanöz İzleme</h1>
              <p className="text-xl text-gray-600 mb-8">
                Gerektiğinde anında harekete geçmenizi sağlayan gerçek zamanlı bilgi
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Non-İnvaziv</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Gerçek Zamanlı</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Sürekli İzleme</span>
              </div>
              <a href="mailto:info@efetip.com.tr?subject=Transkutanöz İzleme Hakkında Bilgi" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                <Mail size={18} />
                Bilgi Talep Et
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center shadow-2xl">
                <Image src="/placeholder.svg" alt="Transkutanöz İzleme" width={500} height={500} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sürekli İzleme İçin Non-İnvaziv Yöntem
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transkutanöz monitörizasyon (TCM), minimal kan alımı ile oksijen ve karbondioksitin sürekli izlenmesine ihtiyaç duyan hastalar için non-invaziv bir yöntemdir.
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p>
              Radiometer, tcpO2, tcpCO2 ile birlikte Masimo SET® SpO2 ve nabız hızı gibi parametreleri kapsayan eksiksiz bir transkutanöz izleme sistemleri yelpazesi sunar.
            </p>
            <p>
              Radiometer'ın transkutanöz izleme sistemleri, yenidoğan yoğun bakım üniteleri, yoğun bakım üniteleri ve uyku teşhisi için özel olarak tasarlanmıştır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">İzlenen Parametreler</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Kapsamlı hasta monitörizasyonu için geniş parametre yelpazesi
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parameters.map((param, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6"
                >
                  <div className="font-bold text-xl text-gray-900 mb-2">{param.name}</div>
                  <div className="text-gray-600">{param.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Uygulama Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <app.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{app.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transkutanöz İzlemenin Avantajları</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Non-invaziv yöntem ile hasta konforu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Gerçek zamanlı sürekli monitörizasyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Minimal kan alımı gereksinimi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Anında müdahale imkanı</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Yenidoğan ve yoğun bakım için ideal</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Radiometer TCM Sistemleri</h3>
              <p className="text-gray-600 mb-6">
                Radiometer'ın transkutanöz izleme sistemleri, hasta güvenliğini ve bakım kalitesini artırmak için en son teknoloji ile tasarlanmıştır.
              </p>
              <p className="text-gray-600 mb-6">
                Sistemlerimiz, yenidoğan yoğun bakım, yetişkin yoğun bakım ve uyku laboratuvarları gibi çeşitli klinik ortamlarda güvenilir performans sağlar.
              </p>
              <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group">
                Ürünlerimizi Keşfedin
                <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transkutanöz İzleme Hakkında Daha Fazla Bilgi Alın
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Non-invaziv izleme çözümlerimiz hakkında detaylı bilgi için bizimle iletişime geçin
          </p>
          <a href="mailto:info@efetip.com.tr?subject=Transkutanöz İzleme Hakkında Bilgi" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:shadow-xl transition-all">
            <Mail size={20} />
            Bilgi Talep Et
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

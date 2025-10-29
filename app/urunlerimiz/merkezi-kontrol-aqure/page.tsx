"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Monitor, Users, Shield, Network, BarChart, Clock } from "lucide-react"

export default function MerkeziKontrolAqurePage() {
  const features = [
    {
      icon: Monitor,
      title: "Cihaz Erişimi Yönetimi",
      description: "Yalnızca eğitimli ve sertifikalı operatörlerin POC cihazlarına erişimini sağlayın"
    },
    {
      icon: BarChart,
      title: "Merkezi Dashboard",
      description: "Tüm cihaz durumlarını tek bir panelden konsolide edin ve yönetin"
    },
    {
      icon: Users,
      title: "Performans Doğrulama",
      description: "Cihaz performansını emsalleriyle karşılaştırarak doğrulayın"
    }
  ]

  const modules = [
    {
      icon: Shield,
      title: "Kalite Güvencesi",
      description: "Peer Quality Control modülü, analizörlerinizin QC performansını seçili bir emsal grubuyla karşılaştırır. Westgard Kuralları ve Yöntem Karşılaştırma kuralları AQURE'de otomatiktir.",
      benefits: [
        "Standartları doğrulama",
        "Sorunları proaktif olarak ele alma",
        "Günlük QC izleme",
        "Belirlenen standartları karşılama"
      ]
    },
    {
      icon: Network,
      title: "İş Akışı Optimizasyonu",
      description: "AQURE, doğru sonuçları doğru yere doğru zamanda ulaştırarak numune karışıklığını önlemeye yardımcı olur.",
      benefits: [
        "Pozitif hasta tanımlama",
        "İş akışını kolaylaştırma",
        "Hasta bakımına daha fazla odaklanma",
        "Zaman tasarrufu"
      ]
    },
    {
      icon: Users,
      title: "Operatör Yetkinlik Yönetimi",
      description: "AQURE, operatör performansına daha fazla genel bakış sağlar. Her operatör için belirli performans kriterleri ayarlanabilir.",
      benefits: [
        "Otomatik istatistik oluşturma",
        "E-posta ile uyarı sistemi",
        "Tam izlenebilirlik",
        "Denetim raporları"
      ]
    }
  ]

  const benefits = [
    "İnsanları, cihazları ve verileri birbirine bağlar",
    "Yüksek çalışma süresi desteği",
    "İş akışı optimizasyonu",
    "Merkezi kontrol ile kalite güvencesi",
    "Radiometer ve Radiometer dışı cihazları bağlama",
    "Düzenleyici uyumluluğu gösterme"
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft size={20} />
            Tüm Çözümlere Geri Dön
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Merkezi Kontrol ile AQURE</h1>
              <p className="text-xl text-gray-600 mb-8">
                Bakım noktası test kurulumunuzun tam bir genel görünümünü ve merkezi kontrolünü elde edin
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Merkezi Kontrol</span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Kalite Güvencesi</span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">İş Akışı Optimizasyonu</span>
              </div>
              <a href="mailto:info@efetip.com.tr?subject=AQURE POC IT Çözümü Hakkında Bilgi" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                <Mail size={18} />
                Bilgi Talep Et
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center shadow-2xl">
                <Image src="/placeholder.svg" alt="AQURE POC IT" width={500} height={500} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              İnsanları, Cihazları ve Verileri Birbirine Bağlayan POC IT Çözümü
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bakım noktası testi (POCT) analizörlerini, operatör erişimini ve uyumluluğu sürdürme konusundaki günlük çalışmanızda, sizi her şeyin merkezinde tutan bir çözüm zamandan tasarruf etmenize yardımcı olabilir.
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p>
              Operatörleri sertifikalandırmanız, teknik bir sorunu araştırmanız veya denetime hazır olmanız gerekip gerekmediğine bakılmaksızın, merkezi bir erişim noktası sizi destekleyebilir. İşte AQURE tam da burada devreye giriyor.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              AQURE POC IT çözümümüz, yüksek çalışma süresi, iş akışı optimizasyonu ve merkezi kontrol ile kalite güvencesini destekleyen dijital bir hizmettir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Temel Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-cyan-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Sizin İçin Tasarlanmış Bakım Noktası IT Çözümü
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            AQURE, merkezi bir erişim noktasından bakım noktası test kurulumunuzu kontrol ettiğinizi bilerek size huzur verir
          </p>

          <div className="space-y-12">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="w-16 h-16 mb-6 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <module.icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{module.description}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Avantajlar:</h4>
                    <ul className="space-y-3">
                      {module.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AQURE Açık Bağlantı
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Radiometer ve birçok Radiometer dışı bakım noktası testi (POCT) cihazlarınızı AQURE'ye bağlayabilirsiniz.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Bu açık bağlantı özelliği, mevcut cihaz altyapınızı korurken merkezi yönetim avantajlarından yararlanmanızı sağlar.
              </p>
              <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold group">
                Ürünlerimizi Keşfedin
                <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AQURE'nin Avantajları</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="text-4xl text-cyan-600 mb-4">"</div>
            <p className="text-lg text-gray-700 italic mb-6">
              AQURE, yönetim ve kalite güvencesi amaçları için ihtiyacımız olan verileri toplamamıza ve tam izlenebilirliği sağlamamıza yardımcı oluyor. Klinik ortamı, tarihi, saati, analizörü, kullanılan sarf malzemelerinin lot numarasını ve belirli bir hastayla hangi kişinin çalıştığını her zaman biliyoruz.
            </p>
            <p className="text-gray-900 font-semibold">
              - Paloma Oliver Sáez
            </p>
            <p className="text-gray-600 text-sm">
              POC Koordinatörü, La Paz Üniversite Hastanesi, İspanya
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            AQURE POC IT Çözümü Hakkında Daha Fazla Bilgi Alın
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Merkezi kontrol ve kalite güvencesi çözümümüz hakkında detaylı bilgi için bizimle iletişime geçin
          </p>
          <a href="mailto:info@efetip.com.tr?subject=AQURE POC IT Çözümü Hakkında Bilgi" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:shadow-xl transition-all">
            <Mail size={20} />
            Bilgi Talep Et
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

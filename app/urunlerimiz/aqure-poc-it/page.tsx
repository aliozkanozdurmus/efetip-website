"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Monitor, Shield, BarChart3 } from "lucide-react"

export default function AQUREPOCITPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const modules = [
    { name: "Kalite Güvencesi", description: "Peer Quality Control modülü ile analizör performansı karşılaştırması" },
    { name: "İş Akışı Optimizasyonu", description: "Örnek karışıklığını önleme ve pozitif hasta kimlik doğrulama" },
    { name: "Beceri Öğrenimi", description: "Operatör performansı takibi ve otomatik istatistik üretimi" },
  ]

  const features = [
    {
      icon: Monitor,
      title: "Merkezi Kontrol",
      description: "Tüm POC test cihazlarınızı tek noktadan yönetin",
    },
    {
      icon: Shield,
      title: "Kalite Güvencesi",
      description: "Sürekli kalite kontrolü ve uyumluluk takibi",
    },
    {
      icon: BarChart3,
      title: "Performans Analizi",
      description: "Detaylı raporlama ve performans değerlendirmesi",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/urunlerimiz" className="hover:text-blue-600 transition-colors">
              Ürünlerimiz
            </Link>
            <span>/</span>
            <span className="text-gray-800">AQURE POC IT</span>
          </div>
        </div>

        {/* Product Header */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <Link
              href="/urunlerimiz"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Ürünlere Geri Dön
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-sm text-blue-600 font-medium mb-2">POC IT Çözümleri</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">AQURE POC IT</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Merkezi kontrol ile hasta başı test kurulumunuzun tam genel görünümünü ve merkezi kontrolünü elde edin
                  - insanları, cihazları ve verileri birbirine bağlayan POC IT çözümü
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@efetip.com.tr?subject=AQURE POC IT Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("modules")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Modüller
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-white rounded-2xl shadow-lg p-8">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="AQURE POC IT"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Genel Bakış
              </button>
              <button
                onClick={() => setActiveTab("modules")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "modules"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Modüller
              </button>
              <button
                onClick={() => setActiveTab("connectivity")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "connectivity"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Bağlantı
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    İnsanları, Cihazları ve Verileri Birbirine Bağlayan POC IT Çözümü
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      Hasta başı test (POCT) analizörlerini, operatör erişimini ve uyumluluğu sürdürme günlük
                      çalışmanızda, sizi her şeyin merkezinde tutan bir çözüm zamandan tasarruf etmenize yardımcı
                      olabilir.
                    </p>
                    <p>
                      Operatörleri sertifikalandırmanız, teknik bir sorunu araştırmanız veya denetim için hazır olmanız
                      gerekip gerekmediği, merkezi bir erişim noktası size destek olabilir. İşte AQURE burada devreye
                      girer.
                    </p>
                    <p>
                      AQURE POC IT çözümümüz, merkezi kontrol ile yüksek çalışma süresi, iş akışı optimizasyonu ve
                      kalite güvencesini destekleyen dijital bir hizmettir. Herhangi bir POCT kurulumunu yönetmede
                      zamandan tasarruf edin.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Temel Özellikler</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Merkezi erişim noktası</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Yüksek çalışma süresi desteği</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">İş akışı optimizasyonu</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kalite güvencesi</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Sizin İçin Tasarlanmış</h3>
                      <p className="text-gray-600 mb-4">
                        AQURE POC IT çözümü, sürekli düzenleyici uyumluluğu göstermek için özel olarak tasarlanmış bir
                        hasta başı IT çözümüdür.
                      </p>
                      <p className="text-gray-600">
                        Nerede çalışırsanız çalışın, AQURE POC IT çözümü sizin merkezi bakım noktanızdır.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "modules" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">AQURE Modülleri</h2>
                  <div className="grid grid-cols-1 gap-8">
                    {modules.map((module, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{module.name}</h3>
                        <p className="text-gray-600">{module.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Kalite Güvencesi</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Peer Quality Control modülü</li>
                        <li>• Westgard Kuralları otomasyonu</li>
                        <li>• Method Comparison kuralları</li>
                        <li>• Günlük QC monitörizasyonu</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">İş Akışı Optimizasyonu</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Örnek karışıklığını önleme</li>
                        <li>• Pozitif hasta kimlik doğrulama</li>
                        <li>• İş akışı düzenleme</li>
                        <li>• Hasta bakımına odaklanma</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Beceri Öğrenimi</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Operatör performans takibi</li>
                        <li>• Otomatik istatistik üretimi</li>
                        <li>• E-posta uyarı sistemi</li>
                        <li>• Tam izlenebilirlik</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "connectivity" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">AQURE Açık Bağlantı</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      Radiometer ve birçok Radiometer olmayan hasta başı test (POCT) cihazlarınızı AQURE'ye
                      bağlayabilirsiniz.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Cihaz Yönetimi</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kalite kontrolü yönetimi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Cihaz yönetimi desteği</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Operatör yetkinlik yönetimi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Örnek iş akışı koruması</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Sistem Entegrasyonu</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Radiometer cihazları</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Üçüncü parti POCT cihazları</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Merkezi dashboard</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kapsamlı raporlama</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">AQURE POC IT Hakkında Daha Fazla Bilgi Alın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Merkezi kontrol ile POC test yönetimi için AQURE POC IT çözümü hakkında detaylı bilgi almak ve fiyat
                teklifi için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@efetip.com.tr?subject=AQURE POC IT Fiyat Teklifi Talebi&body=Merhaba,%0D%0A%0D%0AAQURE POC IT çözümü hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <Mail size={18} />
                  Fiyat Teklifi Al
                </a>
                <Link
                  href="/urunlerimiz"
                  className="px-8 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  Diğer Ürünleri Görüntüle
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

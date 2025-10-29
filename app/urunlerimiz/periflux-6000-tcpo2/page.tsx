"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Activity, Heart, Stethoscope } from "lucide-react"

export default function PeriFlux6000Page() {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const applications = [
    { category: "Yara İyileşmesi", description: "Yara iyileşme kapasitesinin değerlendirilmesi" },
    { category: "Alt Ekstremite Yaraları", description: "Alt ekstremite yaralarında hasta değerlendirmesi" },
    { category: "Mikrosirkülasyon", description: "Hasta ekstremitelerinin mikrosirkülasyonunun ölçümü" },
  ]

  const features = [
    {
      icon: Activity,
      title: "Doku Oksijen Ölçümü",
      description: "Transcutaneous oksijen ölçümü ile doku perfüzyonu değerlendirmesi",
    },
    {
      icon: Heart,
      title: "Taşınabilir Tasarım",
      description: "Küçük ve taşınabilir bağımsız monitör",
    },
    {
      icon: Stethoscope,
      title: "TCOM Test Protokolleri",
      description: "Önceden yüklenmiş TCOM test protokolleri ile tekrarlanabilir ölçümler",
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
            <span className="text-gray-800">PeriFlux 6000 tcpO2</span>
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
                <div className="text-sm text-blue-600 font-medium mb-2">Transcutaneous Monitörleme</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">PeriFlux 6000 tcpO2</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Doku oksijen değerlendirmesi için özel olarak tasarlanmış transcutaneous monitör - yara iyileşme
                  kapasitesini ortaya çıkarın
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@efetip.com.tr?subject=PeriFlux 6000 tcpO2 Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("applications")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Uygulama Alanları
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
                    alt="PeriFlux 6000 tcpO2"
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
                onClick={() => setActiveTab("applications")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "applications"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Uygulama Alanları
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "features"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Özellikler
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
                    İhtiyaçlarınıza Göre Uyarlanmış Transcutaneous Monitörleme
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      PeriFlux 6000 tcpO2 bağımsız transcutaneous monitör ile yara iyileşme kapasitesini ortaya çıkarın.
                    </p>
                    <p>
                      PeriFlux 6000 tcpO2 bağımsız transcutaneous monitör, alt ekstremite yaraları olan hastaları
                      değerlendirmenizde size destek olabilir.
                    </p>
                    <p>
                      Dokudan transcutaneous oksijen ölçümü ile hastanın ekstremitelerinin mikrosirkülasyonunu
                      ölçebilirsiniz.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Temel Avantajlar</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Yara iyileşme kapasitesini değerlendirme</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Alt ekstremite yaralarında hasta değerlendirmesi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Mikrosirkülasyon ölçümü</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Taşınabilir ve bağımsız monitör</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Perimed AB Ürünü</h3>
                      <p className="text-gray-600 mb-4">
                        PeriFlux 6000 tcpO2 bağımsız transcutaneous monitör, Radiometer Medical Aps tarafından dağıtılan
                        bir Perimed AB ürünüdür.
                      </p>
                      <p className="text-gray-600">
                        Bu monitör, doku oksijen değerlendirmesi için özel olarak tasarlanmış ve klinik ihtiyaçlarınıza
                        göre uyarlanabilir.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "applications" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Uygulama Alanları</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {applications.map((app, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{app.category}</h3>
                        <p className="text-gray-600">{app.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-blue-50 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Klinik Uygulamalar</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Diyabetik ayak ülserleri</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Periferik arter hastalığı</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Yara iyileşme takibi</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Doku perfüzyon değerlendirmesi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Ampütasyon seviyesi belirleme</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Vasküler cerrahi öncesi değerlendirme</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "features" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Tekrarlanabilir TCOM Test Protokolleri ile Transcutaneous Monitörleme Çözümü
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>Transcutaneous monitör birkaç farklı test protokolüne sahiptir.</p>
                    <p>
                      Önceden yüklenmiş transcutaneous oksijen ölçümü (TCOM) test protokolleri, hastanın ölçümünün ve
                      ekipler arasında tekrarlanabilirliğini sağlar.
                    </p>
                    <p>
                      Dokunmatik ekran arayüzünde görüntülenen talimatlar, hasta hazırlığından ölçümün farklı adımlarına
                      kadar her adımda size rehberlik eder.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Taşınabilirlik</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Küçük ve taşınabilir bağımsız monitör</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Stand veya araç üzerine yerleştirme seçeneği</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Yanınızda taşıyabilme imkanı</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Kullanım Kolaylığı</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Dokunmatik ekran arayüzü</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Adım adım talimat rehberliği</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Önceden yüklenmiş test protokolleri</span>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                PeriFlux 6000 tcpO2 Hakkında Daha Fazla Bilgi Alın
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Doku oksijen değerlendirmesi için özel tasarlanmış PeriFlux 6000 tcpO2 transcutaneous monitör hakkında
                detaylı bilgi almak ve fiyat teklifi için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@efetip.com.tr?subject=PeriFlux 6000 tcpO2 Fiyat Teklifi Talebi&body=Merhaba,%0D%0A%0D%0APeriFlux 6000 tcpO2 transcutaneous monitör hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
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

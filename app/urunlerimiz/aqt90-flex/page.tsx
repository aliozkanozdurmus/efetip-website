"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Clock, Heart, Shield } from "lucide-react"

export default function AQT90FlexPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testTypes = [
    { category: "Kardiyak Biyobelirteçler", description: "Kalp hastalıkları tanısı için kritik belirteçler" },
    { category: "Koagülasyon Testleri", description: "Kan pıhtılaşma durumunun değerlendirilmesi" },
    { category: "Enfeksiyon Biyobelirteçleri", description: "Enfeksiyon hastalıklarının erken tespiti" },
  ]

  const features = [
    {
      icon: Clock,
      title: "Hızlı Sonuçlar",
      description: "11-21 dakikada test sonuçları",
    },
    {
      icon: Heart,
      title: "Hasta Başı Test",
      description: "Kritik hastaya yakın kalarak test yapma imkanı",
    },
    {
      icon: Shield,
      title: "Güvenilir Tanı",
      description: "Kritik durumları tanı koyma veya dışlama",
    },
  ]

  const images = [{ src: "/images/aqt90-main.png", alt: "AQT90 FLEX Ana Görünüm" }]

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
            <span className="text-gray-800">AQT90 FLEX</span>
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
                <div className="text-sm text-blue-600 font-medium mb-2">Immunoassay Testleri</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">AQT90 FLEX</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Akut bakım durumlarında hasta başı immunoassay testleri için gelişmiş analizör - kritik test
                  sonuçlarını beklemeden hızlı karar verme imkanı
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:efetip@efetip.com.tr?subject=AQT90 FLEX Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("tests")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Test Türleri
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
                    src="/images/aqt90-main.png"
                    alt="AQT90 FLEX"
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
                onClick={() => setActiveTab("tests")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "tests" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Test Türleri
              </button>
              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "benefits"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Avantajlar
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "gallery"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Galeri
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Akut Bakımda Zaman Kritiktir</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      Akut bakım durumlarında zaman kritiktir. Hasta başı (POC) immunoassay testleri ile artık
                      laboratuvardan kritik test sonuçlarını beklemeniz gerekmez. Radiometer AQT90 FLEX analizörü 11-21
                      dakikada sonuç verir.
                    </p>
                    <p>
                      Hasta başında kardiyak, koagülasyon ve enfeksiyon biyobelirteçleri gibi immunoassay testlerini
                      yapabilirsiniz. Bu sadece kritik hastanıza yakın kalmanızı sağlamakla kalmaz, aynı zamanda size
                      şunlarda da yardımcı olur:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Kritik durumları tanı koymak veya dışlamak</li>
                      <li>Tedaviyi daha hızlı başlatmak ve hastanın iyileşme şansını artırmak</li>
                    </ul>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Temel Özellikler</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">11-21 dakikada hızlı sonuçlar</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hasta başı (POC) test imkanı</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kardiyak, koagülasyon ve enfeksiyon testleri</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kritik hastaya yakın kalma imkanı</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hasta Bakımında Avantaj</h3>
                      <p className="text-gray-600 mb-4">
                        AQT90 FLEX, akut bakım ortamlarında kritik kararların hızla alınmasını sağlar. Laboratuvar
                        sonuçlarını beklemeden hasta başında güvenilir test sonuçları elde edebilirsiniz.
                      </p>
                      <p className="text-gray-600">
                        Bu hızlı tanı imkanı, tedavinin erken başlatılmasını ve hasta sonuçlarının iyileştirilmesini
                        destekler.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "tests" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Test Türleri</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testTypes.map((test, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{test.category}</h3>
                        <p className="text-gray-600">{test.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-blue-50 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Immunoassay Test Avantajları</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Yüksek hassasiyet ve özgüllük</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Geniş test menüsü</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kantitatif sonuçlar</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hasta başı kullanım</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hızlı sonuç alma</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kolay kullanım</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "benefits" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Klinik Avantajlar</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      AQT90 FLEX analizörü, akut bakım ortamlarında kritik kararların hızla alınmasını sağlayan önemli
                      avantajlar sunar:
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hasta Bakımı</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kritik hastaya yakın kalma</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hızlı tanı ve tedavi başlatma</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">İyileşme şansını artırma</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Operasyonel Faydalar</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Laboratuvar bekleme süresi eliminasyonu</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">İş akışı optimizasyonu</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Maliyet etkin çözüm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "gallery" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Ürün Galerisi</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {images.map((image, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={800}
                          height={500}
                          className="w-full h-96 object-contain"
                        />
                        <div className="p-4">
                          <p className="text-gray-600 text-center">{image.alt}</p>
                        </div>
                      </div>
                    ))}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">AQT90 FLEX Hakkında Daha Fazla Bilgi Alın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Hasta başı immunoassay testleri için gelişmiş AQT90 FLEX analizörü hakkında detaylı bilgi almak ve fiyat
                teklifi için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:efetip@efetip.com.tr?subject=AQT90 FLEX Fiyat Teklifi Talebi&body=Merhaba,%0D%0A%0D%0AAQT90 FLEX immunoassay analizörü hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
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

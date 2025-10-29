"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Monitor, Zap, Users } from "lucide-react"

export default function ABL9Page() {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const parameters = [
    { category: "Kan Gazları", items: ["pH", "pCO2", "pO2"] },
    { category: "Hematokrit", items: ["Hct"] },
    { category: "Elektrolitler", items: ["cCa2+", "cCl-", "cK+", "cNa+"] },
    { category: "Metabolitler", items: ["cLac"] },
  ]

  const features = [
    {
      icon: Monitor,
      title: "Kullanım Kolaylığı",
      description: "Adım adım ekran rehberliği ile kolay kullanım",
    },
    {
      icon: Zap,
      title: "Kompakt Tasarım",
      description: "Küçük ayak izi ile çoğu ortama uyum",
    },
    {
      icon: Users,
      title: "Kritik Bakım",
      description: "Az sayıda test için özel olarak tasarlanmış",
    },
  ]

  const images = [
    { src: "/images/abl9-main.png", alt: "ABL9 Ana Görünüm" },
    { src: "/images/abl9-usage.png", alt: "Hasta Başı Kullanım" },
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
            <span className="text-gray-800">ABL9</span>
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
                <div className="text-sm text-blue-600 font-medium mb-2">Kan Gazı Analizörleri</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">ABL9</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Kritik bakım ortamları için özel olarak tasarlanmış, günde az sayıda test yapan klinikler için ideal
                  kompakt kan gazı analizörü
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@efetip.com.tr?subject=ABL9 Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("specs")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Teknik Özellikler
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
                    src="/images/abl9-main.png"
                    alt="ABL9"
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
                onClick={() => setActiveTab("specs")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "specs" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Teknik Özellikler
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Kritik Bakım Ortamları İçin Özel Tasarım</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      ABL9 kan gazı analizörü, günde sadece birkaç test yapan kritik bakım ortamları için özel olarak
                      tasarlanmıştır.
                    </p>
                    <p>
                      Kullanım kolaylığı göz önünde bulundurularak geliştirilmiş olan bu cihaz, küçük ayak izi sayesinde
                      çoğu ortama uyum sağlar.
                    </p>
                    <p>
                      Ekrandaki adım adım kullanıcı rehberliğini kullanarak, ABL9 analizöründe hasta örneklerini kolayca
                      ölçebilir ve asit-baz dengesi ile oksijen ve elektrolit durumu hakkında hızlı sonuçlar
                      alabilirsiniz.
                    </p>
                    <p>
                      Kısa sürede hızlı klinik karar verme ve uygun tıbbi bakım sağlamak için gerekli bilgilere sahip
                      olursunuz.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Temel Avantajlar</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kritik bakım ortamları için özel tasarım</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Günde az sayıda test için optimize edilmiş</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Küçük ayak izi ile kompakt tasarım</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Adım adım ekran rehberliği</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hızlı Klinik Karar</h3>
                      <p className="text-gray-600 mb-4">
                        ABL9, asit-baz dengesi, oksijen durumu ve elektrolit seviyelerini hızlı bir şekilde ölçerek
                        kritik bakım ortamlarında hızlı klinik karar vermenizi destekler.
                      </p>
                      <p className="text-gray-600">
                        Kullanım kolaylığı ve kompakt tasarımı sayesinde, hasta başında güvenilir sonuçlar elde
                        edebilirsiniz.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "specs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Ölçülen Parametreler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {parameters.map((category, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.category}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-white rounded px-3 py-2 text-sm text-gray-700 font-mono">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-blue-50 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Teknik Özellikler</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Tasarım</div>
                        <div className="text-lg font-semibold text-gray-800">Kompakt ayak izi</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Kullanım</div>
                        <div className="text-lg font-semibold text-gray-800">Adım adım rehberlik</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Hedef</div>
                        <div className="text-lg font-semibold text-gray-800">Az test hacmi</div>
                      </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((image, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover"
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">ABL9 Hakkında Daha Fazla Bilgi Alın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Kompakt ve kullanıcı dostu ABL9 kan gazı analizörü hakkında detaylı bilgi almak ve fiyat teklifi için
                bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@efetip.com.tr?subject=ABL9 Fiyat Teklifi Talebi&body=Merhaba,%0D%0A%0D%0AABL9 kan gazı analizörü hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
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

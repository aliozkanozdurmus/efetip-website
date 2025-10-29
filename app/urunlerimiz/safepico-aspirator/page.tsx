"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Droplets, Shield, Target } from "lucide-react"

export default function SafePicoAspiratorPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Droplets,
      title: "Entegre Karıştırma Topu",
      description: "Gelişmiş karıştırma için entegre karıştırma topu",
    },
    {
      icon: Target,
      title: "Optimal Hacim",
      description: "1.0 mL önerilen dolum hacmi ile doğru ölçüm",
    },
    {
      icon: Shield,
      title: "Hasta Kan Yönetimi",
      description: "Gereksiz kan alımını önleyerek hasta güvenliği",
    },
  ]

  const benefits = [
    "Radiometer kan gazı analizörlerinde tüm parametreleri ölçmek için gereken kan miktarını net gösterim",
    "1.0 mL etiketi ile Hasta Kan Yönetimini destekleme",
    "Hasta kan gazı analizi için gerekenden fazla kan almama",
    "Entegre karıştırma topu ile homojen örnek elde etme",
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
            <span className="text-gray-800">safePICO Aspirator</span>
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
                <div className="text-sm text-blue-600 font-medium mb-2">Kan Gazı Şırıngaları</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">safePICO Aspirator</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Entegre karıştırma toplu arteriyel kan gazı şırıngası ile karıştırmanızı geliştirin - Hasta Kan
                  Yönetimini destekleyen optimal hacim
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@efetip.com.tr?subject=safePICO Aspirator Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("benefits")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Avantajlar
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
                    alt="safePICO Aspirator"
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
                onClick={() => setActiveTab("specifications")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "specifications"
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
                    safePICO Aspirator Arteriyel Kan Gazı Şırıngası ile Karıştırmanızı Geliştirin
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      safePICO Aspirator entegre karıştırma topuna sahiptir ve 1.0 mL önerilen dolum hacmine sahiptir.
                    </p>
                    <p>
                      Etiket, Radiometer kan gazı analizörlerinde tüm parametreleri ölçmek için ihtiyacınız olan kan
                      miktarını açıkça gösterir.
                    </p>
                    <p>
                      1.0 mL etiketi ile hastanın kan gazı analizi için gerekenden fazla kan almayarak Hasta Kan
                      Yönetimini desteklersiniz.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Temel Özellikler</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Entegre karıştırma topu</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">1.0 mL önerilen dolum hacmi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Net kan miktarı gösterimi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hasta Kan Yönetimi desteği</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Hasta Güvenliği</h3>
                      <p className="text-gray-600 mb-4">
                        safePICO Aspirator, hasta güvenliğini ön planda tutarak gereksiz kan alımını önler ve optimal
                        örnek kalitesi sağlar.
                      </p>
                      <p className="text-gray-600">
                        Entegre karıştırma topu sayesinde homojen kan örnekleri elde ederek güvenilir test sonuçları
                        alabilirsiniz.
                      </p>
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Klinik Avantajlar</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">{benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-blue-50 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hasta Kan Yönetimi</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Neden Önemli?</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Gereksiz kan kaybını önleme</li>
                          <li>• Hasta konforunu artırma</li>
                          <li>• Anemi riskini azaltma</li>
                          <li>• Maliyet etkin yaklaşım</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">safePICO Katkısı</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Optimal örnek hacmi (1.0 mL)</li>
                          <li>• Net etiketleme sistemi</li>
                          <li>• Tüm parametreler için yeterli hacim</li>
                          <li>• Standardize edilmiş yaklaşım</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "specifications" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Teknik Özellikler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Şırınga Özellikleri</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dolum Hacmi:</span>
                          <span className="font-medium">1.0 mL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Karıştırma:</span>
                          <span className="font-medium">Entegre karıştırma topu</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tip:</span>
                          <span className="font-medium">Arteriyel kan gazı</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Etiketleme:</span>
                          <span className="font-medium">Net hacim gösterimi</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Uyumluluk</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Analizör Uyumluluğu:</span>
                          <span className="font-medium">Radiometer kan gazı analizörleri</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Parametre Desteği:</span>
                          <span className="font-medium">Tüm parametreler</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kullanım Alanı:</span>
                          <span className="font-medium">Arteriyel kan örnekleri</span>
                        </div>
                      </div>
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
                safePICO Aspirator Hakkında Daha Fazla Bilgi Alın
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Entegre karıştırma toplu arteriyel kan gazı şırıngası hakkında detaylı bilgi almak ve fiyat teklifi için
                bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@efetip.com.tr?subject=safePICO Aspirator Fiyat Teklifi Talebi&body=Merhaba,%0D%0A%0D%0AsafePICO Aspirator kan gazı şırıngası hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
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

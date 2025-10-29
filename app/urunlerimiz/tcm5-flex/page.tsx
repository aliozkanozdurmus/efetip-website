"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Monitor, Users, AlertTriangle } from "lucide-react"

export default function TCM5FlexPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const parameters = [
    { category: "Pulse Oksimetri", items: ["Pulse", "SpO2"] },
    { category: "Transcutaneous Kan Gazı", items: ["tcpCO2", "tcpO2"] },
  ]

  const features = [
    {
      icon: Monitor,
      title: "Sezgisel Arayüz",
      description: "Sezgisel kullanıcı arayüzü ve yerleşik eğitimler",
    },
    {
      icon: Users,
      title: "Çok Yaş Grubu",
      description: "Neonatal, pediatrik ve yetişkin hastalar için uygun",
    },
    {
      icon: AlertTriangle,
      title: "Güvenlik Özellikleri",
      description: "Sistem tanımlı sıcaklık ve süre limitleri",
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
            <span className="text-gray-800">TCM5 FLEX</span>
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
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">TCM5 FLEX</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Kritik hasta bakımınızı destekleyen transcutaneous monitör - YBÜ'de neonatal, pediatrik ve yetişkin
                  hastalar için sürekli oksijen ve ventilasyon takibi
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@efetip.com.tr?subject=TCM5 FLEX Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("parameters")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Parametreler
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
                    alt="TCM5 FLEX"
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
                onClick={() => setActiveTab("parameters")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "parameters"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Parametreler
              </button>
              <button
                onClick={() => setActiveTab("safety")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "safety"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                Güvenlik
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
                    Hasta Bakımına Odaklanmanıza Yardımcı Olan Transcutaneous Monitör
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      TCM5 FLEX transcutaneous monitör, YBÜ'de neonatal, pediatrik ve yetişkin hastalarda oksijen
                      (tcpO2) ve ventilasyon (tcpCO2) durumunun doğru ve sürekli ölçümünü sağlayan kompakt, kullanımı
                      kolay bir çözümdür.
                    </p>
                    <p>
                      Sistem tanımlı sıcaklık karşısında bölge süresi limitleri, ısıtılmış elektrottan kaynaklanan zarar
                      riskini azaltmaya yardımcı olur.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Temel Özellikler</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Sürekli tcpO2 ve tcpCO2 ölçümü</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Pulse oksimetri (Pulse, SpO2)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Neonatal, pediatrik ve yetişkin hasta desteği</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kompakt ve pratik tasarım</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Kullanıcı Dostu Tasarım</h3>
                      <p className="text-gray-600 mb-4">
                        TCM5 FLEX monitör, kurulum, öğrenme ve kullanımı kolaylaştıran sezgisel kullanıcı arayüzü ve
                        yerleşik eğitimlere sahiptir.
                      </p>
                      <p className="text-gray-600">
                        Kompakt ve pratik olan TCM5 FLEX monitör, renkli dokunmatik ekranla birlikte gelir. Net ekran
                        mesajları, hasta bakımını destekleyen ölçülen parametrelerin anında genel görünümünü sağlar.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "parameters" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Ölçülen Parametreler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {parameters.map((param, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{param.category}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {param.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="bg-white rounded px-3 py-2 text-sm text-gray-700 font-mono">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-blue-50 rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Klinik Faydalar</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Sürekli non-invaziv monitörizasyon</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Gerçek zamanlı trend ölçümleri</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Kritik değişikliklere anında müdahale</span>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hasta durumu değişikliklerinde alarm</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Oksijen ve ventilasyon durumu takibi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Çok yaş grubu hasta desteği</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "safety" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Güvenlik Özellikleri</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                      TCM5 FLEX transcutaneous monitör, hasta güvenliğini ön planda tutan çeşitli güvenlik özellikleri
                      ile donatılmıştır.
                    </p>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Elektrot Güvenliği</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Sistem tanımlı sıcaklık limitleri</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Bölge süresi vs. sıcaklık kontrolü</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Isıtılmış elektrot zarar riskini azaltma</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Alarm Sistemi</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Monitör üstünde görünür alarm çubuğu</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Ekran üzerinde alarm simgeleri</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Hasta durumu değişikliklerinde uyarı</span>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">TCM5 FLEX Hakkında Daha Fazla Bilgi Alın</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Kritik hasta bakımı için tasarlanmış TCM5 FLEX transcutaneous monitör hakkında detaylı bilgi almak ve
                fiyat teklifi için bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@efetip.com.tr?subject=TCM5 FLEX Fiyat Teklifi Talebi&body=Merhaba,%0D%0A%0D%0ATCM5 FLEX transcutaneous monitör hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
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

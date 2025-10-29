"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, Moon, Settings, Clock, CheckCircle } from "lucide-react"

export default function TCM5BasicPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "sleep" | "specs">("overview")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  /* — DATA — */
  const parameters = [
    { category: "Pulse Oksimetri", items: ["Pulse", "SpO2"] },
    { category: "Transcutaneous Kan Gazı", items: ["tcpCO2"] },
  ]

  const features = [
    {
      icon: Moon,
      title: "Uyku Modu",
      description: "Özel uyku modu ve isteğe bağlı karanlık ekran",
    },
    {
      icon: Settings,
      title: "Otomatik Kalibrasyon",
      description: "Otomatik sensör kalibrasyonu ile hazırlık süresini azaltın",
    },
    {
      icon: Clock,
      title: "Hazırlık Kolaylığı",
      description: "Yerleşik eğitimler ve basit kullanıcı arayüzü",
    },
  ]

  /* — HELPERS — */
  const TabBtn = ({
    tab,
    label,
  }: {
    tab: "overview" | "sleep" | "specs"
    label: string
  }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        activeTab === tab ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  )

  /* — UI — */
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
            <span className="text-gray-800">TCM5 BASIC</span>
          </div>
        </div>

        {/* Hero */}
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
              {/* — Left — */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-sm text-blue-600 font-medium mb-2">Transcutaneous Monitörleme</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">TCM5 BASIC</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Uyku tanısı için özel tasarlanmış transcutaneous monitör – karanlıkta bile çalışır, hazır olduğunuzda
                  yanınızda.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@efetip.com.tr?subject=TCM5 BASIC Fiyat Teklifi Talebi"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Fiyat Teklifi Al
                  </a>
                  <button
                    onClick={() => setActiveTab("sleep")}
                    className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Uyku Modu
                  </button>
                </div>
              </motion.div>

              {/* — Right — */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-white rounded-2xl shadow-lg p-8">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="TCM5 BASIC"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Icons */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
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
            {/* Tab Nav */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <TabBtn tab="overview" label="Genel Bakış" />
              <TabBtn tab="sleep" label="Uyku Modu" />
              <TabBtn tab="specs" label="Teknik Özellikler" />
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {/* — OVERVIEW — */}
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Uyku Tanısında Güvenilir Transcutaneous Monitör
                  </h2>
                  <p className="text-gray-600 mb-6">
                    TCM5 BASIC, uyku sırasında tcpCO2 ve SpO2 izlemi için kompakt ve kullanıcı dostu bir çözümdür.
                    Karanlık ekran moduyla hastaları rahatsız etmez ve otomatik kalibrasyon süreci ile zamandan tasarruf
                    sağlar.
                  </p>
                </motion.div>
              )}

              {/* — SLEEP MODE — */}
              {activeTab === "sleep" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Uyku Modu ve Karanlık Ekran</h2>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      Uyku laboratuvarları için düşük parlaklık karanlık ekran
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      Gürültüsüz çalışma ve minimum ışık kirliliği
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      Otomatik uyandırma / uyku moduna geçiş
                    </li>
                  </ul>
                </motion.div>
              )}

              {/* — SPECS — */}
              {activeTab === "specs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Ölçülen Parametreler</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {parameters.map((group) => (
                      <div key={group.category} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{group.category}</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {group.items.map((item) => (
                            <div key={item} className="bg-white rounded px-3 py-2 text-sm text-gray-700 font-mono">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building, Users, Handshake, Globe } from "lucide-react"

export default function AboutTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Building,
      title: "TUNA Şirketler Grubu",
      description: "1984 yılından beri güçlü bir grup şirketi olarak sektörde öncü konumdayız.",
    },
    {
      icon: Users,
      title: "Deneyimli Ekip",
      description: "Alanında uzman ekibimizle müşterilerimize en iyi hizmeti sunmaya odaklanıyoruz.",
    },
    {
      icon: Handshake,
      title: "Güvenilir Ortaklık",
      description: "Müşterilerimizle uzun vadeli ve güvenilir iş ortaklıkları kurarak büyümeye devam ediyoruz.",
    },
    {
      icon: Globe,
      title: "Uluslararası Standartlar",
      description: "10'dan fazla ülkeye ihracat yaparak uluslararası kalite standartlarını benimsiyor ve uyguluyoruz.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Neden Efetıp?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            TUNA Şirketler Grubu'nun güçlü altyapısı ve 40 yılı aşkın deneyimi ile laboratuvar ekipmanları alanında
            güvenilir çözümler sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Misyonumuz</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            TUNA Şirketler Grubu'nun güçlü altyapısı ve 40 yılı aşkın deneyimi ile laboratuvar ekipmanları alanında
            müşterilerimize en yüksek kalitede ürün ve hizmet sunarak, sektörde güvenilir bir partner olmaya devam
            etmek. Teknolojik yenilikleri takip ederek, çevreye duyarlı yaklaşımımızla topluma ve ülkemize değer
            katmaktır.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Factory, TrendingUp, Award } from "lucide-react"

export default function AboutHistory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timeline = [
    {
      year: "1984",
      title: "Kuruluş",
      description:
        "TUNA Şirketler Grubu'nun temelleri Huzeyfe Durmaz tarafından atıldı. Sentetik dokuma kumaş ve çuval sektöründe üretime başlandı.",
      icon: Factory,
      color: "from-blue-500 to-blue-600",
    },
    {
      year: "1990'lar",
      title: "Büyüme ve Gelişim",
      description:
        "Teknolojide değişimi ve gelişimi izleyerek, yeni yatırımlar ve yeni alanlar belirlenerek pazarda etkin pay sahibi olma yolunda adımlar atıldı.",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      year: "2000'ler",
      title: "Teknolojik Yenilik",
      description:
        "Üretim süreçlerine en son teknolojik yeniliklerin entegre edilmesi ve çevreye duyarlı yaklaşımla topluma değer katma odağı.",
      icon: Award,
      color: "from-purple-500 to-purple-600",
    },
    {
      year: "Günümüz",
      title: "Efetıp ve Laboratuvar Çözümleri",
      description:
        "TUNA Grubu'nun laboratuvar ekipmanları alanındaki uzman iştiraki olarak Efetıp, sektörde güvenilir çözümler sunmaya devam ediyor.",
      icon: Calendar,
      color: "from-green-500 to-green-600",
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
            Tarihçemiz
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            40 yılı aşkın deneyimimizle, müşteri memnuniyetini ön planda tutarak sektörde güvenilir bir partner olarak
            büyümeye devam ediyoruz.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-indigo-200 hidden lg:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-8 gap-4`}
              >
                {/* Content */}
                <div
                  className={`lg:w-5/12 w-full ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
                >
                  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="lg:w-2/12 w-full flex justify-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12 w-full hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

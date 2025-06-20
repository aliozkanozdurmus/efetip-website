"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Target, Lightbulb, Shield, Users, Leaf } from "lucide-react"

export default function AboutValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      icon: Heart,
      title: "Müşteri Memnuniyeti",
      description: "Müşteri memnuniyetini ön planda tutarak, ihtiyaçlarına uygun yüksek kaliteli çözümler sunuyoruz.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Kalite Odaklılık",
      description:
        "Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun yüksek kaliteli ürün üretimi gerçekleştiriyoruz.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Lightbulb,
      title: "Sürekli Yenilik",
      description:
        "Sistemimizi sürekli yenilemeye ve iyileştirmeye yönelik şirket kültürü yaratarak teknolojide değişimi izliyoruz.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "40 yılı aşkın deneyimimizle sektörde güvenilir bir partner olarak hizmet vermeye devam ediyoruz.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Sosyal Sorumluluk",
      description: "Ülkesine ve çalışanlarına fayda sağlamayı amaçlayan bir yaklaşımla topluma değer katıyoruz.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Leaf,
      title: "Çevre Duyarlılığı",
      description: "Çevreye duyarlı yaklaşımımızla sürdürülebilir üretim süreçleri geliştirmeye odaklanıyoruz.",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Değerlerimiz
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            TUNA Şirketler Grubu olarak benimsediğimiz değerler, Efetıp'in de temel prensiplerini oluşturmaktadır.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

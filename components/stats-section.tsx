"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Users, Building, Award, Globe } from "lucide-react"

const stats = [
  {
    id: 1,
    value: 1500,
    label: "Ürün Çeşidi",
    icon: Building,
    suffix: "+",
  },
  {
    id: 2,
    value: 250,
    label: "Mutlu Müşteri",
    icon: Users,
    suffix: "+",
  },
  {
    id: 3,
    value: 15,
    label: "Yıllık Deneyim",
    icon: Award,
    suffix: "+",
  },
  {
    id: 4,
    value: 10,
    label: "Ülkeye İhracat",
    icon: Globe,
    suffix: "+",
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000 // 2 seconds
        const steps = 50
        const increment = stat.value / steps
        let count = 0

        return setInterval(() => {
          count += increment
          if (count >= stat.value) {
            count = stat.value
            clearInterval(intervals[index])
          }

          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(count)
            return newCounts
          })
        }, duration / steps)
      })

      return () => intervals.forEach(clearInterval)
    }
  }, [isInView])

  return (
    <section className="py-20 relative bg-gray-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lab.jpg"
          alt="Laboratuvar Arka Planı"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Rakamlarla Efetıp
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Yılların deneyimi ve güveniyle laboratuvar ekipmanları sektöründe öncü konumumuzu sürdürüyoruz.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {counts[index]}
                <span className="text-blue-300">{stat.suffix}</span>
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

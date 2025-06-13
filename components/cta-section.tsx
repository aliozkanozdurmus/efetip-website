"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-indigo-100 blur-3xl" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10"
      >
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Laboratuvar Çözümleriniz İçin Yanınızdayız
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Efetıp olarak, laboratuvar ekipmanları konusunda 15 yılı aşkın deneyimimizle ihtiyaçlarınıza özel çözümler
              sunuyoruz. Hemen bizimle iletişime geçin.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Katalog İste
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300"
            >
              İletişime Geç
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

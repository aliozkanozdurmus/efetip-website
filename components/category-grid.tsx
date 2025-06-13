"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Laboratuvar Cihazları",
    description: "Hassas ve güvenilir laboratuvar cihazları",
    image: "/placeholder.svg?height=400&width=600",
    href: "/urunler/laboratuvar-cihazlari",
  },
  {
    id: 2,
    name: "Cam Malzemeler",
    description: "Yüksek kaliteli laboratuvar cam malzemeleri",
    image: "/placeholder.svg?height=400&width=600",
    href: "/urunler/cam-malzemeler",
  },
  {
    id: 3,
    name: "Sarf Malzemeleri",
    description: "Günlük laboratuvar ihtiyaçları için sarf malzemeleri",
    image: "/placeholder.svg?height=400&width=600",
    href: "/urunler/sarf-malzemeleri",
  },
  {
    id: 4,
    name: "Kimyasallar",
    description: "Yüksek saflıkta laboratuvar kimyasalları",
    image: "/placeholder.svg?height=400&width=600",
    href: "/urunler/kimyasallar",
  },
]

export default function CategoryGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Ürün Kategorilerimiz
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Laboratuvar ihtiyaçlarınız için geniş ürün yelpazemizi keşfedin. Yüksek kaliteli ve güvenilir ürünlerle
            çalışmalarınızı destekliyoruz.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <Link href={category.href} className="block">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 via-transparent to-transparent opacity-40" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

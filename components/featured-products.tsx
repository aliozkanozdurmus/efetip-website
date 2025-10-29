"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"

const featuredProducts = products.slice(0, 4); // Show first 4 products on the homepage

export default function FeaturedProducts() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as const, // Use 'as const' for type safety
      },
    }),
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Öne Çıkan Ürünlerimiz</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Laboratuvarınız için en yenilikçi ve güvenilir çözümleri sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden p-4 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm flex-grow mb-4">{product.description}</p>
                <Link href={product.link}>
                  <span className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                    Detayları Gör
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/urunlerimiz">
            <span className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
              Tüm Ürünleri Keşfet
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

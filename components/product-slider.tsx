"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Dijital Mikroskop",
    description: "Yüksek çözünürlüklü görüntüleme için gelişmiş dijital mikroskop",
    price: 12500,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Hassas Terazi",
    description: "0.001g hassasiyetli laboratuvar terazisi",
    price: 8750,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Santrifüj Cihazı",
    description: "Yüksek hızlı ve sessiz çalışan santrifüj cihazı",
    price: 15200,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "pH Metre",
    description: "Dijital ekranlı, yüksek hassasiyetli pH ölçüm cihazı",
    price: 3600,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Etüv",
    description: "Dijital kontrollü, paslanmaz çelik laboratuvar etüvü",
    price: 18900,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const visibleProducts = isMobile ? 1 : 3
  const maxIndex = products.length - visibleProducts

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(price)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            En çok tercih edilen laboratuvar ekipmanlarımızı keşfedin. Yüksek kalite ve performans için tasarlandı.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              ref={slideRef}
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {products.map((product) => (
                <div key={product.id} className={`flex-shrink-0 w-full md:w-1/3 px-3`}>
                  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 h-full">
                    <div className="aspect-square overflow-hidden relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Yeni
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={cn(
                              "fill-current",
                              i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-200",
                            )}
                          />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">{product.rating}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-300 z-10 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-300 z-10 shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={cn(
                "w-2 h-2 rounded-full mx-1 transition-all duration-300",
                index === currentIndex ? "bg-blue-500 w-6" : "bg-gray-300 hover:bg-gray-400",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

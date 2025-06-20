"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    role: "Kimya Bölümü Başkanı",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Efetıp'ın sağladığı laboratuvar ekipmanları sayesinde araştırmalarımızda çok daha hassas ve güvenilir sonuçlar elde ediyoruz. Teknik destek ekipleri her zaman yardıma hazır.",
  },
  {
    id: 2,
    role: "Biyoloji Laboratuvarı Yöneticisi",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Uzun yıllardır Efetıp ile çalışıyoruz ve ürünlerinin kalitesi ve dayanıklılığı konusunda hiçbir şikayetimiz olmadı. Teslimat süreçleri hızlı ve sorunsuz.",
  },
  {
    id: 3,
    role: "Medikal Laboratuvar Teknisyeni",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Efetıp'ın sunduğu geniş ürün yelpazesi sayesinde tüm laboratuvar ihtiyaçlarımızı tek bir yerden karşılayabiliyoruz. Fiyat-performans açısından mükemmel bir tercih.",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-indigo-100 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Müşteri Referansları
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Müşterilerimizin Efetıp deneyimleri hakkında ne söylediklerini öğrenin.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white border border-gray-100 rounded-xl p-8 md:p-10 shadow-md"
            >
              <div className="text-center">
                <Quote className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                <p className="text-gray-600 text-lg md:text-xl mb-6 italic">"{testimonials[currentIndex].content}"</p>
                <div>
                  <p className="text-gray-800 font-semibold text-lg">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

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
          {testimonials.map((_, index) => (
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

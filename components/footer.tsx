"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <button onClick={() => handleNavClick("#anasayfa")} className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-bold text-blue-600">Efetıp</span>
            </button>
            <p className="text-gray-500 mb-6">
              Laboratuvar ekipmanları alanında Türkiye'nin öncü tedarikçisi. Kalite ve güvenilirlik bizim
              önceliğimizdir.
            </p>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick("#anasayfa")}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#urunler")}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Ürünler
                </button>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#haberler")}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Haberler
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#iletisim")}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  İletişim
                </button>
              </li>
              <li>
                <Link
                  href="/gizlilik-politikasi"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500">
                  3. Organize Sanayi Bölgesi Kamil Şerbetçi Bulvarı No: 39, Şehitkamil / Gaziantep
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+903423605858"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  0 342 360 58 58
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:efetip@efetip.com.tr"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                >
                  efetip@efetip.com.tr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Bülten</h3>
            <p className="text-gray-500 mb-4">
              Yeni ürünler ve kampanyalardan haberdar olmak için bültenimize abone olun.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  required
                  className="w-full px-4 py-3 rounded-full bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "absolute right-1 top-1 bottom-1 px-4 rounded-full",
                    "bg-gradient-to-r from-blue-600 to-indigo-600",
                    "text-white font-medium",
                    "hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300",
                    "flex items-center justify-center",
                    isSubmitting && "opacity-70",
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                </button>
              </div>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm"
                >
                  Bültene başarıyla abone oldunuz!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Efetıp. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

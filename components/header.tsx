"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Shield, Activity } from "lucide-react"

const navItems = [
  {
    name: "Ana Sayfa",
    href: "/",
  },
  {
    name: "Ürünlerimiz",
    href: "/urunlerimiz",
  },
  {
    name: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    name: "Haberler",
    href: "#haberler",
  },
  {
    name: "Referanslar",
    href: "#referanslar",
  },
  {
    name: "İletişim",
    href: "#iletisim",
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative overflow-hidden",
        scrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-xl shadow-blue-100/30" : "bg-gradient-to-r from-white/80 via-blue-50/80 to-indigo-50/80 backdrop-blur-md py-6",
      )}
    >
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-400/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Efe Tıp" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.href.startsWith("#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="relative px-4 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
                  >
                    {item.name}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium",
                      pathname === item.href && "text-blue-600 font-medium",
                    )}
                  >
                    {item.name}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300",
                      pathname === item.href && "scale-100 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
                    )}></div>
                  </Link>
                )}
                {index === 0 && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.href.startsWith("#") ? (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-gray-600 hover:text-blue-600 transition-colors duration-200",
                          pathname === item.href && "text-blue-600 font-medium",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  {
    name: "Ana Sayfa",
    href: "/",
  },
  {
    name: "Ürünler",
    href: "#",
    submenu: [
      { name: "Laboratuvar Cihazları", href: "/urunler/laboratuvar-cihazlari" },
      { name: "Cam Malzemeler", href: "/urunler/cam-malzemeler" },
      { name: "Sarf Malzemeleri", href: "/urunler/sarf-malzemeleri" },
      { name: "Kimyasallar", href: "/urunler/kimyasallar" },
    ],
  },
  {
    name: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    name: "İletişim",
    href: "/iletisim",
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-lg shadow-blue-100/20" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <span className="text-xl font-bold text-blue-600">Efetıp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
                >
                  {item.name}
                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white backdrop-blur-md border border-gray-100 rounded-lg shadow-lg shadow-blue-100/10 overflow-hidden"
                  >
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-colors duration-200"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
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
                  <div key={item.name} className="flex flex-col">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => {
                        if (item.submenu) {
                          setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                        }
                      }}
                    >
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <ChevronDown
                          size={16}
                          className={cn(
                            "text-gray-400 transition-transform duration-300",
                            activeSubmenu === item.name && "transform rotate-180",
                          )}
                        />
                      )}
                    </div>

                    {item.submenu && activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-2 flex flex-col gap-2"
                      >
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200 py-1"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </motion.div>
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

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Info, Newspaper, Star, Mail, ChevronDown, Droplet, Monitor, Beaker, Bot, Network, Syringe, Database, FlaskConical, Menu, X } from "lucide-react"

const solutionItems = [
  { name: "Kan Gazı Testleri", href: "/urunlerimiz/kan-gazi-testleri", icon: Droplet },
  { name: "Transkutanöz İzleme", href: "/urunlerimiz/transkutanoz-izleme", icon: Monitor },
  { name: "İmmünokimya Testleri", href: "/urunlerimiz/immunokimya-testleri", icon: Beaker },
  { name: "1st Automatic", href: "/urunlerimiz/first-automatic", icon: Bot },
  { name: "Merkezi Kontrol ile AQURE", href: "/urunlerimiz/merkezi-kontrol-aqure", icon: Network },
  { name: "Kan Gazı Şırıngaları", href: "/urunlerimiz/kan-gazi-siringalari", icon: Syringe },
  { name: "Veri Analizleri", href: "/urunlerimiz/veri-analizleri-uzaktan-destek", icon: Database },
  { name: "KK Ampulleri", href: "/urunlerimiz/kk-ampulleri", icon: FlaskConical },
];

const navItems = [
  { name: "Ana Sayfa", href: "/", icon: Home },
  { name: "Hakkımızda", href: "/hakkimizda", icon: Info },
  { name: "Haberler", href: "/haberler", icon: Newspaper },
  { name: "Referanslar", href: "/referanslar", icon: Star },
  { name: "İletişim", href: "/iletisim", icon: Mail },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100/50" 
        : "bg-white/90 backdrop-blur-md border-b border-gray-100/30"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-gray-100/50">
          <div className="text-sm text-gray-600">
            Pazartesi - Cuma: 09:00 - 18:00
          </div>
          <div className="text-sm text-gray-600">
            info@efetip.com.tr
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/logo.png" 
                alt="Efe Tıp" 
                className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Ana Sayfa */}
            {navItems.slice(0, 1).map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                    isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  )}
                >
                  <Icon size={16} className={cn(
                    "transition-colors duration-300",
                    isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                  )} />
                  <span>{item.name}</span>
                  <div className={cn(
                    "absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 -translate-x-1/2",
                    isActive ? "w-8" : "group-hover:w-8"
                  )} />
                </Link>
              )
            })}

            {/* Solutions Dropdown - Right after Ana Sayfa */}
            <div className="relative group ml-2">
              <button className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              )}>
                <Beaker size={16} className="text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
                <span>Çözümler</span>
                <ChevronDown 
                  size={14} 
                  className="transition-transform duration-300 group-hover:rotate-180 text-gray-500 group-hover:text-blue-600" 
                />
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-8" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                  {solutionItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Link 
                        key={item.name} 
                        href={item.href} 
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200",
                          "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50",
                          index === 0 && "rounded-t-lg",
                          index === solutionItems.length - 1 && "rounded-b-lg"
                        )}
                      >
                        <div className="p-2 rounded-md bg-blue-50">
                          <Icon size={18} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown size={14} className="rotate-270 text-gray-400" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Other Nav Items */}
            {navItems.slice(1).map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                    isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  )}
                >
                  <Icon size={16} className={cn(
                    "transition-colors duration-300",
                    isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                  )} />
                  <span>{item.name}</span>
                  <div className={cn(
                    "absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 -translate-x-1/2",
                    isActive ? "w-8" : "group-hover:w-8"
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden overflow-hidden transition-all duration-300",
        mobileMenuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100/50">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  )}
                >
                  <Icon size={18} className={cn(
                    "transition-colors duration-200",
                    isActive ? "text-blue-600" : "text-gray-500"
                  )} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            
            {/* Mobile Solutions */}
            <div className="border-t border-gray-100/50 pt-3 mt-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Çözümler
              </div>
              {solutionItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                  >
                    <div className="p-1.5 rounded-md bg-blue-50">
                      <Icon size={16} className="text-blue-600" />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

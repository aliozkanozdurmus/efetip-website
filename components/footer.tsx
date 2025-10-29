"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowRight, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-mobile py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <img 
                src="/logo.png" 
                alt="Efe Tıp" 
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Türkiye'nin lider laboratuvar ekipmanları tedarikçisi olarak, en son teknolojiyi ve güvenilir çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://twitter.com/efetip" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-[20px] sm:h-[20px]" />
              </a>
              <a 
                href="https://linkedin.com/company/efetip" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-[20px] sm:h-[20px]" />
              </a>
              <a 
                href="https://facebook.com/efetip" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={16} className="sm:w-[20px] sm:h-[20px]" />
              </a>
              <a 
                href="https://instagram.com/efetip" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[20px] sm:h-[20px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wider">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Ana Sayfa</Link></li>
              <li><Link href="/urunlerimiz" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Ürünler</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">İletişim</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wider">Yasal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">KVKK Aydınlatma Metni</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wider">Bültenimize Abone Olun</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              En son haberler ve özel teklifler için kaydolun.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
              />
              <button className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center min-h-[44px]">
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Efe Tıp Medikal. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

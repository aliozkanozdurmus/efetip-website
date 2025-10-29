"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Efe Tıp" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Türkiye'nin lider laboratuvar ekipmanları tedarikçisi olarak, en son teknolojiyi ve güvenilir çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/urunlerimiz" className="text-gray-400 hover:text-white transition-colors">Ürünler</Link></li>
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/#iletisim" className="text-gray-400 hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">Yasal</h3>
            <ul className="space-y-3">
              <li><Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/kvkk" className="text-gray-400 hover:text-white transition-colors">KVKK Aydınlatma Metni</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 tracking-wider">Bültenimize Abone Olun</h3>
            <p className="text-gray-400 text-sm mb-4">
              En son haberler ve özel teklifler için kaydolun.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Efe Tıp Medikal. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X, Shield, Info, Check } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsented, setHasConsented] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Add a small delay to prevent flash on page load
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        setIsVisible(true)
      } else {
        setHasConsented(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }))
    setHasConsented(true)
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }))
    setHasConsented(true)
    setIsVisible(false)
  }

  if (hasConsented || !isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="fixed bottom-6 right-6 left-6 md:left-auto md:right-8 z-50 max-w-md"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl -z-10"></div>
        
        <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Gizlilik Tercihleriniz</h3>
                  <p className="text-xs text-gray-500">Deneyiminizi kişiselleştirelim</p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Web sitemiz, size daha iyi bir deneyim sunmak için çerezler kullanır. 
              Çerezler, sitemizi nasıl kullandığınızı anlamamıza ve kişiselleştirmemize yardımcı olur.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <div>
                    <span className="font-medium text-gray-800 text-sm">Gerekli Çerezler</span>
                    <p className="text-xs text-gray-500">Site çalışması için zorunlu</p>
                  </div>
                </div>
                <Shield className="w-4 h-4 text-green-600" />
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <Cookie className="w-4 h-4 text-blue-600" />
                  <div>
                    <span className="font-medium text-gray-800 text-sm">Analitik Çerezler</span>
                    <p className="text-xs text-gray-500">Site kullanımını analiz etmemize yardımcı</p>
                  </div>
                </div>
              <div className="text-xs text-blue-600 font-medium">İsteğe Bağlı</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3">
                  <Info className="w-4 h-4 text-purple-600" />
                  <div>
                    <span className="font-medium text-gray-800 text-sm">Pazarlama Çerezleri</span>
                    <p className="text-xs text-gray-500">Kişiselleştirilmiş reklamlar</p>
                  </div>
                </div>
                <div className="text-xs text-purple-600 font-medium">İsteğe Bağlı</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-xs">
              <Link href="/gizlilik-politikasi" className="text-blue-600 hover:text-blue-700 underline font-medium">
                Gizlilik Politikası
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/kvkk" className="text-blue-600 hover:text-blue-700 underline font-medium">
                KVKK Metni
              </Link>
            </div>

            {/* Toggle Details */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mt-3 text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              {showDetails ? 'Daha Az' : 'Daha Fazla Bilgi'}
            </button>

            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 leading-relaxed"
              >
                Çerezler, web sunucularımızın sizin tarayıcınızda depoladığı küçük metin dosyalarıdır. 
                Bu dosyalar sitemizi bir dahaki ziyaretinizde tanımanıza ve sizin için daha alakalı içerik sunmamıza olanak tanır.
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 px-6 pb-6">
            <button
              onClick={acceptNecessary}
              className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-200 text-sm"
            >
              Sadece Gerekliler
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm flex items-center justify-center gap-2"
            >
              Tümünü Kabul Et
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

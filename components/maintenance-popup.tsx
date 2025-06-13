"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertTriangle } from "lucide-react"

export default function MaintenancePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Popup'ı sayfa yüklendikten 1 saniye sonra göster
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
        >
          <div className="bg-white rounded-lg shadow-xl border border-blue-100 p-4 md:p-6 max-w-lg w-full flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-800 text-lg mb-1">Bakım Bildirimi</h3>
              <p className="text-gray-600">
                Şu anda bakımdayız, en kısa sürede açılacaktır. Anlayışınız için teşekkür ederiz.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

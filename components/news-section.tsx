"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Calendar, Clock, X } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Yeni Nesil Laboratuvar Cihazlarımız Artık Türkiye'de",
    summary: "Son teknoloji laboratuvar ekipmanlarımız Türkiye pazarına sunuldu.",
    content:
      "Efetıp olarak, Avrupa'nın önde gelen laboratuvar ekipmanları üreticileriyle yaptığımız iş birliği sonucunda, son teknoloji ürünleri Türkiye pazarına sunmaktan gurur duyuyoruz. Yeni nesil dijital mikroskoplar, hassas teraziler ve otomatik analiz cihazları artık ürün yelpazemizde yerini aldı. Bu cihazlar, özellikle araştırma laboratuvarları ve tıbbi teşhis merkezleri için geliştirilmiş olup, yüksek hassasiyet ve güvenilirlik sunuyor. Yeni ürünlerimiz hakkında detaylı bilgi almak için satış temsilcilerimizle iletişime geçebilirsiniz.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 Haziran 2025",
    readTime: "3 dk",
  },
  {
    id: 2,
    title: "Laboratuvar Güvenliği Eğitimlerimiz Başlıyor",
    summary: "Müşterilerimize özel laboratuvar güvenliği eğitim programımız Temmuz ayında başlıyor.",
    content:
      "Efetıp olarak, laboratuvar güvenliğinin öneminin farkındayız. Bu nedenle, müşterilerimize özel olarak hazırladığımız 'Laboratuvar Güvenliği ve İyi Uygulamalar' eğitim programımızı Temmuz ayında başlatıyoruz. Eğitimlerimiz, kimyasal madde güvenliği, acil durum prosedürleri, laboratuvar ekipmanlarının güvenli kullanımı ve atık yönetimi gibi kritik konuları kapsayacak. Uzman eğitmenlerimiz tarafından verilecek bu eğitimler, laboratuvar personelinin güvenlik bilincini artırmayı ve olası kazaları önlemeyi amaçlıyor. Eğitim programımıza katılmak için web sitemiz üzerinden kayıt yaptırabilirsiniz.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 Haziran 2025",
    readTime: "4 dk",
  },
  {
    id: 3,
    title: "Uluslararası Laboratuvar Teknolojileri Fuarı'na Katılıyoruz",
    summary: "Efetıp, bu yıl İstanbul'da düzenlenecek Uluslararası Laboratuvar Teknolojileri Fuarı'nda yerini alacak.",
    content:
      "Efetıp olarak, 5-8 Eylül 2025 tarihleri arasında İstanbul Fuar Merkezi'nde düzenlenecek olan Uluslararası Laboratuvar Teknolojileri Fuarı'na katılacağımızı duyurmaktan mutluluk duyuyoruz. Standımızda, en yeni ürünlerimizi sergileyecek ve ziyaretçilerimize özel tanıtımlar yapacağız. Ayrıca, fuarda uzman ekibimiz tarafından düzenlenecek mini seminerler ile laboratuvar teknolojilerindeki son gelişmeleri paylaşacağız. Tüm müşterilerimizi ve sektör profesyonellerini standımıza bekliyoruz. Fuar boyunca özel indirimler ve kampanyalarımızdan yararlanma fırsatını kaçırmayın!",
    image: "/placeholder.svg?height=400&width=600",
    date: "5 Haziran 2025",
    readTime: "5 dk",
  },
]

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<(typeof news)[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Haberler
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Efetıp'tan en güncel haberler, duyurular ve etkinlikler hakkında bilgi alın.
            </p>
          </div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {news.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-500 mb-4">{item.summary}</p>
                  <button
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    onClick={() => setSelectedNews(item)}
                  >
                    Devamını Oku
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Popup */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={selectedNews.image || "/placeholder.svg"}
                  alt={selectedNews.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
                onClick={() => setSelectedNews(null)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedNews.date}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedNews.readTime}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{selectedNews.title}</h2>
              <p className="text-gray-500 leading-relaxed">{selectedNews.content}</p>
              <div className="mt-8 flex justify-end">
                <button
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => setSelectedNews(null)}
                >
                  Kapat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

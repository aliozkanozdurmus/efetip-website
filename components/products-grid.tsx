"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "ABL90 FLEX PLUS",
    category: "Kan Gazı Analizörleri",
    slug: "abl90-flex-plus",
    description: "Hız ve verimlilik önemli olduğu yerlerde kullanılan gelişmiş kan gazı analizörü",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pl7vvPSxihg1WLd2YX7jmdXVrm8jXj.png",
    features: [
      "35 saniyede 19 parametreye kadar hızlı analiz",
      "Sadece 65 µL kan örneği",
      "Günde 23.5 saatten fazla çalışma süresi",
    ],
  },
  {
    id: 2,
    name: "ABL800 FLEX",
    category: "Kan Gazı Analizörleri",
    slug: "abl800-flex",
    description: "Güvenilir, verimli ve esnek kan gazı analizörü - otomasyon ile güvenilir sonuçlar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4E9TNCQYiiHyyvwzqh0MOeaxCiDL8J.png",
    features: [
      "Drop-n-Go otomasyonu ile gelişmiş iş akışı",
      "3 safePICO şırıngaya kadar otomatik işlem",
      "Güvenilir sonuçlar için özel ölçüm modları",
    ],
  },
  {
    id: 3,
    name: "ABL9",
    category: "Kan Gazı Analizörleri",
    slug: "abl9",
    description: "Kritik bakım ortamları için özel olarak tasarlanmış kompakt kan gazı analizörü",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f3zaqQ2MXFzS0E0CJtNyUPd0t3ip9g.png",
    features: [
      "Küçük ayak izi ile kompakt tasarım",
      "Adım adım ekran rehberliği",
      "Günde az sayıda test için optimize edilmiş",
    ],
  },
  {
    id: 4,
    name: "AQT90 FLEX",
    category: "Immunoassay Testleri",
    slug: "aqt90-flex",
    description: "Hasta başı immunoassay testleri için gelişmiş analizör - 11-21 dakikada sonuç",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R6z8BQ8urL4mgZ7krquD6XQiygd2bd.png",
    features: [
      "11-21 dakikada hızlı sonuçlar",
      "Kardiyak, koagülasyon ve enfeksiyon biyobelirteçleri",
      "Hasta başı (POC) test imkanı",
    ],
  },
  {
    id: 5,
    name: "PeriFlux 6000 tcpO2",
    category: "Transcutaneous Monitörleme",
    slug: "periflux-6000-tcpo2",
    description: "Doku oksijen değerlendirmesi için özel olarak tasarlanmış transcutaneous monitör",
    image: "/placeholder.svg?height=400&width=400",
    features: [
      "Yara iyileşme kapasitesini değerlendirme",
      "Alt ekstremite yaralarında hasta değerlendirmesi",
      "Taşınabilir ve bağımsız monitör",
    ],
  },
  {
    id: 6,
    name: "TCM5 FLEX",
    category: "Transcutaneous Monitörleme",
    slug: "tcm5-flex",
    description: "Kritik hasta bakımı için kompakt transcutaneous monitör - tcpO2 ve tcpCO2 ölçümü",
    image: "/placeholder.svg?height=400&width=400",
    features: [
      "Sürekli tcpO2 ve tcpCO2 ölçümü",
      "Neonatal, pediatrik ve yetişkin hastalar için",
      "Renkli dokunmatik ekran ve sezgisel arayüz",
    ],
  },
  {
    id: 7,
    name: "TCM5 BASIC",
    category: "Transcutaneous Monitörleme",
    slug: "tcm5-basic",
    description: "Uyku tanısı için özel tasarlanmış transcutaneous monitör - karanlıkta çalışma özelliği",
    image: "/placeholder.svg?height=400&width=400",
    features: ["Uyku tanısı için özel uyku modu", "Karanlık ekran seçeneği", "Otomatik sensör kalibrasyonu"],
  },
  {
    id: 8,
    name: "safePICO Aspirator",
    category: "Kan Gazı Şırıngaları",
    slug: "safepico-aspirator",
    description: "Entegre karıştırma toplu arteriyel kan gazı şırıngası - gelişmiş karıştırma özelliği",
    image: "/placeholder.svg?height=400&width=400",
    features: ["Entegre karıştırma topu", "1.0 mL önerilen dolum hacmi", "Hasta Kan Yönetimi desteği"],
  },
  {
    id: 9,
    name: "safePICO Self-Fill",
    category: "Kan Gazı Şırıngaları",
    slug: "safepico-self-fill",
    description: "Güvenilir sonuçlar için gelişmiş karıştırma özellikli kan gazı şırıngası",
    image: "/placeholder.svg?height=400&width=400",
    features: [
      "Homojen örnek için karıştırma topu",
      "safeTIPCAP ile kan teması riskini azaltma",
      "Entegre iğne koruma cihazı",
    ],
  },
  {
    id: 10,
    name: "safeCLINITUBES",
    category: "Kan Gazı Şırıngaları",
    slug: "safeclini-tubes",
    description: "Yenidoğanlar için özel tasarlanmış plastik kapiller tüpler",
    image: "/placeholder.svg?height=400&width=400",
    features: ["Cam değil plastik malzeme", "Hasta kanı ile temas riskini azaltma", "Pıhtı oluşumu riskini azaltma"],
  },
  {
    id: 11,
    name: "AQURE POC IT",
    category: "POC IT Çözümleri",
    slug: "aqure-poc-it",
    description: "Merkezi kontrol ile hasta başı test cihazlarınızı yönetin - dijital POC IT çözümü",
    image: "/placeholder.svg?height=400&width=400",
    features: ["Merkezi kontrol ve yönetim", "Kalite güvencesi ve uyumluluk", "İş akışı optimizasyonu"],
  },
]

const categories = [
  { name: "Tümü", slug: "all" },
  { name: "Kan Gazı Analizörleri", slug: "kan-gazi-analizorler" },
  { name: "Immunoassay Testleri", slug: "immunoassay-testleri" },
  { name: "Transcutaneous Monitörleme", slug: "transcutaneous-monitorleme" },
  { name: "Kan Gazı Şırıngaları", slug: "kan-gazi-siringalari" },
  { name: "POC IT Çözümleri", slug: "poc-it-cozumleri" },
]

export default function ProductsGrid() {
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
    <section>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.slug}
            className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
          >
            <Link href={`/urunlerimiz/${product.slug}`}>
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                <ul className="space-y-1 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                  Detayları Görüntüle →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

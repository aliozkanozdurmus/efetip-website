"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, X } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Transcutaneous Monitörler: tcpO2, tcpCO2 ve SpO2 Ölçümlerinin Klinik Önemi",
    summary: "Transcutaneous monitörlerin çalışma prensipleri ve klinik uygulamalardaki kritik rolü.",
    content:
      "Transcutaneous monitörler, hastanın cilt yüzeyinden non-invaziv olarak kan gazı değerlerini ölçen gelişmiş tıbbi cihazlardır. tcpO2 (transcutaneous oksijen basıncı) monitörleri, dokunun oksijen perfüzyonunu değerlendirerek özellikle yara iyileşmesi, diyabetik ayak ülserleri ve periferik arter hastalığının takibinde kritik bilgiler sağlar. tcpCO2 (transcutaneous karbondioksit basıncı) ölçümü ise ventilasyon durumunu değerlendirmek için kullanılır ve özellikle yoğun bakım hastalarında CO2 retansiyonunun erken tespitinde hayati önem taşır. SpO2 (pulse oksimetri) ise hemoglobinin oksijen satürasyonunu ölçerek solunum yetmezliğinin non-invaziv takibini sağlar. Bu monitörler, sürekli takip gerektiren hastalarda invaziv prosedürlere alternatif oluşturarak hasta konforunu artırır ve enfeksiyon riskini azaltır.",
    date: "20 Haziran 2025",
    readTime: "5 dk",
  },
  {
    id: 2,
    title: "Transcutaneous Monitörlerin Teknolojik Gelişimi ve Klinik Uygulamaları",
    summary: "Modern transcutaneous monitörlerin çalışma mekanizması ve hasta bakımındaki yeri.",
    content:
      "Transcutaneous monitörler, Clark elektrot teknolojisi ve gelişmiş sensör sistemleri kullanarak cilt altındaki kan gazı değerlerini gerçek zamanlı olarak ölçen sofistike tıbbi cihazlardır. Bu teknoloji, özellikle neonatal yoğun bakım ünitelerinde prematüre bebeklerin takibinde, yaşlı hastalarda dolaşım bozukluklarının değerlendirilmesinde ve kronik obstrüktif akciğer hastalığı (KOAH) olan hastaların ev bakımında kritik rol oynar. Cihazlar, ısıtılmış elektrotlar aracılığıyla cildi hiperemiyle duruma getirerek kapiller kan akımını artırır ve böylece arteriyel kan gazı değerlerine yakın sonuçlar elde eder. Modern transcutaneous monitörler, otomatik kalibrasyon, alarm sistemleri ve veri kayıt özellikleri ile donatılmıştır. Bu teknoloji, invaziv arteriyel kateterizasyon gereksinimini azaltarak hasta güvenliğini artırır ve sürekli monitörizasyon imkanı sağlar.",
    date: "15 Haziran 2025",
    readTime: "6 dk",
  },
  {
    id: 3,
    title: "Immunoassay Testing: Modern Laboratuvar Tanısında Antikor-Antijen Etkileşimleri",
    summary: "Immunoassay testlerinin prensipleri ve laboratuvar tanısındaki uygulamaları.",
    content:
      "Immunoassay testing, antikor-antijen spesifik etkileşimlerini kullanarak çeşitli biyomarkörlerin kantitatif ve kalitatif analizini yapan gelişmiş laboratuvar tekniğidir. ELISA (Enzyme-Linked Immunosorbent Assay), CLIA (Chemiluminescent Immunoassay) ve ECLIA (Electrochemiluminescence Immunoassay) gibi farklı metodolojiler kullanılarak hormonlar, tümör belirteçleri, enfeksiyon ajanları, ilaç seviyeleri ve otoimmün hastalık belirteçleri hassas bir şekilde ölçülür. Bu testler, pikomolar seviyelerinde analitleri tespit edebilme kapasitesi ile klinik tanıda vazgeçilmez hale gelmiştir. Özellikle kardiyak belirteçler (troponin, CK-MB), tiroid fonksiyon testleri (TSH, T3, T4), hepatit belirteçleri ve COVID-19 antikor testlerinde yaygın kullanım alanı bulur. Modern immunoassay sistemleri, otomatizasyon, yüksek throughput kapasitesi ve gelişmiş kalite kontrol mekanizmaları ile laboratuvar verimliliğini artırır ve hızlı sonuç alma imkanı sağlar.",
    date: "10 Haziran 2025",
    readTime: "7 dk",
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
              Bilimsel Makaleler
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Laboratuvar teknolojileri ve tıbbi cihazlar hakkında güncel bilimsel gelişmeler.
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
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer p-6"
                onClick={() => setSelectedNews(item)}
              >
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
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative p-6 md:p-8">
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                onClick={() => setSelectedNews(null)}
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedNews.date}
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedNews.readTime}
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{selectedNews.title}</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed text-justify">{selectedNews.content}</p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
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

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, CheckCircle, Mail, Zap, Users, Shield } from "lucide-react"

export default function KanGaziTestleriPage() {
  const analyzers = [
    {
      name: "ABL90 FLEX PLUS",
      subtitle: "Her Saniye Önemli Olduğunda",
      description: "Hızlı, kompakt ve akıllı ABL90 FLEX PLUS, küçük numune hacminden 19 parametreye kadar bilgi sunarak zorlu klinik ortamlarda hızlı analiz yapmanıza yardımcı olur.",
      image: "https://www.radiometer.com/-/media/radiometer/corporate/images/page/products/bg/abl90_fp_cu_product_spot.jpg?h=500&w=600&la=en&hash=ED805349AA04AE1182366F1015D0BEEC",
      link: "/urunlerimiz/abl90-flex-plus"
    },
    {
      name: "ABL800 FLEX",
      subtitle: "Güçlü Performans",
      description: "Kan gazı testleri için bir referans noktası olan otomatik ve verimli ABL800 FLEX, yüksek kullanılabilirliği olağanüstü verimlilikle birleştirerek diğer görevler için zaman kazandırır.",
      image: "https://www.radiometer.com/-/media/radiometer/corporate/images/campaign/bg_update/abl800_flex_front_product_spot_screen.jpg?h=500&w=600&la=en&hash=879BCEA4C40DA9CAD20C3C0E8915AB1E",
      link: "/urunlerimiz/abl800-flex"
    },
    {
      name: "ABL9",
      subtitle: "Tak ve Çalıştır Kolaylığı",
      description: "Kullanımı kolay olacak şekilde tasarlanan ABL9, bakım noktasında akut teşhis bilgisi sağlayan tak ve çalıştır kan gazı analizörüdür.",
      image: "https://www.radiometer.com/-/media/radiometer/corporate/images/page/products/bg/abl9_product_spot.jpg?h=500&w=600&la=en&hash=551D2C693AA8DFF5B7196183D175BB0F",
      link: "/urunlerimiz/abl9"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Entegre Çözüm",
      description: "Kan gazı analizörleri, şırıngalar, BT ve destek tek bir entegre çözümde birleşir.",
      image: "https://www.radiometer.com/-/media/radiometer/corporate/images/campaign/bg_update/bg_integrated_solution.jpg?h=337&w=600&la=en&hash=16216C94611C93EB8B0AF6CD4CFC6247"
    },
    {
      icon: Users,
      title: "Özel Partner",
      description: "İş akışlarınızı anlamak ve departmanınızda verimliliği artırmak için sizinle yakın çalışıyoruz.",
      image: "https://www.radiometer.com/-/media/radiometer/corporate/images/campaign/bg_update/bg_dedicatedpartner.jpg?h=337&w=600&la=en&hash=5D20A64F6AB279EA98712FCC573479AB"
    },
    {
      icon: Shield,
      title: "Kanıtlanmış Performans",
      description: "1954'ten beri kan gazı inovasyonunda öncü, 130'dan fazla ülkede güvenilen çözümler.",
      image: "https://www.radiometer.com/-/media/radiometer/corporate/images/page/products/bg/bgpageribbon2_600px.jpg?h=337&w=600&la=en&hash=3F5464B1847B9764AB24EA97171DE325"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft size={20} />
            Tüm Çözümlere Geri Dön
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kan Gazı Testleri</h1>
              <p className="text-xl text-gray-600 mb-8">Sorunsuz teşhislerin gücünü deneyimleyin</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Entegre Çözüm</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Özel Partner</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Kanıtlanmış Performans</span>
              </div>
              <a href="mailto:info@efetip.com.tr?subject=Kan Gazı Testleri Hakkında Bilgi" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                <Mail size={18} />
                Bilgi Talep Et
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <Image src="https://www.radiometer.com/-/media/radiometer/corporate/images/campaign/bg_update/bg_intro_600px.jpg?h=337&w=600&la=en&hash=C0E6098993BDA5BAD9F2835F7111E36D" alt="Kan Gazı Testleri" width={600} height={337} className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kan Gazı Testi Zorluklarını Güvenle Karşılayın—Bugün ve Yarın</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Akut bakım ortamlarında belirsizlik normdur. Bir sonraki adımı asla bilemezsiniz. Sorunsuz bir kan gazı testi iş akışı, hastanızın durumu hakkında kritik bilgileri hızlı bir şekilde verebilir—hastaya odaklanmayı kaybetmeden.</p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p>Radiometer, akut bakım testi ve hastane iş akışınıza sorunsuz bir şekilde uyum sağlayabilen esnek bir kan gazı teşhis çözümü sunar.</p>
            <p>Radiometer'dan bir kan gazı testi çözümü, tek bir entegre çözümdür. Bu, kan gazı analizörlerinin, şırıngaların, BT ve desteğin bağlı olduğu ve kendi hastane sistemlerinizle çalıştığı anlamına gelir. Bu, daha az manuel görev ve hasta bakımı için daha fazla zaman ile sorunsuz bir iş akışı deneyimlemenize yardımcı olur.</p>
            <p className="text-xl font-semibold text-gray-900">Biz buna sorunsuz teşhis diyoruz.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Hangi Analizör Sizin İçin Doğru?</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">İhtiyaçlarınıza en uygun kan gazı analizörünü keşfedin</p>

          <div className="space-y-12">
            {analyzers.map((analyzer, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{analyzer.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{analyzer.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{analyzer.description}</p>
                  <Link href={analyzer.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group">
                    Daha Fazla Bilgi
                    <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Image src={analyzer.image} alt={analyzer.name} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Entegre Çözüm</h3>
              <p className="text-gray-600 mb-6">Akut bakım ortamlarında cihazlar ve ekipmanlar, hastalarınızın verimli bakımında sizi desteklemelidir.</p>
              <p className="text-gray-600">Entegre bir kan gazı testi çözümü tam da bunu yapar; analizörleri, şırıngaları, BT'yi ve akut bakım testi ihtiyaçları için desteği entegre eden tek çözümlü bir deneyim sağlar. Ayrıca hastane ve laboratuvar sistemleriniz ile diğer tıbbi teknoloji hizmet sağlayıcılarıyla da bağlantı kurabilir.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kanıtlanmış Performans</h3>
              <p className="text-gray-600 mb-4">Kanıtlanmış bir kan gazı inovasyonu ve deneyim geçmişi ile bizimle güvendesiniz.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">1954'te dünyanın ilk ticari kan gazı analizörünü piyasaya sürdük</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Bugün kan gazı testlerinde küresel pazar lideriyiz</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">130'dan fazla ülkede hastane, klinik ve laboratuvarlarda kullanılıyoruz</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">ABL800, laboratuvarlarda kan gazı testleri için referans analizördür</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-4xl text-blue-600 mb-4">"</div>
            <p className="text-lg text-gray-700 italic mb-6">Bakım noktası testleri ile ilgili olarak, ürünlerin birbiriyle uyumlu olması, kullanıcının bunları kullanırken yardım alması, ancak aynı zamanda laboratuvardan gelen analitik gereksinimlerimizi de hesaba katmaları benim için çok önemlidir.</p>
            <p className="text-gray-900 font-semibold">- Prof. Dr. med. Dipl. Biol. Astrid Petersmann</p>
            <p className="text-gray-600 text-sm">Universitätsmedizin Oldenburg und Greifswald</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Kan Gazı Testleri Hakkında Daha Fazla Bilgi Alın</h2>
          <p className="text-xl text-blue-100 mb-8">Sorunsuz teşhis çözümlerimiz hakkında detaylı bilgi için bizimle iletişime geçin</p>
          <a href="mailto:info@efetip.com.tr?subject=Kan Gazı Testleri Hakkında Bilgi" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all">
            <Mail size={20} />
            Bilgi Talep Et
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

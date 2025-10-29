"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Mail, CheckCircle, Workflow, Shield, Zap, Scan } from "lucide-react"

export default function FirstAutomaticPage() {
  const components = [
    {
      title: "ABL Kan Gazı Analizörleri",
      description: "Otomatik karıştırma ile numune karıştırma standardize edilir ve operatöre bağlı değişkenler ortadan kalkar.",
      icon: Zap
    },
    {
      title: "safePICO Şırıngalar",
      description: "Hava kabarcıklarını dışarı atmaya ek olarak, safePICO'nun havalandırmalı safeTIPCAP'i hasta kanı ile temas riskini azaltmaya yardımcı olur.",
      icon: Shield
    },
    {
      title: "AQURE FLEXLINK",
      description: "Önceden barkodlu şırıngalarla birleştiğinde, FLEXLINK her seferinde doğru hasta-numune tanımlamasını sağlar.",
      icon: Scan
    },
    {
      title: "1st Automatic",
      description: "Önceden barkodlu safePICO şırıngaları, ABL analizörleri ve AQURE FLEXLINK'i birleştirerek kan gazı iş akışınızı otomatikleştirir ve hasta-numune karışıklığı riskini azaltır.",
      icon: Workflow
    }
  ]

  const workflow = [
    {
      step: "1",
      title: "Kan Gazı Numunesi Almaya Hazırlanma",
      description: "Kişisel kimliğinizi tarayarak başlayın. Sırayla hastanın kimliğini ve ardından önceden barkodlu safePICO şırıngasını tarayın. Bu veriler artık birbirine bağlanmıştır ve hastanızın demografik bilgileri AQURE FLEXLINK ekranında görüntülenir."
    },
    {
      step: "2",
      title: "Numunenin Analiz Edilmesi",
      description: "Hastanızın verilerinin ekranda görüntülendiğini doğrulamak için safePICO şırıngasındaki barkodu tarayın. Standardize otomatik karıştırma için numuneyi yerleşik safePICO karıştırıcıya yerleştirin. Ardından, havalandırmalı safeTIPCAP'i çıkarmadan otomatik giriş kullanarak şırıngayı aspire edin."
    },
    {
      step: "3",
      title: "Hastaların Sonuçlarını Takip Etme",
      description: "Analiz tamamlandığında, AQURE'nin FLEXLINK'i sonuçları hasta başına ve/veya hastanenizin LIS/HIS'ine gönderecektir. Bu, doğru hasta için doğru sonuçlara, ihtiyacınız olduğunda ve olduğu yerde sahip olacağınız anlamına gelir."
    }
  ]

  const benefits = [
    "Hasta-numune karışıklığı riskini azaltır",
    "Ön analitik hataları en aza indirir",
    "Manuel adımları azaltır",
    "Hasta bakımı için daha fazla zaman sağlar",
    "Numune bütünlüğünü korur",
    "İş akışını basitleştirir ve optimize eder"
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <Link href="/urunlerimiz" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
            <ArrowLeft size={20} />
            Tüm Çözümlere Geri Dön
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">1st Automatic</h1>
              <p className="text-xl text-gray-600 mb-8">
                1st Automatic ile hasta-numune karışıklığı riskini azaltın
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Ön analitik hataları en aza indirmeye yardımcı olmak için tasarlanmış bir iş akışı çözümü
              </p>
              <a href="mailto:info@efetip.com.tr?subject=1st Automatic Hakkında Bilgi" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
                <Mail size={18} />
                Bilgi Talep Et
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 flex items-center justify-center shadow-2xl">
                <Image src="/placeholder.svg" alt="1st Automatic" width={500} height={500} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hasta Başında Kan Gazı İş Akışlarını Kolaylaştırın
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              1st Automatic, sağlık hizmeti sağlayıcılarına hasta başında kan gazı iş akışlarını kolaylaştırma gücü verir. Kan almadan önce operatör, hasta ve numune kimliklerini bağlamanızı sağlayarak manuel adımları en aza indirir ve hastalarla daha fazla zaman geçirmenize olanak tanır.
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 space-y-6">
            <p>
              1st Automatic, ABL kan gazı analizörleri, önceden barkodlu safePICO şırıngaları ve bir numune akış yönetim sistemi olan AQURE FLEXLINK'i birleştiren benzersiz bir çözümdür.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              İş akışınızı basitleştirerek, numune bütünlüğünden ödün vermeden hasta bakımına öncelik vermenize yardımcı olacağız.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            1st Automatic ile Kan Gazı İş Akışınızı Optimize Edin
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Dört temel bileşen mükemmel bir uyum içinde çalışır
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-14 h-14 mb-6 bg-orange-100 rounded-lg flex items-center justify-center">
                  <component.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Basit ve Sezgisel İş Akışı
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Üç kolay adımda hasta güvenliğini artırın
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 relative"
              >
                <div className="absolute -left-4 top-8 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="ml-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                1st Automatic'in Avantajları
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hasta Güvenliğini Önceliklendirin</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                1st Automatic, hasta-numune karışıklığı riskini azaltarak hasta güvenliğini artırır ve sağlık hizmeti kalitesini yükseltir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Otomatik iş akışı sayesinde, sağlık profesyonelleri manuel görevlerle daha az zaman harcar ve hasta bakımına daha fazla odaklanabilir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            1st Automatic Hakkında Daha Fazla Bilgi Alın
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            İş akışı optimizasyon çözümümüz hakkında detaylı bilgi için bizimle iletişime geçin
          </p>
          <a href="mailto:info@efetip.com.tr?subject=1st Automatic Hakkında Bilgi" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:shadow-xl transition-all">
            <Mail size={20} />
            Bilgi Talep Et
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

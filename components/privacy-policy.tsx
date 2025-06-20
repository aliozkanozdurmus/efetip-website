"use client"

import { Shield, Mail, Phone, Calendar, Lock, Info } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Gizlilik Politikası
          </h1>
          <p className="text-gray-600 text-lg">
            Kişisel verilerinizin korunması ve gizliliğiniz bizim için önemlidir. Bu politika, verilerinizin nasıl
            işlendiği hakkında detaylı bilgi vermektedir.
          </p>
        </header>

        {/* Veri Sorumlusu */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            Veri Sorumlusu
          </h2>
          <p className="text-gray-600">
            Tuna Sentetik - Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8, Şehitkamil / Gaziantep
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" /> info@tunasentetik.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" /> +90 342 123 4567
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" /> Son Güncelleme: 18 Haziran 2025
            </li>
          </ul>
        </div>

        {/* KVKK */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Lock className="w-6 h-6 text-blue-600" />
            Kişisel Verilerin Korunması
          </h2>
          <p className="text-gray-600">
            Tuna Sentetik olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin
            güvenliğini sağlamak ve gizliliğinizi korumak önceliğimizdir.
          </p>
          <p className="text-gray-600">
            Bu politika, kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve korunduğu hakkında bilgi
            vermektedir.
          </p>
        </div>

        {/* Toplanan Veriler */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            Toplanan Veriler
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası</li>
            <li>İletişim Bilgileri: E-posta, telefon, adres</li>
            <li>Müşteri İşlem Bilgileri: Sipariş, ödeme, teslimat bilgileri</li>
            <li>Pazarlama Bilgileri: Ürün tercihleri, kampanya katılımları</li>
            <li>Teknik Veriler: IP adresi, çerez bilgileri, tarayıcı bilgileri</li>
          </ul>
        </div>

        {/* İşlenme Amaçları */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Verilerin İşlenme Amaçları</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Ürün ve hizmet satışının gerçekleştirilmesi</li>
            <li>Müşteri hizmetlerinin sunulması ve geliştirilmesi</li>
            <li>Sipariş takibi ve teslimat işlemlerinin yürütülmesi</li>
            <li>Faturalandırma ve muhasebe işlemlerinin yapılması</li>
            <li>Pazarlama faaliyetleri (izin dahilinde)</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Web sitesi güvenliğinin sağlanması</li>
          </ul>
        </div>

        {/* Veri Güvenliği */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Veri Güvenliği</h2>
          <p className="text-gray-600">
            Kişisel verilerinizin güvenliği için teknik ve idari tedbirler almaktayız; SSL sertifikası, güvenli sunucu
            altyapısı, erişim kontrolü, düzenli yedekleme, personel eğitimleri ve siber güvenlik önlemleri bunların
            başlıcalarıdır.
          </p>
        </div>

        {/* Veri Sahibi Hakları */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Veri Sahibi Hakları</h2>
          <p className="text-gray-600">
            KVKK kapsamında, verilerinize erişme, düzeltme, silme, işlenmesini kısıtlama, aktarılan üçüncü kişileri
            öğrenme, itiraz etme ve diğer tüm haklara sahipsiniz.
          </p>
        </div>

        {/* Çerez Politikası */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Çerez Politikası</h2>
          <p className="text-gray-600">
            Web sitemizde kullanıcı deneyimini iyileştirmek için zorunlu, analitik ve (izin dâhilinde) pazarlama
            çerezleri kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.
          </p>
        </div>

        {/* Başvuru */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">İletişim ve Başvuru</h2>
          <p className="text-gray-600">KVKK kapsamındaki haklarınızı aşağıdaki kanallarla kullanabilirsiniz:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>E-posta: kvkk@tunasentetik.com</li>
            <li>Telefon: +90 342 123 4567</li>
            <li>Posta: Gaziantep OSB, 83120. Cadde No: 8</li>
            <li>Web sitesi iletişim formu</li>
          </ul>
          <p className="text-gray-600">
            Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. Kimlik doğrulaması gerekebilir.
          </p>
        </div>
      </div>
    </section>
  )
}

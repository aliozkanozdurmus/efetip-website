import { Metadata } from 'next'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, FileText, Users, Mail, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | Efe Tıp',
  description: 'Kişisel Verilerin Korunması Kanunu hakkında bilgilendirme metni',
}

export default function KVKKPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Kişisel Verilerin Korunması</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
              KVKK Aydınlatma Metni
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              EFE TIP olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. 
              Bu bilinçle, kişisel verilerinizin 6698 sayılı KVKK'na uygun olarak işlenmesini ve korunmasını taahhüt ederiz.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed">
                EFE TIP olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz. Bu sorumluluğumuzun tam idraki ile Veri Sorumlusu sıfatıyla, kişisel verilerinizi aşağıda izah edildiği surette ve mevzuat tarafından emredilen sınırlar çerçevesinde işlemekteyiz.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları
                </h2>
                <p className="leading-relaxed">
                  Kişisel verileriniz, Şirketimiz tarafından verilen hizmet, ürün ya da ticari faaliyete bağlı olarak değişkenlik gösterebilmekle; otomatik ya da otomatik olmayan yöntemlerle, ofisler, bayiler, internet sitesi, sosyal medya mecraları ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir. Şirketimizin ürün ve hizmetlerinden yararlandığınız müddetçe oluşturularak ve güncellenerek kişisel verileriniz işlenebilecektir. Ayrıca, Şirket hizmetlerini kullanmak niyetiyle internet sayfamızı kullandığınızda, Şirketimizi veya internet sitemizi ziyaret ettiğinizde, Şirketimizin düzenlediği eğitim, seminer veya organizasyonlara katıldığınızda kişisel verileriniz işlenebilecektir.
                </p>
                <p className="leading-relaxed mt-4">
                  Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan ürün ve hizmetlerden sizi faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, Şirketimiz tarafından sunulan ürün ve hizmetlerin sizin beğeni, kullanım alışkanlıkları ve ihtiyaçlarınıza göre özelleştirilerek size önerilmesi, Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini (Şirketimiz tarafından yürütülen iletişime yönelik idari operasyonlar, Şirkete ait lokasyonların fiziksel güvenliğini ve denetimini sağlamak, iş ortağı/müşteri/tedarikçi (yetkili veya çalışanları) değerlendirme süreçleri, hukuki uyum süreci, mali işler v.b.), Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ile Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
                </h2>
                <p className="leading-relaxed">
                  Toplanan kişisel verileriniz; Şirketimiz tarafından sunulan ürün ve hizmetlerden sizi faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, Şirketimiz tarafından sunulan ürün ve hizmetlerin sizin beğeni, kullanım alışkanlıkları ve ihtiyaçlarınıza göre özelleştirilerek size önerilmesi, Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini (Şirketimiz tarafından yürütülen iletişime yönelik idari operasyonlar, Şirkete ait lokasyonların fiziksel güvenliğini ve denetimini sağlamak, iş ortağı/müşteri/tedarikçi (yetkili veya çalışanları) değerlendirme süreçleri, hukuki uyum süreci, mali işler v.b.), Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ile Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla iş ortaklarımıza, tedarikçilerimize, hissedarlarımıza, Kanunen yetkili kamu kurumları ve özel kişilere, KVK Kanunu'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir. Bunun yanı sıra hizmet kalitesini artırmak, müşteri talebi üzerine ürünün garanti süresini uzatmak ve yapılan etkinlik ve organizasyonların raporlanması ve çıktılarının üretilebilmesi amacıyla üretici firmalara, Pazarlama ve tanıtım faaliyetlerini iyileştirebilmek ve halkla ilişkiler amacıyla sosyal medya kuruluşlarıyla, sosyal medya ajanslarıyla ve basın yayın kuruluşlarıyla, Kampanya faaliyetlerinde vize ve seyahat işlemlerinin gerçekleştirilebilmesi amacıyla acenteler bazında yurtdışına aktarılabilmektedir.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
                </h2>
                <p className="leading-relaxed">
                  Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda Şirketçe sunduğumuz ürün ve hizmetlerin belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi gayesi ile edinilir. Bu hukuki sebeple toplanan kişisel verileriniz KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu metnin (1) ve (2) numaralı maddelerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  Kişisel Veri Sahibinin KVK Kanunu'nun 11. maddesinde Sayılan Hakları
                </h2>
                <p className="leading-relaxed">
                  Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi, işbu Aydınlatma Metni'nde aşağıda düzenlenen yöntemlerle Şirketimize iletmeniz durumunda Şirketimiz talebin niteliğine göre talebi en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, Kişisel Verileri Koruma Kurulunca bir ücret öngörülmesi halinde, Şirketimiz tarafından belirlenen tarifedeki ücret alınacaktır. Bu kapsamda kişisel veri sahipleri;
                </p>
                
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                  <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                  <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                  <li>KVK Kanunu'nun ve ilgili diğer Kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                  <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                  <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme haklarına sahiptir.</li>
                </ul>
                
                <p className="leading-relaxed mt-4">
                  KVK Kanunu'nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı veya Kişisel Verileri Koruma Kurulu'nun belirlediği diğer yöntemlerle Şirketimize iletebilirsiniz. Kişisel Verileri Koruma Kurulu, şu aşamada herhangi bir yöntem belirlemediği için, başvurunuzu, KVK Kanunu gereğince, yazılı olarak Şirketimize iletmeniz gerekmektedir. Bu çerçevede Şirketimize KVK Kanunu'nun 11. maddesi kapsamında yapacağınız başvurularda yazılı olarak başvurunuzu ileteceğiniz Kanallar ve usuller aşağıda açıklanmaktadır.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    Başvuru Kanalları
                  </h3>
                  <p className="leading-relaxed">
                    Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile KVK Kanunu'nun 11. maddesinde belirtilen haklardan kullanmayı talep ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi; EFE TIP 3. Osb Kamil Şerbetçi Blv. No:39 Şehitkamil/Gaziantep adresine bizzat başvurarak, info@efetip.com.tr kayıtlı elektronik posta adresleri üzerinden veya taleplerinizi konu alan dilekçeleri ile noter onaylı posta yoluyla EFE TIP'a başvurarak iletebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

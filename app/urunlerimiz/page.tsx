import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductsGrid from "@/components/products-grid"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Ürünlerimiz
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Laboratuvar ihtiyaçlarınız için en son teknoloji ürünlerimizi keşfedin. Yüksek kaliteli ve güvenilir
              çözümlerle çalışmalarınızı destekliyoruz.
            </p>
          </div>
          <ProductsGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}

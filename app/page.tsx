import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Playera Premium Negra",
      price: 299,
      image: "https://via.placeholder.com/400x400/1a1a1a/ffffff?text=Playera+Negra",
      category: "Ropa",
      rating: 4.5
    },
    {
      id: 2,
      title: "Gorra Deportiva Azul",
      price: 199,
      image: "https://via.placeholder.com/400x400/1e40af/ffffff?text=Gorra+Azul",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 3,
      title: "Tenis Running Pro",
      price: 1299,
      image: "https://via.placeholder.com/400x400/ef4444/ffffff?text=Tenis+Running",
      category: "Calzado",
      rating: 5.0
    },
    {
      id: 4,
      title: "Mochila Urbana",
      price: 699,
      image: "https://via.placeholder.com/400x400/22c55e/ffffff?text=Mochila",
      category: "Accesorios",
      rating: 4.6
    },
    {
      id: 5,
      title: "Sudadera con Capucha",
      price: 499,
      image: "https://via.placeholder.com/400x400/6b7280/ffffff?text=Sudadera",
      category: "Ropa",
      rating: 4.7
    },
    {
      id: 6,
      title: "Reloj Digital Sport",
      price: 899,
      image: "https://via.placeholder.com/400x400/fbbf24/000000?text=Reloj+Sport",
      category: "Accesorios",
      rating: 4.9
    },
    {
      id: 7,
      title: "Pants Deportivo",
      price: 399,
      image: "https://via.placeholder.com/400x400/3b82f6/ffffff?text=Pants",
      category: "Deportes",
      rating: 4.4
    },
    {
      id: 8,
      title: "Lentes de Sol Polarizados",
      price: 549,
      image: "https://via.placeholder.com/400x400/1f2937/ffffff?text=Lentes+Sol",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 9,
      title: "Chamarra Bomber",
      price: 799,
      image: "https://via.placeholder.com/400x400/059669/ffffff?text=Chamarra",
      category: "Ropa",
      rating: 4.6
    },
    {
      id: 10,
      title: "Zapatillas Casuales Blancas",
      price: 999,
      image: "https://via.placeholder.com/400x400/f3f4f6/1f2937?text=Zapatillas",
      category: "Calzado",
      rating: 4.9
    },
    {
      id: 11,
      title: "Playera Polo Gris",
      price: 349,
      image: "https://via.placeholder.com/400x400/9ca3af/ffffff?text=Polo+Gris",
      category: "Ropa",
      rating: 4.3
    },
    {
      id: 12,
      title: "Audífonos Bluetooth",
      price: 1499,
      image: "https://via.placeholder.com/400x400/7c3aed/ffffff?text=Audifonos",
      category: "Accesorios",
      rating: 4.8
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      
      {/* Products Section */}
      <section id="productos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-gray-600 text-lg">
              Descubre nuestra selección especial de productos premium
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
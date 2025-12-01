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
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      category: "Ropa",
      rating: 4.5
    },
    {
      id: 2,
      title: "Gorra Deportiva Azul",
      price: 199,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 3,
      title: "Tenis Running Pro",
      price: 1299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      category: "Calzado",
      rating: 5.0
    },
    {
      id: 4,
      title: "Mochila Urbana",
      price: 699,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      category: "Accesorios",
      rating: 4.6
    },
    {
      id: 5,
      title: "Sudadera con Capucha",
      price: 499,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      category: "Ropa",
      rating: 4.7
    },
    {
      id: 6,
      title: "Reloj Digital Sport",
      price: 899,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      category: "Accesorios",
      rating: 4.9
    },
    {
      id: 7,
      title: "Pants Deportivo",
      price: 399,
      image: "https://images.unsplash.com/photo-1603320409990-02d834987237?w=400&h=300&fit=crop",
      category: "Deportes",
      rating: 4.4
    },
    {
      id: 8,
      title: "Lentes de Sol Polarizados",
      price: 549,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 9,
      title: "Chamarra Bomber",
      price: 799,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      category: "Ropa",
      rating: 4.6
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
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
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
      category: "Ropa",
      rating: 4.5
    },
    {
      id: 2,
      title: "Gorra Deportiva Azul",
      price: 199,
      image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500&h=500&fit=crop",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 3,
      title: "Tenis Running Pro",
      price: 1299,
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop",
      category: "Calzado",
      rating: 5.0
    },
    {
      id: 4,
      title: "Mochila Urbana",
      price: 699,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=500&fit=crop",
      category: "Accesorios",
      rating: 4.6
    },
    {
      id: 5,
      title: "Sudadera con Capucha",
      price: 499,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
      category: "Ropa",
      rating: 4.7
    },
    {
      id: 6,
      title: "Reloj Digital Sport",
      price: 899,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop",
      category: "Accesorios",
      rating: 4.9
    },
    {
      id: 7,
      title: "Pants Deportivo",
      price: 399,
      image: "https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?w=500&h=500&fit=crop",
      category: "Deportes",
      rating: 4.4
    },
    {
      id: 8,
      title: "Lentes de Sol Polarizados",
      price: 549,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 9,
      title: "Chamarra Bomber",
      price: 799,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop",
      category: "Ropa",
      rating: 4.6
    },
    {
      id: 10,
      title: "Zapatillas Casuales Blancas",
      price: 999,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
      category: "Calzado",
      rating: 4.9
    },
    {
      id: 11,
      title: "Playera Polo Gris",
      price: 349,
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&h=500&fit=crop",
      category: "Ropa",
      rating: 4.3
    },
    {
      id: 12,
      title: "Audífonos Bluetooth",
      price: 1499,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
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
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
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "Ropa",
      rating: 4.5
    },
    {
      id: 2,
      title: "Gorra Deportiva Azul",
      price: 199,
      image: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 3,
      title: "Tenis Running Pro",
      price: 1299,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      category: "Calzado",
      rating: 5.0
    },
    {
      id: 4,
      title: "Mochila Urbana",
      price: 699,
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      category: "Accesorios",
      rating: 4.6
    },
    {
      id: 5,
      title: "Sudadera con Capucha",
      price: 499,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: "Ropa",
      rating: 4.7
    },
    {
      id: 6,
      title: "Reloj Digital Sport",
      price: 899,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      category: "Accesorios",
      rating: 4.9
    },
    {
      id: 7,
      title: "Pants Deportivo",
      price: 399,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      category: "Deportes",
      rating: 4.4
    },
    {
      id: 8,
      title: "Lentes de Sol Polarizados",
      price: 549,
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      category: "Accesorios",
      rating: 4.8
    },
    {
      id: 9,
      title: "Chamarra Bomber",
      price: 799,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      category: "Ropa",
      rating: 4.6
    },
    {
      id: 10,
      title: "Zapatillas Casuales Blancas",
      price: 999,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      category: "Calzado",
      rating: 4.9
    },
    {
      id: 11,
      title: "Playera Polo Gris",
      price: 349,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      category: "Ropa",
      rating: 4.3
    },
    {
      id: 12,
      title: "Audífonos Bluetooth",
      price: 1499,
      image: "https://cdn.pixabay.com/photo/2018/09/17/14/28/headphones-3683983_1280.jpg",
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
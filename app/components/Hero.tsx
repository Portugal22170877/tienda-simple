export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bienvenido a ShopPro
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Descubre los mejores productos con la mejor calidad
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#productos"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Ver Productos
            </a>
            <a
              href="#categorias"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
            >
              Explorar Categorías
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

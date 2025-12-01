export default function Categories() {
  const categories = [
    {
      name: "Ropa",
      icon: "👕",
      description: "Estilo y comodidad",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Accesorios",
      icon: "🎒",
      description: "Complementa tu look",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Calzado",
      icon: "👟",
      description: "Para cada ocasión",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Deportes",
      icon: "⚽",
      description: "Actívate con estilo",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="categorias" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-gray-600 text-lg">
            Explora nuestra amplia selección de productos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer group"
            >
              <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

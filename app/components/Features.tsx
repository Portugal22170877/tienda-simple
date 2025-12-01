export default function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Envío Gratis",
      description: "En pedidos superiores a $500"
    },
    {
      icon: "🔒",
      title: "Pago Seguro",
      description: "Protección de compra garantizada"
    },
    {
      icon: "↩️",
      title: "Devolución Fácil",
      description: "30 días para devolver productos"
    },
    {
      icon: "💬",
      title: "Soporte 24/7",
      description: "Siempre listos para ayudarte"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

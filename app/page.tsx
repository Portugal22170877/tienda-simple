import ProductCard from "./components/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Playera Negra",
      price: 199,
      image: "https://picsum.photos/300/200?1",
    },
    {
      id: 2,
      title: "Gorra Azul",
      price: 149,
      image: "https://picsum.photos/300/200?2",
    },
    {
      id: 3,
      title: "Tenis Deportivos",
      price: 899,
      image: "https://picsum.photos/300/200?3",
    },
  ];

  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tienda Simple</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </main>
  );
}
export default function ProductCard({ title, price, image }: { title: string; price: number; image: string }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-gray-600">${price}</p>

      <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Agregar al carrito
      </button>
    </div>
  );
}

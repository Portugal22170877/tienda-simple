"use client";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-semibold mt-3">{title}</h3>
      <p className="text-gray-600">${price}</p>

      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
}


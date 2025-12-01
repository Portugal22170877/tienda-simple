"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition">
          {title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
          <span className="text-sm text-gray-500">(4.8)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            ${price}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${Math.floor(price * 1.3)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            isAdded
              ? "bg-green-500 text-white"
              : "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg"
          }`}
        >
          {isAdded ? (
            <span className="flex items-center justify-center gap-2">
              ✓ Agregado
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              🛒 Agregar al Carrito
            </span>
          )}
        </button>
      </div>
    </div>
  );
}


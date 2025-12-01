"use client";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="w-full bg-black text-white py-4 px-6 flex justify-between">
      <h1 className="text-xl font-bold">Tienda Simple</h1>

      <div className="text-lg">
        🛒 Carrito: <span className="font-bold">{cart.length}</span>
      </div>
    </header>
  );
}

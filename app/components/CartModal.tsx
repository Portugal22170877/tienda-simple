"use client";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";
import { trackViewCart, trackRemoveFromCart, trackBeginCheckout } from "../utils/analytics";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (isOpen && cart.length > 0) {
      trackViewCart(cart, total);
    }
  }, [isOpen, cart, total]);

  const handleRemoveFromCart = (item: any) => {
    removeFromCart(item.id);
    trackRemoveFromCart(item);
  };

  const handleCheckout = () => {
    trackBeginCheckout(cart, total);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold">Tu Carrito</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                <p className="text-4xl mb-4">🛒</p>
                <p>Tu carrito está vacío</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="text-4xl">${
                              item.id === 1 ? '👕' : item.id === 2 ? '🧢' : item.id === 3 ? '👟' : 
                              item.id === 4 ? '🎒' : item.id === 5 ? '🧥' : item.id === 6 ? '⌚' :
                              item.id === 7 ? '👖' : item.id === 8 ? '🕶️' : item.id === 9 ? '🧥' :
                              item.id === 10 ? '👟' : item.id === 11 ? '👕' : '🎧'
                            }</span>`;
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-indigo-600 font-bold">${item.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-indigo-600">${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
              >
                Proceder al Pago
              </button>
              <button
                onClick={clearCart}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

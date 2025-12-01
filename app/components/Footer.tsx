export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">
              🛍️ ShopPro
            </h3>
            <p className="text-gray-400">
              Tu tienda online de confianza con los mejores productos y precios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-indigo-400 transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-indigo-400 transition">
                  Productos
                </a>
              </li>
              <li>
                <a href="#categorias" className="text-gray-400 hover:text-indigo-400 transition">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-indigo-400 transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Atención al Cliente</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Envíos y Devoluciones</li>
              <li className="text-gray-400">Preguntas Frecuentes</li>
              <li className="text-gray-400">Términos y Condiciones</li>
              <li className="text-gray-400">Política de Privacidad</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@shoppro.com</li>
              <li>📱 +52 123 456 7890</li>
              <li>📍 Ciudad de México, México</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-2xl transition">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-2xl transition">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 text-2xl transition">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 ShopPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

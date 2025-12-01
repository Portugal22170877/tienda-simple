import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopPro - Tu Tienda Online de Confianza",
  description: "Descubre los mejores productos con calidad premium. Envío gratis en pedidos superiores a $500. Compra segura y devoluciones fáciles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DZLPK5W54Z"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DZLPK5W54Z');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}


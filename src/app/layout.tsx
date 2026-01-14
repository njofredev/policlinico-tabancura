import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // IMPORTANTE: Importar el Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Policlínico Tabancura | Reserva Médica Online",
  description: "Evolución digital de Policlínico Tabancura. Agenda tu hora con especialistas de Vitacura y Los Tribunales de forma rápida y segura.",
  keywords: ["policlinico tabancura", "reserva de horas", "dentalink", "vitacura", "salud"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}>
        {/* Aquí insertamos el Navbar para que aparezca en todas las páginas */}
        <Navbar />
        
        <main>
          {children}
        </main>

        {/* Añadimos un Footer profesional */}
        <footer className="bg-slate-50 border-t py-12 mt-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-lg">Policlínico Tabancura</h4>
              <p className="text-slate-500 leading-relaxed">
                Comprometidos con tu bienestar. Nuestra nueva plataforma v2 facilita el acceso a salud de calidad.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-lg">Sedes</h4>
              <p className="text-slate-500">📍 Vitacura: Av. Tabancura 1091</p>
              <p className="text-slate-500">📍 Los Tribunales: Huérfanos 1160</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-lg">Contacto</h4>
              <p className="text-slate-500">📞 Central: +56 2 2222 3333</p>
              <p className="text-slate-500">✉️ contacto@policlinicotabancura.cl</p>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-8 border-t text-center text-xs text-slate-400">
            © 2026 Policlínico Tabancura v2. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
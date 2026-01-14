import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Policlínico Tabancura | Salud Dental, Mental y Medicina General",
  description: "Atención especializada en Vitacura. Convenios, agendamiento online y profesionales de primer nivel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased text-slate-900`}>
        {/* TOPBAR DE CONTACTO RÁPIDO */}
        <div className="bg-blue-600 text-white py-2 text-xs hidden md:block">
          <div className="container mx-auto flex justify-between px-4">
            <div className="flex gap-6">
              <span className="flex items-center gap-1"><MapPin size={14} /> Los Tribunales #1268</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Av. Vitacura #8620</span>
            </div>
            <div className="flex gap-4 font-semibold">
              <span className="flex items-center gap-1 italic">Vuelve a sonreír sin preocuparte</span>
            </div>
          </div>
        </div>

        <Navbar />
        
        <main>{children}</main>

        {/* FOOTER BASADO EN EL SITIO REAL */}
        <footer className="bg-slate-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
            <div>
              <h4 className="text-xl font-bold mb-6 italic"> Policlínico Tabancura<span className="text-blue-400"></span></h4>
              <p className="text-slate-400">Somos una corporación sin fines de lucro enfocada en entregar salud de calidad con costos accesibles.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Menú</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="https://v2.policlinicotabancura.cl" className="hover:text-blue-400">Inicio</a></li>
                <li><a href="#" className="hover:text-blue-400">Quiénes somos</a></li>
                <li><a href="#" className="hover:text-blue-400">Derechos y deberes</a></li>
                <li><a href="#" className="hover:text-blue-400 text-blue-400 font-bold">🧪 Resultado de exámenes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Servicios</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Salud Dental</li>
                <li>Salud Mental</li>
                <li>Medicina General</li>
                <li>Terapias Alternativas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Sedes</h4>
              <div className="space-y-4 text-slate-400">
                <p><strong>Vitacura:</strong> Av. Vitacura #8620</p>
                <p><strong>Los Tribunales:</strong> Calle Los Tribunales #1268</p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            © 2026 Policlínico Tabancura. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
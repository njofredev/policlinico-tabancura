import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Stethoscope, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Tabancura<span className="text-blue-600">v2</span>
          </span>
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/especialidades" className="transition-colors hover:text-blue-600">Especialidades</Link>
          <Link href="/sedes" className="transition-colors hover:text-blue-600">Sedes</Link>
          <Link href="/farmacia" className="transition-colors hover:text-blue-600">Botica</Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Reserva tu Hora</Button>
        </div>

        {/* MOBILE MENU ICON */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
}
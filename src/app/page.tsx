export const dynamic = 'force-dynamic';

import { getDentistas } from '@/lib/dentalink';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dentista } from '@/types/dentalink';
import { Stethoscope, Calendar, ShieldCheck, Activity, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default async function HomePage() {
  const dentistas: Dentista[] = await getDentistas();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* --- HERO SECTION CON IMAGEN REALISTA --- */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Fondo con imagen médica profesional y overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Professional" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Badge className="bg-blue-600 text-white border-none px-3">Nuevo</Badge>
              <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Plataforma Médica Digital</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
              Cuidamos tu salud con <span className="text-blue-600 italic">excelencia.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Policlínico Tabancura v2: Agendamiento en tiempo real, especialistas de primer nivel y la tecnología médica más avanzada a tu alcance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-10 text-lg rounded-full shadow-lg shadow-blue-200 transition-all hover:scale-105">
                Reservar Cita Ahora
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-slate-300 hover:bg-slate-50">
                Conocer Staff
              </Button>
            </div>
            
            {/* Social Proof / Stats */}
            <div className="mt-12 flex items-center gap-6 border-t border-slate-200 pt-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">+2,000 Pacientes atendidos este mes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE SERVICIOS (TARJETAS CON VIDA) --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Servicios Integrales</h2>
          <p className="text-slate-500">Ofrecemos soluciones médicas completas para ti y tu familia.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Medicina General', icon: <Activity className="text-blue-600" />, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop', color: 'bg-blue-50' },
            { title: 'Odontología Avanzada', icon: <Stethoscope className="text-emerald-600" />, img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=500&auto=format&fit=crop', color: 'bg-emerald-50' },
            { title: 'Laboratorio Clínico', icon: <ShieldCheck className="text-purple-600" />, img: 'https://images.unsplash.com/photo-1579152276532-535d21ad6c5a?q=80&w=500&auto=format&fit=crop', color: 'bg-purple-50' },
          ].map((service, idx) => (
            <Card key={idx} className="group overflow-hidden border-none shadow-xl shadow-slate-100 hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-4">Equipamiento de última generación y atención personalizada para resultados precisos.</p>
                <Link href="#" className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Saber más <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- STAFF MÉDICO (EL ALMA DE LA CLÍNICA) --- */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Staff Médico Destacado</h2>
              <p className="text-slate-400">Conoce a los especialistas que lideran nuestra clínica. Profesionales comprometidos con tu salud.</p>
            </div>
            <Link href="/staff">
              <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">Ver Staff Completo</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dentistas.slice(0, 4).map((medico: Dentista) => (
              <div key={medico.id} className="group relative">
                <div className="aspect-[3/4] rounded-2xl bg-slate-800 overflow-hidden mb-4 border border-slate-700">
                  {/* Imagen placeholder ya que la API no trae fotos, pero con diseño premium */}
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-950">
                    <span className="text-4xl font-black text-slate-700">{medico.nombre[0]}{medico.apellidos[0]}</span>
                    <Stethoscope size={40} className="text-slate-800 mt-4" />
                  </div>
                </div>
                <h4 className="text-xl font-bold">{medico.nombre} {medico.apellidos}</h4>
                <p className="text-blue-400 font-medium mb-2">{medico.especialidad || 'Especialista'}</p>
                {medico.agenda_online && (
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Disponible Online</Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para agendar tu visita?</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              No dejes tu salud para mañana. Agenda hoy mismo y experimenta la atención que mereces en Policlínico Tabancura.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-16 px-12 text-xl font-bold rounded-full">
              Reservar Ahora
            </Button>
          </div>
          {/* Decoración abstracta */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full translate-y-24 -translate-x-24"></div>
        </div>
      </section>

    </div>
  );
}
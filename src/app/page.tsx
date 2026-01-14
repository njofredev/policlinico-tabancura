export const dynamic = 'force-dynamic';

import { getDentistas } from '@/lib/dentalink';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dentista } from '@/types/dentalink';
import { 
  Stethoscope, 
  Brain, 
  Activity, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Star, 
  CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

export default async function HomePage() {
  const dentistas: Dentista[] = await getDentistas();

  const services = [
    { 
      title: "Salud Dental", 
      desc: "Todas las especialidades de odontología y estética dental.", 
      icon: <Sparkles className="text-blue-600" />, 
      color: "bg-blue-50" 
    },
    { 
      title: "Salud Mental", 
      desc: "Consultas especializadas de psicología y psiquiatría.", 
      icon: <Brain className="text-purple-600" />, 
      color: "bg-purple-50" 
    },
    { 
      title: "Medicina General", 
      desc: "Pediatría, kinesiología, podología y medicina familiar.", 
      icon: <Stethoscope className="text-emerald-600" />, 
      color: "bg-emerald-50" 
    },
    { 
      title: "Kinesiología", 
      desc: "Rehabilitación física y atención kinesiológica integral.", 
      icon: <Activity className="text-orange-600" />, 
      color: "bg-orange-50" 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20" 
            alt="Fondo Institucional"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Tu salud es nuestro pulso, <br />
              <span className="text-blue-600 italic">contigo latimos más fuerte</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Corporación sin fines de lucro dedicada a entregar salud de calidad con costos accesibles y convenios estratégicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-10 text-lg font-bold rounded-full">
                Agendar Atención Online
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full bg-white border-slate-200">
                Ver Convenios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN SERVICIOS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 italic">¿Qué servicio necesitas hoy? 💙</h2>
          <p className="text-slate-500 text-lg">Selecciona una categoría para comenzar tu agendamiento</p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <Card key={idx} className="group hover:border-blue-500 transition-all duration-300 shadow-sm border-slate-100">
              <CardContent className="p-10 text-center flex flex-col items-center">
                <div className={`w-20 h-20 ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 text-slate-900">{s.title}</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed">{s.desc}</p>
                <Button variant="link" className="text-blue-600 p-0 font-bold group-hover:gap-2 transition-all">
                  Reservar Hora <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN STAFF DINÁMICO (DENTALINK) --- */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Agenda con nuestros especialistas en 3 pasos</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Selecciona Especialidad</h4>
                  <p className="text-blue-100 italic">Dental, salud mental o medicina general.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Elige tu Profesional</h4>
                  <p className="text-blue-100 italic">Contamos con un staff de excelencia esperándote.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Confirma y Asiste</h4>
                  <p className="text-blue-100 italic">Recibe tu recordatorio y visítanos en nuestras sedes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl shadow-blue-900/20">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="text-blue-600" /> Staff Disponible
              </h3>
              <div className="space-y-4 mb-10">
                {dentistas.slice(0, 3).map((d) => (
                  <div key={d.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50/50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                      {d.nombre[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight">{d.nombre} {d.apellidos}</p>
                      <p className="text-xs text-blue-600 font-medium uppercase tracking-wider">{d.especialidad || 'Especialista'}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/staff" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg font-bold rounded-xl shadow-lg shadow-blue-200">
                  Ver Todos los Médicos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN RESEÑAS GOOGLE (Entidades corregidas) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold italic mb-2 text-slate-900">Nuestros pacientes confían en nosotros</h2>
              <p className="text-slate-500">Experiencias reales en Google Reviews</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <span className="font-bold text-slate-700 text-lg">4.8 / 5.0</span>
              <span className="text-slate-400 text-sm">| 48 Reseñas</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-none shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                &quot;Excelente atención de la podóloga y de Tamara. Muy preocupadas de los pacientes.&quot;
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">M</div>
                <span className="text-sm font-black uppercase text-slate-900 tracking-tighter">Maribel D.</span>
              </div>
            </Card>
            <Card className="p-8 border-none shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                &quot;Un lugar de profesionalismo en recepción y dentistas. Muy limpio y ordenado.&quot;
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">C</div>
                <span className="text-sm font-black uppercase text-slate-900 tracking-tighter">Constanza J.</span>
              </div>
            </Card>
            <Card className="p-8 border-none shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                &quot;Doctor Patricio Merino un 7. Amables y resolutivos. 100% recomendable.&quot;
              </p>
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-600">F</div>
                <span className="text-sm font-black uppercase text-slate-900 tracking-tighter">Francisca A.</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
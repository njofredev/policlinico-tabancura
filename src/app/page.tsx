export const dynamic = 'force-dynamic';

import { getDentistas } from '@/lib/dentalink';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dentista } from '@/types/dentalink';
import { Stethoscope, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default async function HomePage() {
  // Obtenemos los datos de Dentalink
  const dentistas: Dentista[] = await getDentistas();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50 px-3 py-1">
              Evolución Digital v2.0
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
              Atención médica <span className="text-blue-600">moderna</span> para tu familia.
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Bienvenido a la nueva plataforma del Policlínico Tabancura. Gestionamos tu salud con tecnología de punta y los mejores profesionales de la región.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-md">
                Reservar Hora Online
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-md">
                Ver Especialidades
              </Button>
            </div>
          </div>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 hidden lg:block">
          <div className="w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      {/* 2. SECCIÓN DE VALORES / DIFERENCIADORES */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Agendamiento Ágil</h3>
              <p className="text-slate-600">Olvida las esperas telefónicas. Reserva directamente desde nuestra web con sincronización en tiempo real.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Staff Profesional</h3>
              <p className="text-slate-600">Médicos y dentistas altamente calificados, integrados bajo los estándares de salud más exigentes.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ubicación Estratégica</h3>
              <p className="text-slate-600">Encuéntranos en nuestras sedes de Vitacura y Los Tribunales con instalaciones de primer nivel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAFF MÉDICO (VISTA PREVIA DESDE DENTALINK) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Nuestros Especialistas</h2>
              <p className="text-slate-500 text-lg">Profesionales disponibles para tu atención inmediata</p>
            </div>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              Ver todo el staff <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dentistas && dentistas.length > 0 ? (
              dentistas.slice(0, 4).map((medico: Dentista) => (
                <Card key={medico.id} className="group border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-full mb-4 mx-auto flex items-center justify-center text-2xl font-bold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {medico.nombre[0]}{medico.apellidos[0]}
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {medico.nombre} {medico.apellidos}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">
                      {medico.especialidad || 'Especialista'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-2">
                      {medico.agenda_online ? (
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">
                          <Clock className="w-3 h-3 mr-1" /> Agenda Online
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-slate-500">
                          Solo Presencial
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Ver Perfil
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border-2 border-dashed rounded-2xl border-slate-200">
                <p className="text-slate-500">Cargando profesionales disponibles...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. CTA SECCIÓN FINAL */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una atención de urgencia?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Contamos con servicios de medicina general y laboratorio disponibles hoy mismo.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg">Llamar Ahora</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
              Ver Farmacia
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
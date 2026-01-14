import { getDentistas } from '@/lib/dentalink';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dentista } from '@/types/dentalink';

export default async function Page() {
  const dentistas: Dentista[] = await getDentistas();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Staff Médico - Dentalink API</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dentistas.map((dentista) => (
          <Card key={dentista.id}>
            <CardHeader>
              <CardTitle>{dentista.nombre} {dentista.apellidos}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Especialidad ID: {dentista.id_especialidad}</p>
              <p className="text-sm font-medium">
                Estado: {dentista.habilitado ? '✅ Activo' : '❌ Inactivo'}
              </p>
              {dentista.agenda_online && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Agenda Online Disponible
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
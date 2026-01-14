export const dynamic = 'force-dynamic';

import { getDentistas } from '@/lib/dentalink';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dentista } from '@/types/dentalink';

// IMPORTANTE: El export default debe ser async
export default async function Page() {
  const dentistas: Dentista[] = await getDentistas();

  // Siempre debe haber un return con JSX
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Staff Médico Tabancura</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dentistas && dentistas.length > 0 ? (
          dentistas.map((dentista: Dentista) => (
            <Card key={dentista.id}>
              <CardHeader>
                <CardTitle>{dentista.nombre} {dentista.apellidos}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">ID: {dentista.id}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No se encontraron dentistas.</p>
        )}
      </div>
    </main>
  );
}
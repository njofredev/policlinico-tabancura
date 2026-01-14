const BASE_URL = "https://api.dentalink.healthatom.com/api/v1"; // URI base de la documentación
const TOKEN = process.env.DENTALINK_TOKEN;

export async function getDentistas() {
  const response = await fetch(`${BASE_URL}/dentistas`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${TOKEN}`, // Formato de autenticación requerido
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 } // Caché optimizada para Next.js
  });

  if (!response.ok) {
    throw new Error('Fallo al obtener la lista de dentistas desde Dentalink');
  }

  const result = await response.json();
  return result.data; // Según el ejemplo, la respuesta envuelve todo en un objeto "data"
}
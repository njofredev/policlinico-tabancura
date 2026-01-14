export interface Dentista {
  id: number;
  rut: string;
  nombre: string;
  apellidos: string;
  celular: string | null;
  telefono: string | null;
  ciudad: string | null;
  comuna: string | null;
  direccion: string | null;
  email: string;
  id_especialidad: number;
  especialidad: string;
  agenda_online: boolean; // Dentalink devuelve 1 o 0, Next.js lo maneja como boolean
  intervalo: number;
  habilitado: boolean;
  // Estos campos son importantes para filtrar por sede
  contratos_sucursal: number[]; 
  horarios_sucursal: number[];
}

export interface DentalinkResponse {
  data: Dentista[];
  // Opcional: puedes agregar aquí links o meta si los necesitas para paginación
}
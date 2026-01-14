export interface Dentista {
  id: number; // ID del dentista
  nombre: string; // Nombre del dentista
  apellidos: string; // Apellidos del dentista
  rut?: string; // Rut del dentista
  email?: string; // Email del dentista
  telefono?: string; // Nº de teléfono del dentista
  celular?: string; // Nº de teléfono celular del dentista
  id_especialidad: number; // ID especialidad del dentista
  especialidad?: string; // Especialidad del dentista
  agenda_online: boolean; // Indica si tiene (1) o no (0) agenda online
  habilitado: boolean; // Indica si el dentista está (1) o no (0) habilitado
  intervalo: number; // Intervalo de atención en minutos
}
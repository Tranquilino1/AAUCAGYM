export interface Entrenador {
  id?: number;
  nombre: string;
  especialidad: string;
  biografia: string;
  fotoUrl: string;
}

export interface UsuarioApp {
  id?: number;
  nombreUsuario: string;
  email: string;
  password?: string;
  rol: string;
}

export interface Suscripcion {
  id?: number;
  nombrePlan: string; // BASICO, PREMIUM, ELITE
  fechaInicio: Date;
  fechaFin: Date;
  estado: string; // ACTIVO, EXPIRADO, CANCELADO
}

export interface Horario {
  id?: number;
  nombreActividad: string;
  diaSemana: string;
  horaInicio: string;
  horaFin: string;
  sala: string;
  entrenadorId?: number;
}

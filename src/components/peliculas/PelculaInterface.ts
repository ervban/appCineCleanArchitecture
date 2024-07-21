export interface Movie {
    id: string;
    imagen: string;
    nombre: string;
    descripcion: string;
    trailer: string;
    categoriaPelicula: string;
    director: string;
    duracion: number;
    estado: boolean;
    fechaEliminacion: string | null;
    fechaRegistro: string | null;
    usuarioEliminacion: string | null;
    usuarioRegistro: string | null;
  }
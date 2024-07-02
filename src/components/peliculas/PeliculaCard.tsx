import React, { useState } from "react";
import { Link } from "react-router-dom";

// Definir la interfaz para las propiedades del componente
export interface Movie {
  id: string;
  imagen: string;
  nombre: string;
  descripcion: string;
  trailer: string;
}

interface PeliculaCardProps {
  movie: Movie;
}

export const PeliculaCard: React.FC<PeliculaCardProps> = ({ movie }) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  // Si no usas el estado movies, deberías considerar removerlo
  const [movies, setMovies] = useState<Movie[]>([]); // Asumiendo que quieres mantener este estado por alguna razón

  return (
    <div
      key={movie.id}
      className="image-container"
      onMouseEnter={() => setHoveredImage(movie.imagen)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <img src={movie.imagen} alt={movie.nombre} />
      {hoveredImage === movie.imagen && (
        <Link to={{ pathname: "/horario" }} onClick={() => localStorage.setItem("selectedMovie", JSON.stringify(movie))}>
          <button className="buy-ticket-button">Comprar entrada</button>
        </Link>
      )}
    </div>
  );
};
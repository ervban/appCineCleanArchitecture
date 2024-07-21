import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "./PelculaInterface";
// Definir la interfaz para las propiedades del componente


interface PeliculaCardProps {
  movie: Movie;
}

export const PeliculaCard: React.FC<PeliculaCardProps> = ({ movie }) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div
      key={movie.id}
      className="image-container"
      onMouseEnter={() => setHoveredImage(movie.imagen)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      <img src={movie.imagen} alt={movie.nombre} />
      {hoveredImage === movie.imagen && (
        <Link to={`/horario/${movie.id}`} >
        <button className="buy-ticket-button">Comprar entrada</button>
      </Link>
      )}
    </div>
  );
};

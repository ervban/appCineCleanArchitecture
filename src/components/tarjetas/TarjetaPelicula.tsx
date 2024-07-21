import React from 'react';

// Definición de tipos para las props
interface PeliculaProps {
  nombre: string;
  imagen: string;
  fecha: string;
  sala: string;
  horario: string;
  lugar: string;
  asientos: number;
}

const TarjetaPelicula: React.FC<PeliculaProps> = ({ nombre, imagen, fecha, sala, horario, lugar, asientos }) => {
  return (
    <div className="tarjeta-pelicula">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Fecha: {fecha}</p>
      <p>Sala: {sala}</p>
      <p>Horario: {horario}</p>
      <p>Lugar: {lugar}</p>
      <p>Asientos disponibles: {asientos}</p>
    </div>
  );
};

export default TarjetaPelicula;
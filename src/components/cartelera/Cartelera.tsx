import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PeliculaCard, Movie } from '../peliculas/PeliculaCard';
import './cartelera.css';
import { getAllPeliculas } from '@/services/peliculas.service';

export interface Cartelera {
  id: number;
  nombre: string;
  descripcion: string;
  trailer: string;
  imagen: string;
  duracion: string;
}

export default function Cartelera() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const cargarPeliculas = async () => {
      const peliculasCargados = await getAllPeliculas();
      console.log(peliculasCargados);
      setMovies(peliculasCargados);
    };
    cargarPeliculas();
  }, []);
  return (
    <div className="peliculas">
      <h2>Peliculas En Cartelera</h2>
      <div className="container-peliculas">
        <div className="image-group">
          {movies.map((movie) => (
            <PeliculaCard key={movie.id} movie={movie}></PeliculaCard>
          ))}
        </div>
      </div>
    </div>
  );
}

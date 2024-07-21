import React, { useState, useEffect } from 'react';
import { formatTimeHHMM } from '../../utilities/format-time-hhmm.utility';
import { Movie } from '../peliculas/PelculaInterface';
import { Cartelera } from '../horarios/types';
import { getPeliculaById } from '../../services/peliculas.service'; // Asegúrate de tener esta función implementada
import { findByIdPelicula } from '@/services/cartelera.service';

type InformacionAsientosProps = {
  movieId: number;
  id_pelicula: number;
  
};

interface MovieGroupedBySede {
  [key: string]: { horarios: { horario: string; carteleraId: number; sala: string }[]; nombre: string };
}



export default function InfoAsientos({ movieId, id_pelicula, selectedSeats }: InformacionAsientosProps & { selectedSeats: string[] }): JSX.Element {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cartelera, setCartelera] = useState<Cartelera>();
  const [cargando, setCargando] = useState<boolean>(true);
  const [movieData, setMovieData] = useState<MovieGroupedBySede>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (movieId) {
      getPeliculaById(movieId).then(setMovie).catch(console.error);
    }
    setCargando(true);
    findByIdPelicula(id_pelicula)
      .then((data) => {
        const groupedBySede = data.reduce((acc: MovieGroupedBySede, item: Cartelera) => {
          if (!acc[item.sede]) {
            acc[item.sede] = { horarios: [], nombre: item.sede };
          }
          acc[item.sede].horarios.push({ horario: item.horario, carteleraId: item.carteleraId, sala: item.sala });
          return acc;
        }, {});
        setMovieData(groupedBySede);
        setError(null);
  
        // Selecciona la primera cartelera de la primera sede para mostrar
        const primerSedeNombre = Object.keys(groupedBySede)[0];
        const primerCartelera = groupedBySede[primerSedeNombre]?.horarios[0];
        if (primerCartelera) {
          setCartelera({
            ...primerCartelera,
            sede: primerSedeNombre,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Error al cargar los datos de la película');
      })
      .finally(() => {
        setCargando(false);
      });
  }, [movieId, id_pelicula]);



  return (
    <div className="parteIzquierda">
      <div className="tarjetaPelicula">
        {movie && cartelera && (
          <>
            <h1 className="titulo">{movie.nombre}</h1>
            <img src={movie.imagen} alt="Imagen de la película" />
            <div className="datosAsientos">
              <h1>Asientos: {selectedSeats.join(', ')}</h1>
              <h1>Lugar: {cartelera.sede}</h1>
              <h1>Sala: {cartelera.sala}</h1>
              <h1>Horario: {formatTimeHHMM(cartelera.horario)}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
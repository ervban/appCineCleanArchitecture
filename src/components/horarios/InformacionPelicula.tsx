import React, { useState, useEffect } from 'react';
import { Movie } from "../peliculas/PelculaInterface";
import { Cartelera } from '../horarios/types';
import YouTube, { YouTubeProps } from 'react-youtube';
import { getPeliculaById } from '../../services/peliculas.service';

type InformacionPeliculaProps = {
  movieId: number; 
  cartelera: Cartelera[];
};

export default function InformacionPelicula({ movieId, cartelera }: InformacionPeliculaProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const opts: YouTubeProps['opts'] = {
    height: '250',
    width: '430',
  };

  useEffect(() => {
    if (movieId) {
      getPeliculaById(movieId).then(setMovie).catch(console.error);
    }
  }, [movieId]);

  return (
    <div className="principal">
      <div className="cuadroPrincipal">
        <div className="cuadroIzquierdo">
          {movie && movie.imagen && movie.nombre && <img src={movie.imagen} alt={movie.nombre} />}{' '}
        </div>
        <div className="cuadroDerecho">
          <div className="cuadroDerechoInfo">
            <div className="textoInformacionPelicula">
              {movie ? (
                <div className='contenidoConTrailer'>
                  <h1>{movie.nombre}</h1>
                  <p>{movie.descripcion}</p>
                  {movie.trailer && (
                    <YouTube className='trailerPelicula' videoId={movie.trailer} opts={opts} />
                  )}
                </div>
              ) : (
                <p>Cargando detalles de la película...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
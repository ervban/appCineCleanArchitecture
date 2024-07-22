import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { getPeliculaById } from '../../services/peliculas.service';
import { findByIdPelicula } from '@/services/cartelera.service';
import { Movie } from '../peliculas/PelculaInterface'; // Asegúrate de que este importe sea correcto
import { Cartelera } from '../horarios/types';

type InformacionPagoProps = {
  movieId: number;
  id_pelicula: number;
  selectedSeats: string[];
};

interface MovieGroupedBySede {
  [key: string]: { horarios: { horario: string; carteleraId: number; sala: string }[]; nombre: string };
}

export default function InformacionPago({ movieId, id_pelicula, selectedSeats }: InformacionPagoProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cartelera, setCartelera] = useState<Cartelera | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);
  const [movieData, setMovieData] = useState<MovieGroupedBySede>({});
  const [error, setError] = useState<string | null>(null);
  const montoPagar = selectedSeats.length * 10;

  useEffect(() => {
    if (movieId) {
      getPeliculaById(movieId).then(setMovie).catch(console.error);
    }
    setCargando(true);
    findByIdPelicula(movieId)
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

        const primerSedeNombre = Object.keys(groupedBySede)[0];
        const primerCartelera = groupedBySede[primerSedeNombre]?.horarios[0];
        if (primerCartelera) {
          setCartelera({
            ...primerCartelera,
            sede: primerSedeNombre
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
  }, [movieId]);

  const currentDate = new Date().toLocaleDateString();
  const selectedSeatNumbers = selectedSeats.map(seat => seat.replace(/[^\d]/g, ''));

  return (
    <>
      {movie && cartelera && (
        <Box bgcolor="rgb(237, 35, 35)" color="#fff" p={2} width="50%">
          <Box mb={2}>
            <img src={movie.imagen} style={{ width: '100%', height: '50%', borderRadius: '8px' }} alt={movie.nombre} />
          </Box>

          <Typography variant="h6" gutterBottom>
            {movie.nombre}
          </Typography>
          <Typography variant="body1">Horario: {cartelera.horario}</Typography>
          <Typography variant="body1">Sala: {cartelera.sala}</Typography>
          <Typography variant="body1">Asientos: {selectedSeats.length ? selectedSeats.join(' - ') : '0'}</Typography>
          <Typography variant="body1">Monto: S/.{montoPagar}</Typography>
          <Typography variant="body1">Fecha: {currentDate}</Typography>
        </Box>
      )}
    </>
  );
}


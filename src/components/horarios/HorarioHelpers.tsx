import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { findByIdPelicula } from '@/services/cartelera.service';
import { formatTimeHHMM } from '../../utilities/format-time-hhmm.utility';
import { Cartelera } from '../horarios/types';
import { Movie } from '../peliculas/PelculaInterface';
import { getPeliculaById } from '../../services/peliculas.service';

interface HorarioProps {
  movieId: number;
  id_pelicula: number;
}

interface MovieGroupedBySede {
  [key: string]: { horarios: { horario: string; carteleraId: number }[]; nombre: string };
}

export default function HorarioInformacion({ movieId, id_pelicula }: HorarioProps) {
  const [movieData, setMovieData] = useState<MovieGroupedBySede>({});
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    setCargando(true);
    findByIdPelicula(id_pelicula)
      .then((data) => {
        const groupedBySede = data.reduce((acc: MovieGroupedBySede, item: Cartelera) => {
          if (!acc[item.sede]) {
            acc[item.sede] = { horarios: [], nombre: item.sede };
          }
          acc[item.sede].horarios.push({ horario: item.horario, carteleraId: item.carteleraId });
          return acc;
        }, {});
        setMovieData(groupedBySede);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError('Error al cargar los datos de la película');
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id_pelicula]);

  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movieData) return <div>No se encontró la película.</div>;

  return (
    <div>
      <div className="textoHorario">HORARIOS</div>
      <div className="horariosStyle">
        {Object.keys(movieData).map((sedeKey) => (
          <Accordion key={sedeKey}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${sedeKey}-content`} id={`panel-${sedeKey}-header`}>
              <Typography>{movieData[sedeKey].nombre}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {movieData[sedeKey].horarios.length > 0 ? (
                  movieData[sedeKey].horarios.map(({ horario, carteleraId }, index) => (
                    <Link to={`/asientos/${movieId}`} key={index}>
                      <Button
                        aria-label={`Asientos para ${movieData[sedeKey].nombre} a las ${formatTimeHHMM(horario)}`}
                        sx={{
                          backgroundColor: 'red',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'darkred'
                          },
                          margin: '5px'
                        }}
                        onClick={() => {
                          console.log(`Movie ID seleccionado: ${movieId}`);
                        }}
                      >
                        {`${formatTimeHHMM(horario)}`}
                      </Button>
                    </Link>
                  ))
                ) : (
                  <li>No hay horarios disponibles</li>
                )}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

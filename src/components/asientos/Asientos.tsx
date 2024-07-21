import React, { useState, FC, useEffect } from 'react';
import Navbarusers from '../../common/navbarUsers/Navbarusers';
import './asientos.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { formatTimeHHMM } from '../../utilities/format-time-hhmm.utility';
import { Movie } from '../peliculas/PelculaInterface';
import { getPeliculaById } from '../../services/peliculas.service';
import { findByIdPelicula } from '../../services/cartelera.service';
import { useNavigate, useParams } from 'react-router';
import { Cartelera } from '../horarios/types';
import SeleccionAsientos from './SeleccionAsientos';
import InfoAsientos from './InfoAsientos';

interface AsientosProps {
  movieId: number;
  id_pelicula: number;
}

export default function Asientos({ }: AsientosProps): JSX.Element {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [movieDetails, setMovieDetails] = useState<Cartelera | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartelera, setCartelera] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const navigate = useNavigate();


  const handleNext = () => {
    navigate('/snackCompra', { state: { movieId: parseInt(id ?? '') } });
  };

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);

        setLoading(false);
      } catch (error) {
        setError('Error al cargar los datos');
        setLoading(false);
      }
    };

    cargarDatos();
  }, [id]);
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbarusers />
      <div className="parteGeneral">
        <InfoAsientos movieId={parseInt(id ?? '')} id_pelicula={parseInt(id ?? '')} selectedSeats={selectedSeats} />
        <SeleccionAsientos numSeats={0} row={''} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
        
        
          <Button onClick={handleNext} style={{ backgroundColor: 'red', color: 'white', marginTop: '500px' }}>
            Siguiente
          </Button>
        
      </div>
    </div>
  );
}

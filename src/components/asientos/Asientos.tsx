import React, { useState, useEffect } from 'react';
import Navbarusers from '../../common/navbarUsers/Navbarusers';
import './asientos.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Modal, Box, Typography } from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { formatTimeHHMM } from '../../utilities/format-time-hhmm.utility';
import { Movie } from '../peliculas/PelculaInterface';
import { getPeliculaById } from '../../services/peliculas.service';
import { findByIdPelicula } from '../../services/cartelera.service';
import SeleccionAsientos from './SeleccionAsientos';
import InfoAsientos from './InfoAsientos';

interface AsientosProps {
  movieId: number;
  id_pelicula: number;
}

export default function Asientos({ }: AsientosProps): JSX.Element {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartelera, setCartelera] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [noSeatsSelectedModalOpen, setNoSeatsSelectedModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedSeats.length === 0) {
      setNoSeatsSelectedModalOpen(true);
    } else {
      navigate(`/pago/${id}?selectedSeats=${selectedSeats.join(',')}`);
    }
  };

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        // Carga de datos
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
        <Button 
          onClick={handleNext} 
          style={{ backgroundColor: 'red', color: 'white', marginTop: '500px' }}
        >
          Siguiente
        </Button>
      </div>
      <Modal
        open={noSeatsSelectedModalOpen}
        onClose={() => setNoSeatsSelectedModalOpen(false)}
        aria-labelledby="modal-no-seats-title"
        aria-describedby="modal-no-seats-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-no-seats-title" variant="h6" component="h2">
            Selección requerida
          </Typography>
          <Typography id="modal-no-seats-description" sx={{ mt: 2 }}>
            Debes seleccionar al menos un asiento.
          </Typography>
          <Button onClick={() => setNoSeatsSelectedModalOpen(false)}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
}

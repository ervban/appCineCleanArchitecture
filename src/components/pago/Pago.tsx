import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import Navbarusers from '../../common/navbarUsers/Navbarusers';
import InformacionPago from './InformacionPago';
import MetodoPago from './MetodoPago';
import { useParams } from 'react-router';

export default function Pago() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [userData, setUserData] = useState(null);
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState({
    imagen: '',
    titulo: '',
    horario: '',
    sala: '',
    selectedSeats: [],
    fecha: ''
  });

  
  useEffect(() => {
  }, []);

  return (
    <>
      <Navbarusers />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#fffff" p={2}>
        <Box display="flex" flexDirection="row" maxWidth="800px" bgcolor="#fff" borderRadius="8px" overflow="hidden">
          {/* Movie Information Section */}
          <InformacionPago movieId={id ? parseInt(id) : 0} id_pelicula={id ? parseInt(id) : 0}  />
          {/* Payment Section */}
          <MetodoPago setExpanded={setExpanded} expanded={expanded} />
        </Box>
      </Box>
    </>
  );
}

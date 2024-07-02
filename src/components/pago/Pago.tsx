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
import NavbarGeneral from '../../common/navbar/navBarGeneral/NavbarGeneral';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Pago() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [userData, setUserData] = useState(null);
  const [movieDetails, setMovieDetails] = useState({
    imagen: '',
    titulo: '',
    horario: '',
    sala: '',
    selectedSeats: [],
    fecha: ''
  });
  const currentDate = new Date().toLocaleDateString();
  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    // Verificar si hay datos de usuario guardados en el localStorage al cargar el componente
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      console.log('Datos de usuario cargados desde localStorage:', parsedUserData);
    }

  
    const storedMovieAndSeatsDetails = localStorage.getItem('movieAndSeatsDetails');
    if (storedMovieAndSeatsDetails) {
      const parsedDetails = JSON.parse(storedMovieAndSeatsDetails);
      // Aquí puedes actualizar el estado o directamente usar los datos recuperados para mostrarlos en los campos correspondientes
      // Por ejemplo, si tienes un estado para los detalles de la película y asientos, actualízalo aquí
      setMovieDetails(parsedDetails);
    }
  }, []);

  return (
    <>
      <NavbarGeneral />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#fffff" p={2}>
        <Box display="flex" flexDirection="row" maxWidth="800px" bgcolor="#fff" borderRadius="8px" overflow="hidden">
          {/* Movie Information Section */}
          <Box bgcolor="rgb(237, 35, 35)" color="#fff" p={2} width="50%">
            <Box mb={2}>
              <img src={movieDetails.imagen} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
            </Box>
           
            <Typography variant="h6" gutterBottom>
              {movieDetails.titulo}
            </Typography>
            <Typography variant="body1">Horario: {movieDetails.horario}</Typography>
            <Typography variant="body1">Sala: {movieDetails.sala}</Typography>
            <Typography variant="body1">Asiento: {movieDetails.selectedSeats.join(' - ')}</Typography>
            <Typography variant="body1">Fecha: {currentDate}</Typography>
          </Box>
          {/* Payment Section */}
          <Box p={2} width="50%">
            <Typography variant="h6" gutterBottom>
              PAGO
            </Typography>
            <TextField
              label="Correo"
              defaultValue="u2023123@hotmail.com"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ readOnly: true }}
            />
            <TextField
              label="Nombre"
              defaultValue="Jhon Doe"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ readOnly: true }}
            />
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>TARJETA</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField label="Número Tarjeta:" fullWidth margin="normal" />
                <TextField label="Fecha de Expiración:" fullWidth margin="normal" />
                <TextField label="CVV:" fullWidth margin="normal" />
                <TextField label="Dirección:" fullWidth margin="normal" />
                <Button variant="contained" color="secondary" size="large" fullWidth>
                  Siguiente
                </Button>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>YAPE O PLIN</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField label="DNI:" fullWidth margin="normal" />
                <TextField label="Número Celular:" fullWidth margin="normal" />
                <TextField label="Nombre Completo:" fullWidth margin="normal" />
                <Button variant="contained" color="secondary" size="large" fullWidth>
                  Siguiente
                </Button>
              </AccordionDetails>
            </Accordion>
            <FormControlLabel control={<Checkbox name="terms" />} label="Aceptar términos y condiciones" sx={{ mt: 2 }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

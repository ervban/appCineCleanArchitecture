import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { guardarVenta, generarPago, confirmarPago } from '../../services/ventas.service';
import { useNavigate } from 'react-router-dom';

export default function MetodoPago({ setExpanded, expanded, movieId, selectedSeats, montoPagar }: { setExpanded: any; expanded: any, movieId: number, selectedSeats: string[], montoPagar: number }) {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [ventaData, setVentaData] = useState(null);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePayment = async () => {
    const selectedSeatNumbers = selectedSeats.map(seat => seat.replace(/[^\d]/g, ''));

    const venta = {
      cantidadVenta: selectedSeatNumbers.length,
      idCartelera: movieId, // Suponiendo que movieId corresponde a idCartelera, ajustar si es necesario
      detalleVenta: selectedSeatNumbers.map(seatNumber => ({
        cantidad: 1,
        precio: 10, // Suponiendo que cada asiento tiene un precio fijo, ajustar si es necesario
        idAsiento: parseInt(seatNumber),
        idSede: 1 // Ajustar según sea necesario
      }))
    };

    try {
      const ventaData = await guardarVenta(venta); // Guardar la venta
      console.log('Venta guardada:', ventaData);

      const paymentDescription = `Asientos comprados: ${selectedSeats.join(' - ')}`;
      const paymentData = await generarPago(paymentDescription, montoPagar * 100, 'PEN'); // Generar el pago
      console.log('Pago generado:', paymentData);

      const confirmData = await confirmarPago(paymentData.id); // Confirmar el pago
      console.log('Pago confirmado:', confirmData);

      setVentaData(ventaData);
      setPaymentSuccess(true);

    } catch (error) {
      console.error('Error en el proceso de pago:', error);
      // Manejar el error, mostrar un mensaje al usuario
    }
  };

  const isFormValid = cardNumber !== '' && expirationDate !== '' && cvv !== '' && termsAccepted;

  const handleClose = () => {
    setPaymentSuccess(false);
    navigate('/home');
  };

  return (
    <>
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
        <TextField label="Nombre" defaultValue="Jhon Doe" variant="outlined" fullWidth margin="normal" InputProps={{ readOnly: true }} />
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>TARJETA</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Número Tarjeta:"
              fullWidth
              margin="normal"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <TextField
              label="Fecha de Expiración:"
              fullWidth
              margin="normal"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
            <TextField
              label="CVV:"
              fullWidth
              margin="normal"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              onClick={handlePayment}
              disabled={!isFormValid}
            >
              Siguiente
            </Button>
          </AccordionDetails>
        </Accordion>
        <FormControlLabel
          control={
            <Checkbox
              name="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          }
          label="Aceptar términos y condiciones"
          sx={{ mt: 2 }}
        />
      </Box>

      <Dialog open={paymentSuccess} onClose={handleClose}>
        <DialogTitle>Pago Exitoso</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Asientos comprados: {selectedSeats.join(' - ')}
          </Typography>
          <Typography variant="body1">
            Monto pagado: S/.{montoPagar}
          </Typography>
          <Typography variant="body1">
            Fecha: {new Date().toLocaleDateString()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

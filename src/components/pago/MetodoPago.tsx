import React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MetodoPago({ setExpanded, expanded }: { setExpanded: any; expanded: any }) {
  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
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
    </>
  );
}

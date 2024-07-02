import React from 'react';

import { Box, TextField, Button, Typography, Link } from '@mui/material';
import Navbarusers from '@/common/navbarUsers/Navbarusers';

export default function Login() {
  return (
    <>
      <Navbarusers />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)" 
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar sesión
        </Typography>
        <Box component="form" display={'flex'} flexDirection={'column'} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
          <TextField
            required
            id="email"
            label="Correo electrónico"
            type="email"
            autoComplete="current-email"
          />
          <TextField
            required
            id="password"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
          />
          <Box display="flex" flexDirection="column" alignItems="center" m={2}>
            <Button href="/home" variant="contained" type="submit" sx={{ bgcolor: 'red', '&:hover': { bgcolor: 'darkred' } }}>
              Iniciar sesión
            </Button>
            <Link href="/crear-cuenta" underline="hover" sx={{ mt: 2 }}>
              Crear cuenta
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
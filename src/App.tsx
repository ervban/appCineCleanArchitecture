import store from '@/redux/store';
import { ThemeProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { AppContainer } from './styled-components';
import theme from './theme';
import { SnackbarUtilsConfigurator } from './utilities';
import Asientos from './components/asientos/Asientos';
import Horarios from './components/horarios/Horarios';
import Pago from './components/pago/Pago';
import Home from './components/principal/Home';
import Snacks from './components/snacks/Snacks';
import Sedes from './components/sedes/Sedes';
import Peliculas from './components/peliculas/Peliculas';
import Confirmacion from './components/confirmacion/Confirmacion';
import RegistroUsuarios from './components/registrousuarios/Registrousuarios';
import Nosotros from './components/nosotros/Nosotros';
import RegistroTarjeta from './components/registrotarjeta/Registrotarjeta';
import SnackCompra from './components/snackCompra/SnackCompra';
import Login from './components/login/Login';


// Routes
const DashboardSuperFix = lazy(() => import('@/pages/Dashboard/DashboardSuperFix'));


const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <Suspense fallback={<div>Loading ...</div>}>
              <Provider store={store}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/horario" element={<Horarios />} />
                    <Route path="/asientos" element={<Asientos />} />
                    <Route path="/snacks" element={<Snacks />} />
                    <Route path="/pago" element={<Pago />} />
                    <Route path="/confirmacion" element={<Confirmacion />} />
                    <Route path="/logIn" element={<Login />} />
                    <Route path="/registro" element={<RegistroUsuarios />} />
                    <Route path="/registrotarjeta" element={<RegistroTarjeta />} />
                    <Route path="/peliculas" element={<Peliculas />} />
                    <Route path="/sedes" element={<Sedes />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path='/snackCompra' element={<SnackCompra />} />
                  </Routes>
                </BrowserRouter>
              </Provider>
            </Suspense>
          </SnackbarProvider>
        
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

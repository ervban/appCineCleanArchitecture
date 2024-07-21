import React, { useEffect, useState } from 'react';
import NavbarGeneral from '../../common/navbar/navBarGeneral/NavbarGeneral';
import Footer from '../../common/Footer/Footer';
import InformacionPelicula from './InformacionPelicula';
import './horarios.css';
import HorariosHelper from './HorarioHelpers';
import { useParams } from 'react-router';

// Componente Horarios
function Horarios() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartelera, setCartelera] = useState([]);

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
    <div className="general">
      <NavbarGeneral />
      <div className="contenidoPrincipal">
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <InformacionPelicula movieId={parseInt(id ?? '')} cartelera={cartelera} />
            <HorariosHelper  id_pelicula={parseInt(id ?? '0')} movieId={parseInt(id ?? '0')} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Horarios;
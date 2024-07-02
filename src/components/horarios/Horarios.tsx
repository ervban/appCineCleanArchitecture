import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './horarios.css';
import NavbarGeneral from '../../common/navbar/navBarGeneral/NavbarGeneral';
import Footer from '../../common/Footer/Footer';
import { Movie } from '../peliculas/PeliculaCard';
import { getAllCarteleras } from '@/services/cartelera.service';
import { Button } from '@mui/material';

type Cartelera = {
  sede: string;
  horarios: string[];
  sala: string; // Ahora incluye la sala en el tipo
};

export default function Horarios() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cartelera, setCartelera] = useState<Cartelera[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const movieData = localStorage.getItem('selectedMovie');
    console.log('Datos de película seleccionada desde localStorage:', movieData); // Imprimir los datos del localStorage
    if (movieData) {
      const parsedMovie = JSON.parse(movieData);
      setMovie(parsedMovie);
      // Llamar a getAllCarteleras y filtrar los resultados
      getAllCarteleras()
        .then((carteleras) => {
          console.log(carteleras); // Inspeccionar los datos devueltos
          const carteleraFiltrada = carteleras.filter((c: { pelicula: string }) => c.pelicula === parsedMovie.nombre);
          console.log(carteleraFiltrada); // Inspeccionar los datos filtrados

          // Agrupar por sede, extraer horarios y salas
          const carteleraPorSede = carteleraFiltrada.reduce((acc: { [key: string]: { horarios: string[], salas: string[] } }, c: { sede: string; horario: string; sala: string }) => {
            if (!acc[c.sede]) {
              acc[c.sede] = { horarios: [], salas: [] };
            }
            acc[c.sede].horarios.push(c.horario);
            if (!acc[c.sede].salas.includes(c.sala)) { // Evitar duplicados de salas
              acc[c.sede].salas.push(c.sala);
            }
            return acc;
          }, {});

          // Convertir el objeto agrupado en un arreglo de objetos con sede, horarios y salas
          const carteleraAjustada = Object.keys(carteleraPorSede).map((sede) => ({
            sede,
            horarios: carteleraPorSede[sede].horarios,
            sala: carteleraPorSede[sede].salas.join(', ') // Unir las salas en una cadena, si se desea mostrar
          }));

          setCartelera(carteleraAjustada);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error al obtener carteleras:', err);
          setError('Error al cargar carteleras');
          setLoading(false);
        });
    }
  }, []);

  const handleHorarioClick = (sede: string, horario: string) => {
    if (movie) {
      // Encontrar la sala correspondiente al horario y sede seleccionados
      const salaSeleccionada = cartelera.find(c => c.sede === sede)?.sala; // Asumiendo que cada sede tiene una sola sala por simplificación
      const movieDetails = {
        titulo: movie.nombre,
        imagen: movie.imagen,
        sala: salaSeleccionada, // Usar la sala seleccionada
        lugar: sede,
        horario: horario
      };
      localStorage.setItem('movieDetails', JSON.stringify(movieDetails));
    }
  };

  const Sede = ({ nombre, horarios }: { nombre: string; horarios: string[] }) => (
    <div className="sede">
      <h3>{nombre}</h3>
      <ul>
        {horarios && horarios.length > 0 ? (
          horarios.map((horario, index) => (
            <Link
              key={index}
              to="/asientos"
              aria-label={`Asientos para ${nombre} a las ${horario}`}
              onClick={() => handleHorarioClick(nombre, horario)}
            >
              <Button color="secondary">{horario}</Button>
            </Link>
          ))
        ) : (
          <p>No hay horarios disponibles para esta sede.</p>
        )}
      </ul>
    </div>
  );

  return (
    <div className="general">
      <NavbarGeneral />
      <div className="principal">
        <div className="cuadroPrincipal">
          <div className="cuadroIzquierdo">{movie && movie.imagen && movie.nombre && <img src={movie.imagen} alt={movie.nombre} />}</div>
          <div className="cuadroDerecho">
            <div className="cuadroDerechoInfo">
              <div className="texto">
                {movie ? (
                  <div>
                    <h1>{movie.nombre}</h1>
                    <p>{movie.descripcion}</p>
                  </div>
                ) : (
                  <p>Cargando detalles de la película...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horarioContenedor">
        <div className="contenedorHorarios">
          <div className="sede-horarios">
            {loading ? (
              <p>Cargando horarios...</p>
            ) : error ? (
              <p>{error}</p>
            ) : cartelera.length > 0 ? (
              cartelera.map((c, index) => <Sede key={index} nombre={c.sede} horarios={c.horarios} />)
            ) : (
              <p>No hay horarios disponibles en este momento.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
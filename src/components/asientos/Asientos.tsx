import React, { useState, FC, useEffect } from 'react';
import Navbarusers from '../../common/navbarUsers/Navbarusers';
import './asientos.css';
import evangelion from '../../assets/evangelion.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface SeatProps {
  numSeats: number;
  row: string;
}

const Asientos: FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [movieDetails, setMovieDetails] = useState({
    titulo: '',
    imagen: '',
    lugar: '',
    horario: '',
    sala: ''
  });
  const saveDataAndNavigate = () => {
    const movieAndSeatsDetails = {
      ...movieDetails, // Esto copia todos los detalles de la película ya existentes
      selectedSeats: selectedSeats // Añade los asientos seleccionados
    };
    localStorage.setItem('movieAndSeatsDetails', JSON.stringify(movieAndSeatsDetails));
    // Navegar a la página de pago aquí. Si estás usando react-router, puedes hacer:
    // history.push('/pago');
  };
  useEffect(() => {
    const details = localStorage.getItem('movieDetails');
    if (details) {
      setMovieDetails(JSON.parse(details));
    }
  }, []);

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter((s) => s !== seat);
      } else {
        return [...prevSeats, seat];
      }
    });
  };

  const renderSeats = ({ numSeats, row }: SeatProps) => {
    let seats = [];
    for (let i = 1; i <= numSeats; i++) {
      let seatId = `${row}${i}`;
      seats.push(
        <button
          key={seatId}
          onClick={() => handleSeatClick(seatId)}
          className={`seat-button ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
        >
          {seatId}
        </button>
      );
    }
    return seats;
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Navbarusers />
      <div className="parteGeneral">
        <div className="parteIzquierda">
          <div className="tarjetaPelicula">
            <h1 className="titulo">{movieDetails.titulo}</h1>
            <img src={movieDetails.imagen} alt="Imagen de la película" />
            <div>
              <h1>Asientos: {selectedSeats.join(', ')}</h1>
              <h1>Lugar: {movieDetails.lugar}</h1>
              <h1>Fecha: {currentDate}</h1>
              <h1>Sala: {movieDetails.sala}</h1>
              <h1>Horario: {movieDetails.horario}</h1>
            </div>
          </div>
        </div>
        <div className="parteDerecha">
          <div>{renderSeats({ numSeats: 12, row: 'A' })}</div>
          <div>{renderSeats({ numSeats: 12, row: 'B' })}</div>
          <div>{renderSeats({ numSeats: 12, row: 'C' })}</div>
        </div>

        <Button
          component={Link}
          to="/snackCompra"
          style={{ backgroundColor: 'red', color: 'white', marginTop: '500px' }}
          onClick={saveDataAndNavigate}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default Asientos;

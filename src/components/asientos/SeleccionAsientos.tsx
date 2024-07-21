import React, { useState } from 'react';
import { Button } from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { Link } from 'react-router-dom';

interface SeatProps {
  numSeats: number;
  row: string;
}

export default function SeleccionAsientos({ numSeats, row, selectedSeats, setSelectedSeats }: SeatProps & { selectedSeats: string[]; setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>> }): JSX.Element {

  

    const handleSeatClick = (seat: string) => {
        setSelectedSeats((prevSeats) => {
          if (prevSeats.includes(seat)) {
            return prevSeats.filter((s) => s !== seat);
          } else {
            return [...prevSeats, seat];
          }
        });
      };
  
    const renderSeats = ({ numSeats, row }: SeatProps): JSX.Element[] => {
    let seats: JSX.Element[] = [];
    for (let i = 1; i <= numSeats; i++) {
      let seatId = `${row}${i}`;
      seats.push(
        <button
          key={seatId}
          onClick={() => handleSeatClick(seatId)}
          className={`seat-button ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
        >
          <EventSeatIcon />
          {seatId}
        </button>
      );
    }
    return seats;
  };

  return (
    <div className="butacasEstilo">
      <div className="pantallaEstilo">
        <h1>Pantalla</h1>
      </div>
      <div className="parteDerecha">
        <div className="asientoIzquierda">{renderSeats({ numSeats: 15, row: 'A' })}</div>
        <div>{renderSeats({ numSeats: 15, row: 'B' })}</div>
        <div>{renderSeats({ numSeats: 15, row: 'C' })}</div>
      </div>
    </div>
  );
}

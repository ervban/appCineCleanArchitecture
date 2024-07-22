import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';

interface SeatProps {
  numSeats: number;
  row: string;
}

export default function SeleccionAsientos({ numSeats, row, selectedSeats, setSelectedSeats }: SeatProps & { selectedSeats: string[]; setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>> }): JSX.Element {
  const [maxSeatsModalOpen, setMaxSeatsModalOpen] = useState(false);

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prevSeats) => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter((s) => s !== seat);
      } else if (prevSeats.length < 5) {
        return [...prevSeats, seat];
      } else {
        setMaxSeatsModalOpen(true);
        return prevSeats;
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
      <Modal
        open={maxSeatsModalOpen}
        onClose={() => setMaxSeatsModalOpen(false)}
        aria-labelledby="modal-max-seats-title"
        aria-describedby="modal-max-seats-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-max-seats-title" variant="h6" component="h2">
            Límite alcanzado
          </Typography>
          <Typography id="modal-max-seats-description" sx={{ mt: 2 }}>
            Has alcanzado el máximo de 5 asientos seleccionados.
          </Typography>
          <Button onClick={() => setMaxSeatsModalOpen(false)}>Cerrar</Button>
        </Box>
      </Modal>
    </div>
  );
}

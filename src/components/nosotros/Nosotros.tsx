import megap from '../../assets/megap.jpg';
import React from 'react';
import './nosotros.css';
import NavbarGeneral from '../../common/navbar/navBarGeneral/NavbarGeneral';
import Footer from '../../common/Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Nosotros() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <NavbarGeneral />
      <Card sx={{ maxWidth: 700, height: 300, margin: 'auto', mt: 5, mb: 30 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={megap} // Usa la imagen importada previamente
            alt="Foto del equipo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sobre Nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somos una empresa que ofrece entretenimiento y atención de calidad a todo público para que puedan disfrutar de un buen momento
              en familia. Visualizando espectáculos visuales de calidad y con un servicio de excelencia.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              La magia del cine y la comodidad de como si estuvieras en tu hogar, es lo que queremos ofrecerte.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

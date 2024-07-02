import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { getAllConfiteria } from '../../services/snack.service';
import Navbarusers from '../../common/navbarUsers/Navbarusers';
import { Link } from 'react-router-dom';

export default function SnackCompra() {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const productosDesdeAPI = await getAllConfiteria();
      setProductos(productosDesdeAPI.map((producto: any) => ({ ...producto, cantidad: 0 })));
    };
    cargarProductos();
  }, []);

  const incrementar = (id: any) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const decrementar = (id: any) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id && producto.cantidad > 0) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const total = productos.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  return (
    <>
      <Navbarusers />
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: 2 }}>
        <Box sx={{ width: '15%', marginTop: '5%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
          {productos.map((producto) => (
            <Card key={producto.id} sx={{ maxWidth: 345, mb: 2, boxShadow: 'inherit', borderRadius: 'inherit', margin: '10%' }}>
              <CardMedia   component="img" height="140" image={producto.imagen} alt={producto.nombre} />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {producto.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio: ${producto.precio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cantidad: {producto.cantidad}
                </Typography>
              </CardContent>
              <CardActions >
                <Button size="small" onClick={() => incrementar(producto.id)}>
                  <AddIcon />
                </Button>
                <Button size="small" onClick={() => decrementar(producto.id)}>
                  <RemoveIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: '5%',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px'
          }}
        >
          <Typography sx = {{padding: '3%'}}  variant="h4" gutterBottom>
            Resumen de Compra
          </Typography>
          <Box>
            {productos
              .filter((producto) => producto.cantidad > 0)
              .map((producto) => (
                <Typography sx = {{padding: '3%'}} key={producto.id}>
                  {producto.nombre} x {producto.cantidad} = ${producto.precio * producto.cantidad}
                </Typography>
              ))}
            <Typography sx = {{padding: '3%'}} variant="h5">Total: ${total}</Typography>
          </Box>
        </Box>
        
      </Box>
      <Button component={Link} to="/pago" style={{ backgroundColor: 'red', color: 'white', marginTop: '5%', marginLeft: '80%' }}>
          Siguiente
        </Button>
    </>
  );
}

import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { colorRojo, theme } from '@/styled-components/button.styles.component';


type FormField = {
  name: string;
  type: string;
  placeholder?: string;
  options?: { label: string; value: any }[];
};

interface FormProps {
  fields: FormField[];
  onSubmit: (formData: { [key: string]: any }) => void;
}

const Formulario: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [fileName, setFileName] = useState(''); // Paso 1: Estado para el nombre del archivo


  const handleChange = (event:any) => {
    const { name, value, files } = event.target;
    if (name === 'raised-button-file' && files.length > 0) {
      setFileName(files[0].name); // Paso 2: Actualizar el estado con el nombre del archivo
      // Aquí puedes agregar también la lógica para manejar la carga del archivo si es necesario
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: '20px' }}>
          {field.type !== 'select' && field.type !== 'file' ? (
            <TextField
              fullWidth
              variant="outlined"
              type={field.type}
              name={field.name}
              label={field.name}
              placeholder={field.placeholder || ''}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          ) : field.type === 'file' ? (
            <>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleChange}
                name={field.name}
              />
              <label htmlFor="raised-button-file">
                <Button 
                sx={{
                  bgcolor: colorRojo, // Usa el color principal del tema
                  color: theme.palette.secondary.contrastText, // Usa el texto de contraste del tema
                  '&:hover': {
                    bgcolor: theme.palette.secondary.dark, // Usa el color oscuro para el estado hover
                  },
                }}
                variant="contained" component="span">
                  Cargar Imagen
                </Button>
              </label>
            </>
          ) : (
            <FormControl fullWidth>
              <InputLabel>{field.name}</InputLabel>
              <Select value={formData[field.name] || ''} onChange={handleChange} name={field.name} label={field.name}>
                {field.options?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </div>
      ))}
      <Button 
      sx={{
        bgcolor: colorRojo,
        color: theme.palette.secondary.contrastText, 
        '&:hover': {
          bgcolor: theme.palette.secondary.dark, 
        },
      }}
      variant="contained" color="primary" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default Formulario;
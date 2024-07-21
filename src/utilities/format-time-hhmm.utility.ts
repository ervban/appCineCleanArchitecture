export const formatTimeHHMM = (timeString: string): string => {
    // Asegúrate de que la cadena tenga una longitud de 4 caracteres
    if (timeString.length !== 4) {
      throw new Error("El formato de la hora debe ser HHMM");
    }
  
    // Extrae las horas y los minutos
    const hours = timeString.substring(0, 2);
    const minutes = timeString.substring(2, 4);
  
    // Combina las horas y los minutos con un dos puntos
    return `${hours}:${minutes}`;
  };
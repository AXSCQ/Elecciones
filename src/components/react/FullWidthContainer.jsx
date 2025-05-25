import React, { useEffect } from 'react';

const FullWidthContainer = ({ children }) => {
  useEffect(() => {
    // Función para ajustar el ancho del contenedor
    const fixWidth = () => {
      document.documentElement.style.width = '100%';
      document.documentElement.style.maxWidth = '100%';
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.width = '100%';
      document.body.style.maxWidth = '100%';
      document.body.style.overflowX = 'hidden';
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    };

    // Ejecutar al montar el componente
    fixWidth();

    // Ejecutar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', fixWidth);

    // Limpiar al desmontar
    return () => {
      window.removeEventListener('resize', fixWidth);
    };
  }, []);

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        margin: 0,
        padding: 0
      }}
    >
      {children}
    </div>
  );
};

export default FullWidthContainer;

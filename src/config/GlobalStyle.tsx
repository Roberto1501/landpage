/* eslint-disable linebreak-style */
import React from 'react';
import { GlobalStyles } from '@mui/material';
import images from '.././assets/images.jpg';

const EstiloGlobal: React.FC = () => {
  return (
    <GlobalStyles 
      styles={{
        body:{
          padding: '0px',
          margin: '0px',
          backgroundImage:`url(${images}) `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: '#fff',
          width: '100vw',
          minHeight: '100vh',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
      }}
    />
  );
};

export default EstiloGlobal;

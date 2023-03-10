/* eslint-disable linebreak-style */
import React from 'react';
import { GlobalStyles } from '@mui/material';

const EstiloGlobal: React.FC = () => {
  return (
    <GlobalStyles 
      styles={{
        body:{
          padding: '0px',
          margin: '0px',
        },
      }}
    />
  );
};

export default EstiloGlobal;

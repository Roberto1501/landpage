/* eslint-disable linebreak-style */
import React from 'react';
import { GlobalStyles } from '@mui/material';
import imagemData from '.././assets/imagemData.jpg';

const EstiloGlobal: React.FC = () => {
  return (
    <GlobalStyles 
      styles={{
        body:{
          padding: '0px',
          margin: '0px',
          backgroundImage:`url(${imagemData}) `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
        },
      }}
    />
  );
};

export default EstiloGlobal;

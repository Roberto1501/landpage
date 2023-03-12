/* eslint-disable indent */
import { Grid } from '@mui/material';
import React from 'react';
import Formulario from '../components/Form';


const Inscrever: React.FC = () => {
  return (
   <Grid container>
        <Grid item>
        <Grid item xs={12} sm={12}>
        <Formulario />
      </Grid>
        </Grid>
   </Grid>
  );
};

export default Inscrever;

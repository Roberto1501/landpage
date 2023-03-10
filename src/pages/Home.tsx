/* eslint-disable linebreak-style */
import { Grid, Typography } from '@mui/material';
import React from 'react';
// import atomo from '../assets/atomo.png';
import Formulario from '../components/Form';

const Home: React.FC = () => {
  return  (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography variant='h3'>
           Data Science
        </Typography>
        <span>
        Aprenda habilidades analíticas e tecnológicas avançadas com o nosso curso de Data Science. Descubra como coletar, organizar e analisar grandes volumes de dados usando ferramentas populares como Python, R e SQL. Desenvolva seu portfólio trabalhando em projetos reais de Data Science e prepare-se para uma carreira em um campo de rápido crescimento. Inscreva-se agora!
        </span>
      </Grid>
      {/* <img src={atomo} alt="" /> */}
      <Grid item xs={12} sm={6} style={{
        marginTop: '30px',
       
      }}>
        <Formulario />
      </Grid>
      
    </Grid>
  );
};

export default Home; 

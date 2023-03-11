/* eslint-disable linebreak-style */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Formulario from '../components/Form';
import TextoCentral from '../components/TextoCentral';
import Atomo from '../components/Atomo';

const Home: React.FC = () => {
  return  (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography variant='h3' style={{
          fontFamily: 'cursive'
         
        }}>
           Data Science
        </Typography>
        <br /><br />
        <span style={{
          fontFamily: 'cursive',
          fontSize:'20px'
          
        }}>
        Aprenda habilidades analíticas e tecnológicas avançadas com o nosso curso de Data Science. Descubra como coletar, organizar e analisar grandes volumes de dados usando ferramentas populares como Python, R e SQL. Desenvolva seu portfólio trabalhando em projetos reais de Data Science e prepare-se para uma carreira em um campo de rápido crescimento. Inscreva-se agora!
        </span>
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <Formulario />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextoCentral />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Atomo />
      </Grid>
      
    </Grid>
  );
};

export default Home; 

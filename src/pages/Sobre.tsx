/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Atomo from '../components/Atomo';

const Sobre: React.FC = () => {
  return (
    <Grid container style={{
      marginTop: '30px',
      padding: '20px',
    }}>
      <Grid item xs={12} sm={6} style={
        {
          paddingRight: '20px',
          
        }
      }>
        <Typography variant="h4" style={{
          fontFamily: 'cursive',
          marginBottom: '20px',
        }}>GrowDev</Typography>
        <Typography style={{fontFamily: 'cursive',
        fontSize: '20px',
      }}>
        O curso de Data Science da GrowDev é projetado para ajudar os alunos a desenvolver habilidades valiosas em uma variedade de tópicos relacionados à análise de dados. O curso enfatiza uma abordagem prática e oferece instrução experiente e materiais de qualidade para preparar os alunos para aplicar seus conhecimentos em projetos do mundo real. Os tópicos abordados incluem estatística, programação, visualização de dados e aprendizado de máquina. O objetivo do curso é ajudar os alunos a alcançar suas metas de carreira em um campo em constante evolução.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} 
      style={
        {
          paddingLeft: '20px',
        }
      }>
        <Atomo />
      </Grid>
    </Grid>
  );
};

export default Sobre;

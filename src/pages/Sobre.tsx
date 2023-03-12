/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { Grid, Typography } from '@mui/material';
import React from 'react';

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
        <Typography variant="h4">GrowDev</Typography>
        <Typography>
          Bem-vindo à GrowDev, onde estamos comprometidos em fornecer a você a melhor experiência em aprendizado de Data
          Science. Acreditamos que a análise de dados é uma habilidade essencial para o sucesso em qualquer setor, e
          estamos empenhados em oferecer a você as ferramentas e habilidades necessárias para se tornar um profissional
          de destaque em Data Science. Nosso curso de Data Science foi cuidadosamente projetado para ajudar a
          desenvolver habilidades em uma ampla variedade de tópicos, incluindo estatística, programação, visualização de
          dados, aprendizado de máquina e muito mais. Com instrutores experientes e uma abordagem prática, você terá
          acesso a materiais de qualidade e terá a oportunidade de aplicar seus conhecimentos em projetos reais. Nosso
          objetivo é ajudá-lo a alcançar suas metas de carreira, fornecendo-lhe as habilidades e experiência necessárias
          para ter sucesso em um campo em constante evolução. Estamos ansiosos para trabalhar com você e ajudá-lo a
          alcançar seus objetivos em Data Science.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} 
      style={
        {
          paddingLeft: '20px',
        }
      }>
        <Typography variant="h4">GrowDev</Typography>
        <Typography>
          Bem-vindo à GrowDev, onde estamos comprometidos em fornecer a você a melhor experiência em aprendizado de Data
          Science. Acreditamos que a análise de dados é uma habilidade essencial para o sucesso em qualquer setor, e
          estamos empenhados em oferecer a você as ferramentas e habilidades necessárias para se tornar um profissional
          de destaque em Data Science. Nosso curso de Data Science foi cuidadosamente projetado para ajudar a
          desenvolver habilidades em uma ampla variedade de tópicos, incluindo estatística, programação, visualização de
          dados, aprendizado de máquina e muito mais. Com instrutores experientes e uma abordagem prática, você terá
          acesso a materiais de qualidade e terá a oportunidade de aplicar seus conhecimentos em projetos reais. Nosso
          objetivo é ajudá-lo a alcançar suas metas de carreira, fornecendo-lhe as habilidades e experiência necessárias
          para ter sucesso em um campo em constante evolução. Estamos ansiosos para trabalhar com você e ajudá-lo a
          alcançar seus objetivos em Data Science.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Sobre;

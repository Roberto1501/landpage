/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Atomo from '../components/Atomo';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const Home: React.FC = () => {

  const navigate = useNavigate();

 

function navigatePage(e: MouseEvent<HTMLButtonElement>): void {
  e.preventDefault();
  navigate('/sobre');
}


  return  (
    <Grid container>
      <Grid item xs={12} sm={6} style={{
        marginTop:'30px',
      }}>
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
        <br /><br />
        <Button
            variant="text"
            onClick={navigatePage}
            style={{
              backgroundColor: '#1796D2',
              color: '#fff'
            }}
          >
            learn more
          </Button>
      </Grid>
      
  
      
      <Grid item xs={12} sm={6}>
        <Atomo />
      </Grid>
     
    </Grid>
  );
};

export default Home; 

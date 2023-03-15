/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';

import Typography from '@mui/material/Typography';

import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



const tiers = [
  {
    title: 'Gratis',
    price: '0',
    description: [
      'lives gratuitas',
      'acesso a 2 pdfs por mês',
      
    ],
    buttonText: 'Inscreva-se',
    buttonVariant: 'outlined',
  },
  {
    title: 'Ninja',
    subheader: 'Mais popular',
    price: '50',
    description: [
      'aulas gravadas',
      'pdf com explicação do professor',
      'suporte por email',
      'Videochamada coletiva toda semana',
    ],
    buttonText: 'Vem ser ninja',
    buttonVariant: 'contained',
  },
  {
    title: 'Master',
    price: '90',
    description: [
      'Conteudo do ninja',
      '3 lives coletivas por semana',
      'Atendimento prioritário no suporte',
      'Mentor exclusivo 2 vezes por mês',
    ],
    buttonText: 'Contate-nos',
    buttonVariant: 'outlined',
  },
];


function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ 
        
        height: 'auto',
       
        }}>
       
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" style={{marginTop: '14px'}}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mês
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import { Grid,Container } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../../components/AppBar';
import Footer from '../../components/Footer';

interface DefaultLayoutProps {
  component: React.FC;
}

const DefaulLayout: React.FC<DefaultLayoutProps> = ({ component: Component }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ResponsiveAppBar/>
      </Grid>
      <Grid item xs={12} >
        <Container >
          <Component />
        </Container>
      </Grid>

      <Grid item xs={12} >
        <Container >
          <Footer />
        </Container>
      </Grid>
    </Grid>
  );
};

export default DefaulLayout;


/* eslint-disable indent */
/* eslint-disable linebreak-style */

import { Button, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import React from 'react';

const Formulario: React.FC = () => {
  return (
    <>
      
    
       
          <h2>Tenho interesse</h2>
          <FormControl>
            <InputLabel
              htmlFor="my-input2"
              style={{
                color: '#fff'
              }}
            >
              Nome
            </InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" color='primary' style={{color: '#fff'}} />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input3"style={{
             color: '#fff'
          }}>Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" style={{color: '#fff'}} />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input4" style={{
             color: '#fff'
          }}>Confirme seu e-mail</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" style={{color: '#fff'}} />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input5" style={{
             color: '#fff'
          }}>WhatsApp</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" style={{color: '#fff'}} />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input6" style={{
             color: '#fff'
          }}>Data de nascimento</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" style={{color: '#fff'}} />
          </FormControl>
          <br />
          <br />
          <Button
            variant="text"
            style={{
              backgroundColor: '#1796D2',
              color: '#fff'
            }}
          >
            Inscrever
          </Button>
       
    </>
  );
};

export default Formulario;

/* eslint-disable linebreak-style */

import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React from 'react';

const Formulario: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <div>
          <h2>Tenho interesse</h2>
          <FormControl>
            <InputLabel htmlFor="my-input2">Nome</InputLabel>
            <Input id="my-input2" aria-describedby="my-helper-text" />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input3">Email</InputLabel>
            <Input id="my-input3" aria-describedby="my-helper-text" />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input4">Confirme seu e-mail</InputLabel>
            <Input id="my-input4" aria-describedby="my-helper-text" />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input5">WhatsApp</InputLabel>
            <Input id="my-input5" aria-describedby="my-helper-text" />
          </FormControl>
          <br />
          <br />

          <FormControl>
            <InputLabel htmlFor="my-input6">Data de nascimento</InputLabel>
            <Input id="my-input6" aria-describedby="my-helper-text" />
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Formulario;

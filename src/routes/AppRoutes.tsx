/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaulLayout from '../config/layout/DefaultLayout';
import Sobre from '../pages/Sobre';
import Inscrever from '../pages/Inscrever';
import Precos from '../pages/Precos';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaulLayout component={Home} />} />
        <Route path='/sobre' element={<DefaulLayout component={Sobre} />} />  
        <Route path='/inscrever' element={<DefaulLayout component={Inscrever} />} />
        <Route path='/precos' element={<DefaulLayout component={Precos} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

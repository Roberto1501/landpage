/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaulLayout from '../config/layout/DefaultLayout';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaulLayout component={Home} />} />
              
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

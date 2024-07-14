import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'; 
import Articles from './Articles';
import Main from './main';


import Mother from './mother';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
      <Routes>

        <Route exact path="/Articles" element={<Articles />} />
        <Route exact path="/mother" element={<Mother />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

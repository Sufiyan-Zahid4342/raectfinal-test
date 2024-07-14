import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import navbar from './navbar'
import { Link } from "react-router-dom";
import Articles from './Articles';
import main from './main';
import mother from './mother';

const App = () => {
  
  < navbar  />
  return (
    <Routes>
      <Route path="/sign in to continue" element={<Articles />} />
    </Routes>



    // <div>
    //   <Hello name="John Doe" />
    // </div>

  );
};

export default App;
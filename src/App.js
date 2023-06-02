import React from 'react'
import Home from './listaArte'
import SoyYo from './yoSoyYo';
import { Route, Routes } from 'react-router';


const  App = () => {
  return (
    <Routes>
      <Route path='/YoSoyYo' element={<SoyYo />} />
      <Route path='/nadja/build' element={<Home />} />
    </Routes>
  );
}

export default App;
import React from 'react'
import Home from './listaArte'
import { Route, Routes } from 'react-router';


const  App = () => {
  return (
    <Routes>
      <Route path='/nadja/build' element={<Home />} />
    </Routes>
  );
}

export default App;
import React from 'react'
import ArtList from './listaArte'
import SoyYo from './yoSoyYo';
import { Route, Routes } from 'react-router';


const App = () => {
  return (
    <Routes>
      <Route path='/YoSoyYo' element={<SoyYo />} />
      <Route path='/' element={<ArtList />} />
    </Routes>
  );
}

export default App;
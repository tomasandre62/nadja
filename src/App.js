import React from 'react'
import ArtList from './listaArte'
import SoyYo from './yoSoyYo';
import { Route, Routes } from 'react-router';
import Sebastian from './sebastian';
import Ventana from './ventana';
import Arboles from './arboles';
import Paseo from './paseo';
import Ilusion from './ilusion';
import Lluvia from './lluvia';


const App = () => {
  return (
    <Routes>
      <Route path='/LLuvia' element={<Lluvia />} />
      <Route path='/Ilusion' element={<Ilusion />} />
      <Route path='/UnaTardeDePaseo' element={<Paseo />} />
      <Route path='/LosArboles' element={<Arboles />} />
      <Route path='/DesdeMiVentana' element={<Ventana />} />
      <Route path='/Sebastian' element={<Sebastian />} />
      <Route path='/YoSoyYo' element={<SoyYo />} />
      <Route path='/' element={<ArtList />} />
    </Routes>
  );
}

export default App;
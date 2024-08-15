import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Candy from './Candy';
import Water from './Water';
import Sodas from './Sodas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route path="/Water" element={<Water />} />
        <Route path="/Chips" element={<Chips />} />
        <Route path="/Candy" element={<Candy />} />
        <Route path="/Sodas" element={<Sodas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


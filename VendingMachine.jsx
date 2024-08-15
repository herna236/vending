import React from "react";
import { Link } from 'react-router-dom';
import './vendingMachine.css';  

const VendingMachine = () => {
  return (
    <div className="vending-machine-items">
      <h1>Welcome to the vending machine</h1>
      <Link to="/Water">Water</Link>
      <Link to="/Candy">Candy</Link>
      <Link to="/Chips">Chips</Link>
      <Link to="/Sodas">Sodas</Link>
    </div>
  );
};

export default VendingMachine;


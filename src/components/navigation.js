import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() { 
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/exercicio1" className="text-white hover:text-yellow-300">Exercício 1</Link></li>
        <li><Link to="/exercicio2" className="text-white hover:text-yellow-300">Exercício 2</Link></li>
        <li><Link to="/exercicio3" className="text-white hover:text-yellow-300">Exercício 3</Link></li>
        <li><Link to="/exercicio4" className="text-white hover:text-yellow-300">Exercício 4</Link></li>
        <li><Link to="/exercicio5" className="text-white hover:text-yellow-300">Exercício 5</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

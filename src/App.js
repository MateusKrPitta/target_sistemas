import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Exercicio1 from './pages/exercicio1';
import Exercicio2 from './pages/exercicio2';
import Exercicio3 from './pages/exercicio3';
import Exercicio4 from './pages/exercicio4';
import Exercicio5 from './pages/exercicio5';

const buttonStyle = {
  backgroundColor: '#4CAF50',  // Cor de fundo verde
  border: 'none',
  color: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
};

function App() {
  return (
    <Router>
       <nav style={{ backgroundColor: '#282C34', marginTop: '-18px', marginBottom: '-18px' }}>
      <ul style={{ display: 'flex', gap: '20px', padding: '10px' }}>
        <li>
          <Link to="/exercicio1">
            <button style={buttonStyle}>Exercício 1</button>
          </Link>
        </li>
        <li>
          <Link to="/exercicio2">
            <button style={buttonStyle}>Exercício 2</button>
          </Link>
        </li>
        <li>
          <Link to="/exercicio3">
            <button style={buttonStyle}>Exercício 3</button>
          </Link>
        </li>
        <li>
          <Link to="/exercicio4">
            <button style={buttonStyle}>Exercício 4</button>
          </Link>
        </li>
        <li>
          <Link to="/exercicio5">
            <button style={buttonStyle}>Exercício 5</button>
          </Link>
        </li>
      </ul>
    </nav>

      <Routes>
        <Route path="/exercicio1" element={<Exercicio1/>} />
        <Route path="/exercicio2" element={<Exercicio2 />} />
        <Route path="/exercicio3" element={<Exercicio3 />} />
        <Route path="/exercicio4" element={<Exercicio4 />} />
        <Route path="/exercicio5" element={<Exercicio5 />} />
      </Routes>
    </Router>
  );
}

export default App;

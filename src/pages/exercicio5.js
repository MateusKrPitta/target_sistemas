import React, { useState } from 'react';
import '../App.css';

function Exercicio5() {
  const [inputString, setInputString] = useState('');
  const [invertedString, setInvertedString] = useState('');

  const inverterString = (str) => {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    return stringInvertida;
  };


  const handleInvert = () => {
    const resultado = inverterString(inputString);
    setInvertedString(resultado);
  };

  return (
    <div className="App">
      <header className="App-header" style={{display:'flex', flexDirection:'column', gap:'10px'}}>
        <h1>Inversor de String</h1>
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Digite uma string"
        />
        <button onClick={handleInvert}>Inverter String</button>
        <p>String invertida: {invertedString}</p>
        
      </header>
    </div>
  );
}

export default Exercicio5;
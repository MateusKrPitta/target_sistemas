import '../App.css';
import React from 'react';

const Exercicio1 = () => {
    const INDICE = 13;
    let SOMA = 0;  
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return (
        <div className="App">
            
            <header className="App-header">
                <p>
                    A soma dos números de 1 a {INDICE} é: {SOMA}
                </p>

            </header>
        </div>
    )
}

export default Exercicio1
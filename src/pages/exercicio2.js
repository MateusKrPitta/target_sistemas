import '../App.css';
import React, { useState } from 'react';

const Exercicio2 = () => {
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState('');

    const calcularFibonacci = (num) => {
        let fib = [0, 1];

        while (fib[fib.length - 1] < num) {
            let nextFib = fib[fib.length - 1] + fib[fib.length - 2];
            fib.push(nextFib);
        }

        if (fib.includes(num)) {
            setResultado(`${num} pertence à sequência de Fibonacci.`);
        } else {
            setResultado(`${num} não pertence à sequência de Fibonacci.`);
        }
    };

    const handleInputChange = (event) => {
        setNumero(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        calcularFibonacci(numero);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Verificador de Fibonacci</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={numero}
                        onChange={handleInputChange}
                        placeholder="Informe um número"
                    />
                    <button type="submit">Verificar</button>
                </form>
                {resultado && <p>{resultado}</p>}

            </header>
        </div>
    )
}

export default Exercicio2
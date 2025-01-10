import React, { useEffect, useState } from 'react';
import '../App.css';

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function Exercicio4() {
    const [percentuais, setPercentuais] = useState({});

    useEffect(() => {
        calcularPercentuais();
    }, []);

    const calcularPercentuais = () => {
        const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
        
        const percentuais = {};
        for (const estado in faturamentoPorEstado) {
            percentuais[estado] = ((faturamentoPorEstado[estado] / totalFaturamento) * 100).toFixed(2) + '%';
        }
        
        setPercentuais(percentuais);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Percentual de Faturamento por Estado</h1>
                <ul>
                    {Object.entries(percentuais).map(([estado, percentual]) => (
                        <li key={estado}>
                            {estado}: {percentual}
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default Exercicio4;
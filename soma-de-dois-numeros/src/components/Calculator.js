// Importa o módulo React e a função useState do pacote 'react'
import React, { useState } from 'react';
// Importa o arquivo de estilo CSS para o componente Calculator
import './Calculator.css';
// Declaração do componente Calculator como uma função arrow
const Calculator = () => {
// Define três estados utilizando a função useState do React
const [num1, setNum1] = useState(''); // Estado para armazenar o primeiro número
const [num2, setNum2] = useState(''); // Estado para armazenar o segundo número
const [result, setResult] = useState(''); // Estado para armazenar o resultado da soma
// Função para lidar com o evento de clique no botão de soma
const handleCalculate = () => {
// Calcula a soma dos dois números convertendo-os para números de ponto flutuante
const sum = parseFloat(num1) + parseFloat(num2);
// Define o resultado da soma no estado 'result'
setResult(sum);
};
//Criando o Primeiro Projeto Enviando Dados
React
// Retorno do JSX que representa a interface do componente Calculator
return (
<div className="calculator"> {/* Div com a classe CSS 'calculator' */}
{/* Input para inserir o primeiro número */}
<input
type="number" // Tipo de input é número
value={num1} // Valor do input é definido pelo estado 'num1'
onChange={(e) => setNum1(e.target.value)} // Função de callback para atualizar o estado 'num1' quando o valor do input muda
placeholder="Digite o primeiro número" // Placeholder do input
/>
{/* Input para inserir o segundo número */}
<input
type="number" // Tipo de input é número
value={num2} // Valor do input é definido pelo estado 'num2'
onChange={(e) => setNum2(e.target.value)} // Função de callback para atualizar o estado 'num2' quando o valor do input muda
placeholder="Digite o segundo número" // Placeholder do input
/>
{/* Botão para realizar a soma */}
<button onClick={handleCalculate}>Somar</button> {/* Função de callback para o evento de clique no botão */}
{/* Parágrafo para exibir o resultado da soma */}
<p>Resultado: {result}</p> {/* Exibe o resultado da soma */}
</div>
);
};
// Exporta o componente Calculator para ser utilizado em outros lugares da aplicação
export default Calculator;

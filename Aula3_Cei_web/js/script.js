/* Calcular quadrado */ 

document.getElementById('numeroForm').addEventListener('submit', function(event)
{
event.preventDefault(); // Impede o envio do formulário
// Obtém o valor do número digitado
const numero = parseFloat(document.getElementById('numero').value);
// Chama a função para calcular o quadrado
const resultado = calcularQuadrado(numero);
// Exibe o resultado na página
document.getElementById('resultado').textContent = resultado;
});
function calcularQuadrado(numero) {
return numero * numero;
}


/* calcular cubo */

document.getElementById('numeroFormcubo').addEventListener('submit', function(event)
{
event.preventDefault(); // Impede o envio do formulário
// Obtém o valor do número digitado
const numerocubo = parseFloat(document.getElementById('numerocubo').value);
// Chama a função para calcular o quadrado
const resultadocubo = calcularCubo(numerocubo);
// Exibe o resultado na página
document.getElementById('resultadocubo').textContent = resultadocubo;
});
function calcularCubo(numerocubo) {
return numerocubo * numerocubo * numerocubo;
}

var valor; 

var cont; 

valor=prompt('Digite um valor e Tecle enter');


/* ------------------ Estrutura de Decisão ------------------
if(valor % 2 == 0){
    document.write('Valor atual é par '+valor);
} else {
    document.write('o valor atual é impar '+valor);
}
document.write(' O valor Atual é '+valor);
------------------------------------------------------------- */

for (cont=1; cont<=valor; cont++){
    if(cont % 2 == 0){
        document.write(' <br><p style = color:green>Valor atual é par '+cont);
    } else {
        document.write(' <br><p style = color:red> O valor atual é impar '+cont);
    }
}

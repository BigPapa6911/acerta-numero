const menor = 1;
const maior = 1000;
const num = numeroAleatorio();

function numeroAleatorio(){

    return parseInt(Math.random()*maior + 1);

}

console.log(num);

const maiorValor = document.querySelector('#maior-valor');

maiorValor.innerHTML = maior;

const menorValor = document.querySelector('#menor-valor');

menorValor.innerHTML = menor;

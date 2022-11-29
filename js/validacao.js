function verificaValor(fala){

    const numero = +fala;

    if (chuteInvalido(numero)){
        numeroChute.innerHTML += '<div>Valor invalido</div>';
        return
    }

    if(valorMaiorouMenor(numero)){
        numeroChute.innerHTML += `<div>Valor invalido: numero precisa estar entre ${menor} e ${maior}</div>`;
        return
    }

    if(numero === num){
        document.body.innerHTML = `
            <h2>Você acertou o numero!</h2>
            <h3>O numero era : ${num}</h3>

            <button id="restart" class="botaoJogar">Jogar de novo</button>
        `
    }else if(numero < num){
        numeroChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> 
        `
    }else if(numero > num){
        numeroChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> 
        `
    }
}

function chuteInvalido(numero){
    return  Number.isNaN(numero);
}

function valorMaiorouMenor(numero){
    return numero > maior || numero < menor;
}

document.body.addEventListener('click', mouse=>{
    if(mouse.target.id == 'restart'){
        window.location.reload();
    }
})
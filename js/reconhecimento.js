const numeroChute = document.querySelector('#chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(fala){
    const chute =fala.results[0][0].transcript;

    exibeChute(chute);

    verificaValor(chute);
}


function exibeChute(numero){

    numeroChute.innerHTML = `
    <div> Você disse:</div>
    <span class ="box"> ${numero}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
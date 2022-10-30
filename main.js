function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];
    //'#som_{instrumento}' template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Espaço' || evento.code === 'Enter') { 
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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
}



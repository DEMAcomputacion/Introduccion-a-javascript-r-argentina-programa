const $hora = document.querySelectorAll('.hora');
const $minutos = document.querySelectorAll('.minutos');
const $segundos = document.querySelectorAll('.segundos');
let horas = 0;
let minutos = 0;
let segundos = 0;

const $calcular = document.querySelector("#calcular");
$calcular.onclick = function(){
    sumarSegundos($segundos);
    sumarMinutos($minutos);
    sumarHoras($hora);
    const $texto = document.querySelector("#texto");
    $texto.innerText = `La suma del tiempo de todos los videos es: ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    return false;
}

function sumarSegundos($segundos){
    for(let i = 0; i < $segundos.length; i++){
        segundos += Number($segundos[i].value);
    }
    minutos += Math.floor(segundos / 60);
    segundos = segundos % 60;
return segundos;
}

function sumarMinutos($minutos){
    for(let i = 0; i < $minutos.length; i++){
        minutos += Number($minutos[i].value);
    }
    horas += Math.floor(minutos / 60);
    minutos = minutos % 60;
return minutos;
}

function sumarHoras($hora){
    for(let i = 0; i < $hora.length; i++){
        horas += Number($hora[i].value);
    }
return horas;
}


/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $form = document.querySelector("#integrantes");
const $botonSiguiente = document.querySelector("#botonSiguiente");
const $botonCalcular = $form.botonCalcular;
const $botonResetear = $form.botonResetear;
const $labelErrores = document.querySelector("#mensajeError");
let objInputs = new Object;
let promedio = 0;
let mayorEdad = 0;
let menorEdad = Infinity;


$botonSiguiente.onclick = function(event){
    const cantidadIntegrantes = Number($form.cantidadIntegrantes.value);
    validarNumeroIntegrantes(cantidadIntegrantes)
    event.preventDefault();
}

$botonCalcular.onclick = function(event){
    const cantidadIntegrantes = Number($form.cantidadIntegrantes.value);
    validarEdadesIntegrantes(cantidadIntegrantes);
    validarEdadesIntegrantes(cantidadIntegrantes) === 0 ? $botonCalcular.disabled = true : "";
    event.preventDefault();
}

$botonResetear.onclick = function(){
    const cantidadIntegrantes = Number($form.cantidadIntegrantes.value);
    borrarInputs(cantidadIntegrantes);
    ocultarResultados();
    resetearResultadosOperaciones();
    ocultarBotonesPie();
}

function validarNumeroIntegrantes(cantidadIntegrantes){
    if(/^[0-9]{1,2}$/.test(cantidadIntegrantes) && cantidadIntegrantes != 0){
        $form.cantidadIntegrantes.className = "inputTxt";
        $labelErrores.innerText = "";
        crearInpus(cantidadIntegrantes);
        return "";
    }else{
        $form.cantidadIntegrantes.className = "error";
        $labelErrores.innerText = "* El campo solo acepta numeros entre 1 y 99";
        return "* El campo solo acepta numeros entre 1 y 99";
    }
}

function crearInpus(cantidadIntegrantes){
    if(!document.querySelector("#input1")){
        const $div = document.querySelector("#inputsIntegrantes");
        $div.className = "";
        for(let i = 0; i < cantidadIntegrantes; i++){
            const $p = document.createElement('p');
            const $label = document.createElement('label');
            $label.id = `label${i+1}`;
            $label.textContent = `Edad integrante #${i+1} `;
            const $input = document.createElement('input');
            $input.id = `input${i+1}`;
            $div.appendChild($p);
            $p.appendChild($label);
            $p.appendChild($input);
        }
    agregarBotonesPie();
    }
}

function agregarBotonesPie(){
    $form.botonCalcular.className = "";
    $form.botonResetear.className = "";
}

function ocultarBotonesPie(){
    $form.botonCalcular.className = "oculto";
    $form.botonResetear.className = "oculto";
}

function validarEdadesIntegrantes(cantidadIntegrantes){
    let errores = 0;
    for(let i=0; i < cantidadIntegrantes; i++){
        let nombreInput = "#input"+(i+1);
        let valorInput = Number(document.querySelector(nombreInput).value);
        if(valorInput === 0){
            document.querySelector(nombreInput).className = "errorEdad";
            textError = "* El campo no puede estar vacio"
            errores = 1;
            $labelErrores.innerText = textError;
            return "* El campo no puede estar vacio"
        }else if(valorInput < 0 || valorInput > 120){
            document.querySelector(nombreInput).className = "errorEdad";
            textError = "* El campo solo acepta numeros entre 1 y 120";
            $labelErrores.innerText = textError;
            errores = 1;
            return "* El campo solo acepta numeros entre 1 y 120"
        }else if(!/^[0-9]{1,3}$/.test(valorInput)){
            document.querySelector(nombreInput).className = "errorEdad";
            textError = "* El campo no acepta simbolos, solo numeros entre 1 y 120";
            $labelErrores.innerText = textError;
            errores = 1;
            return "* El campo no acepta simbolos, solo numeros entre 1 y 120";
        }
        
        if(errores === 0){
            $labelErrores.innerText = "";
            document.querySelector(nombreInput).className = "";
            objInputs[`input${i+1}`] = valorInput;
        }
    }
    
    if(Object.keys(objInputs).length === cantidadIntegrantes){
    llamarFuncionesCalculos(objInputs);
    }
    return errores;

}

function llamarFuncionesCalculos(objInputs){
    obtenerMayorEdad(objInputs);
    obtenerMenorEdad(objInputs);
    obtenerPromedioEdad(objInputs);
    mostarCalculos();
}

function obtenerMayorEdad(objInputs){
    Object.values(objInputs).forEach(function(mayor){
       mayor > mayorEdad ? mayorEdad = mayor : "";
    });
}

function obtenerMenorEdad(objInputs){
    Object.values(objInputs).forEach(function(menor){
       menor < menorEdad ? menorEdad = menor : "";
    });
}

function obtenerPromedioEdad(objInputs){
    let sumatoria = 0;
    Object.values(objInputs).forEach(function(nroActual){
       sumatoria += nroActual;
    });
    promedio = sumatoria / Object.keys(objInputs).length;
}

function mostarCalculos() {
    document.querySelector("#mostrarCalculos").className = "";
    document.querySelector("#mayorEdad").innerText = `El integrante con mayor edad tiene ${mayorEdad} años`;
    document.querySelector("#menorEdad").innerText = `El integrante con mayor edad tiene ${menorEdad} años`;
    document.querySelector("#promedioEdad").innerText = `El promedio de edades es ${promedio} años`;
}

function borrarInputs(cantidadIntegrantes){
    for(let i = 1; i < cantidadIntegrantes + 1 ; i++){
        let inputId = "#input" + i;
        let labelId = "#label" + i;
        document.querySelector(labelId).remove();
        document.querySelector(inputId).remove();
    }
}

function ocultarResultados(){
    document.querySelector("#inputsIntegrantes").className = "oculto";
    document.querySelector("#mostrarCalculos").className = "oculto";
}

function resetearResultadosOperaciones(){
    let objInputs = new Object;
    let promedio = 0;
    let mayorEdad = 0;
    let menorEdad = Infinity;
}

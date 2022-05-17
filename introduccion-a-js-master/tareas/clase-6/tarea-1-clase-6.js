/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const $numeroIntegrantes = document.querySelector("#numeroIntegrantes");
const $form = document.querySelector("#formulario");
let todosLosInputs;

document.querySelector('#enviar').onclick = function() {
    const nroIntegrantes = Number($numeroIntegrantes.value);
    crearCampos(nroIntegrantes);
    esperaCalcular(nroIntegrantes)
}

function crearCampos(nroIntegrantes){
    
    for(let i = 0; i < nroIntegrantes; i++){
        const $div = document.createElement("div");
        $div.classList = "divs";
        
        const $label = document.createElement("label");
        $label.classList = "labels";
        $label.innerText = `Ingrese la edad del integrante numero ${i+1}  `;
        
        const $input = document.createElement("input");
        $input.classList = "inputs"
        $input.id = "input" + [i];
        $input.type = "number"

        $form.appendChild($label);
        $form.appendChild($input);
        $form.appendChild($div);
    }

    const $botonCalcular = document.createElement("button");
    $botonCalcular.id = "calcular";
    $botonCalcular.innerText = "Calcular";
    $form.appendChild($botonCalcular);
return false;

}

function esperaCalcular(nroIntegrantes){
    let arrayInputs = [];
    let selector
    document.querySelector('#calcular').onclick =function(){
        for(let i = 0; i < nroIntegrantes; i++){
        selector = "#input" + i;
        let elinput = document.querySelector(selector).value;
        arrayInputs[i] = elinput;
        }
        //Llama a la funcion que realiza los calculos
        calculos(arrayInputs)
    }
}

function calculos(arrayInputs){
    let menorEdad = Infinity;
    let mayorEdad = 0;
    let sumatoria = 0;
    let promedio;
    //Calcula el menor, mayor y promedio
    for(let i = 0; i < arrayInputs.length; i++){
        let numeroActual = Number(arrayInputs[i]);
        numeroActual < menorEdad ? menorEdad = numeroActual : "";
        numeroActual > mayorEdad ? mayorEdad = numeroActual : "";
        sumatoria += numeroActual;
    }
    promedio = sumatoria / arrayInputs.length;
    //Llama a la funcion que crea los campos de texto para mostrar los resultados
    creaTextosResultados(menorEdad, mayorEdad, promedio);
}

function creaTextosResultados(menorEdad, mayorEdad, promedio){
    for (let i = 0; i < 3; i++){
        const $div = document.createElement("div");
        const $strong = document.createElement("strong");
        $strong.id = "strong" + [i];
        $form.appendChild($div);
        $form.appendChild($strong);
    }
    document.querySelector("#strong0").innerText = `La edad menor del grupo familiar es ${menorEdad}`;
    document.querySelector("#strong1").innerText = `La edad mayor del grupo familiar es ${mayorEdad}`;
    document.querySelector("#strong2").innerText = `El promedio de edad del grupo familiar es ${promedio}`;
}

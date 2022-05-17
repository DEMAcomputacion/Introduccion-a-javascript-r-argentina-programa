/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector("#botonAgregar");
const $botonQuitar = document.querySelector("#botonQuitar");
const $divNuevosInputs = document.querySelector("#divNuevosInputs");
const $divBotonCalcular = document.querySelector("#divBotonCalcular")

const $salarioMenor = document.querySelector("#salarioMenor");
const $salarioMayor = document.querySelector("#salarioMayor");
const $promedioAnual = document.querySelector("#promedioAnual");
const $promedioMensual = document.querySelector("#promedioMensual");

let cantidadIntegrantes = 0;
agregaCalcular();
const $botonCalcular = document.querySelector("#botonCalcular");
ocultarBotonCalcular();

$botonAgregar.onclick = function(){
  
    cantidadIntegrantes += 1;
    agregaUnInput(cantidadIntegrantes);
    if(cantidadIntegrantes > 0){
        mostrarBotonCalcular();
    }
}

function agregaUnInput(cantidadIntegrantes){
    const $div = document.createElement("div");
    $div.id = "div" + cantidadIntegrantes;
    const $label = document.createElement("label");
    $label.id = "label" + cantidadIntegrantes;
    const $input = document.createElement("input");
    $input.id = "input" + cantidadIntegrantes;
    $divNuevosInputs.appendChild($div);
    $divNuevosInputs.appendChild($label);
    $label.innerText = "Ingresos anuales del integrante # " + cantidadIntegrantes;
    $divNuevosInputs.appendChild($input)
    return cantidadIntegrantes;
}

function agregaCalcular(){
    const $botonCalcular = document.createElement("button");
    $botonCalcular.id ="botonCalcular";
    $botonCalcular.class =" ";
    $botonCalcular.innerText = "Calcular";
    $divBotonCalcular.appendChild($botonCalcular);
}

$botonQuitar.onclick = function(){
    
    if(cantidadIntegrantes > 0){
    quitarUnInput(cantidadIntegrantes);
    cantidadIntegrantes -= 1;
        if(cantidadIntegrantes === 0){
            ocultarBotonCalcular();
            ocultarResultados();
        }   
    }
}

function quitarUnInput(cantidadIntegrantes){
    const $div = document.querySelector("#div" + cantidadIntegrantes);
    $div.remove();
    const $label = document.querySelector("#label" + cantidadIntegrantes);
    $label.remove();
    const $input = document.querySelector("#input" + cantidadIntegrantes);
    $input.remove();
    return cantidadIntegrantes;
}

function ocultarBotonCalcular(){
    const $botonCalcular = document.querySelector("#botonCalcular");
    $botonCalcular.className = "oculto"
}

function mostrarBotonCalcular(){
    const $botonCalcular = document.querySelector("#botonCalcular");
    $botonCalcular.className = " "
}

$botonCalcular.onclick = function(){
    preparaArray(cantidadIntegrantes)
}

function preparaArray(cantidadIntegrantes){
    let arrayInputs = [];
    let selectorInput
        for(let i = 0; i < cantidadIntegrantes; i++){
        selectorInput = "#input" + (i + 1);
        let valorInput = document.querySelector(selectorInput).value;

            if(valorInput == null || valorInput.length == 0){
            }else{
                arrayInputs.push(valorInput);
            }
        }
    //Llama a la funcion que realiza los calculos si hay algun campo lleno
    arrayInputs.length != 0 ? hacerCalculos(arrayInputs) : "";
    
}

function hacerCalculos(arrayInputs){
    let menorSalario = Infinity;
    let mayorSalario = 0;
    let sumatoria = 0;
    let promedioAnual;
    let promedioMensual;

    //Calcula el menor, mayor y promedio
    for(let i = 0; i < arrayInputs.length; i++){
        let inputActual = "input" + i;
        let numeroActual = Number(arrayInputs[i]);
        numeroActual < menorSalario ? menorSalario = numeroActual : "";
        numeroActual > mayorSalario ? mayorSalario = numeroActual : "";
        sumatoria += numeroActual;
    }
    promedioAnual = sumatoria / arrayInputs.length;
    promedioMensual = promedioAnual / 12;

    //Llama a la funcion que muestra los resultados
    muestraResultados(menorSalario, mayorSalario, promedioAnual, promedioMensual)
}

function muestraResultados(menorSalario, mayorSalario, promedioAnual, promedioMensual){
   // Quita si estaban ocultos
   $salarioMenor.classList = "";
   $salarioMayor.classList = "";
   $promedioAnual.classList = "";
   $promedioMensual.classList = "";

   //Textos de resultados
   $salarioMenor.innerText = `El salario menor es: ${menorSalario}`;
   $salarioMayor.innerText = `El salario mayor es: ${mayorSalario}`;
   $promedioAnual.innerText = `El promedio anual es: ${promedioAnual.toFixed(2)}`;
   $promedioMensual.innerText = `El promedio menual es: ${promedioMensual.toFixed(2)}`;
}

function ocultarResultados(){
    $salarioMenor.classList = "oculto";
    $salarioMayor.classList = "oculto";
    $promedioAnual.classList = "oculto";
    $promedioMensual.classList = "oculto";
}

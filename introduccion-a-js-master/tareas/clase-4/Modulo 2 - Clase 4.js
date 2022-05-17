const datosParaPromediar = [5, 8, 9, 9, 8, 2];
let sumatoriaNotas = 0;
let promedio = 1;

function calcularPromedio(datosParaProm){
    for(let i=0; i < datosParaProm.length; i++){
        sumatoriaNotas = sumatoriaNotas + datosParaProm[i];
    }
    promedio = sumatoriaNotas / datosParaProm.length;
    console.log(promedio);
}

calcularPromedio(datosParaPromediar);

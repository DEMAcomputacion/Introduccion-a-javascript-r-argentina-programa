const $lista = document.querySelectorAll("li");

let suma = 0;
let promedio;
let menor = Infinity;
let mayor = 0;
let moda = 0;
let repet = 0;

for(let i = 0; i < $lista.length; i++){
    // suma todos los campos
    let numeroActual = Number($lista[i].innerText)
    suma += Number($lista[i].innerText);
    // calcula el menor
    numeroActual < menor ? menor = numeroActual : "";
    // calcula el mayor
    numeroActual > mayor ? mayor = numeroActual : "";
    // calcula la moda (esto no esta listo)
    for(let j = i+1; j < $lista.length; j++){
       Number($lista[i].innerText) === Number($lista[j].innerText) ? repet = Number($lista[j].innerText) : "";
    }
}
promedio = suma / $lista.length;
console.log(suma);
document.querySelector("#em1Promedio").innerText = `El promedio es ${promedio}`;
document.querySelector("#em2Menor").innerText = `El numero menor es ${menor}`;
document.querySelector("#em3Mayor").innerText = `El numero mayor es ${mayor}`;
document.querySelector("#em4Moda").innerText = `El numero que mas se repite es ${repet}`;

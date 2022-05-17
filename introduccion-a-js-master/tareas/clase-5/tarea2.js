const $h1 = document.querySelector('#saludo');
const $enviar = document.querySelector('#enviar');

$enviar.onclick = function(){
    const $nombreUsuario = document.querySelector("#nombreUsuario").value;
    const $edadUsuario = Number(document.querySelector("#edadUsuario").value);
    cambiarTexto($nombreUsuario, $edadUsuario, $h1);
    return false;
}

function cambiarTexto($nombreUsuario, $edadUsuario, $h1) {
    const $texto = document.querySelector("#texto");
    $h1.innerText = `Bienvenido ${$nombreUsuario}`;
    $texto.innerText = `Hola ${$nombreUsuario}, tienes ${$edadUsuario} años`;
}

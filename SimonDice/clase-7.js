const $formulario = document.querySelector('#carta-a-santa');

$formulario.submit.onclick = function(event){
    validarForm();
    event.preventDefault();

}

function validarForm(){
    let cuentaErrores = 0;
    const nombre = $formulario.nombre.value;
    validarNombre(nombre);
    const ciudad = $formulario.ciudad.value;
    validarCiudad(ciudad);
    const descripcionRegalo = $formulario['descripcion-regalo'].value;
    validarDescripcionRegalo(descripcionRegalo);
    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        "descripcion-regalo": validarDescripcionRegalo(descripcionRegalo)
      };
    manejarErrores(errores);
    
    const validacionFormulario = manejarErrores(errores) === 0;
    if(validacionFormulario){
       enviarFormulario();
    }
}

function validarNombre(nombre){
    
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }
    
    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }
    
    if(!/^[a-z]+$/i.test(nombre)){
        return 'Este campo solo puede contener letras';
    }else{
        return "";
    }
}

function validarCiudad(ciudad){
    if(ciudad != ""){
        return "";
    }else{
        return "No se ha seleccionado ninguna ciudad";
    }
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return 'El campo descripcion no puede estar vacio'
    }
    if(descripcionRegalo.length > 100){
        return 'El campo descripcion no puede tener mas de 100 caracteres'
    }
    if(!/^[A-z0-9]{1,100}$/.test(descripcionRegalo)){
        return 'El campo solo debe contener letras y numeros';
    }else{
        return "";
    }
}

function manejarErrores(errores){
    
    let cantidadErrores = 0;
    Object.keys(errores).forEach(function(key) {
        
        if(errores[key]){
            $formulario[key].className = "error";
            cantidadErrores ++;
        }else{
            $formulario[key].className = "";    
        }
    });

    listarErrores(errores);
    return cantidadErrores;
}

function listarErrores(errores){
    const $contenedorTextoErrores = document.querySelector("#errores");
    const $allLi = $contenedorTextoErrores.querySelectorAll("li");
    
    if($allLi.length != 0){
        for(let i = 0; i < $allLi.length; i++){
            $allLi[i].remove();
        }
    }
    
    Object.keys(errores).forEach(function(key) {
        if(errores[key]){
            const $li = document.createElement("li");
            $contenedorTextoErrores.appendChild($li);
            $li.innerText = errores[key];
        }
    });
}

function enviarFormulario(){
    const $muestraExito = document.querySelector("#exito");
    $muestraExito.className ="";
    $formulario.className = "oculto";
    window.setTimeout(redireccionaWhislist, 5000);
}

function redireccionaWhislist() {
    window.location.href = './wishlist.html';
}
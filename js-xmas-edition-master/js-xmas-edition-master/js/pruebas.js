function probarValidarNombre() {
    console.assert(
        validarNombre('') === "El campo de nombre no puede estar vacio",
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaa') === "El campo Nombre no puede contener mas de 50 caracteres",
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre('123') === "Este campo solo puede contener letras",
        'Validar nombre no validó que el nombre no contenga numeros',
    );

    console.assert(
        validarNombre('.,.,.') === "Este campo solo puede contener letras",
        'Validar nombre no validó que el nombre contenga solo letras',
    );

    console.assert(
        validarNombre('David') === "",
        'Validar no valido aunque el nombre sea valido',
    );
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === "No se ha seleccionado ninguna ciudad",
        'Validar ciudad no valido que se haya seleccionado alguna ciudad',
    );

    console.assert(
        validarCiudad("Mendoza") === "",
        "Validar ciudad no se ha verificado con un string verdadero",
    );
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === "El campo descripcion no puede estar vacio",
        'Validar descripcion regalo no valido que se hayan ingresado datos',
    );
    
    console.assert(
        validarDescripcionRegalo('asdqwe123qweasdqwe123qweasdqwe123qweasdqwe123qweasdqwe123qweasdqwe123qweasdqwe123qweasdqwe123qweasdqwe123') === "El campo descripcion no puede tener mas de 100 caracteres",
        'Validar descripcion regalo no valido que descripcion no tenga mas de 100 caracteres',
    );
    
    console.assert(
        validarDescripcionRegalo('.,.,.') === "El campo solo debe contener letras y numeros",
        'Validar descripcion regalo no valido que se hayan ingresado solo letras o numeros',
    );

    console.assert(
        validarDescripcionRegalo("hola") === "",
        'Validar descripcion regalo no valido aun con un valor veradero',
    );
}


probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcionRegalo();

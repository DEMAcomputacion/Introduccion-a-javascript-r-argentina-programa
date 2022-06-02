function probarValidarNumeroIntegrantes() {
    console.assert(
        validarNumeroIntegrantes('') === "* El campo solo acepta numeros entre 1 y 99",
        'Validar numerdo de integrantes no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNumeroIntegrantes('.,.') === "* El campo solo acepta numeros entre 1 y 99",
        'Validar numerdo de integrantes no validó que no se ingresen simbolos',
    );

    console.assert(
        validarNumeroIntegrantes('123') === "* El campo solo acepta numeros entre 1 y 99",
        'Validar numerdo de integrantes no validó que el nombre sea mayor a 99',
    );

    console.assert(
        validarNumeroIntegrantes('-5') === "* El campo solo acepta numeros entre 1 y 99",
        'Validar numerdo de integrantes no validó que el nombre sea menor a 1',
    );

    console.assert(
        validarNumeroIntegrantes('10') === "",
        'Validar numerdo de integrantes no validó con un input válido',
    );
}

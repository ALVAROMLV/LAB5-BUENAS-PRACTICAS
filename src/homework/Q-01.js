(function () {
    /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES
       ADEMAS DE COMPROBAR SI USA LET O CONST,
      SE PUEDE REFACTORIZAR, ETC.
    */
    //lista de emails de usuarios de Meta-X
    var emails = [
        "email1@gmail.com",
        "email1@gmail.com",
        "email1@gmail.com"
    ];
    console.log(emails);
    //Lista de compras de un carrito
    var carItems = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(carItems);
    //funcion para sumar mas 3 a un numero y retornarlo
    var addThree = function (num) {
        return num + 3;
    };
    console.log(addThree(2));
    //funcion para capitalizar una palabra pasara por params
    //idente o refactorice de ser necesario
    //el resultado no deberia cambiar
    function capitalize(word) {
        var w = word.toLowerCase();
        var capitalized = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
        return capitalized;
    }
    console.log(capitalize("capricor"));
    //variable que alerta en caso de que algun evento suceda
    var eventOcurred = false;
    if (eventOcurred)
        console.log('event');
    //variable que se encarga de verificar 
    //si un usuario puede acceder o no
    var canAcces = true;
    if (canAcces)
        console.log('welcome');
    //variable para hallar el promedio de 3 numeros
    var average = (1 + 2 + 3) / 3;
    console.log(average);
    //variable que almacena el valor de PI
    var pi = 3.141592654;
    console.log(pi);
    //variabel que controla si un archivo es modificable 
    var editable = false;
    if (editable)
        console.log('edit this file?');
    //variable para almacenar el valor de e
    var eulerNumber = 2.718281828;
    console.log(eulerNumber);
})();

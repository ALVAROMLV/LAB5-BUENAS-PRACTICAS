(function () {
    /* APLICA DRY */
    //EX - 1
    function calculateOperation1(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    function calculateOperation2(x, y, z) {
        var sumResult = x + y;
        var multiplicationResult = sumResult * z;
        return multiplicationResult;
    }
    //RESULT
    function calculateOperation(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    console.log(calculateOperation(2, 3, 4)); // Ejemplo de uso
    // EX - 2
    function calculateRectangleArea(length, width) {
        return length * width;
    }
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }
    //RESULT2
    function calculateArea(shape) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (shape === "rectangule" && args.length === 2) {
            return args[0] * args[1]; //Area del rectangulo
        }
        else if (shape === "circle" && args.length === 1) {
            return Math.PI * args[0] * args[0]; //Area del circulo
        }
        else {
            throw new Error("Forma geometrica no reconocida o numero incorrecto de argumentos");
        }
    }
    console.log(calculateArea("rectangle", 5, 6)); // Ejemplo area de un rectángulo
    console.log(calculateArea("circle", 3)); // Ejemplo area de un circulo
    // EX - 3
    //No es necesario aumentar codigo en este ejercicio
    /*
      function validateEmail(email: string): boolean {
      //...some code for validate here
      return false;
    }
  
    function validateUsername(username: string): boolean {
      //...some code for validate here
      return false;
    }
    */
    //RESULT3
    function alwaysFalseValidator(value) {
        return false;
    }
    function validateEmail(email) {
        return alwaysFalseValidator(email);
    }
    function validateUsername(username) {
        return alwaysFalseValidator(username);
    }
})();

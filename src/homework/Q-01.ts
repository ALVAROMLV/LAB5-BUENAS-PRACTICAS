(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const emails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(emails);

  //Lista de compras de un carrito
  const carItems: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(carItems);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (num: number): number => {
    return num + 3;
  }

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    const w = word.toLowerCase();    
    const capitalized = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return capitalized;
  }

  console.log(capitalize("capricor"));
  
  //variable que alerta en caso de que algun evento suceda
  let eventOcurred: boolean = false;

  if(eventOcurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let canAcces: boolean = true;

  if(canAcces) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  //variable que almacena el valor de PI
  const pi: number = 3.141592654;

  console.log(pi);
  

  //variabel que controla si un archivo es modificable 
  let editable: boolean = false;

  if(editable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const eulerNumber: number = 2.718281828; 

  console.log(eulerNumber);


})();
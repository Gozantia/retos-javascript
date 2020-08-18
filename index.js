const esPalindromo = (inStr) => {
    //función regular para ingorar los espacios
    inStr =inStr.replace(/\W/g, '');
    //método para poner todos los caracteres en minúsculas
    inStr =inStr.toLowerCase().match(/[a-z0-9]/g);
    //Si el primer caracter de nuestro texto es diferente al caracter del último 
    // caracter de nuestro texto y así sucesivamente hasta llegar al fin del texto, no es un string Sino, sí lo es.
    for (let i=0; i<inStr.length; i+=1) {
        if (inStr[i] !==inStr[inStr.length -1 -i]) {
            return 'Uy, qué mal. Esta palabra no es palíndromo ¡Síguelo intentando!';
        } 
    }
    return 'Esta palabra si que es un palíndromo ¡Felicitaciones!';
}
let btn_palindromo = document.getElementById("btn_palindromo");
btn_palindromo.addEventListener("click", () => {
  document.getElementById("palindromo_response").innerHTML = `<p>${esPalindromo(
    document.getElementById("palindromo_text").value
  )}</p>`;
});

//Romanos

function convertToRoman(num) {
    const numerals = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
    };
//    Aloja el número respuesta 
    let romanized = '';
//    Pone el arreglo al revés 
    const decimalKeys = Object.keys(numerals).reverse();
    
    decimalKeys.forEach(key => {
      while (key <= num){
        romanized += numerals[key];
        num -= key;
      }
    });
  
    return romanized;
}

  let btn_romanos = document.getElementById("btn_romanos");
  btn_romanos.addEventListener("click", () => {
    document.getElementById("romanos_response").innerHTML = `<p>${convertToRoman(
    parseInt(document.getElementById("romanos_number").value)
  )}</p>`;
});

//Caesars
function rot13(str) {
    // Divide el string en una matriz de caracteres
    return (
      str
        .split("")
        // Itera sobre cada carácter de la matriz
        .map.call(str, function(char) {
          // Convierte el caracter en un caracter de código
          var x = char.charCodeAt(0);
          // Valida si el caracter está entre A y Z
          if (x < 65 || x > 90) {
            return String.fromCharCode(x); // Devuelve el caracter convertido
          }
          //si el código carácter es menor que 78, avance 13 lugares
          else if (x < 78) {
            return String.fromCharCode(x + 13);
          }
          // De lo contrario, mueva el carácter 13 lugares hacia atrás
          return String.fromCharCode(x - 13);
        })
        .join("")
    ); // Reuna el arreglo en el string
  }

let btn_caesar = document.getElementById("btn_caesar");
btn_caesar.addEventListener("click", () => {
  document.getElementById("caesar_response").innerHTML = `<p>${rot13(
    document.getElementById("caesar_text").value
  )}</p>`;
});

//phone Checker

const phoneCheck = (str) => { 
//CREA UNA EXPRESIÓN REGULAR CON LAS ACEPCIONES DEL NÚMERO ENTRADA
var regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
if (regex.test(str)) {   
    
    return  'Lo hiciste muy bien, bitch';
    }
return  'Lo hiciste muy mal, corazón';
  
}
    

let btn_phone = document.getElementById("btn_phone");
btn_phone.addEventListener("click", () => {
  document.getElementById(
    "phone_response"
  ).innerHTML = `<p>${phoneCheck(
    document.getElementById("phone_text").value
  )}</p>`;
});


//cambio exacto

  
  const currencyUnit = {
    //Se multiplica por 100 la moneda para no lidiar con
    //fraccionarios y evitar usar el método Math
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  
  function checkCashRegister(price, cash, cid) {
  //Resta el valor del precio al cambio  y 
  // se multiplica por 100 para continuar trabajando 
  // con números enteros. 
    let changeSum = cash * 100 - price * 100;
  //guarda el valor del cambio en una variable 
  // que será utilizada para los cálculos del cambio
    let changeSumCheck = changeSum;
 //Se declaran las variables donde se guardarán los resultados.
    let change = [];
    let status = '';
  //Guarda el total del efectivo de la registradora
    let cidSum = 0;
    // Filtra el arreglo 
    // remueve las denominaciones en cero y
    // se reversa el arreglo para empezar por la más alta
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();
   //Primero se calculará si la registradora tiene suficiente efectivo
  //para hacerlo va por cada una de las demonimaciones filtradas
  // ejecutando la siguiente función empezando por la de 100
    filteredCid.forEach(elem => {   
  // el elemento aquí será un arreglo que guarde dos indices:
  // la moneda (curr[0]) y la cantidad (currSum[1]*100)
  // se sigue todo multiplicando por 100
      let curr = elem[0];
      let currSum = elem[1] * 100;
      //en cada iteración 
      // el total del efectivo se le suma la cantidad de
      //  cada una de las denominaciones filtradas.
      cidSum += currSum;
      //Se declara la variable que alojará el valor a cambiar
      let amount = 0;
      //Al foreach le agregamos otro bucle que dice que si mientras 
      // el cambio sea mayor o igual al objeto de las 
      // denominaciones y mientras el total haya quedado mayor a cero
      while (changeSum >= currencyUnit[curr] && currSum > 0) {
      // Entonces si las dos condiciones se cumplen
      // la variable amount alojará la cantidad de 
      // denominaciones que estoy tomando de la 
      // registradora para hacer el cambio que a la vez
      // estoy incrementando cada vez que el cambio
      // sea mayor que la denominación.
        amount += currencyUnit[curr];
        //cada que el cambio sea mayor al indice de la denominacion
        //  disminuye a la siguiente denominación de 
        // atrás para delante.
        // Es decir pasa de la 100 a la de 20
        // Y también el total de las 
        // denominaciones será su resta del objeto inicial
        changeSum -= currencyUnit[curr];
        //Finalmente si el efectivo actual es mejor a cero
        // significa que no tenemos efectivo en ninguna 
        // denominación del filtro. 
        currSum -= currencyUnit[curr];
      }
      // Después de salir del bucle 
      // se darán  tantas monedas o billetes
      // de cada denominación como se pueda 

      //Aquí validamos si la cantidad es diferente de 0
      // pondremos en el arreglo change el nombre de la
      // denominación y la cantidad dividida para poner 
      // finalmente el valor en centavos.
      if (amount !== 0) {
        change.push([curr, amount / 100]);
      }
    });
  // Aquí validamos si el cambio es mayor a cero 
  // devolverá el estatus de fondos insuficientes.
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
  //Y el cambio será un arreglo vacío.
      change = [];
  //Si después de todo, el cambio queda igual a 0 y su
  // resta casa perfecto con la cantidad de efectivo.
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      //se cierra el caso
      status = 'CLOSED';
      //y el cambio será lo que queda
      change = cid;
      //sino sucede el estado seguirá abierto
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change };
  }
  document.getElementById("change_response"
  ).innerHTML = `<p>${
  checkCashRegister (36.5, 40, [["PENNY", 0.5],
  ["NICKEL", 12], ["DIME", 12], ["QUARTER", 23], ["ONE", 2],
  ["FIVE", 0], ["TEN", 1], ["TWENTY", 1], ["ONE HUNDRED", 2]
])}</p>`;

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
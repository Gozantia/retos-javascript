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

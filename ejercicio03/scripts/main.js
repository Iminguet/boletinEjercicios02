'use-strict';
// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo
// pasamos por parámetro para que nos indique si es o no un número primo, debe
// devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
// entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
// embargo, 17 si es primo.

//https://www.superprof.es/apuntes/escolar/matematicas/aritmetica/divisibilidad/numeros-primos.html
//criba deErástotenes

const numeroUsuario = parseInt(prompt('Introduce tu número'));

const primoOrNot = function (inputUsuario) {
  console.log((inputUsuario % 2) + ' dividido 2');
  console.log((inputUsuario % 3) + ' dividido 3');
  console.log((inputUsuario % 5) + ' dividido 5');
  console.log((inputUsuario % 7) + ' dividido 7');
  console.log((inputUsuario % 11) + ' dividido 11');
  // if (
  //   inputUsuario % 2 === 0 ||
  //   inputUsuario % 3 === 0 ||
  //   inputUsuario % 5 === 0 ||
  //   inputUsuario % 7 === 0 ||
  //   inputUsuario % 11 === 0 ||
  //   'No es número primo'
  // );
  // {
  //   return 'Es número primo';
  // }
};
primoOrNot(numeroUsuario);

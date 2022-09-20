'use-strict';

const userCantidadNumeros = parseInt(
  prompt('¿Cuantos números aleatorios quieres generar?')
);

const valor01 = parseInt(
  prompt('¿Entre que valores?, introduce el primer valor...')
);

const valor02 = parseInt(prompt('...introduce el segundo valor'));

const numerosRandom = (min, max) => {
  return parseInt(Math.random() * (max - min + 1) + min);
};

const llenarMostrarArray = (cantidadIteraciones, minimo, maximo) => {
  const arrayNumeros = [];
  let numeros = '';
  for (let i = 0; i < cantidadIteraciones; i++) {
    numeros = numerosRandom(minimo, maximo);
    arrayNumeros.push(numeros);
  }
  console.log(arrayNumeros);
};

llenarMostrarArray(userCantidadNumeros, valor01, valor02);

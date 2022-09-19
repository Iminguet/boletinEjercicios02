'use-strict';

const figuraUsuario = prompt(
  'Introduce la figura de la cual quieres calcular el área. ¿Circulo,triangulo o cuadrado?'
).toLocaleLowerCase();

const area = function (figura) {
  console.log(circulo(figura) || triangulo(figura) || cuadrado(figura));
};

const circulo = function (circle) {
  if (circle == 'circulo') {
    const radio = parseFloat(prompt('Introduce el rádio del circulo'));
    const resultado = radio ** 2 * Math.PI;
    return `El área de un circulo con radio ${radio} es de ${resultado}`;
  }
};

const triangulo = function (triangle) {
  if (triangle == 'triangulo') {
    const base = parseFloat(prompt('Introduce la base del triangulo'));
    const altura = parseFloat(prompt('Introduce la altura del triangulo'));
    const resultado = (base * altura) / 2;
    return `El área de un triangulo con base ${base} y altura  ${altura} es de ${resultado}`;
  }
};

const cuadrado = function (square) {
  if (square == 'cuadrado') {
    const lado = parseFloat(prompt('Introduce el lado del cuadrado'));

    const resultado = lado * lado;
    return `El área de un cuadrado con lado ${lado} es de ${resultado}`;
  }
};

area(figuraUsuario);

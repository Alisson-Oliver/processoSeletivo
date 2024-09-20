const pertenceFibonacci = require('./questões/fibonacci');
const existenciaA = require("./questões/existenciaA");

// Questão 1 - Fibonacci 
const numeroEscolhido = 21;
console.log(pertenceFibonacci(numeroEscolhido)); // Imprimir se numeroEscolhido pertence à sequência de Fibonacci

// Questão 2 - Existência de A
const string = "Olá";
console.log(existenciaA(string)); // Imprimir se a letra 'A' existe na string;

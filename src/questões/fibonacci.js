function pertenceFibonacci(numero){
    let numeroA = 0, numeroB = 1, proximoNumero = 0;

    // Se o número escolhido for 0 ou 1, ele pertence à sequência;
    if(numero === 0 || numero === 1){
        return `O número ${numero} pertence à sequência de Fibonacci`;
    }

    // Gerar a sequência de Fibonnacci e verificar se o número pertence a ela
    while(proximoNumero < numero){
        proximoNumero = numeroA + numeroB;
        numeroA = numeroB;
        numeroB = proximoNumero;
    }

    // Verificar se o número gerado é igual ao número escolhido
    if(proximoNumero === numero){
        return `O número ${numero} pertence à sequência de Fibonacci`; 
    } else{
        return `O número ${numero} não pertence à sequência de Fibonacci`;
    }
}

module.exports = pertenceFibonacci;
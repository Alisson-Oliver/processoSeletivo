function existenciaA(string) {
    if(typeof string != 'string'){
        console.log("Por favor, forneça uma string válida.");
        return;
    }

    //Array com todas as variações da letra 'A'
    const letrasA = ["a", "á", "à", "ã", "â", "A", "À", "Á", "Â", "Ã"];

    let letrasMinusculas = 0; 
    let letrasMaisculas = 0;
    // Se existir o valor muda para true
    let existe = false;
    
    // Separar cada letra da string
    const arrayString = string.trim().split("");
    
    arrayString.forEach(letra => {
        //Verificar se a letra está no array de letrasA
        if(letrasA.includes(letra)){
            existe = true;
            if(letra === letra.toUpperCase()){
                letrasMaisculas++;
            } else{
                letrasMinusculas++;
            }
        }
    });

    if (existe) {
        return `Existe a letra 'A' na string! Ocorrências de A: ${letrasMaisculas}, Ocorrências de a: ${letrasMinusculas}`;
    } else {
        return "Não existe letra 'A' na string!";
    }
}

module.exports = existenciaA;

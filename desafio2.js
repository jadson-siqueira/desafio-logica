let resultado = somar(200, 50)

let level = ""



function somar (numA, numB){
    
    let vitorias = numA - numB
    return vitorias

} 


if (resultado <= 10){
    level = "Ferro"
}
    else if (resultado >= 11 && resultado <= 20){
    level = "Bronze"
}
    else if (resultado >= 21 && resultado <= 50){
    level = "Prata"
}
    else if (resultado >= 51 && resultado <= 80){
    level = "ouro"
}
    else if (resultado >= 81 && resultado <= 90){
    level = "diamante"
}
    else if (resultado >= 91 && resultado <= 100){
    level = "lendario"
}
    else if (resultado >= 101){
    level = "imortal"
}

    else {
    console.log ("limite atingido")
}  
console.log("O heroi tem o saldo de " + resultado + " e está no nivel de  " + level)

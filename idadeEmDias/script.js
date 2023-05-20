function idadeEmDias(){
    let numero1 = parseInt(prompt("Digite sua idade em anos:"))
    let numero2 = parseInt(prompt("Digite quantos meses fazem desde o seu último aniversário:"))
    let numero3 = parseInt(prompt("Digite quantos dias passaram desde o seu último mêsversário:"))
    let dias = numero1 * 365 + numero2 * 30 + numero3;
    alert ("Esta é a sua idade em dias: " + dias)
}
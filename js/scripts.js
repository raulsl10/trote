function calcular(){
    //vamoscriar duas variaveis
    //js as variaveis nao possuem tipo
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso
    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    //recupera a quantidade de litros de leite
    leite = document.getElementById("leite").value
    kitAvulso = document.getElementById("kitAvulso").value
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite))+(30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso))
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
function mudarTexto(botao){
    botao. textContent= "Calculado";
}

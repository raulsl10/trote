function calcular(){
    //vamoscriar duas variaveis
    //js as variaveis nao possuem tipo
    let mascote, homenagem
    mascote = document.getElementById("mascote").value
    alert(mascote)
    homenagem = document.getElementById("homenagem").value
    alert(homenagem)
    let soma = Number(mascote) + Number(homenagem)
    alert (soma)
}

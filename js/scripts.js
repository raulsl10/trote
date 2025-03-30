function calcular(){
    //vamoscriar duas variaveis
    //js as variaveis nao possuem tipo
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso, arroz5Avulso, arroz1Avulso, feijao2Avulso, feijao1Avulso, macarraoAvulso, oleoAvulso, sangueAvulso, acaoSocial, fotoAs, fotoAcao;
    mascote = document.getElementById("mascote").value;
    homenagem = document.getElementById("homenagem").value;
    //recupera a quantidade de litros de leite
    leite = document.getElementById("leite").value;
    kitAvulso = document.getElementById("kitAvulso").value;
    suplementoAvulso = document.getElementById("suplementoAvulso").value;
    arroz5Avulso = document.getElementById("arroz5Avulso").value;
    arroz1Avulso = document.getElementById("arroz1Avulso").value; 
    feijao2Avulso = document.getElementById("feijao2Avulso").value;
    feijao1Avulso = document.getElementById("feijao1Avulso").value;
    macarraoAvulso = document.getElementById("macarraoAvulso").value;
    oleoAvulso = document.getElementById("oleoAvulso").value;
    sangueAvulso = document.getElementById("sangueAvulso").value;
    acaoSocial = document.getElementById("acaoSocial").value;
    fotoAs = document.getElementById("fotoAs").value;
    fotoAcao = document.getElementById("fotoAcao").value;

    let soma = Number(mascote) + Number(homenagem) + 
               (2 * Number(leite))+
               (30 * Number(kitAvulso)) + 
               (15 * Number(suplementoAvulso)) + 
               (5 * Number(arroz5Avulso)) + 
               (1 * Number(arroz1Avulso)) + 
               (2 * Number(feijao2Avulso)) + 
               (1 * Number(feijao1Avulso)) + 
               (0.5 * Number(macarraoAvulso)) + 
               (1 * Number(oleoAvulso)) + 
               (20 * Number(sangueAvulso)) + 
               (10 * Number(acaoSocial)) + 
               Number(fotoAs) + 
               Number(fotoAcao);
    document.getElementById("soma").innerHTML = `A soma é ${soma}`;
}
function mudarTexto(botao){
    botao. textContent= "Calculado";
}

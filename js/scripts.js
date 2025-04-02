function calcular(){
    //vamoscriar duas variaveis
    //js as variaveis nao possuem tipo
    let mascote, homenagem, leite, kit, suplemento, arroz5, arroz1, feijao2, feijao1, macarrao, oleo, sangue, acaoSocial, fotoAs, fotoAcao, soma, equipe
    mascote = Number (document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    //recupera a quantidade de litros de leite
    leite = Number (document.getElementById("leite").value)
    kit =Number (document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value)
    arroz5 = Number(document.getElementById("arroz5").value)
    arroz1 = Number(document.getElementById("arroz1").value)
    feijao2 = Number(document.getElementById("feijao2").value)
    feijao1 = Number(document.getElementById("feijao1").value)
    macarrao = Number(document.getElementById("macarrao").value)
    oleo = Number(document.getElementById("oleo").value)
    sangue = Number(document.getElementById("sangue").value)
    acaoSocial = Number(document.getElementById("acaoSocial").value)
    fotoAs = Number(document.getElementById("fotoAs").value)
    fotoAcao = Number(document.getElementById("fotoAcao").value)
    
    soma = mascote + homenagem + leite + (30 * (kit)) + suplemento + arroz5 + arroz1 
    equipe == document.getElementById("equipe").value
    if(equipe == "Laranja"){
        if(kit >= 97){
            soma = soma + 5000 + ((kit-97) * 30)
        }
        else if( kit >=78){
            soma = soma + 4000 + ((kit-78) * 30)
        }
        else if (kit >= 49){
            soma = soma + 2500 + ((kit-49) * 30)
        }
        else if(kit >=19){
            soma = soma + 1000 + ((kit-19) * 30)
        }
    }
    document.getElementById("soma").innerHTML = `A soma é ${soma}`;
}
function mudarTexto(botao){
    botao. textContent= "Calculado";
}
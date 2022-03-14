/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

function calcularValorCarro(){
    let valorFabrica = Number(document.getElementById('valorFabrica').value)
    let distribuidor = (valorFabrica * 28) / 100
    let impostos = (valorFabrica * 45) / 100
    let resultado = document.getElementById('res')

    if(valorFabrica > 0){
        let valorFinal = valorFabrica + distribuidor + impostos
        resultado.innerHTML = `O valor final do veículo ficou R$${valorFinal.toFixed(3)}`
    }
}
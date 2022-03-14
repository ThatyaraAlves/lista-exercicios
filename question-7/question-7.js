/**
 *  As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. 
 * Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

function calcularPrecoMaca(){
    let numeroMacas = document.getElementById('num').value
    let resultado = document.getElementById('res')

    let valorMacas = 1.30

    if(Number(numeroMacas) >= 12){
        valorMacas = 1.00
        
    }
    let valorCompra = Number(numeroMacas) * valorMacas
    resultado.innerHTML = `Total a pagar: R$${valorCompra.toFixed(2).replace('.',',')}`
}
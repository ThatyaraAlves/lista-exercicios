/**
 * Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

function calcular(){
    let a= document.getElementById('altura').value
    let b= document.getElementById('base').value
    let altura = Number(a)
    let base = Number(b)
    let resultado = document.getElementById('res')

    if(altura > 0 && base > 0){
        let area = base * altura
        resultado.innerHTML = `A area do retângulo correspondente é ${area} cm`
    }
    else{
        alert('Número inválido, porfavor digite um número válido')
    }
}
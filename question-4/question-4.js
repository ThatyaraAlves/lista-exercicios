/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
 * 
 *      mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5))/10
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

 function calcularMedia(){
    
    
    let nota1 = document.getElementById('nota1').value
    let nota2 = document.getElementById('nota2').value
    let nota3 = document.getElementById('nota3').value
    let resultado = document.getElementById('res')
    
    let verificaEspaçoBranco = nota1 == '' || nota2 == '' || nota3 == ''
    let verificaNotas = nota1 >10 || nota2 > 10 || nota3 > 10
    let verificaNotasNegativas = nota1 < 0 || nota2 < 0 || nota3 < 0

    if (verificaEspaçoBranco)
    {
         alert('Porfavor, preencha todos os campos')
         
     }
     else if (verificaNotas || verificaNotasNegativas) {
        alert('Não é possível calcular uma nota maior que 10 ou nota negativa')
     }
     else{
       
        let mediaFinal = ((Number(nota1) * 2) + (Number(nota2) * 3) + (Number(nota3) * 5))/10
    
        resultado.innerHTML = `A sua média final é ${mediaFinal}`
        
     }
 
    
 }
    
    
    
    
    

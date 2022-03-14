/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function imprimirInteiros(){
    let numero = document.getElementById('num').value
    let resultado = document.getElementById('res')
    resultado.innerHTML =''

    if( numero == '' || Number(numero) <= 0){
        alert('Porfavor, digite um número maior que 0')
    }
    else{
        let contador = 1
         while(contador <= Number(numero)){
            
            resultado.innerHTML += `&#x27A1 ${contador} ` 
            contador +=1
         }
        
         }

    }

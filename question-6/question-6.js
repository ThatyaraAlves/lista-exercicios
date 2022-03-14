/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
 *  
 * Obs: Utilize a interface html para receber os dados do usuário
 */

 function verificarValores() {
    let numero = document.getElementById('num').value
    let resultado = document.getElementById('res')

    if (numero == ''){
        alert('Não é possivel verificar com campos em braco, porfavor digite um número válido')
    }
    else{
        if(Number(numero) >= 0){
            resultado.innerHTML = 'É POSITIVO!'
        }
        else{
            resultado.innerHTML = 'É NEGATIVO'
        }
    }

}
/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function verificarValores(){
    let primeiroNumero = document.getElementById('num1').value
    let segundoNumero  = document.getElementById('num2').value
    let resultado = document.getElementById('res')
    let maior = 0
    
    if(Number(primeiroNumero) === Number(segundoNumero)){
        resultado.innerHTML = 'Valores iguais'
    }

    else if(Number(primeiroNumero) > Number(segundoNumero)){
        maior = primeiroNumero
        resultado.innerHTML = `O maior valor digitado foi o ${maior}`
    }
    else{
        maior = segundoNumero
        resultado.innerHTML = `O maior valor digitado foi o ${maior}`
    }

}
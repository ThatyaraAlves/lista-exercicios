/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function verificarValores() {
    let numero = document.getElementById('num').value
    let resultado = document.getElementById('res')

    if (numero == ''){
        alert('Não é possivel verificar com campos em braco, porfavor digite um número válido')
    }
    else{
        if(Number(numero) > 10){
            resultado.innerHTML = 'É MAIOR QUE 10!'
        }
        else{
            resultado.innerHTML = 'NÃO É MAIOR QUE 10!'
        }
    }

}

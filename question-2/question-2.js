/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

function calcular() {
    let sal = document.querySelector('input#salario').value
    let reaj = document.querySelector('input#reajuste').value
    let resultado = document.querySelector('div#res')
    let salario = Number(sal)
    let reajuste = Number(reaj)
    let reajusteCalculo = (salario * reajuste) / 100

    if(salario > 0 && reajuste > 0){
       let novoSalario = salario + reajusteCalculo
       resultado.innerHTML = `Com o reajuste de ${reajuste}% o valor do seu sálario ficou R$${novoSalario}`
    }
    else{
        alert('Porfavor, digite valores válidos')
    }

}
/**
 * A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
 * cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, 
 * o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
 * (considere que o mês possua 4 semanas exatas).   
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
function calcularHorasExtras() {
    let horasMensais = document.getElementById('horas-mensais').value
    let salarioPorHora = document.getElementById('salario-hora').value
    let resultado = document.getElementById('res')
    let salarioRegular = salarioPorHora * 160
    
    if(horasMensais == '' || salarioPorHora ==''){
        alert('Preencha os campos para prosseguir')
    }
    else if(Number(horasMensais) > 160){
        let horaExtra = (salarioPorHora / 2) * (horasMensais - 160)
        let salarioComHoraExtra = salarioRegular + horaExtra

        resultado.innerHTML = `O seu salário com o adicional das horas extras ficou R$ ${salarioComHoraExtra}`

    }
    else{
        resultado.innerHTML='Não há horas extras a acrescentar'
    }

}
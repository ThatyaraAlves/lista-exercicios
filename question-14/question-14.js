/**
 * Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20 números, 
 * o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */
let vetor = []
let lista = document.getElementById('tab')



const botaoAdicionar = document.querySelector('input#adicionar')
let numero = document.querySelector('input#numero')
document.querySelector('input#adicionar').onclick = function () {
    adicionar(numero)
}

function adicionar(numero) {
    
    if (numero.valueAsNumber < 0 || isNaN(numero.value)) {
        alert('Valor inválido')
    }

    else if (numero.value.length === 0) {
        window.alert('Por favor, digite um número')
    }
    else if (vetor.length >= 20) {
        
        botaoAdicionar.setAttribute('disabled', true)
       
        
    }

    else {
        vetor.push(numero.valueAsNumber)
        lista.disabled = false
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    }
}

document.querySelector('button#finalizar').onclick = function () {
    finalizar()
}
function finalizar(){
    if (vetor.length == 0 || vetor.length < 20){
        alert('Adicione mais valores antes de finalizar')
    }
    else{
    sortInverso(vetor)
    resDiv = document.querySelector('div#res')
    resDiv.innerHTML = `Ordem inversa dos valores: ${vetor}`
    }
}


function sortInverso(array) {
    const sortFunc = function (num1, num2) { return num2 - num1 }
    const arrayInversa = array.sort(sortFunc)
    console.log(arrayInversa)
}





/*
 Escreva um algoritimo que leia um vetor Q de 20 posições (aceitar somente números positivos).

 */
let Q = []
let lista = document.getElementById('tab')

function adicionar(numero) {

    if (numero.valueAsNumber < 0 || isNaN(numero.value)) {
        alert('Valor inválido')
    }

    else if (numero.value.length === 0) {
        window.alert('Por favor, digite um número')
    }
    else if (Q.length >= 20) {
        botaoAdicionar.setAttribute('disabled', true)
    }

    else {
        Q.push(numero.valueAsNumber)
        lista.disabled = false
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    }
}

function acharMaiorNumero(Array) {

    let resultados = []
    let maiorNumero = Array[0]
    let indexMaiorNumero = 0;

    for (let pos in Array) {
        if (Array[pos] > maiorNumero) {
            maiorNumero = Array[pos]
            indexMaiorNumero = pos
        }

    }

    resultados.push(maiorNumero)
    resultados.push(indexMaiorNumero)
    return resultados;
}


const botaoAdicionar = document.querySelector('input#adicionar')
let numero = document.querySelector('input#numero')
document.querySelector('input#adicionar').onclick = function () {
     adicionar(numero)
    }
    
document.querySelector('button#finalizar').onclick = function () {
        finalizar()
    }
    
function finalizar(){
    if (Q.length == 0 || Q.length < 20){
        alert('Adicione mais valores antes de finalizar')
    }
    else{
        const maiorNumeroEIndex = acharMaiorNumero(Q)
        resDiv = document.querySelector('div#res')
        resDiv.innerHTML = `O maior Número é ${maiorNumeroEIndex[0]} e sua posição na lista é a ${maiorNumeroEIndex[1]}°`
        
       
    }
    }
        

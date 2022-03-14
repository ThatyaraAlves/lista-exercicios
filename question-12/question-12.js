/**
 * Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. 
 * Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, 
 * se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

let listaNomes = []
let bt = document.getElementById('add')
let lista = document.getElementById('tab')
let finaliza = document.getElementById('final')
let resultadoFinal = document.getElementById('res')


function adicionar() {
    let nome = document.getElementById('nome').value.toUpperCase()
    
    lista.disabled = false
    if (nome!= '') {

        listaNomes.push(nome)
        let item = document.createElement('option')
        item.text = `${nome} adicionado`
        lista.appendChild(item)

        if (listaNomes.length === 10) {
            alert('Só é possível adicionar até 10 nomes')
            lista.disabled = true;
            bt.disabled = true

        }

}
    else {
        alert('Porfavor, digite um nome')
    }

}

    function finalizar() {
    finaliza.innerHTML = '<p>Digite o nome que deseja procurar:</p>'
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'nomeAdivinha')
    finaliza.appendChild(input)
    
  
    let botaoFinal = document.createElement('button')
    botaoFinal.setAttribute('type', 'submit')
    botaoFinal.setAttribute('id', 'botao-final')
    botaoFinal.innerText = 'procurar'
    finaliza.appendChild(botaoFinal)
    botaoFinal.onclick = procurar

function procurar() {
    
    let nomeAdivinha = document.getElementById('nomeAdivinha').value.toUpperCase()

    if (listaNomes.includes(nomeAdivinha)) {
        
        finaliza.innerHTML = 'ACHEI'


    }
    else {
        
        finaliza.innerHTML = 'NÃO ACHEI!!'
    }

}
    }
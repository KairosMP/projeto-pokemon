/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista:

    - passo 1: dar um jeito de pegar o elemento HTML da sera avançar.

    - passo 2: dar um jeito de identificar o clique do usuário na seta avançar.

    - passo 3: fazer aparecer o próximo cartão da lista.

    - passo 4: buscar o cartão que esta selecionado e esconder o anterior.

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista:

    - passo 1: dar um jeito de pegar o elemento HTMl da seta voltar.

    - passo 2: dar um jeito de identificar o clique do usuário na seta voltar.

    - passo 3: fazer aparecer o cartão anterior da lista.

    - passo 4: buscar o cartão que esta selecionado e esconder o anterior.
*/
 
/* Primeira Forma:

// Passo 1:

console.log(document.getElementById('btn-avancar'))

// Passo 2:

document.getElementById('btn-avancar').addEventListener("click", function () {
    console.log('oi')
})

*/


/* Segunda Forma:

// 1º Obejetivo - Concluido

// Passo 1:

const btnAvancar = document.getElementById('btn-avancar')

const btnVoltar = document.getElementById('btn-voltar')

const cartoes = document.querySelectorAll('.cartao')

let cartaoAtual = 0

// Passo 2:

btnAvancar.addEventListener('click', function () {

    if (cartaoAtual === cartoes.length -1) return

// Passo 4:   

    const cartaoSelc = document.querySelector('.selecionado')
    cartaoSelc.classList.remove('selecionado')

// Passo 3:

    cartaoAtual++
    cartoes[cartaoAtual].classList.add('selecionado')

})

// 2º Obejetivo - Concluido

// Passo 1-4:

btnVoltar.addEventListener('click', function () {

    if (cartaoAtual === 0) return

    const cartaoSelc = document.querySelector('.selecionado')
    cartaoSelc.classList.remove('selecionado')

    cartaoAtual--
    cartoes[cartaoAtual].classList.add('selecionado') 
})
*/

// Terceira forma:

const btnAvancar = document.getElementById('btn-avancar')

const btnVoltar = document.getElementById('btn-voltar')

const cartoes = document.querySelectorAll('.cartao')

let cartaoAtual = 0

function esconderCartaoSelec() {
    const cartaoSelc = document.querySelector('.selecionado')
    cartaoSelc.classList.remove('selecionado')
}

function mostrarCartao(indexCartao) {
    cartoes[indexCartao].classList.add('selecionado')
}

btnAvancar.addEventListener('click', function () {

    if (cartaoAtual === cartoes.length -1) return

    esconderCartaoSelec()

    cartaoAtual++
    mostrarCartao(cartaoAtual)
    
})

btnVoltar.addEventListener('click', function () {

    if (cartaoAtual === 0) return

    esconderCartaoSelec()

    cartaoAtual--
    mostrarCartao(cartaoAtual)
}) 
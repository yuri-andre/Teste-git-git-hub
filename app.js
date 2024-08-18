let listaSorteados = [];
let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    textoNaTela('h1', 'Jogo do número secreto');
    textoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        textoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        textoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            textoNaTela('p', 'O número secreto é menor');
        } else {
            textoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function criarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 3 + 1);
    let quantidadeEscolhidos = numeroEscolhido.length;

    if(quantidadeEscolhidos == 3) {
        quantidadeEscolhidos = [];
    }

    if (listaSorteados.includes(numeroEscolhido)) {
    return criarNumeroAleatorio();
    } else{
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = criarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}




//let numero = 1;
//while (numero <= 10) {
//    console.log(numero);
//    numero++;
//}
//alert("Bem vindo! Vamos jogar um jogo com em que você precisará adivinhar um número secreto!");
//alert("Dica: esse número está compreendido entre 1 e 100!");

//let numeroSecreto = parseInt (Math.random ()*10 + 1);
//console.log(numeroSecreto);
//let chute;
//let tentativas = 1;
//while (chute != numeroSecreto) {
//        chute = prompt("Qual é o teu palpite?");
//    if (chute == numeroSecreto) {
//        } else {
//        if (chute < numeroSecreto) {
//            alert(`O número é maior que ${chute}!`);
//    } else {
//        alert(`O número é menor que ${chute}!`);
//   }
//    //tentativas = tentativas + 1;
//    tentativas++; }
//}
//Operador tern
//et numeroDeTentativas = tentativas > 1 ? "tentativas" : "tentativa";
//alert(`Parabéns, o número era ${numeroSecreto} mesmo! Você usou ${tentativas} ${numeroDeTentativas}!`); 
// if (tentativas >1) {
//     alert(`Parabéns, o número era ${numeroSecreto} mesmo! Você usou ${tentativas} tentativas!`);} 
//     else {alert(`Parabéns, o número era ${numeroSecreto} mesmo! Você usou ${tentativas} tentativa!`);}

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo() {
    if (typeof soma.value === 'number'){
        let resultado = Number(campoSaldo.innerHTML) + Number(soma.value);
        campoSaldo.innerHTML = resultado.toString();
    } 
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo();
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    
 */
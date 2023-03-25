// Rescrever calculo rapidinho sem usar o atalho Promise.resolve
// ou seja, sem usar o new Promise
function calculoRapidinho (n) {
    const p = new Promise(function (resolve, reject){
        let res = (n * (n + 1)) / 2;
        resolve(res);
    })
    return p;
}

// function calculoRapidinho(n){
//     return Promise.resolve((n * (n + 1)) / 2);
// }

const pConcluida = calculoRapidinho(10);
pConcluida.then((res) => console.log(res));

function calculoDemorado(n) {
    const p = new Promise(function (resolve, reject) {
        let res = 0;
        for (let i = 1; i <= n; i++) res += i;
        resolve(res);
    })
    return p;
}

const minhaPromise = calculoDemorado(10);
minhaPromise.then((res) => console.log(res));

// const fs = require('fs');
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro, conteudo) => {
//         if (erro) {
//             console.log("Erro" + erro);
//         } else {
//             console.log("Conteudo: " + conteudo.toString());
//             const resultado = +conteudo.toString() * 2;
//             const finalizar = (erro) => {
//                 console.log(erro ? "Erro" + erro : "Arquivo salvo com sucesso");
//             }
//             fs.writeFile('dobro.txt', resultado.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo);
// }
// abrirArquivo("arquivo.txt");
// function demorada () {
//     const atualMais2Segundos = new Date().getTime() + 2000;
//     while(new Date().getTime() <= atualMais2Segundos);//no-op
//     const d = 8 + 4;
//     return d;
// }

// const a = 2 + 3;
// const b = 5 + 9;

// setTimeout(() => {
//     const d = demorada();
// }, 500)


// const e = 2 + a + b;
// console.log(e);

// const a = 2 + 7;
// const b = 5;
// console.log(a + b);

// console.log("Eu primeiro");
// console.log("Eu segundo");
// console.log("Eu terceiro");
// objetos literais Javascript
// (JSON) Javascript Object Notation

// Uma concessionaria tem CNPJ e endereco (logradouro e numero). Ela possui três veículos no estoque. Cada veociçp tem modelo, marca e ano de fabricação

let calc = {
    soma: (a, b) => a + b,
    subtracao: function(a, b){
        return a - b
    }
}

console.log(calc.soma(2,3));
console.log(calc['subtracao'](5,2))
// let concessionaria = {
//   cnpj: "12.12.2445",
//   endereco: {
//     logradouro: "Rua B",
//     numero: 21,
//   },
//   veiculos: [
//     {
//       modelo: "hb20",
//       marca: "honda",
//       anoDeFabricacao: 2009,
//     },
//     {
//       modelo: "fusca",
//       marca: "volkswagen",
//       anoDeFabricacao: 1980,
//     },
//     {
//       modelo: "renegade",
//       marca: "jeep",
//       anoDeFabricacao: 2021,
//     },
//   ],
// };

// for (let veiculo of concessionaria.veiculos) {
//   console.log(`Marca: ${veiculo.marca}`);
//   console.log(`Modelo: ${veiculo.modelo}`);
//   console.log(`Ano de Fabricação:${veiculo.anoDeFabricacao}`);
// }

// uma pessoa que se chama maria, tem 21 anos e mora na rua B, numero 21
// let pessoa = {
//   nome: "Maria",
//   idade: 21,
//   endereco: {
//     logradouro: "Rua B",
//     numero: 21,
//   },
// };

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.endereco.logradouro);
// console.log(pessoa.endereco.numero);

// uma pessoa que se chama joão e tem 17 anos
// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// //. e [""]
// console.log(pessoa["idade"]);

// clojures

// function eAgora(){
//     let cont = 1;
//     function f1(){
//         console.log(cont);
//     }
//     cont++;
//     function f2(){
//         console.log(cont);
//     }
//     return {f1, f2};
// }

// let eAgoraResult = eAgora();
// eAgoraResult.f1();
// eAgoraResult.f2();
// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(saudacao + ", " + nome);
//     }
// }

// let olaJoao = saudacoesFactory("Ola", "Joao");
// let tchauJoao = saudacoesFactory("Tchau", "Joao");

// olaJoao();
// tchauJoao();

// function f(){
//     let nome = 'João';
//     function g(){
//         let a;
//         console.log(nome);
//     }
//     g();
// }

//f pode ser chamada assim
// function f(funcao) {
//   //chamando a função
//   //note como a tipagem dinâmica tem seu preço
//   funcao();
// }

// function g() {
//   function outraFuncao() {
//     console.log("Fui criada por g");
//     return function () {
//       console.log("Até logo");
//     };
//   }
//   return outraFuncao;
// }

// f();
// f(g()());
// f(g);
// f(g());
// let umaFuncao = function () {
//   console.log("Fui armazenado em uma variável");
// };
// f(function () {
//     console.log("Estou sendo passada para f");
//   });
// umaFuncao();
/*f recebe uma função como parâmetro e, por isso
é uma função de alta ordem.
Por devolver uma função, g também é de alta ordem.
*/
// //
// //e g pode ser chamada assim
// const gResult = g();
// gResult();

// g()
//e assi
// funções
// const dobro = valor => valor * // console.log(dobro(2))

// const ehPar = (n) =>
//     n % 2 === 0;

// console.log(ehPar(3));

// const hello = () => console.log('Hello');
// hello();

// const teste = (a, b, c) => a * b * c;
// console.log(teste(1, 2, 3));
// a => {console.log(a)}
// (a, b) => console.log(a + b)
// // function hello(){
// //     console.log('Hello')
// }
// hello();

// function hello(nome){
//     console.log(
//         'Hello ' + nome
//     );
// }
// hello('Flávia');
// const valores = [1, 2, 3 , 4];
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)
// secao 1.5
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'];
// const letrasIniciais = nomes.map((nome) => {return nome.charAt(0)})
// console.log(letrasIniciais)
// // filter
// // arrow function
// const numeros = [1, 2, 3, 4 , 5];
// const result = numeros.map((numero) => {return numero ** 2})
// console.log()
// const resultado = nomes.filter( (nome) => {return nome.startsWith("A")})
// console.log(resultado)
// function soma(a, b){
//     return (a + b);
// }

// console.log(soma(2,3))
// Vetores
// v1 = [];
// v1[0] = 3.4;
// v1[10] = 2;
// console.log(v1);

// console.log(true == 1);
// console.log(1 == [1]);
// console.log(null == null);
// console.log(null == undefined);
// console.log([] == false);
// console.log([] == []);

// console.log(1 == 1);
// console.log(1 == "1");
// console.log(1 === 1);
// console.log(1 === "1");
// usar ===, nao usar var

// const n1 = 2;
// const n2 = '3';
// const n3 = n1 + n2;
// const n4 = n1 + Number(n2);
// console.log(n3);
// console.log(n4);

// var idade = 18;
// console.log("Oi, " + nome)
// if(idade >= 18){
//     var nome = "João"
//     console.log(nome + ", você pode dirigir");
// }
// console.log("Até mais, " + nome);
// var linguagem = "Javascript";
// console.log("Aprendendo " + linguagem);
// var linguagem = "Java";
// console.log("Aprendendo " + linguagem)

// var endereco = "Rua C";
// console.log(endereco);
// endereco = "Rua B";
// console.log(endereco);
// console.log(typeof(endereco));

// const, let, var, function
// let a = 2;
// let b = "abc";
// console.log(typeof(b));
// b = 12;
// console.log(typeof(b));
// b = true;
// console.log(typeof(b));
// const nome1 = "Ana";
// const nome2 = 'Pedro';
// const nome3 = `José`;

// console.log(typeof(nome1));
// console.log(typeof(nome2));
// console.log(typeof(nome3))

// nome1 = "João";

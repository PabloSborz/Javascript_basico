//Desafio 1
// for(i = 1; i <= 10; i++){
//     console.log(i);
// }

//Desafio 2
// for(i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }else{
//         continue
//     }
// }

//Desafio 3
// for(i = 5; i >= 0; i--){
//     console.log(i)
// }
// console.log("Lançamento")

//Tabuada
// let num = 5;
// for(i = 1; i <= 10; i++){
//     console.log(num + "x" + i + "=" + (num * i));
// }

//Desafio 4
// let bat = 100;
// while(bat >= 0){
//     console.log("Bateria:" + bat + "%");
//     bat -= 10;  
// }

//Sistema de Senha
// let senha = "";
// while(senha !== "123"){
//     senha = prompt("Digite a senha:");
// }
// alert("Acesso liberado!");

//Exemplo do While
// let credito = 0;

// do{
//     console.log("Tentando jogar...");
// }while(credito > 0);

//Desafio 5
// let opcao;
// do{
//     console.log("1 - Jogar");
//     console.log("2 - Ranking");
//     console.log("3 - Sair");
//     opcao = Number(prompt("Escolha uma opção:"));
//     if(opcao === 1){
//         console.log("Você escolheu Jogar");
//     }else if(opcao === 2){
//         console.log("Você escolheu Ranking");
//     }else if(opcao === 3){
//         console.log("Você escolheu Sair");
//     }else{
//         console.log("Opção inválida");
//     }
// }while (opcao !== 3);

//Desafio 6
// let filmes = [
//     "Atirador",
//     "Máquina de Guerra",
//     "Bad Boys",
//     "Coringa",
//     "Batman"
// ];
// for(let i = 0; i < filmes.length; i++){
//     console.log(filmes[i]);
// }

//Desafio 7
// let soma = [
//   7,8,10,5
// ];
// let total = 0;
// for(let i = 0; i < soma.length; i++) {
//     total += soma[i];
// }
// console.log(total);

//Desafio 8
// let media = [
//     7, 8, 10, 5
// ];
// let total = 0;
// for(let i = 0; i < media.length; i++) {
//     total += media[i];
// }
// let resultado = total / media.length;
// console.log(resultado);

//Desafio 9
// let idade = [
//     15, 18, 22, 13, 30
// ];
// let maiorIdade = idade[0];
// for(let i = 1; i < idade.length; i++) {
//     if(idade[i] > maiorIdade) {
//         maiorIdade = idade[i];
//     }
// }
// console.log(maiorIdade);

//Desafio 10
// let preco = [
//     10.50, 25.00, 8.99, 12.75
// ];
// let menorPreco = preco[0];
// for(let i = 1; i < preco.length; i++){
//     if(preco[i] < menorPreco){
//         menorPreco = preco[i];
//     }
// }
// console.log(menorPreco);

//Projeto Final
// let jogadores = [];
// let pontos = [];
// for(let i = 0; i < 3; i++){
//     let nome = prompt("Digite o nome:");
//     let pontuacao = Number(prompt("Digite a pontuação:"));
//     jogadores.push(nome);
//     pontos.push(pontuacao);
// }
// for(let i = 0; i < jogadores.length; i++){
//     console.log(jogadores[i] + " - " + pontos[i]);
// }
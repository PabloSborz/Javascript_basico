//Questão 1
/*
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 > num2) {
    alert("O primeiro número é maior.");
} else if (num2 > num1) {
    alert("O segundo número é maior.");
} else {
    alert("Os números são iguais.");
}
*/
//Questão 2
/*
let num = Number(prompt("Digite um número:"));
if (num > 0) {
    alert("Positivo");
} else if (num < 0) {
    alert("Negativo");
} else {
    alert("Igual a zero");
}
*/
//Questão 3
/*
let sexo = prompt("Digite seu sexo (M/F):").toUpperCase()
if (sexo === "M") {             
    alert("Masculino");
} else if (sexo === "F") {
    alert("Feminino");
} else {
    alert("Sexo inválido.");
}  
*/
//Questão 4
/*
let vogal = prompt("Digite uma letra:").toLowerCase();
if (vogal === "a" || vogal === "e" || vogal === "i" || vogal === "o" || vogal === "u") {
    alert("É uma vogal.");
} else {
    alert("Não é uma vogal.");
}
*/
//Questão 5
/*
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    alert("Aprovado");
}   else if (media == 10) {
    alert("Aprovado com distinção");
} else {
    alert("Reprovado");
}
*/

//Questao 6
/*
let num = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));
let num3 = Number(prompt("Digite mais um número:"));

if (num > num2 && num > num3) {         
    alert("O maior número é: " + num);
} else if (num2 > num && num2 > num3) {
    alert("O maior número é: " + num2);
} else if (num3 > num && num3 > num2) {
    alert("O maior número é: " + num3);
} else {
    alert("Há números iguais.");
}
*/

//Questao 7
/*
let num = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));
let num3 = Number(prompt("Digite mais um número:"));
let maior = num;
let menor = num;
if (num2 > maior) {
    maior = num2;
}
if (num3 > maior) {
    maior = num3;
}

if (num2 < menor) {
    menor = num2;
}
if (num3 < menor) {
    menor = num3;
}

alert("O maior número é: " + maior);
alert("O menor número é: " + menor);
*/

//Questao 8
/*
let preco = Number(prompt("Digite o preço do produto:"));
let preco2 = Number(prompt("Digite o preço do segundo produto:"));
let preco3 = Number(prompt("Digite o preço do terceiro produto:"));
if (preco < preco2 && preco < preco3) {
    alert("O produto mais barato é: " + preco);
} else if (preco2 < preco && preco2 < preco3) {
    alert("O produto mais barato é: " + preco2);
} else if (preco3 < preco && preco3 < preco2) {
    alert("O produto mais barato é: " + preco3);
} else {
    alert("Há produtos com o mesmo preço.");
} 
*/

//Questao 9
/*
let num = Number(prompt("Digite um número:"));
let num2 = Number(prompt("Digite outro número:"));
let num3 = Number(prompt("Digite mais um número:"));
let a = num;
let b = num2;
let c = num3;

if (a < b) {
    let temp = a;
    a = b;
    b = temp;
}if (a < c) {
    let temp = a;
    a = c;
    c = temp;
}if (b < c) {
    let temp = b;
    b = c;
    c = temp;
}
alert("Ordem decrescente: " + a + ", " + b + ", " + c);
*/

//Questao 10
/*
let turno = prompt("Digite o turno (M/V/N):").toUpperCase();

if (turno === "M") {
    alert("Bom dia!");
}else if (turno === "V") {
    alert("Boa tarde!");
}else if (turno === "N") {
    alert("Boa noite!");
}else {
    alert("Turno inválido.");
}
*/

//Questao 11
/*
let salario = Number(prompt("Digite o salário do funcionário:"));
let aumento;    
if (salario <= 280) {
    aumento = salario * 0.20;
} else if (salario >= 280.01 && salario <= 700) {
    aumento = salario * 0.15;
}else if (salario >= 700.01 && salario <= 1499.99) {
    aumento = salario * 0.10;
}else if(salario >= 1500.00 && salario <= 2000.00){
    aumento = salario * 0.05;
}else {
    aumento = 0;
}
  
let novoSalario = salario + aumento;
let percentualAumento = (aumento / salario) * 100;
alert("Salário antes do aumento: " + salario.toFixed(2));
alert("Percentual de aumento aplicado: " + percentualAumento.toFixed(2) + "%");
alert("Valor do aumento: " + aumento.toFixed(2));
alert("Novo salário: " + novoSalario.toFixed(2));
*/

//Questao 12
/*
let valorHora = Number(prompt("Digite o valor da hora trabalhada:"));
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas no mês:"));

let salarioBruto = valorHora * horasTrabalhadas;
let aliquotaIR;
let ir;

if (salarioBruto <= 900) {
    aliquotaIR = 0;
    ir = 0;
} else if (salarioBruto <= 1500) {
    aliquotaIR = 5;
    ir = salarioBruto * 0.05;
} else if (salarioBruto <= 2500) {
    aliquotaIR = 10;
    ir = salarioBruto * 0.10;
} else {
    aliquotaIR = 20;
    ir = salarioBruto * 0.20;
}

let inss = salarioBruto * 0.10;
let sindicato = salarioBruto * 0.03;
let fgts = salarioBruto * 0.11;
let totalDescontos = ir + inss + sindicato;
let salarioLiquido = salarioBruto - totalDescontos;

alert(
    "Salário Bruto (" + valorHora.toFixed(2) + " * " + horasTrabalhadas.toFixed(2) + "): R$ " + salarioBruto.toFixed(2) + "\n" +
    "(-) IR (" + aliquotaIR + "%) : R$ " + ir.toFixed(2) + "\n" +
    "(-) INSS (10%) : R$ " + inss.toFixed(2) + "\n" +
    "(-) Sindicato (3%) : R$ " + sindicato.toFixed(2) + "\n" +
    "FGTS (11%) : R$ " + fgts.toFixed(2) + "\n" +
    "Total de descontos : R$ " + totalDescontos.toFixed(2) + "\n" +
    "Salário Líquido : R$ " + salarioLiquido.toFixed(2)
);
*/

//Questao 13
/*
let diaSemana = prompt("Digite um número de 1 a 7 para o dia da semana:");
switch (diaSemana) {
    case "1":
        alert("Domingo");
        break;
    case "2":
        alert("Segunda-feira");
        break;
    case "3":
        alert("Terça-feira");
        break;
    case "4":
        alert("Quarta-feira");
        break;
    case "5":
        alert("Quinta-feira");
        break;
    case "6":
        alert("Sexta-feira");
        break;
    case "7":
        alert("Sábado");
        break;
    default:
        alert("Número inválido. Digite um número de 1 a 7.");
}   
*/

//Questao 14
/*
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2) / 2;

if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    alert("Notas inválidas. Digite valores entre 0 e 10.");
} else {
    let conceito;
    if (media >= 9) {
        conceito = "A";
    } else if (media >= 7.5) {
        conceito = "B";
    } else if (media >= 6) {
        conceito = "C";
    } else if (media >= 4) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    let situacao = (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";

    alert(
        "Notas: " + nota1.toFixed(1) + " e " + nota2.toFixed(1) + "\n" +
        "Média: " + media.toFixed(1) + "\n" +
        "Conceito: " + conceito + "\n" +
        "Situação: " + situacao
    );
}
*/

//Questao 15
/*
let lado1 = Number(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = Number(prompt("Digite o segundo lado do triângulo:"));
let lado3 = Number(prompt("Digite o terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        alert("Triângulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Triângulo isósceles");
    } else {
        alert("Triângulo escaleno");
    }
} else {
    alert("Os lados não formam um triângulo.");
}
*/

//Questao 16
/*
let a = Number(prompt("Digite o coeficiente a:"));
let b = Number(prompt("Digite o coeficiente b:"));
let c = Number(prompt("Digite o coeficiente c:"));

if (a === 0) {
    alert("Não é equação de segundo grau.");
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        alert("Não possui raízes reais.");
    } else if (delta === 0) {
        let raiz = -b / (2 * a);
        alert("Uma única raiz real: " + raiz.toFixed(2));
    } else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Duas raízes reais: " + raiz1.toFixed(2) + " e " + raiz2.toFixed(2));
    }
}


//Questao 17
/*
let ano = Number(prompt("Digite um ano:"));
let bisexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
alert(bisexto ? "Ano bissexto" : "Ano não é bissexto");
*/

//Questao 18
/*
let numero = Number(prompt("Digite um número inteiro:"));
if (numero % 2 === 0) {
    alert("Par");
} else {
    alert("Ímpar");
}
*/

//Questao 19
/*
let numero = Number(prompt("Digite um número:"));
let opcao = prompt("Digite P para verificar par/ímpar ou S para verificar positivo/negativo:").toUpperCase();
if (opcao === "P") {
    alert(numero % 2 === 0 ? "Par" : "Ímpar");
} else if (opcao === "S") {
    if (numero > 0) {
        alert("Positivo");
    } else if (numero < 0) {
        alert("Negativo");
    } else {
        alert("Zero");
    }
} else {
    alert("Opção inválida.");
}
*/

//Questao 20
/*
let respostas = 0;
respostas += prompt("Telefonou para a vítima? (S/N)").toUpperCase() === "S" ? 1 : 0;
respostas += prompt("Esteve no local do crime? (S/N)").toUpperCase() === "S" ? 1 : 0;
respostas += prompt("Mora perto da vítima? (S/N)").toUpperCase() === "S" ? 1 : 0;
respostas += prompt("Devia para a vítima? (S/N)").toUpperCase() === "S" ? 1 : 0;
respostas += prompt("Já trabalhou com a vítima? (S/N)").toUpperCase() === "S" ? 1 : 0;

if (respostas === 2) {
    alert("Suspeita");
} else if (respostas === 3 || respostas === 4) {
    alert("Cúmplice");
} else if (respostas === 5) {
    alert("Assassino");
} else {
    alert("Inocente");
}
*/

//Questao 21
/*
let valor1 = Number(prompt("Digite o primeiro número:"));
let valor2 = Number(prompt("Digite o segundo número:"));
if (valor1 > valor2) {
    alert("Maior: " + valor1 + "\nMenor: " + valor2);
} else if (valor2 > valor1) {
    alert("Maior: " + valor2 + "\nMenor: " + valor1);
} else {
    alert("Os números são iguais: " + valor1);
}
*/

//Questao 22
/*
let valor1 = Number(prompt("Digite o primeiro número:"));
let valor2 = Number(prompt("Digite o segundo número:"));
let valor3 = Number(prompt("Digite o terceiro número:"));
let maior = valor1;
let menor = valor1;

if (valor2 > maior) maior = valor2;
if (valor3 > maior) maior = valor3;
if (valor2 < menor) menor = valor2;
if (valor3 < menor) menor = valor3;

alert("Maior: " + maior + "\nMenor: " + menor);
*/

//Questao 23
/*
let valor = Number(prompt("Digite um número inteiro:"));
if (valor % 2 === 0) {
    alert("Par");
} else {
    alert("Ímpar");
}
*/

//Questao 24
/*
let raio = Number(prompt("Digite o raio da circunferência:"));
let diametro = 2 * raio;
let comprimento = 2 * Math.PI * raio;
let area = Math.PI * raio * raio;
alert(
    "Diâmetro: " + diametro.toFixed(2) + "\n" +
    "Comprimento: " + comprimento.toFixed(2) + "\n" +
    "Área: " + area.toFixed(2)
);
*/

//Questao 25
/*
let idade = Number(prompt("Digite a idade da pessoa:"));
if (idade >= 18 && idade <= 67) {
    alert("Pode doar sangue.");
} else {
    alert("Não pode doar sangue.");
}
*/

//Questao 26
/*
let dia = Number(prompt("Digite o dia:"));
let mes = Number(prompt("Digite o mês:"));
let ano = Number(prompt("Digite o ano:"));
let valido = true;
let motivo = "";

if (mes < 1 || mes > 12) {
    valido = false;
    motivo = "Mês inválido.";
} else if (dia < 1 || dia > 31) {
    valido = false;
    motivo = "Dia inválido.";
} else if (ano > 2026) {
    valido = false;
    motivo = "Ano inválido. Deve ser 2026 ou anterior.";
}

if (valido) {
    alert(dia + "/" + mes + "/" + ano + " - Data válida.");
} else {
    alert(dia + "/" + mes + "/" + ano + " - Data inválida: " + motivo);
}
*/

//Questao 27
/*
let x = prompt("Digite o valor de x:");
let y = prompt("Digite o valor de y:");
alert("Antes:\nx = " + x + "\ny = " + y);
let temp = x;
x = y;
y = temp;
alert("Depois:\nx = " + x + "\ny = " + y);
*/



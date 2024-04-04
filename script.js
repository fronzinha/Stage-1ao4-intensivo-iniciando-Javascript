// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
// com Arrow Function

const showHelloWorld = () => {
    alert("Hello World!");
}

// 2 -  Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

function sumTwoNumbers() {
    let numberOne = prompt("Digite o seu primeiro número:")
    let numberTwo = prompt("Digite o seu segundo número:")
    let result = Number(numberOne) + Number(numberTwo)

    alert(`A soma dos dois números é ${result}`)
}


/* 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É
um número", caso contrário, exiba a mensagem "Não é um número". Para saber o tipo de dado você pode usar o
operador typeof */

function verificationNumberOrNot() {
    alert('Questão 3 em construção')
}

/* 4- Crie um script que declare uma variável e verifique se o seu valor
é uma string. Se for, exiba a mensagem "É uma string", caso contrário,
exiba a mensagem "Não é uma string".
*/

function verificationStringOrNot() {
    alert('Questão 4 em construção')
}

/* 5 - Crie um script que declare uma variável e verifique se o seu valor
é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário,
exiba a mensagem "Não é um booleano"         
*/

function verificationBooleanOrNot() {
    alert('Questão 5 em construção')
}

// 6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.       

function subtractionNumber() {
    let numberOne = prompt("Digite o primeiro número:")
    let numberTwo = prompt("Digite o segundo número:")

    result = Number(numberOne) - Number(numberTwo)
    alert(`A subtração dos dois números é ${result}`)
}
// 7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

function multiplicationNumber() {
    let numberOne = prompt("Digite o primeiro número")
    let numberTwo = prompt("Digite o segundo número")

    result = Number(numberOne) * Number(numberTwo)
    alert(`A multiplicação dos dois número é ${result}`)
}
// 8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

function divisionNumber() {
    let numberOne = prompt("Digite o primeiro número")
    let numberTwo = prompt("Digite o segundo número")

    result = Number(numberOne) / Number(numberTwo)
    alert(`A divisão dos dois número é ${result}`)
}
/* 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for,
exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".      
*/

function showPar() {
    alert('Questão 9 em construção')
}

/* 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for,
exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".        
*/

function showImpar() {
    alert('Questão 10 em construção')
}



// Adicionando eventos de clique a cada lista

document.getElementById("showHelloWorld").addEventListener("click", showHelloWorld);
document.getElementById("sumTwoNumbers").addEventListener("click", sumTwoNumbers);
document.getElementById("verificationNumberOrNot").addEventListener("click", verificationNumberOrNot);
document.getElementById("verificationStringOrNot").addEventListener("click", verificationStringOrNot);
document.getElementById("verificationBooleanOrNot").addEventListener("click", verificationBooleanOrNot);
document.getElementById("subtractionNumber").addEventListener("click", subtractionNumber);
document.getElementById("multiplicationNumber").addEventListener("click", multiplicationNumber);
document.getElementById("divisionNumber").addEventListener("click", divisionNumber);
document.getElementById("showPar").addEventListener("click", showPar);
document.getElementById("showImpar").addEventListener("click", showImpar);

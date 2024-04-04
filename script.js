
// 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
// com Arrow Function
const showHelloWorld = () => {
    alert("Hello World!");
}

// 2 -  Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

function sumTwoNumbers() {
    let numberOne = prompt("Digite o seu primeiro número")
    let numberTwo = prompt("Digite o seu primeiro número")
    let result = Number(numberOne) + Number(numberTwo)

    alert(`A soma dos dois números é ${result}`)
}

// Adicionando eventos de clique a cada lista
document.getElementById("showHelloWorld").addEventListener("click", showHelloWorld);
document.getElementById("sumTwoNumbers").addEventListener("click", sumTwoNumbers);

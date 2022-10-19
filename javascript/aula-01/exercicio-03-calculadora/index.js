const input1 = prompt("Informe o primeiro número: ")
const input2 = prompt("Informe o segundo número: ")

const x = parseFloat(input1)
const y = parseFloat(input2)

const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert (
    "Resultados:\n" +
    "\nA soma dos dois números é: " + sum +
    "\nA subtração do primeiro número pelo segundo é: " + subtraction +
    "\nA multiplicação do primeiro número pelo segundo é: " + multiplication +
    "\nA divisão do primeiro número pelo segundo é: " + division
)

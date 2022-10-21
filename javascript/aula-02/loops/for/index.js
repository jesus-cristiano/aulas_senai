const tipo = prompt ("## CALCULADORA SENAI ## \n ## DIGITE SEU OBJETIVO ## \n\n 1. SOMA \n 2. SUBTRAÇÃO \n 3. MULTIPLICAÇÃO \n 4. DIVISÃO")
const numero = prompt("Digite um número para execução do calculo: ")

let resultado = " "
numero2 = parseFloat(numero)

if (tipo === "1")
    for (let cont = 0; cont <= 10; cont++) {
        resultado += + numero + " + " + cont + " = " + (numero2 + cont) + "\n"
    }

else if (tipo === "2")

    for (let cont = 0; cont <= 10; cont++) {
        resultado += + numero + " - " + cont + " = " + (numero2 - cont) + "\n"
    }

else if (tipo === "3")

    for (let cont = 0; cont <= 10; cont++) {
        resultado += + numero + " * " + cont + " = " + (numero2 * cont) + "\n"
}

else if (tipo === "4")
    for (let cont = 0; cont <= 10; cont++) {
        resultado += + numero + " / " + cont + " = " + (numero2 / cont) + "\n"
}

alert("\n" + resultado)
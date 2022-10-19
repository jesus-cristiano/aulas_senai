const limitspeed = prompt ("Digite o limite de velocidade da via: ")
const carspeed = prompt ("Digite a velocidade do veiculo: ")

const x = parseFloat(limitspeed)
const y = parseFloat(carspeed)

const average = x + (x * 0.20)
const serious = x + (x * 0.50)

if (y <= x) {
    alert("Veiculo não excedeu o limite de velocidade")
}
    else if (y > x && y <= average) {
    alert("Veiculo excedeu o limite de velocidade infração média (Até 20% da via) - Multa de R$130,16")
}
    else if (y > average && y <= serious) {
    alert("Veiculo excedeu o limite de velocidade infração grave (Acima de 20% até 50% da via ) - Multa de R$196,23") 
}
    else if (y > serious) {
    alert("Veiculo excedeu o limite de velocidade infração gravissima (Acima de 50% da via ) - Multa de R$880,41 + 7 pontos na carteira")
}
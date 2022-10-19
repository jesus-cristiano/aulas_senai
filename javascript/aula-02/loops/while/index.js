const travel = prompt ("E ai galera, vamos fazer uma viagem para estudar! \n Para onde vamos?")
let items = ""
let qtditems = 0

let qtd = prompt("Você vai levar algum item na viagem? (Sim / Não)")

while (qtd === "Sim") {
    let item = prompt ("Qual o nome do item que você vai levar?")

    items += " - " + item + "\n"
    qtditems++

    qtd = prompt("Você vai levar outro item? (Sim / Não)")
}

alert(
    "Vou viajar para " +travel+
    "\nVou levar " +qtditems+ 
    " items\nMinha lista de items e a seguinte:\n" + items
)

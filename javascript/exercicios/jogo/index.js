const personagemataque = prompt("Insira o nome do personagem de ataque: ")
const poderataque = prompt("Insira o poder de ataque do personagem: ")
const personagemdefesa = prompt("Insira o nome do personagem de defesa: ")
const pontosdevida = prompt("Insira a pontuação atual de vida do personagem: ")
const escudodedefesa = prompt("O personagem possui escudo de defesa, insira (Sim / Não): ")

let dano = 0

if (poderataque < pontosdevida && escudodedefesa === "Não") {
    dano =  pontosdevida - poderataque
} else if (poderataque < pontosdevida && escudodedefesa === "Sim"){
    dano = (pontosdevida - poderataque)/2
}

alert(personagemdefesa + " possui " + dano + " pontos de vida ")

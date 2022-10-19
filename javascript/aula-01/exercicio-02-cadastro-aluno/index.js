const Nome = prompt('Informe o nome do aluno: ')
const curso = prompt('Informe o curso: ')
const periodo = prompt('Informe o Periodo: ')
const nasci = prompt('Informe o ano de nascimento: ')

alert (
    "O aluno foi cadastrado com sucesso!\n " +
    "\n Nome do aluno: " + Nome +
    "\n Curso: " + curso +
    "\n Periodo: " + periodo +
    "\n Idade: " + (2022 - nasci)
)
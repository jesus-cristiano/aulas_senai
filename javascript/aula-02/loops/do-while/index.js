let option = "6"

do {
    option = prompt(
        "Este é um exemplo de MENU de validação utilizando DO e WHILE:\n\n" +
        "\n1. Cadastrar Cliente B2C" +
        "\n2. Cadastrar Cliente B2B" +
        "\n3. Cadastrar Cliente Governo" +
        "\n4. Atualizar Cliente" + 
        "\n5. Deletar Cliente" +    
        "\n6. Sair"
    )

} while (option !== "6")

alert("Fim do programa ")
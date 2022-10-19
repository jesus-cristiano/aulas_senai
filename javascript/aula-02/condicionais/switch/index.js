const meters = prompt ("Insira um valor em metros: ")

const conversion = prompt (
    " ### Para qual unidade deseja converter sua medida ###" +
    "\n 1. Milimetros (mm)" +
    "\n 2. Centímetros (cm)" +
    "\n 3. Decímetros (dm)" +
    "\n 4. Decâmetro (dam)" +
    "\n 5. Hectômetros (hm)" +
    "\n 6. Quilômetros (km)" 
)
switch (conversion) {
    case "1":
        alert("Resultado: " + meters + "m = " + meters * 1000 + "mm" )
        break
    case "2":
        alert("Resultado: " + meters + "m = " + meters * 100 + "cm" )
        break
    case "3":
        alert("Resultado: " + meters + "m = " + meters * 10 + "dm" )
        break
    case "4":
        alert("Resultado: " + meters + "m = " + meters / 10 + "dam" )
        break
    case "5":
        alert("Resultado: " + meters + "m = " + meters / 100 + "hm" )
        break
    case "6":
        alert("Resultado: " + meters + "m = " + meters / 1000 + "km" )
        break
    default:
        alert("Opção Invalida")
}
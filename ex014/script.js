var graucelsius = Number(prompt("Digite a temperatura em Graus Celsius °"))

if(graucelsius < 15) {
    alert("Frio")
}else if (graucelsius >= 15 && graucelsius <= 25) {
    alert("Agradável")
}else {
    alert("Quente")
}
var peso = Number(prompt("Digite seu peso"))
var altura = Number(prompt("Digite sua altura"))

var imc = peso / (altura ** 2)

if(imc < 18.5) {
    alert("voce esta abaixo do peso")
}else if(imc > 18.5 && imc < 24.9) {
    alert("voce esta no peso ideal")
}else if(imc > 25 && imc < 29.9) {
    alert("voce esta em sobrepeso")
}else {
    alert("Voce esta em obesidade")
}
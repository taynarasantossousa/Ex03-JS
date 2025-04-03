var peso = Number(prompt("Digite seu peso - ex: 87.5"))
var altura = Number(prompt("Digite sua altura - ex: 1.80"))

var imc = (peso / Math.pow(altura, 2)).toFixed(2)

if(imc < 18.5) {
    alert(`seu IMC = ${IMC} | abaixo do peso`)
}else if(IMC >= 18.5 && IMC <= 24.9) {
    alert(` seu IMC = ${IMC} | peso normal`)
}else if(IMC >= 25 && IMC <= 29.9) {
    alert(`seu IMC = ${IMC} | sobrepeso`)
}else {
    alert(`seu IMC = ${IMC} | obesidade`)
}
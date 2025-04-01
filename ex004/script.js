var idade1 = Number(prompt("Digite sua idade"))
var idade2 = Number(prompt("Digite outra idade"))

if(idade1 == idade2) {
    alert(`${idade1} anos e ${idade2} anos são iguais`)
}else if(idade1 > idade2) {
    alert(` ${idade1} anos é maior que ${idade2} anos`)
}else {
    alert(`${idade2} anos é maior que ${idade1} anos`)
}
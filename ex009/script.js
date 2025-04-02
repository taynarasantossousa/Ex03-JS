var horas = Number(prompt("Que horas são?"))

if(horas > 5 && horas < 11) {
    alert("Está de manhã")
}else if(horas > 12 && horas < 17) {
    alert("Está de tarde")
}else if(horas > 18 && horas < 23) {
    alert("Está de noite")
}else if(horas >= 0 && horas < 4) {
    alert("Está de madrugada")
}
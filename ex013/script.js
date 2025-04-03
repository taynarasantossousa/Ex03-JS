var nome = prompt("Dgite seu nome")

if(nome.length > 5) {
    alert(`${nome} tem ${nome.length} letras = Nome longo`)
}else {
    alert(`${nome} tem ${nome.length} letras = Nome curto`)
}
/*
var plvr = 1
while (plvr <=2) {
    console.log(`Fábio ${plvr}`)
    plvr++
}
console.log('--------------------------------')
var plvr2 = 1
do {
    console.log(`Fio ${plvr2}`)
    plvr2++ 
} while (plvr2 <= 3)
console.log('--------------------------------')
for (var plvr3 = 1; plvr3<=5; plvr3++){
    console.log(`Fico ${plvr3}`)
}
*/
function contar(){
    let inicio = document.getElementById('init')
    let fim = document.getElementById('end')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha os campos por favor!')
    } else {
        res.innerHTML = 'Contando: <br>'
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo <= 0) {
            window.alert('Número Inválido! Preencha com um passo acima de zero, conside')
            passo = 1
        }
        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio += passo) {
                res.innerHTML += `${inicio}&#128073`
            }
        } else {
            for (inicio;inicio >= fim; inicio -= passo){
                res.innerHTML += `${inicio}&#128073`
            }
        } res.innerHTML += `&#9995`
        
    }
}
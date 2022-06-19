let numero = document.getElementById('num')
let listavalor = document.getElementById('listavalor')
let res = document.getElementById('res')
let valores = []

function validaNum (num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function validaLista (num,lista){
    if (lista.indexOf(Number(num)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (validaNum(numero.value) && validaLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        listavalor.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores anres de finalizar!!')
    } else {
        //let total = valores.length
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados<br>`
        valores.sort()
        let soma = 0
        let media = 0
        res.innerHTML += `O menor número do vetor é ${valores[0]}<br>`
        for (let pos =0;pos<valores.length;pos++) {
            res.innerHTML += `A posição ${pos} tem o valor ${valores[pos]}<br>`
            soma += valores[pos]
        }
        res.innerHTML += `A soma de todos os valores é ${soma}<br>`
        media = soma/valores.length
        res.innerHTML += `A média de todos os valores é ${media}<br>`
    }   
}


function tabuada () {
    let numero = document.getElementById('num')
    let res = document.getElementById('seltab')

    if (numero.value.length ==0) {
        window.alert('Por favor, digite um número!!!')
    } else {
        let nv = Number(numero.value)
        res.innerHTML = ''
        for (let n = 0;n<=10;n++) {
            let item = document.createElement('option')
            item.text = `${nv}x${n}=${nv * n}\n`
            res.appendChild(item)
        }
    }
}

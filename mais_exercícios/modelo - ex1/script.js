function carregar () {
    let msg = document.getElementById ('msg')
    let img = document.getElementById ('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas!`

    if (hora >=0 && hora <12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora>=12 & hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}
let footerListLinks = ''

for (const [key, ArrValue] of Object.entries(rep)) { //  target="_blank"
    let image = `<a href="/`+ArrValue[2]+`" target="_blank"><img alt="`+ArrValue[0]+`" src="/img/`+ArrValue[1]+`" width="33px" /></a>`
    footerListLinks += image
}

let footerInfo = footerListLinks + `
    <p><a href="https://skrepetsky.web.app/" target="_blank">Семен Скрепецкий</a></p>`


document.getElementById('footer').innerHTML = footerInfo    
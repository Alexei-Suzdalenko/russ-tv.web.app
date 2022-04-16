let navigation = document.getElementById('navigation')
let linksContent = ''


for (const [key, ArrValue] of Object.entries(rep)) {
    let image = `<a href="/`+ArrValue[2]+`" target="_blank"><img alt="`+ArrValue[0]+`" src="/img/`+ArrValue[1]+`" /></a>`
    linksContent += image

}

navigation.innerHTML = linksContent
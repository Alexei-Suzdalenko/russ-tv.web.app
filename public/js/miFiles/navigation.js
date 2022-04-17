let navigation = document.getElementById('navigation')
let linksContent = ''


for (const [key, ArrValue] of Object.entries(rep)) { //  target="_blank"
    let image = `<a href="/`+ArrValue[2]+`"><img alt="`+ArrValue[0]+`" src="/img/`+ArrValue[1]+`" /></a>`
    linksContent += image

}

navigation.innerHTML = linksContent
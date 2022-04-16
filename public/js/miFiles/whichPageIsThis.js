function setTitlePlayer(title, url){
    document.title = title
    titlePage.innerHTML = title
    var Player = new Playerjs({id: 'player', file: url})
}

let urlWebSite = window.location.hash

let h1TitlePage =  document.getElementById('titlePage')
   
switch(urlWebSite){
    case 'pervyj_kanal' : ; break
    default: setTitlePlayer(rep.index.title, rep.index.url); break

}
    

    


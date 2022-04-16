function setTitlePlayer(title, url){
    document.title = title
    titlePage.innerHTML = title
    var Player = new Playerjs({id: 'player', file: url})
}

let pageHash = ''
function initPage(){
    pageHash = window.location.hash.replace('#', '')
    if(pageHash == '' || pageHash.length < 3){ pageHash = 'index';  }
    setTitlePlayer(rep[pageHash][0], rep[pageHash][3])
}
    
    



    

initPage()

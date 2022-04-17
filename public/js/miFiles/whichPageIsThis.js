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
    if(window.getAllComment){
        getAllComment()
    }
}
    
    



    

initPage()
window.addEventListener('hashchange',  initPage)

titlePage.addEventListener('click', function(){ window.location.reload() })


setTimeout(() => { titlePage.innerHTML = 'Россия - фашистское государство, ведет террористическую войну'}, 600000)
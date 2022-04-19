function setTitlePlayer(title, url, createPlayer){
    document.title = title
    titlePage.innerHTML = title
    if(createPlayer) var Player = new Playerjs({id: 'player', file: url})
     
}

let pageHash = ''
function initPage(){
    pageHash = window.location.hash.replace('#', '')
    if(pageHash == '' || pageHash.length < 3){ pageHash = 'index';  }
    switch(pageHash){
        case 'pervyj-kanal': player.innerHTML = `<iframe src="https://vk.com/video_ext.php?oid=-25380626&amp;id=456283287&amp;hash=7ad32d5858896985&amp;hd=2&amp;autoplay=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" allowfullscreen="" width="100%" height="472" frameborder="0"></iframe>`      
                             setTitlePlayer(rep[pageHash][0], rep[pageHash][3], false); break
        default: setTitlePlayer(rep[pageHash][0], rep[pageHash][3], true)
    }
    if(window.getAllComment){ getAllComment() } 
}
    
    



    

initPage()
window.addEventListener('hashchange',  initPage)
titlePage.addEventListener('click', function(){ window.location.reload() })
setTimeout(() => { titlePage.innerHTML = 'Россия - фашистское государство, ведет террористическую войну'}, 600000)
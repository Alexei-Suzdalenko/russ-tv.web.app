let comments    = document.getElementById('comments') 
let inputName   = document.getElementById('inputName')
let textAreaCom = document.getElementById('textAreaCom')
let saveComment = document.getElementById('saveComment')

// let inputContent = `<input type="text" />`
// const newDiv = document.createElement('div');
// newDiv.className = "aClassName"
// newDiv.innerHTML = inputContent  
// comments.appendChild(newDiv)  

saveComment.addEventListener('click', function(){
    if(window.localStorage.getItem('write') == 'write'){
        alert('можно оставить только один комментарий на странице');   return
    }
    if(inputName.value.length > 2 && textAreaCom.value.length > 5){
        insertUserComment(inputName.value, textAreaCom.value)
    } else {
        alert('Insert your name and comment, please :)    PUTIN JUILO' )
    }
})



function insertUserComment(name, comment){
    db.collection('c').doc(pageHash).collection('c').doc().set({name:name, comment:comment, time: new Date().getTime()})
    .then(() => {
        getAllComment()
        inputName.value = ''
        textAreaCom.value = ''
        alert('Document successfully written!')
        window.localStorage.setItem('write', 'write')
    }).catch((error) => {
        console.error("Error writing document: ", error)
    })
}
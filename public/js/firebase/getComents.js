let listAllComments = document.getElementById('listAllComments')
let resultComent = ''
let comentContent = `
<div class="newItemMessage">
    <span class="itemName">pete 23:28 12/11/22</span>
    <span class="itemMessage">message message message message message message message message message message message message message</span>
</div>`

function getAllComment(){
    let commentArray = []

    db.collection('c').doc(pageHash).collection('c').orderBy('time', 'desc').get().then((querySnapshot) => {
        resultComent = ''
        querySnapshot.forEach((doc) => {
            let small = doc.data()
            let time = new Date(small.time).toLocaleString()
            resultComent += `<div class="newItemMessage">
                                <span class="itemName">`+small.name+`</span> <span class="smallTime"> `+time+`</span>
                                <span class="itemMessage">`+small.comment+`</span>
                            </div>`

            console.log(small) 
         })
         listAllComments.innerHTML = resultComent 
    })
}



getAllComment()
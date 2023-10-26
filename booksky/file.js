var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".overlay")
var plusbutton = document.querySelector(".add-button")

plusbutton.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var closepopup =document.getElementById("close-button")

closepopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book-button")
var booktitle = document.getElementById("book-title")
var authorname = document.getElementById("author-name")
var desc = document.getElementById("book-desc")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container-2")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${desc.value}</p>
    <button onclick="deletebook(event)">delete</button>` 
    container.append(div)
    booktitle.value = ""  
    authorname.value = "" 
    desc.value = ""       
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
    


})



function deletebook(event){
    event.target.parentElement.remove()
}
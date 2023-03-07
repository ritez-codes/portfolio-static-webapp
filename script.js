
const header = document.querySelector(".header-nav")
const menuBar = document.getElementById("menubar")
menuBar.addEventListener("click" ,  (e)=>{
    e.preventDefault()
    e.stopPropagation()
    header.classList.toggle("mobile")
},true)

document.body.addEventListener("click" , (e)=>{
    console.log(e.target.className)
    if(e.target.id === "menubar" || e.target.className === "line" ){

    } else {
        header.classList.remove("mobile")
    }
})


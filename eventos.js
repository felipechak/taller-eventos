document.addEventListener("DOMContentLoaded",()=>{
    document.getElementsByTagName("button")[0].addEventListener("click",(ev)=>{
        alert("Hola!")
    })
    document.getElementsByTagName("div")[0].addEventListener("click",(ev)=>{
        if (ev.target.localName !== "button") {
            alert("Hola! soy el div")
        }
        
    })
})


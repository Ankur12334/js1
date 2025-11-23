var main = document.querySelector("main")
var btn = document.querySelector("button")

var arr = ["Hey what app...", "What's going on...", "what is you plan...", "there is chill today...","i think study work compleated..."," Have a Good day..."]

btn.addEventListener("click",function(){
    var x = (Math.random()*100)
    var y = (Math.random()*100)
    var rot = Math.random()*360
    var scl = Math.random()*1.6
    var h1 = document.createElement("h1")
    var a = Math.floor(Math.random()*arr.length)
    
    h1.innerHTML = arr[a]

    h1.style.left = x+"%"
    h1.style.top = y+"%"
    h1.style.rotate = rot+"deg"
    h1.style.scale = scl

    h1.style.position = "absolute"
    main.appendChild(h1)

})
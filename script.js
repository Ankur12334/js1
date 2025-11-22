var main = document.querySelector(".main")
var crsr =  document.querySelector(".cursor")

main.addEventListener("mousemove", function(detail){
    crsr.style.left =detail.x+"px"
    crsr.style.top =detail.y+"px"
})
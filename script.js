var arr = [{
    dp:"https://images.unsplash.com/photo-1745523669653-25ac9bf21bbc?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://plus.unsplash.com/premium_photo-1695575576052-7c271876b075?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXxlbnwwfDF8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGV8ZW58MHwxfDB8fHww"
}, {
    dp:"https://images.unsplash.com/photo-1566206091558-7f218b696731?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGV8ZW58MHwxfDB8fHww",story:"https://images.unsplash.com/photo-1589363358751-ab05797e5629?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGV8ZW58MHwxfDB8fHww"
},{
    dp:"https://images.unsplash.com/photo-1535530705774-695729778c55?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGV8ZW58MHwxfDB8fHww",story:"https://plus.unsplash.com/premium_photo-1675186049302-a0dad4cf3412?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}]

var cluter = ""
arr.forEach(function(elem,idx){
    cluter += `<div class="story">
                <img id = "${idx}" src="${elem.dp}" alt="">
            </div>`
})

document.querySelector("#stories").innerHTML = cluter;

document.querySelector("#stories").addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none"

    },3000)
});

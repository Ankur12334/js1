var arr = [
    { 
        team : "csk" ,
        primary: "yellow",
        secondary: "blue",
        captain: "rohit sharma",
        win: "6 times"
    },{
        team : "kkr" ,
        primary: "purple",
        secondary: "goldenrod",
        captain: "subman gill",
        win: "1 times"

    },{
        team : "pbsk" ,
        primary: "pink",
        secondary: "green",
        captain: "srehyash ",
        win: "0 times"

    },{
        team : "rcb" ,
        primary: "red",
        secondary: "black",
        captain: "virat kohli",
        win: "1 times"

    },{
        team : "srh" ,
        primary: "orange",
        secondary: "blue",
        captain: "Pat Cummins",
        win: "1 times"

    },{
        team : "Dc" ,
        primary: "wheat",
        secondary: "red",
        captain: "Rishab panth",
        win: "0 times"

    },{
        team : "Mi" ,
        primary: "blue",
        secondary: "gold",
        captain: "rohit sharma",
        win: "6 times"

    }


]
// var a = Math.floor(Math.random()*arr.length);
// console.log(a)

var btn = document.querySelector("button")
var h1 = document.querySelector("h1")


btn.addEventListener("click", function(){
    var num = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[num].team
   document.querySelector(".box").style.backgroundColor = arr[num].primary
   document.querySelector(".main").style.backgroundColor = arr[num].secondary
    document.querySelector("h2").innerHTML ="(" + arr[num].captain + ") = (" + arr[num].win + " win )";


   h1.style.color = arr[num].secondary
})
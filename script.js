var arr=[
    {name : "Peatels of roases", image: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "ranger bick", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "the croud of city", image: "https://images.unsplash.com/photo-1537228783107-df09e892bdbb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "fruits of planet", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "orange peeled", image: "https://plus.unsplash.com/premium_photo-1675237625753-c01705e314bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fHww"},
    {name : "web design", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Animal of town", image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Peatels of roases", image: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "ranger bick", image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "the croud of city", image: "https://images.unsplash.com/photo-1537228783107-df09e892bdbb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "fruits of planet", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "orange peeled", image: "https://plus.unsplash.com/premium_photo-1675237625753-c01705e314bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fHww"},
    {name : "web design", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Animal of town", image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];
function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
                        <img class="cursor-pointer" src="${obj.image}"
                            alt="image">
                        <div class="caption">Lorem ipsum </div>
                    </div>`;
    })
    document.querySelector(".container").innerHTML = clutter;
};

function handleSearch(){
    var input = document.querySelector("#searchinput")
    document.querySelector("#searchinput").addEventListener("focus",function(){
        document.querySelector('.overlay').style.display = "block";
    })
    document.querySelector("#searchinput").addEventListener("blur",function(){
        document.querySelector('.overlay').style.display = "none";
    })
    input.addEventListener("input",function(){
        const filterarray = arr.filter(obj => obj.name.toLocaleLowerCase().startsWith(input.value));
        console.log(filterarray);
    })
}
handleSearch();
showTheCards();

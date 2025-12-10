var products = [
    {name: "white chair", headline: "mordern look chair ", price: "15,000",image:"https://images.unsplash.com/photo-1547587091-f883cf8f0c12?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "traditional chair", headline: "old money look ", price: "10,000",image:"https://plus.unsplash.com/premium_photo-1712736395894-90460e186b4f?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "new look tradition", headline: "new look traditional chair", price: "12,000",image:"https://plus.unsplash.com/premium_photo-1675186049302-a0dad4cf3412?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2hpdGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name: "morden design", headline: "mordern design chair", price: "7000",image:"https://plus.unsplash.com/premium_photo-1704686579466-7792fa8dc063?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdoaXRlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"},
];
var popular = [
    {name: "white chair", headline: "mordern look chair ", price: "15,000",image:"https://images.unsplash.com/photo-1742681615996-ab36fa57f33e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdoaXRlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "sofa chair", headline: "old money look ", price: "10,000",image:"https://images.unsplash.com/photo-1605197166463-7cb34498c087?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "red tradition look", headline: "new look traditional chair", price: "12,000",image:"https://images.unsplash.com/photo-1600778321438-4785de7fb702?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHdoaXRlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "morden design", headline: "mordern design chair", price: "7000",image:"https://plus.unsplash.com/premium_photo-1683120703250-08298f42675e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdoaXRlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"},

];

var card = [];

function addProducts(){
    var clutter = "";
products.forEach(function(product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
});

document.querySelector(".products").innerHTML = clutter;
};

function addPopularProduct(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover" src="${product.image}" alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
};
function addToCard(){
    document.querySelector(".products")
    .addEventListener("click",function(detail){
        if(detail.target.classList.contains('add')){
            card.push(products[detail.target.dataset.index]);
        }
    })
}
addToCard();
addPopularProduct();
addProducts();
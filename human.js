var human_EL = document.querySelector("#human");
var human_num_EL = document.querySelector("#human_num");
var adoptions_EL = document.querySelector("#adoptions");
var steal_EL = document.querySelector("#steal");
var cloning_EL = document.querySelector("#cloning");
var steal_price_EL = document.querySelector("#steal_price")
var adoptions_price_EL = document.querySelector("#adoptions_price")
var cloning_price_EL = document.querySelector("#cloning_price")


var human_amount = 0;
click = 0;
adoptions_amount = 0;
steal_amount = 0;
cloning_amount = 0;

var steal_price = 50;
adoptions_price = 500;
cloning_price = 1500;


function human_click() {
    console.log(human_num_EL)
    human_amount += 1
    human_num_EL.innerHTML = human_amount 
}
function adoptions_click() {
    if (human_amount > adoptions_price)
    {
    human_amount -= adoptions_price
    adoptions_price * 2
    adoptions_amount += 2
    adoptions_price_EL.innerHTML = "Price:" + adoptions_price
    }
}
function steal_click() {
    if (human_amount >= steal_price)
    {
    human_amount -= steal_price
    steal_price *= 50
    steal_amount += 1
    steal_price_EL.innerHTML = "Price: " + steal_price
    }
}

function cloning_click() {
    if (human_amount > cloning_price)
    {
    human_amount -= cloning_price
    cloning_price *= 5
    cloning_amount += 1000
    cloning_price_EL.innerHTML = "Price:" + cloning_price
    }
}

human_EL.addEventListener("click", human_click)
adoptions_EL.addEventListener("click", adoptions_click)
steal_EL.addEventListener("click", steal_click)
cloning_EL.addEventListener("click", cloning_click)

var timer = setInterval(myTimer, 10); // kjører funksjonen myTimer 1 gang i sekundet
function myTimer(){ 
    human_num_EL.innerHTML = human_amount;
}
var human_EL = document.querySelector("#human");
var human_num_EL = document.querySelector("#human_num");
var adoptions_EL = document.querySelector("#adoptions");
var steal_EL = document.querySelector("#steal");
var cloning_EL = document.querySelector("#cloning");
var steal_price_EL = document.querySelector("#steal_price")
var adoptions_price_EL = document.querySelector("#adoptions_price")
var cloning_price_EL = document.querySelector("#cloning_price")


human_amount = 0;
click = 0;
adoptions_amount = 0;
steal_amount = 0;
cloning_amount = 0;



function human_click() {
    console.log(human_num_EL)
    human_amount += 1
    human_num_EL.innerHTML = human_amount 
}
function adoptions_click() {
    if

    console.log(adoptions_EL)
    adoptions_amount += 2
    human_num_EL.innerHTML = adoptions_amount
    adoptions_price_EL.innerHTML = adoptions_price
}
function steal_click() {
    if (human_amount > steal_price )
    {

    console.log(steal_EL)
    steal_amount += 100
    human_num_EL.innerHTML = steal_amount
    innerHTML = steal_price_EL
}
function cloning_click() {
    if

    console.log(cloning_EL)
    cloning_amount += 1000
    human_num_EL.innerHTML = cloning_amount
    innerHTML = cloning_price_EL
}

human_EL.addEventListener("click", human_click)
adoptions_EL.addEventListener("click", adoptions_click)
steal_EL.addEventListener("click", steal_click)
cloning_EL.addEventListener("click", cloning_click)
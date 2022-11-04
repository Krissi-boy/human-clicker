var human_EL = document.querySelector("#human");
var human_num_EL = document.querySelector("#human_num");
var adoptions_EL = document.querySelector("#adoptions");
var thieves_EL = document.querySelector("#thieves");
var clonings_EL = document.querySelector("#clonings");
var thieves_price_EL = document.querySelector("#thieves_price")
var adoptions_price_EL = document.querySelector("#adoptions_price")
var clonings_price_EL = document.querySelector("#clonings_price")
var thieves_am_EL = document.querySelector("#thieves_am")
var adoptions_am_EL = document.querySelector("#adoptions_am")
var clonings_am_EL = document.querySelector("#clonings_am")
var innpakning_EL = document.querySelector(".innpakning")
var gold_human_EL = document.querySelector("#gold_human")
gold_human_EL.style.display = ("none");


console.log(thieves_am_EL)

var human_amount = 0;
var click = 0;
var adoptions_amount = 0;
var thieves_amount = 0;
var clonings_amount = 0;

var thieves_price = 50;
var adoptions_price = 500;
var clonings_price = 1500;

var anger = 0;
var gold_human = 1;


function human_click() {
    console.log(human_num_EL)
    human_amount += 1
    human_num_EL.innerHTML = human_amount 
    anger += 1;
}
function adoptions_click() {
    if (human_amount > adoptions_price)
    {
    adoptions_am_EL.innerHTML = "Adoptions: " + adoptions_amount
    
    human_amount -= adoptions_price
    adoptions_price * 2
    adoptions_amount += 3
    adoptions_price_EL.innerHTML = "Price: " + adoptions_price
    }
}
function thieves_click() {
    if (human_amount >= thieves_price)
    {
    thieves_am_EL.innerHTML = "Thieves: " + thieves_amount;

    human_amount -= thieves_price
    thieves_price *= 50
    thieves_amount += 2
    thieves_price_EL.innerHTML = "Price: " + thieves_price
    }
}

function clonings_click() {
    if (human_amount > clonings_price)
    {
    clonings_am_EL.innerHTML = "Clonings: " + clonings_amount

    human_amount -= clonings_price
    clonings_price *= 5
    clonings_amount += 1000
    clonings_price_EL.innerHTML = "Price: " + clonings_price
    }
}
function gold_human_click() {
    human_amount += 2000
    gold_human_EL.style.display = ("none");
   
}

human_EL.addEventListener("click", human_click)
adoptions_EL.addEventListener("click", adoptions_click)
thieves_EL.addEventListener("click", thieves_click)
clonings_EL.addEventListener("click", clonings_click)
gold_human_EL.addEventListener("click", gold_human_click)

var human_timer_interval = setInterval(human_timer, 50); // kjører funksjonen myTimer 1 gang i sekundet
function human_timer(){ 
    human_num_EL.innerHTML = human_amount;
    if (anger < 10) {
        innpakning_EL.style.backgroundColor = "greenyellow"
        human_EL.style.animationPlayState = "paused";
    }
    if (anger > 15) {
        innpakning_EL.style.backgroundColor = "orange"
        human_EL.style.animation = "shake 0.5s infinite";
        human_EL.style.animationPlayState = "running";
       
    }  
    if (anger > 20) {
        innpakning_EL.style.backgroundColor = "red";
        human_EL.style.animation = "shake_much 0.5s infinite";
        human_EL.style.animationPlayState = "running";
    }
   
   

   



}
var adoptions_timer_interval = setInterval(adoptions_timer, 500); // kjører funksjonen myTimer 1 gang i sekundet
function adoptions_timer(){ 
    human_amount += adoptions_amount;
}
var thieves_timer_interval = setInterval(thieves_timer, 500); // kjører funksjonen myTimer 1 gang i sekundet
function thieves_timer(){ 
    human_amount += thieves_amount;
}
var clonings_timer_interval = setInterval(clonings_timer, 500); // kjører funksjonen myTimer 1 gang i sekundet
function clonings_timer(){ 
    human_amount += clonings_amount;
}
var number_down_interval = setInterval(number_down_timer, 500); // kjører funksjonen myTimer 1 gang i sekundet
function number_down_timer(){ 
    console.log("Anger: " + anger);
    if (anger > 0){
        anger -= 1;
    }
    if (anger > 20) {
        human_amount -= 1
    }
    if (human_amount > 100000) {
        human_amount -= 60
    }
        
}
var gold_human_timer_interval = setInterval(gold_human_timer, 300000); // kjører funksjonen myTimer 1 gang i sekundet
function gold_human_timer(){ 
    gold_human_EL.style.display = ("block");
  
}
var gold_human_random_position = setInterval(gold_human_random_position, 2000) // kjører funksjonen myTimer 1 gang i sekundet
function gold_human_random_position(){
    gold_human_EL.style.position = "absolute";
    gold_human_EL.style.left = String(Math.floor(Math.random() * 1000)) +"px";
    gold_human_EL.style.top = String(Math.floor(Math.random() * 1000)) +"px"
}


// Jeg velger hviken ID jeg skal bruke, som er hentet fra html filen og legger det inn i en variabel. Jeg har _EL på slutten av variabelen for lettere vite at det er elementet. 
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
// css style.display (none), vil si at variabelen (elementet)(inni variabelen ligger ID og bildet gold human) ikke skal vises i spillet når javascripten kjøres.
gold_human_EL.style.display = ("none");

// Brukes til å sjekke console i nettleseren (F12). Den er god å bruke når du skal sjekke om intervallet på variabelen du har valgt går opp eller ned.
console.log(thieves_am_EL)  

// Start-antall til hver enkelt element (variabel) du har. Når du starter spillet, vil antallet starte med det du selv velger.
var human_amount = 0;
var click = 0;
var adoptions_amount = 0;
var thieves_amount = 0;
var clonings_amount = 0;

// Start-priser til hver enkelt element (variabel). Man kan legge de inn i en funksjon når vi vil at dette skal økes når man klikker på elementet.
var thieves_price = 50;
var adoptions_price = 500;
var clonings_price = 1500;

var anger = 0;
var gold_human = 1;

// Funksjon blir kjørt kun når du klikker på valgte elementet. For at f.eks kun human_click skal kjøre, legger jeg addEventListener (click) kun på den funksjonen.
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
    // innerHTML brukes når noe skal vises i nettsiden, som f.eks her har jeg satt en innerHTML på Clonings, som vises i spillet mitt. I clonings_am_EL ligger h3 ID fra HTML filen min. I Clonings overskriften i spillet, vil jeg vise variabelen human_amount, der antall human er representert. 
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

// På variabel er det lagt inn en addEventListener, som "lytter" etter click. Du må velge hvilke funksjon som dette skal skje på.
human_EL.addEventListener("click", human_click)
adoptions_EL.addEventListener("click", adoptions_click)
thieves_EL.addEventListener("click", thieves_click)
clonings_EL.addEventListener("click", clonings_click)
gold_human_EL.addEventListener("click", gold_human_click)

// Intervaler kjører funksjonen myTimer etter hvor mange millisekunder du velger. (50 millisekunder = 0.05 sekunder, 500 millisekunder = 0.5 sekunder).
var human_timer_interval = setInterval(human_timer, 50); 
function human_timer(){ 
    human_num_EL.innerHTML = human_amount;
    // Når variabelen anger kommer over/under det antallet jeg har valgt, vil det skje en css style med bakgrunnen (farge og animasjon)
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
var adoptions_timer_interval = setInterval(adoptions_timer, 500); 
function adoptions_timer(){ 
    human_amount += adoptions_amount;
}
{ 
var thieves_timer_interval = setInterval(thieves_timer, 500); 
    human_amount += thieves_amount;
}
var clonings_timer_interval = setInterval(clonings_timer, 500); 
function clonings_timer(){ 
    human_amount += clonings_amount;
}
var number_down_interval = setInterval(number_down_timer, 500); 
function number_down_timer(){ 
    // I variabelen (anger) lager jeg et interval, der jeg mister et hvis antall human. Antallet human går ned hvert halv sekund, så hvis jeg trykker sent 20 ganger vil det ikke skje noe med variabelen (anger). Når man trykker fort vil man nå antallet fortere, fordi du klikker raskere enn tallet går ned.  
    console.log("Anger: " + anger);
    if (anger > 0){
        anger -= 1;
    }
    // Hvis variabelen (anger) blir større enn 20, vil variabel human_amount (antall human) minkes med 1 hvert halv sekund.
    if (anger > 20) {
        human_amount -= 1
    }
    // Hvis variabelen (human_amount)-(antall human) kommer over 100000, vil jeg miste 60 human hvert halv sekund.
    if (human_amount > 100000) {
        human_amount -= 60
    }
}
var gold_human_timer_interval = setInterval(gold_human_timer, 300000);
function gold_human_timer(){ 
    // css style.display (block), vil si at variabelen (elementet)(inni variabelen ligger ID og bildet gold human) dukker opp på når 300000 millisekunder (5 minutter) er gått.
    gold_human_EL.style.display = ("block");
}
// Her setter jeg interval på variabelen Gold_human_EL, der jeg sier at gold human skal vises på forskjellige steder på skjermen.
var gold_human_random_position = setInterval(gold_human_random_position, 300000) 
function gold_human_random_position(){
    gold_human_EL.style.position = "absolute";
    gold_human_EL.style.left = String(Math.floor(Math.random() * 1000)) +"px";
    gold_human_EL.style.top = String(Math.floor(Math.random() * 1000)) +"px"
}


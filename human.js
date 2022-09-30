var human_EL = document.querySelector("#human");
var human_num_EL = document.querySelector("#human_num");


human_amount = 0;
click = 0;


function human_click() {
    console.log(human_num_EL)
    human_amount += 1
    human_num_EL.innerHTML = human_amount 
}

human_EL.addEventListener("click", human_click)
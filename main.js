let sestevek = 0;

const value = document.getElementById("span");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

increase.addEventListener("click", function(){
    sestevek += 1;
    value.innerText = sestevek;
})
decrease.addEventListener("click", function(){
    sestevek -= 1;
    value.innerText = sestevek;
})
reset.addEventListener("click", function(){
    sestevek = 0;
    value.innerText = sestevek;
})


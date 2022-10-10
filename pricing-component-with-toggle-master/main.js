var input = document.querySelector("input");
var yearCosts = document.querySelectorAll(".yearly");
var monthCosts = document.querySelectorAll(".monthly");

input.addEventListener("change", ()=>{

    if(input.checked){
        monthCosts.forEach((cost)=>{
            cost.style.display="block";

         })
         yearCosts.forEach((cost)=>{
            cost.style.display="none";
         })
    }
    else{
        yearCosts.forEach((cost)=>{
            cost.style.display="block";

         })
         monthCosts.forEach((cost)=>{
            cost.style.display="none";
         })
    }
})

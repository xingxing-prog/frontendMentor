const mark = document.querySelector(".mark");
var number = document.querySelector(".number");
var reactions = document.querySelectorAll(".reaction");
var dots = document.querySelectorAll(".dot");


mark.addEventListener('click', ()=>{
   
    number.textContent = 0;
    reactions.forEach((reaction)=>{
        if(reaction.classList.contains("unread")){
            reaction.classList.remove("unread");
        }
    });

    dots.forEach((dot)=>{
        dot.style.background="white";
    })


});
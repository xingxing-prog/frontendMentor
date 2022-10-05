var bill =document.querySelector(".bill");
var people = document.querySelector(".people");
var rates = document.querySelectorAll(".number");
var tipAmount = document.getElementById("tip");
var total = document.getElementById("total");
var zero = document.querySelector(".zero");
var reset = document.querySelector(".reset");
var custom = document.querySelector("#custom");

var tip;
var tipRate;
var billAmount;
var currentRate;
var numberOfPeople;
var tipEach;

bill.addEventListener("input", (e)=>{
    bill.style.color="hsl(183, 100%, 15%)";
    billAmount = parseFloat(e.target.value);
    
})



people.addEventListener("input", ()=>{
   
    people.style.color ="hsl(183, 100%, 15%)";
    numberOfPeople = parseInt(people.value);
    
    getTipAndTotal(numberOfPeople);

})

rates.forEach((rate)=>{
    rate.addEventListener("click", (e)=>{
         
          
          //e.currentTarget.style.backgroundColor="hsl(172, 67%, 45%)";
          //e.currentTarget.style.color ="hsl(183, 100%, 15%)";
          if(billAmount !=null && numberOfPeople !== 0){
            var current = e.target;
            current.classList.add("active");
            tipRate = parseInt(e.target.innerHTML);
          
            tip = billAmount * tipRate/100;
        
            getTipAndTotal(numberOfPeople);
          }
          
          //which can make tip calculator response to any of rate

    })
})

custom.addEventListener("input", (e)=>{
    tipRate = parseInt(e.target.value);

    tip = billAmount * tipRate/100;
    getTipAndTotal(numberOfPeople);
})

function getTipAndTotal(numberOfPeople){

    if(numberOfPeople === 0){
        zero.style.display="block";
        people.style.outline = "2px solid red";
      }
      else{
        zero.style.display ="none";
        people.style.outline = "none";
  
        var tip = tipRate * billAmount /100;
        console.log(tip);
        
        tipEach = tip/numberOfPeople;
        
        
        tipAmount.innerHTML = (tipEach).toFixed(2);
        
        total.innerHTML = ((billAmount + tip)/numberOfPeople).toFixed(2);
    }
}



reset.addEventListener("click", ()=>{
    location.reload();
})


var bill =document.querySelector(".bill");
var people = document.querySelector(".people");
var rates = document.querySelectorAll(".number");
var tipAmount = document.getElementById("tip");
var total = document.getElementById("total");

var billAmount;
var tip;
var tipRate;



bill.addEventListener("input", (e)=>{
    bill.style.color="hsl(183, 100%, 15%)";
    billAmount = e.target.value;
    
    console.log(billAmount);
})

people.addEventListener("input", ()=>{
    people.style.color ="hsl(183, 100%, 15%)";
    numberOfPeople = parseInt(people.value);
    console.log(numberOfPeople);

    tipAmount.innerHTML = (tip /numberOfPeople).toFixed(2);



})

rates.forEach((rate)=>{
    rate.addEventListener("click", (e)=>{

          e.target.style.backgroundColor="hsl(172, 67%, 45%)";
          e.target.style.color ="hsl(183, 100%, 15%)";
          tipRate = parseInt(e.target.innerHTML);
          console.log(tipRate);
          tip = billAmount * tipRate/100;
          console.log(tip);

          var numberOfPeople =1;

          //var tipOfEach = tip / numberOfPeople;
          
          console.log(tipOfEach);

          tipAmount.textContent = tipOfEach.toFixed(2);
          

          

    })
})


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
    

    if(!inputCompleted()){
        resetTipTotal();
    }
    else{
        getTipAndTotal(numberOfPeople);
     
    }
    
})

rates.forEach((rate)=>{
   
    console.log(rate.classList);
    rate.addEventListener("click", (e)=>{
         
          
          //e.currentTarget.style.backgroundColor="hsl(172, 67%, 45%)";
          //e.currentTarget.style.color ="hsl(183, 100%, 15%)";
            
            var current = e.target;
            rateBackground();
            console.log(rate.classList);
            current.classList.toggle("active");
            
           
            tipRate = parseInt(current.value);
    
            tip = billAmount * tipRate/100;
            
            if(!inputCompleted()){
                resetTipTotal();
            }
            else{
                getTipAndTotal(numberOfPeople);
             
            }
            
          //which can make tip calculator response to any of rate

    })

})

function rateBackground(){
    rates.forEach((rate)=>{
        if(rate.classList.contains("active")){
            rate.classList.toggle("active");
        }
    })
}

custom.addEventListener("input", (e)=>{
   var current  = e.target;
   current.classList.toggle("active");

            console.log(current.classList);
            tipRate = parseInt(current.value);
    
            tip = billAmount * tipRate/100;
            
            if(!inputCompleted()){
                resetTipTotal();
            }
            else{
                getTipAndTotal(numberOfPeople);
             
            }

})



function getTipAndTotal(numberOfPeople){

   
    if(numberOfPeople === 0){
        zero.style.display="block";
        people.style.outline = "2px solid red";
       
      }
      else{
        zero.style.display ="none";
        people.style.outline = "none";
  
        tip = tipRate * billAmount /100;
        console.log(tip);

       
        tipEach = tip/numberOfPeople;
        
        
        tipAmount.innerHTML = (tipEach).toFixed(2);
        
        total.innerHTML = ((billAmount + tip)/numberOfPeople).toFixed(2);
        
      }
}

function inputCompleted(){
    if(billAmount > 0 && tipRate > 0 && numberOfPeople >= 0){
        return true;
    }
    else{
        return false;
    }
}

function resetTipTotal(){
    tipAmount.innerHTML = "0.00";
    total.innerHTML = "0.00";
}


reset.addEventListener("click", ()=>{
    location.reload();
})


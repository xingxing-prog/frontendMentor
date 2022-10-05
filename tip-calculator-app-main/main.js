var bill =document.querySelector(".bill");
var billAmount = 0;
var numberOfPeople;

var people = document.querySelector(".people");

bill.addEventListener("input", ()=>{
    bill.style.color="hsl(183, 100%, 15%)";
    billAmount = bill.value;
    console.log(billAmount);
})

people.addEventListener("input", ()=>{
    people.style.color ="hsl(183, 100%, 15%)";
    numberOfPeople = people.value;
    console.log(numberOfPeople);
})


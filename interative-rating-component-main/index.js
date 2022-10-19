var submitBtn = document.getElementById("submitBtn");
var page2 = document.getElementById("page2");
var page1 = document.getElementById("page1");
var scores = document.querySelectorAll('.circle');

var result = document.getElementById("result");



submitBtn.addEventListener('click', getReviewed);


function getReviewed(){
    page1.style.display='none';
    page2.style.display='flex';
    
}

function getScore(){
    scores.forEach((score)=>{
        if(score.classList.contains("white"))
           score.classList.toggle("white");
    })
}


scores.forEach((score)=>{

    score.addEventListener("click", ()=>{
        getScore();
        score.classList.toggle("white");
        result.textContent ='You selected '+score.value+ ' out of 5';
    });
})
       
    

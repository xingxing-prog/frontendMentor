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


    
    for (let i=0; i<scores.length; i++){
        
        scores[i].addEventListener('click', ()=>
        {
            result.textContent ='You selected '+scores[i].value+ ' out of 5';

        });
    }
    

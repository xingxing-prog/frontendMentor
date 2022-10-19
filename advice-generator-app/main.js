var number = document.getElementsByTagName('span')[0];
var p = document.querySelector("blockquote");
var dice = document.querySelector(".dice");
let url = "https://api.adviceslip.com/advice";


const getAdvice = async() =>{

    
    const response = await fetch(url, {cache: "no-cache"});
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();
        
    number.innerHTML = data['slip']['id'];
    p.innerHTML = '\u201c' + data['slip']['advice'] + '\u201d';
        
}


getAdvice();

dice.addEventListener('click', ()=>{
   
    getAdvice();
})





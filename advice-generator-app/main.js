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

/*function getRandomNumber(){
    return Math.floor(Math.random()*224+1);
}

getAdvice(url);


dice.addEventListener('click', ()=>{
    const n = getRandomNumber();
    console.log(n);
    var baseUrl = "https://api.adviceslip.com/advice";
    var url = baseUrl + "/"+n;
    console.log(url);
    getAdvice(url);
});*/

getAdvice();

dice.addEventListener('click', ()=>{
   
    getAdvice();
})




       
        
    

    //url ="https://api.adviceslip.com/advice";
    
    
    /*axios.get(url).then(response=>{
        let value = response.data;
        
        number.innerHTML = value['slip']['id'];
    
        p.innerHTML = '\u201c' + value['slip']['advice'] + '\u201d';
        console.log(value['slip']['advice']);
    })
     .catch((error)=>{
        console.log(error);
     })*/


//getAdvice();





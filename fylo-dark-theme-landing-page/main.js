var email = document.querySelector("input");
var validEmail = /^\S+@\S+\.\S+$/;
var isValid = document.getElementById("left");




email.addEventListener("input",  (e)=>{

    var emailAddress = e.target.value
    if(emailAddress.match(validEmail) === null){
         isValid.style.display = "block";   
    }
    else{
        isValid.style.display = "none";
    }
    
})
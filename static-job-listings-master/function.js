initial();

var options = document.querySelectorAll(".option");
var modal = document.querySelector(".modal");
var clear = document.querySelector(".clear");
var optionList = []; 
var jobs = document.querySelectorAll(".job");
console.log(jobs);

options.forEach((option)=>{
    option.addEventListener("click", (e)=>{
           
        if(!optionList.includes(e.target.textContent)){
            optionList.push(e.target.textContent);
            
            var content = document.createElement("span");
            content.innerHTML = e.target.innerText;
            
            var cancelButton = document.createElement("span");
            cancelButton.textContent = "X";
            cancelButton.setAttribute("class", "cancel");
            content.appendChild(cancelButton);

            content.setAttribute("class","modalOption");
          
            cancelButton.addEventListener("click", (e)=>{
            console.log(e.target.parentNode);
            var item = e.target.parentNode;
            var index = optionList.indexOf(item);
            optionList.splice(index);

            modal.removeChild(e.target.parentNode);

            if(optionList.length === 0){
                modal.style.visibility = "hidden";
            }
        })
           modal.appendChild(content);

           console.log(optionList);

           if(optionList.length !== 0){
            modal.style.visibility = "visible";
           }
           else{
             modal.style.visibility = "hidden";
           }
        }
      
    
         
    
        

    })
})
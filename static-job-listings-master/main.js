const main = document.querySelector('main');
const myRequest = new Request('data.json');

getData();
var optionList = []; 


async function getData(){
    const response = await fetch("data.json");
    const data = await response.json();

    initial(data);
   
    var options = document.querySelectorAll(".option");
    var modal = document.querySelector(".modal");
    var modalContent = document.querySelector(".modal-content");
   
    var clear = document.querySelector(".clear");


  
    options.forEach((option)=>{
        option.addEventListener("click", (e)=>{
           
        if(!optionList.includes(e.target.textContent)){
           
            modal.style.display = "block";
            
            optionList.push(e.target.textContent);
            var text = e.target.textContent;
            

            var jobs = document.querySelectorAll(".job");
            jobs.forEach((job)=>{
             
                var table = job.querySelector(".table");
                var tools = table.querySelectorAll(".option");
                var find = false;
                for (var tool of tools){
                    if(tool.textContent == text){
                        find = true;
                    }
                }

                if(find == false){
                    job.classList.add("hidden");
                }
            })

            var content = document.createElement("span");
            content.innerHTML = e.target.innerText;
            
            
            var cancelButton = document.createElement("span");
            cancelButton.textContent = "X";
            cancelButton.setAttribute("class", "cancel");
            content.appendChild(cancelButton);

            content.setAttribute("class","modalOption");
          
            cancelButton.addEventListener("click", (e)=>{
           
            var item = e.target.parentNode;
        


            var index = optionList.indexOf(item);
            optionList.splice(index, 1);

            modalContent.removeChild(e.target.parentNode);
           
        
            var hiddenJobs = document.querySelectorAll(".hidden");
            console.log(hiddenJobs);
            var jobs = filterAllOption(optionList, hiddenJobs);
            
            //delete the option, it means the jobs filtered earlier should be recover in
            //the previous option filter. 
            //Therefore, filtered the deleted(hidden)jobs by the optionList except the 
            //delete option.

            jobs.forEach((job)=>{
                job.classList.remove("hidden");
            })
            


            if(modalContent.innerHTML == ""){
                modal.style.display = "none";
                jobs.forEach((job)=>job.classList.remove("hidden"));
            }

          })
           modalContent.appendChild(content);
           
          

         
        }
        })


    clear.addEventListener("click", ()=>{
        optionList = [];
        modalContent.innerHTML = "";
        modal.style.display = "none";
        //var jobs = document.querySelectorAll(".job");
        //jobs.forEach((job)=>job.classList.remove("hidden"));
        
    })

}) }

function recoverHiddenJobs(hiddenJobs, option){
    var jobs = [];
    hiddenJobs.forEach((job)=>{
        var table = job.querySelector(".table");
        var tools = job.querySelectorAll(".option");
        console.log(tools);
        var find = false;
        for (var tool of tools){
             if(tool.textContent == option){
                    find = true;
                }
      
            }

            if(find){
                jobs.push(job);
            }
    })
    return jobs;
}

function filterAllOption(optionList, HiddenJobs){
    for(var i=0; i <optionList.length; i++){
        HiddenJobs = recoverHiddenJobs(HiddenJobs, optionList[i]);
    }
    return HiddenJobs;
}

   



function addNode(modal, textContent, type, className){
    var clearButton = document.createElement(type);
    clearButton.textContent = textContent;
    clearButton.setAttribute("class", className);
    modal.appendChild(clearButton)
}


function initial(data){


    for(var i=0; i < data.length; i++){
        console.log(data[i]);
        var info = data[i];
        const newElement = document.createElement('div');
        newElement.className = "job";
        var img = new Image();
        img.src = info["logo"];
        img.setAttribute("class", "logo");
        img.setAttribute('alt', "A");
        newElement.appendChild(img);

        var firstLine = document.createElement("div");
        firstLine.setAttribute("class", "firstLine");

        var company = document.createElement('p');
        company.textContent = info["company"];
        company.setAttribute('class', "company");
        if(info["new"] ===true){
            addNode(company, "new!", "span", "new");
            /*var newContent = document.createElement("span");
            newContent.textContent = "new!";
            newContent.setAttribute("class", "new");
            company.appendChild(newContent);*/
        }

        if(info["featured"] ===true){

            addNode(company, "featured", "span", "featured");
        }

       
        firstLine.appendChild(company);
        var textContent = info["position"];
        addNode(firstLine, textContent, "p", "position");
        
        /*var position = document.createElement("p");
        position.innerHTML = info["position"];
        position.setAttribute("class", "position");
        firstLine.appendChild(position);*/

        var place = document.createElement("p");
        place = getTimeLocation(place, info);
        firstLine.appendChild(place);
      
        var table = document.createElement("p");
        
        table.setAttribute("class", "table");

        textContent = info["role"];
        addNode(table, textContent, "span", "option");

        /*var role = document.createElement("span");
        role.textContent = info["role"];
        role.setAttribute("class", "option");
        table.appendChild(role);*/

        textContent = info["level"];
        addNode(table, textContent, "span", "option");
        /*var level = document.createElement("span");
        level.textContent = info["level"];
        level.setAttribute("class", "option");
        table.appendChild(level);*/

        var languages = info["languages"];
        table = getTools(languages, table);
        var tools = info["tools"];
        if(tools.length > 0){
            table = getTools(tools, table);
        }


        newElement.appendChild(firstLine);
        newElement.appendChild(table);
        main.appendChild(newElement);    

    }
}



function getTools(languages, table){
    for (var i=0; i<languages.length; i++){
        var textContent = languages[i];
        addNode(table, textContent, "span", "option");
        /*var language = document.createElement("span");
        language.textContent = languages[i];
        language.setAttribute("class", "option");*/
    }

    return table;
}


/*initial();*/

function getTimeLocation(place, info){

    var textContent = info["postedAt"];
    addNode(place, textContent, "span", "gray");
    
    addNode(place, "", "span", "dot");

    textContent = info["contract"];
    addNode(place, textContent, "span", "gray");

  
    addNode(place, "", "span", "dot");
    textContent = info["location"];
    addNode(place, textContent, "span", "gray");

    
    return place;
}

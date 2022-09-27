const main = document.querySelector('main');
const myRequest = new Request('data.json');





fetch(myRequest)
    .then((response)=>response.json())
    .then((data)=>{
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
                var newContent = document.createElement("span");
                newContent.textContent = "new!";
                newContent.setAttribute("class", "new");
                company.appendChild(newContent);
            }

            if(info["featured"] ===true){
                var feature = document.createElement("span");
                feature.textContent = "featured";
                feature.setAttribute("class", "feature");
                company.appendChild(feature);
            }

           
            firstLine.appendChild(company);
            
            var position = document.createElement("p");
            position.innerHTML = info["position"];
            position.setAttribute("class", "position");
            firstLine.appendChild(position);

            var place = document.createElement("p");
           
            getTimeLocation(place, info);
            firstLine.appendChild(place);

            var table = document.createElement("div");
            table.setAttribute("class", "table");
            var role = document.createElement("span");
            role.textContent = info["role"];
            role.setAttribute("class", "option");
            table.appendChild(role);

            var level = document.createElement("span");
            level.textContent = info["level"];
            level.setAttribute("class", "option");
            table.appendChild(level);

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

        clear.addEventListener("click", ()=>{
            optionList = [];
            modal.style.visibility = "hidden";
            var content = querySelectorAll(".modalOption");
            
            
        })

        data.filter(element=>{
            var table = element["languages"];
            table.push(...element["tools"]);
            table.push(element["role"]);
            table.push(element["level"]);
            if(isInOptionList(table, optionList) !== true){
                main.removeChild(element);
            }
        })



       
      

        
       
       


    })

function getTimeLocation(place, info){

    var postedAt = document.createElement("span");
    postedAt.textContent = info["postedAt"];
    postedAt.setAttribute("class","gray");
    var contract = document.createElement("span");
    contract.textContent = info["contract"];
    contract.setAttribute("class","gray");
    var location = document.createElement("span");
    location.textContent = info["location"];
    location.setAttribute("class","gray");
    var dot1 = document.createElement("span");
    dot1.setAttribute("class", "dot");
    var dot2 = document.createElement("span");
    dot2.setAttribute("class", "dot");
          
    place.appendChild(postedAt);
    place.appendChild(dot1);
    place.appendChild(contract);
    place.appendChild(dot2);
    place.appendChild(location);
}




function getTools(languages, table){
    for (var i=0; i<languages.length; i++){
        var language = document.createElement("span");
        language.textContent = languages[i];
        language.setAttribute("class", "option");
        
        table.appendChild(language);
    }

    return table;
}

function isInOptionList(elements, optionList){
    for (var i=0; i <elements.length; i++){
        if(elements[i].indexOf(optionList) < 0){
            return false;
        }
    }
    return true;
}








   
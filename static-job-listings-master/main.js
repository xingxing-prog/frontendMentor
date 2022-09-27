const main = document.querySelector('main');
const myRequest = new Request('data.json');


function initial(){

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
            /*var postedAt = document.createElement("span");
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
            firstLine.appendChild(place);*/

            var table = document.createElement("p");
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
    })
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

/*initial();*/

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

   
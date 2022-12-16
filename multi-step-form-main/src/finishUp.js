const result = ()=>{

    const main = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "h3");
    h3.innerHTML = "Finishing up";
    main.appendChild(h3);

    const sub = document.createElement("div");
    sub.setAttribute("class", "sub");
    sub.textContent = "Double-check everything looks OK before confirming.";
    main.appendChild(sub);

    
    let planChoice = document.createElement("div");

    const plan = document.createElement("div");
    let planName1 = document.createElement("p");
    planName1.setAttribute("class", "planName");
    planName1.textContent = "Arcade(Monthly)";
    plan.appendChild(planName1);
    const change = document.createElement("button");
    change.innerHTML = "Change";
    change.setAttribute("class", "onlinePrice");
    plan.appendChild(change);
    planChoice.appendChild(plan);

    const price = document.createElement("p");
    price.setAttribute("class", "onlinePrice");
    price.innerText = "$9/mo";
    planChoice.appendChild(price);


    planChoice.appendChild(document.createElement("hr"));

    let addOn = document.createElement("div");
    addOn.setAttribute("class", "addOn");


    let online = document.createElement("p");
    online.setAttribute("class", "subSmall");
    online.innerHTML = "Online service";
    addOn.appendChild(online);
    const onlinePrice = document.createElement("p");
    onlinePrice.setAttribute("class", "onlinePrice");
    onlinePrice.innerHTML = "$1/mo";
    addOn.appendChild(onlinePrice);
    planChoice.appendChild(addOn);

    let addOn2 = document.createElement("div");
    addOn2.setAttribute("class", "addOn");

    let storage = document.createElement("p");
    storage.setAttribute("class", "subSmall");
    storage.innerHTML = "Larger storage";
    addOn2.appendChild(storage);
    const storagePrice = document.createElement("p");
    storagePrice.setAttribute("class", "onlinePrice");
    storagePrice.innerHTML = "$1/mo";
    addOn2.appendChild(storagePrice);
    planChoice.appendChild(addOn2);


    let addOn3 = document.createElement("div");
    addOn3.setAttribute("class", "addOn");
    
    const total = document.createElement("p");
    total.innerHTML = "Total(per month)";
    total.setAttribute("class", "subSmall");
    addOn3.appendChild(total);
    const totalPrice = document.createElement("p");
    totalPrice.setAttribute("class", "totalPrice");
    totalPrice.innerHTML = "$12/mo";
    addOn3.appendChild(totalPrice);
    planChoice.appendChild(addOn3);

    main.appendChild(planChoice);

    const buttons = document.createElement("div");

    const goBack = document.createElement("div");
    goBack.innerHTML = "Go Back";
    goBack.setAttribute("class", "goBack");
    buttons.appendChild(goBack);
   

    const button = document.createElement("button");
    button.setAttribute("class", "confirm");
    button.innerHTML = "Confirm";
    button.setAttribute("type", "submit");
    buttons.appendChild(button);
   
  
    main.appendChild(buttons);

    return main;

}

export default result;
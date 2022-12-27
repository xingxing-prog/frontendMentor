
const addOn = ()=>{
    const main = document.createElement("div");
    main.setAttribute("class", "info");

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "h3");
    h3.innerHTML = "Pick add-ons";
    main.appendChild(h3);

    const sub = document.createElement("div");
    sub.setAttribute("class", "sub");
    sub.textContent = "Add-ons help enhance your gaming experience.";
    main.appendChild(sub);

    const form = document.createElement("form");
    form.setAttribute("class", "formPickOn");
    form.id = "pickOns";

    const online = document.createElement("div");
    online.setAttribute("class", "type");
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.setAttribute("class", "checkbox");
    online.appendChild(inputCheck);
    
    const onlineType = document.createElement("div");
    const onlineContent = document.createElement("p");
    onlineContent.setAttribute("class", "onlineContent");
    onlineContent.textContent = "Online service";
    onlineType.appendChild(onlineContent);
   
    const onlineSub = document.createElement("span");
    onlineSub.setAttribute("class", "subSmall");
    onlineSub.textContent = "Access to multiplayer games";
    onlineType.appendChild(onlineSub);
    online.appendChild(onlineType);

    const priceOnline = document.createElement("p");
    priceOnline.innerHTML = "$1/mo";
    priceOnline.setAttribute("class", "price");
    online.appendChild(priceOnline);

    form.appendChild(online);

    const storage = document.createElement("div");
    storage.setAttribute("class", "type");
    const inputCheck2 = document.createElement("input");
    inputCheck2.type = "checkbox";
    inputCheck2.setAttribute("class", "checkbox");
    storage.appendChild(inputCheck2);

    const storageType = document.createElement("div");
    const storageContent = document.createElement("p");
    storageContent.setAttribute("class", "onlineContent");
    storageContent.textContent = "Larger storage";
    storageType.appendChild(storageContent);
    //storageContent.appendChild(document.createElement("br"));
    const storageSub = document.createElement("p");
    storageSub.setAttribute("class", "subSmall");
    storageSub.textContent = "Extra 1TB of cloud save";
    storageType.appendChild(storageSub);
    storage.appendChild(storageType);

    const priceStorage = document.createElement("p");
    priceStorage.innerHTML = "$2/mo";
    priceStorage.setAttribute("class", "price");
    storage.appendChild(priceStorage);

    form.appendChild(storage);

    const profile = document.createElement("div");
    profile.setAttribute("class", "type");

    const inputCheck3 = document.createElement("input");
    inputCheck3.type = "checkbox";
    inputCheck3.setAttribute("class", "checkbox");
    profile.appendChild(inputCheck3);

    const profileType = document.createElement("div");
    const profileContent = document.createElement("p");
    profileContent.setAttribute("class", "onlineContent");
    profileContent.textContent = "Customizable profile";
    profileType.appendChild(profileContent);

    //profileContent.appendChild(document.createElement("br"));
    const profileSub = document.createElement("p");
    profileSub.setAttribute("class", "subSmall");
    profileSub.textContent = "Custom theme on your profile";
    profileType.appendChild(profileSub);
    profile.appendChild(profileType);

    const priceProfile = document.createElement("p");
    priceProfile.innerHTML = "$2/mo";
    priceProfile.setAttribute("class", "price");
    profile.appendChild(priceProfile);

    form.appendChild(profile);

    main.appendChild(form);

     const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");

    const goBack = document.createElement("div");
    goBack.innerHTML = "Go Back";
    goBack.setAttribute("class", "goBack");
    buttons.appendChild(goBack);
   

    const button = document.createElement("button");
    button.setAttribute("class", "nextButton");
    button.innerHTML = "Next Step";
    button.setAttribute("type", "submit");
    buttons.appendChild(button);

    main.appendChild(buttons);
    return main;
  
}

export default addOn;
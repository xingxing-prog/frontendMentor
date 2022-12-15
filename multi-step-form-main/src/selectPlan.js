import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

const plan = ()=>{

    const main = document.createElement("div");

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "h3");
    h3.innerHTML = "Select your plan";
    main.appendChild(h3);

    const sub = document.createElement("div");
    sub.setAttribute("class", "sub");
    sub.textContent = "You have the option of monthly or yearly billing.";
    main.appendChild(sub);

    const plans = document.createElement("div");

    const plan1 = document.createElement("div");
    plan1.setAttribute("class", "plan");
    let image1 = new Image();
    image1.src = arcade;
    plan1.appendChild(image1);
    let planName1 = document.createElement("p");
    planName1.setAttribute("class", "planName");
    planName1.textContent = "Arcade";
    plan1.appendChild(planName1);
    let price1 = document.createElement("p");
    price1.setAttribute("class", "price");
    price1.textContent = "$9/mo";
    plan1.appendChild(price1);
    plans.appendChild(plan1);

    



    const plan2 = document.createElement("div");
    plan2.setAttribute("class", "plan");
    let image2 = new Image();
    image2.src = advanced;
    plan2.appendChild(image2);
    let planName2 = document.createElement("p");
    planName2.setAttribute("class", "planName");
    planName2.textContent = "Advanced";
    plan2.appendChild(planName2);
    let price2 = document.createElement("p");
    price2.setAttribute("class", "price");
    price2.textContent = "$12/mo";
    plan2.appendChild(price2);
    plans.appendChild(plan2);
    

    const plan3 = document.createElement("div");
    plan3.setAttribute("class", "plan");
    let image3 = new Image();
    image3.src = pro;
    plan3.appendChild(image3);
    let planName3 = document.createElement("p");
    planName3.setAttribute("class", "planName");
    planName3.textContent = "Pro";
    let price3 = document.createElement("p");
    price3.setAttribute("class", "price");
    price3.textContent = "$15/mo";
    plan3.appendChild(price3);
    plans.appendChild(plan3);

    main.appendChild(plans);

    const toggle = document.createElement("div");
    const toggleSwitch = document.createElement("div");
    toggleSwitch.setAttribute("class", "toggleSwitch");
    const left = document.createElement("p");
    left.textContent = "Monthly";
    left.setAttribute("class", "left");
    toggleSwitch.appendChild(left);
    const inputCheck = document.createElement("input");
    inputCheck.setAttribute("class", "inputCheck");
    inputCheck.type = "checkbox";
    inputCheck.id = "switch";
    toggleSwitch.appendChild(inputCheck);
    const labelInput = document.createElement("label");
    labelInput.setAttribute("class", "labelInput");
    labelInput.htmlFor = "switch";
    labelInput.textContent = "Toggle";
    toggleSwitch.appendChild(labelInput);
    const right = document.createElement("p");
    right.textContent = "Yearly";
    right.setAttribute("class", "left");
    toggleSwitch.appendChild(right);
    toggle.appendChild(toggleSwitch);

    main.appendChild(toggle);

    const buttons = document.createElement("div");

    const goBack = document.createElement("div");
    goBack.innerHTML = "Go Back";
    goBack.setAttribute("class", "goBack");
    buttons.appendChild(goBack);
   

    const button = document.createElement("button");
    button.setAttribute("class", "next");
    button.innerHTML = "Next Step";
    button.setAttribute("type", "submit");
    buttons.appendChild(button);

    main.appendChild(buttons);

    return main;
}

export default plan;
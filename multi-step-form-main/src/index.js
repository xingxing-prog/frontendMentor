import './style.css';
import sidebar from "./assets/images/bg-sidebar-desktop.svg";
import info from "./personalInfo.js";
import plan from "./selectPlan.js";
import addOn from "./addOns.js";
import finish from "./finishUp.js";

function component(){
    const element = document.createElement("div");
    
    //element.appendChild(info());
    //element.appendChild(plan());
    //element.appendChild(addOn());
    element.appendChild(finish());
    
    return element;
}

const main = document.querySelector(".main");
main.appendChild(component());
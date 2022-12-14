import './style.css';
import sidebar from "./assets/images/bg-sidebar-desktop.svg";
import info from "./personalInfo.js";
import plan from "/.selectPlan.js";


function component(){
    const element = document.createElement("div");
    
    element.appendChild(info());
    element.appendChild(plan());
    
    return element;
}

const main = document.querySelector(".main");
main.appendChild(component());
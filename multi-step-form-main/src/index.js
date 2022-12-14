import './style.css';
import sidebar from "./assets/images/bg-sidebar-desktop.svg";
import info from "./personalInfo.js";


function component(){
    const element = document.createElement("div");
    
    element.appendChild(info());
    
    return element;
}

const main = document.querySelector(".main");
main.appendChild(component());
import thankyou from "./assets/images/icon-thank-you.svg";

const thank =()=>{

    const main = document.createElement("div");
    main.setAttribute("class", "center");

    const center = document.createElement("div");
    
    let image1 = new Image();
    image1.src = thankyou;
    center.appendChild(image1);
    main.appendChild(center);


    const h3 = document.createElement("h3");
    h3.setAttribute("class", "h3");
    h3.innerHTML = "Thank you!";
    main.appendChild(h3);

    const p = document.createElement("p");
    p.setAttribute("class", "planName");
    p.textContent = " Thanks for confirming your subscription! We hope you have fun \
    using our platform. If you ever need support, please feel free\
    to email us at support@loremgaming.com.";
    main.appendChild(p);

    
    return main;
}

export default thank;
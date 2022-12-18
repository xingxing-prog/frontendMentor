

const infoContent =()=>{
    const info = document.createElement("div");
    info.setAttribute("class", "info");

    const h3 = document.createElement("h3");
    h3.setAttribute("class", "personal");
    h3.textContent = "Personal info";

    info.appendChild(h3);

    const sub = document.createElement("div");
    sub.setAttribute("class", "sub");
    sub.textContent = "Please provide your name, email address, and phone number.";
   

    info.appendChild(sub);
    info.appendChild(document.createElement("br"));
    
  

    const form = document.createElement("form");
    form.setAttribute("class", "formContact");
    form.id = "contact";
    

    const nameContent = document.createElement("div");
    nameContent.setAttribute("class", "nameContent");
    const labelName = document.createElement("label");
    labelName.setAttribute("class", "label");
    labelName.htmlFor = "name"
    labelName.innerHTML = "Name";
    nameContent.appendChild(labelName);
    nameContent.appendChild(document.createElement("br"));

    const nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.setAttribute("class", "email");
    nameInput.placeholder = "e.g. Stephen King";
    nameInput.setAttribute("required", "");
    nameContent.appendChild(nameInput);
    nameContent.appendChild(document.createElement("br"));
    form.appendChild(nameContent);
   

    const emailContent = document.createElement("div");
    emailContent.setAttribute("class", "nameContent");
    const labelEmail = document.createElement("label");
    labelName.setAttribute("class", "label");
    labelEmail.htmlFor = "email";
    labelEmail.innerHTML = "Email Address";
    emailContent.appendChild(labelEmail);
    emailContent.appendChild(document.createElement("br"));

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("class", "email");
    emailInput.placeholder = "e.g. stephenking@lorem.com";
    emailInput.setAttribute("required", "");
    emailContent.appendChild(emailInput);
    emailContent.appendChild(document.createElement("br"));
    form.appendChild(emailContent);
 

    const phoneContent = document.createElement("div");
    phoneContent.setAttribute("class", "nameContent");
    const labelPhone = document.createElement("label");
    labelPhone.htmlFor = "phone";
    labelPhone.innerHTML = "Phone Number";
    labelName.setAttribute("class", "label");
    phoneContent.appendChild(labelPhone);
    phoneContent.appendChild(document.createElement("br"));
    

    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("name", "phone");
    phoneInput.setAttribute("class", "email");
    phoneInput.placeholder = "e.g. +1 234 567 890";
    phoneInput.setAttribute("required", "");
    phoneInput.pattern = "[0-9]{1,2} [0-9]{3} [0-9]{3} [0-9]{3}";
    phoneContent.appendChild(phoneInput);
    phoneContent.appendChild(document.createElement("br"));
    form.appendChild(phoneContent);


    const button = document.createElement("button");
    button.setAttribute("class", "next");
    button.innerHTML = "Next Step";
    button.setAttribute("type", "submit");

    form.appendChild(button);

    info.appendChild(form);
    return info;
}

export default infoContent;
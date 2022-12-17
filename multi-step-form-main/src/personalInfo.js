

const infoContent =()=>{
    const info = document.createElement("div");

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
    


    const labelName = document.createElement("label");
    labelName.setAttribute("class", "label");
    labelName.htmlFor = "name"
    labelName.innerHTML = "Name";
    form.appendChild(labelName);
    form.appendChild(document.createElement("br"));

    const nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.placeholder = "e.g. Stephen King";
    nameInput.setAttribute("required", "");
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));


    const labelEmail = document.createElement("label");
    labelName.setAttribute("class", "label");
    labelEmail.htmlFor = "email";
    labelEmail.innerHTML = "Email Address";
    form.appendChild(labelEmail);
    form.appendChild(document.createElement("br"));

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.placeholder = "e.g. stephenking@lorem.com";
    emailInput.setAttribute("required", "");
    form.appendChild(emailInput);
    form.appendChild(document.createElement("br"));

    const labelPhone = document.createElement("label");
    labelPhone.htmlFor = "phone";
    labelPhone.innerHTML = "Phone Number";
    labelName.setAttribute("class", "label");
    form.appendChild(labelPhone);
    form.appendChild(document.createElement("br"));

    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("name", "phone");
    phoneInput.placeholder = "e.g. +1 234 567 890";
    phoneInput.setAttribute("required", "");
    form.appendChild(phoneInput);
    form.appendChild(document.createElement("br"));



    const button = document.createElement("button");
    button.setAttribute("class", "next");
    button.innerHTML = "Next Step";
    button.setAttribute("type", "submit");

    form.appendChild(button);

    info.appendChild(form);
    return info;
}

export default infoContent;
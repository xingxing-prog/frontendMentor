
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

    const form = document.createElement("form");
    form.setAttribute("class", "form");
    form.action = "";

    

    const labelName = document.createElement("label");
    labelName.htmlFor = "name"
    labelName.innerHTML = "Name";
    const nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");
    nameInput.placeholder = "e.g. Stephen King";
    nameInput.attributes.required = "required";


    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email";
    labelEmail.innerHTML = "Email Address";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.placeholder = "e.g. stephenking@lorem.com";
    emailInput.attributes.required = "required";

    const labelPhone = document.createElement("label");
    labelPhone.htmlFor = "phone";
    labelPhone.innerHTML = "Phone Number";
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type", "tel");
    phoneInput.setAttribute("name", "phone");
    phoneInput.placeholder = "e.g. +1 234 567 890";
    phoneInput.attributes.required = "required";



    form.appendChild(labelName);
    form.appendChild(nameInput);
    form.appendChild(labelEmail);
    form.appendChild(emailInput);
    form.appendChild(labelPhone);
    form.appendChild(phoneInput);

    info.appendChild(form);

    const button = document.createElement("button");
    button.setAttribute("class", "next");
    button.innerHTML = "Next Step";

    info.appendChild(button);

    return info;
}

export default infoContent;
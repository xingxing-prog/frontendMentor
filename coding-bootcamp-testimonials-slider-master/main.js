var testimonials = [];

var john = {
    image: "/images/image-john.jpg",
       
    advice: '“ If you want to lay the best foundation possible I’d recommend taking this course.\
    The depth the instructors go into is incredible. I now feel so confident about\
    starting up as a professional developer."',
    name: "John Tarkpor",
    job: "Junior Front-end Development"

};

var tanya = {
    image:"images/image-tanya.jpg",  
    advice:'“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so\
    excited about the future. ”',
    name: "Tanya Sinclair",
    job: "UX Engineer"
}

testimonials.push(tanya);
testimonials.push(john);



var button = document.querySelector("button");
var picture = document.querySelector(".person");
var advice = document.querySelector(".advice");
var personName = document.querySelector(".name");
var job = document.querySelector(".job");

button.addEventListener("click", (e)=>{
    
    var item = testimonials.pop();
   
    testimonials.unshift(item);
   
    picture.src = item.image;
    advice.innerHTML = item.advice;
    personName.textContent = item.name;
    job.textContent = item.job;

});


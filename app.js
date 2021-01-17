//Test to check if the script file is properly linked.
// console.log("I am working oooo")

const card = document.querySelector('.card');
const container = document.querySelector('.container');

const img = document.querySelector('.headshot img');
const title = document.querySelector('.info h1');
const desc = document.querySelector('.description h3');
const btn = document.querySelector('.sizes');
const ping = document.querySelector('.ping button');



container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY, e.pageZ);
    let xAxis = (window.innerWidth/2 - e.pageX) / 20;
    let yAxis = (window.innerHeight/2 - e.pageY) / 20;

    card.style.transform  = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
    img.style.transform = `translateZ(10px) rotateX(${yAxis}deg) rotateY(${xAxis}deg) rotateZ(${(xAxis + yAxis)*2}deg)`;
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    img.style.transform = `translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    title.style.transform = "translateZ(0px)";
    desc.style.transform = "translateZ(0px)";
    btn.style.transform = "translateZ(0px)";
    ping.style.transform = "translateZ(0px)";
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    desc.style.transform = "translateZ(120px)";
    btn.style.transform = "translateZ(100px)";
    ping.style.transform = "translateZ(80px)";
   
});
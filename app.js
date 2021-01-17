//Test to check if the script file is properly linked.
// console.log("I am working oooo")

const card = document.querySelector('.card');
const container = document.querySelector('.container');



container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth/2 - e.pageX) / 20;
    let yAxis = (window.innerHeight/2 - e.pageY) / 20;

    card.style.transform  = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
})

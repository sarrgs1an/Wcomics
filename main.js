let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let lengthItems = items.length - 1;
let active = 0;

let myText = document.getElementById("myText");
let myText2 = document.getElementById("myText2");

let texts = ["Guardians of the galaxi", "Marvel Comics", "The Batman", "Marvel"];
let texts2 = ["#1 triler", "come back", "get your copy 30% off", "see the catalog"];



function changeText(){
    myText.innerHTML = texts[active];
    myText2.innerHTML = texts2[active];
    
}

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
    changeText();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
    changeText();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    //
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
    
};
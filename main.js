/*when click on apparence change darkmode*/

let title = document.querySelector("#toggleMode");
let body = document.querySelector("body");

title.addEventListener("click", function() {
    body.classList.toggle("darkmode");
});

/*burgermenu*/

let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('open');
    burger.classList.toggle('rotate');
});

/*changer de carte quand tu clique dessus*/

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');

c1.addEventListener('click', function() {
    this.style.backgroundImage = "url('IMG_9086.jpeg')";   
    this.style.backgroundSize = "cover";
});

c2.addEventListener('click', function() {
    this.style.backgroundImage = "url('IMG_9085.jpeg')";
    this.style.backgroundSize = "cover";
});

c3.addEventListener('click', function() {
    this.style.backgroundImage = "url('IMG_9089.jpeg')";
    this.style.backgroundSize = "cover";
});

c4.addEventListener('click', function() {
    this.style.backgroundImage = "url('IMG_9088.jpeg')";
    this.style.backgroundSize = "cover";
});
var x = document.querySelector('.plus');
var y = document.querySelector('.minus');
var z = document.querySelector('.maximized');
var a = document.querySelector('.minimized');
x.addEventListener("click", ()=>{
    x.classList.toggle('clicker');
    y.classList.toggle('clicker');
    z.classList.toggle('clicker');
    a.classList.toggle('radius');
});
y.addEventListener("click", ()=>{
    x.classList.toggle('clicker');
    y.classList.toggle('clicker');
    z.classList.toggle('clicker');
    a.classList.toggle('radius');
});
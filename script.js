let menuBar = document.getElementById('meun-bar')
let navLink = document.getElementById('Nav-Link')


function showmenu(){
    menuBar.classList.toggle('fa-times')
    navLink.classList.toggle('active')
}

let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")


function back(){
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
}

function next(){
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
}


let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let p3 = document.querySelector('.p3')
let priceTotal = document.getElementById("priceTotal")

plus.addEventListener('click', increase)

function increase(){
    let p3 = document.querySelector('.p3').innerHTML;
    p3++;
    console.log(p3);
    document.querySelector('.p3').innerHTML = p3++
    let priceTotal = document.getElementById("priceTotal").innerHTML
    parseInt(priceTotal) + 5000;
    document.getElementById("priceTotal").innerHTML = parseInt(priceTotal) + 5000;   
    
}

minus.addEventListener('click', decrease)
function decrease(){
    if(document.querySelector('.p3').innerHTML >= 2){
    let p3 = document.querySelector('.p3').innerHTML;
    p3--;
    document.querySelector('.p3').innerHTML = p3--
    let priceTotal = document.getElementById("priceTotal").innerHTML
    parseInt(priceTotal) - 5000;
    document.getElementById("priceTotal").innerHTML = parseInt(priceTotal) - 5000; 
}
}
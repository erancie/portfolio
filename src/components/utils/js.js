// hide nav scroll listener

const nav = document.querySelector('#apus-header');

let lastPosition;

window.addEventListener('scroll', hideNav);

function hideNav(){
    if( window.scrollY > lastPosition ) nav.style.transform = 'translateY(-4.2rem)'
    else  nav.style.transform = 'translateY(0)'
//     if( window.scrollY > '80') nav.style.background = ''
//     else nav.style.background = ''
    lastPosition = window.scrollY 
};
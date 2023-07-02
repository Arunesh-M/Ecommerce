
//Taskbar Icons 

let winIcon=document.getElementById('start-icon');
let winDisplay=document.querySelector('#start-menu');

let searchIcon=document.getElementById('search-icon');
let searchDisplay=document.querySelector('#search-menu');

let widgetIcon=document.getElementById('widgets-icon');
let widgetDisplay=document.querySelector('#widget-menu');

let chromeIcon=document.getElementById('chrome-icon');
let chromeDisplay=document.querySelector('body');
let iconsHide=document.getElementsByClassName('desktop_icons')[0];

let vsIcon=document.getElementById('vscode-icon');
let vsDisplay=document.querySelector('#vscode-menu');

let exIcon=document.getElementById('explorer-icon');
let exDisplay=document.querySelector('#explorer-menu');

let storeIcon=document.getElementById('store-icon');
let storeDisplay=document.querySelector('#store-menu');


winIcon.addEventListener('click',()=>{
    winDisplay.classList.toggle('display');
})

searchIcon.addEventListener('click',()=>{
    searchDisplay.classList.toggle('display');
})

widgetIcon.addEventListener('click',()=>{
    widgetDisplay.classList.toggle('display');
})

vsIcon.addEventListener('click',()=>{
    vsDisplay.classList.toggle('display');
})

exIcon.addEventListener('click',()=>{
    exDisplay.classList.toggle('display');
})

storeIcon.addEventListener('click',()=>{
    storeDisplay.classList.toggle('display');
})

chromeIcon.addEventListener('click',()=>{
   chromeDisplay.classList.toggle('display');
   iconsHide.classList.toggle('display')
})

// Desktop Icons

let pcIcon=document.getElementById('pc');
let pcFolder=document.querySelector('#pc-folder');
let pcClose=document.getElementById('pc-close');

pcIcon.addEventListener('dblclick',()=>{
    pcFolder.classList.add('display');
 })
 
 pcClose.addEventListener('click',()=>{
    pcFolder.classList.remove('display')
 })

let edgeIcon=document.getElementById('bin');
let edgeDisplay=document.querySelector('#bin-folder');
let edgeClose=document.getElementById('bin-close');

edgeIcon.addEventListener('dblclick',()=>{
    edgeDisplay.classList.add('display');
 })

 edgeClose.addEventListener('click',()=>{
    edgeDisplay.classList.remove('display');
 })

let binIcon=document.getElementById('edge');
let binFolder=document.querySelector('#edge-display');
let binClose=document.getElementById('edge-close');

binIcon.addEventListener('dblclick',()=>{
    binFolder.classList.add('display');
 })
 
 binClose.addEventListener('click',()=>{
    binFolder.classList.remove('display');
 })


//  power

let power=document.getElementById('power');


power.addEventListener('click',()=>{
    power.setAttribute('href','../indexlog.html')
})

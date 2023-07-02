let outputScreen=document.getElementById('output');

function display(num){
    outputScreen.value+=num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value)
    }
    catch{
        outputScreen.value="ERROR";
    }
}

function clearValue(){
    outputScreen.value="";
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}

// toggle

let calcIcon=document.getElementById('calc');
let calcDisplay=document.querySelector('#calc-display');
let calcClose=document.getElementById('calc-close');

calcIcon.addEventListener('dblclick',()=>{
   calcDisplay.classList.add('display')
})

calcClose.addEventListener('click',()=>{
    calcDisplay.classList.remove('display')
 })





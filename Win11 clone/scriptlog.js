// First click

let click=document.querySelector('.blur');
let dateTime=document.querySelector('.date-time');
let sign=document.querySelector('.sign')


click.addEventListener('click',()=>{
    dateTime.style.display="none";
    sign.style.display="flex";
})

// power off

let power=document.querySelector('#power-off');
let body=document.querySelector('body')

power.addEventListener('click',()=>{
    click.style.display="none";
    body.style.background="black";

})

// click event

let signIn=document.querySelector('#btn');
let input=document.querySelector('#int');
let check=document.querySelector('#check');

signIn.addEventListener('click',()=>{
    signIn.style.display="none";
    input.style.display="block";
    check.style.display="block";
})

let error=document.querySelector('.error');
let link=document.querySelector('#link')



check.addEventListener('click',()=>{
    if(input.value == ""){
        error.innerHTML="Password is empty!"
        error.style.display="block";
    }
    else if(input.value.length < 5 || input.value.length > 15){
        error.innerHTML="Between 5 to 15 length"
        error.style.display="block";
    }
    else if(input.value != "12345678"){
        error.innerHTML="Wrong Password!!!"
        error.style.display="block";
    }
    else{
        link.setAttribute('href','Window/index.html')
    }

    setTimeout(() => {
        error.style.display="none";
    }, 5000);

})


   
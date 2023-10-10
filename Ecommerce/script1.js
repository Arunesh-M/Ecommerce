function ready(){
    console.log("Ready")
}

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready);
 }
 else{
     showProcess();
 }

// Header Process

let cartIcon=document.getElementById('cart_icon');
let closeCart=document.getElementById('close-cart');
let cartDisplay=document.querySelector('.cart');
let cartBox=document.getElementsByClassName('cart-content')[0];

cartIcon.addEventListener("click",(e)=>{
    cartDisplay.style.display="block";
})

closeCart.addEventListener("click",(e)=>{
    cartDisplay.style.display="none";
})

// Buy Process

let btn=document.querySelector(".btn");
let total=document.getElementById("Tot");

btn.addEventListener("click",(e)=>{
    if(total.innerHTML == "₹ 0"){
        alert("Your Cart is Empty!!!");
        return
    }
    if(confirm(`Do you want to place your order for ${total.innerHTML}`) == true){
        alert("Thank you!Your order is placed");
    }
    else{
        alert("**Ok,you changed your mind it Seems**");
    }   
})

// cart Process

let add=document.getElementsByClassName('cart2');

for(i=0;i<add.length;i++){
    let addset=add[i];
    addset.addEventListener('click',addCart);
}

function addCart(e){
    let target=e.target; 
    let parent=target.parentElement; 
    let title=parent.getElementsByClassName("product-title")[0].innerText;
    let price=parent.getElementsByClassName("price")[0].innerText;
    let al=parent.getElementsByClassName("product-img")[0].alt;
    let img=parent.getElementsByClassName("product-img")[0].src;
    
    let cartBox=document.getElementsByClassName('cart-content')[0];
    let check=cartBox.getElementsByClassName('cart-product-title');
    for(i=0;i<check.length;i++){
        if(check[i].innerText == title){
            alert("You have already Added this item in Cart");
            return  
        }  
    }

    let createdBox=document.createElement('div');
    createdBox.classList.add("cart-box");
    createdBox.innerHTML=` 
        <img src="${img}" alt="${al}" class="cart-img" >
        <div class="details">
            <h2 class="cart-product-title">${title}</h2>
            <p class="cart-price">${price}</p>
            <input type="number" value="1" class="cart-quantity">
        </div>  
        <i class='bx bxs-trash-alt remove'></i>`
    
    cartBox.insertBefore(createdBox,cartBox.children[0]);
    updateTotal()
   
    let remove=document.getElementsByClassName('remove');
    let input=document.getElementsByClassName('cart-quantity');

    remove[0].addEventListener('click',removeCart);
    input[0].addEventListener('change',changingInput);
    
    saveData();

}

// remove

let remove=document.getElementsByClassName('remove');

for(i=0;i<remove.length;i++){
    let removeSet=remove[i];
    removeSet.addEventListener('click',removeCart);
}

function removeCart(e){
    let target=e.target;
    target.parentElement.remove();
    updateTotal();
    saveData();
}

// Changing Input

let input=document.getElementsByClassName('cart-quantity');

for(i=0;i<input.length;i++){
    let inputSet=input[i];
    inputSet.addEventListener('change',changingInput);
}   

function changingInput(e){
    let target=e.target;
    if(isNaN(target.value) || target.value <=0){
        target.value=1;
    }
    else if(isFinite(target.value)){
        target.value=parseInt(target.value);
    }
    updateTotal();
    saveData();
}

function updateTotal(){
    let cartTestingbox=document.getElementsByClassName('cart-box')[0];
    let total=document.getElementById("Tot");
    if(cartTestingbox == undefined){
        total.innerHTML=`₹ 0`
    }
    let cartPrice=document.getElementsByClassName('cart-price');
    let totall=0
    for(i=0;i<cartPrice.length;i++){
        let cartPriceList=cartPrice[i]
        console.log(cartPriceList)
        let cartPriceText=cartPriceList.innerHTML;
        let cartPriceReplace=cartPriceText.replace("₹","");
        let quantity=document.getElementsByClassName('cart-quantity')[i];
        let quantityValue=quantity.value
            totall+=cartPriceReplace*quantityValue
            console.log(totall)   
    }
    total.innerHTML=`₹ ${totall}`

}

// Slide process

let bt1=document.getElementById('btn_1');
let bt2=document.getElementById('btn_2');
let bt3=document.getElementById('btn_3');
let img1=document.getElementById('edit1');
let img2=document.getElementById('edit2')
let img3=document.getElementById('edit3')

bt1.addEventListener('click',(e)=>{    
    img1.style.position="absolute";
    img1.style.left="0%";

    img2.style.position="absolute";
    img2.style.left="110%";

    img3.style.position="absolute";
    img3.style.left="220%";
  
})

bt2.addEventListener('click',(e)=>{
    img2.style.position="absolute";
    img2.style.left="0%";

    img3.style.position="absolute";
    img3.style.left="110%";      
})

bt3.addEventListener('click',(e)=>{
    img1.style.position="absolute";
    img1.style.left="-220%";

    img2.style.position="absolute";
    img2.style.left="-110%";

    img3.style.position="absolute";
    img3.style.left="0%";    
})

setTimeout(()=>{
    bt1.click();
},100)


// save Process

function saveData(){
    localStorage.setItem("data",save.innerHTML);
}

function showProcess(){
    save.innerHTML=localStorage.getItem("data");
}

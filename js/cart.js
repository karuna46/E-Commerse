document.addEventListener("DOMContentLoaded",()=>{
    displayCart()
})

function displayCart(){
   let cartCnt= document.getElementById("cartCnt");
   let totalPrice=document.getElementById("totalPrice");
   let cart=JSON.parse(localStorage.getItem("cart"))
   console.log(cart)
   let price=0;
   if (cart.length == 0){
    cartCnt.innerHTML="there is no product in the cart"
   }
   else{
    cartCnt.innerHTML=""
    cart.forEach((item,index)=>{
        price+=item.price
        console.log(item.images[0])
        let div=document.createElement("div");
        div.classList.add("cart-product")
        div.innerHTML=`
        <img src=${item.images[0]} alt="productImg" height="50"/>
        <p> ${item.title}</p>
        <p> $ ${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
         `
        cartCnt.appendChild(div)
    });
   }
   totalPrice.innerHTML=`totalPrice:<b>$ ${Math.ceil(price)}</b>`
}

function removeItem(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(id,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart()

}
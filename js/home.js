let cnt= document.getElementById("cnt")
let productDetails=""
let products = []

// fetch the data
function fetchData(){
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result.products)
        products = result.products
        localStorage.setItem("products",JSON.stringify(products))
        displayProducts(products)

    })
    .catch((error)=>console.log(error))
}
function displayProducts(products){
    productDetails=""
    products.map((val)=>{
        console.log(val.images[0])
        productDetails+=`
        <div class="product-item">
            <img src=${val.images[0]} title="product img" />
            <p class="title">${val.title}</p>
            <pclass="category">${val.category}</p>
            <p class="rating">${val.rating}<span><i class="fa-regular fa-star"></i></span> </p>
           <div class="price-cnt">
           <p>$ ${val.price}</p>
           <button onclick="viewMore(${val.id})">view more</button>

           </div>
            </div>
        `
        
    });
    cnt.innerHTML=productDetails; //display the data
}
function viewMore(id){
    localStorage.setItem("selectedProductid",JSON.stringify(id))
    window.location.href="viewproduct.html"
}
document.getElementById("searchProduct").addEventListener("input",searchProduct)

function searchProduct(event){
    let searchTerm = event.target.value;
    console.log(searchTerm)
    let filteredData=products.filter((product)=>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    displayProducts(filteredData)
}
fetchData()
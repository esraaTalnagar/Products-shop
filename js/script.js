let userInfo = document.querySelector("#user-info");
let user = document.querySelector("#user");
let links = document.querySelector("#link");

if(localStorage.getItem("UserName")){
    links.remove();
    userInfo.style.display = "flex";
    user.innerHTML = 'Welcome ' + localStorage.getItem("UserName");
}

let allproducts = document.querySelector(".products");

let products = [
    {
        id: 1 ,
        title: "product-1",
        color: "mauve",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 2 ,
        title: "product-2",
        color: "black",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 3 ,
        title: "product-3",
        color: "white",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id:4 ,
        title: "product-4",
        color: "green",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 5 ,
        title: "product-5",
        color: "mint green",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 6 ,
        title: "product-6",
        color: "blue",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 7 ,
        title: "product-7",
        color: "yellow",
        imageUrl: "/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 8 ,
        title: "product-8",
        color: "red",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 9 ,
        title: "product-9",
        color: "blue",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 10 ,
        title: "product-10",
        color: "black",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    }
    ,
    {
        id: 11 ,
        title: "product-11",
        color: "baby blue",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    },
    {
        id: 12 ,
        title: "product-12",
        color: "gray",
        imageUrl: "https://esraatalnagar.github.io/Products-shop/images/skincare-spa-products-set-beauty-skin-hair-vector-illustrations-cosmetic-jars-tubes-bottles-cartoon-lotion-cream-cleanser-leaves-isolated-white-organic-bodycare-concept_74855-21294.jpg"
    }
]

function drawproducts(){
let information =  products.map((product) => {
    return ` <div class="card">
    <img src="${product.imageUrl}">
    <div class="info">
    <h3>${product.title}</h3>
    <span>color: ${product.color}</span>
    </div>
    <div class="shopping-options">
    <button class="add" onclick = "AddToCart(${product.id})">Add to cart</button>
    <i class="fa-regular fa-heart"></i>
    </div>
</div>`
}) 
allproducts.innerHTML = information.join('')
}

drawproducts()

let productsList = document.querySelector(".cartContainer div")
let AddToCartBtn  = document.querySelector(".add")
let badge = document.querySelector(".badge") 


let items = localStorage.getItem("Cartproducts") ? JSON.parse(localStorage.getItem("Cartproducts")) : []

if(items){
items.map((item) => {
    productsList.innerHTML += `<p>${item.title}</p>`
})
badge.style.display = "block";
badge.innerHTML = items.length
}


/*catch id*/
function AddToCart(id) {
    let choosen = products.find((product) => product.id === id);
    productsList.innerHTML += `<p>${choosen.title}</p>`
    
    items = [...items, choosen];
    localStorage.setItem("Cartproducts", JSON.stringify(items));

    let productsItemsLength = document.querySelectorAll(".cartContainer div p");
    console.log(productsItemsLength)
    badge.style.display = "block";
    badge.innerHTML = productsItemsLength.length

}

function check (){
if(localStorage.getItem("UserName")){
    window.location = "index.html"
} else {
    window.location = "login.html"
}
}

let cart = document.querySelector(".carticon");
let cartContainer = document.querySelector(".cartContainer");

cart.addEventListener("click", openCart);

function openCart() {
    if (productsList.innerHTML != "") {
        if (cartContainer.style.display == "block") {
            cartContainer.style.display = "none"
        } else {
            cartContainer.style.display = "block"
        }
    }
}

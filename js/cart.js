
let allproducts = document.querySelector(".products");


/*if (Cartproducts) {
    let product = JSON.parse(Cartproducts);
    DrawCartProducts(product);
}
*/

function DrawCartProducts(allProductsInCart = []){
    let products = JSON.parse(localStorage.getItem("Cartproducts")) || allProductsInCart
    let information =  products.map((product) => {
        return ` <div class="card">
        <img src="${product.imageUrl}">
        <div class="info">
        <h3>${product.title}</h3>
        <span>color: ${product.color}</span>
        </div>
        <div class="shopping-options">
        <button class="add" onclick="RemoveFromCart(${product.id})">Remove from cart</button>
        </div>
    </div>`
    }) 
    allproducts.innerHTML = information.join('')
}
DrawCartProducts()

function RemoveFromCart (id){
    let Cartproducts = localStorage.getItem("Cartproducts")
    if(Cartproducts) {
        let items = JSON.parse(Cartproducts);
        let filterItems = items.filter((item => item.id !== id))
        localStorage.setItem ("Cartproducts", JSON.stringify(filterItems));

        DrawCartProducts(filterItems);
    }
}


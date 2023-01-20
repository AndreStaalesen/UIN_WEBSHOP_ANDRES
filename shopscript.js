//array som pusher inn produktinfo
let cart = []

function addToCart(title, price) {
cart.push({productTitle: title, productPrice: price, productQuantity: 1})
console.log(cart)
//etter å ha lagt til ett produkt, oppdater handlelist visning
renderCart()
toggleClass()
//oppdatere tallet på handlevogna (label)
document.querySelector("#cart .label").innerHTML = cart.length
}   
function renderCart() {
    //Tomme variabler for å bygge html til produkter
    let listHTML = ""
    let totalPrice = 0
    //gå gjennom cart arrayen, lage <li> til hvert produkt
    cart.map((prod, index) => listHTML += `<li id="prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete" onClick="deleteProduct(${index})">X</button>
</li>`)
    cart.map(prodPrice => totalPrice += prodPrice.productPrice)
    //Bruke en selector for å finne riktig <ul> og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
    document.querySelector("#total").innerHTML = totalPrice
}   
//ovenfor kan også getelementbyid brukes istedenfor queryselector


function deleteProduct(index) {
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
        renderCart()
    }, 700)
}
//gjøre handleliste synlig ved click

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}


function toggleClass() {
    let myElement = document.querySelector("#cartview");
    if(myElement.classList.contains("hidden")) {
        !myElement.classList.toggle("hidden");
    }
}




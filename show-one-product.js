import { products } from './moduls/products.js'

var productDetail = document.getElementById('container');
var params = window.location.search
const searchParams = new URLSearchParams(params);
var productId = searchParams.get("id");

// AFFICHER LE DETAIL D UN PRODUIT

products.forEach(function(product) {
    if (product.id == productId) {
        productDetail.innerHTML = `
		
			<h2> ${product.title} </h2>
			
	        <h2  class="text-${ (product.price < 600)?"success":"" } class2">
				 ${product.price} €
			</h2>
			
	        <img src="${product.imageUrl}" alt=""> 
		`
            // title.textContent = product.title;

        // if (product.price < 600) {
        //     priceElm.style.color = "green"
        // };

        // priceElm.textContent = product.price + " euro";
        // img.src = product.imageUrl
    }
})



var age = 10;

console.log((age >= 18) ? "majeur" : "mineur")
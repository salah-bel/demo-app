var productList = document.getElementById("product-list");
var title = document.getElementById("title");

// AFFICHER TOUT LES PRODUITS
for (let i = 0; i < products.length; i++) {

    productList.innerHTML += `
	<div class="card" style="width: 18rem;">
	<img src= ${products[i].imageUrl} class="card-img-top" alt="..." height=150>
	<div class="card-body">
		<h5 class="card-title">${products[i].title}</h5>
		<p class="card-text">${products[i].description.substring(0,50)}</p>
		<div class="row justify-content-between">
		<span>prix : <strong>${products[i].price.toFixed(2)} &euro;</strong></span> </span>
		<a href="show-one-product.html?id=${products[i].id}" class="btn btn-primary">Detail du produit..</a>
		</div>

	</div>
</div>
	`

}
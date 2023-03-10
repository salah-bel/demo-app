var productList = document.getElementById("product-list");


var products = [
    {}
]

for (let i = 0; i < 8; i++) {

    productList.innerHTML += `
	<div class="card" style="width: 18rem;">
	<img src="https://media.carrefour.fr/medias/c45805f1a820359595b6ab8b424a4d1d/p_540x540/08718951340350-a1r1-s01.jpg" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">Card title</h5>
		<p class="card-text"> text to build on the card title and make up the bulk of the card's content.
		</p>
		<div class="row justify-content-between">
		<span>Prix : <strong>22</strong> &euro;</span>
		<a href="#" class="btn btn-primary">Plus..</a>
		</div>
		
	</div>
</div>
	`

}
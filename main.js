var productList = document.getElementById("product-list");

/*	
	id
	image
	titre
	description
	prix

*/

var products = [{
        id: 1,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        imageUrl: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        prix: (Math.random() * 100)
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",

        imageUrl: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        prix: (Math.random() * 100)
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        prix: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
        id: 4,
        title: "OPPOF19  9",
        description: "OPPO F19 is officially announced on April 2021.Universe",
        prix: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany ",
        prix: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
        id: 6,
        title: "MacBook Pro",
        description: "acBook Pro 2021 with mini-LED display may launch between September, November ",
        prix: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/6/thumbnail.jpg",
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        prix: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    }, {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant ",
        prix: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    }

]

console.log(products)

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
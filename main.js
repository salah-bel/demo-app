var productList = document.getElementById("product-list");

/*	
	id
	image
	titre
	description
	price

*/

var products = [{
        id: 1,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        imageUrl: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        price: (Math.random() * 100)
    },
    {
        id: 2,
        title: "iPhone Y",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",

        imageUrl: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        price: (Math.random() * 100)
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe un texte en plus ",
        price: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
        id: 4,
        title: "OPPOF19  9",
        description: "OPPO F19 is officially announced on April 2021.Universe",
        price: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany ",
        price: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
        id: 6,
        title: "MacBook Pro",
        description: "acBook Pro 2021 with mini-LED display may launch between September, November ",
        price: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/78/thumbnail.jpg",
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    }, {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant ",
        price: (Math.random() * 100),
        imageUrl: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    }

]

for (let i = 0; i < products.length; i++) {

    productList.innerHTML += `
	<div class="card" style="width: 18rem;">
	<img src= ${products[i].imageUrl} class="card-img-top" alt="..." height=150>
	<div class="card-body">
		<h5 class="card-title">${products[i].title}</h5>
		<p class="card-text">${products[i].description.substring(0,50)}</p>
		<div class="row justify-content-between">
		<span>prix : <strong>${products[i].price.toFixed(2)} &euro;</strong></span> </span>
		<a href="./show-one-product.html" class="btn btn-primary">Detail du produit..</a>
		</div>

	</div>
</div>
	`

}
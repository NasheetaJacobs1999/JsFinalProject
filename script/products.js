//Footer Year Function
document.querySelector('#currYear').textContent = new Date().getFullYear();

//Product Wrapper
let products = localStorage.getItem('products') ?
    JSON.parse(localStorage.getItem('products')) :
    localStorage.setItem('products', JSON.stringify([
        {
            id: 1,
            name: 'Princess Elsa',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/elsa-princess.jpg",
            detail: 'Head West and journey through the Great Plains! Relive your favorite Paramount 1883 moments with Pop!. Adventures might lie on the trails ahead. Elsa Dutton will be a resourceful and brave addition to your collection. figure is approximately 4 inches tall.',
            amount: 250
        },
        {
            id: 2,
            name: 'Princess Rapunzel',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/rapunzel-princess.jpg",
            detail: 'Disney is hosting the Ultimate Princess Celebration to inspire and empower you and your loved ones with stories of courage and strength. Collect your favorite Disney Princesses as Fun-co Pop! figures and complete your Disney Ultimate Princess collection with Pop! Rapunzel in her beautiful gown for the ball. Vinyl figure is approximately 4.5-inches tall.',
            amount: 150
        },
        {
            id: 3,
            name: 'Princess Moana',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/moana-princess.jpg",
            detail: 'Disney is hosting the Ultimate Princess Celebration to inspire and empower you and your loved ones with stories of courage and strength. Collect your favorite Disney Princesses as Fun-co Pop! figures and complete your Disney Ultimate Princess collection with Pop! Moana taking the shell from the ocean wave with her companion Hei Hei. Vinyl figure is approximately 4.5-inches tall.',
            amount: 200
        },
        {
            id: 4,
            name: 'Princess Cinderella',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/cinderella.jpg",
            detail: 'Pop! Cinderella can’t wait to dance the night away at the ball, and her Fairy Godmother has just the dress for the occasion. Celebrate Disney’s 100th Anniversary with this mid-transformation gown. Swirls of magic shimmer around this graceful princess as she dances her way into your Cinderella collection. Vinyl figure is approximately 4.4-inches tall.',
            amount: 200
        },
        {
            id: 5,
            name: 'Princess Aurora',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/aurora-princess.jpg",
            detail: 'Disney is hosting the Ultimate Princess Celebration to inspire and empower you and your loved ones with stories of courage and strength. Collect your favorite Disney Princesses as Fun-co Pop! figures and complete your Disney Ultimate Princess collection with Pop! Aurora with her woodland friends. Vinyl figure is approximately 4.5-inches tall.',
            amount: 180
        },
        {
            id: 6,
            name: 'Princess Jasmine',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/jasmine-princess.jpg",
            detail: 'Pop! Jasmine would love to join the other princesses in your Disney collection for a regal ball. Collectible stands approximately 3.75-inches tall.',
            amount: 160
        },
        {
            id: 7,
            name: 'Princess Mulan',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/mulan-princess.jpg",
            detail: 'Disney is hosting the Ultimate Princess Celebration to inspire and empower you and your loved ones with stories of courage and strength. Collect your favorite Disney Princesses as Fun-co Pop! figures and complete your Disney Ultimate Princess collection with the Fun-co exclusive Pop! Vinyl figure is approximately 5-inches tall.',
            amount: 180
        },
        {
            id: 8,
            name: 'Princess Snow White',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/snow-white-princess.jpg",
            detail: 'Pop! Snow White has awoken in a strange place and would appreciate your help finding her way into your Disney collection. Collectible stands approximately 3.75-inches tall.',
            amount: 180
        },
        {
            id: 9,
            name: 'Princess Ariel',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/ariel-princess.jpg",
            detail: 'From under the sea, its Pop! Ariel looking to join your collection of The Little Mermaid figures. Her sparkly tail is sure to make her stand out. Collectible stands approximately 3.75-inches tall.',
            amount: 180
        },
        {
            id: 10,
            name: 'Princess Tiana',
            category: "Figurine",
            image: "https://nasheetajacobs1999.github.io/allimages/images/tiana-princess.jpg",
            detail: 'Disney is hosting the Ultimate Princess Celebration to inspire and empower you and your loved ones with stories of courage and strength. Collect your favorite Disney Princesses as Fun-co Pop! figures and complete your Disney Ultimate Princess collection with Pop! Tiana holding a frog. Vinyl figure is approximately 5-inches tall.',
            amount: 160
        }
    ]))
//this puts products/objects in html
let productWrapper = document.querySelector('[data-products]');
function displayProducts(args) {
    productWrapper.innerHTML = " "
    try {
        if (args) {
            args?.forEach((product) => {
                productWrapper.innerHTML += `
                <div class="col">
                <div class="card">
                <img src="${product.image}" class="card-img-top h-50 w-50 img-fluid align-self-center" alt="${product.id}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.detail}</p>
                <p class="card-text">${product.amount}</p>
                <a class="btn btn-secondary" id="cart" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</a>
                </div>
                </div>
                </div>
                `
            })
        } else {
            productWrapper.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
                <p>No Products Found</p>
            </div>
            `
        }
    } catch (e) {
        alert('Error Loading Products')
    }
};

displayProducts(products);

//searches products by name
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(item => {
            return item.name.toLowerCase().includes(productSearch.value.toLowerCase());
        })
        displayProducts(searchItem);
    } catch (e) {
        alert('Function is under maintainance')
    }
})

//sorts by the price
let productSort = document.querySelector('.btn')
let highest = false;
productSort.addEventListener('click', () => {
    try {
        if (!highest) {
            products.sort((a, b) => b.amount - a.amount);
            highest = true;
        } else {
            products.sort((a, b) => a.amount - b.amount);
            highest = false;
        }
        displayProducts(products)
    } catch (e) {
        alert('This Function is under maintainance')
    }
});

//puts objects in new localStorage for other page
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(product) {
    debugger
    try {
        cart.push(product);
        localStorage.setItem('checkout', JSON.stringify(cart));
    } catch (e) {
        alert('The Cart is under maintainance')
    }
}
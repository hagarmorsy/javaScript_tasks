async function fetchProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        updateUI(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

function updateUI(products) {
    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.classList.add('card');
        
        productElement.innerHTML = `
            <img src="${product.image}" class="card-img">
            <h2 class="card-title">${product.title}</h2>
            <p class="card-desc">${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Rating:</strong> ${product.rating.rate}</p>
        `;

        document.querySelector('.products').appendChild(productElement);
    });
}

fetchProducts();

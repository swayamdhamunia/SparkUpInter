    // Optional JS for hover dropdown functionality (in case JS is required for some interaction)
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
        dropdown.addEventListener('mouseenter', function () {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', function () {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none';
        });
    });


   document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('productContainer');
    const template = document.getElementById('productTemplate');

    // Function to load products
    function loadProducts(category) {
        fetch(`data/${category}.json`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(productData => {
                // Clear previous products
                productContainer.innerHTML = '';

                productData.forEach(product => {
                    const clone = document.importNode(template.content, true);
                    clone.querySelector('.product-name').textContent = product.name;
                    clone.querySelector('.product-description').textContent = product.description;
                    clone.querySelector('.product-price').textContent = product.price;
                    clone.querySelector('.product-image').src = product.image;
                    productContainer.appendChild(clone);
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }

    // Load a default category (optional)
    loadProducts('pizza');  // Loads pizza.json by default

    // Set up click event listeners for buttons
    document.querySelectorAll('.button-item').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            loadProducts(category);
        });
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('cardsContainer');
    const template = document.getElementById('foodCardTemplate');

    // Function to load products into cards
    function loadProducts(category) {
        fetch(`data/${category}.json`)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.json();
            })
            .then(productData => {
                // Clear previous cards
                cardsContainer.innerHTML = '';

                // Loop through the products from JSON data
                productData.forEach(product => {
                    const clone = document.importNode(template.content, true);

                    // Populating the food card
                    clone.querySelector('.food-name').textContent = product.name;
                    clone.querySelector('.food-description').textContent = product.description;
                    clone.querySelector('.food-price').textContent = product.price;
                    clone.querySelector('.food-image').src = product.image;

                    // Add the card to the container
                    cardsContainer.appendChild(clone);
                });
            })
            .catch(error => console.error('Error loading products:', error));
    }

    // Set up click event listeners for buttons
    document.querySelectorAll('.menu-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.toLowerCase();
            loadProducts(category);
        });
    });

    // Load a default category (optional)
    loadProducts('pizza');  // Loads pizza.json by default
});


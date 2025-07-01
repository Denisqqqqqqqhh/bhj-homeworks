const cart = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

function updateQuantity(event, productElement) {
    const target = event.target;
    const quantityControl = productElement.querySelector('.product__quantity-value');
    let currentQuantity = parseInt(quantityControl.textContent);
    
    if (target.classList.contains('product__quantity-control_inc')) {
        currentQuantity++;
    } else if (target.classList.contains('product__quantity-control_dec')) {
        if (currentQuantity > 1) {
            currentQuantity--;
        }
    }
    
    quantityControl.textContent = currentQuantity;
}

function addToCart(productElement) {
    const productId = productElement.dataset.id;
    const imageSrc = productElement.querySelector('.product__image').src;
    const quantity = parseInt(productElement.querySelector('.product__quantity-value').textContent);
    
     const existingProduct = Array.from(cart.children).find(item => 
        item.dataset.id === productId
    );
    
    if (existingProduct) {
         const currentCount = parseInt(existingProduct.querySelector('.cart__product-count').textContent);
        existingProduct.querySelector('.cart__product-count').textContent = currentCount + quantity;
    } else {
        const newProduct = document.createElement('div');
        newProduct.classList.add('cart__product');
        newProduct.dataset.id = productId;
        
        const image = document.createElement('img');
        image.classList.add('cart__product-image');
        image.src = imageSrc;
        
        const count = document.createElement('div');
        count.classList.add('cart__product-count');
        count.textContent = quantity;
        
        newProduct.appendChild(image);
        newProduct.appendChild(count);
        
        cart.appendChild(newProduct);
    }
}

products.forEach(product => {
    product.querySelector('.product__quantity-controls').addEventListener('click', (event) => {
        updateQuantity(event, product);
    });
    
    product.querySelector('.product__add').addEventListener('click', () => {
        addToCart(product);
    });
});

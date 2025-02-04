class ProductCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      <style>
      :host {
        display: block;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        max-width: 300px;
        margin: 10px;
      }
      .product-card{margin-left: 30px;}
      img {
        width: 300px;
        height: auto;
        border: 1px solid #f00;
      }
      .content {
        padding: 15px;
      }
      .title {
        font-size: 1.2em;
        margin: 0 0 10px;
      }
      .price {
        font-size: 1.1em;
        color: #333;
        font-weight: bold;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      .add-to-cart{
        background: #000;
        color: #fff;
        padding: 10px 30px;
      }
      .product-price{
        font-weight: bold; font-size:24px; color: #f00; margin-left:40px;
      }
      </style>
      <div class="product-card">
        <img src="" alt="Product Image" class="product-image">
        <h2 class="product-title"></h2>
        <p class="product-price"></p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const shadow = this.shadowRoot;

    // Set product data from attributes
    shadow.querySelector('.product-image').src = this.getAttribute('image');
    shadow.querySelector('.product-title').textContent = this.getAttribute('title');
    shadow.querySelector('.product-price').textContent = `$${this.getAttribute('price')}`;

    // Add event listener to the "Add to Cart" button
    const addToCartButton = shadow.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', this.addToCart.bind(this));
  }

  addToCart() {
    const productId = this.getAttribute('product-id'); // Ensure product-id is passed as an attribute

    if (!productId) {
      console.error('Product ID is missing.');
      return;
    }

    // Shopify AJAX API to add product to cart
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        items: [
          {
            id: productId,
            quantity: 1, // Default quantity is 1
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added to cart:', data);
        alert('Product added to cart!'); // Optional: Show a success message
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart.'); // Optional: Show an error message
      });
  }
}

customElements.define('product-card', ProductCard);
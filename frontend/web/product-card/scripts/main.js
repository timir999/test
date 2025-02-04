class ProductCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const product = {
        title: this.getAttribute('data-title'),
        price: this.getAttribute('data-price'),
        image: this.getAttribute('data-image'),
        url: this.getAttribute('data-url'),
      };
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            max-width: 300px;
            margin: 10px;
          }
          img {
            width: 100%;
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
          .addtocart{
            background: #000;
            color: #fff;
            padding: 10px 30px;
          }
        </style>
        <a href="${product.url}">
          <img src="${product.image}" alt="${product.title}" />
          <div class="content">
            <div class="title">${product.title}</div>
            <div class="price">${product.price}</div>
          </div>
        </a>
        <button class="addtocart">Add to Cart</button>
      `;
    }
  }
  customElements.define('product-card', ProductCard);
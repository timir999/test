(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();class s extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),o=document.createElement("template");o.innerHTML=`
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
      <a class="product-link" href="">
        <img src="" alt="Product Image" class="product-image">
        <h2 class="product-title"></h2>
        <p class="product-price"></p>
        </a>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `,e.appendChild(o.content.cloneNode(!0))}connectedCallback(){const e=this.shadowRoot;e.querySelector(".product-image").src=this.getAttribute("image"),e.querySelector(".product-link").setAttribute("href",this.getAttribute("url")),e.querySelector(".product-title").textContent=this.getAttribute("title"),e.querySelector(".product-price").textContent=`$${this.getAttribute("price")}`,e.querySelector(".add-to-cart").addEventListener("click",this.addToCart.bind(this))}addToCart(){const e=this.getAttribute("product-id");e&&fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({items:[{id:e,quantity:1}]})}).then(o=>o.json()).then(o=>{alert("Product added to cart!")}).catch(o=>{alert("Failed to add product to cart.")})}}customElements.define("product-card",s);

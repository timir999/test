(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();class i extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),o=document.createElement("template");o.innerHTML=`
      <style>
        @import url('./styles/main.scss');
      </style>
      <div class="product-card">
        <img src="" alt="Product Image" class="product-image">
        <h2 class="product-title"></h2>
        <p class="product-price"></p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `,e.appendChild(o.content.cloneNode(!0))}connectedCallback(){const e=this.shadowRoot;e.querySelector(".product-image").src=this.getAttribute("image"),e.querySelector(".product-title").textContent=this.getAttribute("title"),e.querySelector(".product-price").textContent=`$${this.getAttribute("price")}`,e.querySelector(".add-to-cart").addEventListener("click",this.addToCart.bind(this))}addToCart(){const e=this.getAttribute("product-id");e&&fetch("/cart/add.js",{method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({items:[{id:e,quantity:1}]})}).then(o=>o.json()).then(o=>{alert("Product added to cart!")}).catch(o=>{alert("Failed to add product to cart.")})}}customElements.define("product-card",i);

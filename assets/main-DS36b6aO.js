(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const r={title:this.getAttribute("data-title"),price:this.getAttribute("data-price"),image:this.getAttribute("data-image"),url:this.getAttribute("data-url")};this.shadowRoot.innerHTML=`
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
        <a href="${r.url}">
          <img src="${r.image}" alt="${r.title}" />
          <div class="content">
            <div class="title">${r.title}</div>
            <div class="price">${r.price}</div>
          </div>
        </a>
        <button class="addtocart">Add to Cart</button>
      `}}customElements.define("product-card",c);

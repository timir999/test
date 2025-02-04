(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const r={title:this.getAttribute("data-title"),price:this.getAttribute("data-price"),image:this.getAttribute("data-image"),url:this.getAttribute("data-url")};this.shadowRoot.innerHTML=`
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
        </style>
        <a href="${r.url}">
          <img src="${r.image}" alt="${r.title}" />
          <div class="content">
            <div class="title">${r.title}</div>
            <div class="price">${r.price}</div>
          </div>
        </a>
      `}}customElements.define("product-card",c);

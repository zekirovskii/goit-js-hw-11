import{a as f,S as m,i as l}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="50314234-ba813915cbcdccb3e2319b70f",h="https://pixabay.com/api/";function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:o})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");let c=null;function g(s){const o=s.map(r=>`
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" />
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </a>
    `).join("");u.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new m(".gallery a")}function b(){u.innerHTML=""}function L(){d.classList.remove("hidden")}function a(){d.classList.add("hidden")}const v=document.querySelector("#searchForm"),w=document.querySelector("#searchInput");v.addEventListener("submit",s=>{s.preventDefault();const o=w.value.trim();o&&(b(),L(),y(o).then(r=>{const n=r.data.hits;if(n.length===0){l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),a();return}setTimeout(()=>{g(n),a()},1e3)}).catch(r=>{console.error("Fetch error:",r),l.error({title:"Error",message:"An error occurred while fetching data."}),a()}))});
//# sourceMappingURL=index.js.map

import{a as d,S as u,i as l}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="50314234-ba813915cbcdccb3e2319b70f",m="https://pixabay.com/api/";function p(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o})}const h=document.querySelector(".gallery");let a=null;function y(s){const o=s.map(r=>`
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" />
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </a>
    `).join("");h.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new u(".gallery a")}const g=document.querySelector("#searchForm"),b=document.querySelector("#searchInput"),i=document.querySelector(".loader"),L=document.querySelector(".gallery");g.addEventListener("submit",s=>{s.preventDefault();const o=b.value.trim();o&&(i.classList.remove("hidden"),L.innerHTML="",p(o).then(r=>{const n=r.data.hits;if(n.length===0){l.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hidden");return}setTimeout(()=>{y(n),i.classList.add("hidden")},1e3)}).catch(r=>{console.error("Fetch error:",r),l.error({title:"Error",message:"An error occurred while fetching data."}),i.classList.add("hidden")}))});
//# sourceMappingURL=index.js.map

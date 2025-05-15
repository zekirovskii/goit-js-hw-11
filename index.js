import{S as h,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let a=null;function g(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:m,comments:p,downloads:f})=>`
      <a class="gallery-item" href="${e}" target="_blank" rel="noopener noreferrer">
        <img src="${n}" alt="${t}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${i}</p>
          <p><b>Views:</b> ${m}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </a>
    `).join("");r.innerHTML=s,a?a.refresh():a=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function u(){const o=document.querySelector(".gallery");o.innerHTML=""}function y(){u(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const b="https://pixabay.com/api/",L="50314234-ba813915cbcdccb3e2319b70f",S=document.getElementById("searchForm");document.querySelector(".gallery");const d=document.getElementById("loader");function $(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}S.addEventListener("submit",o=>{o.preventDefault(),u();const r=document.getElementById("searchInput").value.trim();if($(),!r){c();return}const s=new URLSearchParams({key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${b}?${s.toString()}`;fetch(n).then(e=>e.json()).then(e=>{setTimeout(()=>{e.hits.length===0?y():g(e.hits),c()},1e3)}).catch(e=>{l.error({title:"Hata",message:"API isteğinde hata oluştu.",position:"topRight"}),console.error("Fetch error:",e),c()})});
//# sourceMappingURL=index.js.map

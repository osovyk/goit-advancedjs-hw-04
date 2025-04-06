import{i as x,a as S,S as F}from"./assets/vendor-lDhL-8I6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function y(o){x.show({message:o,position:"topRight",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./assets/icons/close-icon.svg",closeOnEscape:!0,closeOnClick:!0,maxWidth:"432px"})}const M="49367639-b33ebacd3c1171708280ede99",O="https://pixabay.com/api/",P={key:M,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15};async function f(o,t=1){const n=document.getElementById("loader");n.style.display="flex";try{return(await S.get(O,{params:{...P,q:o,page:t}})).data}catch(s){throw y("Failed to fetch images"),s}finally{n.style.display="none"}}let u=null;function g({total:o,hits:t},n={append:!1}){const s=document.getElementById("gallery");if(n.append||(s.innerHTML=""),o===0){y("Sorry, there are no images matching your search query. Please try again!");return}const e=document.createDocumentFragment();t.forEach(({webformatURL:r,largeImageURL:l,tags:h,likes:v,views:b,comments:L,downloads:E},w)=>{const B=[{title:"Likes",value:v},{title:"Views",value:b},{title:"Comments",value:L},{title:"Downloads",value:E}].map(({title:C,value:I})=>`
        <div class="info-block">
          <span class="info-title">${C}</span>
          <span class="info-value">${I}</span>
        </div>
      `).join(""),c=document.createElement("li");c.classList.add("gallery-item"),c.innerHTML=`
      <a href="${l}" class="gallery-link">
        <div class="image-wrapper">
          <img
            src="${r}"
            alt="${h}"
            class="gallery-image hidden"
          />
        </div>
      </a>
      <div class="gallery-info">
        ${B}
      </div>
    `;const p=c.querySelector(".gallery-image");p.onload=()=>{p.classList.remove("hidden")},setTimeout(()=>{c.classList.add("fade-in")},w*100),e.appendChild(c)}),s.appendChild(e),u?u.refresh():u=new F(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}let d="",i=1,m=0;const A=document.getElementById("searchForm"),a=document.getElementById("loadMoreBtn"),H=document.getElementById("gallery");A.addEventListener("submit",q);a.addEventListener("click",T);async function q(o){if(o.preventDefault(),d=document.getElementById("searchInput").value.trim(),d!==""){i=1,H.innerHTML="",a.style.display="none";try{const t=await f(d,i);if(m=t.totalHits,t.hits.length===0){y("Sorry, there are no images matching your search query. Please try again!");return}g(t,{append:!1}),i*15<m?(a.style.display="block",a.disabled=!1,a.textContent="Load more..."):(a.style.display="block",a.disabled=!0,a.textContent="We're sorry, but you've reached the end of search results.")}catch(t){console.error(t)}}}async function T(){i+=1;try{const o=await f(d,i);g(o,{append:!0});const t=document.querySelector(".gallery-item");if(t){const{height:n}=t.getBoundingClientRect();window.scrollBy({top:n*2+24,behavior:"smooth"})}i*15>=m&&(a.disabled=!0,a.textContent="We're sorry, but you've reached the end of search results.")}catch(o){console.error(o)}}
//# sourceMappingURL=index.js.map

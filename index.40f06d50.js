let e=1;const t=Math.ceil(19.208333333333332);async function n(e){let t=`https://voodoo-sandbox.myshopify.com/products.json?limit=24&page=${e}`,n=await fetch(t),d=await n.json();return d.products}function d(e){let t=document.createElement("div");t.classList.add("w-72","h-max","m-4","rounded","mt-12");let n=document.createElement("img");n.classList.add("w-72","h-72","border","border-black","rounded","relative","mb-2","object-cover"),n.setAttribute("alt","Product Image"),e.images.length>0?n.setAttribute("src",e.images[0].src):n.setAttribute("src","https://cdn.shopify.com/s/files/1/0690/0075/7529/products/5196c9302b12ec8d50d0e700e2865c2a.png?v=1694603298");let d=document.createElement("div");d.classList.add("bg-black","text-sm","font-space","text-white","uppercase","absolute","m-3","rounded","block","p-2","z-10"),d.textContent="Used";let l=document.createElement("div");l.classList.add("flex","justify-between");let s=document.createElement("p");s.classList.add("font-bold","text-black","text-sm","capitalize"),s.textContent=e.title;let c=document.createElement("p");c.classList.add("text-sm","font-bold","text-black"),c.textContent="Condition";let a=document.createElement("div");a.classList.add("flex","justify-between");let o=document.createElement("p");o.classList.add("font-bold","text-black","text-sm"),o.textContent=e.variants[0].price;let i=document.createElement("p");i.classList.add("text-sm","text-black"),i.textContent="Slightly used";let r=document.createElement("button");r.classList.add("bg-black","text-white","w-full","my-4","p-4"),r.textContent="Add to cart",l.appendChild(s,c),l.appendChild(c),a.appendChild(o,i),a.appendChild(i),t.appendChild(d),t.appendChild(n),t.appendChild(l),t.appendChild(a),t.appendChild(r);let u=document.getElementById("products");u.appendChild(t)}n(e).then(e=>e.forEach(e=>{d(e)})).then(()=>{!function l(){let s=document.createElement("div");s.classList.add("flex","gap-4","content-center");let c=function(e,t,n){let d=[];if(e<=n)for(let t=1;t<e;t++)d.push(t);else{let l=Math.floor(n/2);if(t<=l+1){for(let e=1;e<=n-1;e++)d.push(e);d.push("..."),d.push(e)}else if(t>=e-l){d.push(1),d.push("...");for(let t=e-n+2;t<=e;t++)d.push(t)}else{d.push(1),d.push("...");for(let e=t-l+1;e<=t+l-1;e++)d.push(e);d.push("..."),d.push(e)}}return d}(t,e,5);c.forEach(t=>{let c=document.createElement("button");c.textContent=t,c.classList.add("w-10","h-10","rounded-full","border","border-black"),e===t?c.classList.add("bg-gray-900","text-white"):c.classList.remove("bg-gray-900","text-white"),"..."===t?(c.disabled=!0,c.classList.add("pointer-events-none")):c.addEventListener("click",()=>{n(e=t).then(e=>{let t=document.getElementById("products");t.innerHTML="",e.forEach(e=>{d(e)})}),l()}),s.appendChild(c)});let a=document.getElementById("pagination");a.innerHTML="",a.appendChild(s)}()});const l=document.getElementById("close"),s=document.getElementById("cart"),c=document.getElementById("more-info");s.addEventListener("click",function(){let e=document.querySelector("aside");e.classList.remove("translate-x-full")}),l.addEventListener("click",function(){let e=document.querySelector("aside");e.classList.add("translate-x-full")}),c.addEventListener("click",function(){let e=document.getElementById("info");e.classList.toggle("hidden")});//# sourceMappingURL=index.40f06d50.js.map

//# sourceMappingURL=index.40f06d50.js.map

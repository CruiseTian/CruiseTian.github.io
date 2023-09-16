window.addEventListener("DOMContentLoaded",()=>{let r=!1,n,o=!0,e=CONFIG.path;0===e.length?e="search.xml":/json$/i.test(e)&&(o=!1);const l=CONFIG.root+e,t=document.querySelector(".search-input"),s=document.getElementById("search-result"),f=(e,t,r)=>{var n=e.length;if(0===n)return[];let o=0;var l;let s=[];for(r||(t=t.toLowerCase(),e=e.toLowerCase());-1<(l=t.indexOf(e,o));)s.push({position:l,word:e}),o=l+n;return s},v=(e,t,r,n)=>{var o;let{position:l,word:s}=o=r[r.length-1],a=[],c=0;for(;l+s.length<=t&&0!==r.length;){s===n&&c++,a.push({position:l,length:s.length});var i=l+s.length;for(r.pop();0!==r.length&&(o=r[r.length-1],l=o.position,s=o.word,i>l);)r.pop()}return{hits:a,start:e,end:t,searchTextCount:c}},C=(r,e)=>{let n="",o=e.start;return e.hits.forEach(e=>{n+=r.substring(o,e.position);var t=e.position+e.length;n+=`<b class="search-keyword">${r.substring(e.position,t)}</b>`,o=t}),n+=r.substring(o,e.end),n},a=()=>{let d=t.value.trim().toLowerCase(),g=d.split(/[-\s]+/);1<g.length&&g.push(d);let y=[];if(0<d.length&&n.forEach(i=>{if(i.title){let n=0,o=i.title.trim(),t=o.toLowerCase(),l=i.content?i.content.trim().replace(/<[^>]+>/g,""):"";var e;CONFIG.localsearch.unescape&&(l=(e=l,String(e).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t)).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")));let r=l.toLowerCase(),s=decodeURIComponent(i.url).replace(/\/{2,}/g,"/"),a=[],c=[];if(g.forEach(e=>{a=a.concat(f(e,t,!1)),c=c.concat(f(e,r,!1))}),0<a.length||0<c.length){i=a.length+c.length;[a,c].forEach(e=>{e.sort((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length)});let e=[];0!==a.length&&(p=v(0,o.length,a,d),n+=p.searchTextCountInSlice,e.push(p));let r=[];for(;0!==c.length;){var{position:h,word:u}=c[c.length-1];let e=h-20,t=h+80;e<0&&(e=0),t<h+u.length&&(t=h+u.length),t>l.length&&(t=l.length);u=v(e,t,c,d);n+=u.searchTextCountInSlice,r.push(u)}r.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start);var p=parseInt(CONFIG.localsearch.top_n_per_article,10);0<=p&&(r=r.slice(0,p));let t="";0!==e.length?t+=`<li><a href="${s}" class="search-result-title">${C(o,e[0])}</a>`:t+=`<li><a href="${s}" class="search-result-title">${o}</a>`,r.forEach(e=>{t+=`<a href="${s}"><p class="search-result">${C(l,e)}...</p></a>`}),t+="</li>",y.push({item:t,searchTextCount:n,hitCount:i,id:y.length})}}}),1===g.length&&""===g[0])s.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>';else if(0===y.length)s.innerHTML='<div id="no-result"><i class="fa fa-frown-o fa-5x"></i></div>';else{y.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id);let t='<ul class="search-result-list">';y.forEach(e=>{t+=e.item}),t+="</ul>",s.innerHTML=t,window.pjax&&window.pjax.refresh(s)}},c=t=>{fetch(l).then(e=>e.text()).then(e=>{r=!0,n=o?[...(new DOMParser).parseFromString(e,"text/xml").querySelectorAll("entry")].map(e=>({title:e.querySelector("title").innerHTML,content:e.querySelector("content").innerHTML,url:e.querySelector("url").innerHTML})):JSON.parse(e),document.querySelector(".search-pop-overlay").innerHTML="",document.body.style.overflow="",t&&t()})};CONFIG.localsearch.preload&&c();const i=()=>{document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").style.display="block",document.querySelector(".popup").style.display="block",document.querySelector(".search-input").focus()};"auto"===CONFIG.localsearch.trigger?t.addEventListener("input",a):(document.querySelector(".search-icon").addEventListener("click",a),t.addEventListener("keypress",e=>{"Enter"===e.key&&a()})),document.querySelectorAll(".popup-trigger").forEach(e=>{e.addEventListener("click",()=>{r?i():(document.querySelector(".search-pop-overlay").style.display="",document.querySelector(".search-pop-overlay").innerHTML='<div class="search-loading-icon"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i></div>',c(i))})});const h=()=>{document.body.style.overflow="",document.querySelector(".search-pop-overlay").style.display="none",document.querySelector(".popup").style.display="none"};document.querySelector(".search-pop-overlay").addEventListener("click",h),document.querySelector(".popup-btn-close").addEventListener("click",h),window.addEventListener("pjax:success",h),window.addEventListener("keyup",e=>{"Escape"===e.key&&h()})});
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=e=>{switch(e){case"home-page":(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h1"),a=document.createElement("p");t.className="home-page",n.className="container",r.innerText="Welcome",a.innerText="Est ei erat mucius quaeque. Ei his quas phaedrum, efficiantur mediocritatem ne sed, hinc oratio blandit ei sed. Blandit gloriatur eam et. Brute noluisse per et, verear disputando neglegentur at quo. Sea quem legere ei, unum soluta ne duo. Ludus complectitur quo te, ut vide autem homero pro.",n.appendChild(r),n.appendChild(a),t.appendChild(n),e.innerHTML="",e.appendChild(t)})();break;case"menu-page":(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("h1");t.className="menu-page",n.className="container",r.className="menu-grid",a.innerText="Our menu",[{name:"Starters",options:[{name:"Cactus salad",description:"A salad made from the succulent pads of the prickly pear, sword pear, and saguaro. Served with a sweet chilli marinade"},{name:"Toasted Arizona Desert hairy scorpion",description:"Three large hadrurus arizonensis scorpions harvested from the Mojave Desert toasted until golden brown, served with a small side of desert turf grass."},{name:"Regal horned lizard barbeque",description:"One large phrynosoma solare marinated for 24 hours in aloe vera paste, barbequed until crispy."}]},{name:"Mains",options:[{name:"Date jam served with pita",description:"A jam made with ripe dates and served with 2 large freshly made pitas."},{name:"Mesquite soup",description:"Out finest mesquite seeds cooked in desert water and served with olive oil and a slice of lemon."},{name:"Bactrian camel kabsa",description:"A 250g cut of Camelus bactrianus loin imported from the Gobi Desert, marinated in spices and grilled over a fire. Served with 350g of rice."}]},{name:"Desserts",options:[{name:"Wolfberry soufflé",description:"A sublime soufflé made using freshly harvested and imported Lycium exsertum berries straight from the lower Sonora Desert."},{name:"Tequila chocolate truffles",description:"Decadent chocolate truffles made using fresh tequila pressed in-house from newly harvested agave."},{name:"Dromedary camel yoghurt",description:"A cool yoghurt made from freshly squeezed camel milk. Served with cucumbers and parsley."}]}].forEach(e=>{const t=document.createElement("div"),n=document.createElement("h2");t.className="menu-div",n.innerText=e.name,t.appendChild(n),e.options.forEach(e=>{const n=document.createElement("h3"),r=document.createElement("p");n.innerText=e.name,r.innerText=e.description,t.appendChild(n),t.appendChild(r)}),r.appendChild(t)}),n.appendChild(a),n.appendChild(r),t.appendChild(n),e.innerHTML="",e.appendChild(t)})();break;case"contact-page":(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h1"),a=document.createElement("div");t.className="contact-page",n.className="container",a.className="address",r.innerText="Contact",a.innerHTML="\n    <h2>The Restaurant</h2><br>\n    Pl. Sant Jaume, S/N<br>\n    08002 Barcelona, Spain<br>\n    <br>\n    Tel: 666-555-444<br>\n    contact@therestaurant.com\n    ",n.appendChild(r),n.appendChild(a),t.appendChild(n),e.innerHTML="",e.appendChild(t)})();break;default:console.log("Page error")}};return{start:()=>{document.querySelector("#menu").querySelectorAll("div").forEach(t=>{t.addEventListener("click",()=>e(t.id))}),e("home-page")}}})().start()}]);
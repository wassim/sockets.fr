"use strict";!function(){document.getElementById("body").classList.add("test");for(var e={valueNames:["space-name","space-location","space-category",{name:"space-speed",attr:"data-speed"},"space-password","space-date"]},n=new List("body",e),a=new Clipboard(".copy-btn"),t=new Date,i=new Array("dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"),d=i[t.getDay()],r=document.querySelectorAll(".space-date .days"),s=0;s<r.length;s++){r[s].textContent.includes(d)?r[s].previousElementSibling.innerHTML="Ouvert aujourd'hui":(r[s].previousElementSibling.innerHTML="Fermé aujourd'hui",r[s].nextElementSibling.innerHTML="")}}();
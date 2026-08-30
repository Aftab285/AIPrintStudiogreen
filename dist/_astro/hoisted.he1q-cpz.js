import"./hoisted.BxEYyXk0.js";const t=document.getElementById("quote-form-element"),s=document.getElementById("quote-form-success"),n=document.getElementById("success-name");t?.addEventListener("submit",c=>{c.preventDefault();const e=new FormData(t),o=e.get("name"),a=e.get("email"),i=e.get("service"),m=e.get("aiTool"),r=e.get("targetDimensions")||"Not sure yet",l=e.get("substrate"),u=e.get("notes")||"None",d=`Hello! I would like a quote for AI Print Preparation:
- Name: ${o}
- Email: ${a}
- Service Needed: ${i}
- AI Tool Used: ${m}
- Target Print Dimensions: ${r}
- Substrate / Medium: ${l}
- Notes: ${u}`,g=`https://wa.me/923479429415?text=${encodeURIComponent(d)}`;window.open(g,"_blank"),t&&(t.style.display="none"),s&&(s.style.display="block"),n&&o&&(n.textContent=`Thank you, ${o}!`)});

import{_ as d,r as a,o as p,c as v,a as e,t as m,f as y,b as r,w as g,j as x}from"./entry.cb897436.js";import{_ as h}from"./nuxt-link.5c97f347.js";const b={class:"flex flex-row gap-1"},w=["value","aria-label"],k={__name:"CopyTextPopupComponent",props:{textToCopy:{type:String,required:!0}},setup(n){const l=n,t=a(null),o=a(null),f=a(null),u=()=>{const s=t.value,i=o.value,c=f.value;s&&i&&(s.select(),s.setSelectionRange(0,99999),document.execCommand("copy"),i.style.display="block",setTimeout(()=>{i.style.display="none",c.style.display="block",setTimeout(()=>{c.style.display="none"},2e3)},2e3))};let _="textCopy"+(Math.random()+1).toString(36).substring(7);return(s,i)=>(p(),v("div",b,[e("button",{onClick:u,class:"hover:underline cursor-pointer"},m(l.textToCopy),1),e("input",{ref_key:"textToCopy",ref:t,value:l.textToCopy,"aria-label":y(_),class:"sr-only"},null,8,w),e("div",{ref_key:"popup",ref:o,class:"hidden text-xs bg-tertiaryDarker text-primary rounded-md px-1 py-0.5 w-max"},"Text Copied!",512)]))}},C=d(k,[["__scopeId","data-v-8347c597"]]),T={},D={class:"bg-secondaryDarker p-8 sm:mb-12 sticky z-20"},I={class:"flex flex-col gap-4 text-primaryDarkest"},P={class:"grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-16 lg:gap-8"},L={class:"flex flex-col gap-4"},N=x('<div class="flex flex-col font-bold"><div>Contact</div><div class="flex flex-row gap-4"><div>Information</div><div class="relative flex items-center py-2 w-8"><div class="flex-grow border-t border-primary"></div></div></div></div><div class="font-normal text-sm">Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</div>',2),S={class:"flex flex-col gap-1 !text-sm"},B={class:"flex flex-row gap-2"},E=e("div",{class:"font-bold text-tertiaryDarkest"},"E",-1),j={class:"flex flex-row gap-2"},V=e("div",{class:"font-bold text-tertiaryDarkest"},"P",-1),$=x('<div class="flex flex-col gap-4"><div class="flex flex-col font-bold"><div>Latest</div><div class="flex flex-row gap-4"><div>Projects</div><div class="relative flex items-center py-2 w-8"><div class="flex-grow border-t border-primary"></div></div></div></div><div class="font-normal text-sm"><ul><li><a href="https://docs.nibross.com/portfolio/getting-started/introduction.html" target="_blank" class="hover:underline cursor-pointer transition-all ease-in-out"> Portfolio </a></li><li><a href="https://docs.nibross.com/espbu/getting-started/introduction.html" target="_blank" class="hover:underline cursor-pointer transition-all ease-in-out">E-SPBU </a></li><li><a href="https://docs.nibross.com/koperasi-multiasa/getting-started/introduction.html" target="_blank" class="hover:underline cursor-pointer transition-all ease-in-out"> Koperasi Multiasa</a></li></ul></div></div><div class="flex flex-col gap-4"><div class="flex flex-col font-bold"><div>Current</div><div class="flex flex-row gap-4"><div>Availability</div><div class="relative flex items-center py-2 w-8"><div class="flex-grow border-t border-primary"></div></div></div></div><div class="font-normal text-sm">I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch.</div></div><div class="flex flex-col gap-4"><div class="flex flex-col font-bold"><div>Connect</div><div class="flex flex-row gap-4"><div>with me On</div><div class="relative flex items-center py-2 w-8"><div class="flex-grow border-t border-primary"></div></div></div></div><div class="font-normal text-sm"><ul><li><a href="https://www.linkedin.com/in/nibros" target="_blank" class="hover:underline cursor-pointer transition-all ease-in-out">LinkedIn</a></li><li><a href="https://github.com/nibroos" target="_blank" class="hover:underline cursor-pointer transition-all ease-in-out">Github</a></li></ul></div></div>',3),z=e("div",{class:"w-10 h-10 rounded-full flex items-center justify-center text-secondaryLighter border-2 border-secondaryLighter"},[e("span",{class:"text-xl font-bold"},"N")],-1),A=e("div",{class:"flex flex-col text-primary font-light text-xs gap-1"},[e("div",null,"@ 2023 Nibros Ari Wibowo"),e("div",{class:"whitespace-nowrap -mt-1 dark:text-primaryDarker"},"Based in Indonesia ")],-1);function F(n,l){const t=C,o=h;return p(),v("div",D,[e("div",I,[e("div",P,[e("div",L,[N,e("div",S,[e("div",B,[E,r(t,{"text-to-copy":"thankyounibros@gmail.com"})]),e("div",j,[V,r(t,{"text-to-copy":"+62895329221824"})])])]),$]),r(o,{to:"/",class:"flex flex-row font-bold py-2 tracking-tight items-center gap-2 w-max"},{default:g(()=>[z,A]),_:1})])])}const G=d(T,[["render",F]]);export{G as default};

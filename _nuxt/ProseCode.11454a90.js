import{d as y,r as l,x as k,b as s,c as p,e as m,g as v,w,W as _,N as f,T as x,n as C,Y as S,p as $,i as b,k as h,t as I,f as P,a0 as N}from"./entry.5c5fcbaa.js";import{c as z,o as T}from"./index.ece56b5b.js";const V=e=>($("data-v-4cf18c2a"),e=e(),b(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=z();T(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=k(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(r=>{console.warn("Couldn't copy to clipboard!",r)})};return(B,r)=>{const u=S;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:C([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[v(x,{name:"fade"},{default:w(()=>{var d,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const D=h(R,[["__scopeId","data-v-4cf18c2a"]]),E={key:0,class:"filename"},O=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=D;return s(),p("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",E,I(e.filename),1)):P("",!0),N(a.$slots,"default",{},void 0,!0),v(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const j=h(O,[["__scopeId","data-v-511e7ff0"]]);export{j as default};

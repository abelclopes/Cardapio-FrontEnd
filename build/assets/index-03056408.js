import{j as e,r as u,a as m}from"./react-91cb21d0.js";import{c as f}from"./react-dom-515a4d06.js";import{s as h,I as p,C as x,a as g,A as y,r as j,b as C,c as d,T as i,d as b,B as l}from"./@mui-9c668a1f.js";import{a as v}from"./axios-4a70c6fc.js";import{u as P,Q as A,a as L}from"./@tanstack-edf9a21c.js";import"./hoist-non-react-statics-f84d2b88.js";import"./scheduler-765c72db.js";import"./@babel-5d790daf.js";import"./clsx-1229b3e0.js";import"./react-transition-group-9c01f2ed.js";import"./@emotion-f85709ee.js";import"./stylis-79144faa.js";import"./use-sync-external-store-7c6ea67a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();h(o=>{const{expand:t,...a}=o;return e.jsx(p,{...a})})(({theme:o,expand:t})=>({transform:t?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest})}));function O(o){const[t,a]=u.useState(!1);return e.jsxs(x,{sx:{maxWidth:345},children:[e.jsx(g,{avatar:e.jsx(y,{sx:{bgcolor:j[500]},"aria-label":"recipe",children:"R"}),action:e.jsx(p,{"aria-label":"settings"}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),e.jsx(C,{component:"img",height:"194",image:"/static/images/cards/paella.jpg",alt:"Paella dish"}),e.jsx(d,{children:e.jsx(i,{variant:"body2",color:"text.secondary",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),e.jsx(b,{in:t,timeout:"auto",unmountOnExit:!0,children:e.jsxs(d,{children:[e.jsx(i,{paragraph:!0,children:"Method:"}),e.jsx(i,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."})]})})]})}const E="http://localhost:8080;",I=async()=>v.get(`${E}/food`);function S(){var t;const o=P({queryFn:I,queryKey:["food-data"],retry:2});return{...o,data:(t=o.data)==null?void 0:t.data}}function q(){const{data:o}=S();return u.useState(!1),e.jsxs(l,{className:"container",children:[e.jsx(i,{variant:"h1",children:"Cardápio"}),e.jsx(l,{className:"card-grid",children:o==null?void 0:o.map(t=>e.jsx(O,{image:t.image,title:t.title,price:t.price}))})]})}const N=new A;function R(){return e.jsx(L,{client:N,children:e.jsx(q,{})})}f.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(R,{})}));
import{j as r,r as c,S as l,W as p}from"./index-BS6GgvZt.js";import{L as x}from"./ListItem-BYaXlZ-y.js";import{A as d}from"./Avatar-DQFpccFh.js";import{c as h,T as f}from"./Typography-Hx0OwDKD.js";import{I as v}from"./IconButton-WLava4db.js";import{A as j}from"./Delete-DgsJjBpu.js";const I=h(r.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove"),b=({user:e,handler:t,handlerIsLoading:s,isAdded:o=!1,styling:a={}})=>{const{name:i,_id:m,avatar:n}=e;return r.jsx(x,{children:r.jsxs(l,{direction:"row",alignItems:"center",spacing:"1rem",width:"100%",...a,children:[r.jsx(d,{src:p(n)}),r.jsx(f,{variant:"body1",sx:{flexGlow:1,display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",width:"100%"},children:i}),r.jsx(v,{size:"small",sx:{bgcolor:o?"error.main":"primary.main",color:"white","&:hover":{bgcolor:o?"error.dark":"primary.dark"}},onClick:()=>t(m),disabled:s,children:o?r.jsx(I,{}):r.jsx(j,{})})]})})},R=c.memo(b);export{R as U};
import{D as p,E as u,F as g,G as i,r as x,H as m,J as C,j as n,K as D,L as f,az as y}from"./index-BS6GgvZt.js";import{d as T,D as j,a as h}from"./DialogTitle-llB7JTx1.js";import{T as w}from"./Typography-Hx0OwDKD.js";import{B as v}from"./Button-CWjnMyjq.js";import"./Modal-z7jNV533.js";import"./Menu-BJUc5RuW.js";function R(o){return p("MuiDialogActions",o)}u("MuiDialogActions",["root","spacing"]);const M=["className","disableSpacing"],S=o=>{const{classes:t,disableSpacing:s}=o;return f({root:["root",!s&&"spacing"]},R,t)},b=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,!s.disableSpacing&&t.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),N=x.forwardRef(function(t,s){const e=m({props:t,name:"MuiDialogActions"}),{className:l,disableSpacing:r=!1}=e,a=C(e,M),c=i({},e,{disableSpacing:r}),d=S(c);return n.jsx(b,i({className:D(d.root,l),ownerState:c,ref:s},a))});function A(o){return p("MuiDialogContent",o)}u("MuiDialogContent",["root","dividers"]);const U=["className","dividers"],$=o=>{const{classes:t,dividers:s}=o;return f({root:["root",s&&"dividers"]},A,t)},_=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${T.root} + &`]:{paddingTop:0}})),P=x.forwardRef(function(t,s){const e=m({props:t,name:"MuiDialogContent"}),{className:l,dividers:r=!1}=e,a=C(e,U),c=i({},e,{dividers:r}),d=$(c);return n.jsx(_,i({className:D(d.root,l),ownerState:c,ref:s},a))});function k(o){return p("MuiDialogContentText",o)}u("MuiDialogContentText",["root"]);const B=["children","className"],E=o=>{const{classes:t}=o,e=f({root:["root"]},k,t);return i({},t,e)},F=g(w,{shouldForwardProp:o=>y(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),L=x.forwardRef(function(t,s){const e=m({props:t,name:"MuiDialogContentText"}),{className:l}=e,r=C(e,B),a=E(r);return n.jsx(F,i({component:"p",variant:"body1",color:"text.secondary",ref:s,ownerState:r,className:D(a.root,l)},e,{classes:a}))}),J=({open:o,handleClose:t,deleteHandler:s})=>n.jsxs(j,{open:o,onClose:t,children:[n.jsx(h,{children:"Confirm Delete"}),n.jsx(P,{children:n.jsx(L,{children:"Are you sure you want to delete this group?"})}),n.jsxs(N,{children:[n.jsx(v,{onClick:t,children:"No"}),n.jsx(v,{onClick:s,color:"error",children:"Yes"})]})]});export{J as default};
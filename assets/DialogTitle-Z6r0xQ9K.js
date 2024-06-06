import{E as $,D as S,r as p,F as u,B as c,G as i,H as R,aC as V,J as j,j as n,K as h,L as w}from"./index-BSfwwWcf.js";import{B as q,M as O,P as F,y as Q}from"./Modal-BLF4wV9H.js";import{u as Z}from"./Menu-TdVv_jcZ.js";import{T as oo}from"./Typography-BCtm3Jm9.js";function ao(a){return S("MuiDialog",a)}const C=$("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),N=p.createContext({}),eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ro=u(q,{name:"MuiDialog",slot:"Backdrop",overrides:(a,o)=>o.backdrop})({zIndex:-1}),io=a=>{const{classes:o,scroll:e,maxWidth:r,fullWidth:l,fullScreen:t}=a,d={root:["root"],container:["container",`scroll${c(e)}`],paper:["paper",`paperScroll${c(e)}`,`paperWidth${c(String(r))}`,l&&"paperFullWidth",t&&"paperFullScreen"]};return w(d,ao,o)},to=u(O,{name:"MuiDialog",slot:"Root",overridesResolver:(a,o)=>o.root})({"@media print":{position:"absolute !important"}}),lo=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(a,o)=>{const{ownerState:e}=a;return[o.container,o[`scroll${c(e.scroll)}`]]}})(({ownerState:a})=>i({height:"100%","@media print":{height:"auto"},outline:0},a.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},a.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),so=u(F,{name:"MuiDialog",slot:"Paper",overridesResolver:(a,o)=>{const{ownerState:e}=a;return[o.paper,o[`scrollPaper${c(e.scroll)}`],o[`paperWidth${c(String(e.maxWidth))}`],e.fullWidth&&o.paperFullWidth,e.fullScreen&&o.paperFullScreen]}})(({theme:a,ownerState:o})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:a.breakpoints.unit==="px"?Math.max(a.breakpoints.values.xs,444):`max(${a.breakpoints.values.xs}${a.breakpoints.unit}, 444px)`,[`&.${C.paperScrollBody}`]:{[a.breakpoints.down(Math.max(a.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${a.breakpoints.values[o.maxWidth]}${a.breakpoints.unit}`,[`&.${C.paperScrollBody}`]:{[a.breakpoints.down(a.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${C.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),bo=p.forwardRef(function(o,e){const r=R({props:o,name:"MuiDialog"}),l=V(),t={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":d,"aria-labelledby":m,BackdropComponent:g,BackdropProps:b,children:U,className:A,disableEscapeKeyDown:y=!1,fullScreen:E=!1,fullWidth:I=!1,maxWidth:L="sm",onBackdropClick:v,onClick:P,onClose:f,open:T,PaperComponent:_=F,PaperProps:M={},scroll:H="paper",TransitionComponent:K=Q,transitionDuration:B=t,TransitionProps:X}=r,Y=j(r,eo),x=i({},r,{disableEscapeKeyDown:y,fullScreen:E,fullWidth:I,maxWidth:L,scroll:H}),k=io(x),D=p.useRef(),z=s=>{D.current=s.target===s.currentTarget},G=s=>{P&&P(s),D.current&&(D.current=null,v&&v(s),f&&f(s,"backdropClick"))},W=Z(m),J=p.useMemo(()=>({titleId:W}),[W]);return n.jsx(to,i({className:h(k.root,A),closeAfterTransition:!0,components:{Backdrop:ro},componentsProps:{backdrop:i({transitionDuration:B,as:g},b)},disableEscapeKeyDown:y,onClose:f,open:T,ref:e,onClick:G,ownerState:x},Y,{children:n.jsx(K,i({appear:!0,in:T,timeout:B,role:"presentation"},X,{children:n.jsx(lo,{className:h(k.container),onMouseDown:z,ownerState:x,children:n.jsx(so,i({as:_,elevation:24,role:"dialog","aria-describedby":d,"aria-labelledby":W},M,{className:h(k.paper,M.className),ownerState:x,children:n.jsx(N.Provider,{value:J,children:U})}))})}))}))});function no(a){return S("MuiDialogTitle",a)}const fo=$("MuiDialogTitle",["root"]),po=["className","id"],co=a=>{const{classes:o}=a;return w({root:["root"]},no,o)},uo=u(oo,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(a,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),ko=p.forwardRef(function(o,e){const r=R({props:o,name:"MuiDialogTitle"}),{className:l,id:t}=r,d=j(r,po),m=r,g=co(m),{titleId:b=t}=p.useContext(N);return n.jsx(uo,i({component:"h2",className:h(g.root,l),ownerState:m,ref:e,variant:"h6",id:t??b},d))});export{bo as D,ko as a,fo as d};

import{j as e,d as re,u as P,r as n,e as oe,f as G,_ as L,h as z,i as ie,l as ae,k as ce,m as le,n as me,o as de,p as ue,C as pe,q as ge,t as fe,v as he,S as N,g as xe,T as je,I as ye,w as ve,x as D,y as O,N as $,A as Me}from"./index-BSfwwWcf.js";import{b as Se}from"./index-M-N54JJD.js";import{M as Ae,a as Ce}from"./Menu-TdVv_jcZ.js";import{M as b,L as k}from"./MenuItem-CfFwb7jM.js";import{T as F}from"./Tooltip-CXAIh_e-.js";import{c as S,T as I}from"./Typography-BCtm3Jm9.js";import{m as Le,A as Te}from"./AppLayout-DCQhIfa6.js";import{R as be}from"./RenderAttachment-DDNMPmNq.js";import{B as ke,u as Fe,a as Ee}from"./Menu-BZCN9VKZ.js";import{I as B}from"./IconButton-CrNfA-Gk.js";import"./Modal-BLF4wV9H.js";import"./ExitToApp-C0MHsuc4.js";import"./Delete-DuT99Eys.js";import"./AvatarCart-Crcj2_cv.js";import"./Avatar-WKuGdpja.js";import"./Toolbar-BiTlT-AH.js";import"./Notifications-CyW4fPC_.js";const Ve=S(e.jsx("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"}),"AttachFile"),Ie=S(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 11h-3v3.75c0 1.24-1.01 2.25-2.25 2.25S8.5 17.99 8.5 16.75s1.01-2.25 2.25-2.25c.46 0 .89.14 1.25.38V11h4zm-3-4V3.5L18.5 9z"}),"AudioFile"),we=S(e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image"),Re=S(e.jsx("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),He=S(e.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile"),_e=S(e.jsx("path",{d:"M14 2H6.01c-1.1 0-2 .89-2 2L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zm-1 7V3.5L18.5 9zm1 5 2-1.06v4.12L14 16v1c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h4c.55 0 1 .45 1 1z"}),"VideoFile"),ze=({anchorE1:t,chatId:i})=>{const{isFileMenu:o}=re(s=>s.misc),a=P(),p=n.useRef(null),g=n.useRef(null),c=n.useRef(null),u=n.useRef(null),[f]=oe(),h=()=>a(G(!1)),l=()=>{var s;return(s=p.current)==null?void 0:s.click()},j=()=>{var s;return(s=g.current)==null?void 0:s.click()},T=()=>{var s;return(s=c.current)==null?void 0:s.click()},E=()=>{var s;return(s=u.current)==null?void 0:s.click()},y=async(s,x)=>{const A=Array.from(s.target.files);if(A.length<=0)return;if(A.length>5)return L.error(`You can only send 5 ${x} at a time`);a(z(!0));const v=L.loading(`Sending ${x}...`);h();try{const m=new FormData;m.append("chatId",i),A.forEach(M=>m.append("files",M)),(await f(m)).data?L.success(`${x} sent successfully`,{id:v}):L.error(`Failed to send ${x}`,{id:v})}catch(m){L.error(m,{id:v})}finally{a(z(!1))}};return e.jsx(Ae,{anchorEl:t,open:o,onClose:h,children:e.jsx("div",{style:{width:"10rem"},children:e.jsxs(Ce,{children:[e.jsxs(b,{onClick:l,children:[e.jsx(F,{title:"Image",children:e.jsx(we,{})}),e.jsx(k,{style:{marginLeft:"0.5rem"},children:"Image"}),e.jsx("input",{type:"file",multiple:!0,accept:"image/png, image/jpeg, image/gif",style:{display:"none"},onChange:s=>y(s,"Images"),ref:p})]}),e.jsxs(b,{onClick:j,children:[e.jsx(F,{title:"Audio",children:e.jsx(Ie,{})}),e.jsx(k,{style:{marginLeft:"0.5rem"},children:"Audio"}),e.jsx("input",{type:"file",multiple:!0,accept:"audio/mpeg, audio/wav",style:{display:"none"},onChange:s=>y(s,"Audios"),ref:g})]}),e.jsxs(b,{onClick:T,children:[e.jsx(F,{title:"Video",children:e.jsx(_e,{})}),e.jsx(k,{style:{marginLeft:"0.5rem"},children:"Video"}),e.jsx("input",{type:"file",multiple:!0,accept:"video/mp4, video/webm, video/ogg",style:{display:"none"},onChange:s=>y(s,"Videos"),ref:c})]}),e.jsxs(b,{onClick:E,children:[e.jsx(F,{title:"File",children:e.jsx(He,{})}),e.jsx(k,{style:{marginLeft:"0.5rem"},children:"File"}),e.jsx("input",{type:"file",multiple:!0,accept:"*",style:{display:"none"},onChange:s=>y(s,"Files"),ref:u})]})]})})})},Ne=({message:t,user:i})=>{const{sender:o,content:a,attachments:p=[],createdAt:g}=t,c=(o==null?void 0:o._id)===(i==null?void 0:i._id),u=ie(g).fromNow();return e.jsxs(Le.div,{initial:{opacity:0,x:"-100%"},whileInView:{opacity:1,x:0},style:{alignSelf:c?"flex-end":"flex-start",backgroundColor:"white",color:"black",borderRadius:"5px",padding:"0.5rem",width:"fit-content"},children:[!c&&e.jsx(I,{color:ae,fontWeight:"600",variant:"caption",children:o.name}),a&&e.jsx(I,{children:a}),p.length>0&&p.map((f,h)=>{const l=f.url,j=ce(l);return e.jsx(ke,{children:e.jsx("a",{href:l,target:"_blank",download:!0,style:{color:"black"},children:be(j,l)})},h)}),e.jsx(I,{variant:"caption",color:"text.secondary",children:u})]})},De=n.memo(Ne),Oe=({chatId:t,user:i})=>{var w,R,H,_;const o=le(),a=P(),p=me(),g=n.useRef(null),c=n.useRef(null),[u,f]=n.useState(""),[h,l]=n.useState([]),[j,T]=n.useState(1),[E,y]=n.useState(null),[s,x]=n.useState(!1),[A,v]=n.useState(!1),m=n.useRef(null),d=de({chatId:t,skip:!t}),M=ue({chatId:t,page:j}),{data:U,setData:Y}=Se(g,(w=M.data)==null?void 0:w.totalPages,j,T,(R=M.data)==null?void 0:R.messages),Q=[{isError:d.isError,error:d.error},{isError:M.isError,error:M.error}],C=(_=(H=d==null?void 0:d.data)==null?void 0:H.chat)==null?void 0:_.members,W=r=>{f(r.target.value),s||(o.emit(D,{members:C,chatId:t}),x(!0)),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{o.emit(O,{members:C,chatId:t}),x(!1)},[2e3])},q=r=>{a(G(!0)),y(r.currentTarget)},J=r=>{r.preventDefault(),u.trim()&&(o.emit($,{chatId:t,members:C,message:u}),f(""))};n.useEffect(()=>(o.emit(pe,{userId:i._id,members:C}),a(ge(t)),()=>{l([]),f(""),Y([]),T(1),o.emit(fe,{userId:i._id,members:C})}),[t]),n.useEffect(()=>{c.current&&c.current.scrollIntoView({behavior:"smooth"})},[h]),n.useEffect(()=>{if(d.isError)return p("/")},[d.isError]);const X=n.useCallback(r=>{r.chatId===t&&l(V=>[...V,r.message])},[t]),K=n.useCallback(r=>{r.chatId===t&&v(!0)},[t]),Z=n.useCallback(r=>{r.chatId===t&&v(!1)},[t]),ee=n.useCallback(r=>{if(r.chatId!==t)return;const V={content:r.message,sender:{_id:"djasdhajksdhasdsadasdas",name:"Admin"},chat:t,createdAt:new Date().toISOString()};l(ne=>[...ne,V])},[t]),se={[Me]:ee,[$]:X,[D]:K,[O]:Z};Fe(o,se),Ee(Q);const te=[...U,...h];return d.isLoading?e.jsx(he,{}):e.jsxs(n.Fragment,{children:[e.jsxs(N,{ref:g,boxSizing:"border-box",padding:"1rem",spacing:"1rem",bgcolor:xe,height:"90%",sx:{overflowX:"hidden",overflowY:"auto"},children:[te.map(r=>e.jsx(De,{message:r,user:i},r._id)),A&&e.jsx(je,{}),e.jsx("div",{ref:c})]}),e.jsx("form",{style:{height:"10%"},onSubmit:J,children:e.jsxs(N,{direction:"row",height:"100%",padding:"1rem",alignItems:"center",position:"relative",children:[e.jsx(B,{sx:{position:"absolute",left:"1.5rem",rotate:"30deg"},onClick:q,children:e.jsx(Ve,{})}),e.jsx(ye,{placeholder:"Type Message Here...",value:u,onChange:W}),e.jsx(B,{type:"submit",sx:{rotate:"-30deg",bgcolor:ve,color:"white",marginLeft:"1rem",padding:"0.5rem","&:hover":{bgcolor:"error.dark"}},children:e.jsx(Re,{})})]})}),e.jsx(ze,{anchorE1:E,chatId:t})]})},rs=Te()(Oe);export{rs as default};
import{r as e}from"./index-BS6GgvZt.js";const p=new Map,C=(r,s,d=[])=>{const[v,u]=e.useState(),[m,o]=e.useState(!1),[g,i]=e.useState(""),[c,t]=e.useState(0);return e.useEffect(()=>{const n=new AbortController;if(p.has(s)){u(JSON.parse(p.get(s)));return}return o(!0),fetch(r,{credentials:"include",signal:n.signal}).then(async a=>{const h=await a.json();if(a.ok)u(h),p.set(s,JSON.stringify(h));else throw new Error(h.message||"Errro while fetching!")}).catch(a=>{a.name!=="AbortError"&&i(a.message||"Something went wrong!")}).finally(()=>o(!1)),()=>{n.abort()}},[c,...d]),{data:v,loading:m,error:g,refetch:()=>{p.delete(s),t(n=>n+1)},clearCache:()=>{p.delete(s)}}},x=r=>/^[a-zA-Z0-9]+$/.test(r),M=(r,s=5,d=10)=>{const[m,o]=e.useState(null),[g,i]=e.useState(null),[c,t]=e.useState(null);return{file:g,preview:c,error:m,changeHandler:n=>{if(n.target.files){const a=n.target.files[0];if(n.target.files.length>1)return o("Cannot upload more than 1 file, please select type as 'Multiple'");if(a.size>1024*1024*s)return o("File size too large");const h=new FileReader;h.readAsDataURL(a),h.onloadend=()=>{t(h.result)},i(a)}},clear:()=>{i(null),t(null),o(null)}}},A=(r,s=()=>{})=>{const[d,v]=e.useState(r),[u,m]=e.useState("");return{value:d,changeHandler:i=>{let c;typeof d=="number"?c=Number(i.target.value):c=i.target.value,v(c);const t=s(c);m(t?t.errorMessage:"")},error:u,clear:()=>{v(r),m("")}}},H=(r,s,d,v,u,m=!1)=>{const[o,g]=e.useState([]),i=e.useRef(null),c=e.useCallback(()=>{i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{if(!r.current)return;const{scrollTop:t}=r.current;if(t===0){if(s===d)return;v(l=>l+1)}},200)},[s,d]);return e.useEffect(()=>{const t=r.current;return t&&t.addEventListener("scroll",c),()=>{t&&t.removeEventListener("scroll",c)}},[c,o]),e.useEffect(()=>{let t=0,w=0;r.current&&(t=r.current.scrollHeight,w=r.current.scrollTop),u&&g(l=>{const n=new Set(l.map(h=>h._id)),a=u==null?void 0:u.filter(h=>!n.has(h._id));return m?[...(Array.isArray(a)?[...a]:[a]).reverse(),...l]:[...a,...l]}),requestAnimationFrame(()=>{if(r.current){const l=w+r.current.scrollHeight-t;r.current.scrollTop=l}})},[u]),{data:o,setData:g}};e.memo(({size:r=10,color:s="black",styles:d,zoom:v="2",mode:u="normal"})=>{if(r<1||r>40)throw new Error("Size must be between 1 and 40");const m=e.useRef(),o=e.useRef({x:0,y:0}),g=e.useRef(!1),i=t=>{o.current={x:t.clientX,y:t.clientY};const l=t.target.getAttribute("data-firebolt-zoom");g.current=!!l},c=e.useCallback(()=>{let t=o.current.x,w=o.current.y;const l=m.current;l&&(Array.from(l).forEach((n,a)=>{n.style.left=`${t-12}px`,n.style.top=`${w-12}px`,n.x=t,n.y=w;const h=(l.length-a)/l.length;n.style.scale=h.toString();const f=l[a+1]||l[0];t+=(Number(f.x||0)-t)*.3,w+=(Number(f.y||0)-w)*.3,a===0&&g.current&&(n.style.scale=v)}),requestAnimationFrame(c))},[]);return e.useEffect(()=>(m.current=document.getElementsByClassName("6pp-firebolt-Cursor"),c(),window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}),[]),e.createElement("div",{style:{zIndex:"10000",mixBlendMode:u,pointerEvents:"none"}},Array.from({length:r}).map((t,w)=>e.createElement("div",{className:"6pp-firebolt-Cursor",key:w,style:{position:"fixed",height:"24px",width:"24px",borderRadius:"50%",left:0,top:0,backgroundColor:s,userSelect:"none",pointerEvents:"none",transition:"scale 0.2s",...d}})))});e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16"},e.createElement("path",{d:"M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16"},e.createElement("path",{d:"M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M17.849,20.934a1.555,1.555,0,0,1-.781-.212l-4.16-2.4a3.769,3.769,0,0,0-1.877-.5H7.214a2.631,2.631,0,0,1-2.628-2.627V8.809A2.631,2.631,0,0,1,7.214,6.182h3.817a3.747,3.747,0,0,0,1.877-.5l4.16-2.4a1.564,1.564,0,0,1,2.346,1.354V19.369a1.57,1.57,0,0,1-1.565,1.565ZM7.214,7.182A1.63,1.63,0,0,0,5.586,8.809v6.382a1.629,1.629,0,0,0,1.628,1.627h3.817a4.756,4.756,0,0,1,2.377.637l4.16,2.4a.543.543,0,0,0,.563,0,.553.553,0,0,0,.283-.487V4.632a.565.565,0,0,0-.846-.489l-4.16,2.4a4.753,4.753,0,0,1-2.377.637Z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("g",null,e.createElement("path",{d:"M13.816,19.937a1.446,1.446,0,0,1-.717-.194L9.43,17.623a3.257,3.257,0,0,0-1.625-.434H4.439a2.379,2.379,0,0,1-2.375-2.376V9.187A2.378,2.378,0,0,1,4.439,6.812H7.805A3.257,3.257,0,0,0,9.43,6.376L13.1,4.259A1.437,1.437,0,0,1,15.255,5.5V18.5a1.424,1.424,0,0,1-.718,1.245A1.445,1.445,0,0,1,13.816,19.937ZM4.439,7.812A1.377,1.377,0,0,0,3.064,9.187v5.626a1.378,1.378,0,0,0,1.375,1.376H7.805a4.254,4.254,0,0,1,2.125.569L13.6,18.876a.439.439,0,0,0,.657-.38V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.251,4.251,0,0,1-2.125.57Z"}),e.createElement("path",{d:"M18.407,6.262a7.79,7.79,0,0,1,.021,11.476c-.474.437.235,1.143.707.707a8.793,8.793,0,0,0-.021-12.89c-.474-.434-1.184.272-.707.707Z"}),e.createElement("path",{d:"M16.91,9.031a4.021,4.021,0,0,1,.012,5.938c-.474.438.234,1.143.707.707a5.025,5.025,0,0,0-.012-7.352c-.474-.434-1.183.272-.707.707Z"})));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},e.createElement("g",null,e.createElement("path",{d:"M13.817,19.936a1.424,1.424,0,0,1-.719-.2L9.43,17.624a3.254,3.254,0,0,0-1.625-.436H4.44a2.377,2.377,0,0,1-2.375-2.375V9.187A2.378,2.378,0,0,1,4.44,6.811H7.805A3.257,3.257,0,0,0,9.43,6.377L13.1,4.259A1.438,1.438,0,0,1,15.255,5.5V18.5a1.423,1.423,0,0,1-.718,1.245A1.439,1.439,0,0,1,13.817,19.936ZM4.44,7.811A1.377,1.377,0,0,0,3.065,9.187v5.626A1.377,1.377,0,0,0,4.44,16.188H7.805a4.247,4.247,0,0,1,2.125.571L13.6,18.876a.437.437,0,0,0,.439,0,.433.433,0,0,0,.218-.379V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.25,4.25,0,0,1-2.125.569Z"}),e.createElement("path",{d:"M17.606,14.445a.5.5,0,0,1-.7-.711c.17-.169.34-.349.52-.52l1.21-1.209c-.57-.581-1.15-1.161-1.73-1.74a.5.5,0,0,1,.7-.71l1.74,1.739,1.74-1.739a.5.5,0,0,1,.7.71l-1.73,1.74,1.73,1.729a.5.5,0,0,1-.7.711L19.343,12.7Z"})));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"24",fill:"currentColor"},e.createElement("circle",{cx:"256",cy:"256",r:"48"}),e.createElement("path",{d:"M470.39 300l-.47-.38-31.56-24.75a16.11 16.11 0 01-6.1-13.33v-11.56a16 16 0 016.11-13.22L469.92 212l.47-.38a26.68 26.68 0 005.9-34.06l-42.71-73.9a1.59 1.59 0 01-.13-.22A26.86 26.86 0 00401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 01-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 01-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 00298.76 26h-85.52a26.92 26.92 0 00-26.45 22.39l-.09.56-5.57 39.67a16 16 0 01-8.13 11.82 175.21 175.21 0 00-10 5.82 15.92 15.92 0 01-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 00-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 005.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 016.1 13.33v11.56a16 16 0 01-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 00-5.9 34.06l42.71 73.9a1.59 1.59 0 01.13.22 26.86 26.86 0 0032.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0114.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 018.19 11.82l5.56 39.59.12.72A27.22 27.22 0 00213.24 486h85.52a26.92 26.92 0 0026.45-22.39l.09-.56 5.57-39.67a16 16 0 018.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0114.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0032.48-11.34 2.53 2.53 0 01.13-.22l42.71-73.89a26.7 26.7 0 00-5.89-34.11zm-134.48-40.24a80 80 0 11-83.66-83.67 80.21 80.21 0 0183.66 83.67z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor"},e.createElement("path",{d:"M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM4 5V19H20V5H4ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M7 9l-3 -3l3 -3"}),e.createElement("path",{d:"M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11"}),e.createElement("path",{d:"M6 14v6"}),e.createElement("path",{d:"M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z"}));e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.createElement("path",{d:"M17 9l3 -3l-3 -3"}),e.createElement("path",{d:"M8 17.918a5.997 5.997 0 0 1 -5 -5.918a6 6 0 0 1 6 -6h11"}),e.createElement("path",{d:"M12 14v6"}),e.createElement("path",{d:"M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z"}));e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V12.2676C18.7058 12.0974 18.3643 12 18 12H14C12.8954 12 12 12.8954 12 14V18C12 18.3643 12.0974 18.7058 12.2676 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z",fill:"currentColor"}));export{M as a,H as b,C as c,x as i,A as u};
import{m as $e,n as Le,r as h,o as ke,p as We,q as B,a as k,t as R,f as H,v as Be,C as Ue,w as Ae,x as ze,y as re,z as He,A as j,B as Y,D as Ke,E as Z,G as se,Z as K,M as Ve,P as we,I as ie,J as me,K as ae,N as Ge,O as Qe,Q as Oe,S as je,U as Ye,V as J,W as qe}from"./app.780865c4.js";import{L as Xe,d as he,a as ge}from"./index.86c9ae93.js";var Re={exports:{}},Je="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ze=Je,et=Ze;function Ie(){}function Se(){}Se.resetWarningCache=Ie;var tt=function(){function e(o,p,s,a,i,c){if(c!==et){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Se,resetWarningCache:Ie};return n.PropTypes=n,n};Re.exports=tt();const nt=["className","component"];function ot(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:o,styleFunctionSx:p=Le}=e,s=$e("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(p);return h.exports.forwardRef(function(c,r){const u=ke(t),f=We(c),{className:b,component:d="div"}=f,m=B(f,nt);return k(s,R({as:d,ref:r,className:H(b,o?o(n):n),theme:u},m))})}const rt=Be(),st=ot({defaultTheme:rt,defaultClassName:"MuiBox-root",generateClassName:Ue.generate}),on=st;function it(e,t,n,o,p){const s=typeof window<"u"&&typeof window.matchMedia<"u",[a,i]=h.exports.useState(()=>p&&s?n(e).matches:o?o(e).matches:t);return re(()=>{let c=!0;if(!s)return;const r=n(e),u=()=>{c&&i(r.matches)};return u(),r.addListener(u),()=>{c=!1,r.removeListener(u)}},[e,n,s]),a}const _e=He["useSyncExternalStore"];function at(e,t,n,o){const p=h.exports.useCallback(()=>t,[t]),s=h.exports.useMemo(()=>{if(o!==null){const{matches:r}=o(e);return()=>r}return p},[p,e,o]),[a,i]=h.exports.useMemo(()=>{if(n===null)return[p,()=>()=>{}];const r=n(e);return[()=>r.matches,u=>(r.addListener(u),()=>{r.removeListener(u)})]},[p,n,e]);return _e(i,a,s)}function rn(e,t={}){const n=Ae(),o=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:p=!1,matchMedia:s=o?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:i}=ze({name:"MuiUseMediaQuery",props:t,theme:n});let c=typeof e=="function"?e(n):e;return c=c.replace(/^@media( ?)/m,""),(_e!==void 0?at:it)(c,p,s,a,i)}function sn(e){return Y("MuiListItemIcon",e)}const ct=j("MuiListItemIcon",["root","alignItemsFlexStart"]),be=ct;function an(e){return Y("MuiListItemText",e)}const ut=j("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ye=ut,lt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function te(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function ve(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Ee(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function G(e,t,n,o,p,s){let a=!1,i=p(e,t,t?n:!1);for(;i;){if(i===e.firstChild){if(a)return!1;a=!0}const c=o?!1:i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||!Ee(i,s)||c)i=p(e,i,n);else return i.focus(),!0}return!1}const pt=h.exports.forwardRef(function(t,n){const{actions:o,autoFocus:p=!1,autoFocusItem:s=!1,children:a,className:i,disabledItemsFocusable:c=!1,disableListWrap:r=!1,onKeyDown:u,variant:f="selectedMenu"}=t,b=B(t,lt),d=h.exports.useRef(null),m=h.exports.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});re(()=>{p&&d.current.focus()},[p]),h.exports.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(g,y)=>{const x=!d.current.style.width;if(g.clientHeight<d.current.clientHeight&&x){const O=`${Ke(Z(g))}px`;d.current.style[y.direction==="rtl"?"paddingLeft":"paddingRight"]=O,d.current.style.width=`calc(100% + ${O})`}return d.current}}),[]);const P=g=>{const y=d.current,x=g.key,O=Z(y).activeElement;if(x==="ArrowDown")g.preventDefault(),G(y,O,r,c,te);else if(x==="ArrowUp")g.preventDefault(),G(y,O,r,c,ve);else if(x==="Home")g.preventDefault(),G(y,null,r,c,te);else if(x==="End")g.preventDefault(),G(y,null,r,c,ve);else if(x.length===1){const C=m.current,$=x.toLowerCase(),F=performance.now();C.keys.length>0&&(F-C.lastTime>500?(C.keys=[],C.repeating=!0,C.previousKeyMatched=!0):C.repeating&&$!==C.keys[0]&&(C.repeating=!1)),C.lastTime=F,C.keys.push($);const w=O&&!C.repeating&&Ee(O,C);C.previousKeyMatched&&(w||G(y,O,!1,c,te,C))?g.preventDefault():C.previousKeyMatched=!1}u&&u(g)},T=se(d,n);let v=-1;h.exports.Children.forEach(a,(g,y)=>{!h.exports.isValidElement(g)||g.props.disabled||(f==="selectedMenu"&&g.props.selected||v===-1)&&(v=y)});const E=h.exports.Children.map(a,(g,y)=>{if(y===v){const x={};return s&&(x.autoFocus=!0),g.props.tabIndex===void 0&&f==="selectedMenu"&&(x.tabIndex=0),h.exports.cloneElement(g,x)}return g});return k(Xe,R({role:"menu",ref:T,className:i,onKeyDown:P,tabIndex:p?0:-1},b,{children:E}))}),dt=pt;function ft(e){return Y("MuiPopover",e)}j("MuiPopover",["root","paper"]);const mt=["onEntering"],ht=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function Pe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function xe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Ce(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ne(e){return typeof e=="function"?e():e}const gt=e=>{const{classes:t}=e;return ae({root:["root"],paper:["paper"]},ft,t)},bt=K(Ve,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),yt=K(we,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),vt=h.exports.forwardRef(function(t,n){const o=ie({props:t,name:"MuiPopover"}),{action:p,anchorEl:s,anchorOrigin:a={vertical:"top",horizontal:"left"},anchorPosition:i,anchorReference:c="anchorEl",children:r,className:u,container:f,elevation:b=8,marginThreshold:d=16,open:m,PaperProps:P={},transformOrigin:T={vertical:"top",horizontal:"left"},TransitionComponent:v=Ge,transitionDuration:E="auto",TransitionProps:{onEntering:g}={}}=o,y=B(o.TransitionProps,mt),x=B(o,ht),O=h.exports.useRef(),C=se(O,P.ref),$=R({},o,{anchorOrigin:a,anchorReference:c,elevation:b,marginThreshold:d,PaperProps:P,transformOrigin:T,TransitionComponent:v,transitionDuration:E,TransitionProps:y}),F=gt($),w=h.exports.useCallback(()=>{if(c==="anchorPosition")return i;const M=ne(s),D=(M&&M.nodeType===1?M:Z(O.current).body).getBoundingClientRect();return{top:D.top+Pe(D,a.vertical),left:D.left+xe(D,a.horizontal)}},[s,a.horizontal,a.vertical,i,c]),l=h.exports.useCallback(M=>({vertical:Pe(M,T.vertical),horizontal:xe(M,T.horizontal)}),[T.horizontal,T.vertical]),S=h.exports.useCallback(M=>{const _={width:M.offsetWidth,height:M.offsetHeight},D=l(_);if(c==="none")return{top:null,left:null,transformOrigin:Ce(D)};const ce=w();let A=ce.top-D.vertical,z=ce.left-D.horizontal;const ue=A+_.height,le=z+_.width,pe=me(ne(s)),de=pe.innerHeight-d,fe=pe.innerWidth-d;if(A<d){const N=A-d;A-=N,D.vertical+=N}else if(ue>de){const N=ue-de;A-=N,D.vertical+=N}if(z<d){const N=z-d;z-=N,D.horizontal+=N}else if(le>fe){const N=le-fe;z-=N,D.horizontal+=N}return{top:`${Math.round(A)}px`,left:`${Math.round(z)}px`,transformOrigin:Ce(D)}},[s,c,w,l,d]),[W,V]=h.exports.useState(m),L=h.exports.useCallback(()=>{const M=O.current;if(!M)return;const _=S(M);_.top!==null&&(M.style.top=_.top),_.left!==null&&(M.style.left=_.left),M.style.transformOrigin=_.transformOrigin,V(!0)},[S]),ee=(M,_)=>{g&&g(M,_),L()},X=()=>{V(!1)};h.exports.useEffect(()=>{m&&L()}),h.exports.useImperativeHandle(p,()=>m?{updatePosition:()=>{L()}}:null,[m,L]),h.exports.useEffect(()=>{if(!m)return;const M=Qe(()=>{L()}),_=me(s);return _.addEventListener("resize",M),()=>{M.clear(),_.removeEventListener("resize",M)}},[s,m,L]);let U=E;E==="auto"&&!v.muiSupportAuto&&(U=void 0);const Ne=f||(s?Z(ne(s)).body:void 0);return k(bt,R({BackdropProps:{invisible:!0},className:H(F.root,u),container:Ne,open:m,ref:n,ownerState:$},x,{children:k(v,R({appear:!0,in:m,onEntering:ee,onExited:X,timeout:U},y,{children:k(yt,R({elevation:b},P,{ref:C,className:H(F.paper,P.className)},W?void 0:{style:R({},P.style,{opacity:0})},{ownerState:$,children:r}))}))}))}),Pt=vt;function xt(e){return Y("MuiMenu",e)}j("MuiMenu",["root","paper","list"]);const Ct=["onEntering"],Mt=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],Tt={vertical:"top",horizontal:"right"},wt={vertical:"top",horizontal:"left"},Ot=e=>{const{classes:t}=e;return ae({root:["root"],paper:["paper"],list:["list"]},xt,t)},Rt=K(Pt,{shouldForwardProp:e=>Oe(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),It=K(we,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),St=K(dt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),_t=h.exports.forwardRef(function(t,n){const o=ie({props:t,name:"MuiMenu"}),{autoFocus:p=!0,children:s,disableAutoFocusItem:a=!1,MenuListProps:i={},onClose:c,open:r,PaperProps:u={},PopoverClasses:f,transitionDuration:b="auto",TransitionProps:{onEntering:d}={},variant:m="selectedMenu"}=o,P=B(o.TransitionProps,Ct),T=B(o,Mt),v=je(),E=v.direction==="rtl",g=R({},o,{autoFocus:p,disableAutoFocusItem:a,MenuListProps:i,onEntering:d,PaperProps:u,transitionDuration:b,TransitionProps:P,variant:m}),y=Ot(g),x=p&&!a&&r,O=h.exports.useRef(null),C=(w,l)=>{O.current&&O.current.adjustStyleForScrollbar(w,v),d&&d(w,l)},$=w=>{w.key==="Tab"&&(w.preventDefault(),c&&c(w,"tabKeyDown"))};let F=-1;return h.exports.Children.map(s,(w,l)=>{!h.exports.isValidElement(w)||w.props.disabled||(m==="selectedMenu"&&w.props.selected||F===-1)&&(F=l)}),k(Rt,R({classes:f,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?Tt:wt,PaperProps:R({component:It},u,{classes:R({},u.classes,{root:y.paper})}),className:y.root,open:r,ref:n,transitionDuration:b,TransitionProps:R({onEntering:C},P),ownerState:g},T,{children:k(St,R({onKeyDown:$,actions:O,autoFocus:p&&(F===-1||a),autoFocusItem:x,variant:m},i,{className:H(y.list,i.className),children:s}))}))}),cn=_t;function Et(e){return Y("MuiMenuItem",e)}const Dt=j("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Q=Dt,Ft=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Nt=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},$t=e=>{const{disabled:t,dense:n,divider:o,disableGutters:p,selected:s,classes:a}=e,c=ae({root:["root",n&&"dense",t&&"disabled",!p&&"gutters",o&&"divider",s&&"selected"]},Et,a);return R({},a,c)},Lt=K(Ye,{shouldForwardProp:e=>Oe(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Nt})(({theme:e,ownerState:t})=>R({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:J(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Q.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:J(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Q.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:J(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:J(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Q.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Q.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${he.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${he.inset}`]:{marginLeft:52},[`& .${ye.root}`]:{marginTop:0,marginBottom:0},[`& .${ye.inset}`]:{paddingLeft:36},[`& .${be.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&R({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${be.root} svg`]:{fontSize:"1.25rem"}}))),kt=h.exports.forwardRef(function(t,n){const o=ie({props:t,name:"MuiMenuItem"}),{autoFocus:p=!1,component:s="li",dense:a=!1,divider:i=!1,disableGutters:c=!1,focusVisibleClassName:r,role:u="menuitem",tabIndex:f,className:b}=o,d=B(o,Ft),m=h.exports.useContext(ge),P=h.exports.useMemo(()=>({dense:a||m.dense||!1,disableGutters:c}),[m.dense,a,c]),T=h.exports.useRef(null);re(()=>{p&&T.current&&T.current.focus()},[p]);const v=R({},o,{dense:P.dense,divider:i,disableGutters:c}),E=$t(o),g=se(T,n);let y;return o.disabled||(y=f!==void 0?f:-1),k(ge.Provider,{value:P,children:k(Lt,R({ref:g,role:u,tabIndex:y,component:s,focusVisibleClassName:H(E.focusVisible,r),className:H(E.root,b)},d,{ownerState:v,classes:E}))})}),un=kt;var De={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.anchorRef=zt;I.bindContextMenu=Kt;I.bindDialog=Jt;I.bindDoubleClick=jt;I.bindFocus=Qt;I.bindHover=Gt;I.bindMenu=qt;I.bindPopover=Yt;I.bindPopper=Xt;I.bindToggle=Vt;I.bindTrigger=Ht;I.createPopupState=At;I.initCoreState=void 0;Wt(h.exports);function Fe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Fe=function(o){return o?n:t})(e)}function Wt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Fe(t);if(n&&n.has(e))return n.get(e);var o={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=p?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(o,s,a):o[s]=e[s]}return o.default=e,n&&n.set(e,o),o}const Me={};function Bt(e,t){Me[e]||(Me[e]=!0,console.error("[material-ui-popup-state] WARNING",t))}const Ut={isOpen:!1,setAnchorElUsed:!1,anchorEl:null,anchorPosition:void 0,hovered:!1,focused:!1,_openEventType:null,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1};I.initCoreState=Ut;function At({state:e,setState:t,parentPopupState:n,popupId:o,variant:p,disableAutoFocus:s}){const{isOpen:a,setAnchorElUsed:i,anchorEl:c,anchorPosition:r,hovered:u,focused:f,_openEventType:b,_childPopupState:d,_deferNextOpen:m,_deferNextClose:P}=e;let T=e;const v=l=>{en(T,l)&&t(T={...T,...l})},E=l=>{v({setAnchorElUsed:!0,anchorEl:l})},g=l=>{a?x(l):y(l)},y=l=>{const S=l&&l.type,W=l&&l.currentTarget,V=l&&l.clientX,L=l&&l.clientY,ee=typeof V=="number"&&typeof L=="number"?{left:V,top:L}:void 0;if(S==="touchstart"){v({_deferNextOpen:!0});return}const X=()=>{if(!l&&!i&&Bt("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),n){if(!n.isOpen)return;n._setChildPopupState(w)}const U={isOpen:!0,anchorPosition:ee,hovered:S==="mouseover"||u,focused:S==="focus"||f,_openEventType:S};W?i||(U.anchorEl=W):l&&(U.anchorEl=l),v(U)};m?(v({_deferNextOpen:!1}),setTimeout(X,0)):X()},x=l=>{switch(l&&l.type){case"touchstart":v({_deferNextClose:!0});return}const W=()=>{d&&d.close(),n&&n._setChildPopupState(null),v({isOpen:!1,hovered:!1,focused:!1})};P?(v({_deferNextClose:!1}),setTimeout(W,0)):W()},O=(l,S)=>{l?y(S):x(S)},C=l=>{const S=l.relatedTarget;u&&!oe(S,w)&&(f?v({hovered:!1}):x(l))},$=l=>{const S=l.relatedTarget;f&&!oe(S,w)&&(u?v({focused:!1}):x(l))},F=l=>v({_childPopupState:l}),w={anchorEl:c,anchorPosition:r,setAnchorEl:E,setAnchorElUsed:i,popupId:o,variant:p,isOpen:a,open:y,close:x,toggle:g,setOpen:O,onBlur:$,onMouseLeave:C,disableAutoFocus:s!=null?s:Boolean(u||f),_openEventType:b,_childPopupState:d,_setChildPopupState:F};return w}function zt({setAnchorEl:e}){return t=>{t&&e(t)}}function q({isOpen:e,open:t,popupId:n,variant:o}){return{...o==="popover"?{"aria-haspopup":!0,"aria-controls":e&&n!=null?n:void 0}:o==="popper"?{"aria-describedby":e&&n!=null?n:void 0}:void 0}}function Ht(e){return{...q(e),onClick:e.open,onTouchStart:e.open}}function Kt(e){return{...q(e),onContextMenu:t=>{t.preventDefault(),e.open(t)}}}function Vt(e){return{...q(e),onClick:e.toggle,onTouchStart:e.toggle}}function Gt(e){const{open:t,onMouseLeave:n}=e;return{...q(e),onTouchStart:t,onMouseOver:t,onMouseLeave:n}}function Qt(e){const{open:t,onBlur:n}=e;return{...q(e),onFocus:t,onBlur:n}}function jt({isOpen:e,open:t,popupId:n,variant:o}){return{[o==="popover"?"aria-controls":"aria-describedby"]:e?n:null,"aria-haspopup":o==="popover"?!0:void 0,onDoubleClick:t}}function Yt({isOpen:e,anchorEl:t,anchorPosition:n,close:o,popupId:p,onMouseLeave:s,disableAutoFocus:a,_openEventType:i}){return{id:p,anchorEl:t,anchorPosition:n,anchorReference:i==="contextmenu"?"anchorPosition":"anchorEl",open:e,onClose:o,onMouseLeave:s,...a&&{disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0}}}function qt({isOpen:e,anchorEl:t,anchorPosition:n,close:o,popupId:p,onMouseLeave:s,disableAutoFocus:a,_openEventType:i}){return{id:p,anchorEl:t,anchorPosition:n,anchorReference:i==="contextmenu"?"anchorPosition":"anchorEl",open:e,onClose:o,onMouseLeave:s,...a&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0}}}function Xt({isOpen:e,anchorEl:t,popupId:n,onMouseLeave:o}){return{id:n,anchorEl:t,open:e,onMouseLeave:o}}function Jt({isOpen:e,close:t}){return{open:e,onClose:t}}function Zt({popupId:e}){return e&&typeof document<"u"?document.getElementById(e):null}function oe(e,t){const{anchorEl:n,_childPopupState:o}=t;return Te(n,e)||Te(Zt(t),e)||o!=null&&oe(e,o)}function Te(e,t){if(!e)return!1;for(;t;){if(t===e)return!0;t=t.parentElement}return!1}function en(e,t){for(let n in t)if(Object.prototype.hasOwnProperty.call(e,n)&&e[n]!==t[n])return!0;return!1}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"anchorRef",{enumerable:!0,get:function(){return o.anchorRef}}),Object.defineProperty(e,"bindContextMenu",{enumerable:!0,get:function(){return o.bindContextMenu}}),Object.defineProperty(e,"bindDialog",{enumerable:!0,get:function(){return o.bindDialog}}),Object.defineProperty(e,"bindDoubleClick",{enumerable:!0,get:function(){return o.bindDoubleClick}}),Object.defineProperty(e,"bindFocus",{enumerable:!0,get:function(){return o.bindFocus}}),Object.defineProperty(e,"bindHover",{enumerable:!0,get:function(){return o.bindHover}}),Object.defineProperty(e,"bindMenu",{enumerable:!0,get:function(){return o.bindMenu}}),Object.defineProperty(e,"bindPopover",{enumerable:!0,get:function(){return o.bindPopover}}),Object.defineProperty(e,"bindPopper",{enumerable:!0,get:function(){return o.bindPopper}}),Object.defineProperty(e,"bindToggle",{enumerable:!0,get:function(){return o.bindToggle}}),Object.defineProperty(e,"bindTrigger",{enumerable:!0,get:function(){return o.bindTrigger}}),e.default=void 0;var t=a(h.exports),n=p(Re.exports),o=I;function p(r){return r&&r.__esModule?r:{default:r}}function s(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,f=new WeakMap;return(s=function(b){return b?f:u})(r)}function a(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var f=s(u);if(f&&f.has(r))return f.get(r);var b={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in r)if(m!=="default"&&Object.prototype.hasOwnProperty.call(r,m)){var P=d?Object.getOwnPropertyDescriptor(r,m):null;P&&(P.get||P.set)?Object.defineProperty(b,m,P):b[m]=r[m]}return b.default=r,f&&f.set(r,b),b}function i(r,u,f){return u in r?Object.defineProperty(r,u,{value:f,enumerable:!0,configurable:!0,writable:!0}):r[u]=f,r}class c extends t.Component{constructor(...u){super(...u),i(this,"state",o.initCoreState),i(this,"_mounted",!0),i(this,"_setStateIfMounted",f=>{this._mounted&&this.setState(f)})}componentWillUnmount(){this._mounted=!1}componentDidUpdate(u,f){const{popupId:b,disableAutoFocus:d}=this.props;if(!d&&typeof document=="object"&&b&&(b!==u.popupId||this.state.anchorEl!==f.anchorEl)){const m=document.getElementById(b);m&&m.focus()}}render(){const{children:u,popupId:f,variant:b,parentPopupState:d,disableAutoFocus:m}=this.props,P=(0,o.createPopupState)({state:this.state,setState:this._setStateIfMounted,popupId:f,variant:b,parentPopupState:d,disableAutoFocus:m}),T=u(P);return T==null?null:T}}e.default=c,i(c,"propTypes",{children:n.default.func.isRequired,popupId:n.default.string,variant:n.default.oneOf(["popover","popper"]).isRequired,parentPopupState:n.default.object,disableAutoFocus:n.default.bool})})(De);const ln=qe(De);export{on as B,un as M,ln as P,cn as a,an as b,De as e,sn as g,ye as l,Re as p,rn as u};
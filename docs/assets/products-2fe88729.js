import{C as ue,r as h,j as n,S as y,Q as Je,v as oe,i as D,P as m,B as K,e as N,L as Ye,m as fe,ag as Qe,M as eo,K as ne,s as I,ah as Ne,_ as c,g as te,a as se,o as _,N as oo,b as me,c as q,ai as no,f as B,h as re,aj as to,E as xe,F as Ie,a4 as so,ak as ro,O as Pe,al as ao,am as io,an as lo,ao as co,I as uo,D as po,l as ho,ap as fo,W as mo}from"./index-8b767e39.js";import{l as xo,L as go}from"./label-e5cb605b.js";import{b as Ce,G as je}from"./format-number-2b519c54.js";import{C as vo}from"./Card-b4e77582.js";import{M as bo}from"./Menu-4c225633.js";import{F as ee}from"./FormControlLabel-f643ccb1.js";import{S as yo,C as Co}from"./Checkbox-76d71913.js";import{C as jo}from"./Container-d6b7a394.js";import"./isMuiElement-fb06e941.js";const Ro={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Fo=Ro,So=["Nike Air Force 1 NDESTRUKT","Nike Space Hippie 04","Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear","Nike Blazer Low 77 Vintage","Nike ZoomX SuperRep Surge","Zoom Freak 2","Nike Air Max Zephyr","Jordan Delta","Air Jordan XXXV PF","Nike Waffle Racer Crater","Kyrie 7 EP Sisterhood","Nike Air Zoom BB NXT","Nike Air Force 1 07 LX","Nike Air Force 1 Shadow SE","Nike Air Zoom Tempo NEXT%","Nike DBreak-Type","Nike Air Max Up","Nike Air Max 270 React ENG","NikeCourt Royale","Nike Air Zoom Pegasus 37 Premium","Nike Air Zoom SuperRep","NikeCourt Royale","Nike React Art3mis","Nike React Infinity Run Flyknit A.I.R. Chaz Bear"],V=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"],wo=[...Array(24)].map((e,o)=>{const t=o+1;return{id:ue.string.uuid(),cover:`/assets/images/products/product_${t}.jpg`,name:So[o],price:ue.number.int({min:4,max:99,precision:.01}),priceSale:t%3?null:ue.number.int({min:19,max:29,precision:.01}),colors:t===1&&V.slice(0,2)||t===2&&V.slice(1,3)||t===3&&V.slice(2,4)||t===4&&V.slice(3,6)||t===23&&V.slice(4,6)||t===24&&V.slice(5,6)||V,status:xo.sample(["sale","new","",""])}}),Ae=h.forwardRef(({colors:e,selected:o,onSelectColor:t,limit:s="auto",sx:r,...u},f)=>{const d=typeof o=="string",a=h.useCallback(i=>{if(d)i!==o&&t(i);else{const v=o.includes(i)?o.filter(l=>l!==i):[...o,i];t(v)}},[t,o,d]);return n.jsx(y,{ref:f,direction:"row",display:"inline-flex",sx:{flexWrap:"wrap",...s!=="auto"&&{width:s*36,justifyContent:"flex-end"},...r},...u,children:e.map(i=>{const v=d?o===i:o.includes(i);return n.jsx(Je,{sx:{width:36,height:36,borderRadius:"50%"},onClick:()=>{a(i)},children:n.jsx(y,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:i,borderRadius:"50%",border:l=>`solid 1px ${oe(l.palette.grey[500],.16)}`,...v&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${oe(i,.48)}`,outline:`solid 2px ${oe(i,.08)}`,transition:l=>l.transitions.create("all",{duration:l.transitions.duration.shortest})}},children:n.jsx(D,{width:v?12:0,icon:"eva:checkmark-fill",sx:{color:l=>l.palette.getContrastText(i),transition:l=>l.transitions.create("all",{duration:l.transitions.duration.shortest})}})})},i)})})});Ae.propTypes={colors:m.oneOfType([m.string,m.arrayOf(m.string)]),limit:m.number,onSelectColor:m.func,selected:m.oneOfType([m.string,m.arrayOf(m.string)]),sx:m.object};const ko=Ae;function Oe({colors:e,limit:o=3,sx:t}){const s=e.slice(0,o),r=e.length-o;return n.jsxs(y,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:t,children:[s.map((u,f)=>n.jsx(K,{sx:{ml:-.75,width:16,height:16,bgcolor:u,borderRadius:"50%",border:d=>`solid 2px ${d.palette.background.paper}`,boxShadow:d=>`inset -1px 1px 2px ${oe(d.palette.common.black,.24)}`}},u+f)),e.length>o&&n.jsx(K,{component:"span",sx:{typography:"subtitle2"},children:`+${r}`})]})}Oe.propTypes={colors:m.arrayOf(m.string),limit:m.number,sx:m.object};function $e({product:e}){const o=n.jsx(go,{variant:"filled",color:e.status==="sale"&&"error"||"info",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:e.status}),t=n.jsx(K,{component:"img",alt:e.name,src:e.cover,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),s=n.jsxs(N,{variant:"subtitle1",children:[n.jsx(N,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:e.priceSale&&Ce(e.priceSale)})," ",Ce(e.price)]});return n.jsxs(vo,{children:[n.jsxs(K,{sx:{pt:"100%",position:"relative"},children:[e.status&&o,t]}),n.jsxs(y,{spacing:2,sx:{p:3},children:[n.jsx(Ye,{color:"inherit",underline:"hover",variant:"subtitle2",noWrap:!0,children:e.name}),n.jsxs(y,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[n.jsx(Oe,{colors:e.colors}),s]})]})]})}$e.propTypes={product:m.object};const No=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function Io(){const[e,o]=h.useState(null),t=r=>{o(r.currentTarget)},s=()=>{o(null)};return n.jsxs(n.Fragment,{children:[n.jsxs(fe,{disableRipple:!0,color:"inherit",onClick:t,endIcon:n.jsx(D,{icon:e?"eva:chevron-up-fill":"eva:chevron-down-fill"}),children:["Sort By: ",n.jsx(N,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:"Newest"})]}),n.jsx(bo,{open:!!e,anchorEl:e,onClose:s,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},slotProps:{paper:{sx:{[`& .${Qe.root}`]:{p:0}}}},children:No.map(r=>n.jsx(eo,{selected:r.value==="newest",onClick:s,children:r.label},r.value))})]})}const Po=ne(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Ao=ne(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Oo=I("span",{shouldForwardProp:Ne})({position:"relative",display:"flex"}),$o=I(Po)({transform:"scale(1)"}),Mo=I(Ao)(({theme:e,ownerState:o})=>c({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Me(e){const{checked:o=!1,classes:t={},fontSize:s}=e,r=c({},e,{checked:o});return n.jsxs(Oo,{className:t.root,ownerState:r,children:[n.jsx($o,{fontSize:s,className:t.background,ownerState:r}),n.jsx(Mo,{fontSize:s,className:t.dot,ownerState:r})]})}const zo=h.createContext(void 0),ze=zo;function Vo(){return h.useContext(ze)}function Bo(e){return se("MuiRadio",e)}const To=te("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Re=To,Eo=["checked","checkedIcon","color","icon","name","onChange","size","className"],Lo=e=>{const{classes:o,color:t,size:s}=e,r={root:["root",`color${_(t)}`,s!=="medium"&&`size${_(s)}`]};return c({},o,re(r,Bo,o))},Go=I(yo,{shouldForwardProp:e=>Ne(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.size!=="medium"&&o[`size${_(t.size)}`],o[`color${_(t.color)}`]]}})(({theme:e,ownerState:o})=>c({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:oo(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${Re.checked}`]:{color:(e.vars||e).palette[o.color].main}},{[`&.${Re.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Ho(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const Fe=n.jsx(Me,{checked:!0}),Se=n.jsx(Me,{}),Do=h.forwardRef(function(o,t){var s,r;const u=me({props:o,name:"MuiRadio"}),{checked:f,checkedIcon:d=Fe,color:a="primary",icon:i=Se,name:v,onChange:l,size:F="medium",className:S}=u,O=q(u,Eo),w=c({},u,{color:a,size:F}),j=Lo(w),R=Vo();let x=f;const b=no(l,R&&R.onChange);let C=v;return R&&(typeof x>"u"&&(x=Ho(R.value,u.value)),typeof C>"u"&&(C=R.name)),n.jsx(Go,c({type:"radio",icon:h.cloneElement(i,{fontSize:(s=Se.props.fontSize)!=null?s:F}),checkedIcon:h.cloneElement(d,{fontSize:(r=Fe.props.fontSize)!=null?r:F}),ownerState:w,classes:j,name:C,checked:x,onChange:b,ref:t,className:B(j.root,S)},O))}),de=Do,_o=ne(n.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Uo=ne(n.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function Wo(e){return se("MuiRating",e)}const Xo=te("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),Z=Xo,Zo=["value"],Ko=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function qo(e){const o=e.toString().split(".")[1];return o?o.length:0}function pe(e,o){if(e==null)return e;const t=Math.round(e/o)*o;return Number(t.toFixed(qo(o)))}const Jo=e=>{const{classes:o,size:t,readOnly:s,disabled:r,emptyValueFocused:u,focusVisible:f}=e,d={root:["root",`size${_(t)}`,r&&"disabled",f&&"focusVisible",s&&"readOnly"],label:["label","pristine"],labelEmptyValue:[u&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return re(d,Wo,o)},Yo=I("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${Z.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${_(t.size)}`],t.readOnly&&o.readOnly]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${Z.focusVisible} .${Z.iconActive}`]:{outline:"1px solid #999"},[`& .${Z.visuallyHidden}`]:Fo},o.size==="small"&&{fontSize:e.typography.pxToRem(18)},o.size==="large"&&{fontSize:e.typography.pxToRem(30)},o.readOnly&&{pointerEvents:"none"})),Ve=I("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},o)=>[o.label,e.emptyValueFocused&&o.labelEmptyValueActive]})(({ownerState:e})=>c({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Qo=I("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.icon,t.iconEmpty&&o.iconEmpty,t.iconFilled&&o.iconFilled,t.iconHover&&o.iconHover,t.iconFocus&&o.iconFocus,t.iconActive&&o.iconActive]}})(({theme:e,ownerState:o})=>c({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),en=I("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>to(e)&&e!=="iconActive",overridesResolver:(e,o)=>{const{iconActive:t}=e;return[o.decimal,t&&o.iconActive]}})(({iconActive:e})=>c({position:"relative"},e&&{transform:"scale(1.2)"}));function on(e){const o=q(e,Zo);return n.jsx("span",c({},o))}function we(e){const{classes:o,disabled:t,emptyIcon:s,focus:r,getLabelText:u,highlightSelectedOnly:f,hover:d,icon:a,IconContainerComponent:i,isActive:v,itemValue:l,labelProps:F,name:S,onBlur:O,onChange:w,onClick:j,onFocus:R,readOnly:x,ownerState:b,ratingValue:C,ratingValueRounded:ae}=e,T=f?l===C:l<=C,J=l<=d,E=l<=r,ie=l===ae,U=xe(),M=n.jsx(Qo,{as:i,value:l,className:B(o.icon,T?o.iconFilled:o.iconEmpty,J&&o.iconHover,E&&o.iconFocus,v&&o.iconActive),ownerState:c({},b,{iconEmpty:!T,iconFilled:T,iconHover:J,iconFocus:E,iconActive:v}),children:s&&!T?s:a});return x?n.jsx("span",c({},F,{children:M})):n.jsxs(h.Fragment,{children:[n.jsxs(Ve,c({ownerState:c({},b,{emptyValueFocused:void 0}),htmlFor:U},F,{children:[M,n.jsx("span",{className:o.visuallyHidden,children:u(l)})]})),n.jsx("input",{className:o.visuallyHidden,onFocus:R,onBlur:O,onChange:w,onClick:j,disabled:t,value:l,id:U,type:"radio",name:S,checked:ie})]})}const nn=n.jsx(_o,{fontSize:"inherit"}),tn=n.jsx(Uo,{fontSize:"inherit"});function sn(e){return`${e} Star${e!==1?"s":""}`}const rn=h.forwardRef(function(o,t){const s=me({name:"MuiRating",props:o}),{className:r,defaultValue:u=null,disabled:f=!1,emptyIcon:d=tn,emptyLabelText:a="Empty",getLabelText:i=sn,highlightSelectedOnly:v=!1,icon:l=nn,IconContainerComponent:F=on,max:S=5,name:O,onChange:w,onChangeActive:j,onMouseLeave:R,onMouseMove:x,precision:b=1,readOnly:C=!1,size:ae="medium",value:T}=s,J=q(s,Ko),E=xe(O),[ie,U]=Ie({controlled:T,default:u,name:"Rating"}),M=pe(ie,b),Ee=so(),[{hover:P,focus:Y},W]=h.useState({hover:-1,focus:-1});let L=M;P!==-1&&(L=P),Y!==-1&&(L=Y);const{isFocusVisibleRef:ge,onBlur:Le,onFocus:Ge,ref:He}=ro(),[De,le]=h.useState(!1),ve=h.useRef(),_e=Pe(He,ve,t),Ue=p=>{x&&x(p);const g=ve.current,{right:k,left:Q,width:G}=g.getBoundingClientRect();let H;Ee?H=(k-p.clientX)/G:H=(p.clientX-Q)/G;let A=pe(S*H+b/2,b);A=ao(A,b,S),W(z=>z.hover===A&&z.focus===A?z:{hover:A,focus:A}),le(!1),j&&P!==A&&j(p,A)},We=p=>{R&&R(p);const g=-1;W({hover:g,focus:g}),j&&P!==g&&j(p,g)},be=p=>{let g=p.target.value===""?null:parseFloat(p.target.value);P!==-1&&(g=P),U(g),w&&w(p,g)},Xe=p=>{p.clientX===0&&p.clientY===0||(W({hover:-1,focus:-1}),U(null),w&&parseFloat(p.target.value)===M&&w(p,null))},Ze=p=>{Ge(p),ge.current===!0&&le(!0);const g=parseFloat(p.target.value);W(k=>({hover:k.hover,focus:g}))},Ke=p=>{if(P!==-1)return;Le(p),ge.current===!1&&le(!1);const g=-1;W(k=>({hover:k.hover,focus:g}))},[qe,ye]=h.useState(!1),X=c({},s,{defaultValue:u,disabled:f,emptyIcon:d,emptyLabelText:a,emptyValueFocused:qe,focusVisible:De,getLabelText:i,icon:l,IconContainerComponent:F,max:S,precision:b,readOnly:C,size:ae}),$=Jo(X);return n.jsxs(Yo,c({ref:_e,onMouseMove:Ue,onMouseLeave:We,className:B($.root,r,C&&"MuiRating-readOnly"),ownerState:X,role:C?"img":null,"aria-label":C?i(L):null},J,{children:[Array.from(new Array(S)).map((p,g)=>{const k=g+1,Q={classes:$,disabled:f,emptyIcon:d,focus:Y,getLabelText:i,highlightSelectedOnly:v,hover:P,icon:l,IconContainerComponent:F,name:E,onBlur:Ke,onChange:be,onClick:Xe,onFocus:Ze,ratingValue:L,ratingValueRounded:M,readOnly:C,ownerState:X},G=k===Math.ceil(L)&&(P!==-1||Y!==-1);if(b<1){const H=Array.from(new Array(1/b));return n.jsx(en,{className:B($.decimal,G&&$.iconActive),ownerState:X,iconActive:G,children:H.map((A,z)=>{const ce=pe(k-1+(z+1)*b,b);return n.jsx(we,c({},Q,{isActive:!1,itemValue:ce,labelProps:{style:H.length-1===z?{}:{width:ce===L?`${(z+1)*b*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),ce)})},k)}return n.jsx(we,c({},Q,{isActive:G,itemValue:k}),k)}),!C&&!f&&n.jsxs(Ve,{className:B($.label,$.labelEmptyValue),ownerState:X,children:[n.jsx("input",{className:$.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:M==null,onFocus:()=>ye(!0),onBlur:()=>ye(!1),onChange:be}),n.jsx("span",{className:$.visuallyHidden,children:a})]})]}))}),ke=rn;function an(e){return se("MuiFormGroup",e)}te("MuiFormGroup",["root","row","error"]);const ln=["className","row"],cn=e=>{const{classes:o,row:t,error:s}=e;return re({root:["root",t&&"row",s&&"error"]},an,o)},un=I("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.row&&o.row]}})(({ownerState:e})=>c({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),dn=h.forwardRef(function(o,t){const s=me({props:o,name:"MuiFormGroup"}),{className:r,row:u=!1}=s,f=q(s,ln),d=io(),a=lo({props:s,muiFormControl:d,states:["error"]}),i=c({},s,{row:u,error:a.error}),v=cn(i);return n.jsx(un,c({className:B(v.root,r),ownerState:i,ref:t},f))}),Be=dn;function pn(e){return se("MuiRadioGroup",e)}te("MuiRadioGroup",["root","row","error"]);const hn=["actions","children","className","defaultValue","name","onChange","value"],fn=e=>{const{classes:o,row:t,error:s}=e;return re({root:["root",t&&"row",s&&"error"]},pn,o)},mn=h.forwardRef(function(o,t){const{actions:s,children:r,className:u,defaultValue:f,name:d,onChange:a,value:i}=o,v=q(o,hn),l=h.useRef(null),F=fn(o),[S,O]=Ie({controlled:i,default:f,name:"RadioGroup"});h.useImperativeHandle(s,()=>({focus:()=>{let x=l.current.querySelector("input:not(:disabled):checked");x||(x=l.current.querySelector("input:not(:disabled)")),x&&x.focus()}}),[]);const w=Pe(t,l),j=xe(d),R=h.useMemo(()=>({name:j,onChange(x){O(x.target.value),a&&a(x,x.target.value)},value:S}),[j,a,O,S]);return n.jsx(ze.Provider,{value:R,children:n.jsx(Be,c({role:"radiogroup",ref:w,className:B(F.root,u)},v,{children:r}))})}),he=mn,xn=["Men","Women","Kids"],gn=["All","Shose","Apparel","Accessories"],vn=["up4Star","up3Star","up2Star","up1Star"],bn=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],yn=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function Te({openFilter:e,onOpenFilter:o,onCloseFilter:t}){const s=n.jsxs(y,{spacing:1,children:[n.jsx(N,{variant:"subtitle2",children:"Gender"}),n.jsx(Be,{children:xn.map(a=>n.jsx(ee,{control:n.jsx(Co,{}),label:a},a))})]}),r=n.jsxs(y,{spacing:1,children:[n.jsx(N,{variant:"subtitle2",children:"Category"}),n.jsx(he,{children:gn.map(a=>n.jsx(ee,{value:a,control:n.jsx(de,{}),label:a},a))})]}),u=n.jsxs(y,{spacing:1,children:[n.jsx(N,{variant:"subtitle2",children:"Colors"}),n.jsx(ko,{name:"colors",selected:[],colors:yn,onSelectColor:a=>[].includes(a),sx:{maxWidth:38*4}})]}),f=n.jsxs(y,{spacing:1,children:[n.jsx(N,{variant:"subtitle2",children:"Price"}),n.jsx(he,{children:bn.map(a=>n.jsx(ee,{value:a.value,control:n.jsx(de,{}),label:a.label},a.value))})]}),d=n.jsxs(y,{spacing:1,children:[n.jsx(N,{variant:"subtitle2",children:"Rating"}),n.jsx(he,{children:vn.map((a,i)=>n.jsx(ee,{value:a,control:n.jsx(de,{disableRipple:!0,color:"default",icon:n.jsx(ke,{readOnly:!0,value:4-i}),checkedIcon:n.jsx(ke,{readOnly:!0,value:4-i}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:{my:.5,borderRadius:1,"&:hover":{opacity:.48}}},a))})]});return n.jsxs(n.Fragment,{children:[n.jsx(fe,{disableRipple:!0,color:"inherit",endIcon:n.jsx(D,{icon:"ic:round-filter-list"}),onClick:o,children:"Filters "}),n.jsxs(co,{anchor:"right",open:e,onClose:t,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[n.jsxs(y,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[n.jsx(N,{variant:"h6",sx:{ml:1},children:"Filters"}),n.jsx(uo,{onClick:t,children:n.jsx(D,{icon:"eva:close-fill"})})]}),n.jsx(po,{}),n.jsx(ho,{children:n.jsxs(y,{spacing:3,sx:{p:3},children:[s,r,u,f,d]})}),n.jsx(K,{sx:{p:3},children:n.jsx(fe,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",startIcon:n.jsx(D,{icon:"ic:round-clear-all"}),children:"Clear All"})})]})]})}Te.propTypes={openFilter:m.bool,onOpenFilter:m.func,onCloseFilter:m.func};const Cn=I("div")(({theme:e})=>({zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:e.spacing(16),height:e.spacing(5),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(1.25),boxShadow:e.customShadows.z20,color:e.palette.text.primary,backgroundColor:e.palette.background.paper,borderTopLeftRadius:Number(e.shape.borderRadius)*2,borderBottomLeftRadius:Number(e.shape.borderRadius)*2,transition:e.transitions.create("opacity"),"&:hover":{opacity:.72}}));function jn(){return n.jsx(Cn,{children:n.jsx(fo,{showZero:!0,badgeContent:0,color:"error",max:99,children:n.jsx(D,{icon:"eva:shopping-cart-fill",width:24,height:24})})})}function Rn(){const[e,o]=h.useState(!1),t=()=>{o(!0)},s=()=>{o(!1)};return n.jsxs(jo,{children:[n.jsx(N,{variant:"h4",sx:{mb:5},children:"Products"}),n.jsx(y,{direction:"row",alignItems:"center",flexWrap:"wrap-reverse",justifyContent:"flex-end",sx:{mb:5},children:n.jsxs(y,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[n.jsx(Te,{openFilter:e,onOpenFilter:t,onCloseFilter:s}),n.jsx(Io,{})]})}),n.jsx(je,{container:!0,spacing:3,children:wo.map(r=>n.jsx(je,{xs:12,sm:6,md:3,children:n.jsx($e,{product:r})},r.id))}),n.jsx(jn,{})]})}function $n(){return n.jsxs(n.Fragment,{children:[n.jsx(mo,{children:n.jsx("title",{children:" Products | Minimal UI "})}),n.jsx(Rn,{})]})}export{$n as default};

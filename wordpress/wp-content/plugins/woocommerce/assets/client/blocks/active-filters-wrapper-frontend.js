<<<<<<< HEAD
(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[6863],{9281:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var l=r(9196);r(1753);const n=({children:e})=>(0,l.createElement)("div",{className:"wc-block-filter-title-placeholder"},e)},1720:(e,t,r)=>{"use strict";r.d(t,{K:()=>c});var l=r(4801),n=r(9818),s=r(9307),i=r(9530),a=r(5280),o=r(6946);const c=e=>{const{namespace:t,resourceName:r,resourceValues:c=[],query:u={},shouldSelect:m=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const d=(0,s.useRef)({results:[],isLoading:!0}),y=(0,i.s)(u),p=(0,i.s)(c),f=(0,a._)(),g=(0,n.useSelect)((e=>{if(!m)return null;const n=e(l.COLLECTIONS_STORE_KEY),s=[t,r,y,p],i=n.getCollectionError(...s);if(i){if(!(0,o.isError)(i))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(i)}return{results:n.getCollection(...s),isLoading:!n.hasFinishedResolution("getCollection",s)}}),[t,r,p,y,m]);return null!==g&&(d.current=g),d.current}},2785:(e,t,r)=>{"use strict";r.d(t,{$p:()=>a,kX:()=>o});var l=r(4801),n=r(9818),s=r(9307),i=(r(9127),r(7218));const a=e=>{const t=(0,i.s)();e=e||t;const r=(0,n.useSelect)((t=>t(l.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:a}=(0,n.useDispatch)(l.QUERY_STATE_STORE_KEY);return[r,(0,s.useCallback)((t=>{a(e,t)}),[e,a])]},o=(e,t,r)=>{const a=(0,i.s)();r=r||a;const o=(0,n.useSelect)((n=>n(l.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:c}=(0,n.useDispatch)(l.QUERY_STATE_STORE_KEY);return[o,(0,s.useCallback)((t=>{c(r,e,t)}),[r,e,c])]}},7218:(e,t,r)=>{"use strict";r.d(t,{s:()=>s});var l=r(9307);const n=(0,l.createContext)("page"),s=()=>(0,l.useContext)(n);n.Provider},9530:(e,t,r)=>{"use strict";r.d(t,{s:()=>i});var l=r(9307),n=r(9127),s=r.n(n);function i(e){const t=(0,l.useRef)(e);return s()(e,t.current)||(t.current=e),t.current}},947:(e,t,r)=>{"use strict";r.d(t,{F:()=>o});var l=r(7608),n=r.n(l),s=r(6946),i=r(3392),a=r(172);const o=e=>{const t=(e=>{const t=(0,s.isObject)(e)?e:{style:{}};let r=t.style;return(0,s.isString)(r)&&(r=JSON.parse(r)||{}),(0,s.isObject)(r)||(r={}),{...t,style:r}})(e),r=(0,a.vc)(t),l=(0,a.l8)(t),o=(0,a.su)(t),c=(0,i.f)(t);return{className:n()(c.className,r.className,l.className,o.className),style:{...c.style,...r.style,...l.style,...o.style}}}},5280:(e,t,r)=>{"use strict";r.d(t,{_:()=>n});var l=r(9307);const n=()=>{const[,e]=(0,l.useState)();return(0,l.useCallback)((t=>{e((()=>{throw t}))}),[])}},3392:(e,t,r)=>{"use strict";r.d(t,{f:()=>n});var l=r(6946);const n=e=>{const t=(0,l.isObject)(e.style.typography)?e.style.typography:{},r=(0,l.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:r,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},172:(e,t,r)=>{"use strict";r.d(t,{l8:()=>m,su:()=>d,vc:()=>u});var l=r(7608),n=r.n(l),s=r(7427),i=r(2289),a=r(6946);function o(e={}){const t={};return(0,i.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function c(e,t){return e&&t?`has-${(0,s.o)(t)}-${e}`:""}function u(e){var t,r,l,s,i,u,m;const{backgroundColor:d,textColor:y,gradient:p,style:f}=e,g=c("background-color",d),b=c("color",y),_=function(e){if(e)return`has-${e}-gradient-background`}(p),h=_||(null==f||null===(t=f.color)||void 0===t?void 0:t.gradient);return{className:n()(b,_,{[g]:!h&&!!g,"has-text-color":y||(null==f||null===(r=f.color)||void 0===r?void 0:r.text),"has-background":d||(null==f||null===(l=f.color)||void 0===l?void 0:l.background)||p||(null==f||null===(s=f.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,a.isObject)(null==f||null===(i=f.elements)||void 0===i?void 0:i.link)?null==f||null===(u=f.elements)||void 0===u||null===(m=u.link)||void 0===m?void 0:m.color:void 0}),style:o({color:(null==f?void 0:f.color)||{}})}}function m(e){var t;const r=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:r,style:l}=e,s=r?c("border-color",r):"";return n()({"has-border-color":!!r||!(null==l||null===(t=l.border)||void 0===t||!t.color),[s]:!!s})}(e),style:o({border:r})}}function d(e){var t;return{className:void 0,style:o({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},4740:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var l=r(9196),n=r(7608),s=r.n(n),i=r(947),a=r(6946),o=r(5736),c=r(2785),u=r(4617),m=r(9307),d=r(711),y=r(4534),p=r(9281);r(7924);var f=r(9212),g=r(4293),b=r(6483),_=r(2911),h=r(6860);const v=JSON.parse('{"Y4":{"P":{"Z":"list"},"D":{"Z":3}}}'),S=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?(0,o.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,o.__)("Between %1$s and %2$s","woocommerce"),(0,g.formatPrice)(e),(0,g.formatPrice)(t)):Number.isFinite(e)?(0,o.sprintf)(/* translators: %s min price */ /* translators: %s min price */
(0,o.__)("From %s","woocommerce"),(0,g.formatPrice)(e)):(0,o.sprintf)(/* translators: %s max price */ /* translators: %s max price */
(0,o.__)("Up to %s","woocommerce"),(0,g.formatPrice)(t)),w=({type:e,name:t,prefix:r="",removeCallback:n=(()=>null),showLabel:s=!0,displayStyle:i})=>{const a=r?(0,l.createElement)(l.Fragment,null,r," ",t):t,c=(0,o.sprintf)(/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */ /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
(0,o.__)("Remove %s filter","woocommerce"),t);return(0,l.createElement)("li",{className:"wc-block-active-filters__list-item",key:e+":"+t},s&&(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},e+": "),"chips"===i?(0,l.createElement)(d.RemovableChip,{element:"span",text:a,onRemove:n,radius:"large",ariaLabel:c}):(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-name"},(0,l.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:n},(0,l.createElement)(_.Z,{className:"wc-block-components-chip__remove-icon",icon:h.Z,size:16}),(0,l.createElement)(d.Label,{screenReaderLabel:c})),a))},k=(...e)=>{if(!window)return;const t=window.location.href,r=(0,b.getQueryArgs)(t),l=(0,b.removeQueryArgs)(t,...Object.keys(r));e.forEach((e=>{if("string"==typeof e)return delete r[e];if("object"==typeof e){const t=Object.keys(e)[0],l=r[t].toString().split(",");r[t]=l.filter((r=>r!==e[t])).join(",")}}));const n=Object.fromEntries(Object.entries(r).filter((([,e])=>e))),s=(0,b.addQueryArgs)(l,n);(0,y.X7)(s)},E=["min_price","max_price","rating_filter","filter_","query_type_"],N=e=>{let t=!1;for(let r=0;E.length>r;r++){const l=E[r];if(l===e.substring(0,l.length)){t=!0;break}}return t};var C=r(1720),A=r(2629),F=r(5833);const O=({attributeObject:e,slugs:t=[],operator:r="in",displayStyle:n,isLoadingCallback:s})=>{const{results:i,isLoading:d}=(0,C.K)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[e.id]}),[y,p]=(0,c.kX)("attributes",[]);if((0,m.useEffect)((()=>{s(d)}),[d,s]),!Array.isArray(i)||!(0,a.isAttributeTermCollection)(i)||!(0,a.isAttributeQueryCollection)(y))return null;const f=e.label,g=(0,u.getSettingWithCoercion)("isRenderingPhpTemplate",!1,a.isBoolean);return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},f,":"),(0,l.createElement)("ul",null,t.map(((t,s)=>{const a=i.find((e=>e.slug===t));if(!a)return null;let c="";return s>0&&"and"===r&&(c=(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},(0,o.__)("All","woocommerce"))),w({type:f,name:(0,A.decodeEntities)(a.name||t),prefix:c,isLoading:d,removeCallback:()=>{const r=y.find((({attribute:t})=>t===`pa_${e.name}`));1===(null==r?void 0:r.slug.length)?k(`query_type_${e.name}`,`filter_${e.name}`):k({[`filter_${e.name}`]:t}),g||(0,F.o)(y,p,e,t)},showLabel:!1,displayStyle:n})}))))},R=({displayStyle:e,isLoading:t})=>t?(0,l.createElement)(l.Fragment,null,[...Array("list"===e?2:3)].map(((t,r)=>(0,l.createElement)("li",{className:"list"===e?"show-loading-state-list":"show-loading-state-chips",key:r},(0,l.createElement)("span",{className:"show-loading-state__inner"}))))):null;var x=r(9389);const L=({attributes:e,isEditor:t=!1})=>{const r=(0,x.Ah)(),n=function(){const e=(0,m.useRef)(!1);return(0,m.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,m.useCallback)((()=>e.current),[])}()(),i=(0,u.getSettingWithCoercion)("isRenderingPhpTemplate",!1,a.isBoolean),[g,_]=(0,m.useState)(!0),h=(()=>{if(!window)return!1;const e=window.location.href,t=(0,b.getQueryArgs)(e),r=Object.keys(t);let l=!1;for(let e=0;r.length>e;e++){const t=r[e];if(N(t)){l=!0;break}}return l})()&&!t&&g,[v,E]=(0,c.kX)("attributes",[]),[C,A]=(0,c.kX)("stock_status",[]),[F,L]=(0,c.kX)("min_price"),[Q,T]=(0,c.kX)("max_price"),[j,P]=(0,c.kX)("rating"),$=(0,u.getSetting)("stockStatusOptions",[]),Y=(0,u.getSetting)("attributes",[]),X=(0,m.useMemo)((()=>{if(h||0===C.length||!(0,a.isStockStatusQueryCollection)(C)||!(0,a.isStockStatusOptions)($))return null;const t=(0,o.__)("Stock Status","woocommerce");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t,":"),(0,l.createElement)("ul",null,C.map((r=>w({type:t,name:$[r],removeCallback:()=>{if(k({filter_stock_status:r}),!i){const e=C.filter((e=>e!==r));A(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[h,$,C,A,e.displayStyle,i]),z=(0,m.useMemo)((()=>h||!Number.isFinite(F)&&!Number.isFinite(Q)?null:w({type:(0,o.__)("Price","woocommerce"),name:S(F,Q),removeCallback:()=>{k("max_price","min_price"),i||(L(void 0),T(void 0))},displayStyle:e.displayStyle})),[h,F,Q,e.displayStyle,L,T,i]),B=(0,m.useMemo)((()=>!(0,a.isAttributeQueryCollection)(v)&&n||!v.length&&!(e=>{if(!window)return!1;const t=e.map((e=>`filter_${e.attribute_name}`)),r=window.location.href,l=(0,b.getQueryArgs)(r),n=Object.keys(l);let s=!1;for(let e=0;n.length>e;e++){const r=n[e];if(t.includes(r)){s=!0;break}}return s})(Y)?(g&&_(!1),null):v.map((t=>{const r=(0,f.I3)(t.attribute);return r?(0,l.createElement)(O,{attributeObject:r,displayStyle:e.displayStyle,slugs:t.slug,key:t.attribute,operator:t.operator,isLoadingCallback:_}):(g&&_(!1),null)}))),[v,n,Y,g,e.displayStyle]);(0,m.useEffect)((()=>{var e;if(!i)return;if(j.length&&j.length>0)return;const t=null===(e=(0,y.re)("rating_filter"))||void 0===e?void 0:e.toString();t&&P(t.split(","))}),[i,j,P]);const D=(0,m.useMemo)((()=>{if(h||0===j.length||!(0,a.isRatingQueryCollection)(j))return null;const t=(0,o.__)("Rating","woocommerce");return(0,l.createElement)("li",null,(0,l.createElement)("span",{className:"wc-block-active-filters__list-item-type"},t,":"),(0,l.createElement)("ul",null,j.map((r=>w({type:t,name:(0,o.sprintf)(/* translators: %s is referring to the average rating value */ /* translators: %s is referring to the average rating value */
(0,o.__)("Rated %s out of 5","woocommerce"),r),removeCallback:()=>{if(k({rating_filter:r}),!i){const e=j.filter((e=>e!==r));P(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[h,j,P,e.displayStyle,i]);if(!h&&!(v.length>0||C.length>0||j.length>0||Number.isFinite(F)||Number.isFinite(Q))&&!t)return r(!1),null;const K=`h${e.headingLevel}`,W=(0,l.createElement)(K,{className:"wc-block-active-filters__title"},e.heading),Z=h?(0,l.createElement)(p.Z,null,W):W;if(!(0,u.getSettingWithCoercion)("hasFilterableProducts",!1,a.isBoolean))return r(!1),null;r(!0);const U=s()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===e.displayStyle,"wc-block-active-filters--loading":h});return(0,l.createElement)(l.Fragment,null,!t&&e.heading&&Z,(0,l.createElement)("div",{className:"wc-block-active-filters"},(0,l.createElement)("ul",{className:U},t?(0,l.createElement)(l.Fragment,null,w({type:(0,o.__)("Size","woocommerce"),name:(0,o.__)("Small","woocommerce"),displayStyle:e.displayStyle}),w({type:(0,o.__)("Color","woocommerce"),name:(0,o.__)("Blue","woocommerce"),displayStyle:e.displayStyle})):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(R,{isLoading:h,displayStyle:e.displayStyle}),z,X,B,D)),h?(0,l.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):(0,l.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=(0,b.getQueryArgs)(e),r=(0,b.removeQueryArgs)(e,...Object.keys(t)),l=Object.fromEntries(Object.keys(t).filter((e=>!N(e))).map((e=>[e,t[e]]))),n=(0,b.addQueryArgs)(r,l);(0,y.X7)(n)})(),i||(L(void 0),T(void 0),E([]),A([]),P([]))}},(0,l.createElement)(d.Label,{label:(0,o.__)("Clear All","woocommerce"),screenReaderLabel:(0,o.__)("Clear All Filters","woocommerce")}))))},Q=e=>{const t=(0,i.F)(e),r=(n=e,{heading:(0,a.isString)(null==n?void 0:n.heading)?n.heading:"",headingLevel:(0,a.isString)(null==n?void 0:n.headingLevel)&&parseInt(n.headingLevel,10)||v.Y4.D.Z,displayStyle:(0,a.isString)(null==n?void 0:n.displayStyle)&&n.displayStyle||v.Y4.P.Z});var n;return(0,l.createElement)("div",{className:s()((0,a.isString)(e.className)?e.className:"",t.className),style:t.style},(0,l.createElement)(L,{isEditor:!1,attributes:r}))}},5833:(e,t,r)=>{"use strict";r.d(t,{e:()=>s,o:()=>n});var l=r(4167);const n=(e=[],t,r,n="")=>{const s=e.filter((e=>e.attribute===r.taxonomy)),i=s.length?s[0]:null;if(!(i&&i.slug&&Array.isArray(i.slug)&&i.slug.includes(n)))return;const a=i.slug.filter((e=>e!==n)),o=e.filter((e=>e.attribute!==r.taxonomy));a.length>0&&(i.slug=a.sort(),o.push(i)),t((0,l.DY)(o).asc("attribute"))},s=(e=[],t,r,n=[],s="in")=>{if(!r||!r.taxonomy)return[];const i=e.filter((e=>e.attribute!==r.taxonomy));return 0===n.length?t(i):(i.push({attribute:r.taxonomy,operator:s,slug:n.map((({slug:e})=>e)).sort()}),t((0,l.DY)(i).asc("attribute"))),i}},9212:(e,t,r)=>{"use strict";r.d(t,{I3:()=>i,it:()=>s});var l=r(4617);r(6946),r(9818);const n=(0,l.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(l=t)&&l.attribute_name?{id:parseInt(l.attribute_id,10),name:l.attribute_name,taxonomy:"pa_"+l.attribute_name,label:l.attribute_label}:null;var l;return r&&r.id&&e.push(r),e}),[]),s=e=>{if(e)return n.find((t=>t.id===e))},i=e=>{if(e)return n.find((t=>t.taxonomy===e))}},4534:(e,t,r)=>{"use strict";r.d(t,{H9:()=>m,X7:()=>u,re:()=>c,w8:()=>o,zv:()=>a});var l=r(6483),n=r(4617),s=r(6946);const i=(0,n.getSettingWithCoercion)("isRenderingPhpTemplate",!1,s.isBoolean),a="query_type_",o="filter_";function c(e){return window?(0,l.getQueryArg)(window.location.href,e):null}function u(e){if(i){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,r)=>{r.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(r)})),window.location.href=t.href}else window.history.replaceState({},"",e)}const m=e=>{const t=(0,l.getQueryArgs)(e);return(0,l.addQueryArgs)(e,t)}},1753:()=>{},7924:()=>{}}]);
=======
(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[6863],{2911:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(9307);const o=(0,n.forwardRef)((function({icon:e,size:t=24,...r},o){return(0,n.cloneElement)(e,{width:t,height:t,...r,ref:o})}))},9281:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(9196);r(1753);const o=({children:e})=>(0,n.createElement)("div",{className:"wc-block-filter-title-placeholder"},e)},1720:(e,t,r)=>{"use strict";r.d(t,{K:()=>c});var n=r(4801),o=r(9818),l=r(9307),i=r(9530),s=r(5280),a=r(7700);const c=e=>{const{namespace:t,resourceName:r,resourceValues:c=[],query:u={},shouldSelect:m=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const f=(0,l.useRef)({results:[],isLoading:!0}),d=(0,i.s)(u),p=(0,i.s)(c),y=(0,s._)(),g=(0,o.useSelect)((e=>{if(!m)return null;const o=e(n.COLLECTIONS_STORE_KEY),l=[t,r,d,p],i=o.getCollectionError(...l);if(i){if(!(0,a.V)(i))throw new Error("TypeError: `error` object is not an instance of Error constructor");y(i)}return{results:o.getCollection(...l),isLoading:!o.hasFinishedResolution("getCollection",l)}}),[t,r,p,d,m]);return null!==g&&(f.current=g),f.current}},2785:(e,t,r)=>{"use strict";r.d(t,{$p:()=>s,kX:()=>a});var n=r(4801),o=r(9818),l=r(9307),i=(r(9127),r(7218));const s=e=>{const t=(0,i.s)();e=e||t;const r=(0,o.useSelect)((t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:s}=(0,o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[r,(0,l.useCallback)((t=>{s(e,t)}),[e,s])]},a=(e,t,r)=>{const s=(0,i.s)();r=r||s;const a=(0,o.useSelect)((o=>o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:c}=(0,o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[a,(0,l.useCallback)((t=>{c(r,e,t)}),[r,e,c])]}},7218:(e,t,r)=>{"use strict";r.d(t,{s:()=>l});var n=r(9307);const o=(0,n.createContext)("page"),l=()=>(0,n.useContext)(o);o.Provider},9530:(e,t,r)=>{"use strict";r.d(t,{s:()=>i});var n=r(9307),o=r(9127),l=r.n(o);function i(e){const t=(0,n.useRef)(e);return l()(e,t.current)||(t.current=e),t.current}},947:(e,t,r)=>{"use strict";r.d(t,{F:()=>c});var n=r(3849),o=r.n(n),l=r(7998),i=r(3243),s=r(3392),a=r(172);const c=e=>{const t=(e=>{const t=(0,l.Kn)(e)?e:{style:{}};let r=t.style;return(0,i.H)(r)&&(r=JSON.parse(r)||{}),(0,l.Kn)(r)||(r={}),{...t,style:r}})(e),r=(0,a.vc)(t),n=(0,a.l8)(t),c=(0,a.su)(t),u=(0,s.f)(t);return{className:o()(u.className,r.className,n.className,c.className),style:{...u.style,...r.style,...n.style,...c.style}}}},5280:(e,t,r)=>{"use strict";r.d(t,{_:()=>o});var n=r(9307);const o=()=>{const[,e]=(0,n.useState)();return(0,n.useCallback)((t=>{e((()=>{throw t}))}),[])}},3392:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var n=r(7998),o=r(3243);const l=e=>{const t=(0,n.Kn)(e.style.typography)?e.style.typography:{},r=(0,o.H)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:r,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},172:(e,t,r)=>{"use strict";r.d(t,{l8:()=>m,su:()=>f,vc:()=>u});var n=r(3849),o=r.n(n),l=r(7427),i=r(2289),s=r(7998);function a(e={}){const t={};return(0,i.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function c(e,t){return e&&t?`has-${(0,l.o)(t)}-${e}`:""}function u(e){var t,r,n,l,i,u,m;const{backgroundColor:f,textColor:d,gradient:p,style:y}=e,g=c("background-color",f),v=c("color",d),b=function(e){if(e)return`has-${e}-gradient-background`}(p),h=b||(null==y||null===(t=y.color)||void 0===t?void 0:t.gradient);return{className:o()(v,b,{[g]:!h&&!!g,"has-text-color":d||(null==y||null===(r=y.color)||void 0===r?void 0:r.text),"has-background":f||(null==y||null===(n=y.color)||void 0===n?void 0:n.background)||p||(null==y||null===(l=y.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,s.Kn)(null==y||null===(i=y.elements)||void 0===i?void 0:i.link)?null==y||null===(u=y.elements)||void 0===u||null===(m=u.link)||void 0===m?void 0:m.color:void 0}),style:a({color:(null==y?void 0:y.color)||{}})}}function m(e){var t;const r=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:r,style:n}=e,l=r?c("border-color",r):"";return o()({"has-border-color":!!r||!(null==n||null===(t=n.border)||void 0===t||!t.color),[l]:!!l})}(e),style:a({border:r})}}function f(e){var t;return{className:void 0,style:a({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},8845:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var n=r(9196),o=r(3849),l=r.n(o),i=r(947),s=r(3243),a=r(5736),c=r(2785),u=r(4617),m=r(9307),f=r(711),d=r(6508),p=r(7998),y=r(7519),g=r(4534),v=r(9281);r(7924);var b=r(9212),h=r(4293),_=r(6483),w=r(2911),E=r(444);const S=(0,n.createElement)(E.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(E.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),k=JSON.parse('{"Y4":{"P":{"Z":"list"},"D":{"Z":3}}}'),A=(e,t)=>Number.isFinite(e)&&Number.isFinite(t)?(0,a.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,a.__)("Between %1$s and %2$s","woocommerce"),(0,h.formatPrice)(e),(0,h.formatPrice)(t)):Number.isFinite(e)?(0,a.sprintf)(/* translators: %s min price */ /* translators: %s min price */
(0,a.__)("From %s","woocommerce"),(0,h.formatPrice)(e)):(0,a.sprintf)(/* translators: %s max price */ /* translators: %s max price */
(0,a.__)("Up to %s","woocommerce"),(0,h.formatPrice)(t)),N=({type:e,name:t,prefix:r="",removeCallback:o=(()=>null),showLabel:l=!0,displayStyle:i})=>{const s=r?(0,n.createElement)(n.Fragment,null,r," ",t):t,c=(0,a.sprintf)(/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */ /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
(0,a.__)("Remove %s filter","woocommerce"),t);return(0,n.createElement)("li",{className:"wc-block-active-filters__list-item",key:e+":"+t},l&&(0,n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},e+": "),"chips"===i?(0,n.createElement)(f.RemovableChip,{element:"span",text:s,onRemove:o,radius:"large",ariaLabel:c}):(0,n.createElement)("span",{className:"wc-block-active-filters__list-item-name"},(0,n.createElement)("button",{className:"wc-block-active-filters__list-item-remove",onClick:o},(0,n.createElement)(w.Z,{className:"wc-block-components-chip__remove-icon",icon:S,size:16}),(0,n.createElement)(f.Label,{screenReaderLabel:c})),s))},C=(...e)=>{if(!window)return;const t=window.location.href,r=(0,_.getQueryArgs)(t),n=(0,_.removeQueryArgs)(t,...Object.keys(r));e.forEach((e=>{if("string"==typeof e)return delete r[e];if("object"==typeof e){const t=Object.keys(e)[0],n=r[t].toString().split(",");r[t]=n.filter((r=>r!==e[t])).join(",")}}));const o=Object.fromEntries(Object.entries(r).filter((([,e])=>e))),l=(0,_.addQueryArgs)(n,o);(0,g.X7)(l)},x=["min_price","max_price","rating_filter","filter_","query_type_"],j=e=>{let t=!1;for(let r=0;x.length>r;r++){const n=x[r];if(n===e.substring(0,n.length)){t=!0;break}}return t};var O=r(1720),L=r(2629),R=r(5833);const $=({attributeObject:e,slugs:t=[],operator:r="in",displayStyle:o,isLoadingCallback:l})=>{const{results:i,isLoading:s}=(0,O.K)({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[e.id]}),[f,p]=(0,c.kX)("attributes",[]);if((0,m.useEffect)((()=>{l(s)}),[s,l]),!Array.isArray(i)||!(0,y.Gt)(i)||!(0,y.ov)(f))return null;const g=e.label,v=(0,u.getSettingWithCoercion)("isRenderingPhpTemplate",!1,d.j);return(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},g,":"),(0,n.createElement)("ul",null,t.map(((t,l)=>{const c=i.find((e=>e.slug===t));if(!c)return null;let u="";return l>0&&"and"===r&&(u=(0,n.createElement)("span",{className:"wc-block-active-filters__list-item-operator"},(0,a.__)("All","woocommerce"))),N({type:g,name:(0,L.decodeEntities)(c.name||t),prefix:u,isLoading:s,removeCallback:()=>{const r=f.find((({attribute:t})=>t===`pa_${e.name}`));1===(null==r?void 0:r.slug.length)?C(`query_type_${e.name}`,`filter_${e.name}`):C({[`filter_${e.name}`]:t}),v||(0,R.o)(f,p,e,t)},showLabel:!1,displayStyle:o})}))))},F=({displayStyle:e,isLoading:t})=>t?(0,n.createElement)(n.Fragment,null,[...Array("list"===e?2:3)].map(((t,r)=>(0,n.createElement)("li",{className:"list"===e?"show-loading-state-list":"show-loading-state-chips",key:r},(0,n.createElement)("span",{className:"show-loading-state__inner"}))))):null;var T=r(9389);const P=({attributes:e,isEditor:t=!1})=>{const r=(0,T.Ah)(),o=function(){const e=(0,m.useRef)(!1);return(0,m.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,m.useCallback)((()=>e.current),[])}()(),i=(0,u.getSettingWithCoercion)("isRenderingPhpTemplate",!1,d.j),[s,h]=(0,m.useState)(!0),w=(()=>{if(!window)return!1;const e=window.location.href,t=(0,_.getQueryArgs)(e),r=Object.keys(t);let n=!1;for(let e=0;r.length>e;e++){const t=r[e];if(j(t)){n=!0;break}}return n})()&&!t&&s,[E,S]=(0,c.kX)("attributes",[]),[k,x]=(0,c.kX)("stock_status",[]),[O,L]=(0,c.kX)("min_price"),[R,P]=(0,c.kX)("max_price"),[Q,Y]=(0,c.kX)("rating"),K=(0,u.getSetting)("stockStatusOptions",[]),z=(0,u.getSetting)("attributes",[]),Z=(0,m.useMemo)((()=>{if(w||0===k.length||(t=k,!Array.isArray(t)||!t.every((e=>["instock","outofstock","onbackorder"].includes(e))))||!(e=>(0,p.Kn)(e)&&Object.keys(e).every((e=>["instock","outofstock","onbackorder"].includes(e))))(K))return null;var t;const r=(0,a.__)("Stock Status","woocommerce");return(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),(0,n.createElement)("ul",null,k.map((t=>N({type:r,name:K[t],removeCallback:()=>{if(C({filter_stock_status:t}),!i){const e=k.filter((e=>e!==t));x(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[w,K,k,x,e.displayStyle,i]),B=(0,m.useMemo)((()=>w||!Number.isFinite(O)&&!Number.isFinite(R)?null:N({type:(0,a.__)("Price","woocommerce"),name:A(O,R),removeCallback:()=>{C("max_price","min_price"),i||(L(void 0),P(void 0))},displayStyle:e.displayStyle})),[w,O,R,e.displayStyle,L,P,i]),H=(0,m.useMemo)((()=>!(0,y.ov)(E)&&o||!E.length&&!(e=>{if(!window)return!1;const t=e.map((e=>`filter_${e.attribute_name}`)),r=window.location.href,n=(0,_.getQueryArgs)(r),o=Object.keys(n);let l=!1;for(let e=0;o.length>e;e++){const r=o[e];if(t.includes(r)){l=!0;break}}return l})(z)?(s&&h(!1),null):E.map((t=>{const r=(0,b.I3)(t.attribute);return r?(0,n.createElement)($,{attributeObject:r,displayStyle:e.displayStyle,slugs:t.slug,key:t.attribute,operator:t.operator,isLoadingCallback:h}):(s&&h(!1),null)}))),[E,o,z,s,e.displayStyle]);(0,m.useEffect)((()=>{var e;if(!i)return;if(Q.length&&Q.length>0)return;const t=null===(e=(0,g.re)("rating_filter"))||void 0===e?void 0:e.toString();t&&Y(t.split(","))}),[i,Q,Y]);const X=(0,m.useMemo)((()=>{if(w||0===Q.length||(t=Q,!Array.isArray(t)||!t.every((e=>["1","2","3","4","5"].includes(e)))))return null;var t;const r=(0,a.__)("Rating","woocommerce");return(0,n.createElement)("li",null,(0,n.createElement)("span",{className:"wc-block-active-filters__list-item-type"},r,":"),(0,n.createElement)("ul",null,Q.map((t=>N({type:r,name:(0,a.sprintf)(/* translators: %s is referring to the average rating value */ /* translators: %s is referring to the average rating value */
(0,a.__)("Rated %s out of 5","woocommerce"),t),removeCallback:()=>{if(C({rating_filter:t}),!i){const e=Q.filter((e=>e!==t));Y(e)}},showLabel:!1,displayStyle:e.displayStyle})))))}),[w,Q,Y,e.displayStyle,i]);if(!w&&!(E.length>0||k.length>0||Q.length>0||Number.isFinite(O)||Number.isFinite(R))&&!t)return r(!1),null;const D=`h${e.headingLevel}`,V=(0,n.createElement)(D,{className:"wc-block-active-filters__title"},e.heading),U=w?(0,n.createElement)(v.Z,null,V):V;if(!(0,u.getSettingWithCoercion)("hasFilterableProducts",!1,d.j))return r(!1),null;r(!0);const W=l()("wc-block-active-filters__list",{"wc-block-active-filters__list--chips":"chips"===e.displayStyle,"wc-block-active-filters--loading":w});return(0,n.createElement)(n.Fragment,null,!t&&e.heading&&U,(0,n.createElement)("div",{className:"wc-block-active-filters"},(0,n.createElement)("ul",{className:W},t?(0,n.createElement)(n.Fragment,null,N({type:(0,a.__)("Size","woocommerce"),name:(0,a.__)("Small","woocommerce"),displayStyle:e.displayStyle}),N({type:(0,a.__)("Color","woocommerce"),name:(0,a.__)("Blue","woocommerce"),displayStyle:e.displayStyle})):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(F,{isLoading:w,displayStyle:e.displayStyle}),B,Z,H,X)),w?(0,n.createElement)("span",{className:"wc-block-active-filters__clear-all-placeholder"}):(0,n.createElement)("button",{className:"wc-block-active-filters__clear-all",onClick:()=>{(()=>{if(!window)return;const e=window.location.href,t=(0,_.getQueryArgs)(e),r=(0,_.removeQueryArgs)(e,...Object.keys(t)),n=Object.fromEntries(Object.keys(t).filter((e=>!j(e))).map((e=>[e,t[e]]))),o=(0,_.addQueryArgs)(r,n);(0,g.X7)(o)})(),i||(L(void 0),P(void 0),S([]),x([]),Y([]))}},(0,n.createElement)(f.Label,{label:(0,a.__)("Clear All","woocommerce"),screenReaderLabel:(0,a.__)("Clear All Filters","woocommerce")}))))},Q=e=>{const t=(0,i.F)(e),r=(o=e,{heading:(0,s.H)(null==o?void 0:o.heading)?o.heading:"",headingLevel:(0,s.H)(null==o?void 0:o.headingLevel)&&parseInt(o.headingLevel,10)||k.Y4.D.Z,displayStyle:(0,s.H)(null==o?void 0:o.displayStyle)&&o.displayStyle||k.Y4.P.Z});var o;return(0,n.createElement)("div",{className:l()((0,s.H)(e.className)?e.className:"",t.className),style:t.style},(0,n.createElement)(P,{isEditor:!1,attributes:r}))}},7519:(e,t,r)=>{"use strict";r.d(t,{Gt:()=>l,ov:()=>s});var n=r(7998);const o=e=>(0,n.$n)(e,"count")&&(0,n.$n)(e,"description")&&(0,n.$n)(e,"id")&&(0,n.$n)(e,"name")&&(0,n.$n)(e,"parent")&&(0,n.$n)(e,"slug")&&"number"==typeof e.count&&"string"==typeof e.description&&"number"==typeof e.id&&"string"==typeof e.name&&"number"==typeof e.parent&&"string"==typeof e.slug,l=e=>Array.isArray(e)&&e.every(o),i=e=>(0,n.$n)(e,"attribute")&&(0,n.$n)(e,"operator")&&(0,n.$n)(e,"slug")&&"string"==typeof e.attribute&&"string"==typeof e.operator&&Array.isArray(e.slug)&&e.slug.every((e=>"string"==typeof e)),s=e=>Array.isArray(e)&&e.every(i)},6508:(e,t,r)=>{"use strict";r.d(t,{j:()=>n});const n=e=>"boolean"==typeof e},7700:(e,t,r)=>{"use strict";r.d(t,{V:()=>n});const n=e=>e instanceof Error},2893:(e,t,r)=>{"use strict";r.d(t,{F:()=>n});const n=e=>null===e},7998:(e,t,r)=>{"use strict";r.d(t,{$n:()=>l,Kn:()=>o});var n=r(2893);const o=e=>!(0,n.F)(e)&&e instanceof Object&&e.constructor===Object;function l(e,t){return o(e)&&t in e}},3243:(e,t,r)=>{"use strict";r.d(t,{H:()=>n});const n=e=>"string"==typeof e},5833:(e,t,r)=>{"use strict";r.d(t,{e:()=>l,o:()=>o});var n=r(4167);const o=(e=[],t,r,o="")=>{const l=e.filter((e=>e.attribute===r.taxonomy)),i=l.length?l[0]:null;if(!(i&&i.slug&&Array.isArray(i.slug)&&i.slug.includes(o)))return;const s=i.slug.filter((e=>e!==o)),a=e.filter((e=>e.attribute!==r.taxonomy));s.length>0&&(i.slug=s.sort(),a.push(i)),t((0,n.DY)(a).asc("attribute"))},l=(e=[],t,r,o=[],l="in")=>{if(!r||!r.taxonomy)return[];const i=e.filter((e=>e.attribute!==r.taxonomy));return 0===o.length?t(i):(i.push({attribute:r.taxonomy,operator:l,slug:o.map((({slug:e})=>e)).sort()}),t((0,n.DY)(i).asc("attribute"))),i}},9212:(e,t,r)=>{"use strict";r.d(t,{I3:()=>i,it:()=>l});var n=r(4617);r(9818);const o=(0,n.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return r&&r.id&&e.push(r),e}),[]),l=e=>{if(e)return o.find((t=>t.id===e))},i=e=>{if(e)return o.find((t=>t.taxonomy===e))}},4534:(e,t,r)=>{"use strict";r.d(t,{H9:()=>m,X7:()=>u,re:()=>c,w8:()=>a,zv:()=>s});var n=r(6483),o=r(4617),l=r(6508);const i=(0,o.getSettingWithCoercion)("isRenderingPhpTemplate",!1,l.j),s="query_type_",a="filter_";function c(e){return window?(0,n.getQueryArg)(window.location.href,e):null}function u(e){if(i){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,r)=>{r.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(r)})),window.location.href=t.href}else window.history.replaceState({},"",e)}const m=e=>{const t=(0,n.getQueryArgs)(e);return(0,n.addQueryArgs)(e,t)}},3849:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},112:(e,t,r)=>{"use strict";r.d(t,{$:()=>l});var n=r(3112),o=r(7090);function l(e,t){return void 0===t&&(t={}),(0,o.B)(e,(0,n.pi)({delimiter:"."},t))}},1753:()=>{},7924:()=>{},3569:(e,t,r)=>{"use strict";function n(e){return e.toLowerCase()}r.d(t,{U:()=>n})},7090:(e,t,r)=>{"use strict";r.d(t,{B:()=>i});var n=r(3569),o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function i(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,i=void 0===r?o:r,a=t.stripRegexp,c=void 0===a?l:a,u=t.transform,m=void 0===u?n.U:u,f=t.delimiter,d=void 0===f?" ":f,p=s(s(e,i,"$1\0$2"),c,"\0"),y=0,g=p.length;"\0"===p.charAt(y);)y++;for(;"\0"===p.charAt(g-1);)g--;return p.slice(y,g).split("\0").map(m).join(d)}function s(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}},7427:(e,t,r)=>{"use strict";r.d(t,{o:()=>l});var n=r(3112),o=r(112);function l(e,t){return void 0===t&&(t={}),(0,o.$)(e,(0,n.pi)({delimiter:"-"},t))}},4167:(e,t,r)=>{"use strict";r.d(t,{DY:()=>u});var n=function(e){return function(t,r,n){return e(t,r,n)*n}},o=function(e,t){if(e)throw Error("Invalid sort config: "+t)},l=function(e){var t=e||{},r=t.asc,l=t.desc,i=r?1:-1,s=r||l;return o(!s,"Expected `asc` or `desc` property"),o(r&&l,"Ambiguous object with `asc` and `desc` config properties"),{order:i,sortBy:s,comparer:e.comparer&&n(e.comparer)}};function i(e,t,r){if(void 0===e||!0===e)return function(e,n){return t(e,n,r)};if("string"==typeof e)return o(e.includes("."),"String syntax not allowed for nested properties."),function(n,o){return t(n[e],o[e],r)};if("function"==typeof e)return function(n,o){return t(e(n),e(o),r)};if(Array.isArray(e)){var n=function(e){return function t(r,n,o,i,s,a,c){var u,m;if("string"==typeof r)u=a[r],m=c[r];else{if("function"!=typeof r){var f=l(r);return t(f.sortBy,n,o,f.order,f.comparer||e,a,c)}u=r(a),m=r(c)}var d=s(u,m,i);return(0===d||null==u&&null==m)&&n.length>o?t(n[o],n,o+1,i,s,a,c):d}}(t);return function(o,l){return n(e[0],e,1,r,t,o,l)}}var s=l(e);return i(s.sortBy,s.comparer||t,s.order)}var s=function(e,t,r,n){return Array.isArray(t)?(Array.isArray(r)&&r.length<2&&(r=r[0]),t.sort(i(r,n,e))):t};function a(e){var t=n(e.comparer);return function(r){var n=Array.isArray(r)&&!e.inPlaceSorting?r.slice():r;return{asc:function(e){return s(1,n,e,t)},desc:function(e){return s(-1,n,e,t)},by:function(e){return s(1,n,e,t)}}}}var c=function(e,t,r){return null==e?r:null==t?-r:typeof e!=typeof t?typeof e<typeof t?-1:1:e<t?-1:e>t?1:0},u=a({comparer:c});a({comparer:c,inPlaceSorting:!0})},3112:(e,t,r)=>{"use strict";r.d(t,{pi:()=>n});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

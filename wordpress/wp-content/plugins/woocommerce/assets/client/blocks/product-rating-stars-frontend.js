<<<<<<< HEAD
(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[118],{1872:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Block:()=>g,default:()=>v});var o=n(9196),r=n(5736),s=n(7608),a=n.n(s),l=n(2864),c=n(947),i=n(721),u=n(6946);n(6006);const d=t=>({width:t/5*100+"%"}),m=({parentClassName:t})=>{const e=d(0);return(0,o.createElement)("div",{className:a()("wc-block-components-product-rating-stars__norating-container",`${t}-product-rating-stars__norating-container`)},(0,o.createElement)("div",{className:"wc-block-components-product-rating-stars__norating",role:"img"},(0,o.createElement)("span",{style:e})),(0,o.createElement)("span",null,(0,r.__)("No Reviews","woocommerce")))},p=t=>{const{rating:e,reviews:n,parentClassName:s}=t,l=d(e),c=(0,r.sprintf)(/* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
(0,r.__)("Rated %f out of 5","woocommerce"),e),i={__html:(0,r.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */ /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,r._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woocommerce"),(0,r.sprintf)('<strong class="rating">%f</strong>',e),(0,r.sprintf)('<span class="rating">%d</span>',n))};return(0,o.createElement)("div",{className:a()("wc-block-components-product-rating-stars__stars",`${s}__product-rating-stars__stars`),role:"img","aria-label":c},(0,o.createElement)("span",{style:l,dangerouslySetInnerHTML:i}))},g=t=>{const{textAlign:e,shouldDisplayMockedReviewsWhenProductHasNoReviews:n}=t,r=(0,c.F)(t),{parentClassName:s}=(0,l.useInnerBlockLayoutContext)(),{product:i}=(0,l.useProductDataContext)(),d=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(i),g=(t=>{const e=(0,u.isNumber)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(i),v=a()(r.className,"wc-block-components-product-rating-stars",{[`${s}__product-rating`]:s,[`has-text-align-${e}`]:e}),f=n?(0,o.createElement)(m,{parentClassName:s}):null,y=g?(0,o.createElement)(p,{rating:d,reviews:g,parentClassName:s}):f;return(0,o.createElement)("div",{className:v,style:r.style},(0,o.createElement)("div",{className:"wc-block-components-product-rating-stars__container"},y))},v=(0,i.withProductDataContext)(g)},947:(t,e,n)=>{"use strict";n.d(e,{F:()=>c});var o=n(7608),r=n.n(o),s=n(6946),a=n(3392),l=n(172);const c=t=>{const e=(t=>{const e=(0,s.isObject)(t)?t:{style:{}};let n=e.style;return(0,s.isString)(n)&&(n=JSON.parse(n)||{}),(0,s.isObject)(n)||(n={}),{...e,style:n}})(t),n=(0,l.vc)(e),o=(0,l.l8)(e),c=(0,l.su)(e),i=(0,a.f)(e);return{className:r()(i.className,n.className,o.className,c.className),style:{...i.style,...n.style,...o.style,...c.style}}}},3392:(t,e,n)=>{"use strict";n.d(e,{f:()=>r});var o=n(6946);const r=t=>{const e=(0,o.isObject)(t.style.typography)?t.style.typography:{},n=(0,o.isString)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},172:(t,e,n)=>{"use strict";n.d(e,{l8:()=>d,su:()=>m,vc:()=>u});var o=n(7608),r=n.n(o),s=n(7427),a=n(2289),l=n(6946);function c(t={}){const e={};return(0,a.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function u(t){var e,n,o,s,a,u,d;const{backgroundColor:m,textColor:p,gradient:g,style:v}=t,f=i("background-color",m),y=i("color",p),b=function(t){if(t)return`has-${t}-gradient-background`}(g),_=b||(null==v||null===(e=v.color)||void 0===e?void 0:e.gradient);return{className:r()(y,b,{[f]:!_&&!!f,"has-text-color":p||(null==v||null===(n=v.color)||void 0===n?void 0:n.text),"has-background":m||(null==v||null===(o=v.color)||void 0===o?void 0:o.background)||g||(null==v||null===(s=v.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,l.isObject)(null==v||null===(a=v.elements)||void 0===a?void 0:a.link)?null==v||null===(u=v.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:c({color:(null==v?void 0:v.color)||{}})}}function d(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:o}=t,s=n?i("border-color",n):"";return r()({"has-border-color":!!n||!(null==o||null===(e=o.border)||void 0===e||!e.color),[s]:!!s})}(t),style:c({border:n})}}function m(t){var e;return{className:void 0,style:c({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},6006:()=>{}}]);
=======
(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[118],{1872:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Block:()=>v,default:()=>f});var n=r(9196),o=r(5736),s=r(3849),a=r.n(s),c=r(2864),l=r(947),i=r(721),u=r(9060);r(6006);const d=t=>({width:t/5*100+"%"}),p=({parentClassName:t})=>{const e=d(0);return(0,n.createElement)("div",{className:a()("wc-block-components-product-rating-stars__norating-container",`${t}-product-rating-stars__norating-container`)},(0,n.createElement)("div",{className:"wc-block-components-product-rating-stars__norating",role:"img"},(0,n.createElement)("span",{style:e})),(0,n.createElement)("span",null,(0,o.__)("No Reviews","woocommerce")))},m=t=>{const{rating:e,reviews:r,parentClassName:s}=t,c=d(e),l=(0,o.sprintf)(/* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
(0,o.__)("Rated %f out of 5","woocommerce"),e),i={__html:(0,o.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */ /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,o._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",r,"woocommerce"),(0,o.sprintf)('<strong class="rating">%f</strong>',e),(0,o.sprintf)('<span class="rating">%d</span>',r))};return(0,n.createElement)("div",{className:a()("wc-block-components-product-rating-stars__stars",`${s}__product-rating-stars__stars`),role:"img","aria-label":l},(0,n.createElement)("span",{style:c,dangerouslySetInnerHTML:i}))},v=t=>{const{textAlign:e,shouldDisplayMockedReviewsWhenProductHasNoReviews:r}=t,o=(0,l.F)(t),{parentClassName:s}=(0,c.useInnerBlockLayoutContext)(),{product:i}=(0,c.useProductDataContext)(),d=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(i),v=(t=>{const e=(0,u.h)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(i),f=a()(o.className,"wc-block-components-product-rating-stars",{[`${s}__product-rating`]:s,[`has-text-align-${e}`]:e}),g=r?(0,n.createElement)(p,{parentClassName:s}):null,y=v?(0,n.createElement)(m,{rating:d,reviews:v,parentClassName:s}):g;return(0,n.createElement)("div",{className:f,style:o.style},(0,n.createElement)("div",{className:"wc-block-components-product-rating-stars__container"},y))},f=(0,i.withProductDataContext)(v)},947:(t,e,r)=>{"use strict";r.d(e,{F:()=>i});var n=r(3849),o=r.n(n),s=r(7998),a=r(3243),c=r(3392),l=r(172);const i=t=>{const e=(t=>{const e=(0,s.Kn)(t)?t:{style:{}};let r=e.style;return(0,a.H)(r)&&(r=JSON.parse(r)||{}),(0,s.Kn)(r)||(r={}),{...e,style:r}})(t),r=(0,l.vc)(e),n=(0,l.l8)(e),i=(0,l.su)(e),u=(0,c.f)(e);return{className:o()(u.className,r.className,n.className,i.className),style:{...u.style,...r.style,...n.style,...i.style}}}},3392:(t,e,r)=>{"use strict";r.d(e,{f:()=>s});var n=r(7998),o=r(3243);const s=t=>{const e=(0,n.Kn)(t.style.typography)?t.style.typography:{},r=(0,o.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:r,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},172:(t,e,r)=>{"use strict";r.d(e,{l8:()=>d,su:()=>p,vc:()=>u});var n=r(3849),o=r.n(n),s=r(7427),a=r(2289),c=r(7998);function l(t={}){const e={};return(0,a.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function u(t){var e,r,n,s,a,u,d;const{backgroundColor:p,textColor:m,gradient:v,style:f}=t,g=i("background-color",p),y=i("color",m),b=function(t){if(t)return`has-${t}-gradient-background`}(v),h=b||(null==f||null===(e=f.color)||void 0===e?void 0:e.gradient);return{className:o()(y,b,{[g]:!h&&!!g,"has-text-color":m||(null==f||null===(r=f.color)||void 0===r?void 0:r.text),"has-background":p||(null==f||null===(n=f.color)||void 0===n?void 0:n.background)||v||(null==f||null===(s=f.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,c.Kn)(null==f||null===(a=f.elements)||void 0===a?void 0:a.link)?null==f||null===(u=f.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:l({color:(null==f?void 0:f.color)||{}})}}function d(t){var e;const r=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:r,style:n}=t,s=r?i("border-color",r):"";return o()({"has-border-color":!!r||!(null==n||null===(e=n.border)||void 0===e||!e.color),[s]:!!s})}(t),style:l({border:r})}}function p(t){var e;return{className:void 0,style:l({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},2893:(t,e,r)=>{"use strict";r.d(e,{F:()=>n});const n=t=>null===t},9060:(t,e,r)=>{"use strict";r.d(e,{h:()=>n});const n=t=>"number"==typeof t},7998:(t,e,r)=>{"use strict";r.d(e,{$n:()=>s,Kn:()=>o});var n=r(2893);const o=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return o(t)&&e in t}},3243:(t,e,r)=>{"use strict";r.d(e,{H:()=>n});const n=t=>"string"==typeof t},112:(t,e,r)=>{"use strict";r.d(e,{$:()=>s});var n=r(3112),o=r(7090);function s(t,e){return void 0===e&&(e={}),(0,o.B)(t,(0,n.pi)({delimiter:"."},e))}},6006:()=>{},3569:(t,e,r)=>{"use strict";function n(t){return t.toLowerCase()}r.d(e,{U:()=>n})},7090:(t,e,r)=>{"use strict";r.d(e,{B:()=>a});var n=r(3569),o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function a(t,e){void 0===e&&(e={});for(var r=e.splitRegexp,a=void 0===r?o:r,l=e.stripRegexp,i=void 0===l?s:l,u=e.transform,d=void 0===u?n.U:u,p=e.delimiter,m=void 0===p?" ":p,v=c(c(t,a,"$1\0$2"),i,"\0"),f=0,g=v.length;"\0"===v.charAt(f);)f++;for(;"\0"===v.charAt(g-1);)g--;return v.slice(f,g).split("\0").map(d).join(m)}function c(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce((function(t,e){return t.replace(e,r)}),t)}},7427:(t,e,r)=>{"use strict";r.d(e,{o:()=>s});var n=r(3112),o=r(112);function s(t,e){return void 0===e&&(e={}),(0,o.$)(t,(0,n.pi)({delimiter:"-"},e))}},3112:(t,e,r)=>{"use strict";r.d(e,{pi:()=>n});var n=function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

<<<<<<< HEAD
"use strict";(self.webpackChunkwebpackWcBlocksStylingJsonp=self.webpackChunkwebpackWcBlocksStylingJsonp||[]).push([[8806],{19732:(e,s,t)=>{t.d(s,{P:()=>c});var n=t(94801),r=t(9818),i=t(71715),a=t(54738);const c=()=>{const{isCalculating:e,isBeforeProcessing:s,isProcessing:t,isAfterProcessing:c,isComplete:o,hasError:l}=(0,r.useSelect)((e=>{const s=e(n.CHECKOUT_STORE_KEY);return{isCalculating:s.isCalculating(),isBeforeProcessing:s.isBeforeProcessing(),isProcessing:s.isProcessing(),isAfterProcessing:s.isAfterProcessing(),isComplete:s.isComplete(),hasError:s.hasError()}})),{activePaymentMethod:d,isExpressPaymentMethodActive:m}=(0,r.useSelect)((e=>{const s=e(n.PAYMENT_STORE_KEY);return{activePaymentMethod:s.getActivePaymentMethod(),isExpressPaymentMethodActive:s.isExpressPaymentMethodActive()}})),{onSubmit:u}=(0,i.U)(),{paymentMethods:h={}}=(0,a.E)(),E=t||c||s,g=o&&!l;return{paymentMethodButtonLabel:(h[d]||{}).placeOrderButtonLabel,onSubmit:u,isCalculating:e,isDisabled:t||m,waitingForProcessing:E,waitingForRedirect:g}}},76212:(e,s,t)=>{t.r(s),t.d(s,{default:()=>E});var n=t(99196),r=t(65736),i=t(91),a=t.n(i),c=t(69307),o=t(40711),l=t(19732),d=t(94333),m=t(9818),u=t(94801),h=t(9907);const E=(0,d.withInstanceId)((({text:e,checkbox:s,instanceId:t,className:i})=>{const[d,E]=(0,c.useState)(!1),{isDisabled:g}=(0,l.P)(),p="terms-and-conditions-"+t,{setValidationErrors:P,clearValidationError:_}=(0,m.useDispatch)(u.VALIDATION_STORE_KEY),b=(0,m.useSelect)((e=>e(u.VALIDATION_STORE_KEY).getValidationError(p))),k=!(null==b||!b.message||null!=b&&b.hidden);return(0,c.useEffect)((()=>{if(s)return d?_(p):P({[p]:{message:(0,r.__)("Please read and accept the terms and conditions.","woocommerce"),hidden:!0}}),()=>{_(p)}}),[s,d,p,_,P]),(0,n.createElement)("div",{className:a()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":g},i)},s?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.CheckboxControl,{id:"terms-and-conditions",checked:d,onChange:()=>E((e=>!e)),hasError:k,disabled:g},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:e||h.S}}))):(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:e||h.w}}))}))}}]);
=======
"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[8806],{19732:(e,s,t)=>{t.d(s,{P:()=>c});var n=t(94801),r=t(9818),a=t(71715),i=t(54738);const c=()=>{const{isCalculating:e,isBeforeProcessing:s,isProcessing:t,isAfterProcessing:c,isComplete:o,hasError:l}=(0,r.useSelect)((e=>{const s=e(n.CHECKOUT_STORE_KEY);return{isCalculating:s.isCalculating(),isBeforeProcessing:s.isBeforeProcessing(),isProcessing:s.isProcessing(),isAfterProcessing:s.isAfterProcessing(),isComplete:s.isComplete(),hasError:s.hasError()}})),{activePaymentMethod:d,isExpressPaymentMethodActive:m}=(0,r.useSelect)((e=>{const s=e(n.PAYMENT_STORE_KEY);return{activePaymentMethod:s.getActivePaymentMethod(),isExpressPaymentMethodActive:s.isExpressPaymentMethodActive()}})),{onSubmit:u}=(0,a.U)(),{paymentMethods:h={}}=(0,i.E)(),E=t||c||s,g=o&&!l;return{paymentMethodButtonLabel:(h[d]||{}).placeOrderButtonLabel,onSubmit:u,isCalculating:e,isDisabled:t||m,waitingForProcessing:E,waitingForRedirect:g}}},76212:(e,s,t)=>{t.r(s),t.d(s,{default:()=>E});var n=t(99196),r=t(65736),a=t(80612),i=t.n(a),c=t(69307),o=t(40711),l=t(19732),d=t(94333),m=t(9818),u=t(94801),h=t(9907);const E=(0,d.withInstanceId)((({text:e,checkbox:s,instanceId:t,className:a})=>{const[d,E]=(0,c.useState)(!1),{isDisabled:g}=(0,l.P)(),p="terms-and-conditions-"+t,{setValidationErrors:P,clearValidationError:_}=(0,m.useDispatch)(u.VALIDATION_STORE_KEY),b=(0,m.useSelect)((e=>e(u.VALIDATION_STORE_KEY).getValidationError(p))),k=!(null==b||!b.message||null!=b&&b.hidden);return(0,c.useEffect)((()=>{if(s)return d?_(p):P({[p]:{message:(0,r.__)("Please read and accept the terms and conditions.","woocommerce"),hidden:!0}}),()=>{_(p)}}),[s,d,p,_,P]),(0,n.createElement)("div",{className:i()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":g},a)},s?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.CheckboxControl,{id:"terms-and-conditions",checked:d,onChange:()=>E((e=>!e)),hasError:k,disabled:g},(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:e||h.S}}))):(0,n.createElement)("span",{dangerouslySetInnerHTML:{__html:e||h.w}}))}))}}]);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

<<<<<<< HEAD
"use strict";(self.webpackChunkwebpackWcBlocksStylingJsonp=self.webpackChunkwebpackWcBlocksStylingJsonp||[]).push([[9644],{19732:(e,t,s)=>{s.d(t,{P:()=>r});var c=s(94801),n=s(9818),i=s(71715),o=s(54738);const r=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:s,isAfterProcessing:r,isComplete:a,hasError:l}=(0,n.useSelect)((e=>{const t=e(c.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}})),{activePaymentMethod:u,isExpressPaymentMethodActive:d}=(0,n.useSelect)((e=>{const t=e(c.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}})),{onSubmit:m}=(0,i.U)(),{paymentMethods:g={}}=(0,o.E)(),p=s||r||t,h=a&&!l;return{paymentMethodButtonLabel:(g[u]||{}).placeOrderButtonLabel,onSubmit:m,isCalculating:e,isDisabled:s||d,waitingForProcessing:p,waitingForRedirect:h}}},53810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var c=s(80721),n=s(99196),i=s(91),o=s.n(i),r=s(74617),a=s(93333),l=s(19732),u=s(71704),d=s(65458),m=s(12904);const g=({label:e,fullWidth:t=!1})=>{const{onSubmit:s,isCalculating:c,isDisabled:i,waitingForProcessing:r,waitingForRedirect:a}=(0,l.P)();return(0,n.createElement)(m.Z,{className:o()("wc-block-components-checkout-place-order-button",{"wc-block-components-checkout-place-order-button--full-width":t}),onClick:s,disabled:c||i||r||a,showSpinner:r},a?(0,n.createElement)(u.Z,{icon:d.Z}):e)};var p=s(28027),h=s(40711),b=s(33554),P=s(16344);s(6226);var E=s(41972);const k=(0,c.withFilteredAttributes)(E.Z)((({cartPageId:e,showReturnToCart:t,className:s,placeOrderButtonLabel:c})=>{const{paymentMethodButtonLabel:i}=(0,l.P)(),u=(0,b.applyCheckoutFilter)({filterName:"placeOrderButtonLabel",defaultValue:i||c||P.g});return(0,n.createElement)("div",{className:o()("wc-block-checkout__actions",s)},(0,n.createElement)(h.StoreNoticesContainer,{context:p.n7.CHECKOUT_ACTIONS}),(0,n.createElement)("div",{className:"wc-block-checkout__actions_row"},t&&(0,n.createElement)(a.Z,{link:(0,r.getSetting)("page-"+e,!1)}),(0,n.createElement)(g,{label:u,fullWidth:!t})))}))}}]);
=======
"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[9644],{19732:(e,t,s)=>{s.d(t,{P:()=>r});var c=s(94801),o=s(9818),n=s(71715),i=s(54738);const r=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:s,isAfterProcessing:r,isComplete:a,hasError:l}=(0,o.useSelect)((e=>{const t=e(c.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}})),{activePaymentMethod:u,isExpressPaymentMethodActive:d}=(0,o.useSelect)((e=>{const t=e(c.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}})),{onSubmit:m}=(0,n.U)(),{paymentMethods:p={}}=(0,i.E)(),g=s||r||t,h=a&&!l;return{paymentMethodButtonLabel:(p[u]||{}).placeOrderButtonLabel,onSubmit:m,isCalculating:e,isDisabled:s||d,waitingForProcessing:g,waitingForRedirect:h}}},53810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var c=s(80721),o=s(99196),n=s(80612),i=s.n(n),r=s(74617),a=s(61740),l=s(19732),u=s(71704),d=s(65458),m=s(12904);const p=({label:e,fullWidth:t=!1})=>{const{onSubmit:s,isCalculating:c,isDisabled:n,waitingForProcessing:r,waitingForRedirect:a}=(0,l.P)();return(0,o.createElement)(m.Z,{className:i()("wc-block-components-checkout-place-order-button",{"wc-block-components-checkout-place-order-button--full-width":t}),onClick:s,disabled:c||n||r||a,showSpinner:r},a?(0,o.createElement)(u.Z,{icon:d.Z}):e)};var g=s(28027),h=s(40711),b=s(33554),P=s(16344);s(35417);var E=s(41972);const k=(0,c.withFilteredAttributes)(E.Z)((({cartPageId:e,showReturnToCart:t,className:s,placeOrderButtonLabel:c})=>{const{paymentMethodButtonLabel:n}=(0,l.P)(),u=(0,b.applyCheckoutFilter)({filterName:"placeOrderButtonLabel",defaultValue:n||c||P.g});return(0,o.createElement)("div",{className:i()("wc-block-checkout__actions",s)},(0,o.createElement)(h.StoreNoticesContainer,{context:g.n7.CHECKOUT_ACTIONS}),(0,o.createElement)("div",{className:"wc-block-checkout__actions_row"},t&&(0,o.createElement)(a.Z,{link:(0,r.getSetting)("page-"+e,!1)}),(0,o.createElement)(p,{label:u,fullWidth:!t})))}))}}]);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

<<<<<<< HEAD
(self.webpackChunkwebpackWcBlocksFrontendJsonp=self.webpackChunkwebpackWcBlocksFrontendJsonp||[]).push([[9357],{9366:(e,t,o)=>{"use strict";o.d(t,{l:()=>R});var s=o(9196),r=o(3554),n=o(711),a=o(9307),l=o(5736),i=o(2629),c=o(7608),d=o.n(c),u=o(3133),p=o(6946),m=o(9818),g=o(4801);o(2750);const h=({id:e,className:t,label:o,onChange:r,options:i,value:c,required:h=!1,errorId:E,autoComplete:C="off",errorMessage:f=(0,l.__)("Please select a valid option","woocommerce")})=>{const _=(0,a.useRef)(null),y=(0,a.useId)(),b=e||"control-"+y,k=E||b,{setValidationErrors:v,clearValidationError:S}=(0,m.useDispatch)(g.VALIDATION_STORE_KEY),{error:A,validationErrorId:w}=(0,m.useSelect)((e=>{const t=e(g.VALIDATION_STORE_KEY);return{error:t.getValidationError(k),validationErrorId:t.getValidationErrorId(k)}}));return(0,a.useEffect)((()=>(!h||c?S(k):v({[k]:{message:f,hidden:!0}}),()=>{S(k)})),[S,c,k,f,h,v]),(0,s.createElement)("div",{id:b,className:d()("wc-block-components-combobox",t,{"is-active":c,"has-error":(null==A?void 0:A.message)&&!(null!=A&&A.hidden)}),ref:_},(0,s.createElement)(u.Z,{className:"wc-block-components-combobox-control",label:o,onChange:r,onFilterValueChange:e=>{if(e.length){const t=(0,p.isObject)(_.current)?_.current.ownerDocument.activeElement:void 0;if(t&&(0,p.isObject)(_.current)&&_.current.contains(t))return;const o=e.toLocaleUpperCase(),s=i.find((e=>e.value.toLocaleUpperCase()===o));if(s)return void r(s.value);const n=i.find((e=>e.label.toLocaleUpperCase().startsWith(o)));n&&r(n.value)}},options:i,value:c||"",allowReset:!1,autoComplete:C,"aria-invalid":(null==A?void 0:A.message)&&!(null!=A&&A.hidden),"aria-errormessage":w}),(0,s.createElement)(n.ValidationInputError,{propertyName:k}))};o(7368);const E=({className:e,countries:t,id:o,label:r,onChange:n,value:c="",autoComplete:u="off",required:p=!1,errorId:m,errorMessage:g=(0,l.__)("Please select a country","woocommerce")})=>{const E=(0,a.useMemo)((()=>Object.entries(t).map((([e,t])=>({value:e,label:(0,i.decodeEntities)(t)})))),[t]);return(0,s.createElement)("div",{className:d()(e,"wc-block-components-country-input")},(0,s.createElement)(h,{id:o,label:r,onChange:n,options:E,value:c,errorId:m,errorMessage:g,required:p,autoComplete:u}))};var C=o(8752);const f=e=>(0,s.createElement)(E,{countries:C.DK,...e}),_=e=>(0,s.createElement)(E,{countries:C.mO,...e});o(6115);const y=(e,t)=>{const o=t.find((t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase()));return o?o.value:""},b=({className:e,id:t,states:o,country:r,label:c,onChange:u,autoComplete:p="off",value:m="",required:g=!1,errorId:E=""})=>{const C=o[r],f=(0,a.useMemo)((()=>C?Object.keys(C).map((e=>({value:e,label:(0,i.decodeEntities)(C[e])}))):[]),[C]),_=(0,a.useCallback)((e=>{const t=f.length>0?y(e,f):e;t!==m&&u(t)}),[u,f,m]),b=(0,a.useRef)(m);return(0,a.useEffect)((()=>{b.current!==m&&(b.current=m)}),[m]),(0,a.useEffect)((()=>{if(f.length>0&&b.current){const e=y(b.current,f);e!==b.current&&_(e)}}),[f,_]),f.length>0?(0,s.createElement)(h,{className:d()(e,"wc-block-components-state-input"),id:t,label:c,onChange:_,options:f,value:m,errorMessage:(0,l.__)("Please select a state.","woocommerce"),errorId:E,required:g,autoComplete:p}):(0,s.createElement)(n.ValidatedTextInput,{className:e,id:t,label:c,onChange:_,autoComplete:p,value:m,required:g})},k=e=>(0,s.createElement)(b,{states:C.JJ,...e}),v=e=>(0,s.createElement)(b,{states:C.nm,...e});var S=o(4333),A=o(9530),w=o(9127),T=o.n(w),I=o(5969);var O=o(6483);const N=({id:e="",fields:t,fieldConfig:o={},onChange:i,addressType:c="shipping",values:u,children:E})=>{const C=(0,S.useInstanceId)(N),y=(0,A.s)(t),b=(0,A.s)(o),w=(0,A.s)((0,p.objectHasProp)(u,"country")?u.country:""),R=(0,a.useMemo)((()=>{const e=(0,I.Z)(y,b,w);return{fields:e,addressType:c,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[y,b,w,c]),K=(0,a.useRef)({});return(0,a.useEffect)((()=>{const e={...u,...Object.fromEntries(R.hidden.map((e=>[e.key,""])))};T()(u,e)||i(e)}),[i,R,u]),(0,a.useEffect)((()=>{"shipping"===c&&(0,p.objectHasProp)(u,"country")&&(e=>{const t="shipping_country",o=(0,m.select)(g.VALIDATION_STORE_KEY).getValidationError(t);!e.country&&(e.city||e.state||e.postcode)&&(o?(0,m.dispatch)(g.VALIDATION_STORE_KEY).showValidationError(t):(0,m.dispatch)(g.VALIDATION_STORE_KEY).setValidationErrors({[t]:{message:(0,l.__)("Please select your country","woocommerce"),hidden:!1}})),o&&e.country&&(0,m.dispatch)(g.VALIDATION_STORE_KEY).clearValidationError(t)})(u)}),[u,c]),(0,a.useEffect)((()=>{var e,t;null===(e=K.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[w]),e=e||`${C}`,(0,s.createElement)("div",{id:e,className:"wc-block-components-address-form"},R.fields.map((t=>{if(t.hidden)return null;const o={id:`${e}-${t.key}`,errorId:`${c}_${t.key}`,label:t.required?t.label:t.optionalLabel,autoCapitalize:t.autocapitalize,autoComplete:t.autocomplete,errorMessage:t.errorMessage,required:t.required,className:`wc-block-components-address-form__${t.key}`,...t.attributes};if("email"===t.key&&(o.id="email",o.errorId="billing_email"),"checkbox"===t.type)return(0,s.createElement)(n.CheckboxControl,{className:`wc-block-components-address-form__${t.key}`,label:t.label,key:t.key,checked:Boolean(u[t.key]),onChange:e=>{i({...u,[t.key]:e})},...o});if("country"===t.key&&(0,p.objectHasProp)(u,"country")){const e="shipping"===c?_:f;return(0,s.createElement)(e,{key:t.key,...o,value:u.country,onChange:e=>{const t={...u,country:e,state:""};u.postcode&&!(0,r.isPostcode)({postcode:u.postcode,country:e})&&(t.postcode=""),i(t)}})}if("state"===t.key&&(0,p.objectHasProp)(u,"state")){const e="shipping"===c?v:k;return(0,s.createElement)(e,{key:t.key,...o,country:u.country,value:u.state,onChange:e=>i({...u,state:e})})}return"select"===t.type?void 0===t.options?null:(0,s.createElement)(h,{key:t.key,...o,className:d()("wc-block-components-select-input",`wc-block-components-select-input-${t.key}`),value:u[t.key],onChange:e=>{i({...u,[t.key]:e})},options:t.options}):(0,s.createElement)(n.ValidatedTextInput,{key:t.key,ref:e=>K.current[t.key]=e,...o,type:t.type,value:u[t.key],onChange:e=>i({...u,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>((e,t,o)=>!((e.required||e.value)&&("postcode"===t&&o&&!(0,r.isPostcode)({postcode:e.value,country:o})?(e.setCustomValidity((0,l.__)("Please enter a valid postcode","woocommerce")),1):"email"===t&&!(0,O.isEmail)(e.value)&&(e.setCustomValidity((0,l.__)("Please enter a valid email address","woocommerce")),1))))(e,t.key,(0,p.objectHasProp)(u,"country")?u.country:"")})})),E)},R=N},2723:(e,t,o)=>{"use strict";o.d(t,{B:()=>c});var s=o(4617),r=o(9307),n=o(9818),a=o(4801),l=o(8540),i=o(3251);const c=()=>{const{needsShipping:e}=(0,i.V)(),{useShippingAsBilling:t,prefersCollection:o}=(0,n.useSelect)((e=>({useShippingAsBilling:e(a.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(a.CHECKOUT_STORE_KEY).prefersCollection()}))),{__internalSetUseShippingAsBilling:c}=(0,n.useDispatch)(a.CHECKOUT_STORE_KEY),{billingAddress:d,setBillingAddress:u,shippingAddress:p,setShippingAddress:m}=(0,l.L)(),g=(0,r.useCallback)((e=>{u({email:e})}),[u]),h=(0,s.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:d,setShippingAddress:m,setBillingAddress:u,setEmail:g,defaultFields:s.defaultFields,useShippingAsBilling:t,setUseShippingAsBilling:c,needsShipping:e,showShippingFields:!h&&e&&!o,showShippingMethods:e&&!o,showBillingFields:!e||!t||!!o,forcedBillingAddress:h,useBillingAsShipping:h||!!o}}},8540:(e,t,o)=>{"use strict";o.d(t,{L:()=>n});var s=o(9818),r=o(4801);const n=()=>{const{customerData:e,isInitialized:t}=(0,s.useSelect)((e=>{const t=e(r.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}})),{setShippingAddress:o,setBillingAddress:n}=(0,s.useDispatch)(r.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:n,setShippingAddress:o}}},9530:(e,t,o)=>{"use strict";o.d(t,{s:()=>a});var s=o(9307),r=o(9127),n=o.n(r);function a(e){const t=(0,s.useRef)(e);return n()(e,t.current)||(t.current=e),t.current}},1070:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var s=o(5736);const r=({defaultTitle:e=(0,s.__)("Step","woocommerce"),defaultDescription:t=(0,s.__)("Step description text.","woocommerce"),defaultShowStepNumber:o=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:o}})},5145:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var s=o(9196),r=o(7608),n=o.n(r),a=o(721),l=o(711),i=o(9818),c=o(4801),d=o(5736),u=o(2723),p=o(8360),m=o(8027),g=o(4617),h=o(8752),E=o(9366);const C=()=>{const{customerId:e,shouldCreateAccount:t,additionalFields:o}=(0,i.useSelect)((e=>{const t=e(c.CHECKOUT_STORE_KEY);return{customerId:t.getCustomerId(),shouldCreateAccount:t.getShouldCreateAccount(),additionalFields:t.getAdditionalFields()}})),{__internalSetShouldCreateAccount:r,setAdditionalFields:n}=(0,i.useDispatch)(c.CHECKOUT_STORE_KEY),{billingAddress:a,setEmail:C}=(0,u.B)(),{dispatchCheckoutEvent:f}=(0,p.n)(),_=!e&&(0,g.getSetting)("checkoutAllowsGuest",!1)&&(0,g.getSetting)("checkoutAllowsSignup",!1)&&(0,s.createElement)(l.CheckboxControl,{className:"wc-block-checkout__create-account",label:(0,d.__)("Create an account?","woocommerce"),checked:t,onChange:e=>r(e)}),y={email:a.email,...o};return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.StoreNoticesContainer,{context:m.n7.CONTACT_INFORMATION}),(0,s.createElement)(E.l,{id:"contact",addressType:"contact",onChange:e=>{const{email:t,...o}=e;C(t),f("set-email-address"),n(o)},values:y,fields:h.Kh},_))},f={...(0,o(1070).Z)({defaultTitle:(0,d.__)("Contact information","woocommerce"),defaultDescription:(0,d.__)("We'll use this email to send you details and updates about your order.","woocommerce")}),className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}},_=`${h.ZE}?redirect_to=${encodeURIComponent(window.location.href)}`,y=()=>{const e=(0,i.useSelect)((e=>e(c.CHECKOUT_STORE_KEY).getCustomerId()));return!(0,g.getSetting)("checkoutShowLoginReminder",!0)||e?null:(0,s.createElement)(s.Fragment,null,(0,d.__)("Already have an account? ","woocommerce"),(0,s.createElement)("a",{href:_},(0,d.__)("Log in.","woocommerce")))},b=(0,a.withFilteredAttributes)(f)((({title:e,description:t,showStepNumber:o,children:r,className:a})=>{const d=(0,i.useSelect)((e=>e(c.CHECKOUT_STORE_KEY).isProcessing()));return(0,s.createElement)(l.FormStep,{id:"contact-fields",disabled:d,className:n()("wc-block-checkout__contact-fields",a),title:e,description:t,showStepNumber:o,stepHeadingContent:()=>(0,s.createElement)(y,null)},(0,s.createElement)(C,null),r)}))},2750:()=>{},7368:()=>{},6115:()=>{}}]);
=======
(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[9357],{5851:(e,t,o)=>{"use strict";o.d(t,{Iq:()=>l});var n=o(2819),s=o(9307),r=(o(2560),o(4283)),i=o(8864);function l(e,t,o={}){const{memo:l=!1}=o;let a=(0,s.forwardRef)(e);l&&(a=(0,s.memo)(a)),void 0===t&&"undefined"!=typeof process&&process.env;let c=a[r.rE]||[t];return Array.isArray(t)&&(c=[...c,...t]),"string"==typeof t&&(c=[...c,t]),a.displayName=t,a[r.rE]=(0,n.uniq)(c),a.selector=`.${(0,i.l)(t)}`,a}},6467:(e,t,o)=>{"use strict";o.d(t,{l:()=>ee});var n=o(9196),s=o(3554),r=o(711),i=o(9307),l=o(5736),a=o(2629),c=o(3849),d=o.n(c),u=o(7608),p=o.n(u),f=o(2819),m=o(4333),h=o(9630),g=o(5158),v=o(444);const b=(0,i.createElement)(v.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(v.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));var y=o(2314);class E extends i.Component{constructor(){super(...arguments),this.onChange=this.onChange.bind(this),this.bindInput=this.bindInput.bind(this)}focus(){this.input.focus()}hasFocus(){return this.input===this.input.ownerDocument.activeElement}bindInput(e){this.input=e}onChange(e){this.props.onChange({value:e.target.value})}render(){const{value:e,isExpanded:t,instanceId:o,selectedSuggestionIndex:n,className:s,...r}=this.props,l=e?e.length+1:0;return(0,i.createElement)("input",(0,y.Z)({ref:this.bindInput,id:`components-form-token-input-${o}`,type:"text"},r,{value:e||"",onChange:this.onChange,size:l,className:p()(s,"components-form-token-field__input"),autoComplete:"off",role:"combobox","aria-expanded":t,"aria-autocomplete":"list","aria-owns":t?`components-form-token-suggestions-${o}`:void 0,"aria-activedescendant":-1!==n?`components-form-token-suggestions-${o}-${n}`:void 0,"aria-describedby":`components-form-token-suggestions-howto-${o}`}))}}const w=E;var C=o(2121),_=o.n(C);class k extends i.Component{constructor(){super(...arguments),this.handleMouseDown=this.handleMouseDown.bind(this),this.bindList=this.bindList.bind(this)}componentDidUpdate(){this.props.selectedIndex>-1&&this.props.scrollIntoView&&this.list.children[this.props.selectedIndex]&&(this.scrollingIntoView=!0,_()(this.list.children[this.props.selectedIndex],this.list,{onlyScrollIfNeeded:!0}),this.props.setTimeout((()=>{this.scrollingIntoView=!1}),100))}bindList(e){this.list=e}handleHover(e){return()=>{this.scrollingIntoView||this.props.onHover(e)}}handleClick(e){return()=>{this.props.onSelect(e)}}handleMouseDown(e){e.preventDefault()}computeSuggestionMatch(e){const t=this.props.displayTransform(this.props.match||"").toLocaleLowerCase();if(0===t.length)return null;const o=(e=this.props.displayTransform(e)).toLocaleLowerCase().indexOf(t);return{suggestionBeforeMatch:e.substring(0,o),suggestionMatch:e.substring(o,o+t.length),suggestionAfterMatch:e.substring(o+t.length)}}render(){return(0,i.createElement)("ul",{ref:this.bindList,className:"components-form-token-field__suggestions-list",id:`components-form-token-suggestions-${this.props.instanceId}`,role:"listbox"},(0,f.map)(this.props.suggestions,((e,t)=>{const o=this.computeSuggestionMatch(e),n=p()("components-form-token-field__suggestion",{"is-selected":t===this.props.selectedIndex});return(0,i.createElement)("li",{id:`components-form-token-suggestions-${this.props.instanceId}-${t}`,role:"option",className:n,key:null!=e&&e.value?e.value:this.props.displayTransform(e),onMouseDown:this.handleMouseDown,onClick:this.handleClick(e),onMouseEnter:this.handleHover(e),"aria-selected":t===this.props.selectedIndex},o?(0,i.createElement)("span",{"aria-label":this.props.displayTransform(e)},o.suggestionBeforeMatch,(0,i.createElement)("strong",{className:"components-form-token-field__suggestion-match"},o.suggestionMatch),o.suggestionAfterMatch):this.props.displayTransform(e))})))}}k.defaultProps={match:"",onHover:()=>{},onSelect:()=>{},suggestions:Object.freeze([])};const S=(0,m.withSafeTimeout)(k);var T=o(8494),I=o(9770),O=o(5082),A=o(1539),L=o(2021),x=o(3881);const N=(0,A.L)({as:"div",useHook:function(e){const t=(0,L.y)(e,"FlexBlock");return(0,x.i)({isBlock:!0,...t})},name:"FlexBlock"});var F=o(4762);const R=(0,m.createHigherOrderComponent)((e=>t=>{const[o,n]=(0,i.useState)(),s=(0,i.useCallback)((e=>n((()=>null!=e&&e.handleFocusOutside?e.handleFocusOutside.bind(e):void 0))),[]);return(0,i.createElement)("div",(0,m.__experimentalUseFocusOutside)(o),(0,i.createElement)(e,(0,y.Z)({ref:s},t)))}),"withFocusOutside")(class extends i.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}}),V=function e({value:t,label:o,options:n,onChange:s,onFilterValueChange:r=f.noop,hideLabelFromVision:a,help:c,allowReset:d=!0,className:u,messages:v={selected:(0,l.__)("Item selected.")}}){var y;const E=(0,m.useInstanceId)(e),[C,_]=(0,i.useState)(null),[k,A]=(0,i.useState)(!1),[L,x]=(0,i.useState)(""),V=(0,i.useRef)(),D=n.find((e=>e.value===t)),B=null!==(y=null==D?void 0:D.label)&&void 0!==y?y:"",M=(0,i.useMemo)((()=>{const e=[],t=[],o=(0,f.deburr)(L.toLocaleLowerCase());return n.forEach((n=>{const s=(0,f.deburr)(n.label).toLocaleLowerCase().indexOf(o);0===s?e.push(n):s>0&&t.push(n)})),e.concat(t)}),[L,n,t]),$=e=>{s(e.value),(0,g.speak)(v.selected,"assertive"),_(e),x(""),A(!1)},K=(e=1)=>{let t=M.indexOf(C)+e;t<0?t=M.length-1:t>=M.length&&(t=0),_(M[t]),A(!0)};return(0,i.useEffect)((()=>{const e=M.length>0;if(k){const t=e?(0,l.sprintf)(
/* translators: %d: number of results. */
/* translators: %d: number of results. */
(0,l._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",M.length),M.length):(0,l.__)("No results.");(0,g.speak)(t,"polite")}}),[M,k]),(0,i.createElement)(R,{onFocusOutside:()=>{A(!1)}},(0,i.createElement)(T.Z,{className:p()(u,"components-combobox-control"),tabIndex:"-1",label:o,id:`components-form-token-input-${E}`,hideLabelFromVision:a,help:c},(0,i.createElement)("div",{className:"components-combobox-control__suggestions-container",tabIndex:"-1",onKeyDown:e=>{let t=!1;switch(e.keyCode){case h.ENTER:C&&($(C),t=!0);break;case h.UP:K(-1),t=!0;break;case h.DOWN:K(1),t=!0;break;case h.ESCAPE:A(!1),_(null),t=!0,e.stopPropagation()}t&&e.preventDefault()}},(0,i.createElement)(O.Z,null,(0,i.createElement)(N,null,(0,i.createElement)(w,{className:"components-combobox-control__input",instanceId:E,ref:V,value:k?L:B,"aria-label":B?`${B}, ${o}`:null,onFocus:()=>{A(!0),r(""),x("")},isExpanded:k,selectedSuggestionIndex:M.indexOf(C),onChange:e=>{const t=e.value;x(t),r(t),A(!0)}})),d&&(0,i.createElement)(F.Z,null,(0,i.createElement)(I.Z,{className:"components-combobox-control__reset",icon:b,disabled:!t,onClick:()=>{s(null),V.current.input.focus()},label:(0,l.__)("Reset")}))),k&&(0,i.createElement)(S,{instanceId:E,match:{label:L},displayTransform:e=>e.label,suggestions:M,selectedIndex:M.indexOf(C),onHover:_,onSelect:$,scrollIntoView:!0}))))};var D=o(7998),B=o(9818),M=o(4801);o(2750);const $=({id:e,className:t,label:o,onChange:s,options:a,value:c,required:u=!1,errorId:p,autoComplete:f="off",errorMessage:m=(0,l.__)("Please select a valid option","woocommerce")})=>{const h=(0,i.useRef)(null),g=(0,i.useId)(),v=e||"control-"+g,b=p||v,{setValidationErrors:y,clearValidationError:E}=(0,B.useDispatch)(M.VALIDATION_STORE_KEY),{error:w,validationErrorId:C}=(0,B.useSelect)((e=>{const t=e(M.VALIDATION_STORE_KEY);return{error:t.getValidationError(b),validationErrorId:t.getValidationErrorId(b)}}));return(0,i.useEffect)((()=>(!u||c?E(b):y({[b]:{message:m,hidden:!0}}),()=>{E(b)})),[E,c,b,m,u,y]),(0,n.createElement)("div",{id:v,className:d()("wc-block-components-combobox",t,{"is-active":c,"has-error":(null==w?void 0:w.message)&&!(null!=w&&w.hidden)}),ref:h},(0,n.createElement)(V,{className:"wc-block-components-combobox-control",label:o,onChange:s,onFilterValueChange:e=>{if(e.length){const t=(0,D.Kn)(h.current)?h.current.ownerDocument.activeElement:void 0;if(t&&(0,D.Kn)(h.current)&&h.current.contains(t))return;const o=e.toLocaleUpperCase(),n=a.find((e=>e.value.toLocaleUpperCase()===o));if(n)return void s(n.value);const r=a.find((e=>e.label.toLocaleUpperCase().startsWith(o)));r&&s(r.value)}},options:a,value:c||"",allowReset:!1,autoComplete:f,"aria-invalid":(null==w?void 0:w.message)&&!(null!=w&&w.hidden),"aria-errormessage":C}),(0,n.createElement)(r.ValidationInputError,{propertyName:b}))};o(7368);const K=({className:e,countries:t,id:o,label:s,onChange:r,value:c="",autoComplete:u="off",required:p=!1,errorId:f,errorMessage:m=(0,l.__)("Please select a country","woocommerce")})=>{const h=(0,i.useMemo)((()=>Object.entries(t).map((([e,t])=>({value:e,label:(0,a.decodeEntities)(t)})))),[t]);return(0,n.createElement)("div",{className:d()(e,"wc-block-components-country-input")},(0,n.createElement)($,{id:o,label:s,onChange:r,options:h,value:c,errorId:f,errorMessage:m,required:p,autoComplete:u}))};var W=o(8752);const H=e=>(0,n.createElement)(K,{countries:W.DK,...e}),U=e=>(0,n.createElement)(K,{countries:W.mO,...e});o(6115);const P=(e,t)=>{const o=t.find((t=>t.label.toLocaleUpperCase()===e.toLocaleUpperCase()||t.value.toLocaleUpperCase()===e.toLocaleUpperCase()));return o?o.value:""},Y=({className:e,id:t,states:o,country:s,label:c,onChange:u,autoComplete:p="off",value:f="",required:m=!1,errorId:h=""})=>{const g=o[s],v=(0,i.useMemo)((()=>g?Object.keys(g).map((e=>({value:e,label:(0,a.decodeEntities)(g[e])}))):[]),[g]),b=(0,i.useCallback)((e=>{const t=v.length>0?P(e,v):e;t!==f&&u(t)}),[u,v,f]),y=(0,i.useRef)(f);return(0,i.useEffect)((()=>{y.current!==f&&(y.current=f)}),[f]),(0,i.useEffect)((()=>{if(v.length>0&&y.current){const e=P(y.current,v);e!==y.current&&b(e)}}),[v,b]),v.length>0?(0,n.createElement)($,{className:d()(e,"wc-block-components-state-input"),id:t,label:c,onChange:b,options:v,value:f,errorMessage:(0,l.__)("Please select a state.","woocommerce"),errorId:h,required:m,autoComplete:p}):(0,n.createElement)(r.ValidatedTextInput,{className:e,id:t,label:c,onChange:b,autoComplete:p,value:f,required:m})},q=e=>(0,n.createElement)(Y,{states:W.JJ,...e}),z=e=>(0,n.createElement)(Y,{states:W.nm,...e});var Z=o(9530),j=o(9127),J=o.n(j),G=o(5969);var X=o(6483);const Q=({id:e="",fields:t,fieldConfig:o={},onChange:a,addressType:c="shipping",values:u,children:p})=>{const f=(0,m.useInstanceId)(Q),h=(0,Z.s)(t),g=(0,Z.s)(o),v=(0,Z.s)((0,D.$n)(u,"country")?u.country:""),b=(0,i.useMemo)((()=>{const e=(0,G.Z)(h,g,v);return{fields:e,addressType:c,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[h,g,v,c]),y=(0,i.useRef)({});return(0,i.useEffect)((()=>{const e={...u,...Object.fromEntries(b.hidden.map((e=>[e.key,""])))};J()(u,e)||a(e)}),[a,b,u]),(0,i.useEffect)((()=>{"shipping"===c&&(0,D.$n)(u,"country")&&(e=>{const t="shipping_country",o=(0,B.select)(M.VALIDATION_STORE_KEY).getValidationError(t);!e.country&&(e.city||e.state||e.postcode)&&(o?(0,B.dispatch)(M.VALIDATION_STORE_KEY).showValidationError(t):(0,B.dispatch)(M.VALIDATION_STORE_KEY).setValidationErrors({[t]:{message:(0,l.__)("Please select your country","woocommerce"),hidden:!1}})),o&&e.country&&(0,B.dispatch)(M.VALIDATION_STORE_KEY).clearValidationError(t)})(u)}),[u,c]),(0,i.useEffect)((()=>{var e,t;null===(e=y.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[v]),e=e||`${f}`,(0,n.createElement)("div",{id:e,className:"wc-block-components-address-form"},b.fields.map((t=>{if(t.hidden)return null;const o={id:`${e}-${t.key}`,errorId:`${c}_${t.key}`,label:t.required?t.label:t.optionalLabel,autoCapitalize:t.autocapitalize,autoComplete:t.autocomplete,errorMessage:t.errorMessage,required:t.required,className:`wc-block-components-address-form__${t.key}`,...t.attributes};if("email"===t.key&&(o.id="email",o.errorId="billing_email"),"checkbox"===t.type)return(0,n.createElement)(r.CheckboxControl,{className:`wc-block-components-address-form__${t.key}`,label:t.label,key:t.key,checked:Boolean(u[t.key]),onChange:e=>{a({...u,[t.key]:e})},...o});if("country"===t.key&&(0,D.$n)(u,"country")){const e="shipping"===c?U:H;return(0,n.createElement)(e,{key:t.key,...o,value:u.country,onChange:e=>{const t={...u,country:e,state:""};u.postcode&&!(0,s.isPostcode)({postcode:u.postcode,country:e})&&(t.postcode=""),a(t)}})}if("state"===t.key&&(0,D.$n)(u,"state")){const e="shipping"===c?z:q;return(0,n.createElement)(e,{key:t.key,...o,country:u.country,value:u.state,onChange:e=>a({...u,state:e})})}return"select"===t.type?void 0===t.options?null:(0,n.createElement)($,{key:t.key,...o,className:d()("wc-block-components-select-input",`wc-block-components-select-input-${t.key}`),value:u[t.key],onChange:e=>{a({...u,[t.key]:e})},options:t.options}):(0,n.createElement)(r.ValidatedTextInput,{key:t.key,ref:e=>y.current[t.key]=e,...o,type:t.type,value:u[t.key],onChange:e=>a({...u,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>((e,t,o)=>!((e.required||e.value)&&("postcode"===t&&o&&!(0,s.isPostcode)({postcode:e.value,country:o})?(e.setCustomValidity((0,l.__)("Please enter a valid postcode","woocommerce")),1):"email"===t&&!(0,X.isEmail)(e.value)&&(e.setCustomValidity((0,l.__)("Please enter a valid email address","woocommerce")),1))))(e,t.key,(0,D.$n)(u,"country")?u.country:"")})})),p)},ee=Q},2723:(e,t,o)=>{"use strict";o.d(t,{B:()=>c});var n=o(4617),s=o(9307),r=o(9818),i=o(4801),l=o(8540),a=o(3251);const c=()=>{const{needsShipping:e}=(0,a.V)(),{useShippingAsBilling:t,prefersCollection:o}=(0,r.useSelect)((e=>({useShippingAsBilling:e(i.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(i.CHECKOUT_STORE_KEY).prefersCollection()}))),{__internalSetUseShippingAsBilling:c}=(0,r.useDispatch)(i.CHECKOUT_STORE_KEY),{billingAddress:d,setBillingAddress:u,shippingAddress:p,setShippingAddress:f}=(0,l.L)(),m=(0,s.useCallback)((e=>{u({email:e})}),[u]),h=(0,n.getSetting)("forcedBillingAddress",!1);return{shippingAddress:p,billingAddress:d,setShippingAddress:f,setBillingAddress:u,setEmail:m,defaultFields:n.defaultFields,useShippingAsBilling:t,setUseShippingAsBilling:c,needsShipping:e,showShippingFields:!h&&e&&!o,showShippingMethods:e&&!o,showBillingFields:!e||!t||!!o,forcedBillingAddress:h,useBillingAsShipping:h||!!o}}},8540:(e,t,o)=>{"use strict";o.d(t,{L:()=>r});var n=o(9818),s=o(4801);const r=()=>{const{customerData:e,isInitialized:t}=(0,n.useSelect)((e=>{const t=e(s.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}})),{setShippingAddress:o,setBillingAddress:r}=(0,n.useDispatch)(s.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:r,setShippingAddress:o}}},9530:(e,t,o)=>{"use strict";o.d(t,{s:()=>i});var n=o(9307),s=o(9127),r=o.n(s);function i(e){const t=(0,n.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},1070:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(5736);const s=({defaultTitle:e=(0,n.__)("Step","woocommerce"),defaultDescription:t=(0,n.__)("Step description text.","woocommerce"),defaultShowStepNumber:o=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:o}})},5145:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>w});var n=o(9196),s=o(3849),r=o.n(s),i=o(721),l=o(711),a=o(9818),c=o(4801),d=o(5736),u=o(2723),p=o(8360),f=o(8027),m=o(4617),h=o(8752),g=o(6467);const v=()=>{const{customerId:e,shouldCreateAccount:t,additionalFields:o}=(0,a.useSelect)((e=>{const t=e(c.CHECKOUT_STORE_KEY);return{customerId:t.getCustomerId(),shouldCreateAccount:t.getShouldCreateAccount(),additionalFields:t.getAdditionalFields()}})),{__internalSetShouldCreateAccount:s,setAdditionalFields:r}=(0,a.useDispatch)(c.CHECKOUT_STORE_KEY),{billingAddress:i,setEmail:v}=(0,u.B)(),{dispatchCheckoutEvent:b}=(0,p.n)(),y=!e&&(0,m.getSetting)("checkoutAllowsGuest",!1)&&(0,m.getSetting)("checkoutAllowsSignup",!1)&&(0,n.createElement)(l.CheckboxControl,{className:"wc-block-checkout__create-account",label:(0,d.__)("Create an account?","woocommerce"),checked:t,onChange:e=>s(e)}),E={email:i.email,...o};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.StoreNoticesContainer,{context:f.n7.CONTACT_INFORMATION}),(0,n.createElement)(g.l,{id:"contact",addressType:"contact",onChange:e=>{const{email:t,...o}=e;v(t),b("set-email-address"),r(o)},values:E,fields:h.Kh},y))},b={...(0,o(1070).Z)({defaultTitle:(0,d.__)("Contact information","woocommerce"),defaultDescription:(0,d.__)("We'll use this email to send you details and updates about your order.","woocommerce")}),className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}},y=`${h.ZE}?redirect_to=${encodeURIComponent(window.location.href)}`,E=()=>{const e=(0,a.useSelect)((e=>e(c.CHECKOUT_STORE_KEY).getCustomerId()));return!(0,m.getSetting)("checkoutShowLoginReminder",!0)||e?null:(0,n.createElement)(n.Fragment,null,(0,d.__)("Already have an account? ","woocommerce"),(0,n.createElement)("a",{href:y},(0,d.__)("Log in.","woocommerce")))},w=(0,i.withFilteredAttributes)(b)((({title:e,description:t,showStepNumber:o,children:s,className:i})=>{const d=(0,a.useSelect)((e=>e(c.CHECKOUT_STORE_KEY).isProcessing()));return(0,n.createElement)(l.FormStep,{id:"contact-fields",disabled:d,className:r()("wc-block-checkout__contact-fields",i),title:e,description:t,showStepNumber:o,stepHeadingContent:()=>(0,n.createElement)(E,null)},(0,n.createElement)(v,null),s)}))},2130:(e,t,o)=>{"use strict";var n=o(586);e.exports=function(e,t,o){o=o||{},9===t.nodeType&&(t=n.getWindow(t));var s=o.allowHorizontalScroll,r=o.onlyScrollIfNeeded,i=o.alignWithTop,l=o.alignWithLeft,a=o.offsetTop||0,c=o.offsetLeft||0,d=o.offsetBottom||0,u=o.offsetRight||0;s=void 0===s||s;var p=n.isWindow(t),f=n.offset(e),m=n.outerHeight(e),h=n.outerWidth(e),g=void 0,v=void 0,b=void 0,y=void 0,E=void 0,w=void 0,C=void 0,_=void 0,k=void 0,S=void 0;p?(C=t,S=n.height(C),k=n.width(C),_={left:n.scrollLeft(C),top:n.scrollTop(C)},E={left:f.left-_.left-c,top:f.top-_.top-a},w={left:f.left+h-(_.left+k)+u,top:f.top+m-(_.top+S)+d},y=_):(g=n.offset(t),v=t.clientHeight,b=t.clientWidth,y={left:t.scrollLeft,top:t.scrollTop},E={left:f.left-(g.left+(parseFloat(n.css(t,"borderLeftWidth"))||0))-c,top:f.top-(g.top+(parseFloat(n.css(t,"borderTopWidth"))||0))-a},w={left:f.left+h-(g.left+b+(parseFloat(n.css(t,"borderRightWidth"))||0))+u,top:f.top+m-(g.top+v+(parseFloat(n.css(t,"borderBottomWidth"))||0))+d}),E.top<0||w.top>0?!0===i?n.scrollTop(t,y.top+E.top):!1===i?n.scrollTop(t,y.top+w.top):E.top<0?n.scrollTop(t,y.top+E.top):n.scrollTop(t,y.top+w.top):r||((i=void 0===i||!!i)?n.scrollTop(t,y.top+E.top):n.scrollTop(t,y.top+w.top)),s&&(E.left<0||w.left>0?!0===l?n.scrollLeft(t,y.left+E.left):!1===l?n.scrollLeft(t,y.left+w.left):E.left<0?n.scrollLeft(t,y.left+E.left):n.scrollLeft(t,y.left+w.left):r||((l=void 0===l||!!l)?n.scrollLeft(t,y.left+E.left):n.scrollLeft(t,y.left+w.left)))}},2121:(e,t,o)=>{"use strict";e.exports=o(2130)},586:e=>{"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function n(e,t){var o=e["page"+(t?"Y":"X")+"Offset"],n="scroll"+(t?"Top":"Left");if("number"!=typeof o){var s=e.document;"number"!=typeof(o=s.documentElement[n])&&(o=s.body[n])}return o}function s(e){return n(e)}function r(e){return n(e,!0)}function i(e){var t=function(e){var t,o=void 0,n=void 0,s=e.ownerDocument,r=s.body,i=s&&s.documentElement;return o=(t=e.getBoundingClientRect()).left,n=t.top,{left:o-=i.clientLeft||r.clientLeft||0,top:n-=i.clientTop||r.clientTop||0}}(e),o=e.ownerDocument,n=o.defaultView||o.parentWindow;return t.left+=s(n),t.top+=r(n),t}var l=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),a=/^(top|right|bottom|left)$/,c="currentStyle",d="runtimeStyle",u="left",p=void 0;function f(e,t){for(var o=0;o<e.length;o++)t(e[o])}function m(e){return"border-box"===p(e,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(e,t,o){var n="",s=e.ownerDocument,r=o||s.defaultView.getComputedStyle(e,null);return r&&(n=r.getPropertyValue(t)||r[t]),n}:function(e,t){var o=e[c]&&e[c][t];if(l.test(o)&&!a.test(t)){var n=e.style,s=n[u],r=e[d][u];e[d][u]=e[c][u],n[u]="fontSize"===t?"1em":o||0,o=n.pixelLeft+"px",n[u]=s,e[d][u]=r}return""===o?"auto":o});var h=["margin","border","padding"],g=-1,v=2,b=1;function y(e,t,o){var n=0,s=void 0,r=void 0,i=void 0;for(r=0;r<t.length;r++)if(s=t[r])for(i=0;i<o.length;i++){var l;l="border"===s?s+o[i]+"Width":s+o[i],n+=parseFloat(p(e,l))||0}return n}function E(e){return null!=e&&e==e.window}var w={};function C(e,t,o){if(E(e))return"width"===t?w.viewportWidth(e):w.viewportHeight(e);if(9===e.nodeType)return"width"===t?w.docWidth(e):w.docHeight(e);var n="width"===t?["Left","Right"]:["Top","Bottom"],s="width"===t?e.offsetWidth:e.offsetHeight,r=(p(e),m(e)),i=0;(null==s||s<=0)&&(s=void 0,(null==(i=p(e,t))||Number(i)<0)&&(i=e.style[t]||0),i=parseFloat(i)||0),void 0===o&&(o=r?b:g);var l=void 0!==s||r,a=s||i;if(o===g)return l?a-y(e,["border","padding"],n):i;if(l){var c=o===v?-y(e,["border"],n):y(e,["margin"],n);return a+(o===b?0:c)}return i+y(e,h.slice(o),n)}f(["Width","Height"],(function(e){w["doc"+e]=function(t){var o=t.document;return Math.max(o.documentElement["scroll"+e],o.body["scroll"+e],w["viewport"+e](o))},w["viewport"+e]=function(t){var o="client"+e,n=t.document,s=n.body,r=n.documentElement[o];return"CSS1Compat"===n.compatMode&&r||s&&s[o]||r}}));var _={position:"absolute",visibility:"hidden",display:"block"};function k(e){var t=void 0,o=arguments;return 0!==e.offsetWidth?t=C.apply(void 0,o):function(e,n,s){var r={},i=e.style,l=void 0;for(l in n)n.hasOwnProperty(l)&&(r[l]=i[l],i[l]=n[l]);for(l in function(){t=C.apply(void 0,o)}.call(e),n)n.hasOwnProperty(l)&&(i[l]=r[l])}(e,_),t}function S(e,t,n){var s=n;if("object"!==(void 0===t?"undefined":o(t)))return void 0!==s?("number"==typeof s&&(s+="px"),void(e.style[t]=s)):p(e,t);for(var r in t)t.hasOwnProperty(r)&&S(e,r,t[r])}f(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);w["outer"+t]=function(t,o){return t&&k(t,e,o?0:b)};var o="width"===e?["Left","Right"]:["Top","Bottom"];w[e]=function(t,n){return void 0===n?t&&k(t,e,g):t?(p(t),m(t)&&(n+=y(t,["padding","border"],o)),S(t,e,n)):void 0}})),e.exports=t({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return i(e);!function(e,t){"static"===S(e,"position")&&(e.style.position="relative");var o=i(e),n={},s=void 0,r=void 0;for(r in t)t.hasOwnProperty(r)&&(s=parseFloat(S(e,r))||0,n[r]=s+t[r]-o[r]);S(e,n)}(e,t)},isWindow:E,each:f,css:S,clone:function(e){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);if(e.overflow)for(var o in e)e.hasOwnProperty(o)&&(t.overflow[o]=e.overflow[o]);return t},scrollLeft:function(e,t){if(E(e)){if(void 0===t)return s(e);window.scrollTo(t,r(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(E(e)){if(void 0===t)return r(e);window.scrollTo(s(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},w)},2750:()=>{},7368:()=>{},6115:()=>{}}]);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

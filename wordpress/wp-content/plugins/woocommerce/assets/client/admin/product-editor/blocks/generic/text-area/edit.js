<<<<<<< HEAD
"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextAreaBlockEdit=void 0;const i18n_1=require("@wordpress/i18n"),block_templates_1=require("@woocommerce/block-templates"),element_1=require("@wordpress/element"),components_1=require("@wordpress/components"),compose_1=require("@wordpress/compose"),block_editor_1=require("@wordpress/block-editor"),classnames_1=__importDefault(require("classnames")),toolbar_button_rtl_1=require("./toolbar/toolbar-button-rtl"),toolbar_button_alignment_1=__importDefault(require("./toolbar/toolbar-button-alignment")),use_clear_selected_block_on_blur_1=require("../../../hooks/use-clear-selected-block-on-blur"),use_product_entity_prop_1=__importDefault(require("../../../hooks/use-product-entity-prop")),label_1=require("../../../components/label/label");function TextAreaBlockEdit({attributes:e,setAttributes:t,context:{postType:o}}){const{property:r,label:l,placeholder:n,help:a,required:i,note:c,tooltip:u,disabled:_=!1,align:s,allowedFormats:d,direction:m,mode:p="rich-text"}=e,b=(0,block_templates_1.useWooBlockProps)(e,{className:"wp-block-woocommerce-product-text-area-field",style:{direction:m}}),f=(0,compose_1.useInstanceId)(TextAreaBlockEdit,"wp-block-woocommerce-product-content-field__content"),k=f.toString()+"__label";if(!r)throw new Error((0,i18n_1.__)("Property attribute is required.","woocommerce"));const[h,q]=(0,use_product_entity_prop_1.default)(r,{postType:o}),{handleBlur:g}=(0,use_clear_selected_block_on_blur_1.useClearSelectedBlockOnBlur)(),x=(0,element_1.useRef)(null),w=(0,element_1.useRef)(null),B="rich-text"===p,y="plain-text"===p;return(0,element_1.createElement)("div",{...b},B&&(0,element_1.createElement)(block_editor_1.BlockControls,{group:"block"},(0,element_1.createElement)(toolbar_button_alignment_1.default,{align:s,setAlignment:function(e){t({align:e})}}),(0,element_1.createElement)(toolbar_button_rtl_1.RTLToolbarButton,{direction:m,onChange:function(e){t({direction:e})}})),(0,element_1.createElement)(components_1.BaseControl,{id:f.toString(),label:(0,element_1.createElement)(label_1.Label,{label:l||"",labelId:k,required:i,note:c,tooltip:u,onClick:B?function(){var e;null===(e=x.current)||void 0===e||e.focus()}:function(){var e;null===(e=w.current)||void 0===e||e.focus()}}),help:a},B&&(0,element_1.createElement)(block_editor_1.RichText,{ref:x,id:f.toString(),"aria-labelledby":k,identifier:"content",tagName:"p",value:h||"",onChange:q,"data-empty":Boolean(h),className:(0,classnames_1.default)("components-summary-control",{[`has-text-align-${s}`]:s}),dir:m,allowedFormats:d,placeholder:n,required:i,"aria-required":i,readOnly:_,onBlur:g}),y&&(0,element_1.createElement)(components_1.TextareaControl,{ref:w,"aria-labelledby":k,value:h||"",onChange:q,placeholder:n,required:i,disabled:_,onBlur:g})))}exports.TextAreaBlockEdit=TextAreaBlockEdit;
=======
"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextAreaBlockEdit=void 0;const i18n_1=require("@wordpress/i18n"),block_templates_1=require("@woocommerce/block-templates"),element_1=require("@wordpress/element"),components_1=require("@wordpress/components"),compose_1=require("@wordpress/compose"),block_editor_1=require("@wordpress/block-editor"),classnames_1=__importDefault(require("classnames")),toolbar_button_rtl_1=require("./toolbar/toolbar-button-rtl"),toolbar_button_alignment_1=__importDefault(require("./toolbar/toolbar-button-alignment")),use_clear_selected_block_on_blur_1=require("../../../hooks/use-clear-selected-block-on-blur"),use_product_entity_prop_1=__importDefault(require("../../../hooks/use-product-entity-prop")),label_1=require("../../../components/label/label");function TextAreaBlockEdit({attributes:e,setAttributes:t,context:{postType:o}}){const{property:r,label:l,placeholder:n,help:a,required:c,note:i,tooltip:s,disabled:_,align:u,allowedFormats:d,direction:m,mode:p="rich-text"}=e,b=(0,block_templates_1.useWooBlockProps)(e,{className:"wp-block-woocommerce-product-text-area-field",style:{direction:m}}),k=(0,compose_1.useInstanceId)(TextAreaBlockEdit,"wp-block-woocommerce-product-content-field__content");if(!r)throw new Error((0,i18n_1.__)("Property attribute is required.","woocommerce"));const[f,h]=(0,use_product_entity_prop_1.default)(r,{postType:o}),{handleBlur:q}=(0,use_clear_selected_block_on_blur_1.useClearSelectedBlockOnBlur)(),x="rich-text"===p,g="plain-text"===p;return(0,element_1.createElement)("div",{...b},x&&(0,element_1.createElement)(block_editor_1.BlockControls,{group:"block"},(0,element_1.createElement)(toolbar_button_alignment_1.default,{align:u,setAlignment:function(e){t({align:e})}}),(0,element_1.createElement)(toolbar_button_rtl_1.RTLToolbarButton,{direction:m,onChange:function(e){t({direction:e})}})),(0,element_1.createElement)(components_1.BaseControl,{id:k.toString(),label:(0,element_1.createElement)(label_1.Label,{label:l||"",required:c,note:i,tooltip:s}),help:a},x&&(0,element_1.createElement)(block_editor_1.RichText,{id:k.toString(),identifier:"content",tagName:"p",value:f||"",onChange:h,"data-empty":Boolean(f),className:(0,classnames_1.default)("components-summary-control",{[`has-text-align-${u}`]:u}),dir:m,allowedFormats:d,placeholder:n,required:c,disabled:_,onBlur:q}),g&&(0,element_1.createElement)(components_1.TextareaControl,{value:f||"",onChange:h,placeholder:n,required:c,disabled:_,onBlur:q})))}exports.TextAreaBlockEdit=TextAreaBlockEdit;
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

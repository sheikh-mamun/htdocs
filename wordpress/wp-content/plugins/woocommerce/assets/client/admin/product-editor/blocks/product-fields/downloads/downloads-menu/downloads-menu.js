<<<<<<< HEAD
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DownloadsMenu=void 0;const components_1=require("@wordpress/components"),element_1=require("@wordpress/element"),i18n_1=require("@wordpress/i18n"),icons_1=require("@wordpress/icons"),insert_url_menu_item_1=require("../insert-url-menu-item"),upload_files_menu_item_1=require("../upload-files-menu-item");function DownloadsMenu({allowedTypes:e,maxUploadFileSize:n,onUploadSuccess:o,onUploadError:r}){return(0,element_1.createElement)(components_1.Dropdown,{popoverProps:{placement:"bottom-end"},contentClassName:"woocommerce-downloads-menu__menu-content",renderToggle:({isOpen:e,onToggle:n})=>(0,element_1.createElement)(components_1.Button,{"aria-expanded":e,icon:e?icons_1.chevronUp:icons_1.chevronDown,variant:"secondary",onClick:n,className:"woocommerce-downloads-menu__toogle"},(0,element_1.createElement)("span",null,(0,i18n_1.__)("Add new","woocommerce"))),renderContent:({onClose:t})=>(0,element_1.createElement)("div",{className:"components-dropdown-menu__menu"},(0,element_1.createElement)(components_1.MenuGroup,null,(0,element_1.createElement)(upload_files_menu_item_1.UploadFilesMenuItem,{allowedTypes:e,maxUploadFileSize:n,onUploadSuccess:e=>{o(e),t()},onUploadError:r}),(0,element_1.createElement)(insert_url_menu_item_1.InsertUrlMenuItem,{onUploadSuccess:e=>{o(e),t()},onUploadError:r})))})}exports.DownloadsMenu=DownloadsMenu;
=======
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DownloadsMenu=void 0;const components_1=require("@wordpress/components"),element_1=require("@wordpress/element"),i18n_1=require("@wordpress/i18n"),icons_1=require("@wordpress/icons"),media_library_menu_item_1=require("../media-library-menu-item"),insert_url_menu_item_1=require("../insert-url-menu-item"),upload_files_menu_item_1=require("../upload-files-menu-item");function DownloadsMenu({allowedTypes:e,maxUploadFileSize:n,onUploadSuccess:o,onUploadError:r}){return(0,element_1.createElement)(components_1.Dropdown,{popoverProps:{placement:"bottom-end"},contentClassName:"woocommerce-downloads-menu__menu-content",renderToggle:({isOpen:e,onToggle:n})=>(0,element_1.createElement)(components_1.Button,{"aria-expanded":e,icon:e?icons_1.chevronUp:icons_1.chevronDown,variant:"secondary",onClick:n,className:"woocommerce-downloads-menu__toogle"},(0,element_1.createElement)("span",null,(0,i18n_1.__)("Add new","woocommerce"))),renderContent:({onClose:l})=>(0,element_1.createElement)("div",{className:"components-dropdown-menu__menu"},(0,element_1.createElement)(components_1.MenuGroup,null,(0,element_1.createElement)(upload_files_menu_item_1.UploadFilesMenuItem,{allowedTypes:e,maxUploadFileSize:n,onUploadSuccess:e=>{o(e),l()},onUploadError:r}),(0,element_1.createElement)(media_library_menu_item_1.MediaLibraryMenuItem,{allowedTypes:e,onUploadSuccess:e=>{o(e),l()}}),(0,element_1.createElement)(insert_url_menu_item_1.InsertUrlMenuItem,{onUploadSuccess:e=>{o(e),l()},onUploadError:r})))})}exports.DownloadsMenu=DownloadsMenu;
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

<<<<<<< HEAD
/*! elementor - v3.21.0 - 22-05-2024 */
=======
/*! elementor - v3.21.0 - 08-05-2024 */
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ../core/editor/loader/v2/js/editor-loader-v2.js ***!
  \*******************************************************/


var _window$elementorV;
window.__elementorEditorV1LoadingPromise = new Promise(function (resolve) {
  window.addEventListener('elementor/init', function () {
    resolve();
  }, {
    once: true
  });
});
window.elementor.start();
if (!((_window$elementorV = window.elementorV2) !== null && _window$elementorV !== void 0 && _window$elementorV.editor)) {
  throw new Error('The "@elementor/editor" package was not loaded.');
}
window.elementorV2.editor.init(document.getElementById('elementor-editor-wrapper-v2'));
/******/ })()
;
//# sourceMappingURL=editor-loader-v2.js.map
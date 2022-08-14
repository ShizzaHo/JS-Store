/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store/index.js\");\n\r\n\r\nconsole.log(_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getStore());\n\n//# sourceURL=webpack://simple/./src/index.js?");

/***/ }),

/***/ "./src/store/global/index.js":
/*!***********************************!*\
  !*** ./src/store/global/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _storeBased__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storeBased */ \"./src/store/storeBased.js\");\n\r\n\r\n/**\r\n * Глобальный стор\r\n */\r\nclass Store extends _storeBased__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    \r\n}\n\n//# sourceURL=webpack://simple/./src/store/global/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeStore\": () => (/* binding */ changeStore),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ \"./src/store/global/index.js\");\n\r\n\r\nconst stores = {\r\n    Global: _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n}\r\n\r\nlet store = new _global__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n/**\r\n * Заменяет выбранный стор\r\n * @param {string} Название стора\r\n */\r\nfunction changeStore(name) {\r\n    store = stores[name];\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\r\n\n\n//# sourceURL=webpack://simple/./src/store/index.js?");

/***/ }),

/***/ "./src/store/storeBased.js":
/*!*********************************!*\
  !*** ./src/store/storeBased.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ storeBased)\n/* harmony export */ });\n/**\r\n * Шаблон для всех сторов\r\n */\r\nclass storeBased {\r\n    store = {\r\n\r\n    }\r\n\r\n    /**\r\n     * Устанавливает значение в стор с учетом уже существующих данных\r\n     * @param  {Object} Данные для записи\r\n     */\r\n    setStore(object) {\r\n        const newStore = this.getStore();\r\n        Object.keys(object).map(item => {\r\n            newStore[item] = object[item] \r\n        })\r\n    }\r\n    \r\n    /**\r\n     * Устанавливает значение в стор c перезаписью остальных данных\r\n     * @param  {Object} object\r\n     */\r\n    setStoreHard(object) {\r\n        this.store = object;\r\n    }\r\n\r\n    /**\r\n     * Получить значение стора\r\n     */\r\n    getStore() {\r\n        return this.store;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://simple/./src/store/storeBased.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	document.write(__webpack_require__(2));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);

	module.exports = "It works from searchProducts.js. It works";



	// class SearchProducts extend BaseComponent {
	//
	//   const baseConfig = {
	//     herp: "derp"
	//   }
	//   let element = null;
	//
	//   constructor = (config, data) => {
	//
	//     //combine baseConfig with config.
	//     Util.deepMerge(baseConfig, config);
	//
	//     if(data) {
	//       template = createTemplate(data);
	//     }
	//
	//     if(config.id && window.document) {
	//       element = window.document.selectElementById(config.id);
	//       attachEventHandlers(element);
	//     }
	//
	//     return template;
	//   }
	//
	//   createTemplate = (data) => {
	//     //create the template
	//   }
	//
	//
	//   searchClick = (evt) => {
	//       config.searchCallback(event.target.value);
	//   }
	// }


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);

	module.exports = "It works from searchBox.js.";


/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
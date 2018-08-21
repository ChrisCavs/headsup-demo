/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var headsup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! headsup.js */ \"./node_modules/headsup.js/dist/headsup.js\");\n/* harmony import */ var headsup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(headsup_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  headsup_js__WEBPACK_IMPORTED_MODULE_0___default()()\n})\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./node_modules/headsup.js/dist/headsup.js":
/*!*************************************************!*\
  !*** ./node_modules/headsup.js/dist/headsup.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n}(this, (function () { 'use strict';\n\n  var headsup = (function () {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$selector = _ref.selector,\n        selector = _ref$selector === undefined ? 'header' : _ref$selector,\n        _ref$duration = _ref.duration,\n        duration = _ref$duration === undefined ? 0.3 : _ref$duration,\n        _ref$easing = _ref.easing,\n        easing = _ref$easing === undefined ? 'ease' : _ref$easing,\n        _ref$delay = _ref.delay,\n        delay = _ref$delay === undefined ? 0 : _ref$delay,\n        _ref$debounce = _ref.debounce,\n        debounce = _ref$debounce === undefined ? false : _ref$debounce;\n\n    var show = true; // initial boolean value\n    var prev = window.pageYOffset; // initial window position\n\n    var header = document.querySelector(selector);\n    var styles = getComputedStyle(header);\n\n    var headerHeight = function headerHeight() {\n      // computes total height of the element\n      var widthAndPadding = header.getBoundingClientRect().height;\n      var marginTop = parseFloat(styles['margin-top']);\n      var marginBot = parseFloat(styles['margin-bottom']);\n\n      return widthAndPadding + marginTop + marginBot;\n    };\n\n    var fixedShow = function fixedShow() {\n      // shows the element\n      header.style.top = '0';\n\n      show = true;\n    };\n\n    var fixedHide = function fixedHide() {\n      // hides the element\n      header.style.top = '-' + headerHeight() + 'px';\n\n      show = false;\n    };\n\n    var onScrollFunction = function onScrollFunction(_) {\n      // performs logic on each scroll event\n      var current = window.pageYOffset;\n\n      current > prev && current >= headerHeight() / 2 ? show ? fixedHide() : null : show ? null : fixedShow();\n\n      prev = current;\n    };\n\n    var debounceFunc = function debounceFunc(wait) {\n      // debouncing function\n      if (!wait) return onScrollFunction;\n\n      var timeout = null;\n      return function () {\n        if (!timeout) {\n          timeout = setTimeout(function () {\n            onScrollFunction();\n            timeout = null;\n          }, wait);\n        }\n      };\n    };\n\n    document // adjust body margin to make space for header\n    .body.style['margin-top'] = headerHeight() + 'px';\n\n    Object.assign(header.style, { // assign fixed position and transition to header\n      position: 'fixed',\n      top: '0',\n      transition: 'top ' + duration + 's ' + easing + ' ' + delay + 's'\n    });\n\n    window.addEventListener('scroll', debounceFunc(debounce));\n  });\n\n  return headsup;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/headsup.js/dist/headsup.js?");

/***/ })

/******/ });
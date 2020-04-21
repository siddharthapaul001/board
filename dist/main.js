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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ \"./src/components/utils/helpers.js\");\n\n\nclass List {\n  constructor(parent, beforeElem) {\n    this._setDefaultConfig(parent, beforeElem);\n    this._requestDraw();\n  }\n\n  _setDefaultConfig(parent, beforeElem) {\n    this._config = {\n      title: 'Enter title here',\n      frameDrawn: false,\n      parent,\n      beforeElem,\n      requestedAnimationFrame: false\n      // postDrawFn: []\n    };\n    this._components = {};\n  }\n\n  // afterDraw(cb) {\n  //   this._config.postDrawFn.push(cb);\n  // }\n\n  _requestDraw () {\n    if (!this._config.requestedAnimationFrame) {\n      this._draw();\n      this._config.requestedAnimationFrame = true;\n    }\n  }\n\n  _drawFrame() {\n    this._config.frameDrawn = true;\n    let listWraper = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'list-wraper'\n      }),\n      list = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'list'\n      }),\n      listHeader = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'header'\n      }),\n      inpTitle = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('input', {\n        class: 'inp-transparent inp-title',\n        value: 'Enter title here...'\n      }),\n      btnMenu = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn-more',\n        href: '#!'\n      }, '···'),\n      itemsContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'items-container'\n      }),\n      inpContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'input-container'\n      }),\n      txtNoteContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'txt-note-container'\n      }),\n      inpAddCard = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('input', {\n        class: 'inp-transparent txt-note',\n        placeholder: '＋ Add another card',\n        type: 'text'\n      }),\n      saveBtnContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'btn-save-container'\n      }),\n      btnSave = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn btn-save'\n      }),\n      img = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('img', {\n        src: 'assets/floppy_disk.png',\n        width: '20px',\n        height: '20px'\n      });\n    \n    listHeader.node.appendChild(inpTitle.node);\n    listHeader.node.appendChild(btnMenu.node);\n    list.node.appendChild(listHeader.node);\n    list.node.appendChild(itemsContainer.node);\n    txtNoteContainer.node.appendChild(inpAddCard.node);\n    inpContainer.node.appendChild(txtNoteContainer.node);\n    btnSave.node.appendChild(img.node);\n    saveBtnContainer.node.appendChild(btnSave.node);\n    inpContainer.node.appendChild(saveBtnContainer.node);\n    list.node.appendChild(inpContainer.node);\n    listWraper.node.appendChild(list.node);\n\n    this._config.parent.insertBefore(listWraper.node, this._config.beforeElem);\n  }\n\n  _drawItem() {\n    let item = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item'\n      }),\n      itemText = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item-text'\n      });\n  }\n\n  _draw() {\n    if (!this._config.frameDrawn) {\n      this._drawFrame();\n    }\n\n    // for (let i = 0, l = this._config.postDrawFn.length; i < l; i++) {\n    //   this._config.postDrawFn[i]();\n    // }\n  }\n}\n\n//# sourceURL=webpack:///./src/components/list.js?");

/***/ }),

/***/ "./src/components/utils/helpers.js":
/*!*****************************************!*\
  !*** ./src/components/utils/helpers.js ***!
  \*****************************************/
/*! exports provided: doc, UNDEF, createHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doc\", function() { return doc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNDEF\", function() { return UNDEF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHTMLElement\", function() { return createHTMLElement; });\nconst doc = document;\nlet UNDEF;\n\nfunction createHTMLElement(elem, attrs, text) {\n  let node, attrNames, el = elem;\n\n  if (typeof el === 'string') {\n    node = doc.createElement(el);\n    el = {\n      attrs: {},\n      node\n    }\n  } else {\n    node = el.node;\n  }\n  attrNames = Object.keys(attrs);\n  for (let i = 0, l = attrNames.length; i < l; i++) {\n    if (el.attrs[attrNames[i]] && el.attrs[attrNames[i]] === attrs[attrNames[i]]) {\n      // no need to change it\n    } else {\n      el.attrs[attrNames[i]] = attrs[attrNames[i]];\n      node.setAttribute(attrNames[i], attrs[attrNames[i]]);\n    }\n  }\n  node.textContent = text;\n  return el;\n}\n\n\n\n//# sourceURL=webpack:///./src/components/utils/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list */ \"./src/components/list.js\");\n\n\n\nconst rootNode = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('app'),\n  beforeElem = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('add-new-list'),\n  btnAddList = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('btn-add-list');\n\nlet listObjects = [];\n\nbtnAddList.addEventListener('click', () => {\n  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 2) * 284) + 'px');\n  let list = new _components_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rootNode, beforeElem);\n  listObjects.push(list);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
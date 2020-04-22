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

/***/ "./src/components/base.js":
/*!********************************!*\
  !*** ./src/components/base.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\nclass Base {\n\n  _setDefaultConfig () {\n    this._config = {\n      frameDrawn: false,\n      requestedAnimationFrame: false\n      // postDrawFn: []\n    };\n    this._components = {};\n  }\n\n  configure (attrs) {\n    let config = this._config;\n    this._config = {\n      ...config,\n      ...attrs\n    };\n  }\n\n  getNode () {\n    return this._components['root-wraper'] && this._components['root-wraper'].node;\n  }\n\n  _requestDraw() {\n    if (!this._config.requestedAnimationFrame) {\n      this._draw();\n      this._config.requestedAnimationFrame = true;\n    }\n  }\n\n  _drawFrame () {\n    // code to initate the constant frame\n  }\n\n  _draw () {\n    if (!this._config.frameDrawn) {\n      this._drawFrame();\n    }\n    // for (let i = 0, l = this._config.postDrawFn.length; i < l; i++) {\n    //   this._config.postDrawFn[i]();\n    // }\n  }\n\n  // afterDraw(cb) {\n  //   this._config.postDrawFn.push(cb);\n  // }\n};\n\n//# sourceURL=webpack:///./src/components/base.js?");

/***/ }),

/***/ "./src/components/list-item.js":
/*!*************************************!*\
  !*** ./src/components/list-item.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/components/base.js\");\n\n\n\nclass ListItem extends _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n  constructor(attrs) {\n    super();\n    this._setDefaultConfig();\n    this.configure(attrs);\n    console.log(attrs);\n    this._requestDraw();\n  }\n\n  _setDefaultConfig() {\n    super._setDefaultConfig();\n    // this._config.text = '';\n  }\n\n  _drawFrame() {\n    let itemWraper = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item-wraper',\n        draggable: 'true'\n      }),\n      item = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item'\n      }),\n      itemText = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item-text'\n      }, this._config.text),\n      btnEdit = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn right btn-edit',\n        href: '#!'\n      }),\n      icoEdit = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('img', {\n        class: 'ico-edit',\n        src: 'assets/pencil.png',\n        width: '10px',\n        height: '10px'\n      });\n\n    btnEdit.node.addEventListener('click', function () {\n      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])(itemText, {\n        'contenteditable': 'true'\n      });\n      itemText.node.focus();\n    });\n\n    itemText.node.addEventListener('keydown', (e) => {\n      if (e.keyCode === 13) {\n        e.preventDefault();\n        if (itemText.node.value !== '') {\n          this._config.text = itemText.node.value;\n          Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])(itemText, {\n            'contenteditable': 'false'\n          }, this._config.text);\n        }\n      }\n    });\n\n    btnEdit.node.appendChild(icoEdit.node);\n    item.node.appendChild(itemText.node);\n    item.node.appendChild(btnEdit.node);\n    itemWraper.node.appendChild(item.node);\n    this._components['root-wraper'] = itemWraper;\n    this._components['root'] = item;\n    this._components['inp-edit'] = itemText;\n    this._components['item-text'] = itemText;\n  }\n\n  _draw() {\n    super._draw();\n  }\n}\n\n//# sourceURL=webpack:///./src/components/list-item.js?");

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/components/base.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ \"./src/components/list-item.js\");\n\n\n\n\nclass List extends _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(parent, beforeElem) {\n    super();\n    this._setDefaultConfig(parent, beforeElem);\n    this._requestDraw();\n  }\n\n  _setDefaultConfig(parent, beforeElem) {\n    super._setDefaultConfig();\n    this._config.title = 'Enter title here';\n    this._config.parent = parent;\n    this._config.beforeElem = beforeElem;\n    this._listItems = [];\n  }\n\n  _drawFrame() {\n    this._config.frameDrawn = true;\n    let listWraper = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'list-wraper'\n      }),\n      list = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'list'\n      }),\n      listHeader = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'header'\n      }),\n      inpTitle = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('input', {\n        class: 'inp-transparent inp-title',\n        value: 'Enter title here...'\n      }),\n      btnMenu = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn-more',\n        href: '#!'\n      }, '···'),\n      itemsContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'items-container'\n      }),\n      inpContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'input-container'\n      }),\n      txtNoteContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'txt-note-container'\n      }),\n      inpAddCard = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('input', {\n        class: 'inp-transparent txt-note',\n        placeholder: '＋ Add another card',\n        type: 'text'\n      }),\n      saveBtnContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'btn-save-container'\n      }),\n      btnSave = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn btn-save'\n      }),\n      img = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('img', {\n        src: 'assets/floppy_disk.png',\n        width: '20px',\n        height: '20px'\n      });\n\n    listHeader.node.appendChild(inpTitle.node);\n    listHeader.node.appendChild(btnMenu.node);\n    list.node.appendChild(listHeader.node);\n    list.node.appendChild(itemsContainer.node);\n    txtNoteContainer.node.appendChild(inpAddCard.node);\n    inpContainer.node.appendChild(txtNoteContainer.node);\n    btnSave.node.appendChild(img.node);\n    saveBtnContainer.node.appendChild(btnSave.node);\n    inpContainer.node.appendChild(saveBtnContainer.node);\n    list.node.appendChild(inpContainer.node);\n    listWraper.node.appendChild(list.node);\n\n    this._config.parent.insertBefore(listWraper.node, this._config.beforeElem);\n\n    inpAddCard.node.addEventListener('keyup', (e) => {\n      if (e.keyCode === 13 && inpAddCard.node.value !== '') {\n        let item = new _list_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          text: inpAddCard.node.value\n        });\n        this.addItem(item);\n        inpAddCard.node.value = '';\n      }\n    });\n\n    this._components['root-wraper'] = listWraper;\n    this._components['root'] = list;\n    this._components['inp-title'] = inpTitle;\n    this._components['items-container'] = itemsContainer;\n  }\n\n  addItem(listItem) {\n    this._components['items-container'].node.appendChild(listItem.getNode());\n    this._listItems.push(listItem);\n  }\n\n  _draw() {\n    super._draw();\n  }\n}\n\n//# sourceURL=webpack:///./src/components/list.js?");

/***/ }),

/***/ "./src/components/utils/helpers.js":
/*!*****************************************!*\
  !*** ./src/components/utils/helpers.js ***!
  \*****************************************/
/*! exports provided: doc, UNDEF, createHTMLElement, moveCursorToEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doc\", function() { return doc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNDEF\", function() { return UNDEF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHTMLElement\", function() { return createHTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveCursorToEnd\", function() { return moveCursorToEnd; });\nconst doc = document;\nlet UNDEF;\n\nfunction createHTMLElement(elem, attrs, text) {\n  let node, attrNames, el = elem;\n\n  if (typeof el === 'string') {\n    node = doc.createElement(el);\n    el = {\n      attrs: {},\n      node\n    }\n  } else {\n    node = el.node;\n  }\n  attrNames = Object.keys(attrs);\n  for (let i = 0, l = attrNames.length; i < l; i++) {\n    if (el.attrs[attrNames[i]] && el.attrs[attrNames[i]] === attrs[attrNames[i]]) {\n      // no need to change it\n    } else {\n      el.attrs[attrNames[i]] = attrs[attrNames[i]];\n      node.setAttribute(attrNames[i], attrs[attrNames[i]]);\n    }\n  }\n  if (text !== UNDEF) {\n    node.textContent = text;\n  }\n  return el;\n}\n\n// ref: https://css-tricks.com/snippets/javascript/move-cursor-to-end-of-input/\nfunction moveCursorToEnd(el) {\n  if (typeof el.selectionStart == \"number\") {\n      el.selectionStart = el.selectionEnd = el.value.length;\n  } else if (typeof el.createTextRange != \"undefined\") {\n      el.focus();\n      let range = el.createTextRange();\n      range.collapse(false);\n      range.select();\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/components/utils/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list */ \"./src/components/list.js\");\n/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list-item */ \"./src/components/list-item.js\");\n\n\n\n\nconst rootNode = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('app'),\n  beforeElem = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('add-new-list'),\n  btnAddList = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('btn-add-list');\n\nlet listObjects = [];\n\nbtnAddList.addEventListener('click', () => {\n  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 2) * 284) + 'px');\n  // let item = new ListItem();\n  // item.configure({ text: 'Hi this is Siddhartha' });\n  let list = new _components_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rootNode, beforeElem);\n  // list.addItem(item);\n  listObjects.push(list);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\nclass Base {\n\n  _setDefaultConfig () {\n    this._config = {\n      frameDrawn: false,\n      requestedAnimationFrame: false\n      // postDrawFn: []\n    };\n    this._components = {};\n  }\n\n  configure (attrs) {\n    let config = this._config;\n    this._config = {\n      ...config,\n      ...attrs\n    };\n  }\n\n  getConfig (name) {\n    return this._config[name];\n  }\n\n  getNode () {\n    return this._components['root-wraper'] && this._components['root-wraper'].node;\n  }\n\n  getIdx () {\n    return this._config.idx;\n  }\n\n  setIdx(idx) {\n    this._config.idx = idx;\n  }\n\n  setParentComponent (component) {\n    this._parentComponent = component;\n  }\n\n  getParentComponent () {\n    return this._parentComponent;\n  }\n\n  _requestDraw() {\n    if (!this._config.requestedAnimationFrame) {\n      this._draw();\n      this._config.requestedAnimationFrame = true;\n    }\n  }\n\n  _drawFrame () {\n    // code to initate the constant frame\n  }\n\n  _draw () {\n    if (!this._config.frameDrawn) {\n      this._drawFrame();\n    }\n    // for (let i = 0, l = this._config.postDrawFn.length; i < l; i++) {\n    //   this._config.postDrawFn[i]();\n    // }\n  }\n\n  dispose () {\n    if (this._components['root-wraper']) {\n      this._components['root-wraper'].node.parentNode.removeChild(this._components['root-wraper'].node);\n      this._disposed = true;\n      this._components = {};\n      this._config = {};\n    }\n  }\n\n  // afterDraw(cb) {\n  //   this._config.postDrawFn.push(cb);\n  // }\n};\n\n//# sourceURL=webpack:///./src/components/base.js?");

/***/ }),

/***/ "./src/components/list-item.js":
/*!*************************************!*\
  !*** ./src/components/list-item.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/components/base.js\");\n\n\n\nclass ListItem extends _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n  constructor(attrs) {\n    super();\n    this._setDefaultConfig();\n    this.configure(attrs);\n    this._requestDraw();\n  }\n\n  _setDefaultConfig() {\n    super._setDefaultConfig();\n    // this._config.text = '';\n  }\n\n  _drawFrame() {\n    let itemWraper = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item-wraper',\n        draggable: 'true'\n      }),\n      item = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item'\n      }),\n      itemText = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'item-text'\n      }, this._config.text),\n      btnEdit = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn right btn-edit',\n        href: '#!'\n      }),\n      icoEdit = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('img', {\n        class: 'ico-edit',\n        src: 'assets/pencil.png',\n        width: '10px',\n        height: '10px'\n      });\n\n    itemWraper.node.addEventListener('dragstart', (ev) => {\n      ev.dataTransfer.setData('currentIdx', this.getIdx());\n      ev.dataTransfer.setData('currentParentIdx', this.getParentComponent().getIdx());\n    });\n\n    btnEdit.node.addEventListener('click', function () {\n      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])(itemText, {\n        'contenteditable': 'true'\n      });\n      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"moveCursorToEnd\"])(itemText.node);\n    });\n\n    itemText.node.addEventListener('keydown', (e) => {\n      if (e.keyCode === 13) {\n        e.preventDefault();\n        if (itemText.node.textContent !== '') {\n          this._config.text = itemText.node.textContent;\n          Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])(itemText, {\n            'contenteditable': 'false'\n          }, this._config.text);\n        } else {\n          this.dispose();\n        }\n      }\n    });\n\n    btnEdit.node.appendChild(icoEdit.node);\n    item.node.appendChild(itemText.node);\n    item.node.appendChild(btnEdit.node);\n    itemWraper.node.appendChild(item.node);\n    this._components['root-wraper'] = itemWraper;\n    this._components['root'] = item;\n    this._components['inp-edit'] = itemText;\n    this._components['item-text'] = itemText;\n  }\n\n  _draw() {\n    super._draw();\n  }\n\n  serialize () {\n    return {\n      text: this._config.text\n    };\n  }\n}\n\n//# sourceURL=webpack:///./src/components/list-item.js?");

/***/ }),

/***/ "./src/components/list.js":
/*!********************************!*\
  !*** ./src/components/list.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/components/base.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-item */ \"./src/components/list-item.js\");\n\n\n\n\nclass List extends _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(parent, beforeElem) {\n    super();\n    this._setDefaultConfig(parent, beforeElem);\n    this._requestDraw();\n  }\n\n  _setDefaultConfig(parent, beforeElem) {\n    super._setDefaultConfig();\n    this._config.title = 'Enter title here';\n    this._config.parent = parent;\n    this._config.beforeElem = beforeElem;\n    this._listItems = [];\n  }\n\n  _drawFrame() {\n    this._config.frameDrawn = true;\n    let listWraper = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'list-wraper'\n      }),\n      list = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'list'\n      }),\n      listHeader = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'header'\n      }),\n      inpTitle = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('input', {\n        class: 'inp-transparent inp-title',\n        value: 'Enter title here...'\n      }),\n      btnMenu = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn-more',\n        href: '#!'\n      }, '···'),\n      itemsContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'items-container',\n        style: 'max-height:' + Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getFromEnv\"])('ic-height') + 'px'\n      }),\n      inpContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'input-container'\n      }),\n      txtNoteContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'txt-note-container'\n      }),\n      inpAddCard = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('input', {\n        class: 'inp-transparent txt-note',\n        placeholder: '＋ Add another card',\n        type: 'text'\n      }),\n      saveBtnContainer = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('div', {\n        class: 'btn-save-container'\n      }),\n      btnSave = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('a', {\n        class: 'btn btn-save'\n      }),\n      img = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"createHTMLElement\"])('img', {\n        src: 'assets/floppy_disk.png',\n        width: '20px',\n        height: '20px'\n      });\n\n    listWraper.node.addEventListener('dragover', (e) => {\n      e.preventDefault();\n      e.dataTransfer.dropEffect = \"move\";\n    })\n    listWraper.node.addEventListener('drop', (e) => {\n      let currentIdx = e.dataTransfer.getData('currentIdx'),\n        currentParentIdx = e.dataTransfer.getData('currentParentIdx'),\n        item = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getFromEnv\"])('lists')[currentParentIdx].getItem(currentIdx),\n        txt = item.getConfig('text');\n      this.saveNote(txt);\n      item.dispose();\n    });\n\n    btnSave.node.addEventListener('click', () => {\n      this.saveNote(inpAddCard.node.value);\n      inpAddCard.node.value = '';\n    });\n\n    listHeader.node.appendChild(inpTitle.node);\n    listHeader.node.appendChild(btnMenu.node);\n    list.node.appendChild(listHeader.node);\n    list.node.appendChild(itemsContainer.node);\n    txtNoteContainer.node.appendChild(inpAddCard.node);\n    inpContainer.node.appendChild(txtNoteContainer.node);\n    btnSave.node.appendChild(img.node);\n    saveBtnContainer.node.appendChild(btnSave.node);\n    inpContainer.node.appendChild(saveBtnContainer.node);\n    list.node.appendChild(inpContainer.node);\n    listWraper.node.appendChild(list.node);\n\n    this._config.parent.insertBefore(listWraper.node, this._config.beforeElem);\n\n    inpAddCard.node.addEventListener('keyup', (e) => {\n      if (e.keyCode === 13 && inpAddCard.node.value !== '') {\n        this.saveNote(inpAddCard.node.value);\n        inpAddCard.node.value = '';\n      }\n    });\n\n    this._components['root-wraper'] = listWraper;\n    this._components['root'] = list;\n    this._components['inp-title'] = inpTitle;\n    this._components['items-container'] = itemsContainer;\n    this._components['inp-add-card'] = inpAddCard;\n  }\n\n  saveNote(txtNote) {\n    let itemsContainer = this._components['items-container'],\n      item = new _list_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        text: txtNote\n      });\n    this.addItem(item);\n    itemsContainer.node.scrollTop = itemsContainer.node.scrollHeight;\n  }\n\n  addItem(listItem) {\n    this._components['items-container'].node.appendChild(listItem.getNode());\n    listItem.setIdx(this._listItems.push(listItem) - 1);\n    listItem.setParentComponent(this);\n  }\n\n  getItem (idx) {\n    return this._listItems[idx];\n  }\n\n  _draw() {\n    super._draw();\n  }\n\n  serialize () {\n    return {\n      title: this._config.title,\n      items: this._listItems.filter(item => !item._disposed).map(item => item.serialize())\n    };\n  }\n}\n\n//# sourceURL=webpack:///./src/components/list.js?");

/***/ }),

/***/ "./src/components/utils/helpers.js":
/*!*****************************************!*\
  !*** ./src/components/utils/helpers.js ***!
  \*****************************************/
/*! exports provided: doc, UNDEF, createHTMLElement, moveCursorToEnd, getFromEnv, setToEnv, saveToLocalStorage, restoreFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"doc\", function() { return doc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNDEF\", function() { return UNDEF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHTMLElement\", function() { return createHTMLElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveCursorToEnd\", function() { return moveCursorToEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFromEnv\", function() { return getFromEnv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToEnv\", function() { return setToEnv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveToLocalStorage\", function() { return saveToLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restoreFromLocalStorage\", function() { return restoreFromLocalStorage; });\nconst doc = document;\nlet UNDEF, _env = {};\n\nfunction setToEnv (name, value) {\n  _env[name] = value;\n}\n\nfunction getFromEnv (name) {\n  return _env[name];\n}\n\nfunction createHTMLElement(elem, attrs, text) {\n  let node, attrNames, el = elem;\n\n  if (typeof el === 'string') {\n    node = doc.createElement(el);\n    el = {\n      attrs: {},\n      node\n    }\n  } else {\n    node = el.node;\n  }\n  attrNames = Object.keys(attrs);\n  for (let i = 0, l = attrNames.length; i < l; i++) {\n    if (el.attrs[attrNames[i]] && el.attrs[attrNames[i]] === attrs[attrNames[i]]) {\n      // no need to change it\n    } else {\n      el.attrs[attrNames[i]] = attrs[attrNames[i]];\n      node.setAttribute(attrNames[i], attrs[attrNames[i]]);\n    }\n  }\n  if (text !== UNDEF) {\n    node.textContent = text;\n  }\n  return el;\n}\n\n// ref: https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity/3866442#3866442\nfunction moveCursorToEnd(contentEditableElement)\n{\n    var range,selection;\n    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+\n    {\n        range = document.createRange();//Create a range (a range is a like the selection but invisible)\n        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range\n        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start\n        selection = window.getSelection();//get the selection object (allows you to change selection)\n        selection.removeAllRanges();//remove any selections already made\n        selection.addRange(range);//make the range you have just created the visible selection\n    }\n    else if(document.selection)//IE 8 and lower\n    { \n        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)\n        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range\n        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start\n        range.select();//Select the range (make it the visible selection\n    }\n}\n\nfunction saveToLocalStorage () {\n  let lists = getFromEnv('lists');\n  if (lists) {\n    window.localStorage.setItem('dumpedData', JSON.stringify(lists.filter(list => !list._disposed).map(list => list.serialize())));\n  }\n}\n\nfunction restoreFromLocalStorage () {\n  let dumpedData = window.localStorage.getItem('dumpedData');\n  return dumpedData && JSON.parse(dumpedData);\n}\n\n\n\n//# sourceURL=webpack:///./src/components/utils/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/utils/helpers */ \"./src/components/utils/helpers.js\");\n/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/list */ \"./src/components/list.js\");\n\n\n\nconst rootNode = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('app'),\n  beforeElem = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('add-new-list'),\n  btnAddList = _components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"doc\"].getElementById('btn-add-list');\n\nlet listObjects = [];\n\nObject(_components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setToEnv\"])('lists', listObjects);\n\nbtnAddList.addEventListener('click', () => {\n  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 2) * 284) + 'px');\n  if (listObjects.length === 0) {\n    btnAddList.textContent = '＋ Add Another list';\n  }\n  let list = new _components_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rootNode, beforeElem);\n  list.setIdx(listObjects.push(list) - 1);\n});\n\nwindow.addEventListener('DOMContentLoaded', function() {\n  let initData = Object(_components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"restoreFromLocalStorage\"])(), list;\n  Object(_components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setToEnv\"])('ic-height', window.innerHeight * 0.7);\n  if (initData) {\n    for (let lIdx = 0, ll = initData.length; lIdx < ll; lIdx++) {\n      list = new _components_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"](rootNode, beforeElem, initData[lIdx].title);\n      for (let i = 0, l = initData[lIdx].items.length; i < l; i++) {\n        list.saveNote(initData[lIdx].items[i].text);\n      }\n      list.setIdx(listObjects.push(list) - 1);\n    }\n  }\n  rootNode.setAttribute('style', 'width:' + ((listObjects.length + 1) * 284) + 'px');\n});\n\nwindow.addEventListener('beforeunload', function () {\n  Object(_components_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"saveToLocalStorage\"])();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
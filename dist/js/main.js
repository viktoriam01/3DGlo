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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_mainForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mainForm */ \"./modules/mainForm.js\");\n/* harmony import */ var _modules_footerForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/footerForm */ \"./modules/footerForm.js\");\n/* harmony import */ var _modules_modalForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modalForm */ \"./modules/modalForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 march 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_mainForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_footerForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_modalForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n\r\n   // const square = document.querySelector('.calc-square')\r\n   // const count = document.querySelector('.calc-count')\r\n   // const day = document.querySelector('.calc-day')\r\n\r\n   // square.addEventListener('input', (e) => {\r\n   //    e.target.value = e.target.value.replace(/\\D+/, '')\r\n   // })\r\n   //  count.addEventListener('input', (e) => {\r\n   //    e.target.value = e.target.value.replace(/\\D+/, '')\r\n   // })\r\n   //  day.addEventListener('input', (e) => {\r\n   //    e.target.value = e.target.value.replace(/\\D+/, '')\r\n   // })\r\n\r\n   const calcItems = document.querySelectorAll('.calc-item')\r\n  \r\n   calcItems.forEach(item => {\r\n      if (!item.classList.contains('calc-type')) {\r\n         item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/, '')\r\n         })\r\n      }\r\n   })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/footerForm.js":
/*!*******************************!*\
  !*** ./modules/footerForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footerForm = () => {\r\n  \r\n  const form = document.getElementById('form2')\r\n  const formName = document.getElementById('form2-name')\r\n  const formEmail = document.getElementById('form2-email')\r\n  const formPhone = document.getElementById('form2-phone')\r\n\r\n\r\n  form.addEventListener('submit', (e) => {\r\n     e.preventDefault()\r\n    let isError = false\r\n\r\n    if(!/[^а-яА-я\\s\\-]/g.test(formName.value) && formName.value !=='') {\r\n       alert('кириллица')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[^\\w\\@\\-\\.\\!\\~\\*\\']+@([\\w]+\\.)+[\\w]+/gi.test(formEmail.value) && formEmail.value !=='') {\r\n       alert('емейл')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[^\\d\\-\\(\\)]/g.test(formPhone.value) && formPhone.value !=='') {\r\n       alert('телефон')\r\n    } else {\r\n      isError = true\r\n    }\r\n  \r\n    if(!isError) alert('данные отправлены')\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerForm);\n\n//# sourceURL=webpack:///./modules/footerForm.js?");

/***/ }),

/***/ "./modules/mainForm.js":
/*!*****************************!*\
  !*** ./modules/mainForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainForm = () => {\r\n\r\n  const form = document.getElementById('form1')\r\n  const formName = document.getElementById('form1-name')\r\n  const formEmail = document.getElementById('form1-email')\r\n  const formPhone = document.getElementById('form1-phone')\r\n  const formMessage = document.getElementById('form1-message')\r\n\r\n  form.addEventListener('submit', (e) => {\r\n     e.preventDefault()\r\n    let isError = false\r\n\r\n    if(!/[^а-яА-я\\s\\-]/g.test(formName.value) && formName.value !=='') {\r\n       alert('кириллица')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[^\\w\\@\\-\\.\\!\\~\\*\\']+@([\\w]+\\.)+[\\w]+/gi.test(formEmail.value) && formEmail.value !=='') {\r\n       alert('емейл')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[^\\d\\-\\(\\)]/g.test(formPhone.value) && formPhone.value !=='') {\r\n       alert('телефон')\r\n    } else {\r\n      isError = true\r\n    }\r\n  \r\n    if(!isError) alert('данные отправлены')\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainForm);\n\n//# sourceURL=webpack:///./modules/mainForm.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menu = () => {\r\n\r\n   const menuBtn = document.querySelector('.menu')\r\n   const menu = document.querySelector('menu')\r\n   const closeBtn = menu.querySelector('.close-btn')\r\n   const menuItems = menu.querySelectorAll('ul>li>a')\r\n   \r\n   const handleMenu = () => menu.classList.toggle('active-menu')\r\n\r\n      // if(!menu.style.transform) {\r\n      //    menu.style.transform = `translateX(0)`\r\n      // } else {\r\n      //    menu.style.transform = ``\r\n      // }\r\n        \r\n\r\n   menuBtn.addEventListener('click', handleMenu)\r\n\r\n   closeBtn.addEventListener('click', handleMenu)\r\n\r\n   menuItems.forEach(item => item.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n   const modal = document.querySelector('.popup')\r\n   const buttons = document.querySelectorAll('.popup-btn')\r\n   const popupClose = modal.querySelector('.popup-close')\r\n   const content = modal.querySelector('.popup-content')\r\n   // console.log(content.getBoundingClientRect());\r\n   // console.log(document.documentElement.clientWidth);\r\n   \r\n    \r\n   buttons.forEach(btn => {\r\n\r\n      btn.addEventListener('click', () => {\r\n         modal.style.display = 'block'\r\n\r\n         if (document.documentElement.clientWidth >= 768) {\r\n         content.style.transform = `translateY(-150%)` \r\n         flyAnimate() \r\n         } \r\n      })\r\n   })\r\n\r\n   const flyAnimate = () => {\r\n      \r\n      if (!content.style.transform) {\r\n         content.style.transform = `translateY(0)`\r\n      }  else {\r\n         content.style.transform = ''\r\n      }\r\n   }\r\n\r\n    \r\n   popupClose.addEventListener('click', () => {\r\n      modal.style.display = 'none'\r\n   })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/modalForm.js":
/*!******************************!*\
  !*** ./modules/modalForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalForm = () => {\r\n  \r\n\r\n  const form = document.getElementById('form3')\r\n  const formName = document.getElementById('form3-name')\r\n  const formEmail = document.getElementById('form3-email')\r\n  const formPhone = document.getElementById('form3-phone')\r\n\r\n\r\n  form.addEventListener('submit', (e) => {\r\n     e.preventDefault()\r\n    let isError = false\r\n\r\n    if(!/[^а-яА-я\\s\\-]/g.test(formName.value) && formName.value !=='') {\r\n       alert('кириллица')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[^\\w\\@\\-\\.\\!\\~\\*\\']+@([\\w]+\\.)+[\\w]+/gi.test(formEmail.value) && formEmail.value !=='') {\r\n       alert('емейл')\r\n    } else {\r\n      isError = true\r\n    }\r\n\r\n    if(!/[^\\d\\-\\(\\)]/g.test(formPhone.value) && formPhone.value !=='') {\r\n       alert('телефон')\r\n    } else {\r\n      isError = true\r\n    }\r\n  \r\n    if(!isError) alert('данные отправлены')\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalForm);\n\n//# sourceURL=webpack:///./modules/modalForm.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n  const timer = (deadline) => {\r\n      \r\n      const timerHour = document.getElementById('timer-hours')\r\n      const timerMinutes = document.getElementById('timer-minutes')\r\n      const timerSeconds = document.getElementById('timer-seconds')\r\n      const timerAction = document.querySelector('.timer-action')\r\n \r\n     const getTimeRemaining = () => {\r\n         \r\n         let dateStop = new Date(deadline).getTime()\r\n         let dateNow = new Date().getTime()\r\n         let timeRemaining = (dateStop - dateNow) / 1000\r\n         let hours = Math.floor(timeRemaining / 60 / 60)\r\n         let minutes = Math.floor((timeRemaining / 60) % 60)\r\n         let seconds = Math.floor(timeRemaining % 60)\r\n         \r\n         return { timeRemaining, hours, minutes, seconds }\r\n         \r\n     }\r\n\r\n      const updateClock = (interval) => {\r\n                             \r\n         let getTime = getTimeRemaining()  \r\n\r\n         if (getTime.timeRemaining <= 0) {\r\n            timerHour.textContent = \"00\"\r\n            timerMinutes.textContent = \"00\"\r\n            timerSeconds.textContent = \"00\"\r\n            timerAction.textContent = \"На данный момент акция закончилась...\"\r\n            clearInterval(interval)\r\n         } else {\r\n         \r\n         timerHour.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours\r\n         timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes\r\n         timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds\r\n         }\r\n      }\r\n      \r\n      const showTime = () => {\r\n            \r\n            let interval\r\n            interval = setInterval(updateClock, 1000, interval)\r\n            \r\n      }\r\n      updateClock()\r\n      showTime()\r\n}   \r\n   \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
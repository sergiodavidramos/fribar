module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carrousel.js":
/*!*********************************!*\
  !*** ./components/Carrousel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\Carrousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "rev_slider_5_1_wrapper",
    className: "rev_slider_wrapper fullscreen-container",
    "data-alias": "demo_shop_trendy",
    "data-source": "gallery",
    style: {
      background: "transparent",
      padding: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "rev_slider_5_1",
    className: "rev_slider fullscreenbanner",
    style: {
      "display": "block"
    },
    "data-version": "5.4.8.1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("li", {
    "data-index": "rs-11",
    "data-transition": "fade",
    "data-slotamount": "default",
    "data-hideafterloop": "0",
    "data-hideslideonmobile": "off",
    "data-easein": "default",
    "data-easeout": "default",
    "data-masterspeed": "1400",
    "data-thumb": "/img/demo_shop_trendy/images/100x50_46e75-brk_slide-1.jpg",
    "data-rotate": "0",
    "data-saveperformance": "off",
    "data-title": "Slide",
    "data-param1": "",
    "data-param2": "",
    "data-param3": "",
    "data-param4": "",
    "data-param5": "",
    "data-param6": "",
    "data-param7": "",
    "data-param8": "",
    "data-param9": "",
    "data-param10": "",
    "data-description": "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/46e75-brk_slide-1.jpg",
    alt: "",
    "data-bgposition": "center center",
    "data-bgfit": "cover",
    "data-bgrepeat": "no-repeat",
    "data-bgparallax": "off",
    className: "rev-slidebg",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "tp-caption rev_group",
    id: "slide-11-layer-27",
    "data-x": "['left','left','right','right']",
    "data-hoffset": "['15','15','15','15']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['145','125','174','402']",
    "data-width": "['685','551','385','282']",
    "data-height": "['196','170','123','89']",
    "data-whitespace": "normal",
    "data-type": "group",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "11",
      "min-width": "685px",
      "max-width": "685px",
      "max-width": "196px",
      "max-width": "196px",
      "white-space": "normal",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      "color": "#ffffff",
      "letter-spacing": "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tp-caption",
    id: "slide-11-layer-11",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['352','284','194','149']",
    "data-y": "['middle','top','top','top']",
    "data-voffset": "['-40','17','9','8']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "image",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power2.easeOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "12"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/805f9-brk_slide_element-3.png",
    alt: "",
    "data-ww": "['219px','180px','140px','100px']",
    "data-hh": "['77px','63px','49px','35px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "tp-caption",
    id: "slide-11-layer-9",
    "data-x": "['left','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['0','0','0','0']",
    "data-fontsize": "['72','60','40','30']",
    "data-lineheight": "['78','68','50','36']",
    "data-width": "['682','530','358','271']",
    "data-height": "['none','137','104','73']",
    "data-whitespace": "normal",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;\",\"mask\":\"x:0px;y:[100%];s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power2.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['center','center','center','center']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "13",
      "min-width": "682px",
      "max-width": "682px",
      " white-space": "normal",
      " font-size": "72px",
      "line-height": "78px",
      "font-weight": "300",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Montserrat",
      "text-transform": "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "\" \" Save\"", __jsx("span", {
    style: {
      color: "#3e2acd",
      "font-weight": "200",
      "margin-left": "35px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, "50%"), __jsx("div", {
    style: {
      "font-weight": "700",
      "font-family": "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, "only this week"))), __jsx("div", {
    className: "tp-caption rev-brk-brands rev_group",
    id: "slide-11-layer-24",
    "data-x": "['left','left','right','center']",
    "data-hoffset": "['205','158','83','0']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['620','469','475','504']",
    "data-width": "['252','252','252','193']",
    "data-height": "['83','83','83','70']",
    "data-whitespace": "nowrap",
    "data-type": "group",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "14",
      "min-width": "252px",
      "max-width": "252px",
      "max-width": "83px",
      "max-width": "83px",
      "white-space": "nowrap",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#ffffff",
      "letter-spacing": "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "tp-caption",
    href: "https://1.envato.market/Bd5V9",
    target: "_blank",
    id: "slide-11-layer-25",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['0','0','0','0']",
    "data-fontsize": "['20','20','20','16']",
    "data-lineheight": "['22','22','22','16']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-actions": "",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":800,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":800,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"},{\"frame\":\"hover\",\"speed\":\"0\",\"ease\":\"Linear.easeNone\",\"to\":\"o:1;rX:0;rY:0;rZ:0;z:0;\",\"style\":\"c:rgb(0,122,255);\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[20,20,20,19]",
    "data-paddingright": "[20,20,20,18]",
    "data-paddingbottom": "[20,20,20,19]",
    "data-paddingleft": "[20,20,20,18]",
    style: {
      "z-index": "15",
      "white-space": "nowrap",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#2775ff",
      "letter-spacing": "0px",
      "font-family": "Open Sans",
      "background-color": "rgb(255,255,255)",
      "border-radius": "40px 40px 40px 40px",
      cursor: "pointer",
      "text-decoration": "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-shopping-basket",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }), " "), __jsx("div", {
    className: "tp-caption",
    id: "slide-11-layer-17",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['93','93','93','78']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['-11','-11','-11','-11']",
    "data-fontsize": "['28','28','28','20']",
    "data-lineheight": "['30','30','30','24']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "16",
      "white-space": "nowrap",
      "font-size": "28px",
      "line-height": "30px",
      "font-weight": "700",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Open Sans",
      "text-transform": "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }, "Buy now", " "), __jsx("div", {
    className: "tp-caption",
    id: "slide-11-layer-18",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['94','94','94','79']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['17','17','17','12']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-responsive": "off",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "17",
      "white-space": "nowrap",
      "font-size": "16px",
      "line-height": "18px",
      "font-weight": " 700",
      color: "#69adff",
      "letter-spacing": "0px",
      "font-family": "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa-icon-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 19
    }
  }), " berserk", " ")), __jsx("div", {
    className: "tp-caption rev_group",
    id: "slide-11-layer-26",
    "data-x": "['left','left','right','left']",
    "data-hoffset": "['195','173','97','15']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['365','300','303','405']",
    "data-width": "['270','224','224','131']",
    "data-height": "['217','168','168','103']",
    "data-whitespace": "nowrap",
    "data-type": "group",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "18",
      "min-width": "270px",
      "max-width": "270px",
      "max-width": "217px",
      " max-width": " 217px",
      "white-space": "nowrap",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#ffffff",
      "letter-spacing": "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tp-caption",
    id: "slide-11-layer-13",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['0','0','0','0']",
    "data-fontsize": "['136','100','100','50']",
    "data-lineheight": "['140','110','110','60']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"split\":\"chars\",\"splitdelay\":0.05,\"speed\":2000,\"split_direction\":\"forward\",\"frame\":\"0\",\"from\":\"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power4.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "19",
      "white-space": "nowrap",
      "font-size": "136px",
      "line-height": "140px",
      "font-weight": "700",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Montserrat"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  }, "$59", " "), __jsx("div", {
    className: "tp-caption",
    id: "slide-11-layer-14",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['155','118','118','65']",
    "data-fontsize": "['40','30','30','18']",
    "data-lineheight": "['42','34','34','24']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;\",\"mask\":\"x:0px;y:[100%];s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power2.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "20",
      "white-space": "nowrap",
      "font-size": "40px",
      "line-height": "42px",
      "font-weight": "300",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Open Sans",
      "text-transform": "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 17
    }
  }, "For ", __jsx("span", {
    style: {
      color: "#b88eff"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 23
    }
  }, "7 Days"))), __jsx("div", {
    className: "tp-caption tp-shape tp-shapewrapper",
    id: "slide-11-layer-1",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['0','0','0','0']",
    "data-width": "full",
    "data-height": "full",
    "data-whitespace": "nowrap",
    "data-type": "shape",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-responsive": "off",
    "data-frames": "[{\"delay\":10,\"speed\":1500,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1500,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "5",
      "background": "linear-gradient(50deg, rgba(15,90,224,0.92) 0%, rgba(116,0,186,0.92) 100%)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "tp-caption tp-resizeme",
    id: "slide-11-layer-20",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['bottom','bottom','bottom','bottom']",
    "data-voffset": "['-19','-19','-19','-19']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1500,\"frame\":\"0\",\"to\":\"o:1;\",\"ease\":\"Power2.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "6"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/940ba-brk_slide_element-1.png",
    alt: "",
    "data-ww": "['100%','100%','100%','100%']",
    "data-hh": "",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 17
    }
  }), " "), __jsx("div", {
    className: "tp-caption tp-resizeme rs-parallaxlevel-3",
    id: "slide-11-layer-2",
    "data-x": "['right','right','right','right']",
    "data-hoffset": "['-491','-491','-491','-491']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['0','0','0','0']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "7"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/5b275-brk_slide_element-4.png",
    alt: "",
    "data-ww": "['686auto','686auto','686auto','686auto']",
    "data-hh": "['686px','686px','686px','686px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 17
    }
  }), " "), __jsx("div", {
    className: "tp-caption tp-resizeme rs-parallaxlevel-1",
    id: "slide-11-layer-3",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['-318','-318','-318','-318']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['-11','-11','-11','-11']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "8"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/8b295-brk_slide_element-5.png",
    alt: "",
    "data-ww": "['639auto','639auto','639auto','639auto']",
    "data-hh": "['291px','291px','291px','291px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "tp-caption tp-resizeme rs-parallaxlevel-2",
    id: "slide-11-layer-4",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['-147','-147','-147','-147']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['120','120','120','120']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "9"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/e7f74-brk_slide_element-6.png",
    alt: "",
    "data-ww": "['295auto','295auto','295auto','295auto']",
    "data-hh": "['295px','295px','295px','295px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 17
    }
  }), " "), __jsx("div", {
    className: "tp-caption tp-resizeme",
    id: "slide-11-layer-7",
    "data-x": "['right','right','left','center']",
    "data-hoffset": "['30','30','15','0']",
    "data-y": "['middle','middle','top','top']",
    "data-voffset": "['20','20','150','90']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "image",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1500,\"frame\":\"0\",\"from\":\"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "10"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/77913-brk_slide_element-2.png",
    alt: "",
    "data-ww": "['472auto','350px','250px','200px']",
    "data-hh": "['692px','513px','367px','293px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 17
    }
  }))), __jsx("li", {
    "data-index": "rs-101",
    "data-transition": "fade",
    "data-slotamount": "default",
    "data-hideafterloop": "0",
    "data-hideslideonmobile": "off",
    "data-easein": "default",
    "data-easeout": "default",
    "data-masterspeed": "1400",
    "data-thumb": "/img/demo_shop_trendy/images/100x50_1ab07-brk_slide-2.jpg",
    "data-rotate": "0",
    "data-saveperformance": "off",
    "data-title": "Slide",
    "data-param1": "",
    "data-param2": "",
    "data-param3": "",
    "data-param4": "",
    "data-param5": "",
    "data-param6": "",
    "data-param7": "",
    "data-param8": "",
    "data-param9": "",
    "data-param10": "",
    "data-description": "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/1ab07-brk_slide-2.jpg",
    alt: "",
    "data-bgposition": "center center",
    "data-bgfit": "cover",
    "data-bgrepeat": "no-repeat",
    "data-bgparallax": "off",
    className: "rev-slidebg",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "tp-caption rev_group",
    id: "slide-101-layer-27",
    "data-x": "['left','left','right','right']",
    "data-hoffset": "['15','15','15','15']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['145','125','174','402']",
    "data-width": "['685','551','385','282']",
    "data-height": "['196','170','123','89']",
    "data-whitespace": "normal",
    "data-type": "group",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "11",
      "min-width": "685px",
      "max-width": "685px",
      "max-width": "196px",
      "max-width": "196px",
      "white-space": "normal",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#ffffff",
      "letter-spacing": "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tp-caption",
    id: "slide-101-layer-11",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['352','284','194','149']",
    "data-y": "['middle','top','top','top']",
    "data-voffset": "['-40','17','9','8']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "image",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power2.easeOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "12"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/805f9-brk_slide_element-3.png",
    alt: "",
    "data-ww": "['219px','180px','140px','100px']",
    "data-hh": "['77px','63px','49px','35px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 19
    }
  }), " "), __jsx("div", {
    className: "tp-caption",
    id: "slide-101-layer-9",
    "data-x": "['left','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['0','0','0','0']",
    "data-fontsize": "['72','60','40','30']",
    "data-lineheight": "['78','68','50','36']",
    "data-width": "['682','530','358','271']",
    "data-height": "['none','137','104','73']",
    "data-whitespace": "normal",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;\",\"mask\":\"x:0px;y:[100%];s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power2.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['center','center','center','center']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "13",
      "min-width": "682px",
      "max-width": "682px",
      "white-space": "normal",
      "font-size": "72px",
      "line-height": "78px",
      "font-weight": "300",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Montserrat",
      "text-transform": "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 17
    }
  }, "Save", " ", __jsx("span", {
    style: {
      color: "#3e2acd",
      "font-weight": "200",
      "margin-left": "35px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 760,
      columnNumber: 19
    }
  }, "30%"), __jsx("div", {
    style: {
      "font-weight": "700",
      "font-family": "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769,
      columnNumber: 19
    }
  }, "only this week"))), __jsx("div", {
    className: "tp-caption rev-brk-brands rev_group",
    id: "slide-101-layer-24",
    "data-x": "['left','left','right','center']",
    "data-hoffset": "['205','158','83','0']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['620','469','475','504']",
    "data-width": "['252','252','252','193']",
    "data-height": "['83','83','83','70']",
    "data-whitespace": "nowrap",
    "data-type": "group",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "14",
      "min-width": "252px",
      "max-width": "252px",
      "max-width": "83px",
      "max-width": "83px",
      "white-space": "nowrap",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#ffffff",
      "letter-spacing": "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "tp-caption",
    href: "https://1.envato.market/Bd5V9",
    target: "_blank",
    id: "slide-101-layer-25",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['0','0','0','0']",
    "data-fontsize": "['20','20','20','16']",
    "data-lineheight": "['22','22','22','16']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-actions": "",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":800,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":800,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"},{\"frame\":\"hover\",\"speed\":\"0\",\"ease\":\"Linear.easeNone\",\"to\":\"o:1;rX:0;rY:0;rZ:0;z:0;\",\"style\":\"c:rgb(0,122,255);\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[20,20,20,19]",
    "data-paddingright": "[20,20,20,18]",
    "data-paddingbottom": "[20,20,20,19]",
    "data-paddingleft": "[20,20,20,18]",
    style: {
      "z-index": "15",
      "white-space": "nowrap",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#2775ff",
      "letter-spacing": "0px",
      "font-family": "Open Sans",
      "background-color": "rgb(255,255,255)",
      "border-radius": "40px 40px 40px 40px",
      cursor: "pointer",
      "text-decoration": "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-shopping-basket",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 19
    }
  }), " "), __jsx("div", {
    className: "tp-caption",
    id: "slide-101-layer-17",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['93','93','93','78']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['-11','-11','-11','-11']",
    "data-fontsize": "['28','28','28','20']",
    "data-lineheight": "['30','30','30','24']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "16",
      "white-space": "nowrap",
      "font-size": "28px",
      "line-height": "30px",
      "font-weight": "700",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Open Sans",
      "text-transform": "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 856,
      columnNumber: 17
    }
  }, "Buy now", " "), __jsx("div", {
    className: "tp-caption",
    id: "slide-101-layer-18",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['94','94','94','79']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['17','17','17','12']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-responsive": "off",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "17",
      "white-space": "nowrap",
      "font-size": "16px",
      "line-height": "18px",
      "font-weight": "700",
      color: "#69adff",
      "letter-spacing": "0px",
      "font-family": "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa-icon-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 19
    }
  }), " berserk", " ")), __jsx("div", {
    className: "tp-caption rev_group",
    id: "slide-101-layer-26",
    "data-x": "['left','left','right','left']",
    "data-hoffset": "['195','173','97','15']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['365','300','303','405']",
    "data-width": "['270','224','224','131']",
    "data-height": "['217','168','168','103']",
    "data-whitespace": "nowrap",
    "data-type": "group",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "18",
      "min-width": "270px",
      "max-width": "270px",
      "max-width": "217px",
      "max-width": "217px",
      "white-space": "nowrap",
      "font-size": "20px",
      "line-height": "22px",
      "font-weight": "400",
      color: "#ffffff",
      "letter-spacing": "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "tp-caption",
    id: "slide-101-layer-13",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['0','0','0','0']",
    "data-fontsize": "['136','100','100','50']",
    "data-lineheight": "['140','110','110','60']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"split\":\"chars\",\"splitdelay\":0.05,\"speed\":2000,\"split_direction\":\"forward\",\"frame\":\"0\",\"from\":\"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;\",\"mask\":\"x:0px;y:0px;s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power4.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "19",
      "white-space": "nowrap",
      "font-size": "136px",
      "line-height": "140px",
      "font-weight": "700",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Montserrat"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 967,
      columnNumber: 17
    }
  }, "$39"), __jsx("div", {
    className: "tp-caption",
    id: "slide-101-layer-14",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['155','118','118','65']",
    "data-fontsize": "['40','30','30','18']",
    "data-lineheight": "['42','34','34','24']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "text",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":\"+0\",\"speed\":1000,\"frame\":\"0\",\"from\":\"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;\",\"mask\":\"x:0px;y:[100%];s:inherit;e:inherit;\",\"to\":\"o:1;\",\"ease\":\"Power2.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"mask\":\"x:0;y:0;s:inherit;e:inherit;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-margintop": "[0,0,0,0]",
    "data-marginright": "[0,0,0,0]",
    "data-marginbottom": "[0,0,0,0]",
    "data-marginleft": "[0,0,0,0]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "20",
      "white-space": "nowrap",
      "font-size": "40px",
      "line-height": "42px",
      "font-weight": "300",
      color: "#ffffff",
      "letter-spacing": "0px",
      "font-family": "Open Sans",
      "text-transform": "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004,
      columnNumber: 17
    }
  }, "For ", __jsx("span", {
    style: {
      color: "#b88eff"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 23
    }
  }, "7 Days"), " ")), __jsx("div", {
    className: "tp-caption tp-shape tp-shapewrapper",
    id: "slide-101-layer-1",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['0','0','0','0']",
    "data-width": "full",
    "data-height": "full",
    "data-whitespace": "nowrap",
    "data-type": "shape",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-responsive": "off",
    "data-frames": "[{\"delay\":10,\"speed\":1500,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1500,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "5",
      background: "linear-gradient(50deg, rgba(15,90,224,0.92) 0%, rgba(116,0,186,0.92) 100%)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1043,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "tp-caption tp-resizeme",
    id: "slide-101-layer-20",
    "data-x": "['center','center','center','center']",
    "data-hoffset": "['0','0','0','0']",
    "data-y": "['bottom','bottom','bottom','bottom']",
    "data-voffset": "['-19','-19','-19','-19']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1500,\"frame\":\"0\",\"to\":\"o:1;\",\"ease\":\"Power2.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "6"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/940ba-brk_slide_element-1.png",
    alt: "",
    "data-ww": "['100%','100%','100%','100%']",
    "data-hh": "",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "tp-caption tp-resizeme rs-parallaxlevel-3",
    id: "slide-101-layer-2",
    "data-x": "['right','right','right','right']",
    "data-hoffset": "['-491','-491','-491','-491']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['0','0','0','0']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "7"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/5b275-brk_slide_element-4.png",
    alt: "",
    "data-ww": "['686auto','686auto','686auto','686auto']",
    "data-hh": "['686px','686px','686px','686px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "tp-caption tp-resizeme rs-parallaxlevel-1",
    id: "slide-101-layer-3",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['-318','-318','-318','-318']",
    "data-y": "['top','top','top','top']",
    "data-voffset": "['-11','-11','-11','-11']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "8"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/8b295-brk_slide_element-5.png",
    alt: "",
    "data-ww": "['639auto','639auto','639auto','639auto']",
    "data-hh": "['291px','291px','291px','291px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1151,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "tp-caption tp-resizeme rs-parallaxlevel-2",
    id: "slide-101-layer-4",
    "data-x": "['left','left','left','left']",
    "data-hoffset": "['-147','-147','-147','-147']",
    "data-y": "['middle','middle','middle','middle']",
    "data-voffset": "['120','120','120','120']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-visibility": "['on','on','off','off']",
    "data-type": "image",
    "data-basealign": "slide",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1000,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "9"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/e7f74-brk_slide_element-6.png",
    alt: "",
    "data-ww": "['295auto','295auto','295auto','295auto']",
    "data-hh": "['295px','295px','295px','295px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1181,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "tp-caption tp-resizeme",
    id: "slide-101-layer-7",
    "data-x": "['right','right','left','center']",
    "data-hoffset": "['92','79','15','0']",
    "data-y": "['middle','middle','top','top']",
    "data-voffset": "['3','15','150','90']",
    "data-width": "none",
    "data-height": "none",
    "data-whitespace": "nowrap",
    "data-type": "image",
    "data-responsive_offset": "on",
    "data-frames": "[{\"delay\":10,\"speed\":1500,\"frame\":\"0\",\"from\":\"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":1000,\"frame\":\"999\",\"to\":\"auto:auto;\",\"ease\":\"Power3.easeInOut\"}]",
    "data-textalign": "['inherit','inherit','inherit','inherit']",
    "data-paddingtop": "[0,0,0,0]",
    "data-paddingright": "[0,0,0,0]",
    "data-paddingbottom": "[0,0,0,0]",
    "data-paddingleft": "[0,0,0,0]",
    style: {
      "z-index": "10"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/demo_shop_trendy/images/dfa1f-brk_slide_element-7.png",
    alt: "",
    "data-ww": "['315auto','260px','220px','200px']",
    "data-hh": "['409px','338px','286','293px']",
    "data-no-retina": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "tp-bannertimer tp-bottom",
    style: {
      visibility: "hidden !important"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("header", {
    className: "brk-header brk-header_style-2 brk-header_skin-2 d-lg-flex flex-column position-fixed brk-header_color-white",
    style: {
      display: "none"
    },
    "data-logo-src": "img/logo-dark-2.png",
    "data-bg-mobile": "img/brk-bg-mobile-menu.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "brk-header__main-bar brk-header_border-bottom",
    style: {
      height: "72px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-auto pr-40 align-self-lg-stretch order-6 order-lg-first",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "brk-info-menu-open brk-info-menu-open_skin-2 brk-header__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "brk-center-line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "brk-info-menu-open__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Side Menu"))), __jsx("div", {
    className: "col-lg-auto align-self-lg-stretch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("nav", {
    className: "brk-nav brk-header__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "brk-nav__menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "brk-nav__children brk-nav__full-width",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/",
    "data-brk-library": "component__tabs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, "Home")), __jsx("div", {
    className: "brk-nav__mega-menu brk-nav-drop-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "brk-tabs brk-tabs-hovers",
    "data-index": "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "brk-tabs-nav font__family-open-sans",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 27
    }
  }, __jsx("li", {
    className: "brk-tab font__weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-tasks",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 31
    }
  }), "Demos"), __jsx("li", {
    className: "brk-tab font__weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-trophy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 31
    }
  }), "HomePages"), __jsx("li", {
    className: "brk-tab font__weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-life-ring",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 31
    }
  }), "Support & Info")), __jsx("div", {
    className: "brk-tabs-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-tab-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 35
    }
  }, "Check"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_agency_animation.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-paper-plane",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 45
    }
  })), "Agency Animation")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_agency_fluid.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-tint",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
    }
  })), "Agency Fluid")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_agency_modern.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-gift",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  })), "Agency Modern")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_agency_urban.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-university",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 45
    }
  })), "Agency Urban")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_art.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-newspaper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 45
    }
  })), "Art")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_saas.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-camera-retro",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 45
    }
  })), "SAAS", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 43
    }
  }, "Ver. 1.5"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_winter_trip_agency.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-snowflake",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 45
    }
  })), "Winter Trip Agency", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 43
    }
  }, "Ver. 1.6")))))), __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 35
    }
  }, "Out"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_construction.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 45
    }
  })), "Construction")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_creative_agency.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fab fa-angrycreative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 45
    }
  })), "Creative Agency")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_freelance_blog.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-user-friends",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 45
    }
  })), "Freelance Blog")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_freelance_portfolio.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-portrait",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 45
    }
  })), "Freelance Portfolio")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_logistic.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-truck",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 45
    }
  })), "Logistic")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_website_agency.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "far fa-images",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 45
    }
  })), "Website Agency")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_winter_trip_agency_cta.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-snowflake",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 45
    }
  })), "Winter Event Anounce", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 43
    }
  }, "Ver. 1.7")))))), __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 35
    }
  }, "Our"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_shop_clothes.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-tshirt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  })), "Shop Clothes", __jsx("span", {
    className: "brk-header-list__info bg-warning font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 43
    }
  }, "Shop"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_shop_drone.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fab fa-phoenix-squadron",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 45
    }
  })), "Shop Drone", __jsx("span", {
    className: "brk-header-list__info bg-warning font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 43
    }
  }, "Shop"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_shop_electronics.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-bolt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 45
    }
  })), "Shop Electronics", __jsx("span", {
    className: "brk-header-list__info bg-warning font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 43
    }
  }, "Shop"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_shop_modern.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-people-carry",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 45
    }
  })), "Shop Modern", __jsx("span", {
    className: "brk-header-list__info bg-warning font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 43
    }
  }, "Shop"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_shop_trendy.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-dollar-sign",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 45
    }
  })), "Shop Trendy", __jsx("span", {
    className: "brk-header-list__info bg-warning font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 43
    }
  }, "Shop"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_shop_video.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-video",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 45
    }
  })), "Shop Video", __jsx("span", {
    className: "brk-header-list__info bg-warning font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 43
    }
  }, "Shop")))))), __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 35
    }
  }, "Demos"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_magazine.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "far fa-window-restore",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 45
    }
  })), "Magazine")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_photography.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-camera-retro",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 45
    }
  })), "Photography")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_product_landing.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fab fa-product-hunt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 45
    }
  })), "Product Landing", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 43
    }
  }, "New"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_product_sport.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-futbol",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 45
    }
  })), "Sports Products", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 43
    }
  }, "New"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_spa.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-dove",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 45
    }
  })), "Spa & Beauty", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 43
    }
  }, "New"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_minimalistic_portfolio.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-camera-retro",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 45
    }
  })), "Portfolio Minimalistic", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 43
    }
  }, "Ver. 1.3"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/demo_travel_agency.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-plane",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 45
    }
  })), "Travel Agency", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 43
    }
  }, "Ver. 1.1")))))))), __jsx("div", {
    className: "brk-tab-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "col-lg d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 35
    }
  }, "Preview"), __jsx("div", {
    className: "brk-element-base brk-header_border-right text-center lazyload",
    "data-bg": "img/662x295.jpg",
    style: {
      height: "calc(100% - 76px)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 35
    }
  }, __jsx("div", {
    className: "brk-element-base__before",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "brk-element-base__after lazyload",
    "data-bg": "img/shape-01.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 37
    }
  }), __jsx("div", {
    className: "brk-element-base__content center-absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "mb-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 39
    }
  }, __jsx("img", {
    src: "img/logo.svg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "pb-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "#",
    className: "btn btn-inside-out btn-md border-radius-25 font__family-open-sans font__weight-bold btn-inside-out-invert",
    "data-brk-library": "component__button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "before",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 43
    }
  }, "Purchase"), __jsx("span", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 43
    }
  }, "Click Me"), __jsx("span", {
    className: "after",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 43
    }
  }, "Purchase")))))), __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 35
    }
  }, "Our"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-60 pb-20",
    style: {
      height: "calc(100% - 76px)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "home-page-1.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 45
    }
  })), "Home page 1")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "home-page-2.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 45
    }
  })), "Home page 2")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "home-page-3.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fa fa-qrcode",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 45
    }
  })), "Home page 3")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "home-page-4.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fa fa-sign-language",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 45
    }
  })), "Home page 4")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "home-page-5.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 45
    }
  })), "Home page 5")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "home-page-6.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 45
    }
  })), "Home page 6"))))), __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 35
    }
  }, "Home"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-60 pb-20",
    style: {
      height: "calc(100% - 76px)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 45
    }
  })), "Home page 7", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 45
    }
  })), "Home page 8", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 45
    }
  })), "Home page 9", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 45
    }
  })), "Home page 10", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 45
    }
  })), "Home page 11", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 45
    }
  })), "Home page 12", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 43
    }
  }, "SOON")))))), __jsx("div", {
    className: "col-lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 35
    }
  }, "Pages"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-60 pb-20",
    style: {
      height: "calc(100% - 76px)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 35
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 45
    }
  })), "Home page 13", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 45
    }
  })), "Home page 14", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 45
    }
  })), "Home page 15", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 45
    }
  })), "Home page 16", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 45
    }
  })), "Home page 17", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 43
    }
  }, "SOON"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 39
    }
  }, __jsx("a", {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 43
    }
  }, __jsx("i", {
    className: "fas fa-archive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 45
    }
  })), "Home page 18", __jsx("span", {
    className: "brk-header-list__info bg-info font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 43
    }
  }, "SOON")))))))), __jsx("div", {
    className: "brk-tab-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "col-lg-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "mt-30 mb-30 pr-15 pr-lg-0 pl-15 pl-lg-15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 35
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/tiles-simple-1.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "col-lg-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "pr-15 pr-lg-0 pl-15 pl-lg-15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 35
    }
  }, __jsx("h2", {
    className: "font__family-montserrat text-uppercase font__size-24 mb-40 mt-30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 37
    }
  }, "How Glossier Hacked Social Media"), __jsx("p", {
    className: "brk-dark-font-color text-left mb-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 37
    }
  }, "On a Thursday afternoon in late spring, 32-year-old Glossier founder and CEO Emily Weiss rides the elevator to the penthouse level of her company's downtown Manhattan headquarters. She's a thoroughly millennial girlboss in jeans, sneakers and a royal blue sweatshirt with weiss embroidered in small white script. Her hair is pulled back in a ponytail, and for the founder of a beauty products company, she wears notably little makeup - just some mascara and possibly a swipe of Glossier Lip Gloss, a recent product release touted online as having a \"fuzzy doe-foot applicator.\""), __jsx("p", {
    className: "brk-dark-font-color text-left mb-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 37
    }
  }, "A former teen model, Weiss is beautiful but not intimidating, either by nature or by design (probably a little of both). After all, her company\u2019s popularity is directly related to her ability to cultivate a feeling of friendship with and among her customers. Just enough relatability is key.")))))))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 23
    }
  }, "About"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#collections",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 23
    }
  }, "Collections"))), __jsx("li", {
    className: "brk-nav__children brk-nav__drop-down-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 23
    }
  }, "Shop")), __jsx("ul", {
    className: "brk-nav__sub-menu brk-nav-drop-down font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-flip.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 25
    }
  }, "Shop flip")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-grid.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 25
    }
  }, "Shop grid")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-grid-filter.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 25
    }
  }, "Shop grid-filter")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-honeycomb.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 25
    }
  }, "Shop honeycomb")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-item-sidebar.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 25
    }
  }, "Shop item with sidebar")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-list.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 25
    }
  }, "Shop list")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-masonry.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 25
    }
  }, "Shop masonry")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "demo_product_landing.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 25
    }
  }, "Shop single product item")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-row.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 25
    }
  }, "Shop row")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-tiles.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 25
    }
  }, "Shop tiles")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "cart.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 25
    }
  }, "Shop cart")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "checkout.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 25
    }
  }, "Shop checkout")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "shop-components-compare.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736,
      columnNumber: 25
    }
  }, "Shop Compare")))), __jsx("li", {
    className: "brk-nav__children brk-nav__full-width brk-nav__drop-down-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 740,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 23
    }
  }, "Elements")), __jsx("div", {
    className: "brk-nav__mega-menu brk-nav-drop-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-xl-2 col-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 29
    }
  }, "ELEMENTS"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 31
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "accordions.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 39
    }
  })), "Accordions")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "alerts.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 39
    }
  })), "Alerts")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "app.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 39
    }
  })), "App")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "backgrounds.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "far fa-gem",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 39
    }
  })), "Backgrounds")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "breadcrumbs.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-life-ring",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 39
    }
  })), "Breadcrumbs")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "buttons.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 39
    }
  })), "Buttons")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 819,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "CFA.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-sign-language",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 39
    }
  })), "CFA")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "content-sliders.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-qrcode",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 39
    }
  })), "Content sliders"))))), __jsx("div", {
    className: "col-xl-2 col-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 29
    }
  }, "ELEMENTS"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 848,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 849,
      columnNumber: 31
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "countdown.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 39
    }
  })), "Countdown")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "counter.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
      columnNumber: 39
    }
  })), "Counter")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 872,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "counter-dark.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "far fa-gem",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 875,
      columnNumber: 39
    }
  })), "Counter dark")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "delimiters.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 886,
      columnNumber: 39
    }
  })), "Delimiters")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "dividers.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-life-ring",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 897,
      columnNumber: 39
    }
  })), "Dividers")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "flip-boxes.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 906,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 39
    }
  })), "Flip boxes")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 916,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "form-controls.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 917,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 918,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-tasks",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 919,
      columnNumber: 39
    }
  })), "Form controls")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "google-maps.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 928,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-map",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 930,
      columnNumber: 39
    }
  })), "Google maps"))))), __jsx("div", {
    className: "col-xl-2 col-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 942,
      columnNumber: 29
    }
  }, "ELEMENTS"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 946,
      columnNumber: 31
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "image-caption-parallax.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-sign-language",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 950,
      columnNumber: 39
    }
  })), "Image caption")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 958,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "image-frames.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 960,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-qrcode",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 961,
      columnNumber: 39
    }
  })), "Image frames")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 969,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "image-map.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 970,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 972,
      columnNumber: 39
    }
  })), "Image map")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 980,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "icons.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 981,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-font-awesome-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 39
    }
  })), "Icons", __jsx("span", {
    className: "brk-header-list__info bg-success font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 37
    }
  }, "New"))), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "info-box.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 994,
      columnNumber: 39
    }
  })), "Info box")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "lists.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1004,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "far fa-gem",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1005,
      columnNumber: 39
    }
  })), "Lists")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1013,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "logo.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "far fa-gem",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 39
    }
  })), "Logo")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "media-embeds.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1027,
      columnNumber: 39
    }
  })), "Media embeds")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "pagination.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-life-ring",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 39
    }
  })), "Pagination"))))), __jsx("div", {
    className: "col-xl-2 col-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 29
    }
  }, "ELEMENTS"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1053,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 31
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "parallax.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-tasks",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1058,
      columnNumber: 39
    }
  })), "Parallax")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "parallax-video.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-sign-language",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 39
    }
  })), "Parallax video")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1077,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "pricing-tables.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-qrcode",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 39
    }
  })), "Pricing tables")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1088,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "progress-circles.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 39
    }
  })), "Progress circles")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "promo.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 39
    }
  })), "Promo")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1110,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "section-titles.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1113,
      columnNumber: 39
    }
  })), "Section titles")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "sequence.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1123,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "far fa-gem",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1124,
      columnNumber: 39
    }
  })), "Sequence")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1132,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "services.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1133,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 39
    }
  })), "Services")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1143,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "shape-box.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1144,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1145,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 39
    }
  })), "Shape box"))))), __jsx("div", {
    className: "col-xl-2 col-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 29
    }
  }, "ELEMENTS"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1161,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 31
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "sliders.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1164,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1165,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1166,
      columnNumber: 39
    }
  })), "Sliders")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1174,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "social.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1175,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1176,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 39
    }
  })), "Social")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "steps.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-cube",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 39
    }
  })), "Steps")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1196,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tabbed-contents.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1198,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-sign-language",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 39
    }
  })), "Tabbed contents")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1207,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tables.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-qrcode",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210,
      columnNumber: 39
    }
  })), "Tables")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tabs.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1219,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1220,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "far fa-gem",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1221,
      columnNumber: 39
    }
  })), "Tabs")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1229,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tags.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-tasks",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1232,
      columnNumber: 39
    }
  })), "Tags")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "team.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1241,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1243,
      columnNumber: 39
    }
  })), "Team")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1251,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "progress-bars.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1252,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1253,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1254,
      columnNumber: 39
    }
  })), "Progress bars"))))), __jsx("div", {
    className: "col-xl-2 col-lg-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1265,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "brk-nav__header font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1266,
      columnNumber: 29
    }
  }, "ELEMENTS"), __jsx("div", {
    className: "brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1269,
      columnNumber: 29
    }
  }, __jsx("ul", {
    className: "brk-header-list font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 31
    }
  }, __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1271,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "team-member.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1273,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-tasks",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274,
      columnNumber: 39
    }
  })), "Team-member")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1282,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "testimonials.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1283,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1284,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-university",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285,
      columnNumber: 39
    }
  })), "Testimonials")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1293,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "tiles.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1294,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1295,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1296,
      columnNumber: 39
    }
  })), "Tiles")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1304,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "timelines.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1305,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1306,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-life-ring",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1307,
      columnNumber: 39
    }
  })), "Timelines")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1315,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "titles.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1316,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1317,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-id-card",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1318,
      columnNumber: 39
    }
  })), "Titles")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1326,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "typing-rotator.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1327,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1328,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-adversal",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1329,
      columnNumber: 39
    }
  })), "Typing rotator")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1337,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "svg-pattern.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1338,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1339,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fab fa-adversal",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1340,
      columnNumber: 39
    }
  })), "Blocks transition")), __jsx("li", {
    className: "dd-effect",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1348,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "panels.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1349,
      columnNumber: 35
    }
  }, __jsx("span", {
    className: "brk-header-list__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1350,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fa fa-male",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1351,
      columnNumber: 39
    }
  })), "Panels"))))))))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1366,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1367,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1368,
      columnNumber: 23
    }
  }, "Contact")))))), __jsx("div", {
    className: "col-lg-auto align-self-lg-center d-none d-lg-block brk-align-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1374,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "brk-header__logo brk-header__item @@modifier",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1375,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "brk-header__logo-1 lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/logo-1.png",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1379,
      columnNumber: 17
    }
  }), __jsx("img", {
    className: "brk-header__logo-2 lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/logo-dark-1.png",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1385,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-lg-auto align-self-lg-stretch text-lg-right brk-align-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1393,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "brk-header__element brk-header__element_skin-1 brk-header__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1394,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "tel:88002003040",
    className: "brk-header__element--wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1395,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "far fa-phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1396,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "brk-header__element--label d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1397,
      columnNumber: 19
    }
  }, "8 800 200 30 40"))), __jsx("div", {
    className: "brk-mini-cart brk-header__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1402,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "cart.html",
    className: "brk-mini-cart__open d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1403,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-shopping-basket",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1404,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "brk-mini-cart__label font__family-montserrat font__weight-medium text-uppercase letter-spacing-60 font__size-10 opacity-80",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1405,
      columnNumber: 19
    }
  }, "My cart"), __jsx("span", {
    className: "brk-mini-cart__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1408,
      columnNumber: 19
    }
  }, "Shopping Cart"), __jsx("span", {
    className: "brk-mini-cart__count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1409,
      columnNumber: 19
    }
  }, "4")), __jsx("div", {
    className: "brk-mini-cart__menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1411,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "brk-mini-cart__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1412,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "font__family-montserrat font__weight-bold font__size-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1413,
      columnNumber: 21
    }
  }, "Your Cart")), __jsx("div", {
    className: "brk-mini-cart__products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1417,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "brk-mini-cart__product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1418,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "brk-mini-cart__product--img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1419,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/95x95_1.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1420,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "brk-mini-cart__product--title-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1427,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1428,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1429,
      columnNumber: 27
    }
  }, "Some shop item")), __jsx("span", {
    className: "brk-mini-cart__product--old-price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1433,
      columnNumber: 25
    }
  }, "$26.00"), __jsx("span", {
    className: "brk-mini-cart__product--price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1436,
      columnNumber: 25
    }
  }, "$16.00")), __jsx("div", {
    className: "brk-quantity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1440,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "brk-quantity__arrows minus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1441,
      columnNumber: 25
    }
  }), __jsx("input", {
    className: "brk-quantity__value",
    name: "quantity",
    type: "text",
    defaultValue: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1442,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "brk-quantity__arrows plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1448,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: "#",
    className: "brk-mini-cart__product--remove remove",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1450,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-times-circle",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1454,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "brk-mini-cart__product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1460,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "brk-mini-cart__product--img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1461,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/95x95_2.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1462,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "brk-mini-cart__product--title-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1469,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1470,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1471,
      columnNumber: 27
    }
  }, "Some shop item")), __jsx("span", {
    className: "brk-mini-cart__product--old-price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1475,
      columnNumber: 25
    }
  }, "$26.00"), __jsx("span", {
    className: "brk-mini-cart__product--price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478,
      columnNumber: 25
    }
  }, "$16.00")), __jsx("div", {
    className: "brk-quantity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1482,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "brk-quantity__arrows minus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1483,
      columnNumber: 25
    }
  }), __jsx("input", {
    className: "brk-quantity__value",
    name: "quantity",
    type: "text",
    defaultValue: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1484,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "brk-quantity__arrows plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1490,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: "#",
    className: "brk-mini-cart__product--remove remove",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1492,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-times-circle",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1496,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "brk-mini-cart__product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1502,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "brk-mini-cart__product--img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1503,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/95x95_3.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1504,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "brk-mini-cart__product--title-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1511,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1512,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1513,
      columnNumber: 27
    }
  }, "Some shop item")), __jsx("span", {
    className: "brk-mini-cart__product--old-price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1517,
      columnNumber: 25
    }
  }, "$26.00"), __jsx("span", {
    className: "brk-mini-cart__product--price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1520,
      columnNumber: 25
    }
  }, "$16.00")), __jsx("div", {
    className: "brk-quantity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1524,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "brk-quantity__arrows minus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1525,
      columnNumber: 25
    }
  }), __jsx("input", {
    className: "brk-quantity__value",
    name: "quantity",
    type: "text",
    defaultValue: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1526,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "brk-quantity__arrows plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1532,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: "#",
    className: "brk-mini-cart__product--remove remove",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1534,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-times-circle",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1538,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "brk-mini-cart__product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1544,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "brk-mini-cart__product--img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1545,
      columnNumber: 23
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/95x95_4.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1546,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "brk-mini-cart__product--title-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1553,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1554,
      columnNumber: 25
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1555,
      columnNumber: 27
    }
  }, "Some shop item")), __jsx("span", {
    className: "brk-mini-cart__product--old-price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1559,
      columnNumber: 25
    }
  }, "$26.00"), __jsx("span", {
    className: "brk-mini-cart__product--price font__family-montserrat",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1562,
      columnNumber: 25
    }
  }, "$16.00")), __jsx("div", {
    className: "brk-quantity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1566,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "brk-quantity__arrows minus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1567,
      columnNumber: 25
    }
  }), __jsx("input", {
    className: "brk-quantity__value",
    name: "quantity",
    type: "text",
    defaultValue: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1568,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "brk-quantity__arrows plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1574,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: "#",
    className: "brk-mini-cart__product--remove remove",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1576,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-times-circle",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1580,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "brk-mini-cart__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1587,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "brk-mini-cart__links--wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1588,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "brk-mini-cart__links--cart",
    href: "cart.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1589,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fa fa-shopping-basket",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1593,
      columnNumber: 25
    }
  }), " Cart"), __jsx("a", {
    className: "brk-mini-cart__links--checkout",
    href: "checkout.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1595,
      columnNumber: 23
    }
  }, "Proceed to checkout", " ", __jsx("i", {
    className: "far fa-arrow-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1600,
      columnNumber: 25
    }
  })))))), __jsx("div", {
    className: "brk-header__element brk-header__element_skin-1 brk-header__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1606,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "brk-header__element--wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1607,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "far fa-heart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1608,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "brk-header__element--label d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1609,
      columnNumber: 19
    }
  }, "My wishlist"), __jsx("span", {
    className: "brk-header__compare brk-header__compare_white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1612,
      columnNumber: 19
    }
  }, "6"))), __jsx("a", {
    href: "#",
    className: "btn btn-inside-out btn- ml-20 mr-10 brk-header__item brk-header__btn btn-sm-1 border-radius-25 font__family-open-sans font__weight-bold m-0 pl-30 pr-30",
    "data-brk-library": "component__button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1617,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "before",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1622,
      columnNumber: 17
    }
  }, "Buy now", " ", __jsx("span", {
    className: "font__family-times-new-roman text-lowercase font__style-italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1624,
      columnNumber: 19
    }
  }, "for"), " ", "39$"), __jsx("span", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1629,
      columnNumber: 17
    }
  }, "Click Me"), __jsx("span", {
    className: "after",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1630,
      columnNumber: 17
    }
  }, "Buy now", " ", __jsx("span", {
    className: "font__family-times-new-roman text-lowercase font__style-italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1632,
      columnNumber: 19
    }
  }, "for"), " ", "39$")), __jsx("div", {
    className: "brk-lang brk-lang_interactive brk-header__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1638,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-lang__selected",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1639,
      columnNumber: 17
    }
  }, "US ", __jsx("i", {
    className: "fa fa-caret-down",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1640,
      columnNumber: 22
    }
  })), __jsx("span", {
    className: "brk-lang__open",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1642,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-language",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1643,
      columnNumber: 19
    }
  }), " Language", " ", __jsx("span", {
    className: "brk-lang__active-lang text-white brk-bg-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1644,
      columnNumber: 19
    }
  }, "US")), __jsx("ul", {
    className: "brk-lang__option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1648,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1649,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1650,
      columnNumber: 21
    }
  }, "UA")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1652,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1653,
      columnNumber: 21
    }
  }, "US")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1655,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1656,
      columnNumber: 21
    }
  }, "PL")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1658,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1659,
      columnNumber: 21
    }
  }, "ES")))))))), __jsx("div", {
    className: "brk-info-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1667,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "brk-info-menu__bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1668,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "brk-info-menu__close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1669,
      columnNumber: 11
    }
  }), __jsx("h3", {
    className: "brk-info-menu__header font__family-montserrat font__weight-bold font__size-21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1670,
      columnNumber: 11
    }
  }, "More info"), __jsx("div", {
    className: "brk-categories mb-20",
    "data-brk-library": "component__widgets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1673,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "brk-categories__list font__family-open-sans font__size-14 font__weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1677,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "brk-categories__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1678,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-categories__item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1679,
      columnNumber: 17
    }
  }, "General"), __jsx("span", {
    className: "brk-categories__item-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1680,
      columnNumber: 17
    }
  }, "12")), __jsx("a", {
    href: "#",
    className: "brk-categories__item active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1682,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-categories__item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1683,
      columnNumber: 17
    }
  }, "Mockups"), __jsx("span", {
    className: "brk-categories__item-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1684,
      columnNumber: 17
    }
  }, "14")), __jsx("a", {
    href: "#",
    className: "brk-categories__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1686,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-categories__item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1687,
      columnNumber: 17
    }
  }, "HTML & CSS"), __jsx("span", {
    className: "brk-categories__item-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1688,
      columnNumber: 17
    }
  }, "18")), __jsx("a", {
    href: "#",
    className: "brk-categories__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1690,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-categories__item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1691,
      columnNumber: 17
    }
  }, "Logo"), __jsx("span", {
    className: "brk-categories__item-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1692,
      columnNumber: 17
    }
  }, "21")), __jsx("a", {
    href: "#",
    className: "brk-categories__item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1694,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "brk-categories__item-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1695,
      columnNumber: 17
    }
  }, "Web Design"), __jsx("span", {
    className: "brk-categories__item-count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1696,
      columnNumber: 17
    }
  }, "6")))), __jsx("h3", {
    className: "brk-info-menu__header font__family-montserrat font__weight-bold font__size-21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1700,
      columnNumber: 11
    }
  }, "Our instagram"), __jsx("div", {
    className: "default-slider dots-base-skin dots-base-color slick-loading mt-15",
    "data-slick": "{\"slidesToShow\": 1, \"slidesToScroll\": 1, \"dots\": true, \"autoplay\": false, \"autoplaySpeed\": 4000}",
    "data-brk-library": "slider__slick",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1703,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1708,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "brk-header-slider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1709,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "brk-header-slider__img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1710,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "img/309x206_1.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1711,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "brk-header-slider__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1713,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/head-icon.png",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1714,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "brk-header-slider__content--title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1720,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__weight-bold font__size-16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1721,
      columnNumber: 21
    }
  }, "@berserk"), __jsx("span", {
    className: "font__size-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1724,
      columnNumber: 21
    }
  }, "17 Hours ago"))), __jsx("p", {
    className: "brk-header-slider__text font__size-14 line__height-21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1727,
      columnNumber: 17
    }
  }, "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1734,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "brk-header-slider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1735,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "brk-header-slider__img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1736,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/309x206_2.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1737,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "brk-header-slider__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1744,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/head-icon.png",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1745,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "brk-header-slider__content--title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1751,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__weight-bold font__size-16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1752,
      columnNumber: 21
    }
  }, "@berserk"), __jsx("span", {
    className: "font__size-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1755,
      columnNumber: 21
    }
  }, "17 Hours ago"))), __jsx("p", {
    className: "brk-header-slider__text font__size-14 line__height-21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1758,
      columnNumber: 17
    }
  }, "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra"))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1765,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "brk-header-slider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1766,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "brk-header-slider__img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1767,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/309x206_3.jpg",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1768,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "brk-header-slider__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1775,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "lazyload",
    src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "data-src": "img/head-icon.png",
    alt: "alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1776,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "brk-header-slider__content--title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1782,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font__family-montserrat font__weight-bold font__size-16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1783,
      columnNumber: 21
    }
  }, "@berserk"), __jsx("span", {
    className: "font__size-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1786,
      columnNumber: 21
    }
  }, "17 Hours ago"))), __jsx("p", {
    className: "brk-header-slider__text font__size-14 line__height-21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1789,
      columnNumber: 17
    }
  }, "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra")))))));
});

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "brk-loader",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "brk-loader__loader",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hola; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Carrousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carrousel */ "./components/Carrousel.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class hola extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    console.log("asdasdas", jQuery);
    jQuery("#rev_slider_5_1").show().revolution({
      sliderType: "standard",
      jsFileLocation: "vendor/revslider/js/",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 5000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        arrows: {
          style: "custom",
          enable: true,
          hide_onmobile: false,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: "",
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 10,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 10,
            v_offset: 0
          }
        }
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1200, 992, 768, 576],
      gridheight: [960, 768, 960, 720],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 400,
        speedbg: 0,
        speedls: 0,
        levels: [4, 6, 8, 10, 12, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        disable_onmobile: "on"
      },
      shadow: 0,
      spinner: "spinner2",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "on",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "on",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false
      }
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, __jsx("title", {
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, "FriFolly"), __jsx("meta", {
      charset: "utf-8",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width,height=device-height,initial-scale=1,maximum-scale=1",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "format-detection",
      content: "telephone=no",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#2775FF",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "themeforest, theme, html, template",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: "themeforest, theme, html, template",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "My page title",
      key: "title",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      id: "brk-direction-bootstrap",
      href: "/css/assets/bootstrap.css",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }), __jsx("link", {
      id: "brk-css-min",
      rel: "stylesheet",
      href: "/css/assets/styles.min.css",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
      integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
      crossorigin: "anonymous",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      id: "brk-skin-color",
      href: "/css/skins/brk-blue.css",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }), __jsx("link", {
      id: "brk-base-color",
      rel: "stylesheet",
      href: "/css/skins/brk-base-color.css",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      id: "brk-direction-offsets",
      href: "/css/assets/offsets.css",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/vendor/revslider/css/settings.css",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "jsx-3063905318" + " " + "main-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    }, __jsx("div", {
      "data-brk-library": "component__header",
      className: "jsx-3063905318" + " " + "brk-header-mobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-3063905318" + " " + "brk-header-mobile__open ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "jsx-3063905318" + " " + "brk-header-mobile__logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "img/logo-2.png",
      alt: "",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }))))), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }), __jsx(_components_Carrousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3063905318",
      __self: this
    }, "#rev_slider_5_1_wrapper.jsx-3063905318 .tp-loader.spinner2.jsx-3063905318{background-color:#0071fc !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm95ZWN0by1mcmlmb2xseVxcZnJpZm9sbHktZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Sm9CLEFBR2lELG9DQUN0QyIsImZpbGUiOiJFOlxccHJveWVjdG8tZnJpZm9sbHlcXGZyaWZvbGx5LWZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fycm91c2VsXCI7XHJcbmltcG9ydCAkLCB7IGV4dGVuZCB9IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGhvbGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJhc2Rhc2Rhc1wiLCBqUXVlcnkpO1xyXG4gICAgalF1ZXJ5KFwiI3Jldl9zbGlkZXJfNV8xXCIpXHJcbiAgICAgIC5zaG93KClcclxuICAgICAgLnJldm9sdXRpb24oe1xyXG4gICAgICAgIHNsaWRlclR5cGU6IFwic3RhbmRhcmRcIixcclxuICAgICAgICBqc0ZpbGVMb2NhdGlvbjogXCJ2ZW5kb3IvcmV2c2xpZGVyL2pzL1wiLFxyXG4gICAgICAgIHNsaWRlckxheW91dDogXCJmdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgZG90dGVkT3ZlcmxheTogXCJub25lXCIsXHJcbiAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uOiBcIm9mZlwiLFxyXG4gICAgICAgICAga2V5Ym9hcmRfZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcclxuICAgICAgICAgIG1vdXNlU2Nyb2xsTmF2aWdhdGlvbjogXCJvZmZcIixcclxuICAgICAgICAgIG1vdXNlU2Nyb2xsUmV2ZXJzZTogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICBvbkhvdmVyU3RvcDogXCJvZmZcIixcclxuICAgICAgICAgIGFycm93czoge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJjdXN0b21cIixcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlX29ubW9iaWxlOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZV9vbmxlYXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBoaWRlX2RlbGF5OiAyMDAsXHJcbiAgICAgICAgICAgIGhpZGVfZGVsYXlfbW9iaWxlOiAxMjAwLFxyXG4gICAgICAgICAgICB0bXA6IFwiXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IHtcclxuICAgICAgICAgICAgICBoX2FsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICB2X2FsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGhfb2Zmc2V0OiAxMCxcclxuICAgICAgICAgICAgICB2X29mZnNldDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmlnaHQ6IHtcclxuICAgICAgICAgICAgICBoX2FsaWduOiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoX29mZnNldDogMTAsXHJcbiAgICAgICAgICAgICAgdl9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzcG9uc2l2ZUxldmVsczogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcclxuICAgICAgICB2aXNpYmlsaXR5TGV2ZWxzOiBbMTI0MCwgMTAyNCwgNzc4LCA0ODBdLFxyXG4gICAgICAgIGdyaWR3aWR0aDogWzEyMDAsIDk5MiwgNzY4LCA1NzZdLFxyXG4gICAgICAgIGdyaWRoZWlnaHQ6IFs5NjAsIDc2OCwgOTYwLCA3MjBdLFxyXG4gICAgICAgIGxhenlUeXBlOiBcIm5vbmVcIixcclxuICAgICAgICBwYXJhbGxheDoge1xyXG4gICAgICAgICAgdHlwZTogXCJtb3VzZVwiLFxyXG4gICAgICAgICAgb3JpZ286IFwic2xpZGVyY2VudGVyXCIsXHJcbiAgICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgICAgc3BlZWRiZzogMCxcclxuICAgICAgICAgIHNwZWVkbHM6IDAsXHJcbiAgICAgICAgICBsZXZlbHM6IFs0LCA2LCA4LCAxMCwgMTIsIDMwLCAzNSwgNDAsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1NV0sXHJcbiAgICAgICAgICBkaXNhYmxlX29ubW9iaWxlOiBcIm9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFkb3c6IDAsXHJcbiAgICAgICAgc3Bpbm5lcjogXCJzcGlubmVyMlwiLFxyXG4gICAgICAgIHN0b3BMb29wOiBcIm9mZlwiLFxyXG4gICAgICAgIHN0b3BBZnRlckxvb3BzOiAtMSxcclxuICAgICAgICBzdG9wQXRTbGlkZTogLTEsXHJcbiAgICAgICAgc2h1ZmZsZTogXCJvZmZcIixcclxuICAgICAgICBhdXRvSGVpZ2h0OiBcIm9mZlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5BdXRvV2lkdGg6IFwib25cIixcclxuICAgICAgICBmdWxsU2NyZWVuQWxpZ25Gb3JjZTogXCJvZmZcIixcclxuICAgICAgICBmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyOiBcIlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5PZmZzZXQ6IFwiXCIsXHJcbiAgICAgICAgZGlzYWJsZVByb2dyZXNzQmFyOiBcIm9uXCIsXHJcbiAgICAgICAgaGlkZVRodW1ic09uTW9iaWxlOiBcIm9uXCIsXHJcbiAgICAgICAgaGlkZVNsaWRlckF0TGltaXQ6IDAsXHJcbiAgICAgICAgaGlkZUNhcHRpb25BdExpbWl0OiAwLFxyXG4gICAgICAgIGhpZGVBbGxDYXB0aW9uQXRMaWxtaXQ6IDAsXHJcbiAgICAgICAgZGVidWdNb2RlOiBmYWxzZSxcclxuICAgICAgICBmYWxsYmFja3M6IHtcclxuICAgICAgICAgIHNpbXBsaWZ5QWxsOiBcIm9mZlwiLFxyXG4gICAgICAgICAgbmV4dFNsaWRlT25XaW5kb3dGb2N1czogXCJvZmZcIixcclxuICAgICAgICAgIGRpc2FibGVGb2N1c0xpc3RlbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+RnJpRm9sbHk8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaGVpZ2h0PWRldmljZS1oZWlnaHQsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9MVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCI+PC9tZXRhPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMyNzc1RkZcIj48L21ldGE+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwidGhlbWVmb3Jlc3QsIHRoZW1lLCBodG1sLCB0ZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwidGhlbWVmb3Jlc3QsIHRoZW1lLCBodG1sLCB0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGlkPVwiYnJrLWRpcmVjdGlvbi1ib290c3RyYXBcIlxyXG4gICAgICAgICAgICBocmVmPVwiL2Nzcy9hc3NldHMvYm9vdHN0cmFwLmNzc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaWQ9XCJicmstY3NzLW1pblwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiL2Nzcy9hc3NldHMvc3R5bGVzLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjUuMC9jc3MvYWxsLmNzc1wiXHJcbiAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CNGRJWUhLTkJ0OEJjMTJwK1dYY2toemNJQ28wd3RKQW9VOFlaVFk1cUUwSWQxR1NzZVRrNlMrTDNCbFhlVklVXCJcclxuICAgICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBpZD1cImJyay1za2luLWNvbG9yXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc2tpbnMvYnJrLWJsdWUuY3NzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBpZD1cImJyay1iYXNlLWNvbG9yXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvY3NzL3NraW5zL2Jyay1iYXNlLWNvbG9yLmNzc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGlkPVwiYnJrLWRpcmVjdGlvbi1vZmZzZXRzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3MvYXNzZXRzL29mZnNldHMuY3NzXCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvcmV2c2xpZGVyL2Nzcy9zZXR0aW5ncy5jc3NcIlxyXG4gICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1wYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbW9iaWxlXCJcclxuICAgICAgICAgICAgZGF0YS1icmstbGlicmFyeT1cImNvbXBvbmVudF9faGVhZGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLW1vYmlsZV9fb3BlbiBcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXItbW9iaWxlX19sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ28tMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxDYXJyb3VzZWwgLz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjcmV2X3NsaWRlcl81XzFfd3JhcHBlciAudHAtbG9hZGVyLnNwaW5uZXIyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzFmYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgey8qIDxzY3JpcHQgZGVmZXI9XCJkZWZlclwiIHNyYz1cIi9qcy9zY3JpcHRzLm1pbi5qc1wiPjwvc2NyaXB0PiAqL31cclxuICAgICAgICB7LyogPHNjcmlwdFxyXG4gICAgICAgICAgZGVmZXI9XCJkZWZlclwiXHJcbiAgICAgICAgICBzcmM9XCIvdmVuZG9yL3JldnNsaWRlci9qcy9qcXVlcnkudGhlbWVwdW5jaC50b29scy5taW4uanNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBkZWZlcj1cImRlZmVyXCJcclxuICAgICAgICAgIHNyYz1cIi92ZW5kb3IvcmV2c2xpZGVyL2pzL2pxdWVyeS50aGVtZXB1bmNoLnJldm9sdXRpb24ubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+ICovfVxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGRlZmVyPVwiZGVmZXJcIlxyXG4gICAgICAgICAgc3JjPVwiL3ZlbmRvci9yZXZzbGlkZXIvanMvZXh0ZW5zaW9ucy9yZXZvbHV0aW9uLmV4dGVuc2lvbi5sYXllcmFuaW1hdGlvbi5taW4uanNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBkZWZlcj1cImRlZmVyXCJcclxuICAgICAgICAgIHNyYz1cIi92ZW5kb3IvcmV2c2xpZGVyL2pzL2V4dGVuc2lvbnMvcmV2b2x1dGlvbi5leHRlbnNpb24ubmF2aWdhdGlvbi5taW4uanNcIlxyXG4gICAgICAgID48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBkZWZlcj1cImRlZmVyXCJcclxuICAgICAgICAgIHNyYz1cIi92ZW5kb3IvcmV2c2xpZGVyL2pzL2V4dGVuc2lvbnMvcmV2b2x1dGlvbi5leHRlbnNpb24ucGFyYWxsYXgubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgZGVmZXI9XCJkZWZlclwiXHJcbiAgICAgICAgICBzcmM9XCIvdmVuZG9yL3JldnNsaWRlci9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLnNsaWRlYW5pbXMubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgZGVmZXI9XCJkZWZlclwiXHJcbiAgICAgICAgICBzcmM9XCIvdmVuZG9yL3JldnNsaWRlci9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLmFjdGlvbnMubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIHsvKiA8c2NyaXB0PiAqL31cclxuICAgICAgICB7Lyoge2NvbnNvbGUubG9nKFwiaG9sYVwiLCBqUXVlcnkpfSAqL31cclxuICAgICAgICB7LyogPC9zY3JpcHQ+ICovfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\proyecto-frifolly\\\\frifolly-frontend\\\\pages\\\\index.js */"), __jsx("script", {
      defer: "defer",
      src: "/vendor/revslider/js/extensions/revolution.extension.layeranimation.min.js",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }), __jsx("script", {
      defer: "defer",
      src: "/vendor/revslider/js/extensions/revolution.extension.navigation.min.js",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }
    }), __jsx("script", {
      defer: "defer",
      src: "/vendor/revslider/js/extensions/revolution.extension.parallax.min.js",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    }), __jsx("script", {
      defer: "defer",
      src: "/vendor/revslider/js/extensions/revolution.extension.slideanims.min.js",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }), __jsx("script", {
      defer: "defer",
      src: "/vendor/revslider/js/extensions/revolution.extension.actions.min.js",
      className: "jsx-3063905318",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\proyecto-frifolly\frifolly-frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiYmFja2dyb3VuZCIsInBhZGRpbmciLCJjb2xvciIsImN1cnNvciIsInZpc2liaWxpdHkiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiaG9sYSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwialF1ZXJ5Iiwic2hvdyIsInJldm9sdXRpb24iLCJzbGlkZXJUeXBlIiwianNGaWxlTG9jYXRpb24iLCJzbGlkZXJMYXlvdXQiLCJkb3R0ZWRPdmVybGF5IiwiZGVsYXkiLCJuYXZpZ2F0aW9uIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwia2V5Ym9hcmRfZGlyZWN0aW9uIiwibW91c2VTY3JvbGxOYXZpZ2F0aW9uIiwibW91c2VTY3JvbGxSZXZlcnNlIiwib25Ib3ZlclN0b3AiLCJhcnJvd3MiLCJzdHlsZSIsImVuYWJsZSIsImhpZGVfb25tb2JpbGUiLCJoaWRlX29ubGVhdmUiLCJoaWRlX2RlbGF5IiwiaGlkZV9kZWxheV9tb2JpbGUiLCJ0bXAiLCJsZWZ0IiwiaF9hbGlnbiIsInZfYWxpZ24iLCJoX29mZnNldCIsInZfb2Zmc2V0IiwicmlnaHQiLCJyZXNwb25zaXZlTGV2ZWxzIiwidmlzaWJpbGl0eUxldmVscyIsImdyaWR3aWR0aCIsImdyaWRoZWlnaHQiLCJsYXp5VHlwZSIsInBhcmFsbGF4IiwidHlwZSIsIm9yaWdvIiwic3BlZWQiLCJzcGVlZGJnIiwic3BlZWRscyIsImxldmVscyIsImRpc2FibGVfb25tb2JpbGUiLCJzaGFkb3ciLCJzcGlubmVyIiwic3RvcExvb3AiLCJzdG9wQWZ0ZXJMb29wcyIsInN0b3BBdFNsaWRlIiwic2h1ZmZsZSIsImF1dG9IZWlnaHQiLCJmdWxsU2NyZWVuQXV0b1dpZHRoIiwiZnVsbFNjcmVlbkFsaWduRm9yY2UiLCJmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyIiwiZnVsbFNjcmVlbk9mZnNldCIsImRpc2FibGVQcm9ncmVzc0JhciIsImhpZGVUaHVtYnNPbk1vYmlsZSIsImhpZGVTbGlkZXJBdExpbWl0IiwiaGlkZUNhcHRpb25BdExpbWl0IiwiaGlkZUFsbENhcHRpb25BdExpbG1pdCIsImRlYnVnTW9kZSIsImZhbGxiYWNrcyIsInNpbXBsaWZ5QWxsIiwibmV4dFNsaWRlT25XaW5kb3dGb2N1cyIsImRpc2FibGVGb2N1c0xpc3RlbmVyIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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QURGLEVBSUU7QUFDRSxhQUFTLEVBQUMsaURBRFo7QUFFRSxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSSxhQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLGlCQUtFO0FBQU0sYUFBUyxFQUFDLHVEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsQ0FERixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsaUJBS0U7QUFBTSxhQUFTLEVBQUMsdURBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixDQURGLENBWkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0s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O0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLENBREYsRUFLRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDLDZCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQU0sYUFBUyxFQUFDLDRCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsQ0FMRixFQVNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsc0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFO0FBQU0sYUFBUyxFQUFDLDRCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkYsQ0FURixFQWFFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsc0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixDQWJGLEVBaUJFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsc0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQywyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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SyxFQUFDLE9BRFI7QUFFRSxTQUFHLEVBQUMsd0VBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEdGLEVBc0dFO0FBQ0UsV0FBSyxFQUFDLE9BRFI7QUFFRSxTQUFHLEVBQUMscUVBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEdGLENBREY7QUFpSEQ7O0FBaE0rQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05sRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cInJldl9zbGlkZXJfNV8xX3dyYXBwZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJldl9zbGlkZXJfd3JhcHBlciBmdWxsc2NyZWVuLWNvbnRhaW5lclwiXHJcbiAgICAgICAgZGF0YS1hbGlhcz1cImRlbW9fc2hvcF90cmVuZHlcIlxyXG4gICAgICAgIGRhdGEtc291cmNlPVwiZ2FsbGVyeVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nOiBcIjBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cInJldl9zbGlkZXJfNV8xXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJldl9zbGlkZXIgZnVsbHNjcmVlbmJhbm5lclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICBkYXRhLXZlcnNpb249XCI1LjQuOC4xXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGRhdGEtaW5kZXg9XCJycy0xMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS10cmFuc2l0aW9uPVwiZmFkZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1zbG90YW1vdW50PVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1oaWRlYWZ0ZXJsb29wPVwiMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1oaWRlc2xpZGVvbm1vYmlsZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1lYXNlaW49XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBkYXRhLWVhc2VvdXQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBkYXRhLW1hc3RlcnNwZWVkPVwiMTQwMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS10aHVtYj1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvMTAweDUwXzQ2ZTc1LWJya19zbGlkZS0xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgZGF0YS1yb3RhdGU9XCIwXCJcclxuICAgICAgICAgICAgICBkYXRhLXNhdmVwZXJmb3JtYW5jZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgZGF0YS10aXRsZT1cIlNsaWRlXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtMT1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTI9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW0zPVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtND1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTU9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW02PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtNz1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTg9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW05PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtMTA9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtZGVzY3JpcHRpb249XCJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy80NmU3NS1icmtfc2xpZGUtMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmdwb3NpdGlvbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ2ZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmdyZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ3BhcmFsbGF4PVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldi1zbGlkZWJnXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHJldl9ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTI3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdyaWdodCcsJ3JpZ2h0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycxNScsJzE1JywnMTUnLCcxNSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxNDUnLCcxMjUnLCcxNzQnLCc0MDInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWyc2ODUnLCc1NTEnLCczODUnLCcyODInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnMTk2JywnMTcwJywnMTIzJywnODknXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiBcIjExXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiNjg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCI2ODVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjE5NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMTk2cHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMTFcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMzUyJywnMjg0JywnMTk0JywnMTQ5J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyctNDAnLCcxNycsJzknLCc4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJ6OjA7clg6MDtyWTowO3JaOjA7c1g6MC45O3NZOjAuOTtza1g6MDtza1k6MDtvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIyLmVhc2VPdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBcInotaW5kZXhcIjogXCIxMlwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzgwNWY5LWJya19zbGlkZV9lbGVtZW50LTMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzIxOXB4JywnMTgwcHgnLCcxNDBweCcsJzEwMHB4J11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJbJzc3cHgnLCc2M3B4JywnNDlweCcsJzM1cHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci05XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzcyJywnNjAnLCc0MCcsJzMwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzc4JywnNjgnLCc1MCcsJzM2J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWyc2ODInLCc1MzAnLCczNTgnLCcyNzEnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwiWydub25lJywnMTM3JywnMTA0JywnNzMnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcInk6WzEwMCVdO3o6MDtyWDowZGVnO3JZOjA7clo6MDtzWDoxO3NZOjE7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwibWFza1wiOlwieDowcHg7eTpbMTAwJV07czppbmhlcml0O2U6aW5oZXJpdDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjIuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwibWFza1wiOlwieDowO3k6MDtzOmluaGVyaXQ7ZTppbmhlcml0O1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiNjgycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjY4MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgd2hpdGUtc3BhY2VcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiBmb250LXNpemVcIjogXCI3MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjc4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGV0dGVyLXNwYWNpbmdcIjogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6IFwiTW9udHNlcnJhdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC10cmFuc2Zvcm1cIjogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgXCIgXCIgU2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzZTJhY2RcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCIyMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDUwJVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBcImZvbnQtd2VpZ2h0XCI6IFwiNzAwXCIsIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgb25seSB0aGlzIHdlZWtcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHJldi1icmstYnJhbmRzIHJldl9ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTI0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdyaWdodCcsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMjA1JywnMTU4JywnODMnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzYyMCcsJzQ2OScsJzQ3NScsJzUwNCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJbJzI1MicsJzI1MicsJzI1MicsJzE5MyddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwiWyc4MycsJzgzJywnODMnLCc3MCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMTRcIixcclxuICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyNTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjI1MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiODNweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjgzcHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGV0dGVyLXNwYWNpbmdcIjogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovLzEuZW52YXRvLm1hcmtldC9CZDVWOVwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMjVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnMjAnLCcyMCcsJzIwJywnMTYnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnMjInLCcyMicsJzIyJywnMTYnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9ucz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjgwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjo4MDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJmcmFtZVwiOlwiaG92ZXJcIixcInNwZWVkXCI6XCIwXCIsXCJlYXNlXCI6XCJMaW5lYXIuZWFzZU5vbmVcIixcInRvXCI6XCJvOjE7clg6MDtyWTowO3JaOjA7ejowO1wiLFwic3R5bGVcIjpcImM6cmdiKDAsMTIyLDI1NSk7XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzIwLDIwLDIwLDE5XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzIwLDIwLDIwLDE4XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlsyMCwyMCwyMCwxOV1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzIwLDIwLDIwLDE4XVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMTVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIndoaXRlLXNwYWNlXCI6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzI3NzVmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGV0dGVyLXNwYWNpbmdcIjogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6IFwiT3BlbiBTYW5zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjQwcHggNDBweCA0MHB4IDQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctYmFza2V0XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMTdcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnOTMnLCc5MycsJzkzJywnNzgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJy0xMScsJy0xMScsJy0xMScsJy0xMSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnMjgnLCcyOCcsJzI4JywnMjAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnMzAnLCczMCcsJzMwJywnMjQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI3MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eSBub3d7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMThcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnOTQnLCc5NCcsJzk0JywnNzknXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzE3JywnMTcnLCcxNycsJzEyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMTdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIndoaXRlLXNwYWNlXCI6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiIDcwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2OWFkZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1pY29uLWluc3RhZ3JhbVwiPjwvaT4gYmVyc2Vya3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gcmV2X2dyb3VwXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMjZcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ3JpZ2h0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMTk1JywnMTczJywnOTcnLCcxNSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyczNjUnLCczMDAnLCczMDMnLCc0MDUnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWycyNzAnLCcyMjQnLCcyMjQnLCcxMzEnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnMjE3JywnMTY4JywnMTY4JywnMTAzJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxOFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjI3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMjcwcHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyMTdweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIiBtYXgtd2lkdGhcIjogXCIgMjE3cHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJsaW5lLWhlaWdodFwiOiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGV0dGVyLXNwYWNpbmdcIjogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci0xM1wiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzEzNicsJzEwMCcsJzEwMCcsJzUwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzE0MCcsJzExMCcsJzExMCcsJzYwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BsaXRcIjpcImNoYXJzXCIsXCJzcGxpdGRlbGF5XCI6MC4wNSxcInNwZWVkXCI6MjAwMCxcInNwbGl0X2RpcmVjdGlvblwiOlwiZm9yd2FyZFwiLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIng6WzEwNSVdO3o6MDtyWDo0NWRlZztyWTowZGVnO3JaOjkwZGVnO3NYOjE7c1k6MTtza1g6MDtza1k6MDtcIixcIm1hc2tcIjpcIng6MHB4O3k6MHB4O3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXI0LmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcIm1hc2tcIjpcIng6MDt5OjA7czppbmhlcml0O2U6aW5oZXJpdDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiBcIjE5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTM2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMTQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGV0dGVyLXNwYWNpbmdcIjogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6IFwiTW9udHNlcnJhdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAkNTl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMTRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxNTUnLCcxMTgnLCcxMTgnLCc2NSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnNDAnLCczMCcsJzMwJywnMTgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnNDInLCczNCcsJzM0JywnMjQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwieTpbMTAwJV07ejowO3JYOjBkZWc7clk6MDtyWjowO3NYOjE7c1k6MTtza1g6MDtza1k6MDtvcGFjaXR5OjA7XCIsXCJtYXNrXCI6XCJ4OjBweDt5OlsxMDAlXTtzOmluaGVyaXQ7ZTppbmhlcml0O1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJtYXNrXCI6XCJ4OjA7eTowO3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiNDJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZvciA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjYjg4ZWZmXCIgfX0+NyBEYXlzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1zaGFwZSB0cC1zaGFwZXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci0xXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInNoYXBlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmFzZWFsaWduPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjE1MDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTUwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiBcIjVcIixcclxuICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMTUsOTAsMjI0LDAuOTIpIDAlLCByZ2JhKDExNiwwLDE4NiwwLjkyKSAxMDAlKVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTIwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWydib3R0b20nLCdib3R0b20nLCdib3R0b20nLCdib3R0b20nXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJy0xOScsJy0xOScsJy0xOScsJy0xOSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12aXNpYmlsaXR5PVwiWydvbicsJ29uJywnb2ZmJywnb2ZmJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxNTAwLFwiZnJhbWVcIjpcIjBcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjIuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiei1pbmRleFwiOiBcIjZcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy85NDBiYS1icmtfc2xpZGVfZWxlbWVudC0xLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzEwMCUnLCcxMDAlJywnMTAwJScsJzEwMCUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZSBycy1wYXJhbGxheGxldmVsLTNcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci0yXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsncmlnaHQnLCdyaWdodCcsJ3JpZ2h0JywncmlnaHQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJy00OTEnLCctNDkxJywnLTQ5MScsJy00OTEnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12aXNpYmlsaXR5PVwiWydvbicsJ29uJywnb2ZmJywnb2ZmJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiei1pbmRleFwiOiBcIjdcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy81YjI3NS1icmtfc2xpZGVfZWxlbWVudC00LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzY4NmF1dG8nLCc2ODZhdXRvJywnNjg2YXV0bycsJzY4NmF1dG8nXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJbJzY4NnB4JywnNjg2cHgnLCc2ODZweCcsJzY4NnB4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZSBycy1wYXJhbGxheGxldmVsLTFcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci0zXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnLTMxOCcsJy0zMTgnLCctMzE4JywnLTMxOCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyctMTEnLCctMTEnLCctMTEnLCctMTEnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdmlzaWJpbGl0eT1cIlsnb24nLCdvbicsJ29mZicsJ29mZiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmFzZWFsaWduPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcInotaW5kZXhcIjogXCI4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvOGIyOTUtYnJrX3NsaWRlX2VsZW1lbnQtNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWyc2MzlhdXRvJywnNjM5YXV0bycsJzYzOWF1dG8nLCc2MzlhdXRvJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiWycyOTFweCcsJzI5MXB4JywnMjkxcHgnLCcyOTFweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZSBycy1wYXJhbGxheGxldmVsLTJcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci00XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnLTE0NycsJy0xNDcnLCctMTQ3JywnLTE0NyddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxMjAnLCcxMjAnLCcxMjAnLCcxMjAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdmlzaWJpbGl0eT1cIlsnb24nLCdvbicsJ29mZicsJ29mZiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmFzZWFsaWduPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJ6LWluZGV4XCI6IFwiOVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzL2U3Zjc0LWJya19zbGlkZV9lbGVtZW50LTYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnMjk1YXV0bycsJzI5NWF1dG8nLCcyOTVhdXRvJywnMjk1YXV0byddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnMjk1cHgnLCcyOTVweCcsJzI5NXB4JywnMjk1cHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHRwLXJlc2l6ZW1lXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItN1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ3JpZ2h0JywncmlnaHQnLCdsZWZ0JywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyczMCcsJzMwJywnMTUnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzIwJywnMjAnLCcxNTAnLCc5MCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTUwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJ6OjA7clg6MDtyWTowO3JaOjA7c1g6MC45O3NZOjAuOTtza1g6MDtza1k6MDtvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJ6LWluZGV4XCI6IFwiMTBcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy83NzkxMy1icmtfc2xpZGVfZWxlbWVudC0yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzQ3MmF1dG8nLCczNTBweCcsJzI1MHB4JywnMjAwcHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJbJzY5MnB4JywnNTEzcHgnLCczNjdweCcsJzI5M3B4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgZGF0YS1pbmRleD1cInJzLTEwMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS10cmFuc2l0aW9uPVwiZmFkZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1zbG90YW1vdW50PVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1oaWRlYWZ0ZXJsb29wPVwiMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1oaWRlc2xpZGVvbm1vYmlsZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1lYXNlaW49XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBkYXRhLWVhc2VvdXQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBkYXRhLW1hc3RlcnNwZWVkPVwiMTQwMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS10aHVtYj1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvMTAweDUwXzFhYjA3LWJya19zbGlkZS0yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgZGF0YS1yb3RhdGU9XCIwXCJcclxuICAgICAgICAgICAgICBkYXRhLXNhdmVwZXJmb3JtYW5jZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgZGF0YS10aXRsZT1cIlNsaWRlXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtMT1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTI9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW0zPVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtND1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTU9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW02PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtNz1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTg9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW05PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtMTA9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtZGVzY3JpcHRpb249XCJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy8xYWIwNy1icmtfc2xpZGUtMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmdwb3NpdGlvbj1cImNlbnRlciBjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ2ZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmdyZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ3BhcmFsbGF4PVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldi1zbGlkZWJnXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHJldl9ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0yN1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywncmlnaHQnLCdyaWdodCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMTUnLCcxNScsJzE1JywnMTUnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMTQ1JywnMTI1JywnMTc0JywnNDAyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIlsnNjg1JywnNTUxJywnMzg1JywnMjgyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJbJzE5NicsJzE3MCcsJzEyMycsJzg5J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxMVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1pbi13aWR0aFwiOiBcIjY4NXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiNjg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIxOTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjE5NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTExXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzM1MicsJzI4NCcsJzE5NCcsJzE0OSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnLTQwJywnMTcnLCc5JywnOCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwiejowO3JYOjA7clk6MDtyWjowO3NYOjAuOTtzWTowLjk7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJ6LWluZGV4XCI6IFwiMTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy84MDVmOS1icmtfc2xpZGVfZWxlbWVudC0zLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWycyMTlweCcsJzE4MHB4JywnMTQwcHgnLCcxMDBweCddXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiWyc3N3B4JywnNjNweCcsJzQ5cHgnLCczNXB4J11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci05XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzcyJywnNjAnLCc0MCcsJzMwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzc4JywnNjgnLCc1MCcsJzM2J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWyc2ODInLCc1MzAnLCczNTgnLCcyNzEnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwiWydub25lJywnMTM3JywnMTA0JywnNzMnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcInk6WzEwMCVdO3o6MDtyWDowZGVnO3JZOjA7clo6MDtzWDoxO3NZOjE7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwibWFza1wiOlwieDowcHg7eTpbMTAwJV07czppbmhlcml0O2U6aW5oZXJpdDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjIuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwibWFza1wiOlwieDowO3k6MDtzOmluaGVyaXQ7ZTppbmhlcml0O1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiNjgycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjY4MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiNzJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCI3OHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjMwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOiBcIk1vbnRzZXJyYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzZTJhY2RcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCIyMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDMwJVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBcImZvbnQtd2VpZ2h0XCI6IFwiNzAwXCIsIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgb25seSB0aGlzIHdlZWtcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHJldi1icmstYnJhbmRzIHJldl9ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0yNFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywncmlnaHQnLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzIwNScsJzE1OCcsJzgzJywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyc2MjAnLCc0NjknLCc0NzUnLCc1MDQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWycyNTInLCcyNTInLCcyNTInLCcxOTMnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnODMnLCc4MycsJzgzJywnNzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiBcIjE0XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IFwiMjUycHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyNTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjgzcHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCI4M3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly8xLmVudmF0by5tYXJrZXQvQmQ1VjlcIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0yNVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZvbnRzaXplPVwiWycyMCcsJzIwJywnMjAnLCcxNiddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1saW5laGVpZ2h0PVwiWycyMicsJzIyJywnMjInLCcxNiddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1hY3Rpb25zPVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6ODAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjgwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImZyYW1lXCI6XCJob3ZlclwiLFwic3BlZWRcIjpcIjBcIixcImVhc2VcIjpcIkxpbmVhci5lYXNlTm9uZVwiLFwidG9cIjpcIm86MTtyWDowO3JZOjA7clo6MDt6OjA7XCIsXCJzdHlsZVwiOlwiYzpyZ2IoMCwxMjIsMjU1KTtcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMjAsMjAsMjAsMTldXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMjAsMjAsMjAsMThdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzIwLDIwLDIwLDE5XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMjAsMjAsMjAsMThdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjc3NWZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IFwiNDBweCA0MHB4IDQwcHggNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1iYXNrZXRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItMTdcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnOTMnLCc5MycsJzkzJywnNzgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJy0xMScsJy0xMScsJy0xMScsJy0xMSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnMjgnLCcyOCcsJzI4JywnMjAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnMzAnLCczMCcsJzMwJywnMjQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIxNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI3MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eSBub3d7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTE4XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzk0JywnOTQnLCc5NCcsJzc5J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxNycsJzE3JywnMTcnLCcxMiddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiBcIjE3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjcwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2OWFkZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1pY29uLWluc3RhZ3JhbVwiPjwvaT4gYmVyc2Vya3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gcmV2X2dyb3VwXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTI2XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdyaWdodCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzE5NScsJzE3MycsJzk3JywnMTUnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMzY1JywnMzAwJywnMzAzJywnNDA1J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIlsnMjcwJywnMjI0JywnMjI0JywnMTMxJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJbJzIxNycsJzE2OCcsJzE2OCcsJzEwMyddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMThcIixcclxuICAgICAgICAgICAgICAgICAgXCJtaW4td2lkdGhcIjogXCIyNzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjI3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwibWF4LXdpZHRoXCI6IFwiMjE3cHhcIixcclxuICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIyMTdweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcIndoaXRlLXNwYWNlXCI6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0xM1wiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzEzNicsJzEwMCcsJzEwMCcsJzUwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzE0MCcsJzExMCcsJzExMCcsJzYwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BsaXRcIjpcImNoYXJzXCIsXCJzcGxpdGRlbGF5XCI6MC4wNSxcInNwZWVkXCI6MjAwMCxcInNwbGl0X2RpcmVjdGlvblwiOlwiZm9yd2FyZFwiLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIng6WzEwNSVdO3o6MDtyWDo0NWRlZztyWTowZGVnO3JaOjkwZGVnO3NYOjE7c1k6MTtza1g6MDtza1k6MDtcIixcIm1hc2tcIjpcIng6MHB4O3k6MHB4O3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXI0LmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcIm1hc2tcIjpcIng6MDt5OjA7czppbmhlcml0O2U6aW5oZXJpdDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiBcIjE5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTM2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMTQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGV0dGVyLXNwYWNpbmdcIjogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6IFwiTW9udHNlcnJhdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAkMzlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItMTRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxNTUnLCcxMTgnLCcxMTgnLCc2NSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnNDAnLCczMCcsJzMwJywnMTgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnNDInLCczNCcsJzM0JywnMjQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwieTpbMTAwJV07ejowO3JYOjBkZWc7clk6MDtyWjowO3NYOjE7c1k6MTtza1g6MDtza1k6MDtvcGFjaXR5OjA7XCIsXCJtYXNrXCI6XCJ4OjBweDt5OlsxMDAlXTtzOmluaGVyaXQ7ZTppbmhlcml0O1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJtYXNrXCI6XCJ4OjA7eTowO3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBcInotaW5kZXhcIjogXCIyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiNDJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsZXR0ZXItc3BhY2luZ1wiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInRleHQtdHJhbnNmb3JtXCI6IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZvciA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjYjg4ZWZmXCIgfX0+NyBEYXlzPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtc2hhcGUgdHAtc2hhcGV3cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTFcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwic2hhcGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTUwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxNTAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiNVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDE1LDkwLDIyNCwwLjkyKSAwJSwgcmdiYSgxMTYsMCwxODYsMC45MikgMTAwJSlcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtcmVzaXplbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItMjBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ2JvdHRvbScsJ2JvdHRvbScsJ2JvdHRvbScsJ2JvdHRvbSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnLTE5JywnLTE5JywnLTE5JywnLTE5J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2liaWxpdHk9XCJbJ29uJywnb24nLCdvZmYnLCdvZmYnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjE1MDAsXCJmcmFtZVwiOlwiMFwiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJ6LWluZGV4XCI6IFwiNlwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzk0MGJhLWJya19zbGlkZV9lbGVtZW50LTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnMTAwJScsJzEwMCUnLCcxMDAlJywnMTAwJSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtcmVzaXplbWUgcnMtcGFyYWxsYXhsZXZlbC0zXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydyaWdodCcsJ3JpZ2h0JywncmlnaHQnLCdyaWdodCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnLTQ5MScsJy00OTEnLCctNDkxJywnLTQ5MSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2liaWxpdHk9XCJbJ29uJywnb24nLCdvZmYnLCdvZmYnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJ6LWluZGV4XCI6IFwiN1wiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzViMjc1LWJya19zbGlkZV9lbGVtZW50LTQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnNjg2YXV0bycsJzY4NmF1dG8nLCc2ODZhdXRvJywnNjg2YXV0byddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnNjg2cHgnLCc2ODZweCcsJzY4NnB4JywnNjg2cHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtcmVzaXplbWUgcnMtcGFyYWxsYXhsZXZlbC0xXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyctMzE4JywnLTMxOCcsJy0zMTgnLCctMzE4J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJy0xMScsJy0xMScsJy0xMScsJy0xMSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12aXNpYmlsaXR5PVwiWydvbicsJ29uJywnb2ZmJywnb2ZmJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiei1pbmRleFwiOiBcIjhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy84YjI5NS1icmtfc2xpZGVfZWxlbWVudC01LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzYzOWF1dG8nLCc2MzlhdXRvJywnNjM5YXV0bycsJzYzOWF1dG8nXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJbJzI5MXB4JywnMjkxcHgnLCcyOTFweCcsJzI5MXB4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHRwLXJlc2l6ZW1lIHJzLXBhcmFsbGF4bGV2ZWwtMlwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci00XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnLTE0NycsJy0xNDcnLCctMTQ3JywnLTE0NyddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxMjAnLCcxMjAnLCcxMjAnLCcxMjAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdmlzaWJpbGl0eT1cIlsnb24nLCdvbicsJ29mZicsJ29mZiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmFzZWFsaWduPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgXCJ6LWluZGV4XCI6IFwiOVwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzL2U3Zjc0LWJya19zbGlkZV9lbGVtZW50LTYucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnMjk1YXV0bycsJzI5NWF1dG8nLCcyOTVhdXRvJywnMjk1YXV0byddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnMjk1cHgnLCcyOTVweCcsJzI5NXB4JywnMjk1cHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtcmVzaXplbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItN1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ3JpZ2h0JywncmlnaHQnLCdsZWZ0JywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyc5MicsJzc5JywnMTUnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzMnLCcxNScsJzE1MCcsJzkwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxNTAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIno6MDtyWDowO3JZOjA7clo6MDtzWDowLjk7c1k6MC45O3NrWDowO3NrWTowO29wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBcInotaW5kZXhcIjogXCIxMFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzL2RmYTFmLWJya19zbGlkZV9lbGVtZW50LTcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnMzE1YXV0bycsJzI2MHB4JywnMjIwcHgnLCcyMDBweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnNDA5cHgnLCczMzhweCcsJzI4NicsJzI5M3B4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWJhbm5lcnRpbWVyIHRwLWJvdHRvbVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8Lz5cclxuIFxyXG4gKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cImJyay1oZWFkZXIgYnJrLWhlYWRlcl9zdHlsZS0yIGJyay1oZWFkZXJfc2tpbi0yIGQtbGctZmxleCBmbGV4LWNvbHVtbiBwb3NpdGlvbi1maXhlZCBicmstaGVhZGVyX2NvbG9yLXdoaXRlXCJcclxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgZGF0YS1sb2dvLXNyYz1cImltZy9sb2dvLWRhcmstMi5wbmdcIlxyXG4gICAgICBkYXRhLWJnLW1vYmlsZT1cImltZy9icmstYmctbW9iaWxlLW1lbnUuanBnXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJyay1oZWFkZXJfX21haW4tYmFyIGJyay1oZWFkZXJfYm9yZGVyLWJvdHRvbVwiXHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcycHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvIHByLTQwIGFsaWduLXNlbGYtbGctc3RyZXRjaCBvcmRlci02IG9yZGVyLWxnLWZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaW5mby1tZW51LW9wZW4gYnJrLWluZm8tbWVudS1vcGVuX3NraW4tMiBicmstaGVhZGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstbGluZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWNlbnRlci1saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaW5mby1tZW51LW9wZW5fX3RpdGxlXCI+U2lkZSBNZW51PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvIGFsaWduLXNlbGYtbGctc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYnJrLW5hdiBicmstaGVhZGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLW5hdl9fbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJrLW5hdl9fY2hpbGRyZW4gYnJrLW5hdl9fZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgZGF0YS1icmstbGlicmFyeT1cImNvbXBvbmVudF9fdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SG9tZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19tZWdhLW1lbnUgYnJrLW5hdi1kcm9wLWRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay10YWJzIGJyay10YWJzLWhvdmVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyay10YWJzLW5hdiBmb250X19mYW1pbHktb3Blbi1zYW5zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJrLXRhYiBmb250X193ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10YXNrc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVtb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJrLXRhYiBmb250X193ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cm9waHlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVQYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmstdGFiIGZvbnRfX3dlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxpZmUtcmluZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcG9ydCAmIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay10YWJzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLXRhYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyX2JvcmRlci1yaWdodCBwdC1sZy0yMCBwYi1sZy0zMCBwYi0xMCBicmstaGVhZGVyX2gtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3QgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fYWdlbmN5X2FuaW1hdGlvbi5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wYXBlci1wbGFuZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VuY3kgQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fYWdlbmN5X2ZsdWlkLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbmN5IEZsdWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fYWdlbmN5X21vZGVybi5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1naWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5jeSBNb2Rlcm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19hZ2VuY3lfdXJiYW4uaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdW5pdmVyc2l0eVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VuY3kgVXJiYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19hcnQuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbmV3c3BhcGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1vX3NhYXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FtZXJhLXJldHJvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNBQVNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLXN1Y2Nlc3MgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIuIDEuNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fd2ludGVyX3RyaXBfYWdlbmN5Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNub3dmbGFrZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaW50ZXIgVHJpcCBBZ2VuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLXN1Y2Nlc3MgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIuIDEuNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1uYXZfX2hlYWRlciBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyX2JvcmRlci1yaWdodCBwdC1sZy0yMCBwYi1sZy0zMCBwYi0xMCBicmstaGVhZGVyX2gtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3QgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fY29uc3RydWN0aW9uLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhvbWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3RydWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fY3JlYXRpdmVfYWdlbmN5Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWFuZ3J5Y3JlYXRpdmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRpdmUgQWdlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fZnJlZWxhbmNlX2Jsb2cuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1mcmllbmRzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyZWVsYW5jZSBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fZnJlZWxhbmNlX3BvcnRmb2xpby5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wb3J0cmFpdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmVlbGFuY2UgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fbG9naXN0aWMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJ1Y2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naXN0aWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb193ZWJzaXRlX2FnZW5jeS5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1pbWFnZXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Vic2l0ZSBBZ2VuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb193aW50ZXJfdHJpcF9hZ2VuY3lfY3RhLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNub3dmbGFrZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaW50ZXIgRXZlbnQgQW5vdW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctc3VjY2VzcyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlci4gMS43XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW5hdl9faGVhZGVyIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXJfYm9yZGVyLXJpZ2h0IHB0LWxnLTIwIHBiLWxnLTMwIHBiLTEwIGJyay1oZWFkZXJfaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdCBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19zaG9wX2Nsb3RoZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHNoaXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgQ2xvdGhlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctd2FybmluZyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1vX3Nob3BfZHJvbmUuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcGhvZW5peC1zcXVhZHJvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIERyb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy13YXJuaW5nIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fc2hvcF9lbGVjdHJvbmljcy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ib2x0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgRWxlY3Ryb25pY3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLXdhcm5pbmcgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19zaG9wX21vZGVybi5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW9wbGUtY2FycnlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBNb2Rlcm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLXdhcm5pbmcgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19zaG9wX3RyZW5keS5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1kb2xsYXItc2lnblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIFRyZW5keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctd2FybmluZyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1vX3Nob3BfdmlkZW8uaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdmlkZW9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCBWaWRlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctd2FybmluZyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVtb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyX2JvcmRlci1yaWdodCBwdC1sZy0yMCBwYi1sZy0zMCBwYi0xMCBicmstaGVhZGVyX2gtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3QgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fbWFnYXppbmUuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtd2luZG93LXJlc3RvcmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFnYXppbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19waG90b2dyYXBoeS5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYW1lcmEtcmV0cm9cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19wcm9kdWN0X2xhbmRpbmcuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtcHJvZHVjdC1odW50XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3QgTGFuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctc3VjY2VzcyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fcHJvZHVjdF9zcG9ydC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mdXRib2xcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3BvcnRzIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1zdWNjZXNzIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtb19zcGEuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZG92ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcGEgJiBCZWF1dHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLXN1Y2Nlc3MgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1vX21pbmltYWxpc3RpY19wb3J0Zm9saW8uaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FtZXJhLXJldHJvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvcnRmb2xpbyBNaW5pbWFsaXN0aWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLXN1Y2Nlc3MgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXIuIDEuM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbW9fdHJhdmVsX2FnZW5jeS5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGFuZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmF2ZWwgQWdlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1zdWNjZXNzIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyLiAxLjFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLXRhYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZyBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1lbGVtZW50LWJhc2UgYnJrLWhlYWRlcl9ib3JkZXItcmlnaHQgdGV4dC1jZW50ZXIgbGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJnPVwiaW1nLzY2MngyOTUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDc2cHgpXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstZWxlbWVudC1iYXNlX19iZWZvcmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1lbGVtZW50LWJhc2VfX2FmdGVyIGxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJnPVwiaW1nL3NoYXBlLTAxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstZWxlbWVudC1iYXNlX19jb250ZW50IGNlbnRlci1hYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xvZ28uc3ZnXCIgYWx0PVwiYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5zaWRlLW91dCBidG4tbWQgYm9yZGVyLXJhZGl1cy0yNSBmb250X19mYW1pbHktb3Blbi1zYW5zIGZvbnRfX3dlaWdodC1ib2xkIGJ0bi1pbnNpZGUtb3V0LWludmVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnJrLWxpYnJhcnk9XCJjb21wb25lbnRfX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJlZm9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkNsaWNrIE1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1cmNoYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9ib3JkZXItcmlnaHQgcHQtbGctMjAgcGItbGctNjAgcGItMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNzZweClcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0IGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImhvbWUtcGFnZS0xLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaG9tZS1wYWdlLTIuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY3ViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBwYWdlIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJob21lLXBhZ2UtMy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1xcmNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaG9tZS1wYWdlLTQuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1sYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBwYWdlIDRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJob21lLXBhZ2UtNS5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS11bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIHBhZ2UgNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImhvbWUtcGFnZS02Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWN1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1uYXZfX2hlYWRlciBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9ib3JkZXItcmlnaHQgcHQtbGctMjAgcGItbGctNjAgcGItMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNzZweClcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0IGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBwYWdlIDdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLWluZm8gZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSA4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1pbmZvIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU09PTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIHBhZ2UgOVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctaW5mbyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNPT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBwYWdlIDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1pbmZvIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU09PTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIHBhZ2UgMTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLWluZm8gZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSAxMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctaW5mbyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNPT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicmstaGVhZGVyX2JvcmRlci1yaWdodCBwdC1sZy0yMCBwYi1sZy02MCBwYi0yMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCJjYWxjKDEwMCUgLSA3NnB4KVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3QgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIHBhZ2UgMTNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLWluZm8gZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSAxNFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctaW5mbyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNPT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBwYWdlIDE1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1pbmZvIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU09PTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIHBhZ2UgMTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pbmZvIGJnLWluZm8gZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT09OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgcGFnZSAxN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2luZm8gYmctaW5mbyBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNPT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSBwYWdlIDE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1pbmZvIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU09PTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstdGFiLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMwIG1iLTMwIHByLTE1IHByLWxnLTAgcGwtMTUgcGwtbGctMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9XCJpbWcvdGlsZXMtc2ltcGxlLTEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci0xNSBwci1sZy0wIHBsLTE1IHBsLWxnLTE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250X19mYW1pbHktbW9udHNlcnJhdCB0ZXh0LXVwcGVyY2FzZSBmb250X19zaXplLTI0IG1iLTQwIG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG93IEdsb3NzaWVyIEhhY2tlZCBTb2NpYWwgTWVkaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJrLWRhcmstZm9udC1jb2xvciB0ZXh0LWxlZnQgbWItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPbiBhIFRodXJzZGF5IGFmdGVybm9vbiBpbiBsYXRlIHNwcmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMi15ZWFyLW9sZCBHbG9zc2llciBmb3VuZGVyIGFuZCBDRU8gRW1pbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWlzcyByaWRlcyB0aGUgZWxldmF0b3IgdG8gdGhlIHBlbnRob3VzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsIG9mIGhlciBjb21wYW55J3MgZG93bnRvd24gTWFuaGF0dGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZHF1YXJ0ZXJzLiBTaGUncyBhIHRob3JvdWdobHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWxsZW5uaWFsIGdpcmxib3NzIGluIGplYW5zLCBzbmVha2VycyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIHJveWFsIGJsdWUgc3dlYXRzaGlydCB3aXRoIHdlaXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1icm9pZGVyZWQgaW4gc21hbGwgd2hpdGUgc2NyaXB0LiBIZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWlyIGlzIHB1bGxlZCBiYWNrIGluIGEgcG9ueXRhaWwsIGFuZCBmb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgZm91bmRlciBvZiBhIGJlYXV0eSBwcm9kdWN0cyBjb21wYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoZSB3ZWFycyBub3RhYmx5IGxpdHRsZSBtYWtldXAgLSBqdXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZSBtYXNjYXJhIGFuZCBwb3NzaWJseSBhIHN3aXBlIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvc3NpZXIgTGlwIEdsb3NzLCBhIHJlY2VudCBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsZWFzZSB0b3V0ZWQgb25saW5lIGFzIGhhdmluZyBhIFwiZnV6enlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2UtZm9vdCBhcHBsaWNhdG9yLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJrLWRhcmstZm9udC1jb2xvciB0ZXh0LWxlZnQgbWItMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIGZvcm1lciB0ZWVuIG1vZGVsLCBXZWlzcyBpcyBiZWF1dGlmdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXQgbm90IGludGltaWRhdGluZywgZWl0aGVyIGJ5IG5hdHVyZSBvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5IGRlc2lnbiAocHJvYmFibHkgYSBsaXR0bGUgb2YgYm90aCkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWZ0ZXIgYWxsLCBoZXIgY29tcGFueeKAmXMgcG9wdWxhcml0eSBpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGx5IHJlbGF0ZWQgdG8gaGVyIGFiaWxpdHkgdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWx0aXZhdGUgYSBmZWVsaW5nIG9mIGZyaWVuZHNoaXAgd2l0aCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW9uZyBoZXIgY3VzdG9tZXJzLiBKdXN0IGVub3VnaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0YWJpbGl0eSBpcyBrZXkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWJvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb2xsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29sbGVjdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJrLW5hdl9fY2hpbGRyZW4gYnJrLW5hdl9fZHJvcC1kb3duLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaG9wPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLW5hdl9fc3ViLW1lbnUgYnJrLW5hdi1kcm9wLWRvd24gZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNob3AtY29tcG9uZW50cy1mbGlwLmh0bWxcIj5TaG9wIGZsaXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2hvcC1jb21wb25lbnRzLWdyaWQuaHRtbFwiPlNob3AgZ3JpZDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaG9wLWNvbXBvbmVudHMtZ3JpZC1maWx0ZXIuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgZ3JpZC1maWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNob3AtY29tcG9uZW50cy1ob25leWNvbWIuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgaG9uZXljb21iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaG9wLWNvbXBvbmVudHMtaXRlbS1zaWRlYmFyLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIGl0ZW0gd2l0aCBzaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaG9wLWNvbXBvbmVudHMtbGlzdC5odG1sXCI+U2hvcCBsaXN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNob3AtY29tcG9uZW50cy1tYXNvbnJ5Lmh0bWxcIj5TaG9wIG1hc29ucnk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZGVtb19wcm9kdWN0X2xhbmRpbmcuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNob3Agc2luZ2xlIHByb2R1Y3QgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2hvcC1jb21wb25lbnRzLXJvdy5odG1sXCI+U2hvcCByb3c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2hvcC1jb21wb25lbnRzLXRpbGVzLmh0bWxcIj5TaG9wIHRpbGVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNhcnQuaHRtbFwiPlNob3AgY2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaGVja291dC5odG1sXCI+U2hvcCBjaGVja291dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaG9wLWNvbXBvbmVudHMtY29tcGFyZS5odG1sXCI+U2hvcCBDb21wYXJlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJrLW5hdl9fY2hpbGRyZW4gYnJrLW5hdl9fZnVsbC13aWR0aCBicmstbmF2X19kcm9wLWRvd24tZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVsZW1lbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1uYXZfX21lZ2EtbWVudSBicmstbmF2LWRyb3AtZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMiBjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbmF2X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUxFTUVOVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyX2JvcmRlci1yaWdodCBwdC1sZy0yMCBwYi1sZy0zMCBwYi0xMCBicmstaGVhZGVyX2gtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3QgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWNjb3JkaW9ucy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1pZC1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NvcmRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWxlcnRzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXVuaXZlcnNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsZXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFwcC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1jdWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJiYWNrZ3JvdW5kcy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXIgZmEtZ2VtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNrZ3JvdW5kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImJyZWFkY3J1bWJzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWxpZmUtcmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJlYWRjcnVtYnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJidXR0b25zLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJDRkEuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1sYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0ZBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY29udGVudC1zbGlkZXJzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXFyY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVudCBzbGlkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTIgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW5hdl9faGVhZGVyIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVMRU1FTlRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9ib3JkZXItcmlnaHQgcHQtbGctMjAgcGItbGctMzAgcGItMTAgYnJrLWhlYWRlcl9oLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0IGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNvdW50ZG93bi5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS11bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3VudGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjb3VudGVyLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWN1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjb3VudGVyLWRhcmsuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFyIGZhLWdlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ291bnRlciBkYXJrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZGVsaW1pdGVycy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1pZC1jYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpbWl0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZGl2aWRlcnMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbGlmZS1yaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXZpZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImZsaXAtYm94ZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWFsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxpcCBib3hlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImZvcm0tY29udHJvbHMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdGFza3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcm0gY29udHJvbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJnb29nbGUtbWFwcy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1tYXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBtYXBzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTIgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW5hdl9faGVhZGVyIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVMRU1FTlRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9ib3JkZXItcmlnaHQgcHQtbGctMjAgcGItbGctMzAgcGItMTAgYnJrLWhlYWRlcl9oLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0IGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImltYWdlLWNhcHRpb24tcGFyYWxsYXguaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1sYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2UgY2FwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImltYWdlLWZyYW1lcy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1xcmNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlIGZyYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImltYWdlLW1hcC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS11bml2ZXJzaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZSBtYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpY29ucy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mb250LWF3ZXNvbWUtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faW5mbyBiZy1zdWNjZXNzIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmZvLWJveC5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1jdWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvIGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImxpc3RzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhciBmYS1nZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibG9nby5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXIgZmEtZ2VtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWVkaWEtZW1iZWRzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWlkLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhIGVtYmVkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2luYXRpb24uaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbGlmZS1yaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTIgY29sLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW5hdl9faGVhZGVyIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVMRU1FTlRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9ib3JkZXItcmlnaHQgcHQtbGctMjAgcGItbGctMzAgcGItMTAgYnJrLWhlYWRlcl9oLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0IGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhcmFsbGF4Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXRhc2tzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXJhbGxheFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhcmFsbGF4LXZpZGVvLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tbGFuZ3VhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcmFsbGF4IHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJpY2luZy10YWJsZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtcXJjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljaW5nIHRhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2dyZXNzLWNpcmNsZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdW5pdmVyc2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3MgY2lyY2xlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb21vLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWlkLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2VjdGlvbi10aXRsZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY3ViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VjdGlvbiB0aXRsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzZXF1ZW5jZS5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXIgZmEtZ2VtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXF1ZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInNlcnZpY2VzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWlkLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2hhcGUtYm94Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNoYXBlIGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0yIGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1uYXZfX2hlYWRlciBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTEVNRU5UU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXJfYm9yZGVyLXJpZ2h0IHB0LWxnLTIwIHBiLWxnLTMwIHBiLTEwIGJyay1oZWFkZXJfaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdCBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzbGlkZXJzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNsaWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzb2NpYWwuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtaWQtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29jaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwic3RlcHMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY3ViZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RlcHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0YWJiZWQtY29udGVudHMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1sYW5ndWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFiYmVkIGNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGFibGVzLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXFyY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFibGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGFicy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXIgZmEtZ2VtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGFncy5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10YXNrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlYW0uaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdW5pdmVyc2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVhbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2dyZXNzLWJhcnMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdW5pdmVyc2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3MgYmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0yIGNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1uYXZfX2hlYWRlciBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTEVNRU5UU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXJfYm9yZGVyLXJpZ2h0IHB0LWxnLTIwIHBiLWxnLTMwIHBiLTEwIGJyay1oZWFkZXJfaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdCBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWFtLW1lbWJlci5odG1sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXItbGlzdF9faWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10YXNrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVhbS1tZW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZXN0aW1vbmlhbHMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdW5pdmVyc2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGltb25pYWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGlsZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWFsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0aW1lbGluZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbGlmZS1yaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1lbGluZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0aXRsZXMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtaWQtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGQtZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidHlwaW5nLXJvdGF0b3IuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFiIGZhLWFkdmVyc2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBpbmcgcm90YXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRkLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInN2Zy1wYXR0ZXJuLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1saXN0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhYiBmYS1hZHZlcnNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvY2tzIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZC1lZmZlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwYW5lbHMuaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyLWxpc3RfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbWFsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFuZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db250YWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy1hdXRvIGFsaWduLXNlbGYtbGctY2VudGVyIGQtbm9uZSBkLWxnLWJsb2NrIGJyay1hbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9fbG9nbyBicmstaGVhZGVyX19pdGVtIEBAbW9kaWZpZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9fbG9nby0xIGxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXNyYz1cImltZy9sb2dvLTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiYWx0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1oZWFkZXJfX2xvZ28tMiBsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9XCJpbWcvbG9nby1kYXJrLTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiYWx0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctYXV0byBhbGlnbi1zZWxmLWxnLXN0cmV0Y2ggdGV4dC1sZy1yaWdodCBicmstYWxpZ24tcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXJfX2VsZW1lbnQgYnJrLWhlYWRlcl9fZWxlbWVudF9za2luLTEgYnJrLWhlYWRlcl9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo4ODAwMjAwMzA0MFwiIGNsYXNzTmFtZT1cImJyay1oZWFkZXJfX2VsZW1lbnQtLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXBob25lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyX19lbGVtZW50LS1sYWJlbCBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA4IDgwMCAyMDAgMzAgNDBcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydCBicmstaGVhZGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2FydC5odG1sXCIgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fb3BlbiBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctYmFza2V0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19sYWJlbCBmb250X19mYW1pbHktbW9udHNlcnJhdCBmb250X193ZWlnaHQtbWVkaXVtIHRleHQtdXBwZXJjYXNlIGxldHRlci1zcGFjaW5nLTYwIGZvbnRfX3NpemUtMTAgb3BhY2l0eS04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE15IGNhcnRcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X190aXRsZVwiPlNob3BwaW5nIENhcnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX2NvdW50XCI+NDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnRfX2ZhbWlseS1tb250c2VycmF0IGZvbnRfX3dlaWdodC1ib2xkIGZvbnRfX3NpemUtMThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0taW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiaW1nLzk1eDk1XzEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLXRpdGxlLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnRfX2ZhbWlseS1tb250c2VycmF0IGZvbnRfX3NpemUtMTYgbGluZV9faGVpZ2h0LTIxIGZvbnRfX3dlaWdodC1zZW1pYm9sZCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHNob3AgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0tb2xkLXByaWNlIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJDI2LjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0tcHJpY2UgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkMTYuMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstcXVhbnRpdHlfX2Fycm93cyBtaW51c1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLXF1YW50aXR5X192YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1YW50aXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstcXVhbnRpdHlfX2Fycm93cyBwbHVzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLXJlbW92ZSByZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0taW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiaW1nLzk1eDk1XzIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLXRpdGxlLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnRfX2ZhbWlseS1tb250c2VycmF0IGZvbnRfX3NpemUtMTYgbGluZV9faGVpZ2h0LTIxIGZvbnRfX3dlaWdodC1zZW1pYm9sZCB0ZXh0LXRydW5jYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIHNob3AgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0tb2xkLXByaWNlIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJDI2LjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0tcHJpY2UgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkMTYuMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstcXVhbnRpdHlfX2Fycm93cyBtaW51c1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLXF1YW50aXR5X192YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1YW50aXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1xdWFudGl0eV9fYXJyb3dzIHBsdXNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0tcmVtb3ZlIHJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXMtY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19wcm9kdWN0LS1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9XCJpbWcvOTV4OTVfMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImFsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fcHJvZHVjdC0tdGl0bGUtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udF9fZmFtaWx5LW1vbnRzZXJyYXQgZm9udF9fc2l6ZS0xNiBsaW5lX19oZWlnaHQtMjEgZm9udF9fd2VpZ2h0LXNlbWlib2xkIHRleHQtdHJ1bmNhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgc2hvcCBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19wcm9kdWN0LS1vbGQtcHJpY2UgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkMjYuMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19wcm9kdWN0LS1wcmljZSBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQxNi4wMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLXF1YW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1xdWFudGl0eV9fYXJyb3dzIG1pbnVzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicmstcXVhbnRpdHlfX3ZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLXF1YW50aXR5X19hcnJvd3MgcGx1c1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19wcm9kdWN0LS1yZW1vdmUgcmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10aW1lcy1jaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNyYz1cImltZy85NXg5NV80LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19wcm9kdWN0LS10aXRsZS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250X19mYW1pbHktbW9udHNlcnJhdCBmb250X19zaXplLTE2IGxpbmVfX2hlaWdodC0yMSBmb250X193ZWlnaHQtc2VtaWJvbGQgdGV4dC10cnVuY2F0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBzaG9wIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLW9sZC1wcmljZSBmb250X19mYW1pbHktbW9udHNlcnJhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQyNi4wMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLXByaWNlIGZvbnRfX2ZhbWlseS1tb250c2VycmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJDE2LjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstcXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLXF1YW50aXR5X19hcnJvd3MgbWludXNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1xdWFudGl0eV9fdmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstcXVhbnRpdHlfX2Fycm93cyBwbHVzXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX3Byb2R1Y3QtLXJlbW92ZSByZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLW1pbmktY2FydF9fbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX2xpbmtzLS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJicmstbWluaS1jYXJ0X19saW5rcy0tY2FydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJjYXJ0Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1iYXNrZXRcIj48L2k+IENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1taW5pLWNhcnRfX2xpbmtzLS1jaGVja291dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJjaGVja291dC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2VlZCB0byBjaGVja291dHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlcl9fZWxlbWVudCBicmstaGVhZGVyX19lbGVtZW50X3NraW4tMSBicmstaGVhZGVyX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyay1oZWFkZXJfX2VsZW1lbnQtLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstaGVhZGVyX19lbGVtZW50LS1sYWJlbCBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICBNeSB3aXNobGlzdFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1oZWFkZXJfX2NvbXBhcmUgYnJrLWhlYWRlcl9fY29tcGFyZV93aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDZcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluc2lkZS1vdXQgYnRuLSBtbC0yMCBtci0xMCBicmstaGVhZGVyX19pdGVtIGJyay1oZWFkZXJfX2J0biBidG4tc20tMSBib3JkZXItcmFkaXVzLTI1IGZvbnRfX2ZhbWlseS1vcGVuLXNhbnMgZm9udF9fd2VpZ2h0LWJvbGQgbS0wIHBsLTMwIHByLTMwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYnJrLWxpYnJhcnk9XCJjb21wb25lbnRfX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmVmb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eSBub3d7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnRfX2ZhbWlseS10aW1lcy1uZXctcm9tYW4gdGV4dC1sb3dlcmNhc2UgZm9udF9fc3R5bGUtaXRhbGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDM5JFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPkNsaWNrIE1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWZ0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgQnV5IG5vd3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udF9fZmFtaWx5LXRpbWVzLW5ldy1yb21hbiB0ZXh0LWxvd2VyY2FzZSBmb250X19zdHlsZS1pdGFsaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICBmb3JcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgMzkkXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWxhbmcgYnJrLWxhbmdfaW50ZXJhY3RpdmUgYnJrLWhlYWRlcl9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWxhbmdfX3NlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIFVTIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhcmV0LWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstbGFuZ19fb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1sYW5ndWFnZVwiPjwvaT4gTGFuZ3VhZ2V7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1sYW5nX19hY3RpdmUtbGFuZyB0ZXh0LXdoaXRlIGJyay1iZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVVNcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyay1sYW5nX19vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VUE8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlVTPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5QTDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RVM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaW5mby1tZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaW5mby1tZW51X19iYXJcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnJrLWluZm8tbWVudV9fY2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJicmstaW5mby1tZW51X19oZWFkZXIgZm9udF9fZmFtaWx5LW1vbnRzZXJyYXQgZm9udF9fd2VpZ2h0LWJvbGQgZm9udF9fc2l6ZS0yMVwiPlxyXG4gICAgICAgICAgICBNb3JlIGluZm9cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzIG1iLTIwXCJcclxuICAgICAgICAgICAgZGF0YS1icmstbGlicmFyeT1cImNvbXBvbmVudF9fd2lkZ2V0c1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWNhdGVnb3JpZXNfX2xpc3QgZm9udF9fZmFtaWx5LW9wZW4tc2FucyBmb250X19zaXplLTE0IGZvbnRfX3dlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstY2F0ZWdvcmllc19faXRlbS1uYW1lXCI+R2VuZXJhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzX19pdGVtLWNvdW50XCI+MTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnJrLWNhdGVnb3JpZXNfX2l0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstY2F0ZWdvcmllc19faXRlbS1uYW1lXCI+TW9ja3Vwczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzX19pdGVtLWNvdW50XCI+MTQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnJrLWNhdGVnb3JpZXNfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzX19pdGVtLW5hbWVcIj5IVE1MICYgQ1NTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWNhdGVnb3JpZXNfX2l0ZW0tY291bnRcIj4xODwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmstY2F0ZWdvcmllc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJrLWNhdGVnb3JpZXNfX2l0ZW0tbmFtZVwiPkxvZ288L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstY2F0ZWdvcmllc19faXRlbS1jb3VudFwiPjIxPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmstY2F0ZWdvcmllc19faXRlbS1uYW1lXCI+V2ViIERlc2lnbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyay1jYXRlZ29yaWVzX19pdGVtLWNvdW50XCI+Njwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYnJrLWluZm8tbWVudV9faGVhZGVyIGZvbnRfX2ZhbWlseS1tb250c2VycmF0IGZvbnRfX3dlaWdodC1ib2xkIGZvbnRfX3NpemUtMjFcIj5cclxuICAgICAgICAgICAgT3VyIGluc3RhZ3JhbVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVmYXVsdC1zbGlkZXIgZG90cy1iYXNlLXNraW4gZG90cy1iYXNlLWNvbG9yIHNsaWNrLWxvYWRpbmcgbXQtMTVcIlxyXG4gICAgICAgICAgICBkYXRhLXNsaWNrPSd7XCJzbGlkZXNUb1Nob3dcIjogMSwgXCJzbGlkZXNUb1Njcm9sbFwiOiAxLCBcImRvdHNcIjogdHJ1ZSwgXCJhdXRvcGxheVwiOiBmYWxzZSwgXCJhdXRvcGxheVNwZWVkXCI6IDQwMDB9J1xyXG4gICAgICAgICAgICBkYXRhLWJyay1saWJyYXJ5PVwic2xpZGVyX19zbGlja1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlcl9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nLzMwOXgyMDZfMS5qcGdcIiBhbHQ9XCJhbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXItc2xpZGVyX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiaW1nL2hlYWQtaWNvbi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImFsdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1zbGlkZXJfX2NvbnRlbnQtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnRfX2ZhbWlseS1tb250c2VycmF0IGZvbnRfX3dlaWdodC1ib2xkIGZvbnRfX3NpemUtMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEBiZXJzZXJrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250X19zaXplLTE0XCI+MTcgSG91cnMgYWdvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1zbGlkZXJfX3RleHQgZm9udF9fc2l6ZS0xNCBsaW5lX19oZWlnaHQtMjFcIj5cclxuICAgICAgICAgICAgICAgICAgQWVuZWFuIHZ1bHB1dGF0ZSBlbGVpZmVuZCB0ZWxsdXMuIEFlbmVhbiBsZW8gbGlndWxhLCBwb3J0dGl0b3JcclxuICAgICAgICAgICAgICAgICAgZXUsIGNvbnNlcXVhdCB2aXRhZSwgZWxlaWZlbmQgYWMsIGVuaW0uIEFsaXF1YW0gbG9yZW0gYW50ZSxcclxuICAgICAgICAgICAgICAgICAgZGFwaWJ1cyBpbiwgdml2ZXJyYVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXItc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXItc2xpZGVyX19pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9XCJpbWcvMzA5eDIwNl8yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiYWx0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlcl9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBQUFBQUNINUJBRUtBQUVBTEFBQUFBQUJBQUVBQUFJQ1RBRUFPdz09XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNyYz1cImltZy9oZWFkLWljb24ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhbHRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1oZWFkZXItc2xpZGVyX19jb250ZW50LS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250X19mYW1pbHktbW9udHNlcnJhdCBmb250X193ZWlnaHQtYm9sZCBmb250X19zaXplLTE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBAYmVyc2Vya1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udF9fc2l6ZS0xNFwiPjE3IEhvdXJzIGFnbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJyay1oZWFkZXItc2xpZGVyX190ZXh0IGZvbnRfX3NpemUtMTQgbGluZV9faGVpZ2h0LTIxXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFlbmVhbiB2dWxwdXRhdGUgZWxlaWZlbmQgdGVsbHVzLiBBZW5lYW4gbGVvIGxpZ3VsYSwgcG9ydHRpdG9yXHJcbiAgICAgICAgICAgICAgICAgIGV1LCBjb25zZXF1YXQgdml0YWUsIGVsZWlmZW5kIGFjLCBlbmltLiBBbGlxdWFtIGxvcmVtIGFudGUsXHJcbiAgICAgICAgICAgICAgICAgIGRhcGlidXMgaW4sIHZpdmVycmFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlcl9faW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFBQUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3JjPVwiaW1nLzMwOXgyMDZfMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImFsdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1zbGlkZXJfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhenlsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUFBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmM9XCJpbWcvaGVhZC1pY29uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiYWx0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlcl9fY29udGVudC0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udF9fZmFtaWx5LW1vbnRzZXJyYXQgZm9udF9fd2VpZ2h0LWJvbGQgZm9udF9fc2l6ZS0xNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQGJlcnNlcmtcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnRfX3NpemUtMTRcIj4xNyBIb3VycyBhZ288L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJicmstaGVhZGVyLXNsaWRlcl9fdGV4dCBmb250X19zaXplLTE0IGxpbmVfX2hlaWdodC0yMVwiPlxyXG4gICAgICAgICAgICAgICAgICBBZW5lYW4gdnVscHV0YXRlIGVsZWlmZW5kIHRlbGx1cy4gQWVuZWFuIGxlbyBsaWd1bGEsIHBvcnR0aXRvclxyXG4gICAgICAgICAgICAgICAgICBldSwgY29uc2VxdWF0IHZpdGFlLCBlbGVpZmVuZCBhYywgZW5pbS4gQWxpcXVhbSBsb3JlbSBhbnRlLFxyXG4gICAgICAgICAgICAgICAgICBkYXBpYnVzIGluLCB2aXZlcnJhXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWxvYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicmstbG9hZGVyX19sb2FkZXJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnJvdXNlbFwiO1xyXG5pbXBvcnQgJCwgeyBleHRlbmQgfSBmcm9tIFwianF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob2xhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYXNkYXNkYXNcIiwgalF1ZXJ5KTtcclxuICAgIGpRdWVyeShcIiNyZXZfc2xpZGVyXzVfMVwiKVxyXG4gICAgICAuc2hvdygpXHJcbiAgICAgIC5yZXZvbHV0aW9uKHtcclxuICAgICAgICBzbGlkZXJUeXBlOiBcInN0YW5kYXJkXCIsXHJcbiAgICAgICAganNGaWxlTG9jYXRpb246IFwidmVuZG9yL3JldnNsaWRlci9qcy9cIixcclxuICAgICAgICBzbGlkZXJMYXlvdXQ6IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgICAgIGRvdHRlZE92ZXJsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogXCJvZmZcIixcclxuICAgICAgICAgIGtleWJvYXJkX2RpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbE5hdmlnYXRpb246IFwib2ZmXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbFJldmVyc2U6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgb25Ib3ZlclN0b3A6IFwib2ZmXCIsXHJcbiAgICAgICAgICBhcnJvd3M6IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9vbm1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVfb25sZWF2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9kZWxheTogMjAwLFxyXG4gICAgICAgICAgICBoaWRlX2RlbGF5X21vYmlsZTogMTIwMCxcclxuICAgICAgICAgICAgdG1wOiBcIlwiLFxyXG4gICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoX29mZnNldDogMTAsXHJcbiAgICAgICAgICAgICAgdl9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgIHZfYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgaF9vZmZzZXQ6IDEwLFxyXG4gICAgICAgICAgICAgIHZfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc3BvbnNpdmVMZXZlbHM6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXHJcbiAgICAgICAgdmlzaWJpbGl0eUxldmVsczogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcclxuICAgICAgICBncmlkd2lkdGg6IFsxMjAwLCA5OTIsIDc2OCwgNTc2XSxcclxuICAgICAgICBncmlkaGVpZ2h0OiBbOTYwLCA3NjgsIDk2MCwgNzIwXSxcclxuICAgICAgICBsYXp5VHlwZTogXCJub25lXCIsXHJcbiAgICAgICAgcGFyYWxsYXg6IHtcclxuICAgICAgICAgIHR5cGU6IFwibW91c2VcIixcclxuICAgICAgICAgIG9yaWdvOiBcInNsaWRlcmNlbnRlclwiLFxyXG4gICAgICAgICAgc3BlZWQ6IDQwMCxcclxuICAgICAgICAgIHNwZWVkYmc6IDAsXHJcbiAgICAgICAgICBzcGVlZGxzOiAwLFxyXG4gICAgICAgICAgbGV2ZWxzOiBbNCwgNiwgOCwgMTAsIDEyLCAzMCwgMzUsIDQwLCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MSwgNTVdLFxyXG4gICAgICAgICAgZGlzYWJsZV9vbm1vYmlsZTogXCJvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hhZG93OiAwLFxyXG4gICAgICAgIHNwaW5uZXI6IFwic3Bpbm5lcjJcIixcclxuICAgICAgICBzdG9wTG9vcDogXCJvZmZcIixcclxuICAgICAgICBzdG9wQWZ0ZXJMb29wczogLTEsXHJcbiAgICAgICAgc3RvcEF0U2xpZGU6IC0xLFxyXG4gICAgICAgIHNodWZmbGU6IFwib2ZmXCIsXHJcbiAgICAgICAgYXV0b0hlaWdodDogXCJvZmZcIixcclxuICAgICAgICBmdWxsU2NyZWVuQXV0b1dpZHRoOiBcIm9uXCIsXHJcbiAgICAgICAgZnVsbFNjcmVlbkFsaWduRm9yY2U6IFwib2ZmXCIsXHJcbiAgICAgICAgZnVsbFNjcmVlbk9mZnNldENvbnRhaW5lcjogXCJcIixcclxuICAgICAgICBmdWxsU2NyZWVuT2Zmc2V0OiBcIlwiLFxyXG4gICAgICAgIGRpc2FibGVQcm9ncmVzc0JhcjogXCJvblwiLFxyXG4gICAgICAgIGhpZGVUaHVtYnNPbk1vYmlsZTogXCJvblwiLFxyXG4gICAgICAgIGhpZGVTbGlkZXJBdExpbWl0OiAwLFxyXG4gICAgICAgIGhpZGVDYXB0aW9uQXRMaW1pdDogMCxcclxuICAgICAgICBoaWRlQWxsQ2FwdGlvbkF0TGlsbWl0OiAwLFxyXG4gICAgICAgIGRlYnVnTW9kZTogZmFsc2UsXHJcbiAgICAgICAgZmFsbGJhY2tzOiB7XHJcbiAgICAgICAgICBzaW1wbGlmeUFsbDogXCJvZmZcIixcclxuICAgICAgICAgIG5leHRTbGlkZU9uV2luZG93Rm9jdXM6IFwib2ZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlRm9jdXNMaXN0ZW5lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZyaUZvbGx5PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGhlaWdodD1kZXZpY2UtaGVpZ2h0LGluaXRpYWwtc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiPjwvbWV0YT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMjc3NUZGXCI+PC9tZXRhPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInRoZW1lZm9yZXN0LCB0aGVtZSwgaHRtbCwgdGVtcGxhdGVcIiAvPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cInRoZW1lZm9yZXN0LCB0aGVtZSwgaHRtbCwgdGVtcGxhdGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBpZD1cImJyay1kaXJlY3Rpb24tYm9vdHN0cmFwXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3MvYXNzZXRzL2Jvb3RzdHJhcC5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGlkPVwiYnJrLWNzcy1taW5cIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3MvYXNzZXRzL3N0eWxlcy5taW4uY3NzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQjRkSVlIS05CdDhCYzEycCtXWGNraHpjSUNvMHd0SkFvVThZWlRZNXFFMElkMUdTc2VUazZTK0wzQmxYZVZJVVwiXHJcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaWQ9XCJicmstc2tpbi1jb2xvclwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvY3NzL3NraW5zL2Jyay1ibHVlLmNzc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaWQ9XCJicmstYmFzZS1jb2xvclwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiL2Nzcy9za2lucy9icmstYmFzZS1jb2xvci5jc3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBpZD1cImJyay1kaXJlY3Rpb24tb2Zmc2V0c1wiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvY3NzL2Fzc2V0cy9vZmZzZXRzLmNzc1wiXHJcbiAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL3JldnNsaWRlci9jc3Mvc2V0dGluZ3MuY3NzXCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcGFnZVwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJicmstaGVhZGVyLW1vYmlsZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYnJrLWxpYnJhcnk9XCJjb21wb25lbnRfX2hlYWRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJrLWhlYWRlci1tb2JpbGVfX29wZW4gXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmstaGVhZGVyLW1vYmlsZV9fbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sb2dvLTIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Q2Fycm91c2VsIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI3Jldl9zbGlkZXJfNV8xX3dyYXBwZXIgLnRwLWxvYWRlci5zcGlubmVyMiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcxZmMgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIHsvKiA8c2NyaXB0IGRlZmVyPVwiZGVmZXJcIiBzcmM9XCIvanMvc2NyaXB0cy5taW4uanNcIj48L3NjcmlwdD4gKi99XHJcbiAgICAgICAgey8qIDxzY3JpcHRcclxuICAgICAgICAgIGRlZmVyPVwiZGVmZXJcIlxyXG4gICAgICAgICAgc3JjPVwiL3ZlbmRvci9yZXZzbGlkZXIvanMvanF1ZXJ5LnRoZW1lcHVuY2gudG9vbHMubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgZGVmZXI9XCJkZWZlclwiXHJcbiAgICAgICAgICBzcmM9XCIvdmVuZG9yL3JldnNsaWRlci9qcy9qcXVlcnkudGhlbWVwdW5jaC5yZXZvbHV0aW9uLm1pbi5qc1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PiAqL31cclxuICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICBkZWZlcj1cImRlZmVyXCJcclxuICAgICAgICAgIHNyYz1cIi92ZW5kb3IvcmV2c2xpZGVyL2pzL2V4dGVuc2lvbnMvcmV2b2x1dGlvbi5leHRlbnNpb24ubGF5ZXJhbmltYXRpb24ubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgZGVmZXI9XCJkZWZlclwiXHJcbiAgICAgICAgICBzcmM9XCIvdmVuZG9yL3JldnNsaWRlci9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLm5hdmlnYXRpb24ubWluLmpzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgZGVmZXI9XCJkZWZlclwiXHJcbiAgICAgICAgICBzcmM9XCIvdmVuZG9yL3JldnNsaWRlci9qcy9leHRlbnNpb25zL3Jldm9sdXRpb24uZXh0ZW5zaW9uLnBhcmFsbGF4Lm1pbi5qc1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGRlZmVyPVwiZGVmZXJcIlxyXG4gICAgICAgICAgc3JjPVwiL3ZlbmRvci9yZXZzbGlkZXIvanMvZXh0ZW5zaW9ucy9yZXZvbHV0aW9uLmV4dGVuc2lvbi5zbGlkZWFuaW1zLm1pbi5qc1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIGRlZmVyPVwiZGVmZXJcIlxyXG4gICAgICAgICAgc3JjPVwiL3ZlbmRvci9yZXZzbGlkZXIvanMvZXh0ZW5zaW9ucy9yZXZvbHV0aW9uLmV4dGVuc2lvbi5hY3Rpb25zLm1pbi5qc1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG5cclxuICAgICAgICB7LyogPHNjcmlwdD4gKi99XHJcbiAgICAgICAgey8qIHtjb25zb2xlLmxvZyhcImhvbGFcIiwgalF1ZXJ5KX0gKi99XHJcbiAgICAgICAgey8qIDwvc2NyaXB0PiAqL31cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
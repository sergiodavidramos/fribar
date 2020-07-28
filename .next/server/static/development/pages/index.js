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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
      display: "block"
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
      zIndex: 11,
      minWidth: "685px",
      maxWidth: "685px",
      maxWidth: "196px",
      maxWidth: "196px",
      whiteSpace: "normal",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#ffffff",
      letterSpacing: "0px"
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
      zIndex: 12
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
      zIndex: 13,
      minWidth: "682px",
      maxWidth: "682px",
      whiteSpace: "normal",
      fontSize: "72px",
      lineHeight: "78px",
      fontWeight: "300",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Montserrat",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "\"Save\"", __jsx("span", {
    style: {
      color: "#3e2acd",
      fontWeight: "200",
      marginLeft: "35px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, "50%"), __jsx("div", {
    style: {
      fontWeight: "700",
      fontFamily: "Open Sans"
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
      zIndex: "14",
      minWidth: "252px",
      maxWidth: "252px",
      maxWidth: "83px",
      maxWidth: "83px",
      whiteSpace: "nowrap",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#ffffff",
      letterSpacing: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      zIndex: "15",
      whiteSpace: "nowrap",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#2775ff",
      letterSpacing: "0px",
      fontFamily: "Open Sans",
      backgroundColor: "rgb(255,255,255)",
      borderRadius: "40px 40px 40px 40px",
      cursor: "pointer",
      textDecoration: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-shopping-basket",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
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
      zIndex: "16",
      whiteSpace: "nowrap",
      fontSize: "28px",
      lineHeight: "30px",
      fontWeight: "700",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Open Sans",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
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
      zIndex: "17",
      whiteSpace: "nowrap",
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: " 700",
      color: "#69adff",
      letterSpacing: "0px",
      fontFamily: "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa-icon-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
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
      zIndex: "18",
      minWidth: "270px",
      maxWidth: "270px",
      maxWidth: "217px",
      maxWidth: " 217px",
      whiteSpace: "nowrap",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#ffffff",
      letterSpacing: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
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
      zIndex: "19",
      whiteSpace: "nowrap",
      fontSize: "136px",
      lineHeight: "140px",
      fontWeight: "700",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Montserrat"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
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
      zIndex: "20",
      whiteSpace: "nowrap",
      fontSize: "40px",
      lineHeight: "42px",
      fontWeight: "300",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Open Sans",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 17
    }
  }, "For ", __jsx("span", {
    style: {
      color: "#b88eff"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
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
      zIndex: "5",
      background: "linear-gradient(50deg, rgba(108,86,123,0.50) 0%, rgba(116,0,186,0.92) 100%)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
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
      zIndex: "6"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
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
      lineNumber: 489,
      columnNumber: 17
    }
  })), __jsx("div", {
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
      zIndex: "7"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
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
      lineNumber: 519,
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
      zIndex: "8"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
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
      lineNumber: 549,
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
      zIndex: "9"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
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
      lineNumber: 579,
      columnNumber: 17
    }
  })), __jsx("div", {
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
      zIndex: "10"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
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
      lineNumber: 607,
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
      lineNumber: 616,
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
      lineNumber: 641,
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
      zIndex: "11",
      minWidth: "685px",
      maxWidth: "685px",
      maxWidth: "196px",
      maxWidth: "196px",
      whiteSpace: "normal",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#ffffff",
      letterSpacing: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
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
      zIndex: "12"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
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
      lineNumber: 711,
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
      zIndex: "13",
      minWidth: "682px",
      maxWidth: "682px",
      whiteSpace: "normal",
      fontSize: "72px",
      lineHeight: "78px",
      fontWeight: "300",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Montserrat",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 17
    }
  }, "Save", " ", __jsx("span", {
    style: {
      color: "#3e2acd",
      fontWeight: "200",
      marginLeft: "35px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 19
    }
  }, "30%"), __jsx("div", {
    style: {
      fontWeight: "700",
      fontFamily: "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
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
      zIndex: "14",
      minWidth: "252px",
      maxWidth: "252px",
      maxWidth: "83px",
      maxWidth: "83px",
      whiteSpace: "nowrap",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#ffffff",
      letterSpacing: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
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
      zIndex: "15",
      whiteSpace: "nowrap",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#2775ff",
      letterSpacing: "0px",
      fontFamily: "Open Sans",
      backgroundColor: "rgb(255,255,255)",
      borderRadius: "40px 40px 40px 40px",
      cursor: "pointer",
      textDecoration: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-shopping-basket",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
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
      zIndex: "16",
      whiteSpace: "nowrap",
      fontSize: "28px",
      lineHeight: "30px",
      fontWeight: "700",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Open Sans",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
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
      zIndex: "17",
      whiteSpace: "nowrap",
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "700",
      color: "#69adff",
      letterSpacing: "0px",
      fontFamily: "Open Sans"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 890,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa-icon-instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 924,
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
      zIndex: "18",
      minWidth: "270px",
      maxWidth: "270px",
      maxWidth: "217px",
      maxWidth: "217px",
      whiteSpace: "nowrap",
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "400",
      color: "#ffffff",
      letterSpacing: "0px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 927,
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
      zIndex: "19",
      whiteSpace: "nowrap",
      fontSize: "136px",
      lineHeight: "140px",
      fontWeight: "700",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Montserrat"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
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
      zIndex: "20",
      whiteSpace: "nowrap",
      fontSize: "40px",
      lineHeight: "42px",
      fontWeight: "300",
      color: "#ffffff",
      letterSpacing: "0px",
      fontFamily: "Open Sans",
      textTransform: "uppercase"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1000,
      columnNumber: 17
    }
  }, "For ", __jsx("span", {
    style: {
      color: "#b88eff"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1036,
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
      zIndex: "5",
      background: "linear-gradient(50deg, rgba(15,90,224,0.92) 0%, rgba(116,0,186,0.92) 100%)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039,
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
      zIndex: "6"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1065,
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
      lineNumber: 1087,
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
      zIndex: "7"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1095,
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
      lineNumber: 1117,
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
      zIndex: "8"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125,
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
      lineNumber: 1147,
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
      zIndex: "9"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1155,
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
      lineNumber: 1177,
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
      zIndex: "10"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1185,
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
      lineNumber: 1205,
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
      lineNumber: 1215,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./components/CartSidebar.js":
/*!***********************************!*\
  !*** ./components/CartSidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\CartSidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => // <!-- Cart Sidebar Offset Start-->
__jsx("div", {
  className: "bs-canvas bs-canvas-left position-fixed bg-cart h-100",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "bs-canvas-header side-cart-header p-3 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "d-inline-block  main-cart-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}, "My Cart ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 17
  }
}, "(2 Items)")), __jsx("button", {
  type: "button",
  className: "bs-canvas-close close",
  "aria-label": "Close",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx("i", {
  className: "uil uil-multiply",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}))), __jsx("div", {
  className: "bs-canvas-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "cart-top-total",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "cart-total-dil",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, "Gambo Super Market"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 11
  }
}, "$34")), __jsx("div", {
  className: "cart-total-dil pt-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}, "Delivery Charges"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }
}, "$1"))), __jsx("div", {
  className: "side-cart-items",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "cart-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "cart-product-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }
}, __jsx("img", {
  src: "images/product/img-1.jpg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "offer-badge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }
}, "6% OFF")), __jsx("div", {
  className: "cart-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 11
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 13
  }
}, "Product Title Here"), __jsx("div", {
  className: "cart-radio",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, __jsx("ul", {
  className: "kggrm-now",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 15
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a1",
  name: "cart1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 19
  }
}, "0.50")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a2",
  name: "cart1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 19
  }
}, "1kg")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a3",
  name: "cart1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 19
  }
}, "2kg")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a4",
  name: "cart1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 19
  }
}, "3kg")))), __jsx("div", {
  className: "qty-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "quantity buttons_added",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 15
  }
}, __jsx("input", {
  type: "button",
  defaultValue: "-",
  className: "minus minus-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 17
  }
}), __jsx("input", {
  type: "number",
  step: "1",
  name: "quantity",
  defaultValue: "1",
  className: "input-text qty text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 17
  }
}), __jsx("input", {
  type: "button",
  defaultValue: "+",
  className: "plus plus-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "cart-item-price",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 15
  }
}, "$10 ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 21
  }
}, "$15"))), __jsx("button", {
  type: "button",
  className: "cart-close-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }
}, __jsx("i", {
  className: "uil uil-multiply",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 15
  }
})))), __jsx("div", {
  className: "cart-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "cart-product-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 11
  }
}, __jsx("img", {
  src: "images/product/img-2.jpg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "offer-badge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 13
  }
}, "6% OFF")), __jsx("div", {
  className: "cart-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 11
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 13
  }
}, "Product Title Here"), __jsx("div", {
  className: "cart-radio",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 13
  }
}, __jsx("ul", {
  className: "kggrm-now",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 15
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a5",
  name: "cart2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a5",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 19
  }
}, "0.50")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a6",
  name: "cart2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 19
  }
}, "1kg")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 17
  }
}, __jsx("input", {
  type: "radio",
  id: "a7",
  name: "cart2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 19
  }
}), __jsx("label", {
  htmlFor: "a7",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 19
  }
}, "2kg")))), __jsx("div", {
  className: "qty-group",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "quantity buttons_added",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 15
  }
}, __jsx("input", {
  type: "button",
  defaultValue: "-",
  className: "minus minus-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 17
  }
}), __jsx("input", {
  type: "number",
  step: "1",
  name: "quantity",
  defaultValue: "1",
  className: "input-text qty text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 17
  }
}), __jsx("input", {
  type: "button",
  defaultValue: "+",
  className: "plus plus-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "cart-item-price",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 15
  }
}, "$24 ", __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 21
  }
}, "$30"))), __jsx("button", {
  type: "button",
  className: "cart-close-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 13
  }
}, __jsx("i", {
  className: "uil uil-multiply",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 15
  }
})))))), __jsx("div", {
  className: "bs-canvas-footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "cart-total-dil saving-total ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 7
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 9
  }
}, "Total Saving"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 9
  }
}, "$11")), __jsx("div", {
  className: "main-total-cart",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144,
    columnNumber: 7
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 9
  }
}, "Total"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 9
  }
}, "$35")), __jsx("div", {
  className: "checkout-cart",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148,
    columnNumber: 7
  }
}, __jsx("a", {
  href: "#",
  className: "promo-code",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 9
  }
}, "Have a promocode?"), __jsx("a", {
  href: "#",
  className: "cart-checkout-btn hover-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 9
  }
}, "Proceed to Checkout")))));

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
/* harmony import */ var _ModelCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelCategory */ "./components/ModelCategory.js");
/* harmony import */ var _SearchModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchModel */ "./components/SearchModel.js");
/* harmony import */ var _CartSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartSidebar */ "./components/CartSidebar.js");
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ModelCategory__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_SearchModel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_CartSidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("header", {
    className: "header clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-header-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "top-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "res_main_logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "index.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/dark-logo-1.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "main_logo",
    id: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "index.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "images/logo.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "index.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "logo-inverse",
    src: "/images/dark-logo.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "select_location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ui inline dropdown loc-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }), "Gurugram"), __jsx("i", {
    className: "uil uil-angle-down icon__14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "menu dropdown_loc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }), "Gurugram"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), "New Delhi"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), "Bangaluru"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), "Mumbai"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), "Hyderabad"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), "Kolkata"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), "Ludhiana"), __jsx("div", {
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-location-point",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), "Chandigrah")))), __jsx("div", {
    className: "search120",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "ui search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "ui left icon input swdh10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("input", {
    className: "prompt srch10",
    type: "text",
    placeholder: "Search for products..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }), __jsx("i", {
    className: "uil uil-search-alt icon icon1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "header_right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    className: "offer-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-phone-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }), "1800-000-000")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "offers.html",
    className: "offer-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-gift",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), "Offers")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "faq.html",
    className: "offer-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-question-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), "Help")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "dashboard_my_wishlist.html",
    className: "option_links",
    title: "Wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "uil uil-heart icon_wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "noti_count1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, "3"))), __jsx("li", {
    className: "ui dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    className: "opts_account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "images/avatar/img-5.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "user__name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "John Doe"), __jsx("i", {
    className: "uil uil-angle-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "menu dropdown_account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "night_mode_switch__btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    id: "night-mode",
    className: "btn-night-mode",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "uil uil-moon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }), " Night mode", __jsx("span", {
    className: "btn-night-mode-switch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "uk-switch-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  })))), __jsx("a", {
    href: "dashboard_overview.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-apps icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }), "Dashbaord"), __jsx("a", {
    href: "dashboard_my_orders.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-box icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }), "My Orders"), __jsx("a", {
    href: "dashboard_my_wishlist.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-heart icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }), "My Wishlist"), __jsx("a", {
    href: "dashboard_my_wallet.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-usd-circle icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 23
    }
  }), "My Wallet"), __jsx("a", {
    href: "dashboard_my_addresses.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-location-point icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }), "My Address"), __jsx("a", {
    href: "offers.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-gift icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }), "Offers"), __jsx("a", {
    href: "faq.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-info-circle icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 23
    }
  }), "Faq"), __jsx("a", {
    href: "sign_in.html",
    className: "item channel_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "uil uil-lock-alt icon__1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  }), "Logout"))))))), __jsx("div", {
    className: "sub-header-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sub-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "ui dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "category_drop hover-btn",
    "data-toggle": "modal",
    "data-target": "#category_model",
    title: "Categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "uil uil-apps",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "cate__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, "Select Category"))), __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "navbar-toggler menu_toggle_btn",
    type: "button",
    "data-target": "#navbarSupportedContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "uil uil-bars",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu",
    id: "navbarSupportedContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "navbar-nav main_nav align-self-stretch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "index.html",
    className: "nav-link active",
    title: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }, "Home")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "shop_grid.html",
    className: "nav-link new_item",
    title: "New Products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 23
    }
  }, "New Products")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "shop_grid.html",
    className: "nav-link",
    title: "Featured Products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, "Featured Products")), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ui icon top left dropdown nav__menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 23
    }
  }, __jsx("a", {
    className: "nav-link",
    title: "Pages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  }, "Pages ", __jsx("i", {
    className: "uil uil-angle-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "menu dropdown_page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "dashboard_overview.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 27
    }
  }, "Account"), __jsx("a", {
    href: "about_us.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 27
    }
  }, "About Us"), __jsx("a", {
    href: "shop_grid.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 27
    }
  }, "Shop Grid"), __jsx("a", {
    href: "single_product_view.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 27
    }
  }, "Single Product View"), __jsx("a", {
    href: "checkout.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 27
    }
  }, "Checkout"), __jsx("a", {
    href: "request_product.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 27
    }
  }, "Product Request"), __jsx("a", {
    href: "order_placed.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 27
    }
  }, "Order Placed"), __jsx("a", {
    href: "bill.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 27
    }
  }, "Bill Slip"), __jsx("a", {
    href: "sign_in.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 27
    }
  }, "Sign In"), __jsx("a", {
    href: "sign_up.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 27
    }
  }, "Sign Up"), __jsx("a", {
    href: "forgot_password.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 27
    }
  }, "Forgot Password"), __jsx("a", {
    href: "contact_us.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 27
    }
  }, "Contact Us")))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "ui icon top left dropdown nav__menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 23
    }
  }, __jsx("a", {
    className: "nav-link",
    title: "Blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 25
    }
  }, "Blog ", __jsx("i", {
    className: "uil uil-angle-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 32
    }
  })), __jsx("div", {
    className: "menu dropdown_page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "our_blog.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 27
    }
  }, "Our Blog"), __jsx("a", {
    href: "blog_no_sidebar.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 27
    }
  }, "Our Blog Two No Sidebar"), __jsx("a", {
    href: "blog_left_sidebar.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 27
    }
  }, "Our Blog with Left Sidebar"), __jsx("a", {
    href: "blog_right_sidebar.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 27
    }
  }, "Our Blog with Right Sidebar"), __jsx("a", {
    href: "blog_detail_view.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 27
    }
  }, "Blog Detail View"), __jsx("a", {
    href: "blog_left_sidebar_single_view.html",
    className: "item channel_item page__links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 27
    }
  }, "Blog Detail View with Sidebar")))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "contact_us.html",
    className: "nav-link",
    title: "Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 23
    }
  }, "Contact Us")))))), __jsx("div", {
    className: "catey__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "cate__btn",
    "data-toggle": "modal",
    "data-target": "#category_model",
    title: "Categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "header_cart order-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "cart__btn hover-btn pull-bs-canvas-left",
    title: "Cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "uil uil-shopping-cart-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 17
    }
  }, "Cart"), __jsx("ins", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  }, "2"), __jsx("i", {
    className: "uil uil-angle-down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "search__icon order-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "search__btn hover-btn",
    "data-toggle": "modal",
    "data-target": "#search_model",
    title: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 15
    }
  }))))));
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

/***/ "./components/ModelCategory.js":
/*!*************************************!*\
  !*** ./components/ModelCategory.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\ModelCategory.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => // <!-- Category Model Start-->
__jsx("div", {
  id: "category_model",
  tabIndex: "-1",
  role: "dialog",
  "aria-modal": "false",
  className: "jsx-963365125" + " " + "header-cate-model main-gambo-model modal fade",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("div", {
  role: "document",
  className: "jsx-963365125" + " " + "modal-dialog category-area",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "category-area-inner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "modal-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("button", {
  type: "button",
  "data-dismiss": "modal",
  "aria-label": "Close",
  className: "jsx-963365125" + " " + "close btn-close",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}, __jsx("i", {
  className: "jsx-963365125" + " " + "uil uil-multiply",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}))), __jsx("div", {
  className: "jsx-963365125" + " " + "category-model-content modal-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "cate-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}, __jsx("h4", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}, "Select Category")), __jsx("ul", {
  className: "jsx-963365125" + " " + "category-by-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }
}, __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-1.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 17
  }
}, " Fruits and Vegetables "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-2.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 17
  }
}, " Grocery & Staples "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-3.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 17
  }
}, " Dairy & Eggs "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-4.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 17
  }
}, " Beverages "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-5.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 17
  }
}, " Snacks "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-6.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 17
  }
}, " Home Care "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-7.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 17
  }
}, " Noodles & Sauces "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-8.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 17
  }
}, " Personal Care "))), __jsx("li", {
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "single-cat-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 15
  }
}, __jsx("div", {
  className: "jsx-963365125" + " " + "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 17
  }
}, __jsx("img", {
  src: "images/category/icon-9.svg",
  alt: "",
  className: "jsx-963365125",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 19
  }
})), __jsx("div", {
  className: "jsx-963365125" + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 17
  }
}, " Pet Care ")))), __jsx("a", {
  href: "#",
  className: "jsx-963365125" + " " + "morecate-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 11
  }
}, __jsx("i", {
  className: "jsx-963365125" + " " + "uil uil-apps",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 13
  }
}), "More Categories")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "963365125",
  __self: undefined
}, ".main-gambo-model.jsx-963365125{background-image:-webkit-linear-gradient( left, rgba(230,92,91,0.9), rgba(245,93,44,0.9) );background-image:linear-gradient( to right, rgba(230,92,91,0.9), rgba(245,93,44,0.9) );}.category-area-inner.jsx-963365125 .modal-header.jsx-963365125{border-bottom:0;}.category-area-inner.jsx-963365125 .btn-close.jsx-963365125{color:#fff !important;opacity:1 !important;padding:30px 0 15px !important;font-size:30px !important;cursor:pointer !important;}.category-model-content.jsx-963365125{background:#fff;border:0 !important;border-radius:0 !important;}.catey__icon.jsx-963365125{display:none;}.search__icon.jsx-963365125{display:none;}.sub-header-icons-list.jsx-963365125{display:inline-block;font-size:20px;}.cate__btn.jsx-963365125{font-size:20px;color:#8f91ac !important;padding:20px 20px 19px;}.cate__btn.jsx-963365125:hover{color:#f55d2c !important;}.search__btn.jsx-963365125{font-size:20px;color:#fff !important;padding:20px 20px 21px;background:#2b2f4c;}.cate-header.jsx-963365125{background:#2b2f4c;color:#fff;padding:15px 20px;}.cate-header.jsx-963365125 h4.jsx-963365125{font-size:18px;font-weight:500;line-height:24px;}.category-by-cat.jsx-963365125{width:100%;display:inline-table;}.category-by-cat.jsx-963365125 li.jsx-963365125{width:33.333%;vertical-align:middle;display:inline-block;list-style:none;float:left;}.single-cat-item.jsx-963365125{text-align:center;padding:20px 10px;display:block;}.single-cat-item.jsx-963365125:hover{background:#f9f9f9;}.single-cat-item.jsx-963365125 .text.jsx-963365125{font-size:14px;font-weight:500;color:#2b2f4c;}.single-cat-item.jsx-963365125 .icon.jsx-963365125{width:100%;text-align:center;margin-bottom:15px;}.single-cat-item.jsx-963365125 .icon.jsx-963365125 img.jsx-963365125{width:50px;}.morecate-btn.jsx-963365125{display:block;text-align:center;border-top:1px solid #efefef;padding:20px;font-size:16px;font-weight:500;color:#2b2f4c;}.morecate-btn.jsx-963365125 i.jsx-963365125{margin-right:5px;}.morecate-btn.jsx-963365125:hover{color:#f55d2c !important;}.search-ground-area.jsx-963365125{max-width:400px !important;}.search-header.jsx-963365125{position:relative;width:100%;border-bottom:1px solid #efefef;}.search-header.jsx-963365125 input.jsx-963365125{width:100%;border:0;padding:20px;position:relative;}.search-header.jsx-963365125 button.jsx-963365125{position:absolute;right:0px;background:transparent;border:0;padding:17px;font-size:20px;}.search-by-cat.jsx-963365125{width:100%;height:321px;overflow:hidden scroll;}.search-by-cat.jsx-963365125 .single-cat.jsx-963365125{-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=85)\";-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:0;-webkit-transition:all 0.25s;-webkit-transition:all 0.25s;transition:all 0.25s;padding:15px 20px;}.search-by-cat.jsx-963365125 .single-cat.jsx-963365125 .icon.jsx-963365125{background-color:#f9f9f9;border-radius:5%;color:#fff;font-size:22px;height:50px;line-height:47px;text-align:center;width:50px;}.search-by-cat.jsx-963365125 .single-cat.jsx-963365125 .icon.jsx-963365125 img.jsx-963365125{width:30px;}.search-by-cat.jsx-963365125 .single-cat.jsx-963365125 .text.jsx-963365125{color:#2b2f4c;font-weight:400;padding-left:20px;font-size:16px;}.search-by-cat.jsx-963365125 .single-cat.jsx-963365125:hover .text.jsx-963365125{color:#f55d2c;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxwcm95ZWN0by1mcmlmb2xseVxcZnJpZm9sbHktZnJvbnRlbmRcXGNvbXBvbmVudHNcXE1vZGVsQ2F0ZWdvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdnQixBQU9VLEFBU2UsQUFJTSxBQVFOLEFBTUgsQUFJQSxBQUlRLEFBS04sQUFNVSxBQUlWLEFBU0ksQUFNSixBQU1KLEFBS0csQUFRSSxBQU1DLEFBSUosQUFNSixBQU1BLEFBSUcsQUFVRyxBQUlRLEFBSUUsQUFJVCxBQU1QLEFBT08sQUFTUCxBQU1zRCxBQWdCeEMsQUFXZCxBQUlHLEFBT0EsV0E5SE8sQUE2QkgsQUFNcEIsQUFnQ1csQUFnQkksQUFpQ2YsRUFoS0EsQUFJQSxDQTZDd0IsQUFrQ0osQUFpRkYsQUFPbEIsQ0E5SjJCLEFBVUgsQUFlTixBQTZCQSxDQXJGbEIsQUFZc0IsQ0FtR3RCLENBcENvQixBQWdEUCxBQWFELENBdEZDLEFBK0JiLENBaURlLENBeEdFLENBdEJNLEVBOElFLENBN0d6QixBQThFQSxBQW9EbUIsRUFoRG5CLENBa0J5QixDQTdDSixBQWdDYSxDQXpFZCxBQW9JQSxDQTlIRCxBQTZCSCxDQXZCaEIsQUF1QytCLENBNkJYLEdBdEhTLEFBYzdCLEFBeUN1QixBQVFQLENBbENTLEdBVkEsRUF3SVosQ0FuS29CLEVBa0ZqQyxFQTREQSxDQS9GQSxBQU1BLEFBbUNBLEFBMkZpQixFQTNHakIsQ0F1REEsQUFNVyxFQStCTSxJQXBHQyxHQTFCRyxBQWdHTixDQXBDQSxBQXNCZixFQS9HQSxBQW1CQSxBQXdKQSxFQWxDMkIsR0FtQmIsS0FwR0QsQUFzRUksQ0F0SVcsQUFrR1gsS0E1RGpCLENBK0htQixJQXBHbkIsSUFzRUEsQ0FwQ2tCLENBK0NNLENBN0pyQixNQWlMaUIsR0FyS1EsS0FtR1osT0ErQ0ssR0FvQlIsSUFsRWIsT0FuR0EsQUFzS0Esb0RBbExBLDJCQThKc0Isb0JBQ0Esb0JBQ1AsMEVBQ00sbUJBQ0oseURBQ0MsZ0JBQ2EsNkJBQ1Isa0RBQ0gsa0JBQ3BCIiwiZmlsZSI6IkU6XFxwcm95ZWN0by1mcmlmb2xseVxcZnJpZm9sbHktZnJvbnRlbmRcXGNvbXBvbmVudHNcXE1vZGVsQ2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgLy8gPCEtLSBDYXRlZ29yeSBNb2RlbCBTdGFydC0tPlxyXG4gIDxkaXZcclxuICAgIGlkPVwiY2F0ZWdvcnlfbW9kZWxcIlxyXG4gICAgY2xhc3NOYW1lPVwiaGVhZGVyLWNhdGUtbW9kZWwgbWFpbi1nYW1iby1tb2RlbCBtb2RhbCBmYWRlXCJcclxuICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICBhcmlhLW1vZGFsPVwiZmFsc2VcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGNhdGVnb3J5LWFyZWFcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1hcmVhLWlubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlIGJ0bi1jbG9zZVwiXHJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1tdWx0aXBseVwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbW9kZWwtY29udGVudCBtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoND5TZWxlY3QgQ2F0ZWdvcnk8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2F0ZWdvcnktYnktY2F0XCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tMS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gRnJ1aXRzIGFuZCBWZWdldGFibGVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi0yLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBHcm9jZXJ5ICYgU3RhcGxlcyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tMy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gRGFpcnkgJiBFZ2dzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi00LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBCZXZlcmFnZXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXRlZ29yeS9pY29uLTUuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+IFNuYWNrcyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tNi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gSG9tZSBDYXJlIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi03LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBOb29kbGVzICYgU2F1Y2VzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi04LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBQZXJzb25hbCBDYXJlIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi05LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBQZXQgQ2FyZSA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtb3JlY2F0ZS1idG5cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1hcHBzXCI+PC9pPk1vcmUgQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubWFpbi1nYW1iby1tb2RlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgcmdiYSgyMzAsIDkyLCA5MSwgMC45KSxcclxuICAgICAgICAgIHJnYmEoMjQ1LCA5MywgNDQsIDAuOSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgcmdiYSgyMzAsIDkyLCA5MSwgMC45KSxcclxuICAgICAgICAgIHJnYmEoMjQ1LCA5MywgNDQsIDAuOSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktYXJlYS1pbm5lciAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktYXJlYS1pbm5lciAuYnRuLWNsb3NlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktbW9kZWwtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRleV9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaF9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Yi1oZWFkZXItaWNvbnMtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhdGVfX2J0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOGY5MWFjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDE5cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlX19idG46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZjU1ZDJjICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2hfX2J0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJiMmY0YztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogLS0tIENhdGVnb3J5IE1vZGUgLS0tICovXHJcblxyXG4gICAgICAuY2F0ZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjJmNGM7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZS1oZWFkZXIgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktYnktY2F0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlZ29yeS1ieS1jYXQgbGkge1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW5nbGUtY2F0LWl0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW5nbGUtY2F0LWl0ZW06aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW5nbGUtY2F0LWl0ZW0gLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjMmIyZjRjO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2luZ2xlLWNhdC1pdGVtIC5pY29uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpbmdsZS1jYXQtaXRlbSAuaWNvbiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9yZWNhdGUtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzJiMmY0YztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vcmVjYXRlLWJ0biBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vcmVjYXRlLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmNTVkMmMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ncm91bmQtYXJlYSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWhlYWRlciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWhlYWRlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzIxcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2gtYnktY2F0IC5zaW5nbGUtY2F0IHtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTg1KVwiO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWJ5LWNhdCAuc2luZ2xlLWNhdCAuaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQgLnNpbmdsZS1jYXQgLmljb24gaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQgLnNpbmdsZS1jYXQgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjMmIyZjRjO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQgLnNpbmdsZS1jYXQ6aG92ZXIgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjZjU1ZDJjO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbiAgLy8gLyogPCEtLSBDYXRlZ29yeSBNb2RlbCBFbmQtLT4gKi9cclxuKTtcclxuIl19 */\n/*@ sourceURL=E:\\\\proyecto-frifolly\\\\frifolly-frontend\\\\components\\\\ModelCategory.js */")));

/***/ }),

/***/ "./components/SearchModel.js":
/*!***********************************!*\
  !*** ./components/SearchModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\components\\SearchModel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => // <!-- Search Model Start-->
__jsx("div", {
  id: "search_model",
  className: "header-cate-model main-gambo-model modal fade",
  tabIndex: "-1",
  role: "dialog",
  "aria-modal": "false",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "modal-dialog search-ground-area",
  role: "document",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "category-area-inner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "modal-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("button", {
  type: "button",
  className: "close btn-close",
  "data-dismiss": "modal",
  "aria-label": "Close",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}, __jsx("i", {
  className: "uil uil-multiply",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}))), __jsx("div", {
  className: "category-model-content modal-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "search-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}, __jsx("form", {
  action: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}, __jsx("input", {
  type: "search",
  placeholder: "Search for products...",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 15
  }
}), __jsx("button", {
  type: "submit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 15
  }
}, __jsx("i", {
  className: "uil uil-search",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 17
  }
})))), __jsx("div", {
  className: "search-by-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 11
  }
}, __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-1.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 15
  }
}, "Fruits and Vegetables")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-2.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 15
  }
}, " Grocery & Staples ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-3.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 15
  }
}, " Dairy & Eggs ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-4.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 15
  }
}, " Beverages ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-5.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 15
  }
}, " Snacks ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-6.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 15
  }
}, " Home Care ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-7.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 15
  }
}, " Noodles & Sauces ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-8.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 15
  }
}, " Personal Care ")), __jsx("a", {
  href: "#",
  className: "single-cat",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 15
  }
}, __jsx("img", {
  src: "images/category/icon-9.svg",
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 17
  }
})), __jsx("div", {
  className: "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 15
  }
}, " Pet Care "))))))));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Carrousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Carrousel */ "./components/Carrousel.js");
var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class hola extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
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
      responsiveLevels: [576, 480, 480, 480],
      visibilityLevels: [576, 576, 576, 480],
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, "FriFolly"), __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width,height=device-height,initial-scale=1,maximum-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "format-detection",
      content: "telephone=no",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "theme-color",
      content: "#2775FF",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "keywords",
      content: "themeforest, theme, html, template",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: "themeforest, theme, html, template",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }), __jsx("meta", {
      property: "og:title",
      content: "My page title",
      key: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css",
      integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
      crossOrigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/vendor/revslider/css/settings.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/vendor/semantic/semantic.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/vendor/fontawesome-free/css/all.min.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/vendor/OwlCarousel/assets/owl.carousel.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/vendor/OwlCarousel/assets/owl.theme.default.min.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/vendor/bootstrap/css/bootstrap.min.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/vendor/unicons-2.0.1/css/unicons.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/css/style.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/css/responsive.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "/css/night-mode.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }), __jsx(_components_Carrousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }, "asdasd"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 24
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }
    }, "asdasdasd")));
  }

}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\proyecto-frifolly\frifolly-frontend\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGVsQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImRpc3BsYXkiLCJ6SW5kZXgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwid2hpdGVTcGFjZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJjb2xvciIsImxldHRlclNwYWNpbmciLCJmb250RmFtaWx5IiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsInZpc2liaWxpdHkiLCJob2xhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImpRdWVyeSIsInNob3ciLCJyZXZvbHV0aW9uIiwic2xpZGVyVHlwZSIsImpzRmlsZUxvY2F0aW9uIiwic2xpZGVyTGF5b3V0IiwiZG90dGVkT3ZlcmxheSIsImRlbGF5IiwibmF2aWdhdGlvbiIsImtleWJvYXJkTmF2aWdhdGlvbiIsImtleWJvYXJkX2RpcmVjdGlvbiIsIm1vdXNlU2Nyb2xsTmF2aWdhdGlvbiIsIm1vdXNlU2Nyb2xsUmV2ZXJzZSIsIm9uSG92ZXJTdG9wIiwiYXJyb3dzIiwic3R5bGUiLCJlbmFibGUiLCJoaWRlX29ubW9iaWxlIiwiaGlkZV9vbmxlYXZlIiwiaGlkZV9kZWxheSIsImhpZGVfZGVsYXlfbW9iaWxlIiwidG1wIiwibGVmdCIsImhfYWxpZ24iLCJ2X2FsaWduIiwiaF9vZmZzZXQiLCJ2X29mZnNldCIsInJpZ2h0IiwicmVzcG9uc2l2ZUxldmVscyIsInZpc2liaWxpdHlMZXZlbHMiLCJncmlkd2lkdGgiLCJncmlkaGVpZ2h0IiwibGF6eVR5cGUiLCJwYXJhbGxheCIsInR5cGUiLCJvcmlnbyIsInNwZWVkIiwic3BlZWRiZyIsInNwZWVkbHMiLCJsZXZlbHMiLCJkaXNhYmxlX29ubW9iaWxlIiwic2hhZG93Iiwic3Bpbm5lciIsInN0b3BMb29wIiwic3RvcEFmdGVyTG9vcHMiLCJzdG9wQXRTbGlkZSIsInNodWZmbGUiLCJhdXRvSGVpZ2h0IiwiZnVsbFNjcmVlbkF1dG9XaWR0aCIsImZ1bGxTY3JlZW5BbGlnbkZvcmNlIiwiZnVsbFNjcmVlbk9mZnNldENvbnRhaW5lciIsImZ1bGxTY3JlZW5PZmZzZXQiLCJkaXNhYmxlUHJvZ3Jlc3NCYXIiLCJoaWRlVGh1bWJzT25Nb2JpbGUiLCJoaWRlU2xpZGVyQXRMaW1pdCIsImhpZGVDYXB0aW9uQXRMaW1pdCIsImhpZGVBbGxDYXB0aW9uQXRMaWxtaXQiLCJkZWJ1Z01vZGUiLCJmYWxsYmFja3MiLCJzaW1wbGlmeUFsbCIsIm5leHRTbGlkZU9uV2luZG93Rm9jdXMiLCJkaXNhYmxlRm9jdXNMaXN0ZW5lciIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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b3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cInJldl9zbGlkZXJfNV8xX3dyYXBwZXJcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJldl9zbGlkZXJfd3JhcHBlciBmdWxsc2NyZWVuLWNvbnRhaW5lclwiXHJcbiAgICAgICAgZGF0YS1hbGlhcz1cImRlbW9fc2hvcF90cmVuZHlcIlxyXG4gICAgICAgIGRhdGEtc291cmNlPVwiZ2FsbGVyeVwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLCBwYWRkaW5nOiBcIjBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cInJldl9zbGlkZXJfNV8xXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJldl9zbGlkZXIgZnVsbHNjcmVlbmJhbm5lclwiXHJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgICAgIGRhdGEtdmVyc2lvbj1cIjUuNC44LjFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgZGF0YS1pbmRleD1cInJzLTExXCJcclxuICAgICAgICAgICAgICBkYXRhLXRyYW5zaXRpb249XCJmYWRlXCJcclxuICAgICAgICAgICAgICBkYXRhLXNsb3RhbW91bnQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBkYXRhLWhpZGVhZnRlcmxvb3A9XCIwXCJcclxuICAgICAgICAgICAgICBkYXRhLWhpZGVzbGlkZW9ubW9iaWxlPVwib2ZmXCJcclxuICAgICAgICAgICAgICBkYXRhLWVhc2Vpbj1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtZWFzZW91dD1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtbWFzdGVyc3BlZWQ9XCIxNDAwXCJcclxuICAgICAgICAgICAgICBkYXRhLXRodW1iPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy8xMDB4NTBfNDZlNzUtYnJrX3NsaWRlLTEuanBnXCJcclxuICAgICAgICAgICAgICBkYXRhLXJvdGF0ZT1cIjBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtc2F2ZXBlcmZvcm1hbmNlPVwib2ZmXCJcclxuICAgICAgICAgICAgICBkYXRhLXRpdGxlPVwiU2xpZGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW0xPVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtMj1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTM9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW00PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtNT1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTY9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW03PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtOD1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTk9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW0xMD1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1kZXNjcmlwdGlvbj1cIlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzQ2ZTc1LWJya19zbGlkZS0xLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ3Bvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJnZml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ3JlcGVhdD1cIm5vLXJlcGVhdFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJncGFyYWxsYXg9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2LXNsaWRlYmdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gcmV2X2dyb3VwXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMjdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ3JpZ2h0JywncmlnaHQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzE1JywnMTUnLCcxNScsJzE1J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzE0NScsJzEyNScsJzE3NCcsJzQwMiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJbJzY4NScsJzU1MScsJzM4NScsJzI4MiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwiWycxOTYnLCcxNzAnLCcxMjMnLCc4OSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgekluZGV4OiAxMSxcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNjg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNjg1cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTk2cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTk2cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTExXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzM1MicsJzI4NCcsJzE5NCcsJzE0OSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnLTQwJywnMTcnLCc5JywnOCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwiejowO3JYOjA7clk6MDtyWjowO3NYOjAuOTtzWTowLjk7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy84MDVmOS1icmtfc2xpZGVfZWxlbWVudC0zLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWycyMTlweCcsJzE4MHB4JywnMTQwcHgnLCcxMDBweCddXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiWyc3N3B4JywnNjNweCcsJzQ5cHgnLCczNXB4J11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItOVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZvbnRzaXplPVwiWyc3MicsJzYwJywnNDAnLCczMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1saW5laGVpZ2h0PVwiWyc3OCcsJzY4JywnNTAnLCczNiddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIlsnNjgyJywnNTMwJywnMzU4JywnMjcxJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnbm9uZScsJzEzNycsJzEwNCcsJzczJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJ5OlsxMDAlXTt6OjA7clg6MGRlZztyWTowO3JaOjA7c1g6MTtzWToxO3NrWDowO3NrWTowO29wYWNpdHk6MDtcIixcIm1hc2tcIjpcIng6MHB4O3k6WzEwMCVdO3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIyLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcIm1hc2tcIjpcIng6MDt5OjA7czppbmhlcml0O2U6aW5oZXJpdDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAxMyxcclxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCI2ODJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjY4MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI3MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCI3OHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBcIlNhdmVcIlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjM2UyYWNkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjIwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDUwJVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiwgZm9udEZhbWlseTogXCJPcGVuIFNhbnNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICBvbmx5IHRoaXMgd2Vla1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gcmV2LWJyay1icmFuZHMgcmV2X2dyb3VwXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMjRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ3JpZ2h0JywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycyMDUnLCcxNTgnLCc4MycsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnNjIwJywnNDY5JywnNDc1JywnNTA0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIlsnMjUyJywnMjUyJywnMjUyJywnMTkzJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJbJzgzJywnODMnLCc4MycsJzcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiMTRcIixcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjUycHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjUycHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiODNweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4M3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovLzEuZW52YXRvLm1hcmtldC9CZDVWOVwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMjVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnMjAnLCcyMCcsJzIwJywnMTYnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnMjInLCcyMicsJzIyJywnMTYnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9ucz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjgwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjo4MDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJmcmFtZVwiOlwiaG92ZXJcIixcInNwZWVkXCI6XCIwXCIsXCJlYXNlXCI6XCJMaW5lYXIuZWFzZU5vbmVcIixcInRvXCI6XCJvOjE7clg6MDtyWTowO3JaOjA7ejowO1wiLFwic3R5bGVcIjpcImM6cmdiKDAsMTIyLDI1NSk7XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzIwLDIwLDIwLDE5XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzIwLDIwLDIwLDE4XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlsyMCwyMCwyMCwxOV1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzIwLDIwLDIwLDE4XVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjc3NWZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHggNDBweCA0MHB4IDQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWJhc2tldFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTE3XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzkzJywnOTMnLCc5MycsJzc4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyctMTEnLCctMTEnLCctMTEnLCctMTEnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzI4JywnMjgnLCcyOCcsJzIwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzMwJywnMzAnLCczMCcsJzI0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjE2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eSBub3d7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMThcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnOTQnLCc5NCcsJzk0JywnNzknXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzE3JywnMTcnLCcxNycsJzEyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjE3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIgNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzY5YWRmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtaWNvbi1pbnN0YWdyYW1cIj48L2k+IGJlcnNlcmt7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHJldl9ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTI2XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdyaWdodCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzE5NScsJzE3MycsJzk3JywnMTUnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMzY1JywnMzAwJywnMzAzJywnNDA1J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIlsnMjcwJywnMjI0JywnMjI0JywnMTMxJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJbJzIxNycsJzE2OCcsJzE2OCcsJzEwMyddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjE4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjI3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjI3MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjIxN3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIiAyMTdweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMTNcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZvbnRzaXplPVwiWycxMzYnLCcxMDAnLCcxMDAnLCc1MCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1saW5laGVpZ2h0PVwiWycxNDAnLCcxMTAnLCcxMTAnLCc2MCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwbGl0XCI6XCJjaGFyc1wiLFwic3BsaXRkZWxheVwiOjAuMDUsXCJzcGVlZFwiOjIwMDAsXCJzcGxpdF9kaXJlY3Rpb25cIjpcImZvcndhcmRcIixcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJ4OlsxMDUlXTt6OjA7clg6NDVkZWc7clk6MGRlZztyWjo5MGRlZztzWDoxO3NZOjE7c2tYOjA7c2tZOjA7XCIsXCJtYXNrXCI6XCJ4OjBweDt5OjBweDtzOmluaGVyaXQ7ZTppbmhlcml0O1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyNC5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJtYXNrXCI6XCJ4OjA7eTowO3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiMTlcIixcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEzNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJNb250c2VycmF0XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICQ1OXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci0xNFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzE1NScsJzExOCcsJzExOCcsJzY1J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZvbnRzaXplPVwiWyc0MCcsJzMwJywnMzAnLCcxOCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1saW5laGVpZ2h0PVwiWyc0MicsJzM0JywnMzQnLCcyNCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJ5OlsxMDAlXTt6OjA7clg6MGRlZztyWTowO3JaOjA7c1g6MTtzWToxO3NrWDowO3NrWTowO29wYWNpdHk6MDtcIixcIm1hc2tcIjpcIng6MHB4O3k6WzEwMCVdO3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIyLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcIm1hc2tcIjpcIng6MDt5OjA7czppbmhlcml0O2U6aW5oZXJpdDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiNDJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBGb3IgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI2I4OGVmZlwiIH19PjcgRGF5czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtc2hhcGUgdHAtc2hhcGV3cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJywnbWlkZGxlJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJzaGFwZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxNTAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjE1MDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiNVwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KDUwZGVnLCByZ2JhKDEwOCw4NiwxMjMsMC41MCkgMCUsIHJnYmEoMTE2LDAsMTg2LDAuOTIpIDEwMCUpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHRwLXJlc2l6ZW1lXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItMjBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ2JvdHRvbScsJ2JvdHRvbScsJ2JvdHRvbScsJ2JvdHRvbSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnLTE5JywnLTE5JywnLTE5JywnLTE5J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2liaWxpdHk9XCJbJ29uJywnb24nLCdvZmYnLCdvZmYnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjE1MDAsXCJmcmFtZVwiOlwiMFwiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjZcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy85NDBiYS1icmtfc2xpZGVfZWxlbWVudC0xLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzEwMCUnLCcxMDAlJywnMTAwJScsJzEwMCUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHRwLXJlc2l6ZW1lIHJzLXBhcmFsbGF4bGV2ZWwtM1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydyaWdodCcsJ3JpZ2h0JywncmlnaHQnLCdyaWdodCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnLTQ5MScsJy00OTEnLCctNDkxJywnLTQ5MSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2liaWxpdHk9XCJbJ29uJywnb24nLCdvZmYnLCdvZmYnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjdcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy81YjI3NS1icmtfc2xpZGVfZWxlbWVudC00LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd3c9XCJbJzY4NmF1dG8nLCc2ODZhdXRvJywnNjg2YXV0bycsJzY4NmF1dG8nXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGg9XCJbJzY4NnB4JywnNjg2cHgnLCc2ODZweCcsJzY4NnB4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZSBycy1wYXJhbGxheGxldmVsLTFcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMS1sYXllci0zXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnLTMxOCcsJy0zMTgnLCctMzE4JywnLTMxOCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyctMTEnLCctMTEnLCctMTEnLCctMTEnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdmlzaWJpbGl0eT1cIlsnb24nLCdvbicsJ29mZicsJ29mZiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmFzZWFsaWduPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiOFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzhiMjk1LWJya19zbGlkZV9lbGVtZW50LTUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnNjM5YXV0bycsJzYzOWF1dG8nLCc2MzlhdXRvJywnNjM5YXV0byddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnMjkxcHgnLCcyOTFweCcsJzI5MXB4JywnMjkxcHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtcmVzaXplbWUgcnMtcGFyYWxsYXhsZXZlbC0yXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTEtbGF5ZXItNFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJy0xNDcnLCctMTQ3JywnLTE0NycsJy0xNDcnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMTIwJywnMTIwJywnMTIwJywnMTIwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2liaWxpdHk9XCJbJ29uJywnb24nLCdvZmYnLCdvZmYnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI5XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvZTdmNzQtYnJrX3NsaWRlX2VsZW1lbnQtNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWycyOTVhdXRvJywnMjk1YXV0bycsJzI5NWF1dG8nLCcyOTVhdXRvJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiWycyOTVweCcsJzI5NXB4JywnMjk1cHgnLCcyOTVweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTExLWxheWVyLTdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydyaWdodCcsJ3JpZ2h0JywnbGVmdCcsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMzAnLCczMCcsJzE1JywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsnbWlkZGxlJywnbWlkZGxlJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycyMCcsJzIwJywnMTUwJywnOTAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjE1MDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwiejowO3JYOjA7clk6MDtyWjowO3NYOjAuOTtzWTowLjk7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCIxMFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzc3OTEzLWJya19zbGlkZV9lbGVtZW50LTIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnNDcyYXV0bycsJzM1MHB4JywnMjUwcHgnLCcyMDBweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnNjkycHgnLCc1MTNweCcsJzM2N3B4JywnMjkzcHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBkYXRhLWluZGV4PVwicnMtMTAxXCJcclxuICAgICAgICAgICAgICBkYXRhLXRyYW5zaXRpb249XCJmYWRlXCJcclxuICAgICAgICAgICAgICBkYXRhLXNsb3RhbW91bnQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICBkYXRhLWhpZGVhZnRlcmxvb3A9XCIwXCJcclxuICAgICAgICAgICAgICBkYXRhLWhpZGVzbGlkZW9ubW9iaWxlPVwib2ZmXCJcclxuICAgICAgICAgICAgICBkYXRhLWVhc2Vpbj1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtZWFzZW91dD1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtbWFzdGVyc3BlZWQ9XCIxNDAwXCJcclxuICAgICAgICAgICAgICBkYXRhLXRodW1iPVwiL2ltZy9kZW1vX3Nob3BfdHJlbmR5L2ltYWdlcy8xMDB4NTBfMWFiMDctYnJrX3NsaWRlLTIuanBnXCJcclxuICAgICAgICAgICAgICBkYXRhLXJvdGF0ZT1cIjBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtc2F2ZXBlcmZvcm1hbmNlPVwib2ZmXCJcclxuICAgICAgICAgICAgICBkYXRhLXRpdGxlPVwiU2xpZGVcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW0xPVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtMj1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTM9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW00PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtNT1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTY9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW03PVwiXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmFtOD1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1wYXJhbTk9XCJcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyYW0xMD1cIlwiXHJcbiAgICAgICAgICAgICAgZGF0YS1kZXNjcmlwdGlvbj1cIlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzFhYjA3LWJya19zbGlkZS0yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ3Bvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJnZml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZ3JlcGVhdD1cIm5vLXJlcGVhdFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJncGFyYWxsYXg9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2LXNsaWRlYmdcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gcmV2X2dyb3VwXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTI3XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdyaWdodCcsJ3JpZ2h0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycxNScsJzE1JywnMTUnLCcxNSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycxNDUnLCcxMjUnLCcxNzQnLCc0MDInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWyc2ODUnLCc1NTEnLCczODUnLCcyODInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnMTk2JywnMTcwJywnMTIzJywnODknXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxMVwiLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCI2ODVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI2ODVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxOTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxOTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTExXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzM1MicsJzI4NCcsJzE5NCcsJzE0OSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnLTQwJywnMTcnLCc5JywnOCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwiejowO3JYOjA7clk6MDtyWjowO3NYOjAuOTtzWTowLjk7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMi5lYXNlT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcIjEyXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvODA1ZjktYnJrX3NsaWRlX2VsZW1lbnQtMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnMjE5cHgnLCcxODBweCcsJzE0MHB4JywnMTAwcHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnNzdweCcsJzYzcHgnLCc0OXB4JywnMzVweCddXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItOVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2NlbnRlcicsJ2NlbnRlcicsJ2NlbnRlciddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZvbnRzaXplPVwiWyc3MicsJzYwJywnNDAnLCczMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1saW5laGVpZ2h0PVwiWyc3OCcsJzY4JywnNTAnLCczNiddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIlsnNjgyJywnNTMwJywnMzU4JywnMjcxJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnbm9uZScsJzEzNycsJzEwNCcsJzczJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJ5OlsxMDAlXTt6OjA7clg6MGRlZztyWTowO3JaOjA7c1g6MTtzWToxO3NrWDowO3NrWTowO29wYWNpdHk6MDtcIixcIm1hc2tcIjpcIng6MHB4O3k6WzEwMCVdO3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIyLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcIm1hc2tcIjpcIng6MDt5OjA7czppbmhlcml0O2U6aW5oZXJpdDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjEzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiNjgycHhcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI2ODJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm9ybWFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiNzJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiNzhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJNb250c2VycmF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2F2ZXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzNlMmFjZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIyMDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAzMCVcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIsIGZvbnRGYW1pbHk6IFwiT3BlbiBTYW5zXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgb25seSB0aGlzIHdlZWtcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHJldi1icmstYnJhbmRzIHJldl9ncm91cFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0yNFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywncmlnaHQnLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzIwNScsJzE1OCcsJzgzJywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyc2MjAnLCc0NjknLCc0NzUnLCc1MDQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWycyNTInLCcyNTInLCcyNTInLCcxOTMnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnODMnLCc4MycsJzgzJywnNzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxNFwiLFxyXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIyNTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyNTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCI4M3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjgzcHhcIixcclxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vMS5lbnZhdG8ubWFya2V0L0JkNVY5XCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItMjVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mb250c2l6ZT1cIlsnMjAnLCcyMCcsJzIwJywnMTYnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbGluZWhlaWdodD1cIlsnMjInLCcyMicsJzIyJywnMTYnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9ucz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjgwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjo4MDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJmcmFtZVwiOlwiaG92ZXJcIixcInNwZWVkXCI6XCIwXCIsXCJlYXNlXCI6XCJMaW5lYXIuZWFzZU5vbmVcIixcInRvXCI6XCJvOjE7clg6MDtyWTowO3JaOjA7ejowO1wiLFwic3R5bGVcIjpcImM6cmdiKDAsMTIyLDI1NSk7XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzIwLDIwLDIwLDE5XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzIwLDIwLDIwLDE4XVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlsyMCwyMCwyMCwxOV1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzIwLDIwLDIwLDE4XVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjc3NWZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjQwcHggNDBweCA0MHB4IDQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWJhc2tldFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0xN1wiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyc5MycsJzkzJywnOTMnLCc3OCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnLTExJywnLTExJywnLTExJywnLTExJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZvbnRzaXplPVwiWycyOCcsJzI4JywnMjgnLCcyMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1saW5laGVpZ2h0PVwiWyczMCcsJzMwJywnMzAnLCcyNCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOlwiKzBcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCdXkgbm93e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0xOFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyc5NCcsJzk0JywnOTQnLCc3OSddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMTcnLCcxNycsJzE3JywnMTInXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjpcIiswXCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW50b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5ib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmxlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiMTdcIixcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjcwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2OWFkZmZcIixcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiT3BlbiBTYW5zXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLWljb24taW5zdGFncmFtXCI+PC9pPiBiZXJzZXJre1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiByZXZfZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItMjZcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ3JpZ2h0JywnbGVmdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMTk1JywnMTczJywnOTcnLCcxNSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12b2Zmc2V0PVwiWyczNjUnLCczMDAnLCczMDMnLCc0MDUnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwiWycyNzAnLCcyMjQnLCcyMjQnLCcxMzEnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIlsnMjE3JywnMTY4JywnMTY4JywnMTAzJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImdyb3VwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnJpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB6SW5kZXg6IFwiMThcIixcclxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjcwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjcwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjE3cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMjE3cHhcIixcclxuICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIycHhcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci0xM1wiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzEzNicsJzEwMCcsJzEwMCcsJzUwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzE0MCcsJzExMCcsJzExMCcsJzYwJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BsaXRcIjpcImNoYXJzXCIsXCJzcGxpdGRlbGF5XCI6MC4wNSxcInNwZWVkXCI6MjAwMCxcInNwbGl0X2RpcmVjdGlvblwiOlwiZm9yd2FyZFwiLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIng6WzEwNSVdO3o6MDtyWDo0NWRlZztyWTowZGVnO3JaOjkwZGVnO3NYOjE7c1k6MTtza1g6MDtza1k6MDtcIixcIm1hc2tcIjpcIng6MHB4O3k6MHB4O3M6aW5oZXJpdDtlOmluaGVyaXQ7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXI0LmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcIm1hc2tcIjpcIng6MDt5OjA7czppbmhlcml0O2U6aW5oZXJpdDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbnRvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lucmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW1hcmdpbmJvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2lubGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXCIxOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTM2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI3MDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgJDM5XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTE0XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS14PVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaG9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMTU1JywnMTE4JywnMTE4JywnNjUnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9udHNpemU9XCJbJzQwJywnMzAnLCczMCcsJzE4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWxpbmVoZWlnaHQ9XCJbJzQyJywnMzQnLCczNCcsJzI0J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6XCIrMFwiLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcInk6WzEwMCVdO3o6MDtyWDowZGVnO3JZOjA7clo6MDtzWDoxO3NZOjE7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwibWFza1wiOlwieDowcHg7eTpbMTAwJV07czppbmhlcml0O2U6aW5oZXJpdDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjIuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwibWFza1wiOlwieDowO3k6MDtzOmluaGVyaXQ7ZTppbmhlcml0O1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2ludG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5yaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbWFyZ2luYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1tYXJnaW5sZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCI0MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZvciA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjYjg4ZWZmXCIgfX0+NyBEYXlzPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtc2hhcGUgdHAtc2hhcGV3cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTFcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMCcsJzAnLCcwJywnMCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwic2hhcGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTUwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjoxNTAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcImF1dG86YXV0bztcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXh0YWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjVcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCg1MGRlZywgcmdiYSgxNSw5MCwyMjQsMC45MikgMCUsIHJnYmEoMTE2LDAsMTg2LDAuOTIpIDEwMCUpXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIHRwLXJlc2l6ZW1lXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTIwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsnY2VudGVyJywnY2VudGVyJywnY2VudGVyJywnY2VudGVyJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWycwJywnMCcsJzAnLCcwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWydib3R0b20nLCdib3R0b20nLCdib3R0b20nLCdib3R0b20nXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJy0xOScsJy0xOScsJy0xOScsJy0xOSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12aXNpYmlsaXR5PVwiWydvbicsJ29uJywnb2ZmJywnb2ZmJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxNTAwLFwiZnJhbWVcIjpcIjBcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjIuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI2XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvOTQwYmEtYnJrX3NsaWRlX2VsZW1lbnQtMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWycxMDAlJywnMTAwJScsJzEwMCUnLCcxMDAlJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZSBycy1wYXJhbGxheGxldmVsLTNcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItMlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ3JpZ2h0JywncmlnaHQnLCdyaWdodCcsJ3JpZ2h0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyctNDkxJywnLTQ5MScsJy00OTEnLCctNDkxJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJzAnLCcwJywnMCcsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdmlzaWJpbGl0eT1cIlsnb24nLCdvbicsJ29mZicsJ29mZiddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmFzZWFsaWduPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwiYXV0bzphdXRvO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRleHRhbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwiN1wiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzLzViMjc1LWJya19zbGlkZV9lbGVtZW50LTQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnNjg2YXV0bycsJzY4NmF1dG8nLCc2ODZhdXRvJywnNjg2YXV0byddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnNjg2cHgnLCc2ODZweCcsJzY4NnB4JywnNjg2cHgnXVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbm8tcmV0aW5hXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWNhcHRpb24gdHAtcmVzaXplbWUgcnMtcGFyYWxsYXhsZXZlbC0xXCJcclxuICAgICAgICAgICAgICAgIGlkPVwic2xpZGUtMTAxLWxheWVyLTNcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ob2Zmc2V0PVwiWyctMzE4JywnLTMxOCcsJy0zMTgnLCctMzE4J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZvZmZzZXQ9XCJbJy0xMScsJy0xMScsJy0xMScsJy0xMSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkdGg9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtaGVpZ2h0PVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS12aXNpYmlsaXR5PVwiWydvbicsJ29uJywnb2ZmJywnb2ZmJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10eXBlPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iYXNlYWxpZ249XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjoxMDAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvOGIyOTUtYnJrX3NsaWRlX2VsZW1lbnQtNS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWyc2MzlhdXRvJywnNjM5YXV0bycsJzYzOWF1dG8nLCc2MzlhdXRvJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiWycyOTFweCcsJzI5MXB4JywnMjkxcHgnLCcyOTFweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZSBycy1wYXJhbGxheGxldmVsLTJcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJzbGlkZS0xMDEtbGF5ZXItNFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJy0xNDcnLCctMTQ3JywnLTE0NycsJy0xNDcnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMTIwJywnMTIwJywnMTIwJywnMTIwJ11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWR0aD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1oZWlnaHQ9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2liaWxpdHk9XCJbJ29uJywnb24nLCdvZmYnLCdvZmYnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXR5cGU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWJhc2VhbGlnbj1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjEwMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCI5XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvZGVtb19zaG9wX3RyZW5keS9pbWFnZXMvZTdmNzQtYnJrX3NsaWRlX2VsZW1lbnQtNi5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXd3PVwiWycyOTVhdXRvJywnMjk1YXV0bycsJzI5NWF1dG8nLCcyOTVhdXRvJ11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWhoPVwiWycyOTVweCcsJzI5NXB4JywnMjk1cHgnLCcyOTVweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1uby1yZXRpbmFcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiB0cC1yZXNpemVtZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInNsaWRlLTEwMS1sYXllci03XCJcclxuICAgICAgICAgICAgICAgIGRhdGEteD1cIlsncmlnaHQnLCdyaWdodCcsJ2xlZnQnLCdjZW50ZXInXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhvZmZzZXQ9XCJbJzkyJywnNzknLCcxNScsJzAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ3RvcCcsJ3RvcCddXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdm9mZnNldD1cIlsnMycsJzE1JywnMTUwJywnOTAnXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZHRoPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWhlaWdodD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdHlwZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjE1MDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwiejowO3JYOjA7clk6MDtyWjowO3NYOjAuOTtzWTowLjk7c2tYOjA7c2tZOjA7b3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MTAwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJhdXRvOmF1dG87XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuICAgICAgICAgICAgICAgIGRhdGEtdGV4dGFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCIxMFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2RlbW9fc2hvcF90cmVuZHkvaW1hZ2VzL2RmYTFmLWJya19zbGlkZV9lbGVtZW50LTcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS13dz1cIlsnMzE1YXV0bycsJzI2MHB4JywnMjIwcHgnLCcyMDBweCddXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1oaD1cIlsnNDA5cHgnLCczMzhweCcsJzI4NicsJzI5M3B4J11cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5vLXJldGluYVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRwLWJhbm5lcnRpbWVyIHRwLWJvdHRvbVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHZpc2liaWxpdHk6IFwiaGlkZGVuICFpbXBvcnRhbnRcIiB9fVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAvLyA8IS0tIENhcnQgU2lkZWJhciBPZmZzZXQgU3RhcnQtLT5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImJzLWNhbnZhcyBicy1jYW52YXMtbGVmdCBwb3NpdGlvbi1maXhlZCBiZy1jYXJ0IGgtMTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJzLWNhbnZhcy1oZWFkZXIgc2lkZS1jYXJ0LWhlYWRlciBwLTMgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgIG1haW4tY2FydC10aXRsZVwiPlxyXG4gICAgICAgIE15IENhcnQgPHNwYW4+KDIgSXRlbXMpPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJzLWNhbnZhcy1jbG9zZSBjbG9zZVwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtbXVsdGlwbHlcIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJzLWNhbnZhcy1ib2R5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC10b3AtdG90YWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdG90YWwtZGlsXCI+XHJcbiAgICAgICAgICA8aDQ+R2FtYm8gU3VwZXIgTWFya2V0PC9oND5cclxuICAgICAgICAgIDxzcGFuPiQzNDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdG90YWwtZGlsIHB0LTJcIj5cclxuICAgICAgICAgIDxoND5EZWxpdmVyeSBDaGFyZ2VzPC9oND5cclxuICAgICAgICAgIDxzcGFuPiQxPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLWNhcnQtaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtaW1nXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Byb2R1Y3QvaW1nLTEuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlci1iYWRnZVwiPjYlIE9GRjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdGV4dFwiPlxyXG4gICAgICAgICAgICA8aDQ+UHJvZHVjdCBUaXRsZSBIZXJlPC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImtnZ3JtLW5vd1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhMVwiIG5hbWU9XCJjYXJ0MVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYTFcIj4wLjUwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImEyXCIgbmFtZT1cImNhcnQxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhMlwiPjFrZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhM1wiIG5hbWU9XCJjYXJ0MVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYTNcIj4ya2c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiYTRcIiBuYW1lPVwiY2FydDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImE0XCI+M2tnPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXR5LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eSBidXR0b25zX2FkZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIi1cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW51cyBtaW51cy1idG5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtdGV4dCBxdHkgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIrXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGx1cyBwbHVzLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAkMTAgPHNwYW4+JDE1PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNhcnQtY2xvc2UtYnRuXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1tdWx0aXBseVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXByb2R1Y3QtaW1nXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Byb2R1Y3QvaW1nLTIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZlci1iYWRnZVwiPjYlIE9GRjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdGV4dFwiPlxyXG4gICAgICAgICAgICA8aDQ+UHJvZHVjdCBUaXRsZSBIZXJlPC9oND5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImtnZ3JtLW5vd1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhNVwiIG5hbWU9XCJjYXJ0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYTVcIj4wLjUwPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImE2XCIgbmFtZT1cImNhcnQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhNlwiPjFrZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJhN1wiIG5hbWU9XCJjYXJ0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYTdcIj4ya2c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdHktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5IGJ1dHRvbnNfYWRkZWRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiLVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnVzIG1pbnVzLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWFudGl0eVwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC10ZXh0IHF0eSB0ZXh0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIitcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbHVzIHBsdXMtYnRuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW0tcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICQyNCA8c3Bhbj4kMzA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjYXJ0LWNsb3NlLWJ0blwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtbXVsdGlwbHlcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJzLWNhbnZhcy1mb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXRvdGFsLWRpbCBzYXZpbmctdG90YWwgXCI+XHJcbiAgICAgICAgPGg0PlRvdGFsIFNhdmluZzwvaDQ+XHJcbiAgICAgICAgPHNwYW4+JDExPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRvdGFsLWNhcnRcIj5cclxuICAgICAgICA8aDI+VG90YWw8L2gyPlxyXG4gICAgICAgIDxzcGFuPiQzNTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtY2FydFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHJvbW8tY29kZVwiPlxyXG4gICAgICAgICAgSGF2ZSBhIHByb21vY29kZT9cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjYXJ0LWNoZWNrb3V0LWJ0biBob3Zlci1idG5cIj5cclxuICAgICAgICAgIFByb2NlZWQgdG8gQ2hlY2tvdXRcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgLy8gPCEtLSBDYXJ0IFNpZGViYXIgT2Zmc2V0bCBFbmQtLT5cclxuKTtcclxuIiwiaW1wb3J0IE1vZGVsQ2F0ZWdvcnkgZnJvbSBcIi4vTW9kZWxDYXRlZ29yeVwiO1xyXG5pbXBvcnQgU2VhcmNoTW9kZWwgZnJvbSBcIi4vU2VhcmNoTW9kZWxcIjtcclxuaW1wb3J0IENhcnRTaWRlYmFyIGZyb20gXCIuL0NhcnRTaWRlYmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNb2RlbENhdGVnb3J5IC8+XHJcbiAgICAgIDxTZWFyY2hNb2RlbCAvPlxyXG4gICAgICA8Q2FydFNpZGViYXIgLz5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyIGNsZWFyZml4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyLWdyb3VwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNfbWFpbl9sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kYXJrLWxvZ28tMS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9sb2dvXCIgaWQ9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xvZ28uc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nby1pbnZlcnNlXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9kYXJrLWxvZ28uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RfbG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGlubGluZSBkcm9wZG93biBsb2MtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWxvY2F0aW9uLXBvaW50XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICBHdXJ1Z3JhbVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWFuZ2xlLWRvd24gaWNvbl9fMTRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgZHJvcGRvd25fbG9jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWxvY2F0aW9uLXBvaW50XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEd1cnVncmFtXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1sb2NhdGlvbi1wb2ludFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBOZXcgRGVsaGlcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWxvY2F0aW9uLXBvaW50XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhbmdhbHVydVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtbG9jYXRpb24tcG9pbnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgTXVtYmFpXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1sb2NhdGlvbi1wb2ludFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBIeWRlcmFiYWRcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWxvY2F0aW9uLXBvaW50XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEtvbGthdGFcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWxvY2F0aW9uLXBvaW50XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEx1ZGhpYW5hXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1sb2NhdGlvbi1wb2ludFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBDaGFuZGlncmFoXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaDEyMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGxlZnQgaWNvbiBpbnB1dCBzd2RoMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvbXB0IHNyY2gxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwcm9kdWN0cy4uXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1zZWFyY2gtYWx0IGljb24gaWNvbjFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLXBob25lLWFsdFwiPjwvaT4xODAwLTAwMC0wMDBcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm9mZmVycy5odG1sXCIgY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtZ2lmdFwiPjwvaT5PZmZlcnNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImZhcS5odG1sXCIgY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtcXVlc3Rpb24tY2lyY2xlXCI+PC9pPkhlbHBcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiZGFzaGJvYXJkX215X3dpc2hsaXN0Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wdGlvbl9saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXaXNobGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWhlYXJ0IGljb25fd2lzaGxpc3RcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aV9jb3VudDFcIj4zPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwib3B0c19hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYXZhdGFyL2ltZy01LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fbmFtZVwiPkpvaG4gRG9lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgZHJvcGRvd25fYWNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmlnaHRfbW9kZV9zd2l0Y2hfX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBpZD1cIm5pZ2h0LW1vZGVcIiBjbGFzc05hbWU9XCJidG4tbmlnaHQtbW9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLW1vb25cIj48L2k+IE5pZ2h0IG1vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLW5pZ2h0LW1vZGUtc3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidWstc3dpdGNoLWJ1dHRvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiZGFzaGJvYXJkX292ZXJ2aWV3Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtYXBwcyBpY29uX18xXCI+PC9pPkRhc2hiYW9yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImRhc2hib2FyZF9teV9vcmRlcnMuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1ib3ggaWNvbl9fMVwiPjwvaT5NeSBPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJkYXNoYm9hcmRfbXlfd2lzaGxpc3QuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1oZWFydCBpY29uX18xXCI+PC9pPk15IFdpc2hsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiZGFzaGJvYXJkX215X3dhbGxldC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLXVzZC1jaXJjbGUgaWNvbl9fMVwiPjwvaT5NeSBXYWxsZXRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJkYXNoYm9hcmRfbXlfYWRkcmVzc2VzLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtbG9jYXRpb24tcG9pbnQgaWNvbl9fMVwiPjwvaT5NeVxyXG4gICAgICAgICAgICAgICAgICAgICAgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwib2ZmZXJzLmh0bWxcIiBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1naWZ0IGljb25fXzFcIj48L2k+T2ZmZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJmYXEuaHRtbFwiIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWluZm8tY2lyY2xlIGljb25fXzFcIj48L2k+RmFxXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzaWduX2luLmh0bWxcIiBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1sb2NrLWFsdCBpY29uX18xXCI+PC9pPkxvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyLWdyb3VwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeV9kcm9wIGhvdmVyLWJ0blwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NhdGVnb3J5X21vZGVsXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1hcHBzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZV9faWNvblwiPlNlbGVjdCBDYXRlZ29yeTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBweS0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgbWVudV90b2dnbGVfYnRuXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvdyBmbGV4LXhsLXJvdyBqdXN0aWZ5LWNvbnRlbnQtbGctZW5kIGJnLWRhcmsxIHAtMyBwLWxnLTAgbXQxLTUgbXQtbGctMCBtb2JpbGVNZW51XCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWFpbl9uYXYgYWxpZ24tc2VsZi1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInNob3BfZ3JpZC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmV3X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5ldyBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwic2hvcF9ncmlkLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRmVhdHVyZWQgUHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlZCBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGljb24gdG9wIGxlZnQgZHJvcGRvd24gbmF2X19tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdGl0bGU9XCJQYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgZHJvcGRvd25fcGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiZGFzaGJvYXJkX292ZXJ2aWV3Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW0gcGFnZV9fbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJhYm91dF91cy5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInNob3BfZ3JpZC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIEdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJzaW5nbGVfcHJvZHVjdF92aWV3Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW0gcGFnZV9fbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZSBQcm9kdWN0IFZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJjaGVja291dC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInJlcXVlc3RfcHJvZHVjdC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0IFJlcXVlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJvcmRlcl9wbGFjZWQuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbSBwYWdlX19saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXIgUGxhY2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiYmlsbC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWxsIFNsaXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJzaWduX2luLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW0gcGFnZV9fbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJzaWduX3VwLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW0gcGFnZV9fbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJmb3Jnb3RfcGFzc3dvcmQuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbSBwYWdlX19saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiY29udGFjdF91cy5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGljb24gdG9wIGxlZnQgZHJvcGRvd24gbmF2X19tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdGl0bGU9XCJCbG9nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZyA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWFuZ2xlLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IGRyb3Bkb3duX3BhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIm91cl9ibG9nLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW0gcGFnZV9fbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiYmxvZ19ub19zaWRlYmFyLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSBjaGFubmVsX2l0ZW0gcGFnZV9fbGlua3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBCbG9nIFR3byBObyBTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiYmxvZ19sZWZ0X3NpZGViYXIuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbSBwYWdlX19saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3VyIEJsb2cgd2l0aCBMZWZ0IFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJibG9nX3JpZ2h0X3NpZGViYXIuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbSBwYWdlX19saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT3VyIEJsb2cgd2l0aCBSaWdodCBTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiYmxvZ19kZXRhaWxfdmlldy5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gY2hhbm5lbF9pdGVtIHBhZ2VfX2xpbmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIERldGFpbCBWaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiYmxvZ19sZWZ0X3NpZGViYXJfc2luZ2xlX3ZpZXcuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIGNoYW5uZWxfaXRlbSBwYWdlX19saW5rc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZyBEZXRhaWwgVmlldyB3aXRoIFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJjb250YWN0X3VzLmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29udGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGV5X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVfX2J0blwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2NhdGVnb3J5X21vZGVsXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtYXBwc1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfY2FydCBvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcnRfX2J0biBob3Zlci1idG4gcHVsbC1icy1jYW52YXMtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcnRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInVpbCB1aWwtc2hvcHBpbmctY2FydC1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5DYXJ0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucz4yPC9pbnM+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLWFuZ2xlLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfX2ljb24gb3JkZXItMVwiPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hfX2J0biBob3Zlci1idG5cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzZWFyY2hfbW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLXNlYXJjaFwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgey8qIDwhLS0gSGVhZGVyIEVuZCAtLT4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJicmstbG9hZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJyay1sb2FkZXJfX2xvYWRlclwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgLy8gPCEtLSBDYXRlZ29yeSBNb2RlbCBTdGFydC0tPlxyXG4gIDxkaXZcclxuICAgIGlkPVwiY2F0ZWdvcnlfbW9kZWxcIlxyXG4gICAgY2xhc3NOYW1lPVwiaGVhZGVyLWNhdGUtbW9kZWwgbWFpbi1nYW1iby1tb2RlbCBtb2RhbCBmYWRlXCJcclxuICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICBhcmlhLW1vZGFsPVwiZmFsc2VcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIGNhdGVnb3J5LWFyZWFcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1hcmVhLWlubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlIGJ0bi1jbG9zZVwiXHJcbiAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1tdWx0aXBseVwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbW9kZWwtY29udGVudCBtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoND5TZWxlY3QgQ2F0ZWdvcnk8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2F0ZWdvcnktYnktY2F0XCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tMS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gRnJ1aXRzIGFuZCBWZWdldGFibGVzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi0yLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBHcm9jZXJ5ICYgU3RhcGxlcyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tMy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gRGFpcnkgJiBFZ2dzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi00LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBCZXZlcmFnZXMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXRlZ29yeS9pY29uLTUuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+IFNuYWNrcyA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tNi5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gSG9tZSBDYXJlIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi03LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBOb29kbGVzICYgU2F1Y2VzIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi04LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBQZXJzb25hbCBDYXJlIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi05LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBQZXQgQ2FyZSA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtb3JlY2F0ZS1idG5cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1hcHBzXCI+PC9pPk1vcmUgQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubWFpbi1nYW1iby1tb2RlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICBsZWZ0LFxyXG4gICAgICAgICAgcmdiYSgyMzAsIDkyLCA5MSwgMC45KSxcclxuICAgICAgICAgIHJnYmEoMjQ1LCA5MywgNDQsIDAuOSlcclxuICAgICAgICApO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgcmdiYSgyMzAsIDkyLCA5MSwgMC45KSxcclxuICAgICAgICAgIHJnYmEoMjQ1LCA5MywgNDQsIDAuOSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktYXJlYS1pbm5lciAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktYXJlYS1pbm5lciAuYnRuLWNsb3NlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktbW9kZWwtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRleV9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaF9faWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1Yi1oZWFkZXItaWNvbnMtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhdGVfX2J0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOGY5MWFjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDE5cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlX19idG46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZjU1ZDJjICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2hfX2J0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJiMmY0YztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogLS0tIENhdGVnb3J5IE1vZGUgLS0tICovXHJcblxyXG4gICAgICAuY2F0ZS1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyYjJmNGM7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZS1oZWFkZXIgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnktYnktY2F0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlZ29yeS1ieS1jYXQgbGkge1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW5nbGUtY2F0LWl0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW5nbGUtY2F0LWl0ZW06aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zaW5nbGUtY2F0LWl0ZW0gLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjMmIyZjRjO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2luZ2xlLWNhdC1pdGVtIC5pY29uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpbmdsZS1jYXQtaXRlbSAuaWNvbiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubW9yZWNhdGUtYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzJiMmY0YztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vcmVjYXRlLWJ0biBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1vcmVjYXRlLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmNTVkMmMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ncm91bmQtYXJlYSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWhlYWRlciBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWhlYWRlciBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzIxcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZWFyY2gtYnktY2F0IC5zaW5nbGUtY2F0IHtcclxuICAgICAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTg1KVwiO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWJ5LWNhdCAuc2luZ2xlLWNhdCAuaWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQgLnNpbmdsZS1jYXQgLmljb24gaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQgLnNpbmdsZS1jYXQgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjMmIyZjRjO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlYXJjaC1ieS1jYXQgLnNpbmdsZS1jYXQ6aG92ZXIgLnRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjZjU1ZDJjO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbiAgLy8gLyogPCEtLSBDYXRlZ29yeSBNb2RlbCBFbmQtLT4gKi9cclxuKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIC8vIDwhLS0gU2VhcmNoIE1vZGVsIFN0YXJ0LS0+XHJcbiAgPGRpdlxyXG4gICAgaWQ9XCJzZWFyY2hfbW9kZWxcIlxyXG4gICAgY2xhc3NOYW1lPVwiaGVhZGVyLWNhdGUtbW9kZWwgbWFpbi1nYW1iby1tb2RlbCBtb2RhbCBmYWRlXCJcclxuICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICBhcmlhLW1vZGFsPVwiZmFsc2VcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIHNlYXJjaC1ncm91bmQtYXJlYVwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWFyZWEtaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UgYnRuLWNsb3NlXCJcclxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ1aWwgdWlsLW11bHRpcGx5XCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1tb2RlbC1jb250ZW50IG1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcHJvZHVjdHMuLi5cIiAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwidWlsIHVpbC1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYnktY2F0XCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi0xLnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+RnJ1aXRzIGFuZCBWZWdldGFibGVzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXRlZ29yeS9pY29uLTIuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gR3JvY2VyeSAmIFN0YXBsZXMgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXRlZ29yeS9pY29uLTMuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gRGFpcnkgJiBFZ2dzIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi00LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+IEJldmVyYWdlcyA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tNS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBTbmFja3MgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXRlZ29yeS9pY29uLTYuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gSG9tZSBDYXJlIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2luZ2xlLWNhdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2F0ZWdvcnkvaWNvbi03LnN2Z1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+IE5vb2RsZXMgJiBTYXVjZXMgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXRlZ29yeS9pY29uLTguc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj4gUGVyc29uYWwgQ2FyZSA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpbmdsZS1jYXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2NhdGVnb3J5L2ljb24tOS5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPiBQZXQgQ2FyZSA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgLy8gey8qIDwtLSBTZWFyY2ggTW9kZWwgRW5kLS0+ICovfVxyXG4pO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fycm91c2VsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob2xhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGpRdWVyeShcIiNyZXZfc2xpZGVyXzVfMVwiKVxyXG4gICAgICAuc2hvdygpXHJcbiAgICAgIC5yZXZvbHV0aW9uKHtcclxuICAgICAgICBzbGlkZXJUeXBlOiBcInN0YW5kYXJkXCIsXHJcbiAgICAgICAganNGaWxlTG9jYXRpb246IFwidmVuZG9yL3JldnNsaWRlci9qcy9cIixcclxuICAgICAgICBzbGlkZXJMYXlvdXQ6IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgICAgIGRvdHRlZE92ZXJsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogXCJvZmZcIixcclxuICAgICAgICAgIGtleWJvYXJkX2RpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbE5hdmlnYXRpb246IFwib2ZmXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbFJldmVyc2U6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgb25Ib3ZlclN0b3A6IFwib2ZmXCIsXHJcbiAgICAgICAgICBhcnJvd3M6IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9vbm1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVfb25sZWF2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9kZWxheTogMjAwLFxyXG4gICAgICAgICAgICBoaWRlX2RlbGF5X21vYmlsZTogMTIwMCxcclxuICAgICAgICAgICAgdG1wOiBcIlwiLFxyXG4gICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoX29mZnNldDogMTAsXHJcbiAgICAgICAgICAgICAgdl9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgIHZfYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgaF9vZmZzZXQ6IDEwLFxyXG4gICAgICAgICAgICAgIHZfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc3BvbnNpdmVMZXZlbHM6IFs1NzYsIDQ4MCwgNDgwLCA0ODBdLFxyXG4gICAgICAgIHZpc2liaWxpdHlMZXZlbHM6IFs1NzYsIDU3NiwgNTc2LCA0ODBdLFxyXG4gICAgICAgIGdyaWR3aWR0aDogWzEyMDAsIDk5MiwgNzY4LCA1NzZdLFxyXG4gICAgICAgIGdyaWRoZWlnaHQ6IFs5NjAsIDc2OCwgOTYwLCA3MjBdLFxyXG4gICAgICAgIGxhenlUeXBlOiBcIm5vbmVcIixcclxuICAgICAgICBwYXJhbGxheDoge1xyXG4gICAgICAgICAgdHlwZTogXCJtb3VzZVwiLFxyXG4gICAgICAgICAgb3JpZ286IFwic2xpZGVyY2VudGVyXCIsXHJcbiAgICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgICAgc3BlZWRiZzogMCxcclxuICAgICAgICAgIHNwZWVkbHM6IDAsXHJcbiAgICAgICAgICBsZXZlbHM6IFs0LCA2LCA4LCAxMCwgMTIsIDMwLCAzNSwgNDAsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1NV0sXHJcbiAgICAgICAgICBkaXNhYmxlX29ubW9iaWxlOiBcIm9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFkb3c6IDAsXHJcbiAgICAgICAgc3Bpbm5lcjogXCJzcGlubmVyMlwiLFxyXG4gICAgICAgIHN0b3BMb29wOiBcIm9mZlwiLFxyXG4gICAgICAgIHN0b3BBZnRlckxvb3BzOiAtMSxcclxuICAgICAgICBzdG9wQXRTbGlkZTogLTEsXHJcbiAgICAgICAgc2h1ZmZsZTogXCJvZmZcIixcclxuICAgICAgICBhdXRvSGVpZ2h0OiBcIm9mZlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5BdXRvV2lkdGg6IFwib25cIixcclxuICAgICAgICBmdWxsU2NyZWVuQWxpZ25Gb3JjZTogXCJvZmZcIixcclxuICAgICAgICBmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyOiBcIlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5PZmZzZXQ6IFwiXCIsXHJcbiAgICAgICAgZGlzYWJsZVByb2dyZXNzQmFyOiBcIm9uXCIsXHJcbiAgICAgICAgaGlkZVRodW1ic09uTW9iaWxlOiBcIm9uXCIsXHJcbiAgICAgICAgaGlkZVNsaWRlckF0TGltaXQ6IDAsXHJcbiAgICAgICAgaGlkZUNhcHRpb25BdExpbWl0OiAwLFxyXG4gICAgICAgIGhpZGVBbGxDYXB0aW9uQXRMaWxtaXQ6IDAsXHJcbiAgICAgICAgZGVidWdNb2RlOiBmYWxzZSxcclxuICAgICAgICBmYWxsYmFja3M6IHtcclxuICAgICAgICAgIHNpbXBsaWZ5QWxsOiBcIm9mZlwiLFxyXG4gICAgICAgICAgbmV4dFNsaWRlT25XaW5kb3dGb2N1czogXCJvZmZcIixcclxuICAgICAgICAgIGRpc2FibGVGb2N1c0xpc3RlbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+RnJpRm9sbHk8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaGVpZ2h0PWRldmljZS1oZWlnaHQsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9MVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCI+PC9tZXRhPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMyNzc1RkZcIj48L21ldGE+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwidGhlbWVmb3Jlc3QsIHRoZW1lLCBodG1sLCB0ZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwidGhlbWVmb3Jlc3QsIHRoZW1lLCBodG1sLCB0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNS4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUI0ZElZSEtOQnQ4QmMxMnArV1hja2h6Y0lDbzB3dEpBb1U4WVpUWTVxRTBJZDFHU3NlVGs2UytMM0JsWGVWSVVcIlxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL3JldnNsaWRlci9jc3Mvc2V0dGluZ3MuY3NzXCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3Ivc2VtYW50aWMvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9Pd2xDYXJvdXNlbC9hc3NldHMvb3dsLmNhcm91c2VsLmNzc1wiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL093bENhcm91c2VsL2Fzc2V0cy9vd2wudGhlbWUuZGVmYXVsdC5taW4uY3NzXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhamRoYW5pOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiL3ZlbmRvci91bmljb25zLTIuMC4xL2Nzcy91bmljb25zLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL3Jlc3BvbnNpdmUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9uaWdodC1tb2RlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPENhcnJvdXNlbCAvPlxyXG4gICAgICAgIDxoMT5hc2Rhc2Q8L2gxPjxici8+XHJcbiAgICAgICAgPGgxPmFzZGFzZGFzZDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
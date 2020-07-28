webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hola; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Carrousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Carrousel */ "./components/Carrousel.js");





var _jsxFileName = "E:\\proyecto-frifolly\\frifolly-frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var hola = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(hola, _React$Component);

  var _super = _createSuper(hola);

  function hola() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, hola);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(hola, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
        responsiveLevels: [1240, 480, 480, 480],
        visibilityLevels: [576, 576, 576, 480],
        gridwidth: [576, 992, 768, 576],
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
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 9
        }
      }), __jsx(_components_Carrousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      })));
    }
  }]);

  return hola;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob2xhIiwialF1ZXJ5Iiwic2hvdyIsInJldm9sdXRpb24iLCJzbGlkZXJUeXBlIiwianNGaWxlTG9jYXRpb24iLCJzbGlkZXJMYXlvdXQiLCJkb3R0ZWRPdmVybGF5IiwiZGVsYXkiLCJuYXZpZ2F0aW9uIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwia2V5Ym9hcmRfZGlyZWN0aW9uIiwibW91c2VTY3JvbGxOYXZpZ2F0aW9uIiwibW91c2VTY3JvbGxSZXZlcnNlIiwib25Ib3ZlclN0b3AiLCJhcnJvd3MiLCJzdHlsZSIsImVuYWJsZSIsImhpZGVfb25tb2JpbGUiLCJoaWRlX29ubGVhdmUiLCJoaWRlX2RlbGF5IiwiaGlkZV9kZWxheV9tb2JpbGUiLCJ0bXAiLCJsZWZ0IiwiaF9hbGlnbiIsInZfYWxpZ24iLCJoX29mZnNldCIsInZfb2Zmc2V0IiwicmlnaHQiLCJyZXNwb25zaXZlTGV2ZWxzIiwidmlzaWJpbGl0eUxldmVscyIsImdyaWR3aWR0aCIsImdyaWRoZWlnaHQiLCJsYXp5VHlwZSIsInBhcmFsbGF4IiwidHlwZSIsIm9yaWdvIiwic3BlZWQiLCJzcGVlZGJnIiwic3BlZWRscyIsImxldmVscyIsImRpc2FibGVfb25tb2JpbGUiLCJzaGFkb3ciLCJzcGlubmVyIiwic3RvcExvb3AiLCJzdG9wQWZ0ZXJMb29wcyIsInN0b3BBdFNsaWRlIiwic2h1ZmZsZSIsImF1dG9IZWlnaHQiLCJmdWxsU2NyZWVuQXV0b1dpZHRoIiwiZnVsbFNjcmVlbkFsaWduRm9yY2UiLCJmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyIiwiZnVsbFNjcmVlbk9mZnNldCIsImRpc2FibGVQcm9ncmVzc0JhciIsImhpZGVUaHVtYnNPbk1vYmlsZSIsImhpZGVTbGlkZXJBdExpbWl0IiwiaGlkZUNhcHRpb25BdExpbWl0IiwiaGlkZUFsbENhcHRpb25BdExpbG1pdCIsImRlYnVnTW9kZSIsImZhbGxiYWNrcyIsInNpbXBsaWZ5QWxsIiwibmV4dFNsaWRlT25XaW5kb3dGb2N1cyIsImRpc2FibGVGb2N1c0xpc3RlbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEJDLFlBQU0sQ0FBQyxpQkFBRCxDQUFOLENBQ0dDLElBREgsR0FFR0MsVUFGSCxDQUVjO0FBQ1ZDLGtCQUFVLEVBQUUsVUFERjtBQUVWQyxzQkFBYyxFQUFFLHNCQUZOO0FBR1ZDLG9CQUFZLEVBQUUsWUFISjtBQUlWQyxxQkFBYSxFQUFFLE1BSkw7QUFLVkMsYUFBSyxFQUFFLElBTEc7QUFNVkMsa0JBQVUsRUFBRTtBQUNWQyw0QkFBa0IsRUFBRSxLQURWO0FBRVZDLDRCQUFrQixFQUFFLFlBRlY7QUFHVkMsK0JBQXFCLEVBQUUsS0FIYjtBQUlWQyw0QkFBa0IsRUFBRSxTQUpWO0FBS1ZDLHFCQUFXLEVBQUUsS0FMSDtBQU1WQyxnQkFBTSxFQUFFO0FBQ05DLGlCQUFLLEVBQUUsUUFERDtBQUVOQyxrQkFBTSxFQUFFLElBRkY7QUFHTkMseUJBQWEsRUFBRSxLQUhUO0FBSU5DLHdCQUFZLEVBQUUsSUFKUjtBQUtOQyxzQkFBVSxFQUFFLEdBTE47QUFNTkMsNkJBQWlCLEVBQUUsSUFOYjtBQU9OQyxlQUFHLEVBQUUsRUFQQztBQVFOQyxnQkFBSSxFQUFFO0FBQ0pDLHFCQUFPLEVBQUUsTUFETDtBQUVKQyxxQkFBTyxFQUFFLFFBRkw7QUFHSkMsc0JBQVEsRUFBRSxFQUhOO0FBSUpDLHNCQUFRLEVBQUU7QUFKTixhQVJBO0FBY05DLGlCQUFLLEVBQUU7QUFDTEoscUJBQU8sRUFBRSxPQURKO0FBRUxDLHFCQUFPLEVBQUUsUUFGSjtBQUdMQyxzQkFBUSxFQUFFLEVBSEw7QUFJTEMsc0JBQVEsRUFBRTtBQUpMO0FBZEQ7QUFORSxTQU5GO0FBa0NWRSx3QkFBZ0IsRUFBRSxDQUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbERGLEVBbURFO0FBQU0sWUFBSSxFQUFDLGdCQUFYO0FBQTRCLFdBQUcsRUFBQyxZQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbkRGLEVBb0RFO0FBQU0sWUFBSSxFQUFDLHFCQUFYO0FBQWlDLFdBQUcsRUFBQyxZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBcERGLEVBcURFO0FBQU0sWUFBSSxFQUFDLHFCQUFYO0FBQWlDLFdBQUcsRUFBQyxZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBckRGLENBREYsRUF3REU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZBLEVBR0EsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEEsQ0F4REYsQ0FERjtBQWdFRDs7OztFQTlJK0JDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNkMmQ3MWIzY2M4OTZiNDU3YWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fycm91c2VsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob2xhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGpRdWVyeShcIiNyZXZfc2xpZGVyXzVfMVwiKVxyXG4gICAgICAuc2hvdygpXHJcbiAgICAgIC5yZXZvbHV0aW9uKHtcclxuICAgICAgICBzbGlkZXJUeXBlOiBcInN0YW5kYXJkXCIsXHJcbiAgICAgICAganNGaWxlTG9jYXRpb246IFwidmVuZG9yL3JldnNsaWRlci9qcy9cIixcclxuICAgICAgICBzbGlkZXJMYXlvdXQ6IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgICAgIGRvdHRlZE92ZXJsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogXCJvZmZcIixcclxuICAgICAgICAgIGtleWJvYXJkX2RpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbE5hdmlnYXRpb246IFwib2ZmXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbFJldmVyc2U6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgb25Ib3ZlclN0b3A6IFwib2ZmXCIsXHJcbiAgICAgICAgICBhcnJvd3M6IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9vbm1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVfb25sZWF2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9kZWxheTogMjAwLFxyXG4gICAgICAgICAgICBoaWRlX2RlbGF5X21vYmlsZTogMTIwMCxcclxuICAgICAgICAgICAgdG1wOiBcIlwiLFxyXG4gICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoX29mZnNldDogMTAsXHJcbiAgICAgICAgICAgICAgdl9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgIHZfYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgaF9vZmZzZXQ6IDEwLFxyXG4gICAgICAgICAgICAgIHZfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc3BvbnNpdmVMZXZlbHM6IFsxMjQwLCA0ODAsIDQ4MCwgNDgwXSxcclxuICAgICAgICB2aXNpYmlsaXR5TGV2ZWxzOiBbNTc2LCA1NzYsIDU3NiwgNDgwXSxcclxuICAgICAgICBncmlkd2lkdGg6IFs1NzYsIDk5MiwgNzY4LCA1NzZdLFxyXG4gICAgICAgIGdyaWRoZWlnaHQ6IFs5NjAsIDc2OCwgOTYwLCA3MjBdLFxyXG4gICAgICAgIGxhenlUeXBlOiBcIm5vbmVcIixcclxuICAgICAgICBwYXJhbGxheDoge1xyXG4gICAgICAgICAgdHlwZTogXCJtb3VzZVwiLFxyXG4gICAgICAgICAgb3JpZ286IFwic2xpZGVyY2VudGVyXCIsXHJcbiAgICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgICAgc3BlZWRiZzogMCxcclxuICAgICAgICAgIHNwZWVkbHM6IDAsXHJcbiAgICAgICAgICBsZXZlbHM6IFs0LCA2LCA4LCAxMCwgMTIsIDMwLCAzNSwgNDAsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1NV0sXHJcbiAgICAgICAgICBkaXNhYmxlX29ubW9iaWxlOiBcIm9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFkb3c6IDAsXHJcbiAgICAgICAgc3Bpbm5lcjogXCJzcGlubmVyMlwiLFxyXG4gICAgICAgIHN0b3BMb29wOiBcIm9mZlwiLFxyXG4gICAgICAgIHN0b3BBZnRlckxvb3BzOiAtMSxcclxuICAgICAgICBzdG9wQXRTbGlkZTogLTEsXHJcbiAgICAgICAgc2h1ZmZsZTogXCJvZmZcIixcclxuICAgICAgICBhdXRvSGVpZ2h0OiBcIm9mZlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5BdXRvV2lkdGg6IFwib25cIixcclxuICAgICAgICBmdWxsU2NyZWVuQWxpZ25Gb3JjZTogXCJvZmZcIixcclxuICAgICAgICBmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyOiBcIlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5PZmZzZXQ6IFwiXCIsXHJcbiAgICAgICAgZGlzYWJsZVByb2dyZXNzQmFyOiBcIm9uXCIsXHJcbiAgICAgICAgaGlkZVRodW1ic09uTW9iaWxlOiBcIm9uXCIsXHJcbiAgICAgICAgaGlkZVNsaWRlckF0TGltaXQ6IDAsXHJcbiAgICAgICAgaGlkZUNhcHRpb25BdExpbWl0OiAwLFxyXG4gICAgICAgIGhpZGVBbGxDYXB0aW9uQXRMaWxtaXQ6IDAsXHJcbiAgICAgICAgZGVidWdNb2RlOiBmYWxzZSxcclxuICAgICAgICBmYWxsYmFja3M6IHtcclxuICAgICAgICAgIHNpbXBsaWZ5QWxsOiBcIm9mZlwiLFxyXG4gICAgICAgICAgbmV4dFNsaWRlT25XaW5kb3dGb2N1czogXCJvZmZcIixcclxuICAgICAgICAgIGRpc2FibGVGb2N1c0xpc3RlbmVyOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+RnJpRm9sbHk8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaGVpZ2h0PWRldmljZS1oZWlnaHQsaW5pdGlhbC1zY2FsZT0xLG1heGltdW0tc2NhbGU9MVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImZvcm1hdC1kZXRlY3Rpb25cIiBjb250ZW50PVwidGVsZXBob25lPW5vXCI+PC9tZXRhPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMyNzc1RkZcIj48L21ldGE+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwidGhlbWVmb3Jlc3QsIHRoZW1lLCBodG1sLCB0ZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBjb250ZW50PVwidGhlbWVmb3Jlc3QsIHRoZW1lLCBodG1sLCB0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJNeSBwYWdlIHRpdGxlXCIga2V5PVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNS4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUI0ZElZSEtOQnQ4QmMxMnArV1hja2h6Y0lDbzB3dEpBb1U4WVpUWTVxRTBJZDFHU3NlVGs2UytMM0JsWGVWSVVcIlxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL3JldnNsaWRlci9jc3Mvc2V0dGluZ3MuY3NzXCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3Ivc2VtYW50aWMvc2VtYW50aWMubWluLmNzc1wiXHJcbiAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9Pd2xDYXJvdXNlbC9hc3NldHMvb3dsLmNhcm91c2VsLmNzc1wiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL093bENhcm91c2VsL2Fzc2V0cy9vd2wudGhlbWUuZGVmYXVsdC5taW4uY3NzXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhamRoYW5pOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiL3ZlbmRvci91bmljb25zLTIuMC4xL2Nzcy91bmljb25zLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL3Jlc3BvbnNpdmUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9uaWdodC1tb2RlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPENhcnJvdXNlbCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
          lineNumber: 106,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "/vendor/revslider/css/settings.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/semantic/semantic.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/vendor/fontawesome-free/css/all.min.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/vendor/OwlCarousel/assets/owl.carousel.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/vendor/OwlCarousel/assets/owl.theme.default.min.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/vendor/bootstrap/css/bootstrap.min.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/vendor/unicons-2.0.1/css/unicons.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/css/style.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/css/responsive.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/css/night-mode.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }
      })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }
      }), __jsx(_components_Carrousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob2xhIiwialF1ZXJ5Iiwic2hvdyIsInJldm9sdXRpb24iLCJzbGlkZXJUeXBlIiwianNGaWxlTG9jYXRpb24iLCJzbGlkZXJMYXlvdXQiLCJkb3R0ZWRPdmVybGF5IiwiZGVsYXkiLCJuYXZpZ2F0aW9uIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwia2V5Ym9hcmRfZGlyZWN0aW9uIiwibW91c2VTY3JvbGxOYXZpZ2F0aW9uIiwibW91c2VTY3JvbGxSZXZlcnNlIiwib25Ib3ZlclN0b3AiLCJhcnJvd3MiLCJzdHlsZSIsImVuYWJsZSIsImhpZGVfb25tb2JpbGUiLCJoaWRlX29ubGVhdmUiLCJoaWRlX2RlbGF5IiwiaGlkZV9kZWxheV9tb2JpbGUiLCJ0bXAiLCJsZWZ0IiwiaF9hbGlnbiIsInZfYWxpZ24iLCJoX29mZnNldCIsInZfb2Zmc2V0IiwicmlnaHQiLCJyZXNwb25zaXZlTGV2ZWxzIiwidmlzaWJpbGl0eUxldmVscyIsImdyaWR3aWR0aCIsImdyaWRoZWlnaHQiLCJsYXp5VHlwZSIsInBhcmFsbGF4IiwidHlwZSIsIm9yaWdvIiwic3BlZWQiLCJzcGVlZGJnIiwic3BlZWRscyIsImxldmVscyIsImRpc2FibGVfb25tb2JpbGUiLCJzaGFkb3ciLCJzcGlubmVyIiwic3RvcExvb3AiLCJzdG9wQWZ0ZXJMb29wcyIsInN0b3BBdFNsaWRlIiwic2h1ZmZsZSIsImF1dG9IZWlnaHQiLCJmdWxsU2NyZWVuQXV0b1dpZHRoIiwiZnVsbFNjcmVlbkFsaWduRm9yY2UiLCJmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyIiwiZnVsbFNjcmVlbk9mZnNldCIsImRpc2FibGVQcm9ncmVzc0JhciIsImhpZGVUaHVtYnNPbk1vYmlsZSIsImhpZGVTbGlkZXJBdExpbWl0IiwiaGlkZUNhcHRpb25BdExpbWl0IiwiaGlkZUFsbENhcHRpb25BdExpbG1pdCIsImRlYnVnTW9kZSIsImZhbGxiYWNrcyIsInNpbXBsaWZ5QWxsIiwibmV4dFNsaWRlT25XaW5kb3dGb2N1cyIsImRpc2FibGVGb2N1c0xpc3RlbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEJDLFlBQU0sQ0FBQyxpQkFBRCxDQUFOLENBQ0dDLElBREgsR0FFR0MsVUFGSCxDQUVjO0FBQ1ZDLGtCQUFVLEVBQUUsVUFERjtBQUVWQyxzQkFBYyxFQUFFLHNCQUZOO0FBR1ZDLG9CQUFZLEVBQUUsWUFISjtBQUlWQyxxQkFBYSxFQUFFLE1BSkw7QUFLVkMsYUFBSyxFQUFFLElBTEc7QUFNVkMsa0JBQVUsRUFBRTtBQUNWQyw0QkFBa0IsRUFBRSxLQURWO0FBRVZDLDRCQUFrQixFQUFFLFlBRlY7QUFHVkMsK0JBQXFCLEVBQUUsS0FIYjtBQUlWQyw0QkFBa0IsRUFBRSxTQUpWO0FBS1ZDLHFCQUFXLEVBQUUsS0FMSDtBQU1WQyxnQkFBTSxFQUFFO0FBQ05DLGlCQUFLLEVBQUUsUUFERDtBQUVOQyxrQkFBTSxFQUFFLElBRkY7QUFHTkMseUJBQWEsRUFBRSxLQUhUO0FBSU5DLHdCQUFZLEVBQUUsSUFKUjtBQUtOQyxzQkFBVSxFQUFFLEdBTE47QUFNTkMsNkJBQWlCLEVBQUUsSUFOYjtBQU9OQyxlQUFHLEVBQUUsRUFQQztBQVFOQyxnQkFBSSxFQUFFO0FBQ0pDLHFCQUFPLEVBQUUsTUFETDtBQUVKQyxxQkFBTyxFQUFFLFFBRkw7QUFHSkMsc0JBQVEsRUFBRSxFQUhOO0FBSUpDLHNCQUFRLEVBQUU7QUFKTixhQVJBO0FBY05DLGlCQUFLLEVBQUU7QUFDTEoscUJBQU8sRUFBRSxPQURKO0FBRUxDLHFCQUFPLEVBQUUsUUFGSjtBQUdMQyxzQkFBUSxFQUFFLEVBSEw7QUFJTEMsc0JBQVEsRUFBRTtBQUpMO0FBZEQ7QUFORSxTQU5GO0FBa0NWRSx3QkFBZ0IsRUFBRSxDQUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF2REYsRUF3REU7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBNEIsV0FBRyxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF4REYsRUF5REU7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsV0FBRyxFQUFDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF6REYsRUEwREU7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsV0FBRyxFQUFDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUExREYsQ0FERixFQTZERSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE3REYsRUE4REUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBOURGLENBREY7QUFrRUQ7Ozs7RUFoSitCQyw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hYTY2YTQ5NWEzZmY2MjJlMTVmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnJvdXNlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaG9sYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBqUXVlcnkoXCIjcmV2X3NsaWRlcl81XzFcIilcclxuICAgICAgLnNob3coKVxyXG4gICAgICAucmV2b2x1dGlvbih7XHJcbiAgICAgICAgc2xpZGVyVHlwZTogXCJzdGFuZGFyZFwiLFxyXG4gICAgICAgIGpzRmlsZUxvY2F0aW9uOiBcInZlbmRvci9yZXZzbGlkZXIvanMvXCIsXHJcbiAgICAgICAgc2xpZGVyTGF5b3V0OiBcImZ1bGxzY3JlZW5cIixcclxuICAgICAgICBkb3R0ZWRPdmVybGF5OiBcIm5vbmVcIixcclxuICAgICAgICBkZWxheTogNTAwMCxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb246IFwib2ZmXCIsXHJcbiAgICAgICAgICBrZXlib2FyZF9kaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgICAgbW91c2VTY3JvbGxOYXZpZ2F0aW9uOiBcIm9mZlwiLFxyXG4gICAgICAgICAgbW91c2VTY3JvbGxSZXZlcnNlOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgIG9uSG92ZXJTdG9wOiBcIm9mZlwiLFxyXG4gICAgICAgICAgYXJyb3dzOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcImN1c3RvbVwiLFxyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGhpZGVfb25tb2JpbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBoaWRlX29ubGVhdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGhpZGVfZGVsYXk6IDIwMCxcclxuICAgICAgICAgICAgaGlkZV9kZWxheV9tb2JpbGU6IDEyMDAsXHJcbiAgICAgICAgICAgIHRtcDogXCJcIixcclxuICAgICAgICAgICAgbGVmdDoge1xyXG4gICAgICAgICAgICAgIGhfYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgIHZfYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgaF9vZmZzZXQ6IDEwLFxyXG4gICAgICAgICAgICAgIHZfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByaWdodDoge1xyXG4gICAgICAgICAgICAgIGhfYWxpZ246IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICB2X2FsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGhfb2Zmc2V0OiAxMCxcclxuICAgICAgICAgICAgICB2X29mZnNldDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNwb25zaXZlTGV2ZWxzOiBbMTI0MCwgMTAyNCwgNzc4LCA0ODBdLFxyXG4gICAgICAgIHZpc2liaWxpdHlMZXZlbHM6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXHJcbiAgICAgICAgZ3JpZHdpZHRoOiBbMTIwMCwgOTkyLCA3NjgsIDU3Nl0sXHJcbiAgICAgICAgZ3JpZGhlaWdodDogWzk2MCwgNzY4LCA5NjAsIDcyMF0sXHJcbiAgICAgICAgbGF6eVR5cGU6IFwibm9uZVwiLFxyXG4gICAgICAgIHBhcmFsbGF4OiB7XHJcbiAgICAgICAgICB0eXBlOiBcIm1vdXNlXCIsXHJcbiAgICAgICAgICBvcmlnbzogXCJzbGlkZXJjZW50ZXJcIixcclxuICAgICAgICAgIHNwZWVkOiA0MDAsXHJcbiAgICAgICAgICBzcGVlZGJnOiAwLFxyXG4gICAgICAgICAgc3BlZWRsczogMCxcclxuICAgICAgICAgIGxldmVsczogWzQsIDYsIDgsIDEwLCAxMiwgMzAsIDM1LCA0MCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDU1XSxcclxuICAgICAgICAgIGRpc2FibGVfb25tb2JpbGU6IFwib25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoYWRvdzogMCxcclxuICAgICAgICBzcGlubmVyOiBcInNwaW5uZXIyXCIsXHJcbiAgICAgICAgc3RvcExvb3A6IFwib2ZmXCIsXHJcbiAgICAgICAgc3RvcEFmdGVyTG9vcHM6IC0xLFxyXG4gICAgICAgIHN0b3BBdFNsaWRlOiAtMSxcclxuICAgICAgICBzaHVmZmxlOiBcIm9mZlwiLFxyXG4gICAgICAgIGF1dG9IZWlnaHQ6IFwib2ZmXCIsXHJcbiAgICAgICAgZnVsbFNjcmVlbkF1dG9XaWR0aDogXCJvblwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5BbGlnbkZvcmNlOiBcIm9mZlwiLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5PZmZzZXRDb250YWluZXI6IFwiXCIsXHJcbiAgICAgICAgZnVsbFNjcmVlbk9mZnNldDogXCJcIixcclxuICAgICAgICBkaXNhYmxlUHJvZ3Jlc3NCYXI6IFwib25cIixcclxuICAgICAgICBoaWRlVGh1bWJzT25Nb2JpbGU6IFwib25cIixcclxuICAgICAgICBoaWRlU2xpZGVyQXRMaW1pdDogMCxcclxuICAgICAgICBoaWRlQ2FwdGlvbkF0TGltaXQ6IDAsXHJcbiAgICAgICAgaGlkZUFsbENhcHRpb25BdExpbG1pdDogMCxcclxuICAgICAgICBkZWJ1Z01vZGU6IGZhbHNlLFxyXG4gICAgICAgIGZhbGxiYWNrczoge1xyXG4gICAgICAgICAgc2ltcGxpZnlBbGw6IFwib2ZmXCIsXHJcbiAgICAgICAgICBuZXh0U2xpZGVPbldpbmRvd0ZvY3VzOiBcIm9mZlwiLFxyXG4gICAgICAgICAgZGlzYWJsZUZvY3VzTGlzdGVuZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5GcmlGb2xseTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxoZWlnaHQ9ZGV2aWNlLWhlaWdodCxpbml0aWFsLXNjYWxlPTEsbWF4aW11bS1zY2FsZT0xXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIj48L21ldGE+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzI3NzVGRlwiPjwvbWV0YT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ0aGVtZWZvcmVzdCwgdGhlbWUsIGh0bWwsIHRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ0aGVtZWZvcmVzdCwgdGhlbWUsIGh0bWwsIHRlbXBsYXRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IHBhZ2UgdGl0bGVcIiBrZXk9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICB7LyogPGxpbmtcclxuICAgICAgICAgICAgaWQ9XCJicmstY3NzLW1pblwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiL2Nzcy9hc3NldHMvc3R5bGVzLm1pbi5jc3NcIlxyXG4gICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtQjRkSVlIS05CdDhCYzEycCtXWGNraHpjSUNvMHd0SkFvVThZWlRZNXFFMElkMUdTc2VUazZTK0wzQmxYZVZJVVwiXHJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvcmV2c2xpZGVyL2Nzcy9zZXR0aW5ncy5jc3NcIlxyXG4gICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9zZW1hbnRpYy9zZW1hbnRpYy5taW4uY3NzXCJcclxuICAgICAgICAgID48L2xpbms+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL093bENhcm91c2VsL2Fzc2V0cy9vd2wuY2Fyb3VzZWwuY3NzXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvT3dsQ2Fyb3VzZWwvYXNzZXRzL293bC50aGVtZS5kZWZhdWx0Lm1pbi5jc3NcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFqZGhhbmk6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvdmVuZG9yL3VuaWNvbnMtMi4wLjEvY3NzL3VuaWNvbnMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvcmVzcG9uc2l2ZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL25pZ2h0LW1vZGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Q2Fycm91c2VsIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
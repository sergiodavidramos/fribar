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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJob2xhIiwialF1ZXJ5Iiwic2hvdyIsInJldm9sdXRpb24iLCJzbGlkZXJUeXBlIiwianNGaWxlTG9jYXRpb24iLCJzbGlkZXJMYXlvdXQiLCJkb3R0ZWRPdmVybGF5IiwiZGVsYXkiLCJuYXZpZ2F0aW9uIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwia2V5Ym9hcmRfZGlyZWN0aW9uIiwibW91c2VTY3JvbGxOYXZpZ2F0aW9uIiwibW91c2VTY3JvbGxSZXZlcnNlIiwib25Ib3ZlclN0b3AiLCJhcnJvd3MiLCJzdHlsZSIsImVuYWJsZSIsImhpZGVfb25tb2JpbGUiLCJoaWRlX29ubGVhdmUiLCJoaWRlX2RlbGF5IiwiaGlkZV9kZWxheV9tb2JpbGUiLCJ0bXAiLCJsZWZ0IiwiaF9hbGlnbiIsInZfYWxpZ24iLCJoX29mZnNldCIsInZfb2Zmc2V0IiwicmlnaHQiLCJyZXNwb25zaXZlTGV2ZWxzIiwidmlzaWJpbGl0eUxldmVscyIsImdyaWR3aWR0aCIsImdyaWRoZWlnaHQiLCJsYXp5VHlwZSIsInBhcmFsbGF4IiwidHlwZSIsIm9yaWdvIiwic3BlZWQiLCJzcGVlZGJnIiwic3BlZWRscyIsImxldmVscyIsImRpc2FibGVfb25tb2JpbGUiLCJzaGFkb3ciLCJzcGlubmVyIiwic3RvcExvb3AiLCJzdG9wQWZ0ZXJMb29wcyIsInN0b3BBdFNsaWRlIiwic2h1ZmZsZSIsImF1dG9IZWlnaHQiLCJmdWxsU2NyZWVuQXV0b1dpZHRoIiwiZnVsbFNjcmVlbkFsaWduRm9yY2UiLCJmdWxsU2NyZWVuT2Zmc2V0Q29udGFpbmVyIiwiZnVsbFNjcmVlbk9mZnNldCIsImRpc2FibGVQcm9ncmVzc0JhciIsImhpZGVUaHVtYnNPbk1vYmlsZSIsImhpZGVTbGlkZXJBdExpbWl0IiwiaGlkZUNhcHRpb25BdExpbWl0IiwiaGlkZUFsbENhcHRpb25BdExpbG1pdCIsImRlYnVnTW9kZSIsImZhbGxiYWNrcyIsInNpbXBsaWZ5QWxsIiwibmV4dFNsaWRlT25XaW5kb3dGb2N1cyIsImRpc2FibGVGb2N1c0xpc3RlbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7d0NBQ0M7QUFDbEJDLFlBQU0sQ0FBQyxpQkFBRCxDQUFOLENBQ0dDLElBREgsR0FFR0MsVUFGSCxDQUVjO0FBQ1ZDLGtCQUFVLEVBQUUsVUFERjtBQUVWQyxzQkFBYyxFQUFFLHNCQUZOO0FBR1ZDLG9CQUFZLEVBQUUsWUFISjtBQUlWQyxxQkFBYSxFQUFFLE1BSkw7QUFLVkMsYUFBSyxFQUFFLElBTEc7QUFNVkMsa0JBQVUsRUFBRTtBQUNWQyw0QkFBa0IsRUFBRSxLQURWO0FBRVZDLDRCQUFrQixFQUFFLFlBRlY7QUFHVkMsK0JBQXFCLEVBQUUsS0FIYjtBQUlWQyw0QkFBa0IsRUFBRSxTQUpWO0FBS1ZDLHFCQUFXLEVBQUUsS0FMSDtBQU1WQyxnQkFBTSxFQUFFO0FBQ05DLGlCQUFLLEVBQUUsUUFERDtBQUVOQyxrQkFBTSxFQUFFLElBRkY7QUFHTkMseUJBQWEsRUFBRSxLQUhUO0FBSU5DLHdCQUFZLEVBQUUsSUFKUjtBQUtOQyxzQkFBVSxFQUFFLEdBTE47QUFNTkMsNkJBQWlCLEVBQUUsSUFOYjtBQU9OQyxlQUFHLEVBQUUsRUFQQztBQVFOQyxnQkFBSSxFQUFFO0FBQ0pDLHFCQUFPLEVBQUUsTUFETDtBQUVKQyxxQkFBTyxFQUFFLFFBRkw7QUFHSkMsc0JBQVEsRUFBRSxFQUhOO0FBSUpDLHNCQUFRLEVBQUU7QUFKTixhQVJBO0FBY05DLGlCQUFLLEVBQUU7QUFDTEoscUJBQU8sRUFBRSxPQURKO0FBRUxDLHFCQUFPLEVBQUUsUUFGSjtBQUdMQyxzQkFBUSxFQUFFLEVBSEw7QUFJTEMsc0JBQVEsRUFBRTtBQUpMO0FBZEQ7QUFORSxTQU5GO0FBa0NWRSx3QkFBZ0IsRUFBRSxDQUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF2REYsRUF3REU7QUFBTSxZQUFJLEVBQUMsZ0JBQVg7QUFBNEIsV0FBRyxFQUFDLFlBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF4REYsRUF5REU7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsV0FBRyxFQUFDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF6REYsRUEwREU7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsV0FBRyxFQUFDLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUExREYsQ0FERixFQTZERSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE3REYsQ0FERjtBQWtFRDs7OztFQWhKK0JDLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmJkNjNjNmY2YjRhMjM4ZmVlOWFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBDYXJyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fycm91c2VsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBob2xhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGpRdWVyeShcIiNyZXZfc2xpZGVyXzVfMVwiKVxyXG4gICAgICAuc2hvdygpXHJcbiAgICAgIC5yZXZvbHV0aW9uKHtcclxuICAgICAgICBzbGlkZXJUeXBlOiBcInN0YW5kYXJkXCIsXHJcbiAgICAgICAganNGaWxlTG9jYXRpb246IFwidmVuZG9yL3JldnNsaWRlci9qcy9cIixcclxuICAgICAgICBzbGlkZXJMYXlvdXQ6IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgICAgIGRvdHRlZE92ZXJsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogXCJvZmZcIixcclxuICAgICAgICAgIGtleWJvYXJkX2RpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbE5hdmlnYXRpb246IFwib2ZmXCIsXHJcbiAgICAgICAgICBtb3VzZVNjcm9sbFJldmVyc2U6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgb25Ib3ZlclN0b3A6IFwib2ZmXCIsXHJcbiAgICAgICAgICBhcnJvd3M6IHtcclxuICAgICAgICAgICAgc3R5bGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9vbm1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVfb25sZWF2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGlkZV9kZWxheTogMjAwLFxyXG4gICAgICAgICAgICBoaWRlX2RlbGF5X21vYmlsZTogMTIwMCxcclxuICAgICAgICAgICAgdG1wOiBcIlwiLFxyXG4gICAgICAgICAgICBsZWZ0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBoX29mZnNldDogMTAsXHJcbiAgICAgICAgICAgICAgdl9vZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgICAgICAgaF9hbGlnbjogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgIHZfYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgaF9vZmZzZXQ6IDEwLFxyXG4gICAgICAgICAgICAgIHZfb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc3BvbnNpdmVMZXZlbHM6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXHJcbiAgICAgICAgdmlzaWJpbGl0eUxldmVsczogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcclxuICAgICAgICBncmlkd2lkdGg6IFsxMjAwLCA5OTIsIDc2OCwgNTc2XSxcclxuICAgICAgICBncmlkaGVpZ2h0OiBbOTYwLCA3NjgsIDk2MCwgNzIwXSxcclxuICAgICAgICBsYXp5VHlwZTogXCJub25lXCIsXHJcbiAgICAgICAgcGFyYWxsYXg6IHtcclxuICAgICAgICAgIHR5cGU6IFwibW91c2VcIixcclxuICAgICAgICAgIG9yaWdvOiBcInNsaWRlcmNlbnRlclwiLFxyXG4gICAgICAgICAgc3BlZWQ6IDQwMCxcclxuICAgICAgICAgIHNwZWVkYmc6IDAsXHJcbiAgICAgICAgICBzcGVlZGxzOiAwLFxyXG4gICAgICAgICAgbGV2ZWxzOiBbNCwgNiwgOCwgMTAsIDEyLCAzMCwgMzUsIDQwLCA0NSwgNDYsIDQ3LCA0OCwgNDksIDUwLCA1MSwgNTVdLFxyXG4gICAgICAgICAgZGlzYWJsZV9vbm1vYmlsZTogXCJvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hhZG93OiAwLFxyXG4gICAgICAgIHNwaW5uZXI6IFwic3Bpbm5lcjJcIixcclxuICAgICAgICBzdG9wTG9vcDogXCJvZmZcIixcclxuICAgICAgICBzdG9wQWZ0ZXJMb29wczogLTEsXHJcbiAgICAgICAgc3RvcEF0U2xpZGU6IC0xLFxyXG4gICAgICAgIHNodWZmbGU6IFwib2ZmXCIsXHJcbiAgICAgICAgYXV0b0hlaWdodDogXCJvZmZcIixcclxuICAgICAgICBmdWxsU2NyZWVuQXV0b1dpZHRoOiBcIm9uXCIsXHJcbiAgICAgICAgZnVsbFNjcmVlbkFsaWduRm9yY2U6IFwib2ZmXCIsXHJcbiAgICAgICAgZnVsbFNjcmVlbk9mZnNldENvbnRhaW5lcjogXCJcIixcclxuICAgICAgICBmdWxsU2NyZWVuT2Zmc2V0OiBcIlwiLFxyXG4gICAgICAgIGRpc2FibGVQcm9ncmVzc0JhcjogXCJvblwiLFxyXG4gICAgICAgIGhpZGVUaHVtYnNPbk1vYmlsZTogXCJvblwiLFxyXG4gICAgICAgIGhpZGVTbGlkZXJBdExpbWl0OiAwLFxyXG4gICAgICAgIGhpZGVDYXB0aW9uQXRMaW1pdDogMCxcclxuICAgICAgICBoaWRlQWxsQ2FwdGlvbkF0TGlsbWl0OiAwLFxyXG4gICAgICAgIGRlYnVnTW9kZTogZmFsc2UsXHJcbiAgICAgICAgZmFsbGJhY2tzOiB7XHJcbiAgICAgICAgICBzaW1wbGlmeUFsbDogXCJvZmZcIixcclxuICAgICAgICAgIG5leHRTbGlkZU9uV2luZG93Rm9jdXM6IFwib2ZmXCIsXHJcbiAgICAgICAgICBkaXNhYmxlRm9jdXNMaXN0ZW5lcjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkZyaUZvbGx5PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGhlaWdodD1kZXZpY2UtaGVpZ2h0LGluaXRpYWwtc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiPjwvbWV0YT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMjc3NUZGXCI+PC9tZXRhPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInRoZW1lZm9yZXN0LCB0aGVtZSwgaHRtbCwgdGVtcGxhdGVcIiAvPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cInRoZW1lZm9yZXN0LCB0aGVtZSwgaHRtbCwgdGVtcGxhdGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTXkgcGFnZSB0aXRsZVwiIGtleT1cInRpdGxlXCIgLz5cclxuICAgICAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgICAgICBpZD1cImJyay1jc3MtbWluXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvY3NzL2Fzc2V0cy9zdHlsZXMubWluLmNzc1wiXHJcbiAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjUuMC9jc3MvYWxsLmNzc1wiXHJcbiAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1CNGRJWUhLTkJ0OEJjMTJwK1dYY2toemNJQ28wd3RKQW9VOFlaVFk1cUUwSWQxR1NzZVRrNlMrTDNCbFhlVklVXCJcclxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9yZXZzbGlkZXIvY3NzL3NldHRpbmdzLmNzc1wiXHJcbiAgICAgICAgICA+PC9saW5rPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL3NlbWFudGljL3NlbWFudGljLm1pbi5jc3NcIlxyXG4gICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi92ZW5kb3IvT3dsQ2Fyb3VzZWwvYXNzZXRzL293bC5jYXJvdXNlbC5jc3NcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL3ZlbmRvci9Pd2xDYXJvdXNlbC9hc3NldHMvb3dsLnRoZW1lLmRlZmF1bHQubWluLmNzc1wiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWpkaGFuaTp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi92ZW5kb3IvdW5pY29ucy0yLjAuMS9jc3MvdW5pY29ucy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL3N0eWxlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9yZXNwb25zaXZlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvbmlnaHQtbW9kZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIHsvKiA8Q2Fycm91c2VsIC8+ICovfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
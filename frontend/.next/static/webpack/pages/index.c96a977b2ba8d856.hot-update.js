"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./screens/ProductScreen.jsx":
/*!***********************************!*\
  !*** ./screens/ProductScreen.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components */ \"./components/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ \"./products.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\HP\\\\Desktop\\\\proshop-mern\\\\frontend\\\\screens\\\\ProductScreen.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar ProductScreen = function ProductScreen(_ref) {\n  var productId = _ref.productId;\n  var product = _products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (_ref2) {\n    var _id = _ref2._id;\n    return _id === productId;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_0__.NextLink, {\n      route: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: \"btn btn-dark my-3\",\n        children: \"Go Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n        md: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Image, {\n          src: product.image,\n          alt: product.name,\n          fluid: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n        md: 3,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup, {\n          variant: \"flush\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup.Item, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = ProductScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductScreen);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JlZW5zL1Byb2R1Y3RTY3JlZW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN2QyxNQUFNQyxPQUFPLEdBQUdILHNEQUFBLENBQWM7QUFBQSxRQUFHSyxHQUFILFNBQUdBLEdBQUg7QUFBQSxXQUFhQSxHQUFHLEtBQUtILFNBQXJCO0FBQUEsR0FBZCxDQUFoQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBVSxXQUFLLEVBQUMsR0FBaEI7QUFBQSw2QkFDRTtBQUFRLGlCQUFTLEVBQUMsbUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UsOERBQUMsZ0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxnREFBRDtBQUFLLFVBQUUsRUFBRSxDQUFUO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBTyxhQUFHLEVBQUVDLE9BQU8sQ0FBQ0csS0FBcEI7QUFBMkIsYUFBRyxFQUFFSCxPQUFPLENBQUNJLElBQXhDO0FBQThDLGVBQUs7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFLDhEQUFDLGdEQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQSwrQkFDRSw4REFBQyxzREFBRDtBQUFXLGlCQUFPLEVBQUMsT0FBbkI7QUFBQSxpQ0FDRSw4REFBQywyREFBRDtBQUFBLG1DQUNFO0FBQUEsd0JBQUtKLE9BQU8sQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQXFCRCxDQXhCRDs7S0FBTU47QUEwQk4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2NyZWVucy9Qcm9kdWN0U2NyZWVuLmpzeD9hNTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRMaW5rIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UsIExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9wcm9kdWN0cyc7XHJcblxyXG5jb25zdCBQcm9kdWN0U2NyZWVuID0gKHsgcHJvZHVjdElkIH0pID0+IHtcclxuICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZCgoeyBfaWQgfSkgPT4gX2lkID09PSBwcm9kdWN0SWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5leHRMaW5rIHJvdXRlPScvJz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG15LTMnPkdvIEJhY2s8L2J1dHRvbj5cclxuICAgICAgPC9OZXh0TGluaz5cclxuXHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBtZD17Nn0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gZmx1aWQgLz5cclxuICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgPENvbCBtZD17M30+XHJcbiAgICAgICAgICA8TGlzdEdyb3VwIHZhcmlhbnQ9J2ZsdXNoJz5cclxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNjcmVlbjtcclxuIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJMaXN0R3JvdXAiLCJwcm9kdWN0cyIsIlByb2R1Y3RTY3JlZW4iLCJwcm9kdWN0SWQiLCJwcm9kdWN0IiwiZmluZCIsIl9pZCIsImltYWdlIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./screens/ProductScreen.jsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components */ \"./components/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products */ \"./products.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\HP\\\\Desktop\\\\proshop-mern\\\\frontend\\\\screens\\\\ProductScreen.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar ProductScreen = function ProductScreen(_ref) {\n  var productId = _ref.productId;\n  var product = _products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(function (_ref2) {\n    var _id = _ref2._id;\n    return _id === productId;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_0__.NextLink, {\n      route: \"/\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n        className: \"btn btn-dark my-3\",\n        children: \"Go Back\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n        md: 6,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Image, {\n          src: product.image,\n          alt: product.name,\n          fluid: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n        md: 3,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup, {\n          variant: \"flush\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup.Item, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n              children: product.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup.Item, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Rating, {\n              value: product.rating,\n              text: \"\".concat(product.numReviews, \" reviews\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c = ProductScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductScreen);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JlZW5zL1Byb2R1Y3RTY3JlZW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3ZDLE1BQU1DLE9BQU8sR0FBR0gsc0RBQUEsQ0FBYztBQUFBLFFBQUdLLEdBQUgsU0FBR0EsR0FBSDtBQUFBLFdBQWFBLEdBQUcsS0FBS0gsU0FBckI7QUFBQSxHQUFkLENBQWhCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxpREFBRDtBQUFVLFdBQUssRUFBQyxHQUFoQjtBQUFBLDZCQUNFO0FBQVEsaUJBQVMsRUFBQyxtQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxnREFBRDtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFPLGFBQUcsRUFBRUMsT0FBTyxDQUFDRyxLQUFwQjtBQUEyQixhQUFHLEVBQUVILE9BQU8sQ0FBQ0ksSUFBeEM7QUFBOEMsZUFBSztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UsOERBQUMsZ0RBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQVcsaUJBQU8sRUFBQyxPQUFuQjtBQUFBLGtDQUNFLDhEQUFDLDJEQUFEO0FBQUEsbUNBQ0U7QUFBQSx3QkFBS0osT0FBTyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0UsOERBQUMsMkRBQUQ7QUFBQSxtQ0FDRSw4REFBQyxNQUFEO0FBQ0UsbUJBQUssRUFBRUosT0FBTyxDQUFDSyxNQURqQjtBQUVFLGtCQUFJLFlBQUtMLE9BQU8sQ0FBQ00sVUFBYjtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURGO0FBNEJELENBL0JEOztLQUFNUjtBQWlDTiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zY3JlZW5zL1Byb2R1Y3RTY3JlZW4uanN4P2E1NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dExpbmsgfSBmcm9tICdAY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBJbWFnZSwgTGlzdEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7IFJhcmluZyB9IGZyb20gJ0Bjb21wb25lbnRzJztcclxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3RzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RTY3JlZW4gPSAoeyBwcm9kdWN0SWQgfSkgPT4ge1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5maW5kKCh7IF9pZCB9KSA9PiBfaWQgPT09IHByb2R1Y3RJZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmV4dExpbmsgcm91dGU9Jy8nPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbXktMyc+R28gQmFjazwvYnV0dG9uPlxyXG4gICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sIG1kPXs2fT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD17cHJvZHVjdC5uYW1lfSBmbHVpZCAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD0nZmx1c2gnPlxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbT5cclxuICAgICAgICAgICAgICA8UmF0aW5nXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtgJHtwcm9kdWN0Lm51bVJldmlld3N9IHJldmlld3NgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNjcmVlbjtcclxuIl0sIm5hbWVzIjpbIk5leHRMaW5rIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJMaXN0R3JvdXAiLCJSYXJpbmciLCJwcm9kdWN0cyIsIlByb2R1Y3RTY3JlZW4iLCJwcm9kdWN0SWQiLCJwcm9kdWN0IiwiZmluZCIsIl9pZCIsImltYWdlIiwibmFtZSIsInJhdGluZyIsIm51bVJldmlld3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./screens/ProductScreen.jsx\n");

/***/ })

});
webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ \"./src/assets/banner-thumb.png\");\n/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ \"./src/assets/shape-left.png\");\n/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ \"./src/assets/shape-right.png\");\n/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/danielwilstrop/Desktop/projects/portfolio2021/src/sections/banner.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\nfunction Banner() {\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: styles.banner,\n    id: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.banner.Container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.banner.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, \"Daniel Wilstrop\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    as: \"p\",\n    variant: \"heroSecondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"Bsc. Computing and IT(software) student with the Open University, foccusing on the full development lifecycle and the theory of computer science as well as creating high quality code.\"))));\n}\n_c = Banner;\nvar styles = {\n  banner: {\n    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],\n    pb: [2, null, 0, null, 2, 0, null, 5],\n    position: 'relative',\n    zIndex: 2,\n    '&::before': {\n      position: 'absolute',\n      content: '\"\"',\n      bottom: 6,\n      left: 0,\n      height: '100%',\n      width: '100%',\n      zIndex: -1,\n      backgroundImage: \"url(\".concat(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a, \")\"),\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: 'bottom left',\n      backgroundSize: '36%'\n    },\n    '&::after': {\n      position: 'absolute',\n      content: '\"\"',\n      bottom: '40px',\n      right: 0,\n      height: '100%',\n      width: '100%',\n      zIndex: -1,\n      backgroundImage: \"url(\".concat(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a, \")\"),\n      backgroundRepeat: \"no-repeat\",\n      backgroundPosition: 'bottom right',\n      backgroundSize: '32%'\n    },\n    container: {\n      minHeight: 'inherit',\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center'\n    },\n    contentBox: {\n      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],\n      mx: 'auto',\n      textAlign: 'center',\n      mb: ['40px', null, null, null, null, 7]\n    },\n    imageBox: {\n      justifyContent: 'center',\n      textAlign: 'center',\n      display: 'inline-flex',\n      mb: [0, null, -6, null, null, '-40px', null, -3],\n      img: {\n        position: 'relative',\n        height: [245, 'auto']\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcz80ODZiIl0sIm5hbWVzIjpbIkJhbm5lciIsInN0eWxlcyIsImJhbm5lciIsIkNvbnRhaW5lciIsImNvbnRlbnRCb3giLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJTaGFwZVJpZ2h0IiwiY29udGFpbmVyIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm14IiwidGV4dEFsaWduIiwibWIiLCJpbWFnZUJveCIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixTQUNFO0FBQVMsTUFBRSxFQUFJQyxNQUFNLENBQUNDLE1BQXRCO0FBQThCLE1BQUUsRUFBRyxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUlELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUlGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsZ0RBQUQ7QUFBUyxNQUFFLEVBQUcsSUFBZDtBQUFtQixXQUFPLEVBQUcsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUlFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFHLEdBQVg7QUFBZSxXQUFPLEVBQUcsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrTEFKRixDQURGLENBREYsQ0FERjtBQWNEO0tBZnVCSixNO0FBaUJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ05HLE1BQUUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELE9BQWpELEVBQTBELE9BQTFELENBREU7QUFFTkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixJQUF6QixFQUErQixDQUEvQixDQUZFO0FBR05DLFlBQVEsRUFBRSxVQUhKO0FBSU5DLFVBQU0sRUFBRSxDQUpGO0FBS04saUJBQWE7QUFDWEQsY0FBUSxFQUFFLFVBREM7QUFFWEUsYUFBTyxFQUFFLElBRkU7QUFHWEMsWUFBTSxFQUFFLENBSEc7QUFJWEMsVUFBSSxFQUFFLENBSks7QUFLWEMsWUFBTSxFQUFFLE1BTEc7QUFNWEMsV0FBSyxFQUFFLE1BTkk7QUFPWEwsWUFBTSxFQUFFLENBQUMsQ0FQRTtBQVFYTSxxQkFBZSxnQkFBU0MsNERBQVQsTUFSSjtBQVNYQyxzQkFBZ0IsYUFUTDtBQVVYQyx3QkFBa0IsRUFBRSxhQVZUO0FBV1hDLG9CQUFjLEVBQUU7QUFYTCxLQUxQO0FBa0JOLGdCQUFZO0FBQ1ZYLGNBQVEsRUFBRSxVQURBO0FBRVZFLGFBQU8sRUFBRSxJQUZDO0FBR1ZDLFlBQU0sRUFBRSxNQUhFO0FBSVZTLFdBQUssRUFBRSxDQUpHO0FBS1ZQLFlBQU0sRUFBRSxNQUxFO0FBTVZDLFdBQUssRUFBRSxNQU5HO0FBT1ZMLFlBQU0sRUFBRSxDQUFDLENBUEM7QUFRVk0scUJBQWUsZ0JBQVNNLDZEQUFULE1BUkw7QUFTVkosc0JBQWdCLGFBVE47QUFVVkMsd0JBQWtCLEVBQUUsY0FWVjtBQVdWQyxvQkFBYyxFQUFFO0FBWE4sS0FsQk47QUErQk5HLGFBQVMsRUFBRTtBQUNUQyxlQUFTLEVBQUUsU0FERjtBQUVUQyxhQUFPLEVBQUUsTUFGQTtBQUdUQyxtQkFBYSxFQUFFLFFBSE47QUFJVEMsb0JBQWMsRUFBRTtBQUpQLEtBL0JMO0FBcUNOckIsY0FBVSxFQUFFO0FBQ1ZTLFdBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDLEtBQXRDLEVBQTZDLEtBQTdDLEVBQW9ELEtBQXBELENBREc7QUFFVmEsUUFBRSxFQUFFLE1BRk07QUFHVkMsZUFBUyxFQUFFLFFBSEQ7QUFJVkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO0FBSk0sS0FyQ047QUEyQ05DLFlBQVEsRUFBRTtBQUNSSixvQkFBYyxFQUFFLFFBRFI7QUFFUkUsZUFBUyxFQUFFLFFBRkg7QUFHUkosYUFBTyxFQUFFLGFBSEQ7QUFJUkssUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFDLENBQVgsRUFBYyxJQUFkLEVBQW9CLElBQXBCLEVBQTBCLE9BQTFCLEVBQW1DLElBQW5DLEVBQXlDLENBQUMsQ0FBMUMsQ0FKSTtBQUtSRSxTQUFHLEVBQUU7QUFDSHZCLGdCQUFRLEVBQUUsVUFEUDtBQUVISyxjQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTjtBQUZMO0FBTEc7QUEzQ0o7QUFESyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJztcbmltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL3NoYXBlLWxlZnQucG5nJztcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9zaGFwZS1yaWdodC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3ggPSB7c3R5bGVzLmJhbm5lcn0gaWQgPSAnaG9tZSc+XG4gICAgICA8Q29udGFpbmVyIHN4ID0ge3N0eWxlcy5iYW5uZXIuQ29udGFpbmVyfT5cbiAgICAgICAgPEJveCBzeCA9IHtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzID0gJ2gxJyB2YXJpYW50ID0gJ2hlcm9QcmltYXJ5Jz5cbiAgICAgICAgICAgIERhbmllbCBXaWxzdHJvcFxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcyA9ICdwJyB2YXJpYW50ID0gJ2hlcm9TZWNvbmRhcnknPlxuICAgICAgICAgICAgQnNjLiBDb21wdXRpbmcgYW5kIElUKHNvZnR3YXJlKSBzdHVkZW50IHdpdGggdGhlIE9wZW4gVW5pdmVyc2l0eSwgZm9jY3VzaW5nIG9uIHRoZSBmdWxsIGRldmVsb3BtZW50IGxpZmVjeWNsZSBhbmQgdGhlIHRoZW9yeSBvZiBjb21wdXRlciBzY2llbmNlIGFzIHdlbGwgYXMgY3JlYXRpbmcgaGlnaCBxdWFsaXR5IGNvZGUuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBwdDogWycxNDBweCcsICcxNDVweCcsICcxNTVweCcsICcxNzBweCcsIG51bGwsIG51bGwsICcxODBweCcsICcyMTVweCddLFxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogNixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVMZWZ0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzM2JScsXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogJzQwcHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzU3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

})
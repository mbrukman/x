webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/elements.ts":
/*!***************************!*\
  !*** ./utils/elements.ts ***!
  \***************************/
/*! exports provided: appendElement, focusOnDrag, focusResizableElementRef, focusClosestFocusableElementFromRef, lockDocumentTitle, getTargetCenterPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendElement\", function() { return appendElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusOnDrag\", function() { return focusOnDrag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusResizableElementRef\", function() { return focusResizableElementRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusClosestFocusableElementFromRef\", function() { return focusClosestFocusableElementFromRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lockDocumentTitle\", function() { return lockDocumentTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTargetCenterPosition\", function() { return getTargetCenterPosition; });\nvar appendElement = function appendElement(parentElement, childElement) {\n  if (parentElement && childElement) {\n    parentElement.appendChild(childElement);\n  }\n\n  return childElement;\n};\nvar focusOnDrag = function focusOnDrag(_event, _ref) {\n  var node = _ref.node;\n  return node.focus();\n};\nvar focusResizableElementRef = function focusResizableElementRef(elementRef) {\n  var _elementRef$current, _elementRef$current$r;\n\n  return (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : (_elementRef$current$r = _elementRef$current.resizableElement.current) === null || _elementRef$current$r === void 0 ? void 0 : _elementRef$current$r.focus();\n};\nvar focusClosestFocusableElementFromRef = function focusClosestFocusableElementFromRef(elementRef) {\n  return function () {\n    var _elementRef$current2, _elementRef$current2$;\n\n    (_elementRef$current2 = elementRef.current) === null || _elementRef$current2 === void 0 ? void 0 : (_elementRef$current2$ = _elementRef$current2.closest(':not(li)[tabindex]')) === null || _elementRef$current2$ === void 0 ? void 0 : _elementRef$current2$.focus();\n  };\n};\nvar lockDocumentTitle = function lockDocumentTitle() {\n  var _Object$getOwnPropert;\n\n  if (typeof ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(document, 'title')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set) === 'undefined') {\n    /* eslint @typescript-eslint/no-empty-function: off */\n    Object.defineProperty(document, 'title', {\n      set: function set() {}\n    });\n  }\n};\nvar getTargetCenterPosition = function getTargetCenterPosition(element) {\n  var _element$getElementsB, _element$getElementsB2;\n\n  // const idealElement =\n  //   element?.getElementsByTagName?.('img')?[0]\n  var _ref2 = (element === null || element === void 0 ? void 0 : element.getBoundingClientRect()) || {},\n      _ref2$x = _ref2.x,\n      x = _ref2$x === void 0 ? 0 : _ref2$x,\n      _ref2$y = _ref2.y,\n      y = _ref2$y === void 0 ? 0 : _ref2$y,\n      _ref2$height = _ref2.height,\n      height = _ref2$height === void 0 ? 0 : _ref2$height,\n      _ref2$width = _ref2.width,\n      width = _ref2$width === void 0 ? 0 : _ref2$width;\n\n  console.log(element === null || element === void 0 ? void 0 : (_element$getElementsB = element.getElementsByTagName) === null || _element$getElementsB === void 0 ? void 0 : (_element$getElementsB2 = _element$getElementsB.call(element, 'img')) === null || _element$getElementsB2 === void 0 ? void 0 : _element$getElementsB2[0]);\n  return {\n    x: Math.floor(x + width / 2),\n    y: Math.floor(y + height / 2)\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZWxlbWVudHMudHM/YTAwNSJdLCJuYW1lcyI6WyJhcHBlbmRFbGVtZW50IiwicGFyZW50RWxlbWVudCIsImNoaWxkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZm9jdXNPbkRyYWciLCJfZXZlbnQiLCJub2RlIiwiZm9jdXMiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJlbGVtZW50UmVmIiwiY3VycmVudCIsInJlc2l6YWJsZUVsZW1lbnQiLCJmb2N1c0Nsb3Nlc3RGb2N1c2FibGVFbGVtZW50RnJvbVJlZiIsImNsb3Nlc3QiLCJsb2NrRG9jdW1lbnRUaXRsZSIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRvY3VtZW50Iiwic2V0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbiIsImVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDM0JDLGFBRDJCLEVBRTNCQyxZQUYyQixFQUdYO0FBQ2hCLE1BQUlELGFBQWEsSUFBSUMsWUFBckIsRUFBbUM7QUFDakNELGlCQUFhLENBQUNFLFdBQWQsQ0FBMEJELFlBQTFCO0FBQ0Q7O0FBRUQsU0FBT0EsWUFBUDtBQUNELENBVE07QUFXQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUN6QkMsTUFEeUI7QUFBQSxNQUV2QkMsSUFGdUIsUUFFdkJBLElBRnVCO0FBQUEsU0FHaEJBLElBQUksQ0FBQ0MsS0FBTCxFQUhnQjtBQUFBLENBQXBCO0FBS0EsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxVQUFEO0FBQUE7O0FBQUEsZ0NBQ3RDQSxVQUFVLENBQUNDLE9BRDJCLGlGQUN0QyxvQkFBb0JDLGdCQUFwQixDQUFxQ0QsT0FEQywwREFDdEMsc0JBQThDSCxLQUE5QyxFQURzQztBQUFBLENBQWpDO0FBR0EsSUFBTUssbUNBQW1DLEdBQUcsU0FBdENBLG1DQUFzQyxDQUNqREgsVUFEaUQ7QUFBQSxTQUU5QyxZQUFZO0FBQUE7O0FBQ2YsNEJBQUFBLFVBQVUsQ0FBQ0MsT0FBWCx1R0FBb0JHLE9BQXBCLENBQXlDLG9CQUF6QyxpRkFBZ0VOLEtBQWhFO0FBQ0QsR0FKa0Q7QUFBQSxDQUE1QztBQU1BLElBQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUFBOztBQUMzQyxNQUNFLGlDQUFPQyxNQUFNLENBQUNDLHdCQUFQLENBQWdDQyxRQUFoQyxFQUEwQyxPQUExQyxDQUFQLDBEQUFPLHNCQUFvREMsR0FBM0QsTUFDQSxXQUZGLEVBR0U7QUFDQTtBQUNBSCxVQUFNLENBQUNJLGNBQVAsQ0FBc0JGLFFBQXRCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQUVDLFNBQUcsRUFBRSxlQUFNLENBQUU7QUFBZixLQUF6QztBQUNEO0FBQ0YsQ0FSTTtBQVVBLElBQU1FLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FDckNDLE9BRHFDLEVBRVI7QUFBQTs7QUFDN0I7QUFDQTtBQUY2QixjQUkzQixDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMscUJBQVQsT0FBb0MsRUFKVDtBQUFBLHNCQUdyQkMsQ0FIcUI7QUFBQSxNQUdyQkEsQ0FIcUIsd0JBR2pCLENBSGlCO0FBQUEsc0JBR2RDLENBSGM7QUFBQSxNQUdkQSxDQUhjLHdCQUdWLENBSFU7QUFBQSwyQkFHUEMsTUFITztBQUFBLE1BR1BBLE1BSE8sNkJBR0UsQ0FIRjtBQUFBLDBCQUdLQyxLQUhMO0FBQUEsTUFHS0EsS0FITCw0QkFHYSxDQUhiOztBQU03QkMsU0FBTyxDQUFDQyxHQUFSLENBQ0VQLE9BREYsYUFDRUEsT0FERixnREFDRUEsT0FBTyxDQUFFUSxvQkFEWCxvRkFDRSwyQkFBQVIsT0FBTyxFQUF5QixLQUF6QixDQURULDJEQUNFLHVCQUF5QyxDQUF6QyxDQURGO0FBSUEsU0FBTztBQUNMRSxLQUFDLEVBQUVPLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixDQUFDLEdBQUdHLEtBQUssR0FBRyxDQUF2QixDQURFO0FBRUxGLEtBQUMsRUFBRU0sSUFBSSxDQUFDQyxLQUFMLENBQVdQLENBQUMsR0FBR0MsTUFBTSxHQUFHLENBQXhCO0FBRkUsR0FBUDtBQUlELENBaEJNIiwiZmlsZSI6Ii4vdXRpbHMvZWxlbWVudHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERyYWdnYWJsZURhdGEsIFJuZCwgUm5kRHJhZ0V2ZW50IH0gZnJvbSAncmVhY3Qtcm5kJztcbmltcG9ydCB0eXBlIHsgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kRWxlbWVudCA9IChcbiAgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGNoaWxkRWxlbWVudDogSFRNTEVsZW1lbnRcbik6IEhUTUxFbGVtZW50ID0+IHtcbiAgaWYgKHBhcmVudEVsZW1lbnQgJiYgY2hpbGRFbGVtZW50KSB7XG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZEVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb2N1c09uRHJhZyA9IChcbiAgX2V2ZW50OiBSbmREcmFnRXZlbnQsXG4gIHsgbm9kZSB9OiBEcmFnZ2FibGVEYXRhXG4pOiB2b2lkID0+IG5vZGUuZm9jdXMoKTtcblxuZXhwb3J0IGNvbnN0IGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiA9IChlbGVtZW50UmVmOiBSZWZPYmplY3Q8Um5kPik6IHZvaWQgPT5cbiAgZWxlbWVudFJlZi5jdXJyZW50Py5yZXNpemFibGVFbGVtZW50LmN1cnJlbnQ/LmZvY3VzKCk7XG5cbmV4cG9ydCBjb25zdCBmb2N1c0Nsb3Nlc3RGb2N1c2FibGVFbGVtZW50RnJvbVJlZiA9IChcbiAgZWxlbWVudFJlZjogUmVmT2JqZWN0PEhUTUxFbGVtZW50PlxuKSA9PiAoKTogdm9pZCA9PiB7XG4gIGVsZW1lbnRSZWYuY3VycmVudD8uY2xvc2VzdDxIVE1MRWxlbWVudD4oJzpub3QobGkpW3RhYmluZGV4XScpPy5mb2N1cygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2tEb2N1bWVudFRpdGxlID0gKCk6IHZvaWQgPT4ge1xuICBpZiAoXG4gICAgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZG9jdW1lbnQsICd0aXRsZScpPy5zZXQgPT09XG4gICAgJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgLyogZXNsaW50IEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvbjogb2ZmICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCAndGl0bGUnLCB7IHNldDogKCkgPT4ge30gfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbiA9IChcbiAgZWxlbWVudD86IEhUTUxFbGVtZW50XG4pOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPT4ge1xuICAvLyBjb25zdCBpZGVhbEVsZW1lbnQgPVxuICAvLyAgIGVsZW1lbnQ/LmdldEVsZW1lbnRzQnlUYWdOYW1lPy4oJ2ltZycpP1swXVxuICBjb25zdCB7IHggPSAwLCB5ID0gMCwgaGVpZ2h0ID0gMCwgd2lkdGggPSAwIH0gPVxuICAgIGVsZW1lbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHx8IHt9O1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIGVsZW1lbnQ/LmdldEVsZW1lbnRzQnlUYWdOYW1lPy4oJ2ltZycpPy5bMF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHg6IE1hdGguZmxvb3IoeCArIHdpZHRoIC8gMiksXG4gICAgeTogTWF0aC5mbG9vcih5ICsgaGVpZ2h0IC8gMilcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/elements.ts\n");

/***/ })

})
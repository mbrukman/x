webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/elements.ts":
/*!***************************!*\
  !*** ./utils/elements.ts ***!
  \***************************/
/*! exports provided: appendElement, focusOnDrag, focusResizableElementRef, focusClosestFocusableElementFromRef, lockDocumentTitle, getTargetCenterPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendElement\", function() { return appendElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusOnDrag\", function() { return focusOnDrag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusResizableElementRef\", function() { return focusResizableElementRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusClosestFocusableElementFromRef\", function() { return focusClosestFocusableElementFromRef; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lockDocumentTitle\", function() { return lockDocumentTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTargetCenterPosition\", function() { return getTargetCenterPosition; });\nvar appendElement = function appendElement(parentElement, childElement) {\n  if (parentElement && childElement) {\n    parentElement.appendChild(childElement);\n  }\n\n  return childElement;\n};\nvar focusOnDrag = function focusOnDrag(_event, _ref) {\n  var node = _ref.node;\n  return node.focus();\n};\nvar focusResizableElementRef = function focusResizableElementRef(elementRef) {\n  var _elementRef$current, _elementRef$current$r;\n\n  return (_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : (_elementRef$current$r = _elementRef$current.resizableElement.current) === null || _elementRef$current$r === void 0 ? void 0 : _elementRef$current$r.focus();\n};\nvar focusClosestFocusableElementFromRef = function focusClosestFocusableElementFromRef(elementRef) {\n  return function () {\n    var _elementRef$current2, _elementRef$current2$;\n\n    (_elementRef$current2 = elementRef.current) === null || _elementRef$current2 === void 0 ? void 0 : (_elementRef$current2$ = _elementRef$current2.closest(':not(li)[tabindex]')) === null || _elementRef$current2$ === void 0 ? void 0 : _elementRef$current2$.focus();\n  };\n};\nvar lockDocumentTitle = function lockDocumentTitle() {\n  var _Object$getOwnPropert;\n\n  if (typeof ((_Object$getOwnPropert = Object.getOwnPropertyDescriptor(document, 'title')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set) === 'undefined') {\n    /* eslint @typescript-eslint/no-empty-function: off */\n    Object.defineProperty(document, 'title', {\n      set: function set() {}\n    });\n  }\n};\nvar getTargetCenterPosition = function getTargetCenterPosition(element) {\n  var _ref2 = (element === null || element === void 0 ? void 0 : element.getBoundingClientRect()) || {},\n      _ref2$x = _ref2.x,\n      x = _ref2$x === void 0 ? 0 : _ref2$x,\n      _ref2$y = _ref2.y,\n      y = _ref2$y === void 0 ? 0 : _ref2$y,\n      _ref2$height = _ref2.height,\n      height = _ref2$height === void 0 ? 0 : _ref2$height,\n      _ref2$width = _ref2.width,\n      width = _ref2$width === void 0 ? 0 : _ref2$width;\n\n  console.log(element === null || element === void 0 ? void 0 : element.getElementsByTagName('figure'));\n  return {\n    x: Math.floor(x + width / 2),\n    y: Math.floor(y + height / 2)\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZWxlbWVudHMudHM/YTAwNSJdLCJuYW1lcyI6WyJhcHBlbmRFbGVtZW50IiwicGFyZW50RWxlbWVudCIsImNoaWxkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZm9jdXNPbkRyYWciLCJfZXZlbnQiLCJub2RlIiwiZm9jdXMiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJlbGVtZW50UmVmIiwiY3VycmVudCIsInJlc2l6YWJsZUVsZW1lbnQiLCJmb2N1c0Nsb3Nlc3RGb2N1c2FibGVFbGVtZW50RnJvbVJlZiIsImNsb3Nlc3QiLCJsb2NrRG9jdW1lbnRUaXRsZSIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImRvY3VtZW50Iiwic2V0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRUYXJnZXRDZW50ZXJQb3NpdGlvbiIsImVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsImhlaWdodCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDM0JDLGFBRDJCLEVBRTNCQyxZQUYyQixFQUdYO0FBQ2hCLE1BQUlELGFBQWEsSUFBSUMsWUFBckIsRUFBbUM7QUFDakNELGlCQUFhLENBQUNFLFdBQWQsQ0FBMEJELFlBQTFCO0FBQ0Q7O0FBRUQsU0FBT0EsWUFBUDtBQUNELENBVE07QUFXQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUN6QkMsTUFEeUI7QUFBQSxNQUV2QkMsSUFGdUIsUUFFdkJBLElBRnVCO0FBQUEsU0FHaEJBLElBQUksQ0FBQ0MsS0FBTCxFQUhnQjtBQUFBLENBQXBCO0FBS0EsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxVQUFEO0FBQUE7O0FBQUEsZ0NBQ3RDQSxVQUFVLENBQUNDLE9BRDJCLGlGQUN0QyxvQkFBb0JDLGdCQUFwQixDQUFxQ0QsT0FEQywwREFDdEMsc0JBQThDSCxLQUE5QyxFQURzQztBQUFBLENBQWpDO0FBR0EsSUFBTUssbUNBQW1DLEdBQUcsU0FBdENBLG1DQUFzQyxDQUNqREgsVUFEaUQ7QUFBQSxTQUU5QyxZQUFZO0FBQUE7O0FBQ2YsNEJBQUFBLFVBQVUsQ0FBQ0MsT0FBWCx1R0FBb0JHLE9BQXBCLENBQXlDLG9CQUF6QyxpRkFBZ0VOLEtBQWhFO0FBQ0QsR0FKa0Q7QUFBQSxDQUE1QztBQU1BLElBQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUFBOztBQUMzQyxNQUNFLGlDQUFPQyxNQUFNLENBQUNDLHdCQUFQLENBQWdDQyxRQUFoQyxFQUEwQyxPQUExQyxDQUFQLDBEQUFPLHNCQUFvREMsR0FBM0QsTUFDQSxXQUZGLEVBR0U7QUFDQTtBQUNBSCxVQUFNLENBQUNJLGNBQVAsQ0FBc0JGLFFBQXRCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQUVDLFNBQUcsRUFBRSxlQUFNLENBQUU7QUFBZixLQUF6QztBQUNEO0FBQ0YsQ0FSTTtBQVVBLElBQU1FLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FDckNDLE9BRHFDLEVBRVI7QUFBQSxjQUUzQixDQUFBQSxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUMscUJBQVQsT0FBb0MsRUFGVDtBQUFBLHNCQUNyQkMsQ0FEcUI7QUFBQSxNQUNyQkEsQ0FEcUIsd0JBQ2pCLENBRGlCO0FBQUEsc0JBQ2RDLENBRGM7QUFBQSxNQUNkQSxDQURjLHdCQUNWLENBRFU7QUFBQSwyQkFDUEMsTUFETztBQUFBLE1BQ1BBLE1BRE8sNkJBQ0UsQ0FERjtBQUFBLDBCQUNLQyxLQURMO0FBQUEsTUFDS0EsS0FETCw0QkFDYSxDQURiOztBQUk3QkMsU0FBTyxDQUFDQyxHQUFSLENBQ0VQLE9BREYsYUFDRUEsT0FERix1QkFDRUEsT0FBTyxDQUFFUSxvQkFBVCxDQUE4QixRQUE5QixDQURGO0FBSUEsU0FBTztBQUNMTixLQUFDLEVBQUVPLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixDQUFDLEdBQUdHLEtBQUssR0FBRyxDQUF2QixDQURFO0FBRUxGLEtBQUMsRUFBRU0sSUFBSSxDQUFDQyxLQUFMLENBQVdQLENBQUMsR0FBR0MsTUFBTSxHQUFHLENBQXhCO0FBRkUsR0FBUDtBQUlELENBZE0iLCJmaWxlIjoiLi91dGlscy9lbGVtZW50cy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRHJhZ2dhYmxlRGF0YSwgUm5kLCBSbmREcmFnRXZlbnQgfSBmcm9tICdyZWFjdC1ybmQnO1xuaW1wb3J0IHR5cGUgeyBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRFbGVtZW50ID0gKFxuICBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY2hpbGRFbGVtZW50OiBIVE1MRWxlbWVudFxuKTogSFRNTEVsZW1lbnQgPT4ge1xuICBpZiAocGFyZW50RWxlbWVudCAmJiBjaGlsZEVsZW1lbnQpIHtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGZvY3VzT25EcmFnID0gKFxuICBfZXZlbnQ6IFJuZERyYWdFdmVudCxcbiAgeyBub2RlIH06IERyYWdnYWJsZURhdGFcbik6IHZvaWQgPT4gbm9kZS5mb2N1cygpO1xuXG5leHBvcnQgY29uc3QgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmID0gKGVsZW1lbnRSZWY6IFJlZk9iamVjdDxSbmQ+KTogdm9pZCA9PlxuICBlbGVtZW50UmVmLmN1cnJlbnQ/LnJlc2l6YWJsZUVsZW1lbnQuY3VycmVudD8uZm9jdXMoKTtcblxuZXhwb3J0IGNvbnN0IGZvY3VzQ2xvc2VzdEZvY3VzYWJsZUVsZW1lbnRGcm9tUmVmID0gKFxuICBlbGVtZW50UmVmOiBSZWZPYmplY3Q8SFRNTEVsZW1lbnQ+XG4pID0+ICgpOiB2b2lkID0+IHtcbiAgZWxlbWVudFJlZi5jdXJyZW50Py5jbG9zZXN0PEhUTUxFbGVtZW50PignOm5vdChsaSlbdGFiaW5kZXhdJyk/LmZvY3VzKCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9ja0RvY3VtZW50VGl0bGUgPSAoKTogdm9pZCA9PiB7XG4gIGlmIChcbiAgICB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkb2N1bWVudCwgJ3RpdGxlJyk/LnNldCA9PT1cbiAgICAndW5kZWZpbmVkJ1xuICApIHtcbiAgICAvKiBlc2xpbnQgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uOiBvZmYgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsICd0aXRsZScsIHsgc2V0OiAoKSA9PiB7fSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFRhcmdldENlbnRlclBvc2l0aW9uID0gKFxuICBlbGVtZW50PzogSFRNTEVsZW1lbnRcbik6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9PiB7XG4gIGNvbnN0IHsgeCA9IDAsIHkgPSAwLCBoZWlnaHQgPSAwLCB3aWR0aCA9IDAgfSA9XG4gICAgZWxlbWVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgfHwge307XG5cbiAgY29uc29sZS5sb2coXG4gICAgZWxlbWVudD8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ZpZ3VyZScpXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLmZsb29yKHggKyB3aWR0aCAvIDIpLFxuICAgIHk6IE1hdGguZmxvb3IoeSArIGhlaWdodCAvIDIpXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/elements.ts\n");

/***/ })

})
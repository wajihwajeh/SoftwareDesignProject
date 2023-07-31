"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Galon",{

/***/ "./pages/Galon.jsx":
/*!*************************!*\
  !*** ./pages/Galon.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/FuelQuoteForm.module.css */ \"./styles/FuelQuoteForm.module.css\");\n/* harmony import */ var _styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst FuelQuoteForm = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [gallonsRequested, setGallonsRequested] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deliveryDate, setDeliveryDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [suggestedPrice, setSuggestedPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [totalAmountDue, setTotalAmountDue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleGetQuote = ()=>{\n        // Constants\n        const CURRENT_PRICE_PER_GALLON = 1.50;\n        const COMPANY_PROFIT_FACTOR = 0.10;\n        // Pricing function\n        const calculatePricing = (gallonsRequested, location, hasRateHistory)=>{\n            const locationFactor = location === \"TX\" ? 0.02 : 0.04;\n            const rateHistoryFactor = hasRateHistory ? 0.01 : 0;\n            const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;\n            const margin = (locationFactor - rateHistoryFactor + gallonsRequestedFactor + COMPANY_PROFIT_FACTOR) * CURRENT_PRICE_PER_GALLON;\n            const suggestedPrice = CURRENT_PRICE_PER_GALLON + margin;\n            const totalAmountDue = gallonsRequested * suggestedPrice;\n            return {\n                suggestedPrice,\n                totalAmountDue\n            };\n        };\n        const { suggestedPrice , totalAmountDue  } = calculatePricing(+gallonsRequested, state, true // Replace with the actual value based on client's rate history\n        );\n        setSuggestedPrice(suggestedPrice);\n        setTotalAmountDue(totalAmountDue);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + \"/quote\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                },\n                body: JSON.stringify({\n                    gallons_requested: +gallonsRequested,\n                    delivery_address: address,\n                    delivery_date: deliveryDate,\n                    suggested_price: suggestedPrice,\n                    total_amount_due: totalAmountDue\n                })\n            }).then((res)=>res.json());\n            if (res.item) {\n                router.push(\"/quotes\");\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"fuel-quote-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"gallonsRequested\",\n                            children: \"Gallons Requested:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"number\",\n                            id: \"gallonsRequested\",\n                            value: gallonsRequested,\n                            onChange: (e)=>setGallonsRequested(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"deliveryAddress\",\n                            children: \"Delivery Address:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"text\",\n                            id: \"deliveryAddress\",\n                            value: address,\n                            onChange: (e)=>setAddress(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"text\",\n                            id: \"state\",\n                            maxLength: 2,\n                            value: state,\n                            onChange: (e)=>setState(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"deliveryDate\",\n                            children: \"Delivery Date:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"date\",\n                            id: \"deliveryDate\",\n                            value: deliveryDate,\n                            onChange: (e)=>setDeliveryDate(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"suggestedPrice\",\n                            children: \"Suggested Price / gallon:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"number\",\n                            id: \"suggestedPrice\",\n                            value: suggestedPrice,\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"totalAmountDue\",\n                            children: \"Total Amount Due:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"number\",\n                            id: \"totalAmountDue\",\n                            value: totalAmountDue,\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            type: \"button\",\n                            onClick: handleGetQuote,\n                            disabled: !gallonsRequested || !deliveryDate,\n                            children: \"Get Quote\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            type: \"submit\",\n                            disabled: !gallonsRequested || !deliveryDate || !suggestedPrice || !totalAmountDue,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FuelQuoteForm, \"rLe9v+r2PAbY9wY91YrlubBkYaQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FuelQuoteForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FuelQuoteForm);\nvar _c;\n$RefreshReg$(_c, \"FuelQuoteForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUMsV0FBV3BELHVGQUFvQjs7c0NBQ2xDLDhEQUFDa0U7NEJBQ0NkLFdBQVdwRCxnRkFBZ0I7NEJBQzNCMEQsTUFBSzs0QkFDTFMsU0FBU3BEOzRCQUNUcUQsVUFBVSxDQUFDakUsb0JBQW9CLENBQUNNO3NDQUNqQzs7Ozs7O3NDQUdELDhEQUFDeUQ7NEJBQ0NkLFdBQVdwRCxnRkFBZ0I7NEJBQzNCMEQsTUFBSzs0QkFDTFUsVUFBVSxDQUFDakUsb0JBQW9CLENBQUNNLGdCQUFnQixDQUFDRSxrQkFBa0IsQ0FBQ0U7c0NBQ3JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBbEtNWjs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBb0tOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0dhbG9uLmpzeD8yZWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRnVlbFF1b3RlRm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBGdWVsUXVvdGVGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtnYWxsb25zUmVxdWVzdGVkLCBzZXRHYWxsb25zUmVxdWVzdGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RlbGl2ZXJ5RGF0ZSwgc2V0RGVsaXZlcnlEYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWdnZXN0ZWRQcmljZSwgc2V0U3VnZ2VzdGVkUHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsQW1vdW50RHVlLCBzZXRUb3RhbEFtb3VudER1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2V0UXVvdGUgPSAoKSA9PiB7XHJcbiAgICAvLyBDb25zdGFudHNcclxuICAgIGNvbnN0IENVUlJFTlRfUFJJQ0VfUEVSX0dBTExPTiA9IDEuNTA7XHJcbiAgICBjb25zdCBDT01QQU5ZX1BST0ZJVF9GQUNUT1IgPSAwLjEwO1xyXG5cclxuICAgIC8vIFByaWNpbmcgZnVuY3Rpb25cclxuICAgIGNvbnN0IGNhbGN1bGF0ZVByaWNpbmcgPSAoZ2FsbG9uc1JlcXVlc3RlZCwgbG9jYXRpb24sIGhhc1JhdGVIaXN0b3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvY2F0aW9uRmFjdG9yID0gbG9jYXRpb24gPT09ICdUWCcgPyAwLjAyIDogMC4wNDtcclxuICAgICAgY29uc3QgcmF0ZUhpc3RvcnlGYWN0b3IgPSBoYXNSYXRlSGlzdG9yeSA/IDAuMDEgOiAwO1xyXG4gICAgICBjb25zdCBnYWxsb25zUmVxdWVzdGVkRmFjdG9yID0gZ2FsbG9uc1JlcXVlc3RlZCA+IDEwMDAgPyAwLjAyIDogMC4wMztcclxuXHJcbiAgICAgIGNvbnN0IG1hcmdpbiA9XHJcbiAgICAgICAgKGxvY2F0aW9uRmFjdG9yIC0gcmF0ZUhpc3RvcnlGYWN0b3IgKyBnYWxsb25zUmVxdWVzdGVkRmFjdG9yICsgQ09NUEFOWV9QUk9GSVRfRkFDVE9SKSAqXHJcbiAgICAgICAgQ1VSUkVOVF9QUklDRV9QRVJfR0FMTE9OO1xyXG5cclxuICAgICAgY29uc3Qgc3VnZ2VzdGVkUHJpY2UgPSBDVVJSRU5UX1BSSUNFX1BFUl9HQUxMT04gKyBtYXJnaW47XHJcbiAgICAgIGNvbnN0IHRvdGFsQW1vdW50RHVlID0gZ2FsbG9uc1JlcXVlc3RlZCAqIHN1Z2dlc3RlZFByaWNlO1xyXG5cclxuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGVkUHJpY2UsIHRvdGFsQW1vdW50RHVlIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHsgc3VnZ2VzdGVkUHJpY2UsIHRvdGFsQW1vdW50RHVlIH0gPSBjYWxjdWxhdGVQcmljaW5nKFxyXG4gICAgICArZ2FsbG9uc1JlcXVlc3RlZCxcclxuICAgICAgc3RhdGUsIC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIGxvY2F0aW9uIChpbi1zdGF0ZSBvciBvdXQtb2Ytc3RhdGUpIGJhc2VkIG9uIHVzZXIgaW5wdXRcclxuICAgICAgdHJ1ZSAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCB2YWx1ZSBiYXNlZCBvbiBjbGllbnQncyByYXRlIGhpc3RvcnlcclxuICAgICk7XHJcblxyXG4gICAgc2V0U3VnZ2VzdGVkUHJpY2Uoc3VnZ2VzdGVkUHJpY2UpO1xyXG4gICAgc2V0VG90YWxBbW91bnREdWUodG90YWxBbW91bnREdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCArIFwiL3F1b3RlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGdhbGxvbnNfcmVxdWVzdGVkOiArZ2FsbG9uc1JlcXVlc3RlZCxcclxuICAgICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgICBkZWxpdmVyeV9kYXRlOiBkZWxpdmVyeURhdGUsXHJcbiAgICAgICAgICBzdWdnZXN0ZWRfcHJpY2U6IHN1Z2dlc3RlZFByaWNlLFxyXG4gICAgICAgICAgdG90YWxfYW1vdW50X2R1ZTogdG90YWxBbW91bnREdWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcblxyXG4gICAgICBpZiAocmVzLml0ZW0pIHtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9xdW90ZXNcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmdWVsLXF1b3RlLWNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWdyb3VwXCJdfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlc1tcImxhYmVsXCJdfSBodG1sRm9yPVwiZ2FsbG9uc1JlcXVlc3RlZFwiPlxyXG4gICAgICAgICAgICBHYWxsb25zIFJlcXVlc3RlZDpcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbnB1dFwiXX1cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwiZ2FsbG9uc1JlcXVlc3RlZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtnYWxsb25zUmVxdWVzdGVkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEdhbGxvbnNSZXF1ZXN0ZWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZm9ybS1ncm91cFwiXX0+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXNbXCJsYWJlbFwiXX0gaHRtbEZvcj1cImRlbGl2ZXJ5QWRkcmVzc1wiPlxyXG4gICAgICAgICAgICBEZWxpdmVyeSBBZGRyZXNzOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImlucHV0XCJdfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVsaXZlcnlBZGRyZXNzXCJcclxuICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9IC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIGFkZHJlc3NcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbnB1dFwiXX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cInN0YXRlXCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPXsyfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGV9IC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIGFkZHJlc3NcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWdyb3VwXCJdfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlc1tcImxhYmVsXCJdfSBodG1sRm9yPVwiZGVsaXZlcnlEYXRlXCI+XHJcbiAgICAgICAgICAgIERlbGl2ZXJ5IERhdGU6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiaW5wdXRcIl19XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeURhdGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVsaXZlcnlEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlbGl2ZXJ5RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWdyb3VwXCJdfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlc1tcImxhYmVsXCJdfSBodG1sRm9yPVwic3VnZ2VzdGVkUHJpY2VcIj5cclxuICAgICAgICAgICAgU3VnZ2VzdGVkIFByaWNlIC8gZ2FsbG9uOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImlucHV0XCJdfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJzdWdnZXN0ZWRQcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzdWdnZXN0ZWRQcmljZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tZ3JvdXBcIl19PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzW1wibGFiZWxcIl19IGh0bWxGb3I9XCJ0b3RhbEFtb3VudER1ZVwiPlxyXG4gICAgICAgICAgICBUb3RhbCBBbW91bnQgRHVlOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImlucHV0XCJdfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJ0b3RhbEFtb3VudER1ZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbEFtb3VudER1ZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tZ3JvdXBcIl19PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJ1dHRvblwiXX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdldFF1b3RlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWdhbGxvbnNSZXF1ZXN0ZWQgfHwgIWRlbGl2ZXJ5RGF0ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2V0IFF1b3RlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJidXR0b25cIl19XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWdhbGxvbnNSZXF1ZXN0ZWQgfHwgIWRlbGl2ZXJ5RGF0ZSB8fCAhc3VnZ2VzdGVkUHJpY2UgfHwgIXRvdGFsQW1vdW50RHVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVlbFF1b3RlRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3R5bGVzIiwiRnVlbFF1b3RlRm9ybSIsInJvdXRlciIsImdhbGxvbnNSZXF1ZXN0ZWQiLCJzZXRHYWxsb25zUmVxdWVzdGVkIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVsaXZlcnlEYXRlIiwic2V0RGVsaXZlcnlEYXRlIiwic3VnZ2VzdGVkUHJpY2UiLCJzZXRTdWdnZXN0ZWRQcmljZSIsInRvdGFsQW1vdW50RHVlIiwic2V0VG90YWxBbW91bnREdWUiLCJoYW5kbGVHZXRRdW90ZSIsIkNVUlJFTlRfUFJJQ0VfUEVSX0dBTExPTiIsIkNPTVBBTllfUFJPRklUX0ZBQ1RPUiIsImNhbGN1bGF0ZVByaWNpbmciLCJsb2NhdGlvbiIsImhhc1JhdGVIaXN0b3J5IiwibG9jYXRpb25GYWN0b3IiLCJyYXRlSGlzdG9yeUZhY3RvciIsImdhbGxvbnNSZXF1ZXN0ZWRGYWN0b3IiLCJtYXJnaW4iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdhbGxvbnNfcmVxdWVzdGVkIiwiZGVsaXZlcnlfYWRkcmVzcyIsImRlbGl2ZXJ5X2RhdGUiLCJzdWdnZXN0ZWRfcHJpY2UiLCJ0b3RhbF9hbW91bnRfZHVlIiwidGhlbiIsImpzb24iLCJpdGVtIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsInJlYWRPbmx5IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Galon.jsx\n"));

/***/ })

});
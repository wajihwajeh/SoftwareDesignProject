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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/FuelQuoteForm.module.css */ \"./styles/FuelQuoteForm.module.css\");\n/* harmony import */ var _styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst FuelQuoteForm = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [gallonsRequested, setGallonsRequested] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deliveryDate, setDeliveryDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [suggestedPrice, setSuggestedPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [totalAmountDue, setTotalAmountDue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleGetQuote = ()=>{\n        var _s = $RefreshSig$();\n        // Constants\n        const CURRENT_PRICE_PER_GALLON = 1.50;\n        const COMPANY_PROFIT_FACTOR = 0.10;\n        // Pricing function\n        const calculatePricing = (gallonsRequested, location, hasRateHistory)=>{\n            _s();\n            const locationFactor = location === \"Texas\" ? 0.02 : 0.04;\n            const rateHistoryFactor = hasRateHistory ? 0.01 : 0;\n            const gallonsRequestedFactor = gallonsRequested > 1000 ? 0.02 : 0.03;\n            const [address1, setAddress1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n            const [isInTexas, setIsInTexas1] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n            const margin = (locationFactor - rateHistoryFactor + gallonsRequestedFactor + COMPANY_PROFIT_FACTOR) * CURRENT_PRICE_PER_GALLON;\n            const suggestedPrice = CURRENT_PRICE_PER_GALLON + margin;\n            const totalAmountDue = gallonsRequested * suggestedPrice;\n            return {\n                suggestedPrice,\n                totalAmountDue\n            };\n        };\n        _s(calculatePricing, \"NtjHkzccJnnDIzEEw3TFTGcMjaU=\");\n        const { suggestedPrice , totalAmountDue  } = calculatePricing(+gallonsRequested, setIsInTexas, true // Replace with the actual value based on client's rate history\n        );\n        setSuggestedPrice(suggestedPrice);\n        setTotalAmountDue(totalAmountDue);\n    };\n    const handleAddressChange = (e)=>{\n        setAddress(e.target.value);\n        // Assuming the state name is included in the address after the comma\n        const state = e.target.value.split(\", \")[1]; // Assuming the state name is the second part after comma\n        setIsInTexas(state === \"Texas\");\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await fetch(process.env.NEXT_PUBLIC_API_URL + \"/quote\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                },\n                body: JSON.stringify({\n                    gallons_requested: +gallonsRequested,\n                    delivery_address: address,\n                    delivery_date: deliveryDate,\n                    suggested_price: suggestedPrice,\n                    total_amount_due: totalAmountDue\n                })\n            }).then((res)=>res.json());\n            if (res.item) {\n                router.push(\"/quotes\");\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"fuel-quote-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"gallonsRequested\",\n                            children: \"Gallons Requested:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"number\",\n                            id: \"gallonsRequested\",\n                            value: gallonsRequested,\n                            onChange: (e)=>setGallonsRequested(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"deliveryAddress\",\n                            children: \"Delivery Address:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"text\",\n                            id: \"deliveryAddress\",\n                            // value={address}\n                            // onChange={handleAddressChange}\n                            placeholder: \"e.g. 123 Main St, Texas, USA\",\n                            // required\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"deliveryDate\",\n                            children: \"Delivery Date:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"date\",\n                            id: \"deliveryDate\",\n                            value: deliveryDate,\n                            onChange: (e)=>setDeliveryDate(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"suggestedPrice\",\n                            children: \"Suggested Price / gallon:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"number\",\n                            id: \"suggestedPrice\",\n                            value: suggestedPrice,\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                            htmlFor: \"totalAmountDue\",\n                            children: \"Total Amount Due:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                            type: \"number\",\n                            id: \"totalAmountDue\",\n                            value: totalAmountDue,\n                            readOnly: true\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"form-group\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            type: \"button\",\n                            onClick: handleGetQuote,\n                            disabled: !gallonsRequested || !deliveryDate,\n                            children: \"Get Quote\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 148,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_FuelQuoteForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                            type: \"submit\",\n                            disabled: !gallonsRequested || !deliveryDate || !suggestedPrice || !totalAmountDue,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/beast/Desktop/cosc/SoftwareDesignProject/pages/Galon.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FuelQuoteForm, \"XrO00y6Ts3s02tyhcIBUFLXko3A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FuelQuoteForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FuelQuoteForm);\nvar _c;\n$RefreshReg$(_c, \"FuelQuoteForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ1o7b0JBQUlDLFdBQVd6RCx1RkFBb0I7O3NDQUNsQyw4REFBQ3FFOzRCQUNDWixXQUFXekQsZ0ZBQWdCOzRCQUMzQitELE1BQUs7NEJBQ0xPLFNBQVMzRDs0QkFDVDRELFVBQVUsQ0FBQ3BFLG9CQUFvQixDQUFDRTtzQ0FDakM7Ozs7OztzQ0FHRCw4REFBQ2dFOzRCQUNDWixXQUFXekQsZ0ZBQWdCOzRCQUMzQitELE1BQUs7NEJBQ0xRLFVBQVUsQ0FBQ3BFLG9CQUFvQixDQUFDRSxnQkFBZ0IsQ0FBQ0Usa0JBQWtCLENBQUNFO3NDQUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQWxLTVI7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQW9LTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9HYWxvbi5qc3g/MmVhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Z1ZWxRdW90ZUZvcm0ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgRnVlbFF1b3RlRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZ2FsbG9uc1JlcXVlc3RlZCwgc2V0R2FsbG9uc1JlcXVlc3RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVsaXZlcnlEYXRlLCBzZXREZWxpdmVyeURhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1Z2dlc3RlZFByaWNlLCBzZXRTdWdnZXN0ZWRQcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxBbW91bnREdWUsIHNldFRvdGFsQW1vdW50RHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVHZXRRdW90ZSA9ICgpID0+IHtcclxuICAgIC8vIENvbnN0YW50c1xyXG4gICAgY29uc3QgQ1VSUkVOVF9QUklDRV9QRVJfR0FMTE9OID0gMS41MDtcclxuICAgIGNvbnN0IENPTVBBTllfUFJPRklUX0ZBQ1RPUiA9IDAuMTA7XHJcblxyXG4gICAgLy8gUHJpY2luZyBmdW5jdGlvblxyXG4gICAgY29uc3QgY2FsY3VsYXRlUHJpY2luZyA9IChnYWxsb25zUmVxdWVzdGVkLCBsb2NhdGlvbiwgaGFzUmF0ZUhpc3RvcnkpID0+IHtcclxuICAgICAgY29uc3QgbG9jYXRpb25GYWN0b3IgPSBsb2NhdGlvbiA9PT0gXCJUZXhhc1wiID8gMC4wMiA6IDAuMDQ7XHJcbiAgICAgIGNvbnN0IHJhdGVIaXN0b3J5RmFjdG9yID0gaGFzUmF0ZUhpc3RvcnkgPyAwLjAxIDogMDtcclxuICAgICAgY29uc3QgZ2FsbG9uc1JlcXVlc3RlZEZhY3RvciA9IGdhbGxvbnNSZXF1ZXN0ZWQgPiAxMDAwID8gMC4wMiA6IDAuMDM7XHJcbiAgICAgIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgICBjb25zdCBbaXNJblRleGFzLCBzZXRJc0luVGV4YXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICAgY29uc3QgbWFyZ2luID1cclxuICAgICAgICAobG9jYXRpb25GYWN0b3IgLSByYXRlSGlzdG9yeUZhY3RvciArIGdhbGxvbnNSZXF1ZXN0ZWRGYWN0b3IgKyBDT01QQU5ZX1BST0ZJVF9GQUNUT1IpICpcclxuICAgICAgICBDVVJSRU5UX1BSSUNFX1BFUl9HQUxMT047XHJcblxyXG4gICAgICBjb25zdCBzdWdnZXN0ZWRQcmljZSA9IENVUlJFTlRfUFJJQ0VfUEVSX0dBTExPTiArIG1hcmdpbjtcclxuICAgICAgY29uc3QgdG90YWxBbW91bnREdWUgPSBnYWxsb25zUmVxdWVzdGVkICogc3VnZ2VzdGVkUHJpY2U7XHJcblxyXG4gICAgICByZXR1cm4geyBzdWdnZXN0ZWRQcmljZSwgdG90YWxBbW91bnREdWUgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgeyBzdWdnZXN0ZWRQcmljZSwgdG90YWxBbW91bnREdWUgfSA9IGNhbGN1bGF0ZVByaWNpbmcoXHJcbiAgICAgICtnYWxsb25zUmVxdWVzdGVkLFxyXG4gICAgICBzZXRJc0luVGV4YXMsIC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIGxvY2F0aW9uIChpbi1zdGF0ZSBvciBvdXQtb2Ytc3RhdGUpIGJhc2VkIG9uIHVzZXIgaW5wdXRcclxuICAgICAgdHJ1ZSAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCB2YWx1ZSBiYXNlZCBvbiBjbGllbnQncyByYXRlIGhpc3RvcnlcclxuICAgICk7XHJcblxyXG4gICAgc2V0U3VnZ2VzdGVkUHJpY2Uoc3VnZ2VzdGVkUHJpY2UpO1xyXG4gICAgc2V0VG90YWxBbW91bnREdWUodG90YWxBbW91bnREdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZHJlc3NDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyBBc3N1bWluZyB0aGUgc3RhdGUgbmFtZSBpcyBpbmNsdWRlZCBpbiB0aGUgYWRkcmVzcyBhZnRlciB0aGUgY29tbWFcclxuICAgIGNvbnN0IHN0YXRlID0gZS50YXJnZXQudmFsdWUuc3BsaXQoXCIsIFwiKVsxXTsgLy8gQXNzdW1pbmcgdGhlIHN0YXRlIG5hbWUgaXMgdGhlIHNlY29uZCBwYXJ0IGFmdGVyIGNvbW1hXHJcbiAgICBzZXRJc0luVGV4YXMoc3RhdGUgPT09IFwiVGV4YXNcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMICsgXCIvcXVvdGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZ2FsbG9uc19yZXF1ZXN0ZWQ6ICtnYWxsb25zUmVxdWVzdGVkLFxyXG4gICAgICAgICAgZGVsaXZlcnlfYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgIGRlbGl2ZXJ5X2RhdGU6IGRlbGl2ZXJ5RGF0ZSxcclxuICAgICAgICAgIHN1Z2dlc3RlZF9wcmljZTogc3VnZ2VzdGVkUHJpY2UsXHJcbiAgICAgICAgICB0b3RhbF9hbW91bnRfZHVlOiB0b3RhbEFtb3VudER1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuXHJcbiAgICAgIGlmIChyZXMuaXRlbSkge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3F1b3Rlc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZ1ZWwtcXVvdGUtY29udGFpbmVyXCJdfT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tZ3JvdXBcIl19PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzW1wibGFiZWxcIl19IGh0bWxGb3I9XCJnYWxsb25zUmVxdWVzdGVkXCI+XHJcbiAgICAgICAgICAgIEdhbGxvbnMgUmVxdWVzdGVkOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImlucHV0XCJdfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJnYWxsb25zUmVxdWVzdGVkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2dhbGxvbnNSZXF1ZXN0ZWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2FsbG9uc1JlcXVlc3RlZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWdyb3VwXCJdfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlc1tcImxhYmVsXCJdfSBodG1sRm9yPVwiZGVsaXZlcnlBZGRyZXNzXCI+XHJcbiAgICAgICAgICAgIERlbGl2ZXJ5IEFkZHJlc3M6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiaW5wdXRcIl19XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeUFkZHJlc3NcIlxyXG4gICAgICAgICAgICAvLyB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUFkZHJlc3NDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiAxMjMgTWFpbiBTdCwgVGV4YXMsIFVTQVwiXHJcbiAgICAgICAgICAgIC8vIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWdyb3VwXCJdfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlc1tcImxhYmVsXCJdfSBodG1sRm9yPVwiZGVsaXZlcnlEYXRlXCI+XHJcbiAgICAgICAgICAgIERlbGl2ZXJ5IERhdGU6XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiaW5wdXRcIl19XHJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgaWQ9XCJkZWxpdmVyeURhdGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVsaXZlcnlEYXRlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlbGl2ZXJ5RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJmb3JtLWdyb3VwXCJdfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlc1tcImxhYmVsXCJdfSBodG1sRm9yPVwic3VnZ2VzdGVkUHJpY2VcIj5cclxuICAgICAgICAgICAgU3VnZ2VzdGVkIFByaWNlIC8gZ2FsbG9uOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImlucHV0XCJdfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJzdWdnZXN0ZWRQcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzdWdnZXN0ZWRQcmljZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tZ3JvdXBcIl19PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzW1wibGFiZWxcIl19IGh0bWxGb3I9XCJ0b3RhbEFtb3VudER1ZVwiPlxyXG4gICAgICAgICAgICBUb3RhbCBBbW91bnQgRHVlOlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImlucHV0XCJdfVxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJ0b3RhbEFtb3VudER1ZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0b3RhbEFtb3VudER1ZX1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImZvcm0tZ3JvdXBcIl19PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJ1dHRvblwiXX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdldFF1b3RlfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWdhbGxvbnNSZXF1ZXN0ZWQgfHwgIWRlbGl2ZXJ5RGF0ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgR2V0IFF1b3RlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJidXR0b25cIl19XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IWdhbGxvbnNSZXF1ZXN0ZWQgfHwgIWRlbGl2ZXJ5RGF0ZSB8fCAhc3VnZ2VzdGVkUHJpY2UgfHwgIXRvdGFsQW1vdW50RHVlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVlbFF1b3RlRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3R5bGVzIiwiRnVlbFF1b3RlRm9ybSIsInJvdXRlciIsImdhbGxvbnNSZXF1ZXN0ZWQiLCJzZXRHYWxsb25zUmVxdWVzdGVkIiwiZGVsaXZlcnlEYXRlIiwic2V0RGVsaXZlcnlEYXRlIiwic3VnZ2VzdGVkUHJpY2UiLCJzZXRTdWdnZXN0ZWRQcmljZSIsInRvdGFsQW1vdW50RHVlIiwic2V0VG90YWxBbW91bnREdWUiLCJoYW5kbGVHZXRRdW90ZSIsIkNVUlJFTlRfUFJJQ0VfUEVSX0dBTExPTiIsIkNPTVBBTllfUFJPRklUX0ZBQ1RPUiIsImNhbGN1bGF0ZVByaWNpbmciLCJsb2NhdGlvbiIsImhhc1JhdGVIaXN0b3J5IiwibG9jYXRpb25GYWN0b3IiLCJyYXRlSGlzdG9yeUZhY3RvciIsImdhbGxvbnNSZXF1ZXN0ZWRGYWN0b3IiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImlzSW5UZXhhcyIsInNldElzSW5UZXhhcyIsIm1hcmdpbiIsImhhbmRsZUFkZHJlc3NDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdGF0ZSIsInNwbGl0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdhbGxvbnNfcmVxdWVzdGVkIiwiZGVsaXZlcnlfYWRkcmVzcyIsImRlbGl2ZXJ5X2RhdGUiLCJzdWdnZXN0ZWRfcHJpY2UiLCJ0b3RhbF9hbW91bnRfZHVlIiwidGhlbiIsImpzb24iLCJpdGVtIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Galon.jsx\n"));

/***/ })

});
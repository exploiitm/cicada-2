"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { username , password  } = req.body;\n    if (username === \"admin\" && password === \"secret\") {\n        res.setHeader(\"Set-Cookie\", \"auth-token=secrettoken; Path=/; HttpOnly; Secure; SameSite=Strict\");\n        return res.status(200).json({\n            message: \"Logged in\"\n        });\n    }\n    return res.status(401).json({\n        message: \"Invalid credentials\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFFBQVEsR0FBRSxHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFFdkMsSUFBSUYsUUFBUSxLQUFLLE9BQU8sSUFBSUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNqRE4sR0FBRyxDQUFDUSxTQUFTLENBQ1gsWUFBWSxFQUNaLG1FQUFtRSxDQUNwRSxDQUFDO1FBQ0YsT0FBT1IsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsV0FBVztTQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxPQUFPLEVBQUUscUJBQXFCO0tBQUUsQ0FBQyxDQUFDO0FBQ2xFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWRkbGV3YXJlYnlwYXNzcS8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxuICBcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICBcbiAgaWYgKHVzZXJuYW1lID09PSBcImFkbWluXCIgJiYgcGFzc3dvcmQgPT09IFwic2VjcmV0XCIpIHtcbiAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgXCJTZXQtQ29va2llXCIsXG4gICAgICBcImF1dGgtdG9rZW49c2VjcmV0dG9rZW47IFBhdGg9LzsgSHR0cE9ubHk7IFNlY3VyZTsgU2FtZVNpdGU9U3RyaWN0XCJcbiAgICApO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiTG9nZ2VkIGluXCIgfSk7XG4gIH1cbiAgXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0pO1xufVxuXG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJzZXRIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();
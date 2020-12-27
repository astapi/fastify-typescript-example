/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _routes_example_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/routes/example/index */ "./src/routes/example/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// import admin from 'firebase-admin'
__webpack_require__(/*! dotenv */ "dotenv").config();
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(fastify, opts, next) {
    // if (!admin.apps.length) {
    //   admin.initializeApp();
    // }
    var _this = this;
    fastify.get('/ping', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 'pong\n'];
        });
    }); });
    fastify.get('/', function (request, reply) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            reply.code(404).send('NotFound.');
            return [2 /*return*/];
        });
    }); });
    fastify.register(_routes_example_index__WEBPACK_IMPORTED_MODULE_0__.default, __assign(__assign({}, opts), { prefix: '/example' }));
    next();
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify */ "fastify");
/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fastify-cors */ "fastify-cors");
/* harmony import */ var fastify_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fastify_cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app */ "./src/app.ts");



var server = fastify__WEBPACK_IMPORTED_MODULE_0___default()();
// plugins
server.register((fastify_cors__WEBPACK_IMPORTED_MODULE_1___default()), {
    origin: [/localhost/, /.*.ngrok.io/]
});
// Rooting
server.register(_app__WEBPACK_IMPORTED_MODULE_2__.default);
var PORT = process.env.PORT || 3030;
// Listen
server.listen(PORT, '0.0.0.0', function (err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server listening at " + address);
});


/***/ }),

/***/ "./src/routes/example/index.ts":
/*!*************************************!*\
  !*** ./src/routes/example/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/logger */ "./src/utils/logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(fastify, opts, next) {
    fastify.get('/', function (request, reply) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.getInstance(request.headers);
                console.log('aaaaaaaaa');
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.log('this is an example log.');
                return [2 /*return*/, 'this is an example.'];
            });
        });
    });
    next();
}


/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => /* binding */ Logger
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var projectId = 'xxxxx';
var globalLogFields = {};
var Logger = /** @class */ (function () {
    function Logger(traceId) {
        if (traceId)
            this.traceId = traceId;
    }
    Logger.getInstance = function (headers) {
        if (!Logger.instance) {
            if (headers) {
                // clound run実行時にはrequestIdをヘッダーから取得する
                var traceHeader = headers['x-cloud-trace-context'];
                if (typeof traceHeader === 'string') {
                    var trace = traceHeader.split('/')[0];
                    Logger.instance = new Logger(trace);
                }
            }
            else {
                Logger.instance = new Logger();
            }
        }
        return Logger.instance;
    };
    Logger.log = function (text, option) {
        Logger.getInstance().log(text, option);
    };
    Logger.prototype.log = function (text, option) {
        globalLogFields['logging.googleapis.com/trace'] = "projects/" + projectId + "/traces/" + this.traceId;
        var entry = __assign({ severity: 'INFO', message: text, data: option }, globalLogFields);
        console.log(JSON.stringify(entry));
    };
    Logger.error = function (text, option) {
        Logger.getInstance().error(text, option);
    };
    Logger.prototype.error = function (text, option) {
        globalLogFields['logging.googleapis.com/trace'] = "projects/" + projectId + "/traces/" + this.traceId;
        var entry = __assign({ severity: 'ERROR', message: text, data: option }, globalLogFields);
        console.error(JSON.stringify(entry));
    };
    Logger.getTraceId = function () {
        return Logger.getInstance().traceId;
    };
    return Logger;
}());



/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");;

/***/ }),

/***/ "fastify-cors":
/*!*******************************!*\
  !*** external "fastify-cors" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("fastify-cors");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWV4YW1wbGUvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2Zhc3RpZnktdHMtZXhhbXBsZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWV4YW1wbGUvLi9zcmMvcm91dGVzL2V4YW1wbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1leGFtcGxlLy4vc3JjL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWV4YW1wbGUvZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWV4YW1wbGUvZXh0ZXJuYWwgXCJmYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1leGFtcGxlL2V4dGVybmFsIFwiZmFzdGlmeS1jb3JzXCIiLCJ3ZWJwYWNrOi8vZmFzdGlmeS10cy1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zhc3RpZnktdHMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mYXN0aWZ5LXRzLWV4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zhc3RpZnktdHMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zhc3RpZnktdHMtZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zhc3RpZnktdHMtZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDNUMscUNBQXFDO0FBQ3JDLGtEQUF3QixFQUFFO0FBRTFCLDZCQUFlLG9DQUFVLE9BQXdCLEVBQUUsSUFBMEIsRUFBRSxJQUFTO0lBQ3RGLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsSUFBSTtJQUhOLGlCQWNDO0lBVEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBTyxPQUFPLEVBQUUsS0FBSzs7WUFDeEMsc0JBQU8sUUFBUTs7U0FDaEIsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQU8sT0FBTyxFQUFFLEtBQUs7O1lBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNqQyxzQkFBTzs7U0FDUixDQUFDO0lBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQywwREFBTyx3QkFBTyxJQUFJLEtBQUUsTUFBTSxFQUFFLFVBQVUsSUFBRyxDQUFDO0lBQzNELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmtEO0FBRVo7QUFDZjtBQUV4QixJQUFNLE1BQU0sR0FJUiw4Q0FBTyxFQUFFLENBQUM7QUFFZCxVQUFVO0FBQ1YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxxREFBVyxFQUFFO0lBQzNCLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Q0FDckMsQ0FBQztBQUVGLFVBQVU7QUFDVixNQUFNLENBQUMsUUFBUSxDQUFDLHlDQUFHLENBQUM7QUFFcEIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3RDLFNBQVM7QUFDVCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTztJQUMxQyxJQUFHLEdBQUcsRUFBRTtRQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsT0FBUyxDQUFDO0FBQy9DLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCc0M7QUFFeEMsNkJBQWUsb0NBQVUsT0FBd0IsRUFBRSxJQUEwQixFQUFFLElBQVM7SUFDdEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBZ0IsT0FBTyxFQUFFLEtBQUs7OztnQkFDN0MsNkRBQWtCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIscURBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN0QyxzQkFBTyxxQkFBcUI7OztLQUM3QixDQUFDO0lBRUYsSUFBSSxFQUFFO0FBQ1IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDMUIsSUFBTSxlQUFlLEdBQVEsRUFBRSxDQUFDO0FBRWhDO0lBSUUsZ0JBQW9CLE9BQWdCO1FBQ2xDLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxrQkFBVyxHQUFsQixVQUFtQixPQUE2QjtRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLE9BQU8sRUFBRTtnQkFDWCxzQ0FBc0M7Z0JBQ3RDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtvQkFDNUIsU0FBSyxHQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQTFCLENBQTJCO29CQUN2QyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyQzthQUNGO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQzthQUNoQztTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUMsUUFBUTtJQUN4QixDQUFDO0lBRWEsVUFBRyxHQUFqQixVQUFrQixJQUFZLEVBQUUsTUFBWTtRQUMxQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0JBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxNQUFZO1FBQzVCLGVBQWUsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLGNBQVksU0FBUyxnQkFBVyxJQUFJLENBQUMsT0FBUyxDQUFDO1FBQ2pHLElBQU0sS0FBSyxjQUNULFFBQVEsRUFBRSxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxJQUFJLEVBQ2IsSUFBSSxFQUFFLE1BQU0sSUFDVCxlQUFlLENBQ25CO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVhLFlBQUssR0FBbkIsVUFBb0IsSUFBWSxFQUFFLE1BQVk7UUFDNUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELHNCQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsTUFBWTtRQUM5QixlQUFlLENBQUMsOEJBQThCLENBQUMsR0FBRyxjQUFZLFNBQVMsZ0JBQVcsSUFBSSxDQUFDLE9BQVMsQ0FBQztRQUNqRyxJQUFNLEtBQUssY0FDVCxRQUFRLEVBQUUsT0FBTyxFQUNqQixPQUFPLEVBQUUsSUFBSSxFQUNiLElBQUksRUFBRSxNQUFNLElBQ1QsZUFBZSxDQUNuQjtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFYSxpQkFBVSxHQUF4QjtRQUNFLE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7OztBQzVERCxvQzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7O0FDQUEsMEM7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXN0aWZ5SW5zdGFuY2UsIEZhc3RpZnlQbHVnaW5PcHRpb25zIH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgZXhhbXBsZSBmcm9tICdAL3JvdXRlcy9leGFtcGxlL2luZGV4J1xuLy8gaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJ1xucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZhc3RpZnk6IEZhc3RpZnlJbnN0YW5jZSwgb3B0czogRmFzdGlmeVBsdWdpbk9wdGlvbnMsIG5leHQ6IGFueSkge1xuICAvLyBpZiAoIWFkbWluLmFwcHMubGVuZ3RoKSB7XG4gIC8vICAgYWRtaW4uaW5pdGlhbGl6ZUFwcCgpO1xuICAvLyB9XG5cbiAgZmFzdGlmeS5nZXQoJy9waW5nJywgYXN5bmMgKHJlcXVlc3QsIHJlcGx5KSA9PiB7XG4gICAgcmV0dXJuICdwb25nXFxuJ1xuICB9KVxuICBmYXN0aWZ5LmdldCgnLycsIGFzeW5jIChyZXF1ZXN0LCByZXBseSkgPT4ge1xuICAgIHJlcGx5LmNvZGUoNDA0KS5zZW5kKCdOb3RGb3VuZC4nKVxuICAgIHJldHVybjtcbiAgfSlcbiAgZmFzdGlmeS5yZWdpc3RlcihleGFtcGxlLCB7IC4uLm9wdHMsIHByZWZpeDogJy9leGFtcGxlJyB9KTtcbiAgbmV4dCgpO1xufSIsIlxuaW1wb3J0IGZhc3RpZnksIHsgRmFzdGlmeUluc3RhbmNlIH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgeyBTZXJ2ZXIsIEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJztcbmltcG9ydCBmYXN0aWZ5Q29ycyBmcm9tICdmYXN0aWZ5LWNvcnMnO1xuaW1wb3J0IEFwcCBmcm9tICdAL2FwcCc7XG5cbmNvbnN0IHNlcnZlcjogRmFzdGlmeUluc3RhbmNlPFxuICBTZXJ2ZXIsXG4gIEluY29taW5nTWVzc2FnZSxcbiAgU2VydmVyUmVzcG9uc2Vcbj4gPSBmYXN0aWZ5KCk7XG5cbi8vIHBsdWdpbnNcbnNlcnZlci5yZWdpc3RlcihmYXN0aWZ5Q29ycywge1xuICBvcmlnaW46IFsvbG9jYWxob3N0LywgLy4qLm5ncm9rLmlvL11cbn0pXG5cbi8vIFJvb3RpbmdcbnNlcnZlci5yZWdpc3RlcihBcHApXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMzA7XG4vLyBMaXN0ZW5cbnNlcnZlci5saXN0ZW4oUE9SVCwgJzAuMC4wLjAnLCAoZXJyLCBhZGRyZXNzKSA9PiB7XG4gIGlmKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIGF0ICR7YWRkcmVzc31gKVxufSkiLCJpbXBvcnQgeyBGYXN0aWZ5SW5zdGFuY2UsIEZhc3RpZnlQbHVnaW5PcHRpb25zIH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAL3V0aWxzL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmYXN0aWZ5OiBGYXN0aWZ5SW5zdGFuY2UsIG9wdHM6IEZhc3RpZnlQbHVnaW5PcHRpb25zLCBuZXh0OiBhbnkpIHtcbiAgZmFzdGlmeS5nZXQoJy8nLCBhc3luYyBmdW5jdGlvbiAocmVxdWVzdCwgcmVwbHkpIHtcbiAgICBMb2dnZXIuZ2V0SW5zdGFuY2UocmVxdWVzdC5oZWFkZXJzKVxuICAgIGNvbnNvbGUubG9nKCdhYWFhYWFhYWEnKTtcbiAgICBMb2dnZXIubG9nKCd0aGlzIGlzIGFuIGV4YW1wbGUgbG9nLicpO1xuICAgIHJldHVybiAndGhpcyBpcyBhbiBleGFtcGxlLidcbiAgfSlcblxuICBuZXh0KClcbn0iLCJpbXBvcnQgeyBJbmNvbWluZ0h0dHBIZWFkZXJzIH0gZnJvbSBcImh0dHBcIjtcblxuY29uc3QgcHJvamVjdElkID0gJ3h4eHh4JztcbmNvbnN0IGdsb2JhbExvZ0ZpZWxkczogYW55ID0ge307XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xuICBwcml2YXRlIHRyYWNlSWQ6IHN0cmluZ3x1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih0cmFjZUlkPzogc3RyaW5nKSB7XG4gICAgaWYgKHRyYWNlSWQpIHRoaXMudHJhY2VJZCA9IHRyYWNlSWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoaGVhZGVycz86IEluY29taW5nSHR0cEhlYWRlcnMpIHtcbiAgICBpZiAoIUxvZ2dlci5pbnN0YW5jZSkge1xuICAgICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgLy8gY2xvdW5kIHJ1buWun+ihjOaZguOBq+OBr3JlcXVlc3RJZOOCkuODmOODg+ODgOODvOOBi+OCieWPluW+l+OBmeOCi1xuICAgICAgICBjb25zdCB0cmFjZUhlYWRlciA9IGhlYWRlcnNbJ3gtY2xvdWQtdHJhY2UtY29udGV4dCddO1xuICAgICAgICBpZiAodHlwZW9mIHRyYWNlSGVhZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnN0IFt0cmFjZV0gPSB0cmFjZUhlYWRlci5zcGxpdCgnLycpO1xuICAgICAgICAgIExvZ2dlci5pbnN0YW5jZSA9IG5ldyBMb2dnZXIodHJhY2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2dnZXIuaW5zdGFuY2UgPSBuZXcgTG9nZ2VyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBMb2dnZXIuaW5zdGFuY2VcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbG9nKHRleHQ6IHN0cmluZywgb3B0aW9uPzogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLmdldEluc3RhbmNlKCkubG9nKHRleHQsIG9wdGlvbik7XG4gIH1cbiAgbG9nKHRleHQ6IHN0cmluZywgb3B0aW9uPzogYW55KTogdm9pZCB7XG4gICAgZ2xvYmFsTG9nRmllbGRzWydsb2dnaW5nLmdvb2dsZWFwaXMuY29tL3RyYWNlJ10gPSBgcHJvamVjdHMvJHtwcm9qZWN0SWR9L3RyYWNlcy8ke3RoaXMudHJhY2VJZH1gO1xuICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgc2V2ZXJpdHk6ICdJTkZPJyxcbiAgICAgIG1lc3NhZ2U6IHRleHQsXG4gICAgICBkYXRhOiBvcHRpb24sXG4gICAgICAuLi5nbG9iYWxMb2dGaWVsZHNcbiAgICB9XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZW50cnkpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZXJyb3IodGV4dDogc3RyaW5nLCBvcHRpb24/OiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIuZ2V0SW5zdGFuY2UoKS5lcnJvcih0ZXh0LCBvcHRpb24pO1xuICB9XG4gIGVycm9yKHRleHQ6IHN0cmluZywgb3B0aW9uPzogYW55KTogdm9pZCB7XG4gICAgZ2xvYmFsTG9nRmllbGRzWydsb2dnaW5nLmdvb2dsZWFwaXMuY29tL3RyYWNlJ10gPSBgcHJvamVjdHMvJHtwcm9qZWN0SWR9L3RyYWNlcy8ke3RoaXMudHJhY2VJZH1gO1xuICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgc2V2ZXJpdHk6ICdFUlJPUicsXG4gICAgICBtZXNzYWdlOiB0ZXh0LFxuICAgICAgZGF0YTogb3B0aW9uLFxuICAgICAgLi4uZ2xvYmFsTG9nRmllbGRzXG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZW50cnkpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0VHJhY2VJZCgpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gTG9nZ2VyLmdldEluc3RhbmNlKCkudHJhY2VJZDtcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdGlmeS1jb3JzXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
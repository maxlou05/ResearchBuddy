"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
// var search_topic = new String("Math");
function getLinks(topic) {
    return __awaiter(this, void 0, void 0, function () {
        var res, response, _i, _a, property;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    res = [];
                    return [4 /*yield*/, axios_1.default.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyAFPfgU70wd-F8RQow2GI75vrmOBv50qXs&cx=3431c9d1ed5914f6d&q=" + topic)
                        //console.log(response.data.items)
                    ];
                case 1:
                    response = _b.sent();
                    //console.log(response.data.items)
                    for (_i = 0, _a = response.data.items; _i < _a.length; _i++) {
                        property = _a[_i];
                        res.push(property.link);
                    }
                    //console.log(response.data);
                    //console.log(response.data.items)
                    return [2 /*return*/, res];
            }
        });
    });
}
function printResult() {
    return __awaiter(this, void 0, void 0, function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLinks("numbers")];
                case 1:
                    x = _a.sent();
                    console.log(x);
                    return [2 /*return*/];
            }
        });
    });
}
printResult();
// axios.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyAFPfgU70wd-F8RQow2GI75vrmOBv50qXs&cx=3431c9d1ed5914f6d&q=" + "numbers")
//     .then((response) => {
//     //console.log(response.data.items)
//     for (const property of response.data.items){
//         res.push(property.link)
//     }
//     console.log(res);
//     });
// for (const property in response.data){
//     //console.log(response.data[property])
//     if (typeof response.data[property] === 'string' && response.data[property].startsWith("http")){
//         res.push(response.data[property]);
//     }
// }
// console.log(res);
//console.log(obj)
//console.log(response.data)
// console.log("-------------")
// console.log(response.data);
// console.log("-------------")
// console.log(response.status);
// console.log("-------------")
// console.log(response.statusText);
// console.log("-------------")
// console.log(response.headers);
// console.log("-------------")
// console.log(response.config);
// import * as request from 'request';
// function getUserInfo(userName : string){
//     request.get('https://api.github.com/users/' + userName, (response : string) =>{
//         console.log(response);
//         console.log("Hi");
//     })
// }
// getUserInfo("")

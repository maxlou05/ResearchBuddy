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
// let trustedSites : string[] = ["https://academic.microsoft.com/home", "https://us.sagepub.com/en-us/nam/home",
// "https://www.tandfonline.com/", "https://www.sciencedirect.com/", "https://www.academia.edu/", "http://digital.library.wisc.edu/1711.web/scopus",
// "https://www.bbc.com/news", "https://www.economist.com/", "https://www.wsj.com/", "https://news.google.com/topstories?gl=US&hl=en-US&ceid=US:en&ceid=US:en",
// "https://www.theguardian.com/international", "https://edition.cnn.com/", "https://www.wikipedia.org", "https://www.britannica.com",
// "https://www.nasa.gov/", "https://www.scientificamerican.com/", "https://www.popsci.com/", 
// "https://www.nationalgeographic.com/","https://www.google.com/", "https://www.microsoft.com/en-ca/", ];
var trustedSites = ["microsoft.com", "sagepub.com", "wikipedia.org", "tandfonline.com", "sciencedirect.com",
    "sciencedirect.com", "bbc.com", "economist.com", "wsj.com", "google.com", "theguardian.com", "cnn.com", "britannica.com",
    "nasa.gov", "scientificamerican.com", "popsci.com", "nationalgeographic.com"];
var researchSites = ["brilliant.org", "researchgate.net", "scholar.google.ru", "jstor.org", "academia.edu",
    "wisc.edu"];
function getLinks(topic) {
    return __awaiter(this, void 0, void 0, function () {
        var res, response, _i, _a, property, siteName, siteStatus, siteURL, _b, trustedSites_1, site, _c, researchSites_1, site;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    res = [];
                    return [4 /*yield*/, axios_1.default.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCb_IwchS4Z4eT7P32JfWPO2B0cqG9Ffv0&cx=802145aa9dfb74ae6&q=" + topic)];
                case 1:
                    response = _d.sent();
                    for (_i = 0, _a = response.data.items; _i < _a.length; _i++) {
                        property = _a[_i];
                        siteName = property.title;
                        siteStatus = 0;
                        siteURL = property.link;
                        console.log(property.displayLink);
                        for (_b = 0, trustedSites_1 = trustedSites; _b < trustedSites_1.length; _b++) {
                            site = trustedSites_1[_b];
                            if (property.displayLink.includes(site)) {
                                siteStatus = 1;
                            }
                        }
                        for (_c = 0, researchSites_1 = researchSites; _c < researchSites_1.length; _c++) {
                            site = researchSites_1[_c];
                            if (property.displayLink.includes(site)) {
                                siteStatus = 2;
                            }
                        }
                        // if (trustedSites.some(str => str.includes(property.displayLink))){
                        //   siteStatus = 1;
                        // } else if (researchSites.some(str => str.includes(property.displayLink))){
                        //   siteStatus = 2;
                        // } else{
                        //   siteStatus = 0;
                        // }
                        res.push({ name: siteName, url: siteURL, status: siteStatus });
                    }
                    //console.log(response.data);
                    //console.log(response.data.items)
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.default = getLinks;
function printResult() {
    return __awaiter(this, void 0, void 0, function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getLinks("toronto maple leafs")];
                case 1:
                    x = _a.sent();
                    console.log(x);
                    return [2 /*return*/];
            }
        });
    });
}
printResult();

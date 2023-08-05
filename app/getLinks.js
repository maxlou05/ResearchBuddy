"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var res = [];
axios_1.default.get('https://api.github.com/users/davidgan1218')
    .then(function (response) {
    //console.log(response.data)
    for (var property in response.data) {
        //console.log(response.data[property])
        if (typeof response.data[property] === 'string' && response.data[property].startsWith("http")) {
            res.push(response.data[property]);
        }
    }
    console.log(res);
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
});
// import * as request from 'request';
// function getUserInfo(userName : string){
//     request.get('https://api.github.com/users/' + userName, (response : string) =>{
//         console.log(response);
//         console.log("Hi");
//     })
// }
// getUserInfo("")

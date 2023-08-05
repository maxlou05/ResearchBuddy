import axios from "axios";


// var search_topic = new String("Math");

let res : string[] = [];


axios.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyDZAw5NdxYwrNaclIKNzBaugVXmYiF1sm4&cx=342d2dff309d247e3&q=" + "numbers")
    .then((response) => {
    //console.log(response.data.items)
    for (const property of response.data.items){
        res.push(property.link)
    }
    console.log(res);
    });

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

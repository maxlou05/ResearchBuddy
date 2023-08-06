import axios from "axios";


async function getLinks(topic : string){
    let res : string[] = [];

    const response = await axios.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyAFPfgU70wd-F8RQow2GI75vrmOBv50qXs&cx=3431c9d1ed5914f6d&q=" + topic + "research paper doctype pdf")
    //console.log(response.data.items)
    for (const property of response.data.items){
        res.push(property.link)
    }
    //console.log(response.data);
    //console.log(response.data.items)
    return res;
}

async function printResult(){
    let x = await getLinks("number theory"); // input whatever topic you want to search
    console.log(x);
}
printResult();


//---------------------IGONORE STUF BELOW -----------------------------

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

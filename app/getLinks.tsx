import * as request from 'request';

function getUserInfo(userName : string){
    request.get('https://api.github.com/users/' + userName, (response : any) =>{
        console.log(response);
        console.log("Hi");
    })
}

getUserInfo("")
// console.log("Hello World");
// var topic = prompt("What topic do you want to explore?")

// let topic = new String(prompt("What topic do you want to explore?"))

// console.log("Message" + topic)

// function getLink(topic){
//     // console.log(topic)
//     // need to get all links, so scrounge web


// }
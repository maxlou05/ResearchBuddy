import axios from "axios"

axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });


// import * as request from 'request';

// function getUserInfo(userName : string){
//     request.get('https://api.github.com/users/' + userName, (response : string) =>{
//         console.log(response);
//         console.log("Hi");
//     })
// }

// getUserInfo("")

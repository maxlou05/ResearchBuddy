//fetchHTML.tsx

//Components:
  //fetchHTML: takes a URL as input and makes an HTTP GET request 
  //to that URL using Axios. Returns the HTML content of the URL or 
  //null depending on if the request is successful or not

//------------------------------------------------------------------//

import axios from 'axios';
//const axios = require('axios').default

// Function to fetch the HTML content of a URL

//const fetchHTML = async function (url) {
export default async function fetchHTML(url:string){
  try {
    const response = await axios.get(url);
    //console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    return null;
  }
}

//module.exports.fetchHTML = fetchHTML;

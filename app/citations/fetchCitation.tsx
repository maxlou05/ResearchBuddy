//fetchHTML.tsx

//Components:
  //fetchHTML: takes a URL as input and makes an HTTP GET request 
  //to that URL using Axios. Returns the HTML content of the URL 
  //null depending on if the request is successful or not

//------------------------------------------------------------------//

import axios from 'axios'
var qs = require('qs')
//const axios = require('axios').default

// Function to fetch the HTML content of a URL

const BIBIFY_URL = 'https://api.bibify.org'
//const fetchHTML = async function (url) {
export default async function fetchCitation(url: string){
  const response = await axios.get(`${BIBIFY_URL}/api/website/?url=${url}`)
  const citeResponse = await axios.get(`${BIBIFY_URL}/api/cite?${qs.stringify({style: 'modern-language-association.csl', ...response.data})}`)
  return citeResponse.data[0]
}

//module.exports.fetchHTML = fetchHTML;

//fetchHTML.tsx

//Components:
  //fetchHTML: takes a URL as input and makes an HTTP GET request 
  //to that URL using Axios. Returns the HTML content of the URL or 
  //null depending on if the request is successful or not

//------------------------------------------------------------------//

import axios from 'axios'
var qs = require('qs')
//const axios = require('axios').default

// Function to fetch the HTML content of a URL

const BIBIFY_URL = 'https://api.bibify.org'
//const fetchHTML = async function (url) {
export default async function fetchCitations(url: string){
  const response = await axios.get(`${BIBIFY_URL}/api/website/?url=${url}`)
  const citeResponse = await axios.get(`${BIBIFY_URL}/api/cite?${qs.stringify({style: 'modern-language-association.csl', ...response.data})}`)
  console.log(citeResponse.data)
}

fetchCitations('https://www.scientificamerican.com/article/largest-prime-number-disc/')

//module.exports.fetchHTML = fetchHTML;

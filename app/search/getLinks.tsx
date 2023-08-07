import axios from 'axios'

// let trustedSites : string[] = ["https://academic.microsoft.com/home", "https://us.sagepub.com/en-us/nam/home",
// "https://www.tandfonline.com/", "https://www.sciencedirect.com/", "https://www.academia.edu/", "http://digital.library.wisc.edu/1711.web/scopus",
// "https://www.bbc.com/news", "https://www.economist.com/", "https://www.wsj.com/", "https://news.google.com/topstories?gl=US&hl=en-US&ceid=US:en&ceid=US:en",
// "https://www.theguardian.com/international", "https://edition.cnn.com/", "https://www.wikipedia.org", "https://www.britannica.com",
// "https://www.nasa.gov/", "https://www.scientificamerican.com/", "https://www.popsci.com/", 
// "https://www.nationalgeographic.com/","https://www.google.com/", "https://www.microsoft.com/en-ca/", ];


let trustedSites : string [] = ["microsoft.com", "sagepub.com", "wikipedia.org", "tandfonline.com", "sciencedirect.com",
"sciencedirect.com", "bbc.com", "economist.com", "wsj.com", "google.com", "theguardian.com", "cnn.com", "britannica.com",
"nasa.gov", "scientificamerican.com", "popsci.com", "nationalgeographic.com"]

let researchSites : string[] = ["brilliant.org", "researchgate.net", "scholar.google.ru", "jstor.org", "academia.edu", 
"wisc.edu"]



export default async function getLinks(topic: string){
  let res : {name: string, url: string, status: number}[] = [];
  

  //const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API}&cx=3431c9d1ed5914f6d&q=` + topic + "research paper doctype pdf")
  //console.log(response.data.items)
  const response = await axios.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCb_IwchS4Z4eT7P32JfWPO2B0cqG9Ffv0&cx=802145aa9dfb74ae6&q=" + topic)
  
  for (const property of response.data.items){
      var siteName = property.title;
      var siteStatus = 0;
      var siteURL = property.link;
      console.log(property.displayLink)
      for (let site of trustedSites){
        if (property.displayLink.includes(site)){
          siteStatus = 1;
        }

      }
      for (let site of researchSites){
        if (property.displayLink.includes(site)){
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
      res.push({name : siteName, url: siteURL, status : siteStatus })
  }
  //console.log(response.data);
  //console.log(response.data.items)
  return res;
}

// async function printResult(){
//   let x = await getLinks("toronto maple leafs"); // input whatever topic you want to search
//   console.log(x);
// }
// printResult();
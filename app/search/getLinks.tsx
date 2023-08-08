import axios from 'axios'

let trustedSites : string [] = ["microsoft.com", "sagepub.com", "wikipedia.org", "tandfonline.com", "bbc.com", "economist.com", "wsj.com", "google.com", "theguardian.com", "cnn.com", "britannica.com", "nasa.gov", "scientificamerican.com", "popsci.com", "nationalgeographic.com"]

let researchSites : string[] = ["brilliant.org", "researchgate.net", "scholar.google.ru", "jstor.org", "academia.edu", "sciencedirect.com", "harvard.edu", "wisc.edu"]

export default async function getLinks(topic: string){
  let res : {name: string, url: string, status: number}[] = [];
  

  const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API}&cx=3431c9d1ed5914f6d&q=` + topic)

  for (const property of response.data.items){
      var siteName = property.title;
      var siteStatus = 0;
      var siteURL = property.link;
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
      res.push({name : siteName, url: siteURL, status : siteStatus })
  }

  return res;
}
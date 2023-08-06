import axios from 'axios'

export default async function getLinks(topic: string){
  let res = [];

  const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API}&cx=3431c9d1ed5914f6d&q=` + topic)
  //console.log(response.data.items)
  for (const property of response.data.items){
      res.push(property.link)
  }
  console.log(response.data);
  //console.log(response.data.items)
  return res;
}
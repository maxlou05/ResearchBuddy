//parseData.mjs
//contains the function to parsethe HTML and extract the desired data using Cheerio

//Components
  //parseData: takes twop paramters (html and sourceURL) of the source being parsed
  //Cheerio extracts the specific data (tit, source title, authors, etc) and
  //returns them as an array

//------------------------------------------------------------------//

import cheerio from "cheerio";
//const cheerio = require('cheerio')

interface ScrapedDataItem {
  authors: string[];    
  pageTitle: string; //added
  url: string;
  publishingDate: string;
}

// Function to parse the HTML and extract the data
export default function parseData(html, url:string):ScrapedDataItem{
//const parseData = function (html, sourceURL) {
  const $ = cheerio.load(html);

  // Extracting the title of the page
  const pageTitle = $('title').text();

  // PROBLEM: might need to be modified more to the specifics of sites??
  const sourceTitle = $('h1.source-title').text();
  const authors = $('.author').map((i,el) => $(el).text()).get();
  console.log(authors)

  const publishingDate = $('.publish-date').text();

  // COMBINING: into an array of objects


  return {
    pageTitle,
    url,
    authors,
    publishingDate,
  };
}

//module.exports.parseData = parseData;




//citations.tsx
//contains the React component responsible for displaying the scraped data

//Components:
    //takes 'data' as a prop and renders the scraped data
    //maps through the array and renders each object as a separate div element
    //each object is separated by a lin break (hr element)

//------------------------------------------------------------------//

import React from 'react';

interface ScrapedDataItem {
  authors: string[];    
  pageTitle: string; //added
  url: string;
  publishingDate: string;
}

//function name repetition might cause problems later
//only working with this file bc I'm not sure how the other one works
export default function Citations ({ data } : { data: ScrapedDataItem }){
  return (

    //this is definitly not proper citation formatting...
    <div> 
        <div>
          <h2>{data.pageTitle}</h2>
          <p>Source URL: {data.url}</p>
          <p>Authors: {data.authors.join(', ')}</p>
          <p>Publishing Dates: {data.publishingDate}</p>
          <hr /> {/* Add a line break after each object */}
        </div>
    </div>
  );
};



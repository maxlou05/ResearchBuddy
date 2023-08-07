//citations.tsx is just a separate page since idk how to use this one
//combine later 

import fetchCitation from './fetchCitation';
import parseData from './parseData';
import Citations from "./citations";
import React, { useEffect, useState } from 'react';
import { create } from 'domain';

// list of URS --> will  need to import this from the other section of the program
const urls = [
    'https://www.atatus.com/blog/how-to-perform-http-requests-with-axios-a-complete-guide/#:~:text=Axios%20Get%20Request,-Axios%20can%20make&text=get()%20method%20is%20used,should%20be%20supplied%20to%20it.',
    'https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository',
    // Add more URLs here
];

export default async function Page() { //what is this function
    let json = localStorage.getItem('citations')
    let urls = []
    if (json) urls = JSON.parse(json)
    return (
        <div>
            {urls.map(async (url:string) => {

                const citationHTML = await fetchCitation(url)
                
                const createMarkup = (c=citationHTML) => {
                    return {__html: c}
                }

                return (
                    <div dangerouslySetInnerHTML={createMarkup()}/>
                )
            })}
        </div>
    )
}
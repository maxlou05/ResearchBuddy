//citations.tsx is just a separate page since idk how to use this one
//combine later 

import axios from 'axios';
import fetchHTML from './fetchHTML';
import parseData from './parseData';
import Citations from "./citations";
import React, { useEffect, useState } from 'react';

// list of URS --> will  need to import this from the other section of the program
const urls = [
    'https://www.atatus.com/blog/how-to-perform-http-requests-with-axios-a-complete-guide/#:~:text=Axios%20Get%20Request,-Axios%20can%20make&text=get()%20method%20is%20used,should%20be%20supplied%20to%20it.',
    'https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository',
    // Add more URLs here
];



export default async function Page() { //what is this function

    // console.log('aaaaaaaaa')
    // const response = await axios.get(urls[0])
    // console.log(response)

    return (
        <div>
            {urls.map(async (url:string) => {
                const html = await fetchHTML(url);
                //console.log(html)
                // if (html) {
                const data = parseData(html, url);
                // }

                return (
                    <Citations data = {data}/>
                )
            })}
        </div>
            
    )
}

//formerly: 
//export default  function Citations() { 
    //return (
        //<h1>Citation list</h1>
            
    //)
//}
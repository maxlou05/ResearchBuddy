'use client'

import React, { useState } from "react"
import HistoryIcon from '@mui/icons-material/History'
import CheckIcon from '@mui/icons-material/Check';

// prob move this to a different file
let trustedSites : string[] = ["https://scholar.google.ru", "https://www.jstor.org/", "https://academic.microsoft.com/home", "https://us.sagepub.com/en-us/nam/home",
"https://www.tandfonline.com/", "https://www.sciencedirect.com/", "https://www.academia.edu/", "http://digital.library.wisc.edu/1711.web/scopus",
"https://www.bbc.com/news", "https://www.economist.com/", "https://www.wsj.com/", "https://news.google.com/topstories?gl=US&hl=en-US&ceid=US:en&ceid=US:en",
"https://www.theguardian.com/international", "https://edition.cnn.com/", "https://www.wikipedia.org", "https://www.britannica.com",
"https://brilliant.org", "https://www.nasa.gov/", "https://www.scientificamerican.com/", "https://www.popsci.com/", 
"https://www.nationalgeographic.com/","https://www.google.com/", "https://www.microsoft.com/en-ca/" ];

export default function History({ hist }: { hist: {topic: string, links: string[]}[] }) {
    const [visible, setVisible] = useState(false)

    const clickHistory = (topic: string) => () => {
        alert(topic)
    }

    return (
        <div className={visible ? "font-sans flex flex-col p-3 w-96 rounded-2xl bg-emerald-300 bg-opacity-30" : "p-3"}>
            <HistoryIcon className="text-3xl" onClick={() => {setVisible(!visible)}}/>
            
            {visible && // if visible is true, show the react element under
                <div>
                    <p className="text-3xl p-6 font-bold">Research History</p>
                    {/* Use {} to indicate switch from HTML to JS */}
                    {hist.map((value: {topic: string, links: string[]}) => {
                        // hist.map is a function that takes another function as a parameter, and returns a list of the specified elements
                        return (
                        <div className="flex flex-col justify-start">
                            {/* className is for styling with tailwind, see tailwind */}
                            <p className="text-xl ms-10 me-10 font-medium p-3 hover:text-sky-500" onClick={clickHistory(value.topic)}>{value.topic}</p>
                            {value.links.map((link: string) => {
                                return (
                                    trustedSites.includes(link) ? <a href={link} target="_blank" rel="noopener noreferrer" className="text-m ms-20 me-10 font-light p-1 hover:text-sky-500">{link}<CheckIcon/></a> : <a href={link} target="_blank" rel="noopener noreferrer" className="text-m ms-20 me-10 font-light p-1 hover:text-sky-500">{link}</a>
                                )
                            })}
                            <hr className="ms-10 me-10 min-w-fit border-slate-500 border-opacity-40"/>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}

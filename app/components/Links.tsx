'use client'

import React, { useState } from "react"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import VerifiedIcon from '@mui/icons-material/Verified'
import SchoolIcon from '@mui/icons-material/School'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Link from "next/link"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css'
import fetchCitation from "../citations/fetchCitation"
import Page from "../citations/page"

interface Link {
    name: string,
    url: string,
    status: number
}

export default function Links({ links, onCite, onVisit } : { links: Link[], onCite: (link: Link) => void, onVisit: (link: Link) => void }) {
    const [autoCite, setAutoCite] = useState(false)

    const cite = (link: Link) => async () => {
        onCite(link)
        let citeHTML = await fetchCitation(link.url)
        let json = localStorage.getItem('citations')
        let citations = []
        if(json) citations = JSON.parse(json)
        if(!citations.find((element: string) => {return element==citeHTML})) citations.push(citeHTML)
        citations.sort()
        localStorage.setItem('citations', JSON.stringify(citations))
    }

    const onClickLink = (link: Link) => () => {
        if(autoCite) onCite(link)
        onVisit(link)
    }

    return (
        <div className="flex flex-col justify-start font-sans gap-4 w-full">
            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">{`${links.length} Results`}</p>
                <div className="flex flex-col">
                    <FormControlLabel control={<Switch checked={autoCite} onChange={() => {setAutoCite(!autoCite)}} />} label="Auto-Cite" />
                    <Popup trigger={<button className="bg-transparent hover:bg-sky-500 text-sky-700 font-medium hover:text-white py-2 px-4 border border-sky-500 hover:border-transparent rounded text-sm">
                            View Citations
                        </button>} modal nested>
                        <Page/>
                    </Popup>
                </div>
            </div>
            
            {links.map((link: Link) => {
                switch (link.status) {
                    case 1:
                        return (
                            <div className="flex flex-col font-sans">
                                <div className="flex flex-row justify-start p-1 gap-5 items-center">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={onClickLink(link)} className="text-xl p-3 hover:text-sky-500">{link.name}</a>
                                    <VerifiedIcon fontSize="small" className="self-center fill-sky-600"/>
                                    <BookmarkAddIcon onClick={cite(link)}/>
                                </div>
                                <p className="text-sm ms-10 -mt-4">{link.url}</p>
                            </div>
                        )
                    case 2:
                        return (
                            <div className="flex flex-col font-sans">
                                <div className="flex flex-row justify-start p-1 gap-5 items-center">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={onClickLink(link)} className="text-xl p-3 hover:text-sky-500">{link.name}</a>
                                    <SchoolIcon fontSize="small" className="self-center fill-slate-600 dark:fill-slate-800"/>
                                    <BookmarkAddIcon onClick={cite(link)}/>
                                </div>
                                <p className="text-sm ms-10 -mt-4">{link.url}</p>
                            </div>
                        )
                    default:
                        return (
                            <div className="flex flex-col font-sans">
                                <div className="flex flex-row justify-start p-1 gap-5 items-center">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={onClickLink(link)} className="text-xl p-3 hover:text-sky-500">{link.name}</a>
                                    <BookmarkAddIcon onClick={cite(link)}/>
                                </div>
                                <p className="text-sm ms-10 -mt-4">{link.url}</p>
                            </div>
                        )
                }
            })}
        </div>
    )
}
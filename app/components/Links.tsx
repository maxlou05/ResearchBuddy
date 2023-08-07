'use client'

import React, { useState } from "react"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import fetchCitation from "../citations/fetchCitation"

interface Link {
    name: string,
    url: string,
    status: number
}

export default function Links({ links, onCite, onVisit } : { links: Link[], onCite: (url: string) => void, onVisit: (link: Link) => void }) {
    const [autoCite, setAutoCite] = useState(false)

    const cite = (url: string) => async () => {
        onCite(url)
        let citeHTML = await fetchCitation(url)
        let json = localStorage.getItem('citations')
        let citations = []
        if(json) citations = JSON.parse(json)
        if(!citations.find((element: string) => {return element==citeHTML})) citations.push(citeHTML)
        localStorage.setItem('citations', JSON.stringify(citations))
    }

    const onClickLink = (link: Link) => () => {
        if(autoCite) onCite(link.url)
        onVisit(link)
    }

    return (
        <div className="flex flex-col justify-start font-sans gap-4">
            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">{`${links.length} Results`}</p>
                <FormControlLabel control={<Switch checked={autoCite} onChange={() => {setAutoCite(!autoCite)}} />} label="Auto-Cite" />
            </div>
            
            {links.map((link: Link) => {
                return (
                    <div className="flex flex-col font-sans">
                        <div className="flex flex-row justify-start p-1 gap-3 items-center">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={onClickLink(link)} className="text-xl p-3 hover:text-sky-500">{link.name}</a>
                            <BookmarkAddIcon onClick={cite(link.url)}/>
                        </div>
                        <p className="text-sm ms-10 -mt-4">{link.url}</p>
                    </div>
                )
            })}
        </div>
    )
}
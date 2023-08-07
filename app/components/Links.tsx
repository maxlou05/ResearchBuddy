'use client'

import React, { useState } from "react"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

export default function Links({ links, onCite, onVisit } : { links: {name: string, url: string, status: number}[], onCite: (url: string) => void, onVisit: (url: string) => void }) {
    const [autoCite, setAutoCite] = useState(false)

    const cite = (url: string, auto=true) => () => {
        if(auto) onCite(url)
    }

    const onClickLink = (url: string) => () => {
        if(autoCite) onCite(url)
        onVisit(url)
    }

    return (
        <div className="flex flex-col justify-start font-sans gap-4">
            <div className="flex flex-row justify-between">
                <p className="text-2xl font-bold">{`${links.length} Results`}</p>
                <FormControlLabel control={<Switch checked={autoCite} onChange={() => {setAutoCite(!autoCite)}} />} label="Auto-Cite" />
            </div>
            
            {links.map((link: {name: string, url: string, status: number}) => {
                return (
                    <div className="flex flex-col font-sans">
                        <div className="flex flex-row justify-start p-1 gap-3 items-center">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={onClickLink(link.url)} className="text-xl p-3 hover:text-sky-500">{link.name}</a>
                            <BookmarkAddIcon onClick={cite(link.url)}/>
                        </div>
                        <p className="text-sm ms-10 -mt-4">{link.url}</p>
                    </div>
                    
                )
            })}
        </div>
    )
}
'use client'

import React from "react"
import SearchIcon from '@mui/icons-material/Search'
import LinkIcon from '@mui/icons-material/Link'

export default function Subtopic({ title } : { title: string }) {
    function clickIcon() {
        alert(`opening links for '${title}'!`)
    }

    function clickTitle() {
        alert(`searching '${title}' again`)
    }

    return (
        <div onClick={clickTitle} className="flex flex-row justify-start font-sans p-3 gap-3 items-center hover:bg-slate-300 rounded-xl">
            <p className="text-xl">{title}</p>
            <SearchIcon/>
        </div>
    )
}
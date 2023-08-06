'use client'

import React from "react"
import SearchIcon from '@mui/icons-material/Search'

export default function SubTopic({ title, onTitleClick } : { title: string, onTitleClick?: () => void }) {
    return (
        <div onClick={onTitleClick} className="flex flex-row justify-start font-sans p-3 gap-3 items-center hover:bg-slate-300 rounded-xl">
            <p className="text-xl">{title}</p>
            <SearchIcon/>
        </div>
    )
}
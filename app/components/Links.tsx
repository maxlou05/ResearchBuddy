import React from "react"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'

export default function Links({ link, onCite } : { link: {name: string, url: string, status: number}, onCite?: () => void }) {
    return (
        <div className="flex flex-row justify-start font-sans p-3 gap-3 items-center">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-xl p-3 hover:text-sky-500">{link.name}</a>
            <BookmarkAddIcon onClick={onCite}/>
        </div>
    )
}
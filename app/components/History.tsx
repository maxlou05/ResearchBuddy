'use client'

import React, { useState } from "react"
import HistoryIcon from '@mui/icons-material/History'
import VerifiedIcon from '@mui/icons-material/Verified'
import SchoolIcon from '@mui/icons-material/School'

export default function History({ hist, onRevisit }: { hist: {topic: string, links: {name: string, url: string, status: number}[]}[], onRevisit: (topic: string) => void }) {
    const [visible, setVisible] = useState(false)

    const clickHistory = (topic: string) => () => {
        onRevisit(topic)
    }

    return (
        <div className={visible ? "font-sans flex flex-col p-3 w-96 rounded-2xl bg-emerald-300 bg-opacity-30" : "p-3"}>
            <HistoryIcon className="text-3xl" onClick={() => {setVisible(!visible)}}/>
            
            {visible && // if visible is true, show the react element under
                <div>
                    <p className="text-3xl p-6 font-bold">Research History</p>
                    {/* Use {} to indicate switch from HTML to JS */}
                    {hist.map((value: {topic: string, links: {name: string, url: string, status: number}[]}) => {
                        // list.map is a function that takes another function as a parameter, and returns a list of the specified elements
                        return (
                        <div className="flex flex-col justify-start">
                            {/* className is for styling with tailwind, see tailwind */}
                            <p className="text-xl ms-10 me-10 font-medium p-3 hover:text-sky-500 break-all" onClick={clickHistory(value.topic)}>{value.topic}</p>
                            {value.links.map((link: {name: string, url: string, status: number}) => {
                                switch (link.status) {
                                    case 1:
                                        return (
                                            <div className="flex flex-row gap-3 ms-20 me-10">
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-m font-light p-1 hover:text-sky-500">{link.name}</a>
                                                <VerifiedIcon fontSize="small" className="self-center fill-sky-600"/>
                                            </div>
                                        )
                                    case 2:
                                        return (
                                            <div className="flex flex-row gap-3 ms-20 me-10">
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-m font-light p-1 hover:text-sky-500">{link.name}</a>
                                                <SchoolIcon fontSize="small" className="self-center fill-slate-600 dark:fill-slate-800"/>
                                            </div>
                                        )
                                    default:
                                        return (
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-m font-light ms-20 me-10 p-1 max-w-min hover:text-sky-500">{link.name}</a>
                                        )
                                }
                            })}
                            <hr className="ms-10 me-10 min-w-fit border-slate-500 border-opacity-40"/>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}

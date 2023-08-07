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
        <div className={visible ? "font-sans flex flex-col p-4 w-2/5 -mt-3 rounded-2xl bg-sky-500 bg-opacity-30" : "p-4 -mt-3"}>
            {!visible &&
                <HistoryIcon className="text-3xl" onClick={() => {setVisible(!visible)}}/>
            }
            
            {visible && // if visible is true, show the react element under
                <div className="overflow-auto">
                    <div className="flex flex-row gap-4">
                        <HistoryIcon className="text-3xl" onClick={() => {setVisible(!visible)}}/>
                        <p className="text-2xl font-bold">Research History</p>
                    </div>
                    

                    {/* Use {} to indicate switch from HTML to JS */}
                    {hist.map((value: {topic: string, links: {name: string, url: string, status: number}[]}) => {
                        // list.map is a function that takes another function as a parameter, and returns a list of the specified elements
                        return (
                        <div className="flex flex-col justify-start" key={value.topic}>
                            {/* className is for styling with tailwind, see tailwind */}
                            <p className="text-xl ms-6 me-6 font-medium p-3 hover:text-sky-500 break-words" onClick={clickHistory(value.topic)}>{value.topic}</p>
                            {value.links.map((link: {name: string, url: string, status: number}) => {
                                switch (link.status) {
                                    case 1:
                                        return (
                                            <div className="flex flex-row gap-3 ms-10 me-6" key={link.name}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-m font-light p-1 hover:text-sky-500 text-overflow">{link.name}</a>
                                                <VerifiedIcon fontSize="small" className="self-center text-sky-600"/>
                                            </div>
                                        )
                                    case 2:
                                        return (
                                            <div className="flex flex-row gap-3 ms-10 me-6" key={link.name}>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-m font-light p-1 hover:text-sky-500 text-overflow">{link.name}</a>
                                                <SchoolIcon fontSize="small" className="self-center text-slate-600 dark:text-slate-800"/>
                                            </div>
                                        )
                                    default:
                                        return (
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.name} className="text-m font-light ms-10 me-6 p-1 max-w-min hover:text-sky-500 text-overflow">{link.name}</a>
                                        )
                                }
                            })}
                            <hr className="ms-6 me-6 min-w-fit border-slate-500 border-opacity-40"/>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}

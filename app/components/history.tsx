'use client'

import React, { useState } from "react"
import HistoryIcon from '@mui/icons-material/History'

export default function History({ hist }: { hist: string[] }) {
    const [visible, setVisible] = useState(false)

    const clickHistory = (topic: string) => () => {
        alert(topic)
    }

    return (
        <div className={visible ? "font-sans flex flex-col p-3 w-96 rounded-2xl bg-emerald-300 bg-opacity-30" : "p-3"}>
            <HistoryIcon className="text-3xl" onClick={() => {setVisible(!visible)}}/>
            {visible && 
                <div>
                    <p className="text-3xl p-6 font-bold">Research History</p>
                    {hist.map((value: string, index: number, array: string[]) => {
                        return (
                        <div onClick={clickHistory(value)} className="flex flex-col justify-start hover:bg-emerald-300 rounded-xl">
                            <p className="text-xl ms-10 font-light p-3">{value}</p>
                            <hr className="ms-10 me-2 min-w-fit border-slate-500 border-opacity-40"/>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}

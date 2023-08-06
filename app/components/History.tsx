'use client'

import React, { useState } from "react"
import HistoryIcon from '@mui/icons-material/History'

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
          // list.map is a function that takes another function as a parameter, and returns a list of the specified elements
            return (
              <div className="flex flex-col justify-start">
                {/* className is for styling with tailwind, see tailwind */}
                <p className="text-xl ms-10 me-10 font-medium p-3 hover:text-sky-500" onClick={clickHistory(value.topic)}>{value.topic}</p>
                {value.links.map((link: string) => {
                    return (<a href={link} target="_blank" rel="noopener noreferrer" className="text-m ms-20 me-10 font-light p-1 hover:text-sky-500">{link}</a>)
                })}
                <hr className="ms-10 me-10 min-w-fit border-slate-500 border-opacity-40"/>
              </div>
              )
          })}
        </div>
      }
    </div>
  )
}
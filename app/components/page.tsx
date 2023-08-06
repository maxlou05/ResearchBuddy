'use client'

import React from "react"
import SubTopic from "./SubTopic"
import History from "./History"
import Links from "./Links"

const links = [{name: "Google", url: "https://www.google.com/", status: 1}, {name: "Microsoft", url: "https://www.microsoft.com/en-ca/", status: 1}, {name: "Yahoo!", url: "https://ca.yahoo.com/?p=us&guccounter=1", status: 0}, {name: "Burnside's Lemma | Brilliant", url: "https://brilliant.org/wiki/burnsides-lemma/", status: 2}]
const history = [{topic: "Subtopic 1", links: links}, {topic: "Fire", links: links}, {topic: "Water", links: links}]
const subtopics = ["Fire", "Water"]

export default function Test() {
    return (
        <div className="flex flex-row gap-12">
            <div className="flex flex-col justify-start">
                {subtopics.map((value: string, index: number, array: string[]) => {
                    return (
                        <SubTopic title={`${value}`} onTitleClick={() => {alert(`${value} has been clicked`)}}></SubTopic>
                    )
                })}
            </div>
            
            <History hist={history} onRevisit={(topic: string) => {alert(`${topic} has been clicked`)}}/>

            <div className="flex flex-col justify-start">
                {links.map((value: {name: string, url: string, status: number}) => {
                    return (
                        <Links link={value} onCite={() => {alert(`${value.name} has been cited`)}}/>
                    )
                })}
            </div>
        </div>
    )
}

import React from "react"
import Subtopic from "./subtopic"
import History from "./history"

const links = [{name: "Google", url: "https://www.google.com/", status: 2}, {name: "Microsoft", url: "https://www.microsoft.com/en-ca/", status: 1}, {name: "Yahoo!", url: "https://ca.yahoo.com/?p=us&guccounter=1", status: 0}]
const history = [{topic: "Subtopic 1", links: links}, {topic: "Fire", links: links}, {topic: "Water", links: links}]
const subtopics = ["Fire", "Water"]

export default function Test() {
    return (
        <div className="flex flex-row gap-12">
            <div className="flex flex-col justify-start">
                {subtopics.map((value: string, index: number, array: string[]) => {
                return (
                    <Subtopic title={`${value}`}></Subtopic>
                )
            })}
            </div>
            
            <History hist={history}/>
        </div>
    )
}

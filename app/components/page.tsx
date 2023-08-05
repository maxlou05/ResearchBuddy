import React from "react"
import Subtopic from "./subtopic"
import History from "./history"

const subtopics = ["Subtopic 1", "Fire", "Water"]

export default function Test() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col justify-start">
                {subtopics.map((value: string, index: number, array: string[]) => {
                return (
                    <Subtopic title={`${value}`}></Subtopic>
                )
            })}
            </div>
            
            <History hist={subtopics}/>
        </div>
    )
}

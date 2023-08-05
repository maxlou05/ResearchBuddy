import Subtopic from "./subtopic"

const subtopics = ["Subtopic 1", "Fire", "Water"]

export default function Test() {
    return (
        subtopics.map((value: string, index: number, array: string[]) => {
            return (
                <Subtopic title={`${value}`}></Subtopic>
            )
        })
    )
}

'use client'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Subtopic({ title } : { title: string }) {
    function clickIcon() {
        alert(`opening links for '${title}'!`)
    }

    function clickTitle() {
        alert(`searching '${title}' again`)
    }

    return (
        <div className="flex flex-row justify-start font-sans p-3 gap-3 items-center" onSubmit={(e) => {e.preventDefault()}}>
            <p className="text-xl hover:text-sky-500" onClick={clickTitle}>{title}</p>
            <KeyboardArrowRightIcon onClick={clickIcon} className="transition-transform hover:translate-x-2 motion-reduce:transform-none"/>
        </div>
    )
}
'use client'

import SearchIcon from '@mui/icons-material/Search'

export default function SubTopic({ title, onTitleClick, onArrowClick } : { title: string, onTitleClick: Function, onArrowClick: Function }) {
  return (
    <div className="flex flex-row justify-start font-sans p-3 gap-3 items-center">
      <p className="text-xl hover:text-sky-500" onClick={onTitleClick}>{title}</p>
      <SearchIcon onClick={onArrowClick} />
      {/* <LinkIcon onClick={clickIcon} className=""/> */}
    </div>
  )
}
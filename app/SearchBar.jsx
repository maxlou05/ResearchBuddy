'use client'

import { useState, useEffect } from 'react'
import getTopics from './search/getTopics'
import SubTopic from './components/SubTopic'
import getLinks from './search/getLinks'
import History from './components/History'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [history, setHistory] = useState([])
  const [links, setLinks] = useState([])

  const searchTopics = async (e=null, q=query, updateHist=true) => {
    if(e) e.preventDefault()
    // console.log(await getLinks('cheese'))

    const topics = await getTopics(q, 10)
    const links = await getLinks(q)

    console.log(topics, links)
    setLinks(links)
    setResults(topics)
    if(updateHist) setHistory([...history, {topic: q, links: links}])
  }

  const topicClick = (topic) => async () => {
    setQuery(topic)
    await searchTopics(null, topic)
  }

  const historyClick = async (topic) => {
    setQuery(topic)
    await searchTopics(null, topic, false)
  }

  return (
    <>
      <div className="flex flex-col space-between">
        <form onSubmit={searchTopics}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative" style={{width: 75 + 'em'}}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" value={query} onChange={() => setQuery(event.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to research..." required/>
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <div className="flex flex-row">
          
          <History hist={history} onRevisit={historyClick}/>

          <div>
            {results.map((topic) => (
              <SubTopic title={topic} onTitleClick={topicClick(topic)}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
import React from "react"
import SearchBar from './SearchBar'

export default function Home() {

  return (
    <main className="flex min-h-screen font-sans flex-col items-center p-36">
      <p className="text-6xl font-bold dark:text-white mt-12">ResearchBuddy</p>
      <img src="/logo.png" alt="LOGO" width={256} height={256} className="mb-10"/>
      {/* <p className="text-slate-500 text-lg">Research faster today</p> */}
      <SearchBar />
    </main>   
  )
}

import React from "react"
import SearchBar from './SearchBar'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-4xl text-gray-900 dark:text-white">ResearchBuddy</p>
      <SearchBar />
    </main>
  )
}

import getTopics from "./getTopics"

export default async function Search() {
  console.log(await getTopics('Number Theory'));
  return (
      <p>Search</p>
  )
}
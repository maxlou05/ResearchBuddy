import { Configuration, OpenAIApi } from "openai"

export default async function getTopics(query: string, top_n: number) {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration);

  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `List the subtopics of ${query}. Do not give any explantion or intro/concluding paragrpahs. Put them in one line, seprated by nothing but one comma. Do not give numbered lists (ie. 1. 2., etc.)`}],
  });
  
  const content = chatCompletion.data.choices[0].message.content
  let topics = []

  if (content.includes('1. ')) {
    let splitNumberedList = content.split('. ')
    splitNumberedList = splitNumberedList.slice(1, splitNumberedList.length)
    for (const item in splitNumberedList) {
      topics.push(item.slice(0, -2))
    }
    return topics
  }

  topics = chatCompletion.data.choices[0].message.content.split(', ')

  return topics.slice(0, top_n)
}
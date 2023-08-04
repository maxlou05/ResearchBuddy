import { Configuration, OpenAIApi } from "openai"
import 'dotenv/config'

export default async function getTopics(query) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration);

  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `List the subtopics of ${query}. Do not give any explantion or intro/concluding paragrpahs. Put them in one line, seprated by nothing but one comma.`}],
  });
  
  const topicsString = chatCompletion.data.choices[0].message.content;
  return topicsString.split(', ');
}
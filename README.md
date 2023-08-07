
# Research Buddy -  A web app that streamlines  formal research

## Inspiration 🔥

Researching is a pain, particularly when keeping track of an ever-growing list of citations. If only we had an assistant who could automatically keep track of all the trustworthy sites we found and cite them automatically… Hence, ResearchBuddy!

## What it does 🔎

ResearchBuddy helps you explore subjects all while keeping track of all the sites you’ve visited and citing them automatically! It finds related subtopics to satisfy your curiosity and scours the internet for the most reliable, relevant, and scholarly sources for in-depth learning and referencing.

## How we built it 💻

We used the Next.js framework to build our React webapp, and used many different APIs and tools to help us. Namely, we used OpenAI’s GPT 3.5 API to generate related subtopics of a query, Google’s Custom Search API to find reliable and scholarly sources, and Bibify’s bibliography API to help webscrape and generate citations for websites.

## Challenges we ran into ❌

One challenge that we ran into was parsing the data we received form the APIs, especially the GPT 3.5. The data it outputs is not always very regular, so we had to try out many different prompts until we found one that was more or less consistent. Another challenge was finding search results that were actually related to the topic, as many results were completly unrelated to the topic, but they just contained the word in the page title.

## Accomplishments that we're proud of 💯

We’re proud to have finished a complete version of our app, with all the functionalities that we set out to achieve in the beginning. Although the accuracy of our searches and citations can still be improved, its results are still very usable.

## How to Run

Make sure you have installed at least Node v18 and have [Google Search API](https://developers.google.com/custom-search/v1/overview) and [OpenAI API](https://openai.com/blog/openai-api) keys.
```
git clone https://github.com/maxlou05/ResearchBuddy.git
cd ResearchBuddy
```

Place the Google Search API and OpenAI API keys into ```.env.local``` in ```/ResearchBuddy```  in the following manner:
```
NEXT_PUBLIC_OPENAI_API_KEY={your GoogleAPI key}
NEXT_PUBLIC_GOOGLE_SEARCH_API={your Google Search API key}
```

To run the development server:
```npm run dev```


## What we learned 📗

We learned a lot about the web development process and familiarized ourselves with the necessary tools.

## What's next for ResearchBuddy 📈

A few features we were hoping to add are:

-   Searching for books
    
-   Sorting the results by type (ie book, journal, blog, news, etc.)
    
-   Improving accuracy of searches by implementing a feedback hub where users can share trusted sources
    
-   Expanding our list of verified websites
    
-   Adding a Login/Authentication page
    

  

## What languages, frameworks, platforms, cloud services, databases, APIs, or other technologies did you use?

TypeScript, Javascript, HTML, CSS, Google Custom Search JSON API, OpenAI GPT 3.5API, Bibify API

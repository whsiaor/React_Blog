# React Blog

This is a blog created with React which allows you to add and delete posts, and fetch data from external sources.

## Project Overview
My goal was to apply what I learned by building a blog with React.
- First, I built basic components like the navbar, blog list, etc.
- I set up a mock database to simulate a running server fetching data.
- I implemented routing to render different page components.

## Project Navigation
- I created a reusable custom hook called `useFetch` for data fetching.
- Integrated `AbortController` into `useFetch` to handle aborted requests.
- Simulated a RESTful API using JSON Server to handle GET, POST, PUT, and DELETE methods.
- Used React Router and the `<Link>` component to update the URL and render components without refreshing the entire page, enhancing the user experience.

## Future Improvements
- Currently, the blog content is plain text. I plan to support Markdown syntax, rendering it as HTML.
- Add search, categorization, and user authentication features.

## Installation

Change to your working directory and run:
```sh
npm install
```

### Install JSON Server
```sh
npm install -g json-server
```

### Start the Server
```sh
npx json-server --watch data/db.json --port 8000
```
Adjust the path to `data/db.json` or the port if necessary. If the port changes, update the port in the `useFetch` hook in `BlogDetails.js`.

### Run React
```sh
npm start
```

Now, you can try this app by copying and pasting the URL into your browser.
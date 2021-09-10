In Day 6 of "JavaScript 30" course I have learnt to make an AJAX Typeahead using Vanilla JavaScript. 

We fetch a large JSON file containing city names, state names and population etc. We use the fetch API to fetch it.

The fetch returns a promise 🤝 from which data can be accessed using the .then() function. 

Here, the JSON file is fetched as raw data, so we need to convert it to JSON by writing: blob.JSON(), where blob is just a name given to the file received through fetch.

We have an empty cities[] array in which we will push the data fetched. Learnt the use of the spread() to push each individual item in cities[].🤩

Then we generate a Regular Expression(regex) from the text entered into the search bar so that we can match the regex with the city name or the state name.

WHEN SOMEONE TYPES IN THE SEARCH BOX, WE NEED TO RUN A FUNCTION THAT TAKES THE MASSIVE ARRAY AND FILTERS IT INTO A SUBSET. SO WE make a function findMatches().

WHENEVER SOMEONE CHANGES THE VALUE IN THE SEARCH BOX, WE WILL CALL displayMatches() TO DISPLAY ALL THE POSSIBLE MATCHES. For this we call the findMatches() inside the displayMatches()

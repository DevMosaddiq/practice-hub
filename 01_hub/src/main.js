const URI =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-12-25&sortBy=publishedAt&apiKey=c67419cb12a347f4927e7bef4f29b7ea";

async function getData() {
  const response = await fetch(URI);
  const data = await response.json();
  console.log(data);
}

getData();

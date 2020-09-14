const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");
const { getQuotesByAuthor } = require("./utils");

const PORT = process.env.PORT || 4002;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.get("/api/quotes", (req, res, next) => {
  if (!req.query.person) {
    res.send({ quotes: quotes });
  } else {
    // console.log(req.query.person);
    const quotesByAuthor = getQuotesByAuthor(quotes, req.query.person);
    res.send({ quotes: quotesByAuthor });
  }
});

app.post("/api/quotes", (req, res, next) => {
  if (!req.query.person || !req.query.quote) {
    console.log("no puedo");
    res.status(400).send("Information incomplete");
  } else {
    const newQuote = { quote: req.query.quote, person: req.query.person };
    quotes.push(newQuote);
    res.send({ quote: newQuote });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

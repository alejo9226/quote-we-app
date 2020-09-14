const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

const getQuotesByAuthor = (arr, author) => {
  // console.log(author);
  const foundAuthor = arr.find((quote) => {
    return quote.person === author;
  });
  if (foundAuthor) {
    const quotesByAuthor = arr.filter((quote) => {
      return quote.person === author;
    });
    return quotesByAuthor;
  } else {
    return [];
  }
};

module.exports = {
  getRandomElement,
  getQuotesByAuthor,
};

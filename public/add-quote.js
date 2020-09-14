const submitButton = document.getElementById("submit-quote");
const newQuoteContainer = document.getElementById("new-quote");

submitButton.addEventListener("click", () => {
  const quote = document.getElementById("quote").value;
  const person = document.getElementById("person").value;

  fetch(`/api/quotes?quote=${quote}&person=${person}`, {
    method: "POST",
  })
    .then((response) => {
      if (response.ok) {
        response.json();
      } else {
        newQuoteContainer.innerHTML = `<p>Your request is missing information. </p>
      <p>Code: ${response.status}</p>
      <p>${response.statusText}</p>`;
      }
    })
    .then(({ quote }) => {
      const newQuote = document.createElement("div");
      newQuote.innerHTML = `
    <h3>Congrats, your quote was added!</h3>
    <div class="quote-text">${quote.quote}</div>
    <div class="attribution">- ${quote.person}</div>
    <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
    `;
      newQuoteContainer.appendChild(newQuote);
    });
});

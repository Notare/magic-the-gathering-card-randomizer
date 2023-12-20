document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url = "https://api.scryfall.com/cards/random";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const cardImg = data.image_uris.normal;
      document.querySelector("img").src = cardImg;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

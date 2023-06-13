let card = document.getElementById("thecard");
const suits = ["hearts", "spades", "clubs", "diamonds"];
const cardContent = [2, 3, 4, 5, 6, 7, 8, 9, "jack", "queen", "king", "ace"];
card.addEventListener("mouseenter", function() {
  let text = document.getElementById("text");
  let suitRandom = suits[Math.floor(Math.random() * suits.length)];
  let cardRandom = cardContent[Math.floor(Math.random() * cardContent.length)];
  let face = document.getElementById("cardface");
  if (
    cardRandom === "jack" ||
    cardRandom === "queen" ||
    cardRandom === "king"
  ) {
    face.src = `/src/SVG-cards-1.3/${cardRandom}_of_${suitRandom}2.svg`;
  } else {
    face.src = `/src/SVG-cards-1.3/${cardRandom}_of_${suitRandom}.svg`;
  }

  text.innerHTML = `Your card is the <span id = "color">${cardRandom}</span> of <span id = "color">${suitRandom}</span>`;
  let color = document.querySelectorAll("#color");
  if (suitRandom === "hearts" || suitRandom === "diamonds") {
    color.forEach(element => {
      element.style.color = "red";
    });
  } else {
    color.forEach(element => {
      element.style.color = "black";
    });
  }
});

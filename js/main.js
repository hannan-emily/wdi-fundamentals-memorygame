
var cards = ["queen", "queen", "king", "king"];

var cardOne = cards[0];
cardsInPlay.push('queen');
console.log("User flipped queen");

var cardTwo = cards[3];
cardsInPlay.push('king');
console.log("user flipped king");

var cardsInPlay = [];

var checkForMatch = function (){
    if (cardsInPlay[0] === cardsInPlay[1])
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
}

var flipCard = function(cardId) {
    console.log("User flipped " + cardOne);
    console.log("User flipped" + cards[cardId]);
}
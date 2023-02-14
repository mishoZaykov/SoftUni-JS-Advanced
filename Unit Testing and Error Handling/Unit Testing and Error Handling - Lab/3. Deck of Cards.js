function deckOfCards(cards) {
  let result = [];

  for (const cardToMatch of cards) {
    let face = cardToMatch.slice(0,-1);
    let suit = cardToMatch.slice(-1);
    let card ='';
    
    try {
      card = playingCards(face,suit);
      result.push(card)
    } catch (error) {
      result = [`Invalid card: ${cardToMatch}`]
    }
  }
  console.log(result.join(' '));


  function playingCards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663',
    }
  
    if(!faces.includes(face) || !suits[suit]){
      throw new Error('Error')
    }
  
  
    const card = {
      face,
      suit: suits[suit],
      toString(){
        return this.face + this.suit;
      }
    }
  
    return card;
  }
}
deckOfCards(['AS', '10D', 'KH', '2C'])
import React from "react";

/** Renders a card
 *
 * Props:
 * -card: {deckId, currentCard, noCards}
 */
function Card({ card }) {
  console.log(currentCard, "CurrentCard");
  return (
    <>
      {card.noCards
      ? <p>Error: no cards remaining!</p>
      : <img src={`${card.currentCard.image}`}></img>}
    </>
  );

}

export default Card;
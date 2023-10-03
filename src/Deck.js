import React, { useEffect, useState } from "react";
import Card from "./Card";

const DECK_API_URL = "https://deckofcardsapi.com/api/deck";

/** Deck: calls API for card deck and single card
 *
 * State:
 * -cards: {deckId, currentCard}
 *
 * App -> Deck -> Card
 */
function Deck() {
  const [cards, setCards] = useState({ deckId: null, currentCard: null });

  useEffect(function () {
    async function fetchDeck() {
      const response = await fetch(`${DECK_API_URL}/new/shuffle/?deck_count=1`);
      const deckData = await response.json();
      setCards(curr => ({ ...cards, deckId: deckData.deck_id }));
    }
    fetchDeck();
  }, []);

  if (!cards.deckId) {
    return <p>Loading...</p>;
  }

  async function handleClick() {
    if(cards.remaining === 0){
      setCards(() => ({...cards, noCards: true}))
      return
    }
    const response = await fetch(`${DECK_API_URL}/${cards.deckId}/draw/`);
    const cardData = await response.json();
    setCards(curr => ({
      ...cards,
      currentCard: cardData.cards[0],
      remaining: cardData.remaining }));
  }

  return (
    <div>
      <button onClick={handleClick}>Draw a card</button>
      {cards.currentCard && <Card card={cards} />}
    </div>
  );
}

export default Deck;
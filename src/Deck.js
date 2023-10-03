import React, { useEffect, useState } from "react";
import Card from "./Card";

const DECK_API_URL = "https://deckofcardsapi.com/api/deck"

/** Deck
 *
 * State:
 * -deck
 *
 */
function Deck() {
  const [cards, setCards] = useState({deckId: null, currentCard: null})

  useEffect(function () {
    async function fetchDeck() {
      const response = await fetch(`${DECK_API_URL}/new/shuffle/?deck_count=1`);
      const deckData = await response.json();
      setCards(curr => ({...cards, deckId: deckData.deck_id}))
    }
    fetchDeck();
  }, []);

  if (!cards.deckId) {
    return <p>Loading...</p>
  }
  console.log("deckId=", cards.deckId)

  async function handleClick(){
    const response = await fetch(`${DECK_API_URL}/${cards.deckId}/draw`)
    const cardData = await response.json();
    setCards(curr => ({...cards, currentCard: cardData}))
    console.log("cards=", cards)
  }

  return (
    <div>
      <button onClick={handleClick}>Draw a card</button>
    </div>
  )
}

export default Deck;
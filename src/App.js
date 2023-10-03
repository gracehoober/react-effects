import React from 'react';
import Deck from './Deck';
import './App.css';

/** Renders Deck */
function App() {
  return (
    <div className="App">
      <Deck />
    </div>
  );
}

export default App;

/**
 * fetch deck- once (use effect())
 * fetch a card from the deck- depends on a button
 *
 * state: {deck: card: }??
 *
 * Components
 * -App
 *
 * -Deck: make request to get initial deck
 *  --shows a button
 *
 * -Card:
 *  --pass props of the card info
 */

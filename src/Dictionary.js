import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [defaultWord, setDefaultWord] = useState("");

  function setDefaultValue(event) {
    setDefaultWord(event.target.value);
  }

  function setValuesFromApiResponse(response) {
    console.log(response.data[0]);
  }

  function searchForAWord(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${defaultWord}`)
      .then(setValuesFromApiResponse);
  }

  return (
    <div className="App-content">
      <h1 className="App-header">Dictionary</h1>
      <h2>What word are you looking for?</h2>
      <form onSubmit={searchForAWord}>
        <input type="search" onChange={setDefaultValue}></input>
      </form>
      <div className="word-information">
        <div className="word-header">Yoga: {defaultWord}</div>
        <div className="word-syllable">yo•ga</div>
        <div>noun</div>
        <div className="word-pronunciation">/ˈyōɡə/</div>
        <div className="word-meaning">
          <p>
            A Hindu spiritual and ascetic discipline, a part of which, including
            breath control, simple meditation, and the adoption of specific
            bodily postures, is widely practiced for health and relaxation.
          </p>
        </div>
        <div>
          <div>Collage</div>
        </div>
      </div>
      <footer>
        This project was coded by Camila Avellaneda, is open-source on Github
        and hosted on Netlify
      </footer>
    </div>
  );
}

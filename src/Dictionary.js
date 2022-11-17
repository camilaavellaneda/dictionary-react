import React, { useState } from "react";
import axios from "axios";
import WordDefinition from "./WordDefinition";

export default function Dictionary() {
  const [defaultWord, setDefaultWord] = useState("");
  let [ready, setReady] = useState(null);
    useState("");

  function setDefaultValue(event) {
    setDefaultWord(event.target.value);
  }

  function setValuesFromApiResponse(response) {
    setReady(response.data[0]);
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
      <WordDefinition ready={ready} />
      <footer>
        This project was coded by Camila Avellaneda, is open-source on Github
        and hosted on Netlify
      </footer>
    </div>
  );
}

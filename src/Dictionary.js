import React, { useState } from "react";
import axios from "axios";
import WordDefinition from "./WordDefinition";
import Photos from "./Photos";

export default function Dictionary() {
  const [defaultWord, setDefaultWord] = useState("");
  let [ready, setReady] = useState(null);
  let [photos, setPhotos] = useState(null);
  useState("");

  function setDefaultValue(event) {
    setDefaultWord(event.target.value);
  }

  function setValuesFromApiResponse(response) {
    setReady(response.data[0]);
    console.log(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchForAWord(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${defaultWord}`)
      .then(setValuesFromApiResponse);

    let pexelsApiKey = `563492ad6f9170000100000101e9c4195d1341178e840d08b5a3981f`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(`https://api.pexels.com/v1/search?query=${defaultWord}&per_page=1`, {
        headers: headers,
      })
      .then(handlePexelsResponse);
  }

  return (
    <div className="App-content">
      <h1 className="App-header">Dictionary</h1>
      <h2>What word are you looking for?</h2>
      <form onSubmit={searchForAWord}>
        <input type="search" onChange={setDefaultValue}></input>
      </form>
      <WordDefinition ready={ready} />
      <Photos photos={photos} />
      <footer>
        This project was coded by Camila Avellaneda, is open-source on Github
        and hosted on Netlify.
      </footer>
    </div>
  );
}

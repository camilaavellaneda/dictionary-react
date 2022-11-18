import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function WordDefinition(props) {
  if (props.ready) {
    return (
      <div className="word-information">
        <div className="word-header"> {props.ready.word}</div>
        <h2>{props.word}</h2>
        <h3>{props.partofspeech}
        </h3>
        {props.ready.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic}/>
            </div>
          );
        })}
        {props.ready.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

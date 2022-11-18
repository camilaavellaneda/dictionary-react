import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function WordDefinition(props) {
  if (props.ready) {
    return (
      <div className="word-information">
        <section>
          <h2>{props.ready.word}</h2>
          {props.ready.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <section>
          {props.ready.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

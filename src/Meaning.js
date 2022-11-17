import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning-word">
      <h3>{props.meaning.partofspeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaning" key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

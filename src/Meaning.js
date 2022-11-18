import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning-word">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaning" key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}

              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

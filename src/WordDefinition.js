import React from "react";
import Meaning from "./Meaning";

export default function WordDefinition(props) {
  if (props.ready) {
    return (
      <div className="word-information">
        <div className="word-header"> {props.ready.word}</div>
        {props.ready.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}

        <div>Collage</div>
      </div>
    );
  } else {
    return null;
  }
}

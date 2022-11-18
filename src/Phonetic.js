import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio) {
    return (
      <div className="phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="listen-button"
        >
          Listen
        </a>
        <br />
        <div className="phonetic-text">{props.phonetic.text}</div>
      </div>
    );
  } else return null;
}

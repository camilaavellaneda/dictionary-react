import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <audio controls>
        <source src={props.phonetic.audio} type="audio/mpeg" />
      </audio>
      <br />
      {props.phonetic.text}
    </div>
  );
}

import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="photo-organization">
          {props.photos.map(function (photo, index) {
            return (
              <div className="individual-photo" key={index}>
                <a rel="noreferrer" target="_blank" href={photo.src.original}>
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="Collage"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

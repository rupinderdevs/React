import React from "react";
import "./style.scss";

function Youtubevideo(props) {
  return (
    <>
      <div className="test-video">
        <iframe
          width="100%"
          height="400"
          //   height={props.height}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={props.src}
          title={props.title}
          allowfullscreen
        />
      </div>
    </>
  );
}

export default Youtubevideo;

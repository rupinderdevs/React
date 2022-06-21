import React from "react";
import "./style.scss";

function Socialicons(props) {
  return (
      <div className="socialicons">
        {props.socialicons.map((element, key) => (
          <a href="/" key={key}>
            <img src={element.socialmedia} alt={element.alt} />{" "}
          </a>
        ))}
      </div>
  );
}
export default Socialicons;

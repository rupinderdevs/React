import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Socialicons(props) {
  return (
      <div className="socialicons">
        {props.socialicons.map((element, key) => (
          <Link to={element.link} key={key}>
            <img src={element.socialmedia} alt={element.alt} />{" "}
          </Link>
        ))}
      </div>
  );
}
export default Socialicons;
